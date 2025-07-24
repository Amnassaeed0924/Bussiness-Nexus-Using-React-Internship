// import React from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorDashboard = () => {
//   return (
//     <DashboardLayout>
//       <div>Investor Dashboard Content</div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

// import React from 'react';
// import DashboardLayout from '../../layouts/Dashboard'; // Ensure this path is correct

// const InvestorDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">
//         <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-3xl mx-auto">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-4 text-center sm:text-left">
//             Welcome, {user?.fullName || 'Investor'} 👋
//           </h1>
//           <h2 className="text-md sm:text-lg text-gray-500 mb-4 text-center sm:text-left">
//             Role: {user?.role || 'Investor'}
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Discover exciting startups to invest in. Analyze market trends, connect with entrepreneurs, and manage your investment portfolio—all in one place.
//           </p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));
//   const [entrepreneurs, setEntrepreneurs] = useState([]);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const filtered = users.filter(u => u.role === 'entrepreneur');
//     setEntrepreneurs(filtered);
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-gray-50">
//         {/* Welcome Box */}
//         <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-3xl mx-auto mb-8">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-4 text-center sm:text-left">
//             Welcome, {user?.fullName || 'Investor'} 👋
//           </h1>
//           <h2 className="text-md sm:text-lg text-gray-500 mb-4 text-center sm:text-left">
//             Role: {user?.role || 'Investor'}
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Discover exciting startups to invest in. Analyze market trends, connect with entrepreneurs, and manage your investment portfolio—all in one place.
//           </p>
//         </div>

//         {/* Entrepreneur Cards */}
//         <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Entrepreneurs to Explore</h2>

//         {entrepreneurs.length === 0 ? (
//           <p className="text-center text-gray-600">No entrepreneurs available.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {entrepreneurs.map((entrepreneur, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
//               >
//                 <h3 className="text-lg font-bold text-gray-800">{entrepreneur.fullName}</h3>
//                 <p className="text-sm text-gray-600">{entrepreneur.email}</p>
//                 <p className="text-sm mt-2"><strong>Bio:</strong> {entrepreneur.bio || 'N/A'}</p>
//                 <p className="text-sm"><strong>Startup:</strong> {entrepreneur.startup || 'N/A'}</p>
//                 <p className="text-sm"><strong>Funding Need:</strong> {entrepreneur.funding || 'N/A'}</p>

