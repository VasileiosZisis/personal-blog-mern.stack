import Joi from 'joi';

const blogpostSchema = Joi.object({
  image: Joi.string()
    .pattern(/[^\s]+(.*?).(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/)
    .required(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string().required(),
});

const validateBlogpost = (req, res, next) => {
  const { error } = blogpostSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    res.status(404);
    throw new Error('One or more fields are not a valid type');
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

export { validateBlogpost, validateImage };
