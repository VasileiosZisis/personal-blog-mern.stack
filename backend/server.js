import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Blogpost from './models/blogpost.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/my-blog');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('index');
});

app.get('/blog', async (req, res) => {
  res.json(await Blogpost.find());
});

app.post('/blog/new', async (req, res) => {
  const { title, content } = req.body;
  const blogpostDoc = await Blogpost.create({
    title,
    content,
  });
  res.json(blogpostDoc);
});

app.listen(port, () => console.log(`listening ${port}`));
