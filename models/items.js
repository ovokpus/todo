var mongoose = require("mongoose");
const { Schema } = mongoose;

let itemSchema = new Schema({
    description: {
        type: String,
        required: [true, 'Must write a description for Todo item.'],
        minLength: [3, 'Description must be at least 3 characters long.']
    },
    date: { type: Date, default: Date.now }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;