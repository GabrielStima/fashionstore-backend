const { request } = require("express");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/img"));
  },
  filename: function (req, file, cb) {
    const filename =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);

    req.filename = filename;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
