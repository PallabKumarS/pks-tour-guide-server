const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  packageName: {
    type: String,
    required: true,
  },
  packageId: {
    type: String,
    required: true,
  },
  touristName: {
    type: String,
    required: true,
  },
  touristEmail: {
    type: String,
    required: true,
  },
  touristImage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tourDate: {
    type: String,
    required: true,
  },
  guide: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    defaultValue: "In Review",
  },
});

const BookingModel = model("Booking", bookingSchema);

module.exports = BookingModel;
