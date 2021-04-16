const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  _id: String,
  name: String,
  type: String,
  value: Number,
  rating: Number,
  thumbnail: String,
  createdAt: Date,
  updatedat: Date,
}, { timestamps: true, collection: 'products' });

const Product = model('Product', ProductSchema);

module.exports = Product;