import express from 'express';
import RobberyModel from '../models/robbery.model';

/**
 * @desc Setup express router
 */
const router = express.Router();

/**
 * @desc GET a (title, context, team, goal and details) from all robberies from the Database
 * @return status code of (200 - OK) if HTTP request succeed
 */
router.get('/api/robberies', (req, res, next) => {
    var query = RobberyModel.find({}).select('title context team goal details1Val details1Text details2Val details2Text details3Val details3Text _id');
    query.exec(function (err, robberies) {
        if (err) return next(err);
        res.status(200).send(robberies);
    });
});

/**
 * @desc POST a new robbery in the database
 * @return status code of (201 - Created) if HTTP request succeed
 */
router.post('/api/robbery', (req, res, next) => {
    RobberyModel.create(req.body).then(robbery => {
        res.status(201).send(robbery);
    }).catch(next);
});

/**
 * @desc UPDATE a robbery from the Database
 * @return status code of (200 - OK) if HTTP request succeed
 */
router.put('/api/robbery/:id', (req, res, next) => {
    RobberyModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        RobberyModel.findOne({ _id: req.params.id }).then(robbery => {
            res.status(200).send(robbery);
        });
    }).catch(next);
});

/**
 * @desc DELETE a robbery from the database
 * @return status code of (200 - OK) if HTTP request succeed
 */
router.delete('/api/robbery/:id', (req, res, next) => {
    RobberyModel.findByIdAndRemove({ _id: req.params.id }).then(robbery => {
        res.status(200).send(robbery);
    }).catch(next);
});

export default router;