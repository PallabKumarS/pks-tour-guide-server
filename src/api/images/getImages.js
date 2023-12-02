const PackageModel = require("../../models/PackageModel");

const getImages = async (req, res, next) => {
  try {
    const id = req.params.id;
    const imagesObj = await PackageModel.findOne({ _id: id }).select({
      images: 1,
      tourTitle: 1,
      price: 1,
    });

    res.send(imagesObj);
  } catch (e) {
    next(e);
  }
};

module.exports = getImages;
