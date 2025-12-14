import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#35A3A7] font-semibold"
              : "text-gray-700 hover:text-[#35A3A7] transition-colors"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#35A3A7] font-semibold"
              : "text-gray-700 hover:text-[#35A3A7] transition-colors"
          }
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/companies"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#35A3A7] font-semibold"
              : "text-gray-700 hover:text-[#35A3A7] transition-colors"
          }
        >
          Companies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#35A3A7] font-semibold"
              : "text-gray-700 hover:text-[#35A3A7] transition-colors"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#35A3A7] font-semibold"
              : "text-gray-700 hover:text-[#35A3A7] transition-colors"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="navbar bg-white shadow-md max-w-[80%] mx-auto rounded-b-3xl px-6">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#35A3A7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {menuOpen && (
              <ul className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            )}
          </div>

          {/* Logo */}
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="JobEarth Logo" className="h-20 w-auto" />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/register"
            className="btn bg-[#35A3A7] hover:bg-[#2e8f91] text-white rounded-2xl px-5"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
