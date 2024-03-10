import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
dotenv.config();
import connectDB from './config/db.js';
import blogpostRoutes from './routes/blogpostRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/blogposts', blogpostRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening ${port}`));
