var express = require("express");
const getPackages = require("../../api/packages/getPackages");
const getTours = require("../../api/packages/getTours");
const getPackageTypes = require("../../api/packages/getPackageTypes");
const getTourPlans = require("../../api/packages/getTourPlans");
const verifyToken = require("../../middlewares/verifyToken");
const createPackage = require("../../api/packages/createPackage");
var router = express.Router();

router.get("/packages", getPackages);
router.get("/tours", getTours);
router.get("/package-types", getPackageTypes);
router.get("/tour-plans/:id", getTourPlans);
router.post("/packages", verifyToken, createPackage);

module.exports = router;
