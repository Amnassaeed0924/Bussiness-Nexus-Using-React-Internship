// export default function Login() {
//   return <h1 className="text-2xl text-center mt-10">Login Page</h1>;
// }

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     alert('Please enter both email and password');
  //     return;
  //   }

  //   // Simulated role-based login
  //   const isInvestor = email.includes('investor');
  //   const redirectPath = isInvestor ? '/dashboard/investor' : '/dashboard/entrepreneur';

  //   navigate(redirectPath);
  // };

//   const handleLogin = (e) => {
//   e.preventDefault();

//   if (!email || !password) {
//     alert('Please enter both email and password');
//     return;
//   } 


//   const storedUser = JSON.parse(localStorage.getItem('mockUser'));

//   if (!storedUser) {
//     alert('User not found. Please register.');
//     return;
//   } else if(storedUser.email !== email){
//     alert('Incorrect Email.');
//     return;
//   } else if(storedUser.password !== password){
//     alert('Incorrect Password.');
//     return;
//   } 

//   const redirectPath = storedUser.role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
//   navigate(redirectPath);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">LOGIN</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-3 p-2 border rounded"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border rounded"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
//           Login
//         </button>

//         <p className="mt-4 text-center text-sm">
//           Don't have an account? <Link to="/register" className="text-teal-600 font-medium hover:underline">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   setError(''); // Reset previous error

//   //   const trimmedEmail = email.trim().toLowerCase();
//   //   const trimmedPassword = password.trim();

//   //   if (!trimmedEmail || !trimmedPassword) {
//   //     setError('Please enter both email and password.');
//   //     return;
//   //   }

//   //   const storedUser = JSON.parse(localStorage.getItem('mockUser'));

//   //   if (!storedUser) {
//   //     setError('User not found. Please register.');
//   //     return;
//   //   }

//   //   if (storedUser.email.toLowerCase() !== trimmedEmail) {
//   //     setError('Incorrect email.');
//   //     return;
//   //   }

//   //   if (storedUser.password !== trimmedPassword) {
//   //     setError('Incorrect password.');
//   //     return;
//   //   }
//   //   if(storedUser.email.toLowerCase() !== trimmedEmail || storedUser.password !== trimmedPassword ){
//   //     setError('Invalid Credentials.');
//   //     return;
//   //   }

//   //   // Redirect based on role
//   //   const redirectPath = storedUser.role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
//   //   navigate(redirectPath);
//   // };

//   const handleLogin = (e) => {
//   e.preventDefault();
//   setError('');

//   const trimmedEmail = email.trim().toLowerCase();
//   const trimmedPassword = password.trim();

//   if (!trimmedEmail || !trimmedPassword) {
//     setError('Please enter both email and password.');
//     return;
//   }

//   const storedUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

//   const user = storedUsers.find(
//     u => u.email.toLowerCase() === trimmedEmail && u.password === trimmedPassword
//   );

//   if (!user) {
//     setError('Invalid email or password.');
//     return;
//   }

//   // Store current user session
//   localStorage.setItem('loggedInUser', JSON.stringify(user));

//   const redirectPath = user.role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
//   toast.success('Logged in successfully! 🚀');
//   navigate(redirectPath);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">LOGIN</h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
//             {error}
//           </div>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-3 p-2 border rounded outline-teal-400"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border rounded outline-teal-400"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-all"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-center text-sm">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-teal-600 font-medium hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/ContextProvider';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: '', password: '' });
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

//     const user = users.find(
//       u => u.email === formData.email && u.password === formData.password
//     );

//     if (!user) {
//       setError('Invalid email or password.');
//       return;
//     }

//     login(user);

//     toast.success('Login successful!');

//     const path = user.role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
//     navigate(path);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md">
//         <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center"> Login</h2>
//         {error && (
//           <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
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
//           <button
//             type="submit"
//             className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-all"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Don’t have an account?{' '}
//           <a href="/register" className="text-teal-600 font-medium hover:underline">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const users = res.data;

      const user = users.find(
        u => u.email === formData.email && u.password === formData.password
      );

      if (!user) {
        setError('Invalid email or password.');
        return;
      }

      login(user);
      toast.success('Login successful!');

      const path = user.role === 'investor' ? '/dashboard/investor' : '/dashboard/entrepreneur';
      navigate(path);
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">Login</h2>
        {error && <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <a href="/register" className="text-teal-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;





