import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PackageCheck, 
  Store, 
  ArrowUpRight, 
  PieChart,
  Zap,
  BadgeDollarSign
} from 'lucide-react';
import PageTemplate from './ui/PageTemplate';

const BusinessCard = ({ title, icon: Icon, children, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-lg shadow-current/10`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
    <div className="text-gray-600 leading-relaxed mb-6 flex-grow">
      {children}
    </div>
    <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors group">
      Explore Strategy <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  </motion.div>
);

function MarketGrowingBusiness() {
  return (
    <PageTemplate 
      title="Market & Growing Business" 
      intro="Transform your farm from a production unit into a high-margin enterprise."
    >
      <div className="max-w-6xl mx-auto pb-20 space-y-12">
        
        {/* Section 1: Strategic Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <BusinessCard 
            title="Market Fit & Selection" 
            icon={BarChart3} 
            color="bg-blue-600"
          >
            Move beyond tradition. Analyze local demand spikes, export potential, and 
            seasonal supply gaps to choose crops with the highest **Return on Effort (ROE)**.
          </BusinessCard>

          <BusinessCard 
            title="Value Addition" 
            icon={PackageCheck} 
            color="bg-emerald-600"
          >
            Raw commodities have the lowest margins. Learn sorting, grading, and 
            primary processing (drying, milling, or oil extraction) to capture 30-50% more value.
          </BusinessCard>
        </div>

        {/* Section 2: Pricing & Profitability Spotlight */}
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <Zap size={14} /> Efficiency Logic
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Mastering the <br /> <span className="text-emerald-400">Profit Margin.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Profitability isn't just about selling high; it's about minimizing the **Cost of Production (CoP)** and maximizing the **Value-Added Ratio**.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <TrendingUp className="text-emerald-400 mb-2" />
                    <span className="block text-2xl font-bold">Direct-to-Biz</span>
                    <span className="text-xs text-gray-500">Eliminate middle-man leaks.</span>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <PieChart className="text-emerald-400 mb-2" />
                    <span className="block text-2xl font-bold">Niche Markets</span>
                    <span className="text-xs text-gray-500">Organic & Premium segments.</span>
                 </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10">
              <h4 className="font-bold text-emerald-400 mb-6 uppercase text-xs tracking-widest">The Value Ladder</h4>
              
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl text-sm">
                  <span>Raw Commodity (Wheat)</span>
                  <span className="font-mono text-gray-500">$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl text-sm border-l-4 border-emerald-500">
                  <span>Processed (Flour)</span>
                  <span className="font-mono text-emerald-400">$$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-xl text-sm border-l-4 border-emerald-400">
                  <span>Branded (Organic Pack)</span>
                  <span className="font-mono text-emerald-300">$$$</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Abstract BG Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        </div>

        {/* Section 3: Branding & Direct Access */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <Store className="text-emerald-600" size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-gray-900 mb-2">Build Your Farm Brand</h4>
              <p className="text-gray-600">
                In a digital world, your "Farm Story" is as valuable as your harvest. 
                Learn how to create a brand that commands premium prices.
              </p>
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-gray-900 text-white flex flex-col justify-center items-center text-center">
            <BadgeDollarSign size={48} className="text-emerald-400 mb-4" />
            <h4 className="font-bold mb-2">Loan & Credit Advisory</h4>
            <p className="text-xs text-gray-500 mb-6">Explore flexible credit lines for infrastructure growth.</p>
            <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default MarketGrowingBusiness;