import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const BlogpostSchema = new Schema(
  {
    image: {
      url: String,
      filename: String,
    },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Blogpost = model('Blogpost', BlogpostSchema);

export default Blogpost;
