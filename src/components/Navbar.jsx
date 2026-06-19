import { NavLink, Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import logo from "../assets/logo.png";
import heroimg from "../assets/heroimg.jpg";

function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="absolute top-1 bottom-1 rounded-full bg-green-500 z-0"
    />
  );
}

function Tab({ children, to, setPosition }) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="relative z-10"
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block px-5 py-2 text-sm font-medium uppercase transition-colors duration-300 ${
            isActive
              ? "text-black font-semibold"
              : "text-gray-800 hover:text-white"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

function NavLinks() {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-md"
      onMouseLeave={() => {
        if (!showProjectsDropdown) {
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }
      }}
    >
      <Tab to="/" setPosition={setPosition}>
        Home
      </Tab>

      <Tab to="/about" setPosition={setPosition}>
        About
      </Tab>

      {/* Projects */}
      <li
        className="relative z-10"
        onMouseEnter={(e) => {
          setShowProjectsDropdown(true);

          setPosition({
            left: e.currentTarget.offsetLeft,
            width: e.currentTarget.offsetWidth,
            opacity: 1,
          });
        }}
      >
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block px-5 py-2 text-sm font-medium uppercase transition-colors duration-300 ${
              isActive
                ? "text-black font-semibold"
                : "text-gray-800 hover:text-white"
            }`
          }
        >
          Projects
        </NavLink>

        {showProjectsDropdown && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 px-2 z-50"
            onMouseEnter={() => setShowProjectsDropdown(true)}
            onMouseLeave={() => {
              setShowProjectsDropdown(false);

              setPosition((prev) => ({
                ...prev,
                opacity: 0,
              }));
            }}
          >
            <div className="grid gap-2">
              <Link
                to="/projects/all"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={heroimg}
                    alt="All Projects"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    All Projects
                  </h3>
                  <p className="text-sm text-gray-600">
                    Browse all available plots
                  </p>
                </div>
              </Link>

              <Link
                to="/projects/featured"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={heroimg}
                    alt="Featured Projects"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Featured Projects
                  </h3>
                  <p className="text-sm text-gray-600">
                    Premium farm plots
                  </p>
                </div>
              </Link>

              <Link
                to="/projects/ongoing"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={heroimg}
                    alt="Ongoing Projects"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Ongoing Projects
                  </h3>
                  <p className="text-sm text-gray-600">
                    Under Development
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </li>

      <Tab to="/contact" setPosition={setPosition}>
        Contact Us
      </Tab>

      <Cursor position={position} />
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center w-48">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain rounded"
            />
          </Link>

          {/* Navigation */}
          <div className="flex-1 flex justify-center">
            <NavLinks />
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search properties..."
                className="
                  w-60
                  pl-12
                  pr-4
                  py-3
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  placeholder-gray-400
                  outline-none
                  transition-all
                  duration-300
                  focus:w-72
                  focus:border-green-500
                  focus:shadow-lg
                "
              />

              <HiMagnifyingGlass
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  text-xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}