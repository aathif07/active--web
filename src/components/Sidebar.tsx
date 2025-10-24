import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaBell, FaUser, FaClipboardList, FaCertificate, FaQuestionCircle, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
};

export default function Sidebar({ className = '' }: Props) {
  const location = useLocation();

  const nav = [
    { to: '/member/dashboard', label: 'Home', icon: <FaHome /> },
    { to: '/explore', label: 'Explore', icon: <FaSearch /> },
    { to: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { to: '/member/profile', label: 'My Profile', icon: <FaUser /> },
    { to: '/member/adf', label: 'ADF Form', icon: <FaClipboardList /> },
    { to: '/member/certificate', label: 'Certificate', icon: <FaCertificate /> },
    { to: '/member/help', label: 'Help', icon: <FaQuestionCircle /> },
    { to: '/member/events', label: 'Upcoming Events', icon: <FaCalendarAlt /> },
  ];

  return (
    <aside className={`bg-white h-full flex flex-col justify-between ${className}`}>
      <div className="p-2 md:p-4">
        <div className="hidden md:flex items-center gap-3 mb-4">
          <img src="/placeholder.svg" alt="avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
          <div className="hidden lg:block">
            <div className="font-semibold text-sm md:text-base">Sarah D</div>
            <div className="text-xs md:text-sm text-muted-foreground">TechCorp Solution</div>
          </div>
        </div>

        <nav className="space-y-1 overflow-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
        {nav.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link 
              key={item.to} 
              to={item.to} 
              className={`flex items-center gap-3 px-2 py-2 md:px-3 md:py-2 rounded-md ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
              <span className="text-sm hidden lg:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      </div>

      <div className="p-2 md:p-4">
        <Button variant="ghost" className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 p-2 md:p-3">
          <FaSignOutAlt className="w-5 h-5" />
          <span className="hidden lg:inline">Log out</span>
        </Button>
      </div>
    </aside>
  );
}