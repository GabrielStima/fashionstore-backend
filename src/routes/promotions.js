const express = require("express");
const router = express.Router();
const PromotionController = require("../controllers/PromotionController");
const upload = require("../middleware/multer");

router.get("/promotions", PromotionController.list);
router.get("/promotions/parent", PromotionController.listParentPromotions);
router.get(
  "/promotions/parent/:id",
  PromotionController.listPromotionsByParent
);
router.get("/promotions/:id", PromotionController.listById);
router.post("/promotions", upload.single("img"), PromotionController.create);
router.put("/promotions/:id", PromotionController.update);
router.delete("/promotions/:id", PromotionController.delete);

module.exports = router;
