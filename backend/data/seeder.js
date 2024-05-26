import dotenv from 'dotenv';
import users from './users.js';
import User from '../models/userModel.js';
import connectDB from '../config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.insertMany(users);
    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
