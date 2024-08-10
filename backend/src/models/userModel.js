// userModel.js
// This file defines the properties and relations of the 'User' table

module.exports = {
  // Table name
  tableName: "users",

  // Columns and their types
  columns: {
    user_id: "SERIAL PRIMARY KEY",
    username: "VARCHAR(255) UNIQUE NOT NULL",
    email: "VARCHAR(255) UNIQUE NOT NULL",
    password_hash: "VARCHAR(255) NOT NULL",
    created_at: "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP",
    updated_at: "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP",
  },
};
