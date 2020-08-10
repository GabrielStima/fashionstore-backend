require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const banners = require("./routes/banners");
const clothes = require("./routes/clothes");
const promotions = require("./routes/promotions");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("src/public"));

app.use(banners);
app.use(clothes);
app.use(promotions);

module.exports = app;
