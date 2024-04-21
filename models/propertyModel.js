import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    location: {
        type: String,
        required: [true, 'Please provide a location']
    },
    status: {
        type: String,
        enum: ['sold', 'available'],
        default: 'available'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Property', propertySchema);