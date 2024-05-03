import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UpcomingSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: {
    url: { type: String, required: true },
    filename: { type: String, required: true },
  },
});

const Upcoming = model('Upcoming', UpcomingSchema);

export default Upcoming;
