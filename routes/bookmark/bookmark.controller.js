import mongoose from 'mongoose';
import express from 'express';
import Bookmark from './bookmark';

exports.selectAll = (req, res, next) => {
    Bookmark.find({}, (err, data) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: data
        });
    });
};

exports.selectById = (req, res, next) => {
    Bookmark.findById(req.params['id']).exec((err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};

exports.insert = (req, res, next) => {
    let bookmark = new Bookmark(req.body);
    bookmark.save({}, (err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};