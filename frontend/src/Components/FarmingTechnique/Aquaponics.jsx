import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Fish, Sprout, Activity, Beaker, 
  TrendingUp, AlertTriangle, Layers, Info 
} from 'lucide-react'
import { AnimateSharedLayout } from 'framer-motion'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'
import Navbar from '../Navbar'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 scale-105'
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
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-purple-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-purple-600 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
          <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
            <Info size={16} /> Quick Tips
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-pink-500/10' : 'bg-pink-50'}`}>
          <h4 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
            <TrendingUp size={16} /> Scaling Strategy
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function Aquaponics() {
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState('basics')

  // ... (basics, intermediate, advanced data arrays remain same as your snippet) ...

  return (
    <PageTemplate title={'Aquaponics Farming'}>
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Intro Visual */}
        <div className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50 border-purple-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black mb-4">The Nitrogen Cycle</h2>
              <p className="opacity-70 italic leading-relaxed">
                In Aquaponics, you aren't just a farmer; you are a <b>Microbe Manager</b>. 
                The magic happens when bacteria convert toxic fish waste into organic plant food.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden bg-white p-2 shadow-xl">
              
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Layers} />
          <TabButton label="Intermediate" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Fish} />
          <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Activity} />
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
                  <div className="p-3 bg-purple-600 rounded-xl text-white"><Sprout /></div>
                  <h2 className="text-3xl font-black">Level 1: System Fundamentals</h2>
                </div>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
                
                <div className="rounded-[2.5rem] overflow-hidden border border-gray-200 mt-12 bg-white p-4">
                  <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-sm">Media Bed vs. NFT vs. DWC</h4>
                  [Image comparing different aquaponics system designs: Media Bed, Nutrient Film Technique (NFT), and Deep Water Culture (DWC)]
                </div>
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-purple-600 rounded-xl text-white"><Beaker /></div>
                  <h2 className="text-3xl font-black">Level 2: Bio-Management</h2>
                </div>
                {intermediate.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-purple-600 rounded-xl text-white"><TrendingUp /></div>
                  <h2 className="text-3xl font-black">Level 3: Commercial Optimization</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Guidance */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-purple-500/30' : 'bg-white border-purple-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-purple-700 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" /> Essential Maintenance Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                <p className="text-sm"><b>Daily:</b> Feed fish and check pump flow. Ensure aeration is bubbling strongly.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                <p className="text-sm"><b>Weekly:</b> Test pH (aim for 6.8), Ammonia, and Nitrates.</p>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                <p className="text-sm"><b>Monthly:</b> Clean solids from filters and check root health for any rot.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">4</div>
                <p className="text-sm"><b>Yearly:</b> Harvest fish and deep-clean the grow beds if using media.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default Aquaponics;