//"use strict"
    // Shorten Text
    /*bookSchema.methods.truncText = function (length) {
        return this.description.substring(0, length);
    }; */


const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  category: String,
  description: String,
  author: String,
  content: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Book', bookSchema);