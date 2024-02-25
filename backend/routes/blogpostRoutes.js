import express from 'express';
const router = express.Router();
import {
  getBlogposts,
  getBlogpostById,
} from '../controllers/blogpostController.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getBlogposts);
router.route('/:id').get(checkObjectId, getBlogpostById);

export default router;
