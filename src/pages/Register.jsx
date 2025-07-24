// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('investor');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   // const handleRegister = (e) => {
//   //   e.preventDefault();

//   //   if (!fullName || !email || !password || !confirmPassword) {
//   //     alert('Please fill in all fields');
//   //     return;
//   //   }

//   //   if (password !== confirmPassword) {
//   //     alert('Passwords do not match');
//   //     return;
//   //   }

//   //   const redirectPath = role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
//   //   navigate(redirectPath);
//   // };

// //   const handleRegister = (e) => {
// //   e.preventDefault();

// //   if (!fullName || !email || !password || !confirmPassword) {
// //     alert('Please fill in all fields');
// //     return;
// //   }

// //   if (password !== confirmPassword) {
// //     alert('Passwords do not match');
// //     return;
// //   }

// //   // Store mock user in localStorage
// //   localStorage.setItem('mockUser', JSON.stringify({ fullName, email, role , password}));

// //   // Redirect to login
// //   navigate('/login');
// // };

// const handleRegister = (e) => {
//   e.preventDefault();

//   if (!fullName || !email || !password || !confirmPassword) {
//     alert('Please fill in all fields');
//     return;
//   }

//   if (password !== confirmPassword) {
//     alert('Passwords do not match');
//     return;
//   }

//   // Get existing users from localStorage
//   const existingUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

//   // Check if email already exists
//   const emailExists = existingUsers.find(user => user.email.toLowerCase() === email.toLowerCase());

//   if (emailExists) {
//     alert('User with this email already exists');
//     return;
//   }

//   // Create new user
//   const newUser = { fullName, email, role, password };

//   // Save back to localStorage
//   localStorage.setItem('mockUsers', JSON.stringify([...existingUsers, newUser]));

//   // alert('Registered successfully!');
//   toast.success('Registered successfully! 🎉');
//   navigate('/login');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">REGISTER</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full mb-3 p-2 border rounded"
//           onChange={(e) => setFullName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-3 p-2 border rounded"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <select
//           className="w-full mb-3 p-2 border rounded"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="investor">Investor</option>
//           <option value="entrepreneur">Entrepreneur</option>
//         </select>

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-3 p-2 border rounded"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full mb-4 p-2 border rounded"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
//           Register
//         </button>

//         <p className="mt-4 text-center text-sm">
//           Already have an account? <Link to="/login" className="text-teal-600 font-medium hover:underline">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/ContextProvider';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     role: 'entrepreneur',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem('mockUsers')) || [];
//     const emailExists = users.some(user => user.email === formData.email);

//     if (emailExists) {
//       setError('Email already registered.');
//       return;
//     }

//     const newUser = {
//       ...formData,
//       bio: '',
//       startupDescription: '',
//       fundingNeed: '',
//       pitchDeck: '',
//       portfolio: [],
//       investmentInterests: '',
//     };

//     users.push(newUser);
//     localStorage.setItem('mockUsers', JSON.stringify(users));
//     login(newUser);

//     toast.success('Registration successful!');
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md">
//         <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center"> Register</h2>
//         {error && (
//           <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full p-3 border rounded outline-teal-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-3 border rounded outline-teal-400"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-3 border rounded outline-teal-400"
//             required
//           />
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full p-3 border rounded outline-teal-400"
//           >
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="investor">Investor</option>
//           </select>
//           <button
//             type="submit"
//             className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-all"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Already have an account?{' '}
//           <a href="/login" className="text-teal-600 font-medium hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'entrepreneur',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get('https://687bc6e0b4bc7cfbda873239.mockapi.io/api/users');
      const existingUser = res.data.find(user => user.email === formData.email);

      if (existingUser) {
        setError('Email already registered.');
        return;
      }

      const newUser = {
        ...formData,
        bio: '',
        startupDescription: '',
        fundingNeed: '',
        pitchDeck: '',
        portfolio: [],
        investmentInterests: '',
      };

      const created = await axios.post('https://687bc6e0b4bc7cfbda873239.mockapi.io/api/users', newUser);
      login(created.data);

      toast.success('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">Register</h2>
        {error && <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded outline-teal-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded outline-teal-400"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded outline-teal-400"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 border rounded outline-teal-400"
          >
            <option value="entrepreneur">Entrepreneur</option>
            <option value="investor">Investor</option>
          </select>
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-teal-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;



