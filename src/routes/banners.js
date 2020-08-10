const express = require("express");
const router = express.Router();
const BannerController = require("../controllers/BannerController");
const upload = require("../middleware/multer");

router.get("/banners", BannerController.list);
router.get("/banners/:category", BannerController.listByCategory);
router.post("/banners", upload.single("img"), BannerController.create);
router.put("/banners/:id", BannerController.update);
router.delete("/banners/:id", BannerController.delete);

module.exports = router;
