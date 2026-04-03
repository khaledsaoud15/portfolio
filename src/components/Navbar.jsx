import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16  sticky top-0 h-24  z-20 bg-[#f8f8f8]">
      <img
        src="./assets/images/logo.png"
        alt="Logo"
        className="w-fit h-full object-fit"
      />
      <button className="px-4 py-2 rounded bg-black text-white shadow cursor-pointer hover:bg-yellow-500 transition-all duration-100 hover:-translate-y-1 active:bg-black">
        Let's build
      </button>
    </nav>
  );
};

export default Navbar;
