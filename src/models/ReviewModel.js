const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  posterImage: {
    type: String,
    required: true,
  },
  posterName: {
    type: String,
    required: true,
  },
  postDate: {
    type: String,
    required: true,
  },
  postRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  postedTo: {
    type: String,
    required: true,
  },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
