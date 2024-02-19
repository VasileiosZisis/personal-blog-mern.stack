import asyncHandler from '../middleware/asyncHandler.js';
import Blogpost from '../models/blogpost.js';

const getBlogposts = asyncHandler(async (req, res) => {
  const blogpostDocs = await Blogpost.find({});
  res.json(blogpostDocs);
});

const createBlogpost = asyncHandler(async (req, res) => {
  const { title, subtitle, content, category } = req.body;
  const blogpostDoc = await Blogpost.create({
    title,
    subtitle,
    content,
    category,
  });
  res.json(blogpostDoc);
});

const getBlogpostById = asyncHandler(async (req, res) => {
  const blogpostDoc = await Blogpost.findById(req.params.id);
  if (blogpostDoc) {
    return res.json(blogpostDoc);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getBlogposts, getBlogpostById, createBlogpost };
