import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const BlogpostSchema = new Schema(
  {
    title: String,
    post: String,
  },
  { timestamps: true }
);

const Blogpost = model('Blogpost', BlogpostSchema);

export default Blogpost;
