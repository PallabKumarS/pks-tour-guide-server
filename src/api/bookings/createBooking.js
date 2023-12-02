const BookingModel = require("../../models/BookingModel");

const createBooking = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const booking = req.body;
    const result = await BookingModel.create(booking);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createBooking;
