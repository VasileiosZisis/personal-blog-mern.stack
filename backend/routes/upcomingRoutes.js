import express from 'express';
const router = express.Router();
import {
  getUpcoming,
  createUpcoming,
  deleteUpcoming,
} from '../controllers/upcomingController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { registered, admin } from '../middleware/authMiddleware.js';
import { storage } from '../config/cloudinary.js';
import multer from 'multer';
import { validateUpcoming, validateImage } from '../middleware/schemas.js';

const upload = multer({ storage });

router
  .route('/')
  .get(getUpcoming)
  .post(
    registered,
    admin,
    upload.single('image'),
    validateImage,
    validateUpcoming,
    createUpcoming
  );

router.route('/:id').delete(registered, admin, checkObjectId, deleteUpcoming);

export default router;
