const PackageModel = require("../../models/PackageModel");

const getPackages = async (req, res, next) => {
  try {
    const limit = req.query.limit;
    if (limit) {
      const result = await PackageModel.find().limit(limit).exec();
      res.send(result);
    }
    const result = await PackageModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getPackages;
