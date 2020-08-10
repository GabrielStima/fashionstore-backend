const mongoose = require("mongoose");
require("../models/Banner");
const Banner = mongoose.model("banners");

module.exports = {
  create: async (request, response) => {
    try {
      const newBanner = {
        category: request.body.category,
        img: `${process.env.API_URL_IMG}${request.filename}`,
      };
      const banner = await new Banner(newBanner).save();
      response.status(201).json(banner);
    } catch (err) {
      console.log(err);
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const bannerList = await Banner.find();
      response.json(bannerList);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listByCategory: async (request, response) => {
    try {
      const banner = await Banner.findOne({
        category: request.params.category,
      });
      response.json(banner);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    try {
      const banner = await Banner.findOne({ _id: request.params.id });

      banner.category = request.body.category;

      const bannerUpdate = await banner.save();
      response.json(bannerUpdate);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    try {
      await Banner.deleteOne({ _id: request.params.id });
      response.sendStatus(204);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
