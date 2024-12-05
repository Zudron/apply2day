// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Recruitment Portal</a>
        <ul className="flex space-x-6">
          <li><a href="about.html" className="hover:text-gray-300">About</a></li>
          <li><a href="contact.html" className="hover:text-gray-300">Contact</a></li
          <li><a href="login.html" className="hover:text-gray-300">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
