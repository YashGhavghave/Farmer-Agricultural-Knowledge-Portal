import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, Sprout, Activity, LineChart, 
  AlertTriangle, FlaskConical, Target, Info 
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
            <Info size={16} /> Technical Tips
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-lime-500/10' : 'bg-lime-50'}`}>
          <h4 className="font-bold text-lime-700 mb-2 flex items-center gap-2">
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

function IntensiveFarming() {
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState('basics')

  // ... (Your basics, intermediate, and advanced data arrays here) ...

  return (
    <PageTemplate title={'Intensive Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Concept Overview Section */}
        <section className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-green-700">
                <Zap /> Yield Maximization
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                Intensive farming is the practice of <b>concentrating</b> resources. By using high-yield seeds and precision nutrients, we aim to produce as much food on one acre as traditional farming does on five.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Operations" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskConical} />
          <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={LineChart} />
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
                  <h2 className="text-3xl font-black">Level 1: System Basics</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-600 rounded-xl text-white"><FlaskConical /></div>
                  <h2 className="text-3xl font-black">Level 2: Input Management</h2>
                </div>
                {intermediate.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-600 rounded-xl text-white"><Activity /></div>
                  <h2 className="text-3xl font-black">Level 3: Global Production</h2>
                </div>
                
                {/* Visualizing Crop Rotation */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <ContentCard {...advanced[0]} isDark={isDark} />
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-6 shadow-inner">
                    <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-xs">Triple-Cropping Lifecycle Diagram</h4>
                    
                  </div>
                </div>

                {advanced.slice(1).map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Risk & Maintenance Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-green-500/30' : 'bg-white border-green-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-green-700 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" /> Critical Management Pillars
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-black text-green-600">300%</div>
              <div className="text-xs font-bold opacity-60">Cropping Intensity</div>
            </div>
            <div className="p-4 border-l border-gray-100 dark:border-gray-800">
              <div className="text-2xl font-black text-blue-600">Soil pH</div>
              <div className="text-xs font-bold opacity-60">6.5 - 7.5 (Optimal)</div>
            </div>
            <div className="p-4 border-l border-gray-100 dark:border-gray-800">
              <div className="text-2xl font-black text-orange-600">NPK Split</div>
              <div className="text-xs font-bold opacity-60">3-4 Applications</div>
            </div>
            <div className="p-4 border-l border-gray-100 dark:border-gray-800">
              <div className="text-2xl font-black text-purple-600">Mechanization</div>
              <div className="text-xs font-bold opacity-60">High Capital Needs</div>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default IntensiveFarming