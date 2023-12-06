const BookingModel = require("../../models/BookingModel");

const updateBookingStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const status = req.body;
    const result = await BookingModel.findOneAndUpdate(
      { _id: id },
      { status: status.status }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateBookingStatus;
