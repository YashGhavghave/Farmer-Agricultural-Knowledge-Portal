import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ClipboardCheck, Map, Microscope, 
  FlaskRound, ThermometerSun, Info, 
  CheckCircle2, Ruler 
} from 'lucide-react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-amber-600 text-white shadow-lg scale-105'
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
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-amber-100 hover:shadow-md transition-shadow"
  >
    <h3 className="text-2xl font-black text-amber-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-wrap">{content}</p>
    
    {tips && (
      <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
        <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
          <CheckCircle2 size={18} /> Pro Procedures:
        </h4>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          {tips.map((tip, idx) => <li key={idx} className="flex items-start gap-2"><span>•</span> {tip}</li>)}
        </ul>
      </div>
    )}
    
    {strategies && (
      <div className="mt-4 bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
        <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
          <Microscope size={16} /> Advanced Diagnostics:
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> {strategy}
          </li>)}
        </ul>
      </div>
    )}
  </motion.div>
)

function SoilTesting() {
  const [activeTab, setActiveTab] = useState('basics')

  return (
    <>
      <Navbar />
      <PageTemplate title="Soil Testing">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="The Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="Lab Methods" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskRound} />
            <TabButton label="Precision Tech" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Map} />
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
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">Don't Guess, Test</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Applying fertilizer without a soil test is like taking medicine without a blood test. You might be wasting money on nutrients your soil already has, or missing a hidden <b>micronutrient deficiency</b>.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-amber-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-amber-600">The W-Sampling Pattern</h4>
                    
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic">Avoid sampling near fence lines, fertilizer piles, or roads to prevent skewed results.</p>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                   <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-orange-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-orange-600">Sampling Depth Guide</h4>
                    
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic">Tip: Most crop roots feeder zones are in the top 15cm (6 inches).</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                       <h5 className="font-bold text-amber-800 flex items-center gap-2"><Ruler size={18}/> Tools Needed</h5>
                       <p className="text-xs text-gray-600">Use a <b>Soil Auger</b> or a stainless steel trowel. Avoid rusted tools as they contaminate samples with extra Iron (Fe).</p>
                    </div>
                    <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                       <h5 className="font-bold text-orange-800 flex items-center gap-2"><ThermometerSun size={18}/> Handling</h5>
                       <p className="text-xs text-gray-600">Air-dry samples in the shade. Never dry them in an oven, as high heat can destroy organic matter data.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Rendering */}
              <div className="space-y-6">
                 {/* Logic to map basics, intermediate, or advanced arrays */}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Checklist Section */}
          <div className="bg-gradient-to-br from-amber-700 to-orange-900 p-12 rounded-[3.5rem] text-white shadow-2xl">
             <h3 className="text-3xl font-black mb-8 flex items-center gap-3"><ClipboardCheck /> Pre-Lab Checklist</h3>
             <div className="grid md:grid-cols-2 gap-10">
                <ul className="space-y-4 text-sm opacity-90">
                  <li className="flex gap-2"><span>□</span> Sample only when soil is at 'tilth' (not soaking wet).</li>
                  <li className="flex gap-2"><span>□</span> Take 15-20 cores for a field up to 2-3 hectares.</li>
                  <li className="flex gap-2"><span>□</span> Mix all sub-samples in a clean plastic bucket.</li>
                </ul>
                <ul className="space-y-4 text-sm opacity-90">
                  <li className="flex gap-2"><span>□</span> Remove stones, roots, and organic debris.</li>
                  <li className="flex gap-2"><span>□</span> Label clearly: Date, Field ID, and Previous Crop.</li>
                  <li className="flex gap-2 text-amber-300 font-bold italic">Lab Secret: 500g of soil is all they need, but it must represent the whole field!</li>
                </ul>
             </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilTesting;