import mongoose from 'mongoose';
const { Schema } = mongoose;

let itemSchema = new Schema({
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;