var express = require("express");
const getSingleUser = require("../../api/users/getSingleUser");
const createUser = require("../../api/users/createUser");
const verifyToken = require("../../middlewares/verifyToken");
const getUsers = require("../../api/users/getUsers");
const updateUser = require("../../api/users/updateUser");
var router = express.Router();

router.get("/users/:id", getSingleUser);
router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users", verifyToken, updateUser);

module.exports = router;
