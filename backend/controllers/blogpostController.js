import asyncHandler from '../middleware/asyncHandler.js';
import Blogpost from '../models/blogpost.js';

const getBlogposts = asyncHandler(async (req, res) => {
  const blogpostDocs = await Blogpost.find({});
  res.json(blogpostDocs);
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

const createBlogpost = asyncHandler(async (req, res) => {
  const blogpost = new Blogpost(req.body);
  const createdBlogpost = await blogpost.save();
  res.status(201).json(createdBlogpost);
});

export { getBlogposts, getBlogpostById, createBlogpost };
