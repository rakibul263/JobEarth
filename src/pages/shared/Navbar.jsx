import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="JobEarth Logo" className="h-20 w-auto" />
          </div>
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#35A3A7] font-semibold"
                      : "text-gray-600 hover:text-[#35A3A7] transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login Button (Slide Left) */}
          <div className="hidden md:block">
            <NavLink
              to="/login"
              className="relative overflow-hidden px-5 py-2 font-semibold rounded-full border border-[#35A3A7] text-[#35A3A7] group hover:bg-[#35A3A7] hover:text-white"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-semibold" : "text-gray-700"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <NavLink
              to="/login"
              className="mt-2 text-center px-4 py-2 rounded-md bg-green-600 text-white"
            >
              Login
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
