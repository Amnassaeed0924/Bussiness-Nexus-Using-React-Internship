import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Business Nexus</h1>
      <button
        onClick={() => {
        //   localStorage.clear();
          window.location.href = '/login';
        }}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
