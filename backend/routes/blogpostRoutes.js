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

router.route('/').get(getBlogposts);
router.route('/new').post(registered, admin, createBlogpost);
router
  .route('/:id')
  .get(checkObjectId, getBlogpostById)
  .put(registered, admin, updateBlogpost);

export default router;