//                 <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//                   View Full Profile
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorDashboard = () => {
//   const [entrepreneurs, setEntrepreneurs] = useState([]);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const filtered = users.filter(user => user.role === 'entrepreneur');
//     setEntrepreneurs(filtered);
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//         {entrepreneurs.map((ent, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md p-4">
//             <h3 className="text-lg font-bold text-gray-800">{ent.fullName}</h3>
//             <p className="text-sm text-gray-600">Startup: {ent.startupName}</p>
//             <p className="text-sm text-gray-600 mb-2">{ent.pitch}</p>
//             <button className="text-blue-600 hover:underline text-sm">View Full Profile</button>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorDashboard = () => {
//   const [entrepreneurs, setEntrepreneurs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const filtered = users.filter(user => user.role === 'entrepreneur');
//     setEntrepreneurs(filtered);
//   }, []);

//   const handleSendRequest = (entrepreneur) => {
//     const investor = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (!investor || investor.role !== 'investor') {
//       alert("Only investors can send requests.");
//       return;
//     }

//     const newRequest = {
//       from: investor.email,
//       to: entrepreneur.email,
//       message: `Hi ${entrepreneur.fullName}, I'm interested in collaborating.`,
//       status: 'pending',
//       timestamp: new Date().toISOString()
//     };

//     const existingRequests = JSON.parse(localStorage.getItem('collaborationRequests')) || [];
//     existingRequests.push(newRequest);
//     localStorage.setItem('collaborationRequests', JSON.stringify(existingRequests));

//     alert('Request sent successfully ✅');
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {entrepreneurs.map((ent, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
//             <div>
//               <h3 className="text-lg font-bold text-gray-800">{ent.fullName}</h3>
//               <p className="text-sm text-gray-600"><span className="font-semibold">Startup:</span> {ent.startupName || 'N/A'}</p>
//               <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">Pitch:</span> {ent.pitchSummary || 'No summary provided'}</p>
//             </div>

//             <div className="mt-4 space-y-2">
//               <button
//                 className="text-blue-600 hover:underline text-sm"
//                 onClick={() => navigate(`/profile/entrepreneur/${ent.email}`)}
//               >
//                 View Full Profile
//               </button>
//               <br />
//               <button
//                 onClick={() => handleSendRequest(ent)}
//                 className="text-white bg-green-600 hover:bg-green-700 text-sm px-3 py-1 rounded"
//               >
//                 Send Request
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorDashboard = () => {
//   const [entrepreneurs, setEntrepreneurs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const filtered = users.filter(user => user.role === 'entrepreneur');
//     setEntrepreneurs(filtered);
//   }, []);

//   const handleSendRequest = (entrepreneur) => {
//     const investor = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (!investor || investor.role !== 'investor') {
//       alert("Only investors can send requests.");
//       return;
//     }

//     axios.post('https://687bc6e0b4bc7cfbda873239.mockapi.io/api/collabRequests', {
//       investorId: investor.id,
//       entrepreneurId: entrepreneur.id,
//       investorName: investor.fullName,
//       entrepreneurName: entrepreneur.fullName,
//       message: `Hi ${entrepreneur.fullName}, I'm interested in collaborating.`,
//       status: 'pending',
//       createdAt: new Date().toISOString(),
//     }).then(() => {
//       alert('Request sent successfully ✅');
//     });
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {entrepreneurs.map((ent) => (
//           <div key={ent.id} className="bg-white rounded-xl shadow-md p-6">
            
//             <h3 className="text-lg font-bold text-gray-800">{ent.fullName}</h3>
//             <p className="text-sm text-gray-600"><span className="font-semibold">Startup:</span> {ent.startupName || 'N/A'}</p>
//             <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">Pitch:</span> {ent.pitchSummary || 'No summary provided'}</p>

//             <div className="mt-4">
//               <button
//                 className="text-blue-600 hover:underline text-sm"
//                 onClick={() => navigate(`/profile/entrepreneur/${ent.email}`)}
//               >
//                 View Full Profile
//               </button>
//               <br />
//               <button
//                 onClick={() => handleSendRequest(ent)}
//                 className="mt-2 text-white bg-green-600 hover:bg-green-700 text-sm px-3 py-1 rounded"
//               >
//                 Send Request
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from '../../layouts/Dashboard';
import axios from "axios";

const InvestorDashboard = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
    const filtered = users.filter(user => user.role === 'entrepreneur');
    setEntrepreneurs(filtered);
  }, []);

  const handleSendRequest = (entrepreneur) => {
    const investor = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!investor || investor.role !== 'investor') {
      alert("Only investors can send requests.");
      return;
    }

    axios.post('https://687bc6e0b4bc7cfbda873239.mockapi.io/api/collabRequests', {
      investorId: investor.id,
      entrepreneurId: entrepreneur.id,
      investorName: investor.fullName,
      entrepreneurName: entrepreneur.fullName,
      message: `Hi ${entrepreneur.fullName}, I'm interested in collaborating.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }).then(() => {
      alert('Request sent successfully ✅');
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entrepreneurs.map((ent, index) => (
          <div key={ent.id || index} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{ent.fullName}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Startup:</span> {ent.startupName || 'N/A'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Pitch:</span> {ent.pitchSummary || ent.startupDescription || 'No pitch provided'}
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <button
                className="text-blue-600 hover:underline text-sm"
                onClick={() => navigate(`/profile/entrepreneur/${ent.email}`)}
              >
                View Full Profile
              </button>
              <button
                onClick={() => handleSendRequest(ent)}
                className="w-full text-white bg-green-600 hover:bg-green-700 text-sm px-3 py-1 rounded"
              >
                Send Request
              </button>
              {/* <button
  onClick={() => navigate(`/chat/${ent.id}`, { state: { user: ent } })}
  className="w-full text-white bg-purple-600 hover:bg-purple-700 text-sm px-3 py-1 rounded"
>
  Chat
</button> */}
<button
  onClick={() => navigate("/chat")}
  className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded w-full"
>
  Chat
</button>

            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;





