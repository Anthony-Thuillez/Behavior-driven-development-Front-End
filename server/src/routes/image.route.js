import express from 'express';
import multer from 'multer';
const { writeFileSync } = require('fs');

import RobberyModel from '../models/robbery.model';
import path from 'path';

/**
 * @desc Setup express router
 */
const router = express.Router();

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('myImage');

const storage = multer.diskStorage({
    // destination: path.resolve(__dirname, '../../public/uploads'),
    destination: './public/uploads',
    // destination: (req, file, cb) => {
    //     cb(null, 'public/uploads');
    // },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
        cb(null, true);
    } else {
        // Reject storing file
        cb(null, false);
    }
};


router.post('/api/upload', (req, res) => {

    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        console.log(req.file);
        writeFileSync(`./public/uploads/${req.file.originalname}`, req.file.buffer);
        return res.status(200).send(req.file);
    });

});

export default router;