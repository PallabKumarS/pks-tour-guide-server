var express = require("express");
const getReview = require("../../api/reviews/getReviews");
const verifyToken = require("../../middlewares/verifyToken");
const createReview = require("../../api/reviews/createReview");
const deleteReview = require("../../api/reviews/deleteReview");
var router = express.Router();

router.get("/reviews/:id", getReview);
router.post("/reviews", verifyToken, createReview);
router.delete("/reviews/:id", verifyToken, deleteReview);

module.exports = router;
