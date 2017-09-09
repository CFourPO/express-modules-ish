import mongoose from 'mongoose';
import express from 'express';
import Bookmark from '../bookmark/bookmark';
import Category from './category';

exports.selectAll = (req, res, next) => {
    Category.find({}, (err, results) => {
        if (err) next(err);

        res.status(200).json({
            data: results
        });
    });
};

exports.selectById = (req, res, next) => {
    Category.findById(req.params['id']).exec((err, results) => {
        if (err) next(err);

        res.status(200).json({
            data: results
        });
    });
}

const appendBookmark = (category, bookId) => {
    return new Promise((resolve, reject) => {
        if (category.children.indexOf(bookId) < 0) {
            // reject("Bookmark is already included in this category");
            category.children.push(bookId);
        } else {
            console.log("bookmark has already been included in this category");
        }

        resolve(category);
    });
};

exports.addChild = (req, res, next) => {
    let catName = req.body.name,
        bookName = req.body.bookName;


    let query = Category.findOne({
        name: catName
    }).exec();

    query.then(category => {
        if (category.children.indexOf(bookName) < 0) {
            category.children.push(bookName);
        }
        return category;
    }).then(data => {
        data.save((err, result) => {
            if (err) next(err);
            res.status(200).json({
                data: result
            });
        });
    });
}

exports.insert = (req, res, next) => {
    let category = new Category(req.body);
    category.save({}, (err, results) => {
        if (err) next(err);

        res.status(200).json({
            data: results
        });
    })
}


// const router = express.Router();

// router.get('/', (req, res, next) => {
//     Bookmark.find({}, (err, data) => {
//         if (err) {
//             next(err);
//         }

//         res.status(200).json({message: 'Success', data: data});
//     });
// });

// router.post('/', (req, res, next) => {
//     // console.log(req.body);
//     // console.log(JSON.stringify(req.body));
//     // if (!req.body) {
//     //     res.status(404).json({error: "Must Provide a body in POST"});
//     //     return;
//     // }

//     let bookmark = new Bookmark(req.body);

//     bookmark.save((err, data) => {
//         if (err) {
//             console.log(err.message);
//             next(err);
//             return;
//             // res.status(err.statusCode || 500).json({error: err});
//         }

//         res.status(200).json({message: 'Saved Bookmark!', data: data});
//     });
// });

// export default router;