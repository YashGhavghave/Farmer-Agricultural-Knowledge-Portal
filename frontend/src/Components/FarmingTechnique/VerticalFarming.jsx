import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layers, Thermometer, Droplets, Zap, 
  Target, TrendingUp, Info, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {Icon && <Icon size={18} />}
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies, isDark }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-red-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-red-700 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
          <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
            <Info size={16} /> Tech Specs
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-pink-500/10' : 'bg-pink-50'}`}>
          <h4 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
            <Target size={16} /> Strategy
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function VerticalFarming() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('basics')

  // ... (basics, intermediate, advanced data arrays from your snippet)

  return (
    <PageTemplate title={'Vertical Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Visual Engineering Header */}
        <section className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-red-500/5 border-red-500/20' : 'bg-red-50 border-red-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-red-700">
                <Layers /> CEA: Controlled Environment Agriculture
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                Vertical farming is the ultimate integration of <b>biotechnology</b> and <b>robotics</b>. By controlling the light spectrum and nutrient delivery, we decouple food production from climate and geography.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-4">
              
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Systems" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Zap} />
          <TabButton label="Economics" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={TrendingUp} />
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'basics' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-red-600 rounded-xl text-white"><Layers /></div>
                  <h2 className="text-3xl font-black">Fundamental Mechanics</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-red-600 rounded-xl text-white"><Zap /></div>
                  <h2 className="text-3xl font-black">Lighting & Climate Tech</h2>
                </div>
                
                {/* Lighting Spectrum Visual */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <ContentCard {...intermediate[1]} isDark={isDark} />
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-6 shadow-inner">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">The Photosynthetic Spectrum</h4>
                    
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-6 shadow-inner order-2 lg:order-1">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">CO2 Enrichment Impact</h4>
                    
                  </div>
                  <div className="order-1 lg:order-2">
                    <ContentCard {...intermediate[2]} isDark={isDark} />
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-red-600 rounded-xl text-white"><TrendingUp /></div>
                  <h2 className="text-3xl font-black">AI & Profit Optimization</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Efficiency Comparison Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-red-500/30' : 'bg-white border-red-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-red-700 mb-6 flex items-center gap-2">
             📊 Resource Efficiency vs. Field Farming
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Water Used", value: "5%", icon: Droplets, color: "text-blue-500" },
              { label: "Yield/m²", value: "350x", icon: Layers, color: "text-red-500" },
              { label: "Climate Control", value: "100%", icon: Thermometer, color: "text-orange-500" },
              { label: "Energy Cost", value: "High", icon: Zap, color: "text-amber-500" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <stat.icon size={24} className={`mx-auto ${stat.color}`} />
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default VerticalFarming;