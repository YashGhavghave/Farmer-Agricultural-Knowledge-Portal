import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

function Navbar() {
  const [profile, setprofile] = useState(null);
  const navigate = useNavigate()

  const dropdownRef = useRef(null);

  const LogoutRefs = useMemo(
    () => ({
      logout: React.createRef()
    }), []
  )

  const logout = () => {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('Name')
      localStorage.removeItem('code_verifier')
      navigate('/login')
    } catch (err) {
      alert("Cannot logout - ", err.message)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      logout();
    }
  }, [localStorage.getItem('token')]);

  // ❗ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setprofile(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const volatileprofile = (option) => {
    setprofile(profile === option ? null : option)
  }

  const loginchar = (jin) => {
    const arr = localStorage.getItem(jin)
    return !arr ? "U" : arr[0]
  }

  return (
    <header className="w-full bg-gray-300 text-sm py-3 shadow">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">

        <a href="/" className="relative inline-block px-5 py-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/20 to-teal-400/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
          <span className="relative z-10 text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-black font-mono bg-clip-text text-transparent drop-shadow-lg ">
            AKP
          </span>
        </a>

        <div className="flex gap-6 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/nav/farming_chapter">Farming Chapters</Link>
          <Link to="/nav/fertilizer">Fertilizers</Link>
          <Link to="/nav/soil">Soil</Link>
          <Link to="/nav/market&growingbusiness">Market & Growing Business</Link>
          <Link to="/nav/about">About</Link>
          <Link to="/nav/Tools&machinery">Tools and Machinery</Link>
        </div>

        {/* Profile section with outside click closing */}
        <div className="relative cursor-pointer" ref={dropdownRef}>
          <button
            className="h-8 w-8 bg-neutral-600 rounded-full text-white flex items-center justify-center"
            onClick={() => volatileprofile('logout')}
          >
            {loginchar("Name")}
          </button>

          {profile === "logout" && (
            <div
              onClick={logout}
              className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50 p-4 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <span className="block text-center font-medium text-gray-800">
                Logout
              </span>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
