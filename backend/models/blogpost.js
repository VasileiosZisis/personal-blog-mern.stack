import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const BlogpostSchema = new Schema(
  {
    title: String,
    subtitle: String,
    post: String,
  },
  { timestamps: true }
);

module.exports = model('Blogpost', BlogpostSchema);
