import asyncHandler from '../middleware/asyncHandler.js';
import Upcoming from '../models/upcoming.js';
import { cloudinary } from '../config/cloudinary.js';

const getUpcoming = asyncHandler(async (req, res) => {
  const upcomingDocs = await Upcoming.find({});
  res.json(upcomingDocs);
});

const createUpcoming = asyncHandler(async (req, res) => {
  const upcoming = new Upcoming(req.body);
  upcoming.image.url = req.file.path;
  upcoming.image.filename = req.file.filename;
  const createdUpcoming = await upcoming.save();
  if (createdUpcoming) {
    res.status(201).json(createdUpcoming);
  } else {
    res.status(404);
    throw new Error('Failed to create the card');
  }
});

const deleteUpcoming = asyncHandler(async (req, res) => {
  const upcoming = await Upcoming.findById(req.params.id);

  if (upcoming) {
    await cloudinary.uploader.destroy(upcoming.image.filename);
    await upcoming.deleteOne({ _id: upcoming._id });
    res.status(200).json({ message: 'Card deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getUpcoming, createUpcoming, deleteUpcoming };
