const StoryModel = require("../../models/StoryModel");

const getStories = async (req, res, next) => {
  try {
    const result = await StoryModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getStories;
