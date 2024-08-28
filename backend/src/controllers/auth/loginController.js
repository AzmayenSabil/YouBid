const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../../config/dbConfig");
const User = require("../../models/userModel");

async function loginController(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const result = await pool.query(
      `SELECT * FROM ${User.tableName} WHERE email = $1`,
      [email]
    );
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { user_id: user.user_id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Respond with user info and token
    res.status(200).json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { loginController };
