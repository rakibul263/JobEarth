import React, { use, useState } from "react";
import { useNavigate, Link, useNavigation } from "react-router";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const { name, email, password, ...restData } = formObj;

    createUser(email, password)
      .then((result) => {
        navigate("/");
        console.log(result.user);
        return updateProfile(result.user, {
          displayName: name,
        }).then(() => {});
      })
      .catch((error) => {
        console.log(error);
      });

    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 max-w-[80%] mx-auto rounded-2xl">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Lottie json */}
        <div className="hidden md:flex items-center justify-center ">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-3/4 h-3/4"
          />
        </div>

        {/*Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#35A3A7] mb-6">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
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
