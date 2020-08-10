const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Promotion = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
    default: null,
  },
  parent_promotion: {
    type: String,
    required: false,
    default: null,
  },
  promotion_principal_item: {
    type: Boolean,
    required: false,
    default: false,
  },
});

mongoose.model("promotions", Promotion);
