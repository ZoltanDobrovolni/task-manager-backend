const mongoose = require('mongoose');

const task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = task;
