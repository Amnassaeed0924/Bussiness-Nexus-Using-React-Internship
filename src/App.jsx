// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <>
//   <div className="p-6 bg-gray-100 rounded-xl shadow-md">
//     <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind Test</h1>
//     <p className="text-gray-700">Tailwind is working beautifully! 💅</p>
//     <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
//     Test Button
//   </button>
// </div>



//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import InvestorDashboard from './pages/Dashboard/InvestorDashboard';
import EntrepreneurDashboard from './pages/Dashboard/EntrepreneurDashboard';
import InvestorProfile from './pages/Profile/InvestorProfile';
import EntrepreneurProfile from './pages/Profile/EntrepreneurProfile';
import { ToastContainer } from 'react-toastify';
import ChatPage from './pages/ChatPage'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
        <Route path="/profile/investor/:id" element={<InvestorProfile />} />
        <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
        {/* <Route path="/chat/:userId?" element={<ChatPage />} /> */}
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000}hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="colored" 
      />
      </>
  );
}

export default App;
