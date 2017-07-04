const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    details: {
        type: String,
        required: false,
        trim: true
    }
});

module.exports = {Todo}