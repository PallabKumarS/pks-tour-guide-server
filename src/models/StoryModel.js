const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  name: String,
  email: String,
  destination: String,
  experience: String,
  image: String,
});

const StoryModel = model("Story", storySchema);

module.exports = StoryModel;
