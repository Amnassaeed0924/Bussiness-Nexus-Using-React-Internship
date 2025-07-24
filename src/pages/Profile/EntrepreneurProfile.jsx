// import { useParams } from "react-router-dom";

// export default function EntrepreneurProfile() {
//   const { id } = useParams();
//   return <h1 className="text-2xl text-center mt-10">Entrepreneur Profile ID: {id}</h1>;
// }

// import React, { useEffect, useState } from 'react';

// const EntrepreneurProfile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//   email: '',
//   role: '',
//   bio: '',
//   startupDescription: '',
//   fundingNeed: '',
//   pitchDeckUrl: ''
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('mockUser'));
//     if (storedUser && storedUser.role === 'entrepreneur') {
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
//         <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
//           👤 Entrepreneur Profile
//         </h2>

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
//                 className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
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
//               className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EntrepreneurProfile;

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../../layouts/Dashboard';

// const EntrepreneurProfile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     role: '',
//     bio: '',
//     startupDescription: '',
//     fundingNeed: '',
//     pitchDeck: '',
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (storedUser && storedUser.role === 'entrepreneur') {
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
//             👤 Entrepreneur Profile
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

//             {/* Startup Description */}
//             <div>
//               <label className="block text-gray-600 font-medium">Startup Description</label>
//               {editMode ? (
//                 <textarea name="startupDescription" value={formData.startupDescription} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800 whitespace-pre-line">{user.startupDescription || 'No description added.'}</p>
//               )}
//             </div>

//             {/* Funding Need */}
//             <div>
//               <label className="block text-gray-600 font-medium">Funding Need</label>
//               {editMode ? (
//                 <input type="text" name="fundingNeed" value={formData.fundingNeed} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 <p className="text-gray-800">{user.fundingNeed || 'No funding needs added.'}</p>
//               )}
//             </div>

//             {/* Pitch Deck */}
//             <div>
//               <label className="block text-gray-600 font-medium">Pitch Deck Link</label>
//               {editMode ? (
//                 <input type="text" name="pitchDeck" value={formData.pitchDeck} onChange={handleChange} className="w-full p-2 border rounded" />
//               ) : (
//                 user.pitchDeck ? (
//                   <a href={user.pitchDeck} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                     {user.pitchDeck}
//                   </a>
//                 ) : (
//                   <p className="text-gray-800">No pitch deck uploaded</p>
//                 )
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

// export default EntrepreneurProfile;

import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/Dashboard';

const EntrepreneurProfile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    bio: '',
    startupName: '',
    startupDescription: '',
    fundingNeed: '',
    pitchDeck: '',
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser && storedUser.role === 'entrepreneur') {
      setUser(storedUser);
      setFormData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const updatedUser = { ...formData };
    setUser(updatedUser);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...updatedUser, password: u.password } : u
    );
    localStorage.setItem('mockUsers', JSON.stringify(updatedUsers));
    setEditMode(false);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6">
            👤 Entrepreneur Profile
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-semibold text-gray-700">Full Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800">{user.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700">Email</label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800">{user.email}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block font-semibold text-gray-700">Role</label>
              <p className="text-gray-800 capitalize">{user.role}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-semibold text-gray-700">Bio</label>
              {editMode ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800 whitespace-pre-line">{user.bio || 'No bio added yet.'}</p>
              )}
            </div>

            {/* Startup Name */}
            <div>
              <label className="block font-semibold text-gray-700">Startup Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800">{user.startupName || 'No startup name added.'}</p>
              )}
            </div>

            {/* Startup Description / Pitch Summary */}
            <div>
              <label className="block font-semibold text-gray-700">Startup Description / Pitch Summary</label>
              {editMode ? (
                <textarea
                  name="startupDescription"
                  value={formData.startupDescription}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800 whitespace-pre-line">
                  {user.startupDescription || 'No description provided.'}
                </p>
              )}
            </div>

            {/* Funding Need */}
            <div>
              <label className="block font-semibold text-gray-700">Funding Need</label>
              {editMode ? (
                <input
                  type="text"
                  name="fundingNeed"
                  value={formData.fundingNeed}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : (
                <p className="text-gray-800">{user.fundingNeed || 'No funding need specified.'}</p>
              )}
            </div>

            {/* Pitch Deck */}
            <div>
              <label className="block font-semibold text-gray-700">Pitch Deck Link</label>
              {editMode ? (
                <input
                  type="text"
                  name="pitchDeck"
                  value={formData.pitchDeck}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              ) : user.pitchDeck ? (
                <a
                  href={user.pitchDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {user.pitchDeck}
                </a>
              ) : (
                <p className="text-gray-800">No pitch deck uploaded.</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setFormData(user);
                  }}
                  className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
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

export default EntrepreneurProfile;



