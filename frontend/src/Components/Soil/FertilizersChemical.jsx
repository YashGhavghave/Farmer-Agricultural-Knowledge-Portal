import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Beaker, ChevronRight, Droplets, 
  FlaskConical, Info, Leaf, 
  Table as TableIcon, Zap 
} from 'lucide-react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-blue-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
        <Zap size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-black text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-wrap">{content}</p>
        
        {tips && (
          <div className="grid md:grid-cols-2 gap-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-blue-800">
                <ChevronRight size={14} className="text-blue-400" />
                {tip}
              </div>
            ))}
          </div>
        )}
        
        {strategies && (
          <div className="mt-4 grid md:grid-cols-2 gap-4 bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
            {strategies.map((strategy, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-cyan-800">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {strategy}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)

function FertilizersChemical() {
  const [activeTab, setActiveTab] = useState('basics')

  // Data remains largely the same but with refined descriptions
  // ... (Your data arrays: basics, intermediate, advanced)

  return (
    <>
      <Navbar />
      <PageTemplate title="Chemical Fertilizers">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="NPK Guide" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Beaker} />
            <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskConical} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'basics' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-black text-gray-900">Precision Nutrition</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Chemical fertilizers provide the "fast-fuel" crops need during critical growth stages. Understanding the concentration and solubility is key to preventing <b>nutrient leaching</b> and <b>soil salinity</b>.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-gray-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-blue-500">NPK Deficiency Identification</h4>
                    
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="mb-12">
                  <div className="bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl mb-12 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                       <div className="flex-1">
                          <h3 className="text-3xl font-black mb-4">The Split-Application Strategy</h3>
                          <p className="opacity-80 text-sm leading-relaxed">
                            Nitrogen (Urea) is highly volatile. If you apply 100% at once, up to 60% can be lost to the atmosphere or groundwater. Splitting the dose ensures the plant has a constant supply as its root system expands.
                          </p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Render Cards */}
              <div className="space-y-6">
                {activeTab === 'basics' && basics.map((item, idx) => <ContentCard key={idx} {...item} />)}
                {activeTab === 'intermediate' && intermediate.map((item, idx) => <ContentCard key={idx} {...item} />)}
                {activeTab === 'advanced' && advanced.map((item, idx) => <ContentCard key={idx} {...item} />)}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Precautions Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-700 p-10 rounded-[3rem] text-white shadow-xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Droplets /> Water-Nutrient Synergy</h3>
              <p className="text-sm opacity-90 leading-relaxed mb-6">
                Fertilizers are salts. Without adequate soil moisture, they increase the "osmotic pressure," which can actually suck water <i>out</i> of the plant roots (Fertilizer Burn).
              </p>
              <ul className="space-y-3 text-xs font-bold">
                <li className="flex items-center gap-2">✓ Always irrigate immediately after applying Urea/MOP</li>
                <li className="flex items-center gap-2">✓ Use Fertigation (Liquid) for 25% higher efficiency</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-10 rounded-[3rem] border border-amber-100">
               <h3 className="text-2xl font-black text-amber-800 mb-6 flex items-center gap-3"><TableIcon /> Nutrient Removal Table</h3>
               <div className="text-xs space-y-4">
                  <div className="flex justify-between border-b border-amber-200 pb-2">
                    <span className="font-bold">Crop (per ton)</span>
                    <span className="font-bold">N - P - K (kg)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rice</span>
                    <span>15 - 3 - 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wheat</span>
                    <span>20 - 4 - 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maize</span>
                    <span>22 - 4 - 19</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default FertilizersChemical