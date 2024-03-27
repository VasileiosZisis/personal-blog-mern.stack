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
  if (createdBlogpost) {
    res.status(201).json(createdBlogpost);
  } else {
    res.status(404);
    throw new Error('Failed to create the blogpost');
  }
});

const updateBlogpost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blogpost = await Blogpost.findByIdAndUpdate(id, { ...req.body });
  const updatedBlogpost = await blogpost.save();
  if (updatedBlogpost) {
    res.json(updatedBlogpost);
  } else {
    res.status(404);
    throw new Error('Resouce not found');
  }
});

export { getBlogposts, getBlogpostById, createBlogpost, updateBlogpost };
