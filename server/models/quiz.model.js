const mongoose = require('mongoose');

const Quizz = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    criteria: {
        type: Map,
        of: Number
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Quizz', Quizz);


