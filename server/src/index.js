import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

/* Imports routes */
import robberyRoute from './routes/robbery.route';
import imageRoute from './routes/image.route';

/**
 * @desc Setup .env config
 */
dotenv.config();

/**
 * @desc Setup express app
 */
const app = express();

/**
 * @desc Connection to mongodb
 */
mongoose.connect(`mongodb+srv://${process.env.BDD_USERNAME}:${process.env.BDD_PWD}@cluster0-a5tvb.mongodb.net/${process.env.BDD_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
);
mongoose.Promise = global.Promise;

/**
 * @desc Use bodyParser middleware
 * @desc Force parse to object include in other object
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public/uploads', express.static('public/uploads'));


/**
 * @desc Initialize routes
 */
app.use(cors());
app.use(robberyRoute);
app.use(imageRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));