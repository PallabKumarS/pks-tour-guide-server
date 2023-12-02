const PackageModel = require("../../models/PackageModel");

const getTourPlans = async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const tourPlans = await PackageModel.findOne(query).select("tourPlan");
    res.send(tourPlans);
  } catch (e) {
    next(e);
  }
};

module.exports = getTourPlans;
