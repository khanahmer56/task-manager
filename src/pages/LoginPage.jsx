import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      login(username);
      navigate("/tasks");
    } else {
      alert("Please enter username and password");
    }
  };
  return (
    <div className="h-screen w-screen bg-black/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/60 rounded-xl p-6 md:p-8">
        <h2 className="text-3xl text-white text-center font-bold">Login</h2>
        <div className="flex flex-col gap-4 mt-8">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-500 rounded-lg p-3 bg-gray-600 outline-none text-white w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 rounded-lg p-3 bg-gray-600 outline-none text-white w-full"
          />
          <button
            className="w-full bg-gray-800 p-3 text-white rounded-lg hover:bg-slate-600 mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
