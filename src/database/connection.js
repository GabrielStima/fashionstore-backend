const mongoose = require("mongoose");

async function connectMongoDB() {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect("mongodb://localhost/fashionstore", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection success"))
    .catch((err) => console.log("Connection fail", err));
}

module.exports = connectMongoDB;
