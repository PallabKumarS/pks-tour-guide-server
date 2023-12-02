const GuideModel = require("../../models/GuideModel");

const getSingleGuide = async (req, res, next) => {
  try {
    const id = req.params.id;
    const guide = await GuideModel.findOne({ _id: id });
    res.send(guide);
  } catch (e) {
    next(e);
  }
};

module.exports = getSingleGuide;
