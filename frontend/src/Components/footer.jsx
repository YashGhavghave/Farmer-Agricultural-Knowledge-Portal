import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, Facebook, Twitter, Instagram, 
  Linkedin, Github, Mail, Phone, MapPin, 
  ExternalLink 
} from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Github, href: "#", color: "hover:text-gray-400" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Chapters", path: "/nav/farming_chapter" },
    { name: "Fertilizers", path: "/nav/fertilizer" },
    { name: "About Us", path: "/nav/about" },
  ];

  return (
    <footer className={`transition-colors duration-300 border-t ${
      isDark 
        ? 'bg-[#0f172a] text-slate-400 border-white/5' 
        : 'bg-white text-slate-600 border-black/5'
    }`}>
      {/* Social Bar */}
      <div className={`border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-medium text-sm">Join our agricultural community:</span>
          <div className="flex gap-6">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className={`transition-all duration-300 transform hover:scale-110 ${social.color}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Leaf className="text-white" size={18} fill="currentColor" />
              </div>
              <span className={`text-xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AKP<span className="text-emerald-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Bridging the gap between traditional farming and modern technology. Empowering the next generation of agriculturists with data-driven insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className={`font-bold uppercase text-xs tracking-widest mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Platform
            </h6>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-emerald-500 transition-colors flex items-center gap-2">
                    <ExternalLink size={12} /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className={`font-bold uppercase text-xs tracking-widest mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h6>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Market Trends</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className={`font-bold uppercase text-xs tracking-widest mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" />
                <span>support@akp.agri</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className={`py-8 text-center text-xs border-t ${
        isDark ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-black/5'
      }`}>
        <p>© {new Date().getFullYear()} AKP Agriculture Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}