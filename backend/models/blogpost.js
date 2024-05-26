import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
const { Schema, model } = mongoose;
mongoose.plugin(slug);

const BlogpostSchema = new Schema(
  {
    image: {
      url: { type: String, required: true },
      filename: { type: String, required: true },
    },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, slug: 'title' },
  },
  { timestamps: true }
);

const Blogpost = model('Blogpost', BlogpostSchema);

export default Blogpost;
