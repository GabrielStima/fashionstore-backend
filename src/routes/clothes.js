const express = require("express");
const router = express.Router();
const ClothesController = require("../controllers/ClothesController");
const upload = require("../middleware/multer");

router.get("/clothes", ClothesController.list);
router.get("/clothes/category/:category", ClothesController.listByCategory);
router.get(
  "/clothes/promotion/:promotionId",
  ClothesController.listByPromotion
);
router.get("/clothes/:id", ClothesController.listById);
router.post("/clothes", upload.single("img"), ClothesController.create);
router.put("/clothes/:id", ClothesController.update);
router.delete("/clothes/:id", ClothesController.delete);

module.exports = router;
