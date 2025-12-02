import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profile, setprofile] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate()

  // Memoize refs (important!)
  const dropdownRefs = useMemo(
    () => ({
      farming: React.createRef(),
      grains: React.createRef(),
      seasonal: React.createRef(),
      soil: React.createRef(),
      pesticides: React.createRef(),
    }),
    []
  );

  const LogoutRefs = useMemo(
    () => ({
      logout: React.createRef()
    }), []
  )

  // const profileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      const ref = LogoutRefs.logout;
      if (ref.current && !ref.current.contains(e.target)) {
        setprofile(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profile, LogoutRefs]);


  const mobileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(e.target)) {
          if (openDropdown === key) {
            setOpenDropdown(null);
          }
        }
      })
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, dropdownRefs]);

  // Close mobile menu on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (LogoutRefs.logout.current && !LogoutRefs.logout.current.contains(e.target)) {
        setprofile(null)
      }

    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


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


  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const volatileprofile = (option) => {
    setprofile(profile === option ? null : option)
  }

  const loginchar = (jin) => {
    const arr = localStorage.getItem(jin)
    return !arr ? "U" : arr[0]
  }

  return (
    <header className="w-full bg-white dark:bg-neutral-800 text-sm py-3 shadow">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between"
        ref={mobileRef}
      >
        {/* Brand */}
        <a href="/" className="text-xl font-semibold dark:text-white">
          AKP
        </a>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden p-2 border rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {!mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`${mobileOpen ? "block" : "hidden"
            } w-full sm:flex sm:w-auto sm:items-center sm:gap-6 mt-4 sm:mt-0`}
        >
          <a className="font-medium text-gray-400 block sm:inline" href="/">
            Home
          </a>
          {[
            {
              id: "farming",
              label: "Farming Techniques",
              items: ["Dashboard", "Settings", "Earnings"],
              link: ['/dashboard', '/settings', '/earnings']
            },
            {
              id: "grains",
              label: "Grains & Produce",
              items: ["Rice", "Wheat", "Corn"],
              link: ['/rice', '/wheat', '/corn']
            },
            {
              id: "seasonal",
              label: "Seasonal Produce",
              items: ["Summer", "Winter", "Rainy"],
              link: ['/summary', '/winter', '/rainy']
            },
            {
              id: "soil",
              label: "Soil & Resources",
              items: ["Soil Types", "Fertilizers", "Guides"],
              link: ['/Soil', '/Fertilizers', '/Guides']
            },
            {
              id: "pesticides",
              label: "Pesticides & Guides",
              items: ["Organic", "Chemical", "Usage Guide"],
              link: ['/organic', '/chemical', '/usage']
            },

          ].map(({ id, label, items, link }) => (
            <div key={id} className="relative inline-block" ref={dropdownRefs[id]}>
              <button
                onClick={() => toggleDropdown(id)}
                className="flex items-center font-medium text-gray-400 gap-2 cursor-pointer"
              >
                {label}
              </button>

              {openDropdown === id && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50 p-3">
                  {items.map((item, i) => (
                    <a
                      key={i}
                      href={link[i]}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative" ref={LogoutRefs.logout}>
          <button
            className="h-8 w-8 bg-neutral-600 rounded-full text-white flex items-center justify-center cursor-pointer"
            onClick={() => volatileprofile('logout')}
          >
            {loginchar("Name")}
          </button>


          {/* Dropdown */}
          {profile === "logout" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50 p-4">
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
