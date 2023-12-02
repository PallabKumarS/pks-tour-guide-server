var express = require("express");
const getReview = require("../../api/reviews/getReviews");
const verifyToken = require("../../middlewares/verifyToken");
const createReview = require("../../api/reviews/createReview");
var router = express.Router();

router.get("/reviews/:id", getReview);
router.post("/reviews", verifyToken, createReview);

module.exports = router;
