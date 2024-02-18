import express from 'express';
import dotenv from 'dotenv';
import 'dotenv/config';
dotenv.config();
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';

const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('index');
});

app.use('/blog', postRoutes);

app.listen(port, () => console.log(`listening ${port}`));
