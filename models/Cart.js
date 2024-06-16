// models/Cart.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  image: String,
  new_price: Number,
  old_price: Number,
  size: String,
  noOfDays: String,
  quantity: Number,
  phoneNumber: Number,
  postalCode: Number,
  streetAddress: String,
  townCity: String,
  useBillingAddress: Boolean,
});

const cartSchema = new Schema({
  userId: {
    type: String, // Assuming userId is stored as a string
    required: true
  },
  items: [cartItemSchema],
  totalAmount: {
    type: Number,
    default: 0
  }
});

export default model('Cart', cartSchema);
