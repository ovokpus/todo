var mongoose = require("mongoose");
const { Schema } = mongoose;

let itemSchema = new Schema({
    description: { 
        type: String, 
        required: [true, 'Must write a description for Todo item'] },
    date: { type: Date, default: Date.now }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;