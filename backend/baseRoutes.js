const express = require("express");
const router = express.Router();

const userRoutes = require("./src/routes/userRoutes");

// USERS ROUTES
router.use("/users", userRoutes);

module.exports = router;
