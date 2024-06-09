import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
dotenv.config();
import connectDB from './config/db.js';
import blogpostRoutes from './routes/blogpostRoutes.js';
import userRoutes from './routes/userRoutes.js';
import upcomingRoutes from './routes/upcomingRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';

const port = process.env.PORT;

connectDB();

const app = express();

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        imgSrc: [
          "'self'",
          'blob:',
          'data:',
          'https://res.cloudinary.com/',
          'www.googletagmanager.com',
        ],
        scriptSrc: ["'unsafe-inline'", "'self'", 'www.googletagmanager.com'],
        connectSrc: ['www.googletagmanager.com'],
      },
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ExpressMongoSanitize());
app.use(cookieParser());

app.use('/api/blogposts', blogpostRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upcoming', upcomingRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening ${port}`));
