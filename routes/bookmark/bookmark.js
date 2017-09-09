import mongoose from 'mongoose';

let bookmarkSchema = new mongoose.Schema({
    name: {type: String, required: true },
    url: {type: String, required: true },
    category: [String],
    
}, {
    timestamps: true
});

let Bookmark = mongoose.model('bookmark', bookmarkSchema);

export default Bookmark;