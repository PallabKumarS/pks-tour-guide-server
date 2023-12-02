const WishModel = require("../../models/WishModel");

const getWishList = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const users = await WishModel.find({ email: email });
    res.send(users);
  } catch (err) {
    next(err);
  }
};

module.exports = getWishList;
