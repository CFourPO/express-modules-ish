import mongoose from 'mongoose';
import Bookmark from '../bookmark/bookmark';

let categorySchema = new mongoose.Schema({
    name: {type: String, required: true },
    children: [String]
}, {
    timestamps: true,
    minimize: false
});

let Category = mongoose.model('category', categorySchema);

export default Category;