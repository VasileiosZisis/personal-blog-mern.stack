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
  blogpost.image.url = req.file.path;
  blogpost.image.filename = req.file.filename;
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
  const blogpost = await Blogpost.findById(id);
  blogpost.title = req.body.title;
  blogpost.subtitle = req.body.subtitle;
  blogpost.content = req.body.content;
  blogpost.category = req.body.category;
  blogpost.image - req.body.image;
  if (req.file) {
    blogpost.image.url = req.file.path;
    blogpost.image.filename = req.file.filename;
  }
  const updatedBlogpost = await blogpost.save();
  if (updatedBlogpost) {
    res.status(200).json(updatedBlogpost);
  } else {
    res.status(404);
    throw new Error('Resouce not found');
  }
});

export { getBlogposts, getBlogpostById, createBlogpost, updateBlogpost };
