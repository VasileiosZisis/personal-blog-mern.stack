import express from 'express';
import dotenv from 'dotenv';
import 'dotenv/config';
dotenv.config();
import connectDB from './config/db.js';
import blogpostRoutes from './routes/blogpostRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/blogposts', blogpostRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening ${port}`));
