// import React from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurDashboard = () => {
//   return (
//     <DashboardLayout>
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Entrepreneur Dashboard</h2>
//         <p className="text-gray-600">
//           Welcome! Here you can view investor requests, manage your profile, and communicate.
//         </p>
//         {/* Placeholder: You’ll display requests from investors here in Week 2 */}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React from 'react';
// import DashboardLayout from '../../layouts/Dashboard'; // Adjust path as needed

// const EntrepreneurDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('mockUser'));

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">
//         <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-3xl mx-auto">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-4 text-center sm:text-left">
//             Welcome, {user?.fullName || 'Entrepreneur'} 🚀
//           </h1>
//           <h2 className="text-md sm:text-lg text-gray-500 mb-4 text-center sm:text-left">
//             Role: {user?.role || 'Entrepreneur'}
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Manage your startup profile, pitch your ideas, and connect with investors ready to fund the future.
//           </p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard'; // Adjust the path as needed

// const EntrepreneurDashboard = () => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));

//     // Only allow if the role is entrepreneur
//     if (storedUser?.role === 'entrepreneur') {
//       setUser(storedUser);
//     }
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">
//         <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-3xl mx-auto">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-4 text-center sm:text-left">
//             Welcome, {user?.fullName || 'Entrepreneur'} 🚀
//           </h1>
//           <h2 className="text-md sm:text-lg text-gray-500 mb-4 text-center sm:text-left">
//             Role: {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Entrepreneur'}
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Manage your startup profile, pitch your ideas, and connect with investors ready to fund the future.
//           </p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurDashboard = () => {
//   const [user, setUser] = useState({});
//   const [investors, setInvestors] = useState([]);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

//     if (storedUser?.role === 'entrepreneur') {
//       setUser(storedUser);
//     }

//     const investorList = allUsers.filter(user => user.role === 'investor');

//     // Add mock status and bio for UI purposes
//     const investorRequests = investorList.map((inv, index) => ({
//       ...inv,
//       id: index + 1,
//       bio: inv.bio || 'Looking to invest in innovative startups.',
//       status: ['Pending', 'Accepted', 'Rejected'][index % 3], // random mock status
//     }));

//     setInvestors(investorRequests);
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Accepted':
//         return 'bg-green-100 text-green-700';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-yellow-100 text-yellow-700';
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-6 text-center sm:text-left">
//           Collaboration Requests 📩
//         </h1>

