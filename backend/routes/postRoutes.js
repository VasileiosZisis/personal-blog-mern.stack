import express from 'express';
import Blogpost from '../models/blogpost.js';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const blogpostDocs = await Blogpost.find({});
    res.json(blogpostDocs);
  })
);

router.post(
  '/new',
  asyncHandler(async (req, res) => {
    const { title, subtitle, content, category } = req.body;
    const blogpostDoc = await Blogpost.create({
      title,
      subtitle,
      content,
      category,
    });
    res.json(blogpostDoc);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const blogpostDoc = await Blogpost.findById(req.params.id);
    if (blogpostDoc) {
      return res.json(blogpostDoc);
    }
    res.status(404).json({ message: 'Post not found' });
  })
);

export default router;
