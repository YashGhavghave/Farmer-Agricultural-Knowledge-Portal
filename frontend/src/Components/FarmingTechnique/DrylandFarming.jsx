import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CloudRain, Sun, Droplets, Mountain, 
  Target, BarChart, Info, Settings 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-amber-600 text-white shadow-lg shadow-amber-200 scale-105'
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
    className={`rounded-[2rem] shadow-sm p-8 mb-6 border-l-8 border-amber-500 transition-colors ${
      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-gray-100'
    }`}
  >
    <h3 className="text-2xl font-black text-amber-600 mb-4">{title}</h3>
    <p className="opacity-80 mb-6 leading-relaxed whitespace-pre-wrap">{content}</p>
    
    <div className="grid md:grid-cols-2 gap-4">
      {tips && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-amber-500/10' : 'bg-amber-50'}`}>
          <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">
            <Droplets size={16} /> Key Practices
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {tips.map((tip, idx) => <li key={idx} className="flex gap-2"><span>•</span> {tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`p-5 rounded-2xl ${isDark ? 'bg-yellow-500/10' : 'bg-yellow-50'}`}>
          <h4 className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
            <Target size={16} /> Innovations
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {strategies.map((strategy, idx) => <li key={idx} className="flex gap-2"><span>•</span> {strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
)

function DrylandFarming() {
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState('basics')

  // ... (basics, intermediate, advanced data arrays from your snippet) ...

  return (
    <PageTemplate title={'Dryland Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Technical Overview Section */}
        <section className={`mb-12 p-8 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 flex items-center gap-2 text-amber-700">
                <Sun /> Arid-Zone Engineering
              </h2>
              <p className="opacity-70 leading-relaxed italic">
                Dryland farming is the art of managing soil moisture. In areas with high potential evapotranspiration, the goal is to transform the soil into a <b>"Water Bank"</b> that can sustain crops through prolonged dry spells.
              </p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex gap-4 flex-wrap mb-12">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Intermediate" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Droplets} />
          <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Settings} />
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
                {basics.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
              </section>
            )}

            {activeTab === 'intermediate' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-amber-600 rounded-xl text-white"><Mountain /></div>
                  <h2 className="text-3xl font-black">Soil & Water Management</h2>
                </div>
                {intermediate.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
                
                <div className="rounded-[2.5rem] overflow-hidden border border-gray-200 mt-8 bg-white p-4">
                  <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-sm">Water Infiltration Logic</h4>
                  
                </div>
              </section>
            )}

            {activeTab === 'advanced' && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-amber-600 rounded-xl text-white"><BarChart /></div>
                  <h2 className="text-3xl font-black">Precision Water Harvesting</h2>
                </div>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} isDark={isDark} />)}
                
                <div className="rounded-[2.5rem] overflow-hidden border border-gray-200 mt-8 bg-white p-4">
                   <h4 className="text-center font-bold mb-4 opacity-60 uppercase tracking-widest text-sm">Zai Pits & Micro-Catchment Design</h4>
                   
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Data Comparison Footer */}
        <div className={`mt-16 p-10 rounded-[3rem] border-2 ${isDark ? 'bg-slate-900 border-amber-500/30' : 'bg-white border-amber-100 shadow-2xl'}`}>
          <h3 className="text-2xl font-black text-amber-700 mb-6 flex items-center gap-2">
            <CloudRain className="text-blue-500" /> Climate Resilience Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="opacity-60 uppercase tracking-wider font-bold">
                <tr>
                  <th className="pb-4">Strategy</th>
                  <th className="pb-4">Water Efficiency</th>
                  <th className="pb-4">Cost Benefit</th>
                  <th className="pb-4">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr className="hover:bg-amber-500/5 transition-colors">
                  <td className="py-4 font-bold">In-situ Conservation</td>
                  <td className="py-4 text-emerald-500">+15-20%</td>
                  <td className="py-4">Low Cost</td>
                  <td className="py-4">Medium</td>
                </tr>
                <tr className="hover:bg-amber-500/5 transition-colors">
                  <td className="py-4 font-bold">Micro-Catchment</td>
                  <td className="py-4 text-emerald-500">+35-50%</td>
                  <td className="py-4">Labor Intensive</td>
                  <td className="py-4">Low</td>
                </tr>
                <tr className="hover:bg-amber-500/5 transition-colors">
                  <td className="py-4 font-bold">Supplemental Drip</td>
                  <td className="py-4 text-emerald-500">+80%</td>
                  <td className="py-4">High CapEx</td>
                  <td className="py-4">Very Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}

export default DrylandFarming