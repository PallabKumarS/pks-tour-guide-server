const ReviewModel = require("../../models/ReviewModel");

const getReview = async (req, res, next) => {
  try {
    const id = req.params.id;

    const reviews = await ReviewModel.find({ postedTo: id });

    res.send(reviews);
  } catch (e) {
    next(e);
  }
};

module.exports = getReview;
