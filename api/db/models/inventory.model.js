const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
    trim: true,
  },
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = { Inventory };
