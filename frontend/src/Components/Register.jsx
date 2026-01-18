import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useTheme } from '../Context/ThemeContext';

function MyComponent() {
  const { isDark } = useTheme();
  return <div className={isDark ? 'dark-classes' : 'light-classes'}>...</div>;
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // "success" or "error"

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/create",
        { name, email, password },
        { withCredentials: true }
      );

      setType("success");
      setMessage(res.data.message);

      if (res.status === 201) {
        // localStorage.setItem("token", res.data.token);

        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (error) {
      setType("error");

      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Network error");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Register
        </h1>

        {/* Alert Box */}
        {message && (
          <div
            className={`p-3 mb-4 text-sm rounded-md border
            ${type === "success"
              ? "bg-green-100 text-green-700 border-green-300"
              : "bg-red-100 text-red-700 border-red-300"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-red-500 transition-all"
          >
            Create Account
          </button>
          <a href="/login" className="text-blue-500">Sign In</a>
        </form>
      </div>
    </div>
  );
}

export default Register;
