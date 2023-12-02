const GuideModel = require("../../models/GuideModel");

const createGuide = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const guide = req.body;
    const result = await GuideModel.create(guide);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
};

module.exports = createGuide;
