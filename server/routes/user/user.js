import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    dateCreated: {type: Date, default: Date.now }
});

let User = mongoose.model('User', userSchema);

export default User;