const mongoose = require("mongoose");

async function connectMongoDB() {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection success"))
    .catch((err) => console.log("Connection fail", err));
}

module.exports = connectMongoDB;
