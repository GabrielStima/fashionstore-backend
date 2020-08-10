const mongoose = require("mongoose");
require("../models/Promotion");
const Promotion = mongoose.model("promotions");

module.exports = {
  create: async (request, response) => {
    try {
      const newPromotion = {
        title: request.body.title,
        parent_promotion: request.body.parent_promotion,
        promotion_principal_item: request.body.promotion_principal_item,
        img: request.filename
          ? `http://localhost:3333/img/${request.filename}`
          : null,
      };

      const promotion = await new Promotion(newPromotion).save();
      response.status(201).json(promotion);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const promotion = await Promotion.find();
      response.json(promotion);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listParentPromotions: async (request, response) => {
    try {
      const promotion = await Promotion.find({ parent_promotion: null });
      response.json(promotion);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listPromotionsByParent: async (request, response) => {
    try {
      const promotion = await Promotion.find({
        parent_promotion: request.params.id,
      });
      response.json(promotion);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listById: async (request, response) => {
    try {
      const promotion = await Promotion.findOne({ _id: request.params.id });
      response.json(promotion);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    try {
      const promotion = await Promotion.findOne({ _id: request.params.id });

      promotion.title = request.body.title;
      promotion.category = request.body.category;

      const promotionUpdate = await promotion.save();
      response.json(promotionUpdate);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    try {
      await Promotion.deleteOne({ _id: request.params.id });
      response.sendStatus(204);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
