import mongoose from 'mongoose';
// import Bookmark from '../bookmark/bookmark';

let itemSchema = new mongoose.Schema({
        name: String,
        url: String
    }, {
    timestamps: true,
    minimize: false
});


let Item = mongoose.model('item', itemSchema);

export default Item;

