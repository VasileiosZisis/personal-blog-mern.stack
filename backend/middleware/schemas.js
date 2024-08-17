import BaseJoi from 'joi';
import sanitizeHtml from 'sanitize-html';
import * as cheerio from 'cheerio';

const extension = (joi) => ({
  type: 'string',
  base: joi.string(),
  messages: {
    'string.escapeHTML': '{{#label}} contains unsafe HTML tag',
  },
  rules: {
    escapeHTML: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [
            'blockquote',
            'p',
            'a',
            'ul',
            'ol',
            'li',
            'b',
            'em',
            'strike',
            'u',
            'br',
          ],
          allowedAttributes: {
            a: ['href', 'target', 'rel'],
          },
          allowedClasses: {
            '*': [
              'ql-align-right',
              'ql-align-center',
              'ql-align-justify',
              'ql-code-block',
              'ql-code-block-container',
              'ql-syntax',
              'ql-direction-rtl',
              'ql-font-serif',
              'ql-font-monospace',
              'ql-formula',
              'ql-indent-1',
              'ql-indent-2',
              'ql-indent-3',
              'ql-indent-4',
              'ql-indent-5',
              'ql-indent-6',
              'ql-indent-7',
              'ql-indent-8',
              'ql-size-small',
              'ql-size-large',
              'ql-size-huge',
            ],
          },
        });
        const cl = cheerio.load(clean, null, false);
        if (cl.html() !== value)
          return helpers.error('string.escapeHTML', { value });
        return cl.html();
      },
    },
  },
});

const Joi = BaseJoi.extend(extension);

const blogpostSchema = Joi.object({
  image: Joi.string()
    .pattern(/[^\s]+(.*?).(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/)
    .required(),
  title: Joi.string().max(45).required().escapeHTML(),
  subtitle: Joi.string().max(45).required().escapeHTML(),
  content: Joi.string().required().escapeHTML(),
  category: Joi.string().valid('game', 'tv', 'book', 'anime').required(),
});

const validateBlogpost = (req, res, next) => {
  const { error } = blogpostSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    res.status(404);
    throw new Error(msg);
  } else {
    next();
  }
};

const blogpostEditSchema = Joi.object({
  _id: Joi.any(),
  image: Joi.string()
    .allow('')
    .pattern(/[^\s]+(.*?).(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/)
    .required(),
  title: Joi.string().max(45).required().escapeHTML(),
  subtitle: Joi.string().max(45).required().escapeHTML(),
  content: Joi.string().required().escapeHTML(),
  category: Joi.string().valid('game', 'tv', 'book', 'anime').required(),
});

const validateEditBlogpost = (req, res, next) => {
  const { error } = blogpostEditSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    res.status(404);
    throw new Error(msg);
  } else {
    next();
  }
};

const upcomingSchema = Joi.object({
  image: Joi.string()
    .pattern(/[^\s]+(.*?).(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/)
    .required(),
  title: Joi.string()
    .valid('Reading', 'Watching', 'Playing')
    .required()
    .escapeHTML(),
  subtitle: Joi.string().required().escapeHTML(),
});

const validateUpcoming = (req, res, next) => {
  const { error } = upcomingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    res.status(404);
    throw new Error(msg);
  } else {
    next();
  }
};

const imageSchema = Joi.object({
  mimetype: Joi.string()
    .valid('image/jpeg', 'image/png', 'image/jpg', 'image/webp')
    .required(),
}).options({ allowUnknown: true });

const validateImage = (req, res, next) => {
  const { error } = imageSchema.validate(req.file);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    res.status(404);
    throw new Error('Image must be of type jpeg, jpg, png or webp');
  } else {
    next();
  }
};

export {
  validateBlogpost,
  validateImage,
  validateEditBlogpost,
  validateUpcoming,
};
