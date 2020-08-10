const mongoose = require("mongoose");
require("../models/Clothes");
const Clothes = mongoose.model("clothes");

module.exports = {
  create: async (request, response) => {
    try {
      const newClothes = {
        title: request.body.title,
        value: request.body.value,
        size: request.body.size === "" ? null : request.body.size.split(","),
        description: request.body.description,
        category: request.body.category,
        promotion_id: request.body.promotion_id,
        img: `${process.env.API_URL_IMG}${request.filename}`,
      };

      const clothes = await new Clothes(newClothes).save();
      response.status(201).json(clothes);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const ClothesList = await Clothes.find();
      response.json(ClothesList);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listByCategory: async (request, response) => {
    try {
      const clothes = await Clothes.find({
        category: request.params.category,
      });
      response.json(clothes);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listByPromotion: async (request, response) => {
    try {
      const clothes = await Clothes.find({
        promotion_id: request.params.promotionId,
      });
      response.json(clothes);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listById: async (request, response) => {
    try {
      const clothes = await Clothes.findOne({
        _id: request.params.id,
      });
      response.json(clothes);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    try {
      const clothes = await Clothes.findOne({
        _id: request.params.id,
      });

      clothes.title = request.body.title;
      clothes.value = request.body.value;
      clothes.PP = request.body.PP;
      clothes.P = request.body.P;
      clothes.M = request.body.M;
      clothes.G = request.body.G;
      clothes.GG = request.body.GG;
      clothes.description = request.body.description;
      clothes.category = request.body.category;
      clothes.promotion_id = request.body.promotion_id;

      const clothesUpdate = await clothes.save();
      response.json(clothesUpdate);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    try {
      await Clothes.deleteOne({ _id: request.params.id });
      response.sendStatus(204);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
