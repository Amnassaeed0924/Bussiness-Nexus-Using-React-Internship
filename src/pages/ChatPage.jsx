// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ChatPage = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
//   const allUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

//   const [chattingWith, setChattingWith] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const targetUser = allUsers.find(user => user.id === userId);
//     if (!targetUser) {
//       alert('User not found');
//       navigate(-1);
//     } else {
//       setChattingWith(targetUser);
//     }
//   }, [userId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const newMessage = {
//       sender: loggedInUser.fullName,
//       content: input.trim(),
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setMessages(prev => [...prev, newMessage]);
//     setInput('');

//     setTimeout(() => {
//       const reply = {
//         sender: chattingWith.fullName,
//         content: "Thanks for reaching out!",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages(prev => [...prev, reply]);
//     }, 1000);
//   };

//   if (!chattingWith) return null;

//   return (
//     <div className="h-screen max-h-screen flex flex-col p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto w-full">
//       <div className="border-b pb-3 mb-3">
//         <h2 className="text-xl font-semibold text-blue-600">
//           Chat with {chattingWith.fullName}
//         </h2>
//         <p className="text-sm text-gray-500">{chattingWith.email}</p>
//       </div>

//       <div className="flex-1 overflow-y-auto space-y-3 mb-4 p-2 border rounded-md bg-gray-50">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex flex-col max-w-[75%] ${
//               msg.sender === loggedInUser.fullName
//                 ? 'ml-auto text-right items-end'
//                 : 'mr-auto text-left items-start'
//             }`}
//           >
//             <div
//               className={`px-4 py-2 rounded-lg shadow ${
//                 msg.sender === loggedInUser.fullName
//                   ? 'bg-blue-100 text-blue-800'
//                   : 'bg-gray-200 text-gray-800'
//               }`}
//             >
//               {msg.content}
//             </div>
//             <span className="text-xs text-gray-400 mt-1">{msg.timestamp}</span>
//           </div>
//         ))}
//         <div ref={messagesEndRef}></div>
//       </div>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;

import React, { useState, useRef, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      sender: loggedInUser?.fullName || 'You',
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      const autoReply = {
        sender: 'Other User',
        content: 'Thanks for reaching out!',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-screen p-4 flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-3xl flex flex-col flex-1 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Chat Room</h2>

        <div className="flex-1 overflow-y-auto mb-4 p-2 bg-gray-50 border rounded">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 flex flex-col ${
                msg.sender === (loggedInUser?.fullName || 'You')
                  ? 'items-end'
                  : 'items-start'
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg shadow ${
                  msg.sender === (loggedInUser?.fullName || 'You')
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
              <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
