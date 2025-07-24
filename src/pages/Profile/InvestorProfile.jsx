// import { useParams } from "react-router-dom";

// export default function InvestorProfile() {
//   const { id } = useParams();
//   return <h1 className="text-2xl text-center mt-10">Investor Profile ID: {id}</h1>;
// }

// src/pages/Profile/InvestorProfile.jsx
// import React, { useEffect, useState } from 'react';

// const InvestorProfile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     role: '',
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('mockUser'));
//     if (storedUser && storedUser.role === 'investor') {
//       setUser(storedUser);
//       setFormData(storedUser);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSave = () => {
//     setUser(formData);
//     localStorage.setItem('mockUser', JSON.stringify(formData));

//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const updatedUsers = users.map(u =>
//       u.email === user.email ? { ...formData, password: u.password } : u
//     );
//     localStorage.setItem('mockUsers', JSON.stringify(updatedUsers));

//     setEditMode(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
//       <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">👤 Investor Profile</h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-600">Full Name</label>
//             {editMode ? (
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             ) : (
//               <p className="text-gray-800">{user.fullName}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-600">Email</label>
//             {editMode ? (
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             ) : (
//               <p className="text-gray-800">{user.email}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-600">Role</label>
//             <p className="text-gray-800 capitalize">{user.role}</p>
//           </div>
//         </div>

//         <div className="mt-6 flex justify-between">
//           {editMode ? (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => {
//                   setEditMode(false);
//                   setFormData(user);
//                 }}
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setEditMode(true)}
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestorProfile;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorProfile = () => {
//   const [user, setUser] = useState({});
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     bio: '',
//     investmentInterests: '',
//     portfolio: '',
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (storedUser && storedUser.role === 'investor') {
//       setUser(storedUser);
//       setFormData(storedUser);
//     } else {
//       console.warn("Not logged in as investor or data missing.");
//     }
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow">
//         <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Investor Profile 💼</h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
//             <input
//               value={formData.fullName}
//               disabled
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Email</label>
//             <input
//               value={formData.email}
//               disabled
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Bio</label>
//             <textarea
//               value={formData.bio}
//               disabled
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
//               rows={3}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Investment Interests</label>
//             <textarea
//               value={formData.investmentInterests}
//               disabled
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
//               rows={2}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Portfolio Companies</label>
//             <textarea
//               value={formData.portfolio}
//               disabled
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
//               rows={2}
//             />
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorProfile;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const InvestorProfile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     role: '',
//     bio: '',
//     investmentInterests: '',
//     portfolio: '',
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (storedUser && storedUser.role === 'investor') {
//       setUser(storedUser);
//       setFormData(storedUser);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSave = () => {
//     const updatedUser = { ...formData };
//     setUser(updatedUser);
//     localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const updatedUsers = users.map(u =>
//       u.email === user.email ? { ...updatedUser, password: u.password } : u
//     );
//     localStorage.setItem('mockUsers', JSON.stringify(updatedUsers));
//     setEditMode(false);
//   };

//   return (
//     <DashboardLayout>
//       <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
//         <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-xl w-full">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6">
//             💼 Investor Profile
//           </h2>

//           <div className="space-y-5">
//             {/* Full Name */}
//             <div>
//               <label className="block text-gray-600 font-medium">Full Name</label>
//               {editMode ? (
//                 <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800">{user.fullName}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-600 font-medium">Email</label>
//               {editMode ? (
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800">{user.email}</p>
//               )}
//             </div>

//             {/* Role */}
//             <div>
//               <label className="block text-gray-600 font-medium">Role</label>
//               <p className="text-gray-800 capitalize">{user.role}</p>
//             </div>

//             {/* Bio */}
//             <div>
//               <label className="block text-gray-600 font-medium">Bio</label>
//               {editMode ? (
//                 <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800 whitespace-pre-line">{user.bio || 'No bio added yet.'}</p>
//               )}
//             </div>

//             {/* Investment Interests */}
//             <div>
//               <label className="block text-gray-600 font-medium">Investment Interests</label>
//               {editMode ? (
//                 <textarea name="investmentInterests" value={formData.investmentInterests} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800 whitespace-pre-line">{user.investmentInterests || 'No interests added.'}</p>
//               )}
//             </div>

//             {/* Portfolio Companies */}
//             <div>
//               <label className="block text-gray-600 font-medium">Portfolio Companies</label>
//               {editMode ? (
//                 <textarea name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800 whitespace-pre-line">{user.portfolio || 'No portfolio listed.'}</p>
//               )}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-6 flex justify-between gap-4">
//             {editMode ? (
//               <>
//                 <button onClick={handleSave} className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
//                   Save
//                 </button>
//                 <button onClick={() => { setEditMode(false); setFormData(user); }} className="w-full bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button onClick={() => setEditMode(true)} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InvestorProfile;

import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/Dashboard';

const InvestorProfile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'investor',
    bio: '',
    investmentInterests: '',
    portfolio: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

    if (storedUser?.role === 'investor') {
      const fullUserData = allUsers.find(u => u.email === storedUser.email);
      const finalUser = fullUserData || storedUser;

      setUser(finalUser);
      setFormData({
        fullName: finalUser.fullName || '',
        email: finalUser.email || '',
        role: finalUser.role || 'investor',
        bio: finalUser.bio || '',
        investmentInterests: finalUser.investmentInterests || '',
        portfolio: finalUser.portfolio || '',
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updatedUser = { ...formData };

    // Update local state
    setUser(updatedUser);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

    // Update mockUsers
    const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];
    const updatedUsers = allUsers.map(u =>
      u.email === user.email ? { ...updatedUser, password: u.password } : u
    );
    localStorage.setItem('mockUsers', JSON.stringify(updatedUsers));

    setEditMode(false);
  };

  if (!user) {
    return (
      <DashboardLayout>
        <div className="p-4 text-center text-red-500 font-semibold">
          Investor not logged in or profile not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
        <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6">
            💼 Investor Profile
          </h2>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-600 font-medium">Full Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p className="text-gray-800">{formData.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <p className="text-gray-800">{formData.email}</p>
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-600 font-medium">Role</label>
              <p className="text-gray-800 capitalize">{formData.role}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-gray-600 font-medium">Bio</label>
              {editMode ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p className="text-gray-800 whitespace-pre-line">{formData.bio || 'No bio added yet.'}</p>
              )}
            </div>

            {/* Investment Interests */}
            <div>
              <label className="block text-gray-600 font-medium">Investment Interests</label>
              {editMode ? (
                <textarea
                  name="investmentInterests"
                  value={formData.investmentInterests}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p className="text-gray-800 whitespace-pre-line">{formData.investmentInterests || 'No interests added.'}</p>
              )}
            </div>

            {/* Portfolio */}
            <div>
              <label className="block text-gray-600 font-medium">Portfolio Companies</label>
              {editMode ? (
                <textarea
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p className="text-gray-800 whitespace-pre-line">{formData.portfolio || 'No portfolio listed.'}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between gap-4">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setFormData(user);
                  }}
                  className="w-full bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestorProfile;


