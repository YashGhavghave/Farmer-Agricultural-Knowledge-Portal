import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Lock, 
  UserPlus, 
  ArrowRight, 
  ShieldCheck, 
  Loader2, 
  AlertCircle,
  CheckCircle2
} from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" }); // "success" | "error"
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const res = await axios.post(
        "http://localhost:3000/api/create",
        formData,
        { withCredentials: true }
      );

      setStatus({ message: res.data.message || "Account created successfully!", type: "success" });
      
      if (res.status === 201) {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      setStatus({ 
        message: error.response?.data?.message || "Registration failed. Please try again.", 
        type: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f8fafc]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-100/50 overflow-hidden flex flex-col lg:flex-row-reverse"
      >
        {/* Visual Brand Panel */}
        <div className="lg:w-1/2 bg-teal-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
              <UserPlus size={28} />
            </div>
            <h3 className="text-4xl font-black leading-tight mb-4">
              Start Your <br /> Agricultural Journey.
            </h3>
            <p className="text-teal-50 opacity-80 max-w-sm">
              Join a community of forward-thinking farmers using technology to maximize yields and protect the environment.
            </p>
          </div>

          <div className="mt-12 relative z-10 space-y-4">
             <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10">
                <ShieldCheck className="text-teal-300" size={20} />
                <span className="text-sm font-medium">Verified Educational Content</span>
             </div>
             <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10">
                <CheckCircle2 className="text-teal-300" size={20} />
                <span className="text-sm font-medium">Personalized Crop Monitoring</span>
             </div>
          </div>

          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full -mr-32 -mb-32 blur-3xl" />
        </div>

        {/* Form Panel */}
        <div className="lg:w-1/2 p-8 lg:p-16">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black text-gray-900">Create Account</h2>
            <p className="text-gray-500 mt-2 text-sm italic">"The best time to plant a tree was 20 years ago. The second best time is now."</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="relative group">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative group">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-gray-200 disabled:opacity-70 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" /> : <UserPlus size={20} />}
              {loading ? 'Processing...' : 'Create My Account'}
            </button>
          </form>

          {/* Feedback Messages */}
          <AnimatePresence>
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`mt-6 p-4 rounded-2xl text-sm font-bold flex items-center gap-3 border ${
                  status.type === "success" 
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                  : "bg-red-50 text-red-700 border-red-100"
                }`}
              >
                {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-8 text-center text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 font-black hover:underline inline-flex items-center gap-1">
              Sign In <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;