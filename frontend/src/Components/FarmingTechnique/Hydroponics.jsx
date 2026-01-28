import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, Zap, Beaker, Settings, 
  TrendingUp, Activity, Info, AlertCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
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
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-blue-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-blue-600 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
          <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
            <Info size={16} /> Technical Specs
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-50'}`}>
          <h4 className="font-bold text-cyan-700 mb-2 flex items-center gap-2">
            <TrendingUp size={16} /> Optimization
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function Hydroponics() {
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState('basics')

  // ... (Your basics, intermediate, and advanced data arrays here) ...

  return (
    <PageTemplate title={'Hydroponics Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Intro Visual Header */}
        <div className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-blue-700">
                <Droplets /> The Soil-less Revolution
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                By delivering nutrients directly to the root zone via a water-based solvent, plants spend zero energy searching for food and 100% energy on <b>explosive growth</b>.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Systems" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Settings} />
          <TabButton label="Precision" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Activity} />
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
                  <div className="p-3 bg-blue-600 rounded-xl text-white"><Zap /></div>
                  <h2 className="text-3xl font-black">Beginner Concepts</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-600 rounded-xl text-white"><Beaker /></div>
                  <h2 className="text-3xl font-black">System Architecture</h2>
                </div>
                
                {/* NFT Diagram */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <ContentCard {...intermediate[0]} isDark={isDark} />
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-4">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">NFT (Nutrient Film Technique) Diagram</h4>
                    
                  </div>
                </div>

                {/* DWC Diagram */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-4 order-2 lg:order-1">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">DWC (Deep Water Culture) Diagram</h4>
                    
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
                  <div className="p-3 bg-blue-600 rounded-xl text-white"><TrendingUp /></div>
                  <h2 className="text-3xl font-black">Commercial Scale</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Technical Safety Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-blue-500/30' : 'bg-white border-blue-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-blue-700 mb-6 flex items-center gap-2">
            <AlertCircle className="text-red-500" /> Maintenance Parameters
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest">pH Level</div>
              <div className="text-3xl font-black text-emerald-500">5.5 – 6.5</div>
              <p className="text-xs">Crucial for nutrient bioavailability</p>
            </div>
            <div className="space-y-2 border-x border-gray-100 dark:border-gray-800 px-4">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest">Water Temp</div>
              <div className="text-3xl font-black text-blue-500">18°C – 22°C</div>
              <p className="text-xs">Optimal dissolved oxygen levels</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm opacity-60 font-bold uppercase tracking-widest">EC (Lettuce)</div>
              <div className="text-3xl font-black text-cyan-500">1.2 – 1.8</div>
              <p className="text-xs">Total dissolved salts measurement</p>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default Hydroponics;