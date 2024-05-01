import express from 'express';
const router = express.Router();
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  // getUsers,
  // deleteUser,
  // getUserById,
  // updateUser,
} from '../controllers/userController.js';
import { registered, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
// .get(registered, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router
  .route('/profile')
  .get(registered, getUserProfile)
  .put(registered, updateUserProfile);
// router
//   .route(':/id')
//   .delete(registered, admin, deleteUser)
//   .get(registered, admin, getUserById)
//   .put(registered, admin, updateUser);

export default router;
