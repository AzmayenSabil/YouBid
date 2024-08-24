import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-700 h-[80vh] m-4 rounded">
        {/* Text Content */}
        <div className="flex-1 p-8 lg:p-12 text-center">
          <h2
            className="text-gray-100 lg:text-5xl text-3xl font-bold lg:leading-tight mb-6 
          hover:scale-105 transform transition-transform duration-500 hover:text-blue-400"
          >
            You Choose, You Bid, You Win!!!
          </h2>
          <p
            className="text-gray-300 mb-8 text-base leading-relaxed 
          hover:scale-105 transform transition-transform duration-500 hover:text-blue-300"
          >
            Discover a seamless bidding experience designed for efficiency and
            elegance. From choosing to winning, we&apos;ve got you covered.
          </p>
          <button
            type="button"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-800 
            transition-all font-bold text-sm rounded-md px-6 py-2.5 shadow-md hover:shadow-xl 
            hover:scale-105 transform transition-transform duration-500"
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
