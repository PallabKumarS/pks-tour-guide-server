const UserModel = require("../../models/UserModel");

const createUser = async (req, res, next) => {
  try {
    const email = req.query.email;
    // if (req.user.email !== email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const user = req.body;
    const result = await UserModel.create(user);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
