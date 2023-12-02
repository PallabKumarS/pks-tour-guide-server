const WishModel = require("../../models/WishModel");

const deleteOneWish = async (req, res, next) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const result = await WishModel.findOneAndDelete({ _id: id });
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteOneWish;
