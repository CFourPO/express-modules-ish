import mongoose from 'mongoose';
import express from 'express';
import User from './user';

const router = express.Router();

router.get('/', (req, res, next) => {
    User.find({}, (err, data) => {
        if (err) {
            next(err);
        }

        res.status(200).json({message: 'Success', data: data});
    });
});

router.post('/', (req, res, next) => {

    let user = new User(req.body);

    user.save((err, data) => {
        if (err) {
            console.log(err.message);
            next(err);
            return;
            // res.status(err.statusCode || 500).json({error: err});
        }

        res.status(200).json({message: 'Saved User!', data: data});
    });
});

export default router;