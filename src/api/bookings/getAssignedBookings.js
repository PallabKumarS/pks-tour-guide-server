const BookingModel = require("../../models/BookingModel");

const getAssignedBookings = async (req, res, next) => {
  try {
    const name = req.query.name;
    const result = await BookingModel.find({ guide: name });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAssignedBookings;
