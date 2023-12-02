const UserModel = require("../../models/UserModel");

const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (err) {
    next(err);
  }
};

module.exports = getUsers;
