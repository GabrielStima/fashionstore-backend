const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Banner = new Schema({
  category: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

mongoose.model("banners", Banner);
