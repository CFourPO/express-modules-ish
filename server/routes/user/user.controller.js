import mongoose from 'mongoose';
import express from 'express';
import User from './user';

exports.selectAll = (req, res, next) => {
    User.find({}, (err, data) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: data
        });
    });
};

exports.selectById = (req, res, next) => {
    User.findById(req.params['id']).exec((err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};

exports.insert = (req, res, next) => {
    let user = new User(req.body);
    user.save({}, (err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};