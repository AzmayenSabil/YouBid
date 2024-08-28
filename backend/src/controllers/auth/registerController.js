const bcrypt = require("bcrypt");
const pool = require("../../config/dbConfig");
const User = require("../../models/userModel");

async function registerController(req, res) {
  const { username, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await pool.query(
      `SELECT * FROM ${User.tableName} WHERE email = $1`,
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert the new user into the database with the role
    const result = await pool.query(
      `INSERT INTO ${User.tableName} (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *`,
      [username, email, passwordHash, role]
    );

    res
      .status(201)
      .json({ message: "User created successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { registerController };
