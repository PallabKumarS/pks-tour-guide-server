const WishModel = require("../../models/WishModel");

const createWishlist = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    const wish = req.body;
    const result = await WishModel.create(wish);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createWishlist;
