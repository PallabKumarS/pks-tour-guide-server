const { Schema, model } = require("mongoose");

const wishSchema = new Schema({
  tourTitle: String,
  tourImage: String,
  id: String,
  email: String,
});

const WishModel = model("Wish", wishSchema);

module.exports = WishModel;
