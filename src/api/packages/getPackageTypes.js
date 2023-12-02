const PackageModel = require("../../models/PackageModel");

const getPackageTypes = async (req, res, next) => {
  try {
    const type = req.query.type;
    const result = await PackageModel.find({ tourType: type });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getPackageTypes;
