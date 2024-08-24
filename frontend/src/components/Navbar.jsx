import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // Placeholder: Replace this with actual authentication logic

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">YouBid</a>
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
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <a
              href="/profile"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <img
                src="/assets/icons/profile-icon.png"
                alt="profile-icon"
                className="w-8 h-8"
              />
            </a>
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
            {/* <img
              src="/assets/icons/profile-icon.png"
              alt="profile-icon"
              className="w-6 h-6"
            /> */}
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
            <a
              href="/profile"
              className="block text-white hover:bg-yellow-800 hover:text-yellow-300 p-2 transition duration-300"
            >
              Profile
            </a>
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
