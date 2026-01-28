import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mountain, Recycle, Droplets, 
  FlaskConical, TrendingUp, Info, 
  CheckCircle2, Scale 
} from 'lucide-react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-emerald-700 text-white shadow-lg scale-105'
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
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-emerald-100 hover:shadow-md transition-shadow"
  >
    <h3 className="text-2xl font-black text-emerald-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-wrap">{content}</p>
    
    {tips && (
      <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
        <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
          <CheckCircle2 size={18} /> Guidelines:
        </h4>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          {tips.map((tip, idx) => <li key={idx} className="flex items-start gap-2"><span>•</span> {tip}</li>)}
        </ul>
      </div>
    )}
    
    {strategies && (
      <div className="mt-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
          <TrendingUp size={16} /> Advanced Implementation:
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {strategy}
          </li>)}
        </ul>
      </div>
    )}
  </motion.div>
)

function SoilAmendments() {
  const [activeTab, setActiveTab] = useState('basics')

  return (
    <>
      <Navbar />
      <PageTemplate title="Soil Amendments">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="Organic/Mineral" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Mountain} />
            <TabButton label="Biologicals" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskConical} />
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
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">Changing the Soil "House"</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      If soil is too hard (clay) or too thirsty (sand), fertilizers won't help. Amendments change the <b>physical structure</b> and <b>chemical balance</b> so roots can actually breathe and drink.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-emerald-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-emerald-600">The Soil Texture Triangle</h4>
                    
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic text-pretty">Technical: Amendments like sand or organic matter move your soil toward the "Loam" center.</p>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                   <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-blue-50">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">The pH Nutrient Availability Scale</h4>
                    
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic">Why we use Lime: If pH is below 5.5, your plants cannot "eat" phosphorus, even if you add it.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                       <h5 className="font-bold text-emerald-800 flex items-center gap-2"><Droplets size={18}/> For Clay Soils</h5>
                       <p className="text-xs text-gray-600">Use <b>Gypsum</b>. It acts as a "chemical crowbar" to pry apart tight clay particles without altering pH.</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                       <h5 className="font-bold text-blue-800 flex items-center gap-2"><Scale size={18}/> For Acidic Soils</h5>
                       <p className="text-xs text-gray-600">Use <b>Lime</b>. It neutralizes acid, making nutrients like Phosphorus available again.</p>
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

          {/* Cost-Benefit Section */}
          <div className="bg-gradient-to-br from-emerald-800 to-green-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 flex items-center gap-3"><Recycle /> Sustainability & Cost</h3>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <p className="text-emerald-300 font-bold uppercase tracking-widest text-xs">Low Cost / High Impact</p>
                      <ul className="space-y-3 text-sm opacity-90">
                        <li className="flex gap-2"><span>✓</span> <b>Green Manure:</b> Sowing legumes just to plow them back in.</li>
                        <li className="flex gap-2"><span>✓</span> <b>Mulching:</b> Using crop waste to stop evaporation.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <p className="text-blue-300 font-bold uppercase tracking-widest text-xs">High Investment / High Yield</p>
                      <ul className="space-y-3 text-sm opacity-90">
                        <li className="flex gap-2"><span>✓</span> <b>Biochar:</b> Permanent soil structure improvement.</li>
                        <li className="flex gap-2"><span>✓</span> <b>Mycorrhizae:</b> Fungi that expand root reach by 10x.</li>
                      </ul>
                   </div>
                </div>
                <div className="mt-10 p-4 bg-white/10 rounded-xl border border-white/20 text-center text-xs italic">
                  "Amendment is a marathon, not a sprint. You are building soil for the next generation."
                </div>
             </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilAmendments;