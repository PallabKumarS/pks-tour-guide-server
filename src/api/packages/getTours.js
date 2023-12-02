const PackageModel = require("../../models/PackageModel");

const getTours = async (req, res, next) => {
  try {
    const uniqueTourTypes = await PackageModel.distinct("tourType");
    const result = uniqueTourTypes.map(async (tourType) => {
      const uniqueTourTypeImage = await PackageModel.findOne({
        tourType,
      }).select("tourTypeImage");
      return { tourType, tourTypeImage: uniqueTourTypeImage.tourTypeImage };
    });

    const finalResult = await Promise.all(result);
    res.send(finalResult);
  } catch (err) {
    next(err);
  }
};

module.exports = getTours;
