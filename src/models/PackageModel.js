const { Schema, model } = require("mongoose");

const packageSchema = new Schema({
  tourImage: String,
  tourTitle: String,
  tourType: String,
  tourTypeImage: String,
  tourDestination: String,
  price: String,
  tourInfo: String,
  tourPlan: Array,
  images: Array,
});

const PackageModel = model("Package", packageSchema);

module.exports = PackageModel;
