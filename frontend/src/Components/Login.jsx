import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, LogIn, Chrome, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // --------------------------
  // AUTH LOGIC
  // --------------------------

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(
        'http://localhost:3000/api/login',
        { email, password, rememberMe },
        { withCredentials: true }
      );

      if (res.status === 200) {
        const { token, user } = res.data;
        
        // Batch store user data
        localStorage.setItem('token', token);
        localStorage.setItem('Name', user.name);
        localStorage.setItem('avatar', user.avatar);
        localStorage.setItem('role', user.role);

        // Immediate navigation based on role
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // --------------------------
  // PKCE GOOGLE HELPERS
  // --------------------------
  const base64urlencode = (buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };

  const sha256 = async (text) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    return await crypto.subtle.digest('SHA-256', data);
  };

  const loginWithGoogle = async () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT;
    const redirectUri = 'http://localhost:3000/api/google/auth';
    
    const verifier = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('code_verifier', verifier);

    const hashed = await sha256(verifier);
    const challenge = base64urlencode(hashed);

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f8fafc]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-emerald-100/50 overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Left Visual Panel */}
        <div className="lg:w-1/2 bg-emerald-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8"
            >
              <ShieldCheck size={28} />
            </motion.div>
            <h3 className="text-4xl font-black leading-tight mb-4">
              Cultivate your <br /> Knowledge.
            </h3>
            <p className="text-emerald-50 opacity-80 max-w-sm">
              Access premium agricultural insights, AI-driven soil analysis, and a global community of modern farmers.
            </p>
          </div>

          <div className="mt-12 relative z-10">
            <div className="flex -space-x-3 mb-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-600 bg-emerald-400 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-emerald-600 bg-emerald-800 flex items-center justify-center text-[10px] font-bold">
                10k+
              </div>
            </div>
            <p className="text-sm font-medium">Join over 10,000 farmers today.</p>
          </div>

          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>

        {/* Right Form Panel */}
        <div className="lg:w-1/2 p-8 lg:p-16">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to manage your farm.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-9 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors " size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12  pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                  placeholder="name@farm.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <Link to="/forgot-password" size={20} className="text-xs font-bold text-emerald-600 hover:text-emerald-700">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-9 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input 
                id="remember"
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-2 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" 
              />
              <label htmlFor="remember" className="text-sm text-gray-600 font-medium cursor-pointer">Keep me logged in</label>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-gray-200 disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" /> : <LogIn size={20} />}
              {loading ? 'Verifying...' : 'Sign In'}
            </button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium flex items-center gap-2"
              >
                <AlertCircle size={18} /> {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-gray-100" />
              <span className="absolute px-4 bg-white text-xs font-bold text-gray-400 uppercase tracking-widest">Or login with</span>
            </div>

            <button 
              onClick={loginWithGoogle}
              className="w-full py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
            >
              <Chrome size={20} className="text-red-500" />
              Google Account
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? <Link to="/register" className="text-emerald-600 font-black hover:underline">Join Now</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;