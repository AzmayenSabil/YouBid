var express = require("express");
var cors = require("cors");
require("dotenv").config();

const baseRoutes = require("./baseRoutes");

// Import and initialize database connection
const pool = require("./src/config/dbConfig");

var app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // Add this line

app.use(cors());

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello YouBid, From Server!</h1>");
});

// Define a test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Server!" });
});

app.get("/api/dbtest", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ currentTime: result.rows[0] });
  } catch (err) {
    console.error("Database query error", err);
    res.status(500).json({ error: "Database query error" });
  }
});

// Use base routes
app.use("/api/v1", baseRoutes);


// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

