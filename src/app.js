const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// routes
const authenticationRoutes = require("./routes/authentication");
const packagesRoutes = require("./routes/packages");
const wishListRoutes = require("./routes/wishList");
const guidesRoutes = require("./routes/guides");
const storiesRoutes = require("./routes/stories");
const imagesRoutes = require("./routes/images");
const bookingsRoutes = require("./routes/bookings");
const reviewsRoutes = require("./routes/reviews");
const usersRoutes = require("./routes/users");
const paymentRoutes = require("./routes/payment");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(packagesRoutes);
app.use(wishListRoutes);
app.use(guidesRoutes);
app.use(storiesRoutes);
app.use(imagesRoutes);
app.use(bookingsRoutes);
app.use(reviewsRoutes);
app.use(usersRoutes);
app.use(paymentRoutes);

// const PackageModel = require("./models/PackageModel");
// const GuideModel = require("./models/GuideModel");
// const StoryModel = require("./models/StoryModel");
// app.post("/upload-packages", async (req, res) => {
//   try {
//     const packagesData = req.body;

//     // Insert each package into the MongoDB collection
//     for (const pkg of packagesData) {
//       const newPackage = new StoryModel(pkg);
//       await newPackage.save();
//     }

//     res.status(200).json({
//       message: "Packages inserted into MongoDB collection successfully",
//     });
//     console.log("successfully inserted");
//   } catch (error) {
//     console.error("Error inserting packages into MongoDB:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

app.get("/health", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
