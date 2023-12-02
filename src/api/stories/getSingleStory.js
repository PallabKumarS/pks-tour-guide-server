const StoryModel = require("../../models/StoryModel");

const getSingleStories = async (req, res, next) => {
  try {
    const id = req.params.id;

    const query = { _id: id };
    const result = await StoryModel.findOne(query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleStories;
