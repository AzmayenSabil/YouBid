import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve token and user info from local storage
    const token = localStorage.getItem("authToken");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/home">YouBid</a>
        </div>
        <div className="hidden md:flex space-x-6">
          {["Home", "Auctions", "Your Bids", "Support"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-white border-b-2 border-transparent hover:text-yellow-300 hover:border-yellow-300 transition duration-300 pb-1"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 relative">
          {isLoggedIn ? (
            <div>
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-yellow-300 transition duration-300 flex items-center focus:outline-none"
              >
                <img
                  src="/assets/icons/profile-icon.png"
                  alt="profile-icon"
                  className="w-8 h-8"
                />
                <span className="ml-2">{username}</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded transition duration-300"
            >
              Login/Signup
            </a>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {["Home", "Auctions", "Your Bids", "Support"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="block text-white border-b-2 border-transparent hover:bg-yellow-800 hover:border-yellow-300 p-2 transition duration-300"
          >
            {item}
          </a>
        ))}
        <div className="mt-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block text-white hover:bg-yellow-800 hover:text-yellow-300 p-2 transition duration-300 flex items-center"
              >
                Profile
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="block text-white bg-yellow-500 hover:bg-yellow-400 p-2 rounded transition duration-300"
            >
              Login/Signup
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
