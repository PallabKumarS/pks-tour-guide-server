var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const createWishlist = require("../../api/wishList/createWishList");
const getWishList = require("../../api/wishList/getWishList");
const deleteOneWish = require("../../api/wishList/deleteOneWish");
var router = express.Router();

router.get("/wishlist", getWishList);
router.post("/wishlist", verifyToken, createWishlist);
router.delete("/wishlist/:id", verifyToken, deleteOneWish);

module.exports = router;
