import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 max-w-[80%] mx-auto rounded-2xl">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Lottie json */}
        <div className="hidden md:flex items-center justify-center bg-[#35A3A7]">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-3/4 h-3/4"
          />
        </div>

        {/* Registration Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#35A3A7] mb-6">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35A3A7]"
              />
            </div>

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
              Register
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#35A3A7] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
