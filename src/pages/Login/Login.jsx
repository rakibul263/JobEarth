import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json"; // তোমার Lottie JSON path

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 max-w-[80%] mx-auto rounded-2xl">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Lottie Animation */}
        <div className="hidden md:flex items-center justify-center">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-3/4 h-3/4"
          />
        </div>

        {/* Login Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#35A3A7] mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35A3A7]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35A3A7]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#35A3A7] text-white font-semibold rounded-lg hover:bg-[#2e8f91] transition-colors"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#35A3A7] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
