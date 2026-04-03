import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row items-center justify-center h-20 gap-2 py-12 bg-black">
        <span className="text-sm text-gray-500">
          &copy; 2024 Your Name. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a
            href=""
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
