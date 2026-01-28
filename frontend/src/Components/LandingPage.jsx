import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  CloudSun, 
  Cpu, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Star
} from 'lucide-react';

import Navbar from './Navbar';
import Footer from './footer.jsx';
import { useTheme } from '../Context/ThemeContext';

// Auth Guard Component
function TokenVerify() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);
  return null;
}

const FeatureCard = ({ icon: Icon, title, desc, delay, isDark }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
      isDark 
        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-emerald-500/50' 
        : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50 hover:border-emerald-200'
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 ${
      isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
    }`}>
      <Icon size={28} />
    </div>
    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
  </motion.div>
);

function LandingPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen w-full selection:bg-emerald-500 selection:text-white ${isDark ? 'bg-[#0f172a] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar />
      <TokenVerify />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-8">
              <Zap size={14} />
              <span>Next-Gen Agricultural Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
              Engineering the <span className={` bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 ${isDark ? 'text-emerald-400' : 'text-orange-400'}`}>Future of Farming</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Bridging the gap between engineering and agriculture. Harness AI models, real-time IoT data, and satellite insights to maximize yield.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2">
                Get Started Free <ArrowRight size={20} />
              </button>
              <button className={`px-8 py-4 font-bold rounded-2xl border transition-all ${
                isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-white'
              }`}>
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className={`aspect-square rounded-[3rem] overflow-hidden border-8 ${isDark ? 'border-slate-800' : 'border-white shadow-2xl'}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800" 
                alt="Smart Farming" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            {/* <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl backdrop-blur-xl ${isDark ? 'bg-slate-800/90 border border-slate-700' : 'bg-white/90 border border-slate-100'}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Yield Increase</div>
                  <div className="text-2xl font-black text-emerald-500">+42.8%</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-32 ${isDark ? 'bg-[#0f172a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Cutting-edge Toolkit</h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={BarChart3} 
              title="Crop Analytics" 
              desc="Deep-learning models to predict harvest quality and soil health."
              delay={0.1}
              isDark={isDark}
            />
            <FeatureCard 
              icon={CloudSun} 
              title="Weather IQ" 
              desc="Micro-climate tracking specific to your geofenced farm coordinates."
              delay={0.2}
              isDark={isDark}
            />
            <FeatureCard 
              icon={Cpu} 
              title="IoT Ecosystem" 
              desc="Seamlessly connect sensors, drones, and automated irrigation."
              delay={0.3}
              isDark={isDark}
            />
            <FeatureCard 
              icon={Sprout} 
              title="Sustainability" 
              desc="Optimize resources to reduce carbon footprint and water waste."
              delay={0.4}
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* Testimonials with Glass Effect */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className={`text-lg mb-8 italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  "The AI models provided insights we didn't think were possible without manual soil testing. It saved us thousands."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20" />
                  <div>
                    <div className="font-bold">Farm Director {i}</div>
                    <div className="text-sm text-slate-500">AgriTech Solutions</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-600 to-teal-800 p-12 md:p-20 text-center text-white">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to grow smarter?</h2>
            <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto">
              Join the 5,000+ agricultural engineers and modern farmers revolutionizing food production.
            </p>
            <button className="bg-white text-emerald-600 hover:scale-105 transition-transform px-10 py-5 rounded-2xl font-black text-lg shadow-xl">
              Start Your Free Journey
            </button>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;