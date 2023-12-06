const ReviewModel = require("../../models/ReviewModel");

const deleteReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const review = req.body;
    const result = await ReviewModel.findOneAndDelete({ _id: id });
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
};

module.exports = deleteReview;
