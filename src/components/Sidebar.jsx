import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('mockUser')) || {};
  const role = user.role;

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4 space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      <nav className="flex flex-col gap-3">
        <Link to={`/dashboard/${role}`} className="hover:underline">Dashboard</Link>
        <Link to={`/profile/${role}/123`} className="hover:underline">My Profile</Link>
        <Link to="/chat/123" className="hover:underline">Chat</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
