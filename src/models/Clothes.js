const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clothes = new Schema({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  promotion_id: {
    type: Number,
    required: false,
    default: 0,
  },
  img: {
    type: String,
    required: true,
  },
});

mongoose.model("clothes", Clothes);
