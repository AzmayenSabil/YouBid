const express = require("express");
const router = express.Router();

const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");

// USERS ROUTES
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
