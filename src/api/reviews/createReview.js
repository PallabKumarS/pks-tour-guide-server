const ReviewModel = require("../../models/ReviewModel");

const createReview = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const review = req.body;
    const result = await ReviewModel.create(review);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
};

module.exports = createReview;