//         {investors.length === 0 ? (
//           <p className="text-gray-500 text-center">No collaboration requests found.</p>
//         ) : (
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {investors.map((inv) => (
//               <div
//                 key={inv.id}
//                 className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {inv.fullName}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">{inv.bio}</p>
//                 </div>
//                 <div className="mt-4">
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(inv.status)}`}
//                   >
//                     {inv.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurDashboard = () => {
//   const [collabRequests, setCollabRequests] = useState([]);
//   const [entrepreneur, setEntrepreneur] = useState(null);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const allRequests = JSON.parse(localStorage.getItem('collabRequests')) || [];

//     if (loggedInUser?.role !== 'entrepreneur') return;

//     // Get entrepreneur full info from mockUsers
//     const entreInfo = allUsers.find(user => user.email === loggedInUser.email);
//     setEntrepreneur(entreInfo);

//     // Filter requests for this entrepreneur
//     const entrepreneurRequests = allRequests.filter(
//       (req) => req.entrepreneurEmail === loggedInUser.email
//     );

//     // Add investor data into requests
//     const enrichedRequests = entrepreneurRequests.map((req, idx) => {
//       const investor = allUsers.find((user) => user.email === req.investorEmail);
//       return {
//         id: idx + 1,
//         investorName: investor?.fullName || 'Unknown Investor',
//         bio: investor?.bio || 'No bio available.',
//         status: req.status,
//       };
//     });

//     setCollabRequests(enrichedRequests);
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Accepted':
//         return 'bg-green-100 text-green-700';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-yellow-100 text-yellow-700';
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">
//         {/* Entrepreneur Profile Card */}
//         {entrepreneur && (
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-purple-400">
//             <h2 className="text-2xl font-bold text-purple-700 mb-2">{entrepreneur.fullName}</h2>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Startup:</span>{' '}
//               {entrepreneur.startupName || 'Innovative Startup Inc.'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Funding Need:</span>{' '}
//               {entrepreneur.fundingNeed || '$50,000 (seed)'}
//             </p>
//             <p className="text-gray-600 italic">
//               {entrepreneur.bio || 'Passionate about solving real-world problems with tech.'}
//             </p>
//           </div>
//         )}

//         {/* Requests Section */}
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-6 text-center sm:text-left">
//           Collaboration Requests 📩
//         </h1>

//         {collabRequests.length === 0 ? (
//           <p className="text-gray-500 text-center">No collaboration requests found.</p>
//         ) : (
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {collabRequests.map((req) => (
//               <div
//                 key={req.id}
//                 className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {req.investorName}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">{req.bio}</p>
//                 </div>
//                 <div className="mt-4">
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(req.status)}`}
//                   >
//                     {req.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurDashboard = () => {
//   const [collabRequests, setCollabRequests] = useState([]);
//   const [entrepreneur, setEntrepreneur] = useState(null);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const allRequests = JSON.parse(localStorage.getItem('collabRequests')) || [];

//     if (loggedInUser?.role !== 'entrepreneur') return;

//     const entreInfo = allUsers.find(user => user.email === loggedInUser.email);
//     setEntrepreneur(entreInfo);

//     const entrepreneurRequests = allRequests.filter(
//       (req) => req.entrepreneurEmail === loggedInUser.email
//     );

//     const enrichedRequests = entrepreneurRequests.map((req, idx) => {
//       const investor = allUsers.find((user) => user.email === req.investorEmail);
//       return {
//         id: idx + 1,
//         investorName: investor?.fullName || 'Unknown Investor',
//         bio: investor?.bio || 'No bio available.',
//         status: req.status,
//       };
//     });

//     setCollabRequests(enrichedRequests);
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Accepted':
//         return 'bg-green-100 text-green-700';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-yellow-100 text-yellow-700';
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">

//         {/* Entrepreneur Profile Card */}
//         {entrepreneur && (
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-purple-400">
//             <h2 className="text-2xl font-bold text-purple-700 mb-2">{entrepreneur.fullName}</h2>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Bio:</span> {entrepreneur.bio || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Startup:</span> {entrepreneur.startupName || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Funding Need:</span> {entrepreneur.fundingNeed || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Pitch Deck:</span>{' '}
//               {entrepreneur.pitchDeck ? (
//                 <a href={entrepreneur.pitchDeck} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                   View Pitch Deck
//                 </a>
//               ) : (
//                 <span className="text-gray-500 italic">No pitch deck uploaded</span>
//               )}
//             </p>
//           </div>
//         )}

//         {/* Collaboration Requests */}
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-6 text-center sm:text-left">
//           Collaboration Requests 📩
//         </h1>

//         {collabRequests.length === 0 ? (
//           <p className="text-gray-500 text-center">No collaboration requests found.</p>
//         ) : (
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {collabRequests.map((req) => (
//               <div
//                 key={req.id}
//                 className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {req.investorName}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">{req.bio}</p>
//                 </div>
//                 <div className="mt-4">
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(req.status)}`}
//                   >
//                     {req.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurDashboard = () => {
//   const [collabRequests, setCollabRequests] = useState([]);
//   const [entrepreneur, setEntrepreneur] = useState(null);
//   const [allUsers, setAllUsers] = useState([]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const allRequests = JSON.parse(localStorage.getItem('collabRequests')) || [];

//     if (loggedInUser?.role !== 'entrepreneur') return;

//     const entreInfo = users.find(user => user.email === loggedInUser.email);
//     setEntrepreneur(entreInfo);
//     setAllUsers(users);

//     const entrepreneurRequests = allRequests.filter(
//       (req) => req.entrepreneurEmail === loggedInUser.email
//     );

//     const enrichedRequests = entrepreneurRequests.map((req, idx) => {
//       const investor = users.find((user) => user.email === req.investorEmail);
//       return {
//         id: idx + 1,
//         investorName: investor?.fullName || 'Unknown Investor',
//         bio: investor?.bio || 'No bio available.',
//         status: req.status,
//         investorEmail: req.investorEmail,
//       };
//     });

//     setCollabRequests(enrichedRequests);
//   }, []);

//   const updateRequestStatus = (investorEmail, newStatus) => {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const allRequests = JSON.parse(localStorage.getItem('collabRequests')) || [];

//     const updated = allRequests.map((req) => {
//       if (
//         req.entrepreneurEmail === loggedInUser.email &&
//         req.investorEmail === investorEmail &&
//         req.status === 'Pending'
//       ) {
//         return { ...req, status: newStatus };
//       }
//       return req;
//     });

//     localStorage.setItem('collabRequests', JSON.stringify(updated));

//     const refreshedRequests = updated
//       .filter((req) => req.entrepreneurEmail === loggedInUser.email)
//       .map((req, idx) => {
//         const investor = allUsers.find((user) => user.email === req.investorEmail);
//         return {
//           id: idx + 1,
//           investorName: investor?.fullName || 'Unknown Investor',
//           bio: investor?.bio || 'No bio available.',
//           status: req.status,
//           investorEmail: req.investorEmail,
//         };
//       });

//     setCollabRequests(refreshedRequests);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Accepted':
//         return 'bg-green-100 text-green-700';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-yellow-100 text-yellow-700';
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-4 sm:p-6 lg:p-8">

//         {/* Entrepreneur Profile Card */}
//         {entrepreneur && (
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-purple-400">
//             <h2 className="text-2xl font-bold text-purple-700 mb-2">{entrepreneur.fullName}</h2>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Bio:</span> {entrepreneur.bio || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Startup:</span> {entrepreneur.startupName || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Funding Need:</span> {entrepreneur.fundingNeed || 'N/A'}
//             </p>
//             <p className="text-gray-700 mb-1">
//               <span className="font-semibold">Pitch Deck:</span>{' '}
//               {entrepreneur.pitchDeck ? (
//                 <a href={entrepreneur.pitchDeck} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                   View Pitch Deck
//                 </a>
//               ) : (
//                 <span className="text-gray-500 italic">No pitch deck uploaded</span>
//               )}
//             </p>
//           </div>
//         )}

//         {/* Collaboration Requests */}
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-6 text-center sm:text-left">
//           Collaboration Requests 📩
//         </h1>

//         {collabRequests.length === 0 ? (
//           <p className="text-gray-500 text-center">No collaboration requests found.</p>
//         ) : (
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {collabRequests.map((req) => (
//               <div
//                 key={req.id}
//                 className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {req.investorName}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">{req.bio}</p>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between">
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(req.status)}`}
//                   >
//                     {req.status}
//                   </span>

//                   {req.status === 'Pending' && (
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => updateRequestStatus(req.investorEmail, 'Accepted')}
//                         className="text-green-700 text-xs border border-green-500 px-2 py-1 rounded hover:bg-green-100"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => updateRequestStatus(req.investorEmail, 'Rejected')}
//                         className="text-red-700 text-xs border border-red-500 px-2 py-1 rounded hover:bg-red-100"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EntrepreneurDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dashboard';

const EntrepreneurDashboard = () => {
  const [collabRequests, setCollabRequests] = useState([]);
  const [entrepreneur, setEntrepreneur] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser?.role !== 'entrepreneur') return;
    setEntrepreneur(loggedInUser);

    axios
      .get('https://687bc6e0b4bc7cfbda873239.mockapi.io/api/collabRequests')
      .then((res) => {
        const requests = res.data.filter(
          (req) => req.entrepreneurId === loggedInUser.id
        );
        setCollabRequests(requests);
      });
  }, []);

  const updateRequestStatus = (id, newStatus) => {
    axios
      .put(`https://687bc6e0b4bc7cfbda873239.mockapi.io/api/collabRequests/${id}`, {
        status: newStatus,
      })
      .then((res) => {
        setCollabRequests((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
        );
      });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        {entrepreneur && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-purple-400">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">{entrepreneur.fullName}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Bio:</span> {entrepreneur.bio || 'N/A'}
            </p>
          </div>
        )}

        <h1 className="text-2xl font-bold mb-4">Collaboration Requests 📩</h1>

        {collabRequests.length === 0 ? (
          <p className="text-gray-500">No collaboration requests found.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collabRequests.map((req) => (
              <div key={`${req.id || `${req.investorId}-${req.entrepreneurId}-${req.createdAt}`}`} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">{req.investorName}</h3>
                <p className="text-sm text-gray-600 mt-1">{req.message}</p>
                <p
                  className={`text-xs mt-2 font-medium px-2 py-1 inline-block rounded ${getStatusColor(
                    req.status
                  )}`}
                >
                  {req.status.toUpperCase()}
                </p>
                {req.status === 'pending' && (
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => updateRequestStatus(req.id, 'accepted')}
                      className="text-green-600 text-xs border border-green-500 px-2 py-1 rounded hover:bg-green-100"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateRequestStatus(req.id, 'rejected')}
                      className="text-red-600 text-xs border border-red-500 px-2 py-1 rounded hover:bg-red-100"
                    >
                      Reject
                    </button>
                  </div>
                )}
                <br />
                {/* <button
                    onClick={() => navigate(`/chat/${req.investorId}`)}
                    className="text-white bg-purple-600 hover:bg-purple-700 text-sm px-3 py-1 rounded w-full"
                  >
                    Chat
                  </button> */}
<button
  onClick={() => navigate("/chat")}
  className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
>
  Chat
</button>

              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EntrepreneurDashboard;







