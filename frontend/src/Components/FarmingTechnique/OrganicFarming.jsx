import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Leaf, ShieldCheck, Microscope, LineChart, 
  RotateCcw, Users, Bug, Info, Sprout 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-green-600 text-white shadow-lg shadow-green-200 scale-105'
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
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-green-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-green-700 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-green-500/10' : 'bg-green-50'}`}>
          <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
            <Info size={16} /> Technical Guidelines
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
          <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
            <ShieldCheck size={16} /> Advanced Strategy
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function OrganicFarming() {
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState('basics')

  // ... (Data arrays from your snippet: basics, intermediate, advanced) ...

  return (
    <PageTemplate title={'Organic Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Ecological Vision Header */}
        <section className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-green-700">
                <Leaf /> Regenerative Ecosystems
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                Organic farming isn't just "pesticide-free." It is a <b>biological approach</b> that uses soil microbes and natural predators to build a resilient, self-sustaining production system.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-4">
              
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Techniques" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Microscope} />
          <TabButton label="Commercial" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={LineChart} />
        </div>

        {/* Dynamic Content Area */}
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
                  <div className="p-3 bg-green-600 rounded-xl text-white"><Sprout /></div>
                  <h2 className="text-3xl font-black">Fundamental Principles</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-600 rounded-xl text-white"><RotateCcw /></div>
                  <h2 className="text-3xl font-black">Soil & Pest Engineering</h2>
                </div>

                {/* Composting Visual */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <ContentCard {...intermediate[0]} isDark={isDark} />
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-6 shadow-inner">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">Aerobic Composting Process</h4>
                    
                  </div>
                </div>

                {/* Crop Rotation Visual */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                   <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-6 shadow-inner order-2 lg:order-1">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">4-Year Rotation Cycle</h4>
                    
                  </div>
                  <div className="order-1 lg:order-2">
                    <ContentCard {...intermediate[1]} isDark={isDark} />
                  </div>
                </div>

                <ContentCard {...intermediate[2]} isDark={isDark} />
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-600 rounded-xl text-white"><Microscope /></div>
                  <h2 className="text-3xl font-black">Microbial & Market Ops</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Transition Roadmap Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-green-500/30' : 'bg-white border-green-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-green-700 mb-6 flex items-center gap-2">
            <LineChart className="text-blue-500" /> The Conversion Roadmap
          </h3>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { year: "Year 1-2", label: "Detox Phase", desc: "Build soil carbon and eliminate synthetics. Yields may dip slightly." },
              { year: "Year 3", label: "Equilibrium", desc: "Natural predators return. Soil microbial life becomes self-sustaining." },
              { year: "Year 4+", label: "Premium Phase", desc: "Full organic certification. High market premiums and stable yields." }
            ].map((step, i) => (
              <div key={i} className={`p-6 rounded-3xl ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <div className="text-xs font-black text-green-600 uppercase mb-2 tracking-widest">{step.year}</div>
                <h4 className="font-bold mb-1">{step.label}</h4>
                <p className="text-xs opacity-60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default OrganicFarming;