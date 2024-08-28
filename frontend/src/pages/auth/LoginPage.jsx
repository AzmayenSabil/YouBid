import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To navigate to other pages after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      // Store the token and user info in local storage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful. Token:", token);
      console.log("User info:", user);

      // Redirect to the homepage after successful login
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      // Handle error response (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
