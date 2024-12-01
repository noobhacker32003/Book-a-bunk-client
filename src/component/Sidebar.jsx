import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Burger Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Burger Icon */}
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <nav className="flex flex-col h-full p-4 mt-8">
          <Link
            to="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-star-o mr-2"></i>
            <span>Home</span>
          </Link>
          <Link
            to="/alerts"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-bell-o mr-2"></i>
            <span>Alerts</span>
          </Link>
          <Link
            to="/messages"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-envelope-o mr-2"></i>
            <span>Messages</span>
          </Link>
          <Link
            to="/comments"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-comment-o mr-2"></i>
            <span>Comments</span>
          </Link>
          <Link
            to="/analytics"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-bar-chart-o mr-2"></i>
            <span>Analytics</span>
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-newspaper-o mr-2"></i>
            <span >Log Out</span>
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
