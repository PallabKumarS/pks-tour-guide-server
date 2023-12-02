const BookingModel = require("../../models/BookingModel");

const getBookings = async (req, res, next) => {
  try {
    const email = req.query.email;
    const result = await BookingModel.find({ touristEmail: email });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getBookings;
