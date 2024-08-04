var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello YouBid From Server!</h1>");
});

// Define a test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Server!" });
});

// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

