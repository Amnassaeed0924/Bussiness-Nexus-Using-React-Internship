// import React from 'react';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="p-4 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    // localStorage.removeItem('mockUser');
    navigate('/login');
  };

  // 🔍 Determine role from pathname
  const isEntrepreneur = location.pathname.includes('entrepreneur');
  const dashboardPath = isEntrepreneur ? '/dashboard/entrepreneur' : '/dashboard/investor';
  const profilePath = isEntrepreneur ? '/profile/entrepreneur/1' : '/profile/investor/1';

  const navItems = [
    { label: 'Dashboard', to: dashboardPath, icon: <FiHome /> },
    { label: 'Profile', to: profilePath, icon: <FiUser /> },
    { label: 'Chat', to: '/chat', icon: <FiMessageSquare /> }, // ✅ Chat option
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-40 bg-white h-full w-64 p-5 shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="text-2xl font-bold mb-8 text-blue-600">Business Nexus</div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                location.pathname === item.to
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2 text-red-500 hover:text-red-700 transition-all"
        >
          <FiLogOut />
          Logout
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar (Mobile Only) */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 lg:hidden">
          <h1 className="text-xl font-semibold text-blue-600">Dashboard</h1>
          <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
