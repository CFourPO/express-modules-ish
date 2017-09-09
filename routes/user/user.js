import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    dateCreated: {type: Date, default: Date.now }
});

let User = mongoose.model('user', schema);

export default User;