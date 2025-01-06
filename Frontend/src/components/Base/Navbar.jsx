import React from "react";
import { FiBook, FiLogOut } from "react-icons/fi";

function Navbar({ Isadmin = false, handleaddbook,handlelogout }) {
  return (
    <div className="overflow-x-hidden overflow-y-hidden navbar w-screen h-20 bg-blue-500 flex items-center gap-8 py-14 px-4 md:px-16 md:py-12 justify-between shadow-md">
      {/* Logo */}
      <div className="logo flex items-center gap-2 text-white font-bold text-lg md:text-2xl">
        <FiBook size={24} />
        <h1>Library Management System</h1>
      </div>

      {/* Buttons */}
      <div className="buttons flex gap-4">
        {Isadmin && (
          <button
            onClick={handleaddbook}
            className="AddBook bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            Add Book
          </button>
        )}
        <button
          onClick={handlelogout}
          className="Logout bg-red-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200 flex items-center gap-2"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
