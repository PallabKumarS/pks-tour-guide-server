const PackageModel = require("../../models/PackageModel");

const createPackage = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const package = req.body;
    const result = await PackageModel.create(package);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
};

module.exports = createPackage;
