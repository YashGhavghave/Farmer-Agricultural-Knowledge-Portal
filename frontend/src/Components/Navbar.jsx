import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, Moon, Sun, LogOut, Home, BookOpen, Package, Leaf, TrendingUp, Info, Wrench } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const [profile, setProfile] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const logout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('Name');
      localStorage.removeItem('avatar');
      localStorage.removeItem('role');
      localStorage.removeItem('code_verifier');
      navigate('/login');
    } catch (err) {
      alert("Cannot logout - ", err.message);
    }
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return setIsAdmin(false);
    try {
      const parts = token.split('.');
      if (parts.length === 3) {
        const payload = parts[1].replace(/-/g,'+').replace(/_/g,'/');
        const json = decodeURIComponent(atob(payload).split('').map(function(c){
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const p = JSON.parse(json);
        setIsAdmin(!!(p && p.role === 'admin'));
        if (p && p.role) localStorage.setItem('role', p.role);
      }
    } catch (err) {
      console.error('Navbar token decode failed', err);
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      logout();
    }
  }, [localStorage.getItem('token')]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfile(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfile = () => {
    setProfile(profile === 'logout' ? null : 'logout');
  };

  const loginChar = (jin) => {
    const arr = localStorage.getItem(jin);
    return !arr ? "U" : arr[0].toUpperCase();
  };

  const navLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "Farming Chapters", path: "/nav/farming_chapter", icon: BookOpen },
    { label: "Fertilizers", path: "/nav/fertilizer", icon: Package },
    { label: "Soil", path: "/nav/soil", icon: Leaf },
    { label: "Market & Business", path: "/nav/market&growingbusiness", icon: TrendingUp },
    { label: "About", path: "/nav/about", icon: Info },
    { label: "Tools & Machinery", path: "/nav/Tools&machinery", icon: Wrench },
  ];

  useEffect(() => {
    // Fetch user data including avatar from backend
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const response = await fetch('http://localhost:3000/api/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.user?.avatar) {
            localStorage.setItem('avatar', data.user.avatar);
          }
        }
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className={`w-full ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} shadow-md transition-colors duration-300`}>
      <nav className="max-w-[90rem] w-full mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className={`relative inline-block px-4 py-2 backdrop-blur-xl transition-all duration-300 rounded-3xl group overflow-hidden flex-shrink-0
          ${isDark 
            ? 'bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60 shadow-lg hover:shadow-xl' 
            : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/20 to-teal-400/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100`}></div>
          <span className={`relative z-10 text-2xl font-black font-mono drop-shadow-lg
            ${isDark 
              ? 'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-yellow-400' 
              : 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-black'
            }`}
          >
            AKP
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg flex items-center gap-2 font-medium transition-all duration-200 text-sm
                ${isDark
                  ? 'hover:bg-gray-800 text-gray-300 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                }`}
            >
              <link.icon size={16} />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Right Section: Theme Toggle & Profile */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
            {isAdmin && (
              <Link to="/admin" className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Admin
              </Link>
            )}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative cursor-pointer" ref={dropdownRef}>
            <button
              onClick={toggleProfile}
              className={`h-10 w-10 rounded-full font-bold flex items-center justify-center overflow-hidden transition-all duration-200 text-white
                ${isDark 
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 hover:shadow-lg hover:scale-105' 
                  : 'bg-gradient-to-br from-green-500 to-emerald-600 hover:shadow-lg hover:scale-105'
                }`}
            >
              {localStorage.getItem('avatar') ? (
                <img
                  src={localStorage.getItem('avatar')}
                  alt={localStorage.getItem('Name') || 'avatar'}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className={`${isDark ? 'text-white' : 'text-black'}`}>{loginChar("Name")}</span>
              )}
            </button>

            {profile === "logout" && (
              <div
                className={`absolute right-0 mt-3 w-48 rounded-lg shadow-xl z-50 overflow-hidden
                  ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
              >
                <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {localStorage.getItem('Name') || 'User'}
                  </p>
                </div>
                <button
                  onClick={logout}
                  className={`w-full px-4 py-3 flex items-center gap-2 font-medium transition-colors duration-200
                    ${isDark
                      ? 'text-red-400 hover:bg-gray-700'
                      : 'text-red-600 hover:bg-gray-50'
                    }`}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`lg:hidden border-t transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="max-w-[90rem] mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all duration-200
                  ${isDark
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white'
                    : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                  }`}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
