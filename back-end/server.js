import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler} from './middleware/errorMiddleware.js';
import uploadRoutes from './routes/uploadRoutes.js';
import path from 'path';
import connectDB from './config/db.js';
dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie parser middleware
app.use(cookieParser());

//Whenever we go to api/products this route, it is going to productRoutes file.
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>res.send({ clientId:
process.env.PAYPAL_CLIENT_ID }));

const __dirname = path.resolve(); //set __dirname to current directory
app.use('/uploads',express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, '/front-end/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running');
    });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`))
