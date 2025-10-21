import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-center items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Client Return System</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 border"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
