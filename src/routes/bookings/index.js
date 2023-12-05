var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const createBooking = require("../../api/bookings/createBooking");
const getBookings = require("../../api/bookings/getBookings");
const getAssignedBookings = require("../../api/bookings/getAssignedBookings");
const deleteBooking = require("../../api/bookings/deleteBooking");
const updateBookingStatus = require("../../api/bookings/updateBookingStatus");
var router = express.Router();

router.get("/bookings", getBookings);
router.get("/assigned-bookings", getAssignedBookings);
router.delete("/bookings/:id", verifyToken, deleteBooking);
router.post("/bookings", verifyToken, createBooking);
router.put("/assigned-bookings/:id", verifyToken, updateBookingStatus);

module.exports = router;
