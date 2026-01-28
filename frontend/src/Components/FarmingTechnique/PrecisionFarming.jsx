import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Cpu, Satellite, Drone, Database, 
  Map as MapIcon, BarChart3, Radio, Info 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105'
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
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-orange-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-orange-600 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`}>
          <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
            <Info size={16} /> Technical Specs
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-amber-500/10' : 'bg-amber-50'}`}>
          <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">
            <BarChart3 size={16} /> Optimization
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function PrecisionFarming() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('basics')

  // ... (basics, intermediate, advanced data arrays)

  return (
    <PageTemplate title={'Precision Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Intro Visual Header */}
        <div className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-orange-500/5 border-orange-500/20' : 'bg-orange-50 border-orange-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-orange-700">
                <Satellite /> The Digital Acre
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                Precision Agriculture (PA) uses **Variable Rate Technology (VRT)** and real-time data to treat every square meter of land according to its unique needs.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
               
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Hardware" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Cpu} />
          <TabButton label="Analytics" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Database} />
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
                  <div className="p-3 bg-orange-600 rounded-xl text-white"><Radio /></div>
                  <h2 className="text-3xl font-black">Core Concepts</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-orange-600 rounded-xl text-white"><Drone /></div>
                  <h2 className="text-3xl font-black">IoT & Field Hardware</h2>
                </div>
                
                {/* NDVI Visualization example */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <ContentCard {...intermediate[2]} isDark={isDark} />
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-4">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">NDVI Mapping (Health Index)</h4>
                    
                  </div>
                </div>

                {intermediate.slice(0, 2).map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-orange-600 rounded-xl text-white"><MapIcon /></div>
                  <h2 className="text-3xl font-black">AI & Variable Application</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ROI/Economic Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-orange-500/30' : 'bg-white border-orange-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-orange-700 mb-6 flex items-center gap-2">
             🎯 ROI Performance Indicators
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest text-orange-500">Water Efficiency</div>
              <div className="text-4xl font-black">+25%</div>
              <p className="text-xs">With Soil-Moisture IoT networks</p>
            </div>
            <div className="space-y-2 border-x border-gray-100 dark:border-gray-800 px-4">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest text-orange-500">Yield Increase</div>
              <div className="text-4xl font-black">+18%</div>
              <p className="text-xs">Average VRT (Variable Rate) outcome</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest text-orange-500">Input Costs</div>
              <div className="text-4xl font-black text-red-500">-20%</div>
              <p className="text-xs">Reduction in seed/fertilizer waste</p>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default PrecisionFarming