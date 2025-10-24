import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBell } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';

const SidebarPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Navigation Menu</h1>
        
        {/* Top navigation icons for quick access */}
        <div className="flex justify-around items-center bg-white rounded-lg shadow-md p-4 mb-6">
          <Link to="/member/dashboard" className="flex flex-col items-center p-2 text-blue-600">
            <FaHome className="w-6 h-6 mb-1" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600">
            <FaSearch className="w-6 h-6 mb-1" />
            <span className="text-sm">Explore</span>
          </Link>
          <Link to="/notifications" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600">
            <FaBell className="w-6 h-6 mb-1" />
            <span className="text-sm">Notifications</span>
          </Link>
        </div>
        
        {/* Full sidebar navigation */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;