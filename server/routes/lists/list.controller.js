import mongoose from 'mongoose';
import express from 'express';
import WishList from './list';
import Item from './item/item';

exports.selectAll = (req, res, next) => {
    WishList.find({}, (err, data) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: data
        });
    });
};

exports.selectById = (req, res, next) => {
    WishList.findById(req.params['id']).exec((err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};

exports.insert = (req, res, next) => {

    let wishlist = new WishList(req.body);
    wishlist.save({}, (err, results) => {
        if (err) next(err);

        res.status(200).json({
            message: 'Success',
            data: results
        });
    })
};


/**
 * Adds an item to the list.
 *
 * @param      {<type>}    req     The request
 * @param      {<type>}    res     The resource
 * @param      {Function}  next    The next
 * @return     {<type>}    { description_of_the_return_value }
 */
exports.addItem = (req, res, next) => {
    console.log(req.body);

    let item = new Item(req.body.item).save((err, item) => {
        console.log("ITEM ID", item._id);
        let query = {"name": "Wishlist 1"},
            options = {"new": true};
    // let listId = new ObjectId(req.body.list._id);
    // let item = {
    //     "name": req.body.item.name,
    //     "url": req.body.item.url,
    //     "addedBy": req.body.item.addedBy._id
    // } 
    // 
    
    // -------------------------------------------------------
    // WishList.findByIdAndUpdate(req.body.lid, (err, list) => {

    // })


    WishList
        .findByIdAndUpdate(`${req.body.list._id}`, {new: true}, {$push: {"items": item._id}})
        .populate("ownedBy")
        .populate("items")
        // .populate("items.addedBy")
        // .populate("items.purchasedBy")
        .exec((err, list) => {

            if (err) {
                console.log(err);
                next(err);  
            } 

            console.log("LIST", list);
            console.log("ITEM", req.body.item);
            
     
            res.status(200).json({
                message: 'Success',
                data: list
            });

            // list.items.set({$push: {"items": item._id}}).exec(
            //     (err2, updatedList) => {
            //         if (err2) {
            //             console.log(err2);
            //             next(err2);
            //         }

            //         console.log("UPDATED LIST", updatedList);

            // });
    });
    });

    // WishList.findByIdAndUpdate(listId, {$push: {"items": req.body.item}}, {"new": true}, function(err, updatedList) {
    //     if (!err) {
    //         // WishList.find({}).populate('items.addedBy').exec((error, items) => {
    //             // console.log(JSON.stringify(items));
    //             res.status(200).json({
    //                 message: "Successfully added Item to List",
    //                 data: updatedList
    //             });
    //         // })
    //     } else {
    //         console.log(err);
    //         next(err);
    //     }
    // });
}