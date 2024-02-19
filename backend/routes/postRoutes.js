import express from 'express';
const router = express.Router();
import {
  getBlogposts,
  getBlogpostById,
  createBlogpost,
} from '../controllers/blogpostController.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getBlogposts);
router.route('/:id').get(checkObjectId, getBlogpostById);
router.route('/new').post(createBlogpost);

export default router;
