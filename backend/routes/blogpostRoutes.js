import express from 'express';
const router = express.Router();
import {
  getBlogposts,
  getBlogpostById,
  createBlogpost,
  updateBlogpost,
} from '../controllers/blogpostController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { registered, admin } from '../middleware/authMiddleware.js';
import { storage } from '../config/cloudinary.js';
import multer from 'multer';

const upload = multer({ storage });

router
  .route('/')
  .get(getBlogposts)
  .post(upload.single('image'), registered, admin, createBlogpost);
router
  .route('/:id')
  .get(checkObjectId, getBlogpostById)
  .put(upload.single('image'), registered, admin, updateBlogpost);

export default router;
