const UserModel = require("../../models/UserModel");

const getSingleUser = async (req, res, next) => {
  try {
    const email = req.params.id;
    const user = await UserModel.findOne({ email: email });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleUser;
