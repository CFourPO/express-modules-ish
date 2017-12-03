import mongoose from 'mongoose';
import Item from './item/item';
// import Bookmark from '../bookmark/bookmark';

let wishlistSchema = new mongoose.Schema({
    name: {type: String, required: true },
    ownedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'item'}]
    // items: [{
    //     name: String, 
    //     url: String,
    //     addedBy: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }, 
    //     purchasedBy: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }]
    // }]
}, {
    timestamps: true,
    minimize: false
});


let WishList = mongoose.model('wishlist', wishlistSchema);

export default WishList;

