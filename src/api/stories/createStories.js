const StoryModel = require("../../models/StoryModel");

const createStories = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const story = req.body;
    const result = await StoryModel.create(story);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createStories;
