import React, { use, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const { email, password } = formObj;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 max-w-[80%] mx-auto rounded-2xl">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Animation */}
        <div className="hidden md:flex items-center justify-center">
          <Lottie animationData={loginAnimation} loop className="w-3/4 h-3/4" />
        </div>

        {/* Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#35A3A7] mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              />
            </div>

            <button className="w-full py-3 bg-[#35A3A7] text-white rounded-lg">
              Login
            </button>
          </form>

          <p className="mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#35A3A7] font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
