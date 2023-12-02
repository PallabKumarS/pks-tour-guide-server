var express = require("express");
const getImages = require("../../api/images/getImages");
var router = express.Router();

router.get("/images/:id", getImages);

module.exports = router;
