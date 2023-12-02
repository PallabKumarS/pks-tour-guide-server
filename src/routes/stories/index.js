var express = require("express");
const getStories = require("../../api/stories/getStories");
const getSingleStories = require("../../api/stories/getSingleStory");
const verifyToken = require("../../middlewares/verifyToken");
const createStories = require("../../api/stories/createStories");
var router = express.Router();

router.get("/stories", getStories);
router.get("/stories/:id", getSingleStories);
router.post("/stories", verifyToken, createStories);

module.exports = router;
