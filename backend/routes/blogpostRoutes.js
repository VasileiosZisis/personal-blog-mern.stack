import express from 'express';
const router = express.Router();
import {
  getBlogposts,
  getBlogpostById,
  createBlogpost,
} from '../controllers/blogpostController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { registered, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getBlogposts);
router.route('/new').post(registered, admin, createBlogpost);
router.route('/:id').get(checkObjectId, getBlogpostById);

export default router;
