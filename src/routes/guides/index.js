var express = require("express");
const getGuides = require("../../api/guides/getGuides");
const getSingleGuide = require("../../api/guides/getSingleGuide");
const verifyToken = require("../../middlewares/verifyToken");
const createGuide = require("../../api/guides/createGuides");
var router = express.Router();

router.get("/guides", getGuides);
router.get("/guides/:id", getSingleGuide);
router.post("/guides", verifyToken, createGuide);

module.exports = router;
