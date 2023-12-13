var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const createPayment = require("../../api/payment/createPayment");
var router = express.Router();

router.post("/payment", verifyToken, createPayment);

module.exports = router;
