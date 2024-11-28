// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyFedha</h1>
      <div>
        <Link to="/my-finances" className="mr-4 px-4 py-2 bg-blue-800 rounded-md hover:bg-blue-700">
          My Finances
        </Link>
        <button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-400">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
