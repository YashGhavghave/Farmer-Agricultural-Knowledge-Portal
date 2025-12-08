import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import OrganicFarming from "./FarmingTechnique/OrganicFarming";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profile, setprofile] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate()

  const dropdownRefs = useMemo(
    () => ({
      farming: React.createRef(),
      soil: React.createRef(),
      irrigation: React.createRef(),
      crops: React.createRef(),
      pest: React.createRef(),
      equipment: React.createRef(),
    }),
    []
  );


  const LogoutRefs = useMemo(
    () => ({
      logout: React.createRef()
    }), []
  )


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
    <header className="w-full bg-gray-300 text-sm py-3 shadow">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between"
        ref={mobileRef}
      >
        <a href="/" className="relative inline-block px-5 py-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/20 to-teal-400/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
          <span className="relative z-10 text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-black font-mono bg-clip-text text-transparent drop-shadow-lg ">
            AKP
          </span>
          {/* Subtle shine effect */}
          <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent -skew-x-12 transform origin-left group-hover:translate-x-full transition-transform duration-700"></div>
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
          <a className="font-medium text-black block sm:inline" href="/">
            Home
          </a>
          {[
            {
              id: "farming",
              label: "Farming Techniques",
              items: [
                "Organic farming",
                "Subsistence farming",
                "Aquaponics",
                "Vertical farming",
                "Commercial farming",
                "Agroforestry",
                "Dryland farming",
                "Precision farming",
                "Hydroponics",
                "Mixed farming",
                "Plantation farming",
                "Permaculture",
                "Shifting cultivation",
                "Urban agriculture",
                "Extensive farming",
                "Pastoral farming",
                "Aeroponics",
                "Intensive farming"
              ],
              link: [
                '/farming_technique/organic-farming',
                '/farming_technique/subsistence-farming',
                '/farming_technique/aquaponics',
                '/farming_technique/vertical-farming',
                '/farming_technique/commercial-farming',
                '/farming_technique/agroforestry',
                '/farming_technique/dryland-farming',
                '/farming_technique/precision-farming',
                '/farming_technique/hydroponics',
                '/farming_technique/mixed-farming',
                '/farming_technique/plantation-farming',
                '/farming_technique/permaculture',
                '/farming_technique/shifting-cultivation',
                '/farming_technique/urban-agriculture',
                '/farming_technique/extensive-farming',
                '/farming_technique/pastoral-farming',
                '/farming_technique/aeroponics',
                '/farming_technique/intensive-farming'
              ]
            },
            {
              id: "soil",
              label: "Soil & Resources",
              items: ["Soil Types", "Soil Testing", "Fertilizers Organic", "Fertilizers Chemical", "Soil Amendments"],
              link: [
                "/soil/soil-types", 
                "/soil/soil-testing", 
                "/soil/fertilizers-organic", 
                "/soil/fertilizers-chemical", 
                "/soil/soil-amendments"
              ]
            },
            {
              id: "irrigation",
              label: "Irrigation & Water",
              items: ["Irrigation Methods", "Water Harvesting", "Drip & Sprinkler Guide"],
              link: [
                "/Irrigation/irrigation-methods", 
                "/Irrigation/water-harvesting", 
                "/Irrigation/drip-sprinkler-guide"
              ]
            },
            {
              id: "crops",
              label: "Crops & Guides",
              items: ["Grains", "Pulses", "Cash Crops", "Vegetables & Fruits"],
              link: [
                "/crops_guides/grains", 
                "/crops_guides/pulses", 
                "/crops_guides/cash-crops", 
                "/crops_guides/vegetables-fruits"
              ]
            },
            {
              id: "pest",
              label: "Pest & Disease Management",
              items: ["Bio-pesticides", "Chemical Pesticides", "IPM Guide"],
              link: [
                "/pest_disease_management/bio-pesticides", 
                "/pest_disease_management/chemical-pesticides", 
                "/pest_disease_management/ipm-guide"
              ]
            },
            {
              id: "equipment",
              label: "Tools & Machinery",
              items: ["Soil Preparation Tools", "Irrigation Equipment", "Harvesting Tools"],
              link: [
                "/tools_machinery/soil-tools", 
                "/tools_machinery/irrigation-equipment", 
                "/tools_machinery/harvesting-tools"
              ]
            }

          ].map(({ id, label, items, link }) => (
            <div key={id} className="relative inline-block" ref={dropdownRefs[id]}>
              <button
                onClick={() => toggleDropdown(id)}
                className="flex items-center font-medium text-black gap-2 cursor-pointer"
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
        <div className="relative cursor-pointer" ref={LogoutRefs.logout}>
          <button
            className="h-8 w-8 bg-neutral-600 rounded-full text-white flex items-center justify-center cursor-pointer,"
            onClick={() => volatileprofile('logout')}
          >
            {loginchar("Name")}
          </button>


          {/* Dropdown */}
          {profile === "logout" && (
            <div
              onClick={logout}
              className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50 p-4 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') logout();
              }}
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
