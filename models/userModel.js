import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    }
});

export default mongoose.model('User', userSchema);