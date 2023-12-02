const { Schema, model } = require("mongoose");

const tourGuideSchema = new Schema({
  guideImage: String,
  contactInfo: {
    email: String,
    phone: String,
  },
  name: String,
  education: String,
  skills: {
    languages: Array,
    specialties: Array,
  },
  workInfo: Array,
  rating: Number,
});

const GuideModel = model("Guide", tourGuideSchema);

module.exports = GuideModel;
