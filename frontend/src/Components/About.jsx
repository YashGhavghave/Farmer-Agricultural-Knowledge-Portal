import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Leaf, Sprout, Tractor, Fish, 
  ThermometerSun, TrendingUp, Users, Globe, ShieldCheck, Zap 
} from 'lucide-react';
import PageTemplate from './ui/PageTemplate';
import {useTheme} from '../Context/ThemeContext.jsx';


const AboutCard = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay }}
  className="relative group p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 
  bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-emerald-500/30 mb-8"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
        <Icon size={30} />
      </div>
      <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
      {children}
    </div>
  </motion.section>
);

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
    <Icon className="text-emerald-400 mb-2" size={24} />
    <span className="text-3xl font-black text-white">{value}</span>
    <span className="text-xs uppercase tracking-widest text-emerald-200 font-bold mt-1">{label}</span>
  </div>
);

function About() {
  const  {isDark}  = useTheme();
  return (
    <PageTemplate title={'About Us'}>
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-24">
        
        {/* --- Hero Intro --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-black uppercase tracking-widest border border-emerald-500/20 mb-6">
            <Globe size={14} /> Our Global Impact
          </div>
          <h1 className={`text-black text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-gray-500 leading-[1.1]`}>
            Rooted in <span className=" bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Innovation</span>, <br />
            Driven by <span className="italic font-serif">Data.</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are bridging the gap between ancestral agricultural wisdom and 21st-century 
            precision technology to ensure a food-secure future.
          </p>
        </motion.div>

        {/* --- Vision & Mission --- */}
        <div className="grid md:grid-cols-2 gap-8">
          <AboutCard title="Our Mission" icon={Target} delay={0.1}>
            To democratize high-tech agricultural insights. We empower smallholder farmers with 
            real-time digital advisory tools that were once only available to industrial-scale operations.
          </AboutCard>
          
          <AboutCard title="Our Vision" icon={Eye} delay={0.2}>
            To become the world’s most trusted ecosystem for sustainable farming, where every 
            acre is managed with the precision of a laboratory and the heart of a steward.
          </AboutCard>
        </div>

        {/* --- Core Values Bento --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="col-span-2 bg-emerald-600 rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
            <Zap size={40} className="mb-8" />
            <div>
              <h3 className="text-3xl font-black mb-2">Real-Time Insight</h3>
              <p className="text-emerald-100 opacity-80">Our AI models process satellite and soil data in seconds, not days.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white flex flex-col items-center justify-center text-center">
             <Users className="text-emerald-500 mb-4" size={32} />
             <h4 className="font-bold">15k+</h4>
             <p className="text-xs text-gray-400">Active Farmers</p>
          </div>
          <div className="bg-teal-50 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center border border-teal-100">
             <ShieldCheck className="text-teal-600 mb-4" size={32} />
             <h4 className="font-bold text-teal-900">100%</h4>
             <p className="text-xs text-teal-600">Science Backed</p>
          </div>
        </motion.div>

        {/* --- Sector Powerhouse --- */}
        <motion.section 
          className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                The Engine of <br /> Rural Prosperity
              </h2>
              <p className="text-emerald-100 text-lg mb-8 opacity-80">
                We focus on the four critical pillars of the Indian agricultural economy, 
                optimizing each for maximum yield and minimum environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatItem label="Export Share" value="14%" icon={TrendingUp} />
                <StatItem label="Workforce" value="48%" icon={Users} />
              </div>
            </div>
            
            <div className="grid gap-4">
              {[
                { icon: Sprout, t: "Crop Production", d: "Optimizing staples like Rice & Wheat." },
                { icon: ThermometerSun, t: "Horticulture", d: "High-value fruits and exotic floriculture." },
                { icon: Tractor, t: "Dairy Tech", d: "Precision nutrition for livestock." },
                { icon: Fish, t: "Aquaculture", d: "Digital pond and water quality monitoring." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white/10 rounded-3xl border border-white/5 hover:bg-white/20 transition-all cursor-default group">
                   <item.icon className="text-emerald-400 group-hover:scale-110 transition-transform" size={24} />
                   <div>
                     <h4 className="font-bold text-white leading-tight">{item.t}</h4>
                     <p className="text-xs text-emerald-100/60 mt-1">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative background visual */}
          <div className="absolute left-0 bottom-0 opacity-10 translate-y-1/2 -translate-x-1/4">
            <Sprout size={500} />
          </div>
        </motion.section>

        {/* --- Challenges & Opportunities Split --- */}
        <div className="grid lg:grid-cols-2 gap-20 pb-20">
          <div>
            <h3 className="text-3xl font-black mb-8 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-8 h-1 bg-red-500 rounded-full" /> The Challenges
            </h3>
            <div className="grid gap-4">
              {[
                "Climate-induced monsoon volatility",
                "Fragmented landholding limitations",
                "Information asymmetry in rural areas"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-[2rem] bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-black text-xs">!</div>
                   <p className="text-gray-700 dark:text-gray-300 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black mb-8 text-emerald-600 flex items-center gap-3">
              <div className="w-8 h-1 bg-emerald-500 rounded-full" /> The Opportunities
            </h3>
            <div className="grid gap-4">
              {[
                "Carbon credit earning for sustainable farmers",
                "Direct-to-consumer digital marketplaces",
                "Hyper-local weather forecasting models"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10">
                   <TrendingUp className="text-emerald-500" size={24} />
                   <p className="text-emerald-900 dark:text-emerald-100 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </PageTemplate>
  );
}

export default About;