import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

/* Imports routes */

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
mongoose.connect(`mongodb+srv://${process.env.BDD_NAME}:${process.env.BDD_PWD}@cluster0-hlvls.mongodb.net/${process.env.BDD_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
);
mongoose.Promise = global.Promise;

/**
 * @desc Use bodyParser middleware
 * @desc Force parse to object include in other object
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**
 * @desc Initialize routes
 */
app.use(cors());

/**
* @desc Error handling middleware
* @return status code of (422 - Unprocessable Entity) if (*)Route HTTP request failed
*/
app.use((err, req, res, next) => {
    res.status(422).send({
        error: err.message,
        keyValue: err.keyValue,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));