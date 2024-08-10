const pool = require("../../config/dbConfig");
const User = require("../../models/userModel");

// Create a new user
async function createUser(req, res) {
  const { username, email, password_hash } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO ${User.tableName} (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, password_hash]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all users
async function getAllUsers(req, res) {
  try {
    const result = await pool.query(`SELECT * FROM ${User.tableName}`);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get user by ID
async function getUserById(req, res) {
  const userId = parseInt(req.params.id, 10);
  try {
    const result = await pool.query(
      `SELECT * FROM ${User.tableName} WHERE user_id = $1`,
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update user
async function updateUserById(req, res) {
  const userId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  const setClause = Object.keys(updatedData)
    .map((key, index) => `${key} = $${index + 2}`)
    .join(", ");
  const values = [userId, ...Object.values(updatedData)];

  try {
    const result = await pool.query(
      `UPDATE ${User.tableName} SET ${setClause} WHERE user_id = $1 RETURNING *`,
      values
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete user
async function deleteUserById(req, res) {
  const userId = parseInt(req.params.id, 10);
  try {
    const result = await pool.query(
      `DELETE FROM ${User.tableName} WHERE user_id = $1 RETURNING *`,
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
