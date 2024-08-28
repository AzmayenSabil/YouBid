import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("bidder"); // Default role is 'bidder'
  const navigate = useNavigate(); // To navigate to the login page after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          username,
          email,
          password,
          role,
        }
      );

      console.log("User registered:", response.data);
      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      // Handle error response (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="bidder">Bidder</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
