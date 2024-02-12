const mongoose = require('mongoose');

const Book = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [
            {
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",
            },
        ]
    },
    enquiry: {
        type: String,
        enum: ['Business', 'Private'],
        default: 'Business'
    },
    companyName: {
        String,
        phone: String
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        enum: ['Google', 'Website', 'Colleague', 'Marketing'],
        default: 'Google'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Book', Book);