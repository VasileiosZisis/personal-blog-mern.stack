import express from 'express';
const router = express.Router();
import {
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
} from '../controllers/blogpostController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { registered, admin } from '../middleware/authMiddleware.js';
import { storage } from '../config/cloudinary.js';
import multer from 'multer';
import {
  validateBlogpost,
  validateImage,
  validateEditBlogpost,
} from '../middleware/schemas.js';

const upload = multer({ storage });

router
  .route('/')
  .get(getBlogposts)
  .post(
    registered,
    admin,
    upload.single('image'),
    validateImage,
    validateBlogpost,
    createBlogpost
  );
router.route('/anime').get(getAnimeBlogposts);
router.route('/books').get(getBookBlogposts);
router.route('/games').get(getGameBlogposts);
router.route('/tv').get(getTvBlogposts);
router.route('/latest').get(getLatestBlogposts);
router
  .route('/:id')
  .get(checkObjectId, getBlogpostById)
  .put(
    registered,
    admin,
    upload.single('image'),
    validateImage,
    validateEditBlogpost,
    updateBlogpost
  )
  .delete(registered, admin, deleteBlogpost);

export default router;
