const GuideModel = require("../../models/GuideModel");

const getGuides = async (req, res, next) => {
  try {
    const result = await GuideModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getGuides;
