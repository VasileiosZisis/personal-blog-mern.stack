import asyncHandler from '../middleware/asyncHandler.js';
import Blogpost from '../models/blogpost.js';
import { cloudinary } from '../config/cloudinary.js';

const getUploadedImage = (file) => ({
  url: file?.path || file?.secure_url || file?.url,
  filename: file?.filename || file?.public_id,
});

const getBlogposts = asyncHandler(async (req, res) => {
  const limit = 15;
  const page = Number(req.query.pageNumber || 1);

  const keyword = req.query.keyword
    ? {
        $or: [
          { title: { $regex: req.query.keyword, $options: 'i' } },
          { subtitle: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  const total = await Blogpost.countDocuments({ ...keyword });

  const blogpostDocs = await Blogpost.find({ ...keyword })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({ blogpostDocs, page, pages: Math.ceil(total / limit) });
});

const getLatestBlogposts = asyncHandler(async (req, res) => {
  const blogpostDocs = await Blogpost.find({}).sort({ createdAt: -1 }).limit(9);
  res.json(blogpostDocs);
});

const getAnimeBlogposts = asyncHandler(async (req, res) => {
  const limit = 15;
  const page = Number(req.query.pageNumberAnim || 1);
  const total = await Blogpost.countDocuments({ category: 'anime' });
  const blogpostDocs = await Blogpost.find({
    category: 'anime',
  })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({ blogpostDocs, page, pages: Math.ceil(total / limit) });
});

const getBookBlogposts = asyncHandler(async (req, res) => {
  const limit = 15;
  const page = Number(req.query.pageNumberBook || 1);
  const total = await Blogpost.countDocuments({ category: 'book' });
  const blogpostDocs = await Blogpost.find({ category: 'book' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({ blogpostDocs, page, pages: Math.ceil(total / limit) });
});

const getGameBlogposts = asyncHandler(async (req, res) => {
  const limit = 15;
  const page = Number(req.query.pageNumberGame || 1);
  const total = await Blogpost.countDocuments({ category: 'game' });
  const blogpostDocs = await Blogpost.find({ category: 'game' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({ blogpostDocs, page, pages: Math.ceil(total / limit) });
});

const getTvBlogposts = asyncHandler(async (req, res) => {
  const limit = 15;
  const page = Number(req.query.pageNumberTV || 1);
  const total = await Blogpost.countDocuments({ category: 'tv' });
  const blogpostDocs = await Blogpost.find({ category: 'tv' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  res.json({ blogpostDocs, page, pages: Math.ceil(total / limit) });
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
  const uploadedImage = getUploadedImage(req.file);
  blogpost.image.url = uploadedImage.url;
  blogpost.image.filename = uploadedImage.filename;
  const createdBlogpost = await blogpost.save();
  if (createdBlogpost) {
    res.status(201).json(createdBlogpost);
  } else {
    res.status(404);
    throw new Error('Failed to create the blogpost');
  }
});

const updateBlogpost = asyncHandler(async (req, res) => {
  const blogpost = await Blogpost.findById(req.params.id);
  blogpost.title = req.body.title;
  blogpost.subtitle = req.body.subtitle;
  blogpost.content = req.body.content;
  blogpost.category = req.body.category;
  if (req.file) {
    const uploadedImage = getUploadedImage(req.file);
    blogpost.image.url = uploadedImage.url;
    blogpost.image.filename = uploadedImage.filename;
  }
  const updatedBlogpost = await blogpost.save();
  if (updatedBlogpost) {
    res.status(200).json(updatedBlogpost);
  } else {
    res.status(404);
    throw new Error('Resouce not found');
  }
});

const deleteBlogpost = asyncHandler(async (req, res) => {
  const blogpost = await Blogpost.findById(req.params.id);

  if (blogpost) {
    await cloudinary.uploader.destroy(blogpost.image.filename);
    await blogpost.deleteOne({ _id: blogpost._id });
    res.status(200).json({ message: 'Blogpost deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export {
  getBlogposts,
  getLatestBlogposts,
  getAnimeBlogposts,
  getBookBlogposts,
  getGameBlogposts,
  getTvBlogposts,
  getBlogpostById,
  createBlogpost,
  updateBlogpost,
  deleteBlogpost,
};
