import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Info, 
  Layers, 
  TrendingUp, 
  Droplets, 
  Maximize, 
  CheckCircle2, 
  Search 
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
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-blue-50 hover:shadow-md transition-shadow"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
        <Layers size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-black text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{content}</p>
        
        {tips && (
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} /> Management Guidelines:
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              {tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400">•</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {strategies && (
          <div className="mt-4 bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
            <h4 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
              <TrendingUp size={18} /> Optimization Strategies:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </motion.div>
)

function SoilType() {
  const [activeTab, setActiveTab] = useState('basics')

  return (
    <>
      <Navbar />
      <PageTemplate title="Soil Classification & Health">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Navigation Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="The Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="Specific Types" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Maximize} />
            <TabButton label="Advanced Health" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Search} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'basics' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">Architecture of the Earth</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Soil isn't just "dirt"—it's a complex matrix of minerals and organic matter. Understanding your <b>Soil Texture</b> allows you to predict how water moves and how much fertilizer your land can hold before it leaches away.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-blue-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">The Soil Texture Triangle</h4>
                    
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic">Use this chart to classify your soil based on lab percentages of Sand, Silt, and Clay.</p>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="mb-12">
                  <div className="bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl mb-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                        <Droplets className="text-blue-400" /> The Field "Feel" Test
                      </h3>
                      <p className="opacity-80 text-sm leading-relaxed mb-4">
                        Don't have a lab report? Use the ribbon test. Moistened soil that forms a long, flexible ribbon is high in <b>clay</b>, while soil that falls apart is <b>sandy</b>.
                      </p>
                      
                    </div>
                  </div>
                </div>
              )}

              {/* Data Rendering */}
              <div className="space-y-4">
                {activeTab === 'basics' && basics.map((item, idx) => <ContentCard key={idx} {...item} />)}
                {activeTab === 'intermediate' && intermediate.map((item, idx) => <ContentCard key={idx} {...item} />)}
                {activeTab === 'advanced' && advanced.map((item, idx) => <ContentCard key={idx} {...item} />)}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Comparison Table Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-[3rem] border border-blue-200">
            <h3 className="text-2xl font-black text-blue-800 mb-6 flex items-center gap-3">
              🌾 Physical Properties Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left rounded-tl-2xl">Soil Type</th>
                    <th className="p-4 text-left">Drainage Speed</th>
                    <th className="p-4 text-left">Nutrient Retention</th>
                    <th className="p-4 text-left rounded-tr-2xl">Best Crops</th>
                  </tr>
                </thead>
                <tbody className="bg-white/50">
                  <tr className="border-b border-blue-100">
                    <td className="p-4 font-bold">Sandy</td>
                    <td className="p-4">Very High</td>
                    <td className="p-4 text-red-500 font-semibold">Low</td>
                    <td className="p-4">Tubers, Millets</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="p-4 font-bold">Clay</td>
                    <td className="p-4 text-red-500 font-semibold">Low (Slow)</td>
                    <td className="p-4 text-green-600 font-semibold">High</td>
                    <td className="p-4">Rice, Cotton</td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="p-4 font-bold">Loam</td>
                    <td className="p-4 text-green-600 font-semibold">Balanced</td>
                    <td className="p-4 text-green-600 font-semibold">Excellent</td>
                    <td className="p-4 italic">Almost everything</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-blue-700 font-bold text-sm">
              💡 Hint: Regardless of your type, adding Organic Matter (Compost) always improves the soil's score.
            </p>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilType