var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const createBooking = require("../../api/bookings/createBooking");
const getBookings = require("../../api/bookings/getBookings");
const getAssignedBookings = require("../../api/bookings/getAssignedBookings");
var router = express.Router();

router.get("/bookings", getBookings);
router.get("/assigned-bookings", getAssignedBookings);
router.post("/bookings", verifyToken, createBooking);
router.put("/assigned-bookings/:id", verifyToken);

module.exports = router;
