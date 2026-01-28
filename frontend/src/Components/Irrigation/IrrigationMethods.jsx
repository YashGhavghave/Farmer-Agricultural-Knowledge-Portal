import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, Waves, Info, 
  Settings, Zap, BarChart3, 
  PlayCircle, Thermometer 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-cyan-600 text-white shadow-lg scale-105'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

function IrrigationMethods() {
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'vA6z08I20-A', title: 'Traditional vs. Modern Irrigation', desc: 'A field comparison of water waste in flood vs. drip systems.' },
    { id: 'h7T9cO6S_yU', title: 'Managing Large Scale Sprinklers', desc: 'How to maintain uniformity across varied topography.' },
    { id: '097Y861mE70', title: 'Subsurface Drip Installation', desc: 'Techniques for burying lines to prevent evaporation and damage.' }
  ];

  // ... (basics, intermediate, advanced data arrays remain as per your snippet)

  return (
    <>
      <PageTemplate title="Irrigation Methods" hero={irrigation} intro={'Optimize water use through engineered delivery systems.'}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* System Selection Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Overview" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="Standard" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Settings} />
            <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Zap} />
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
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                        <Waves className="text-cyan-600" /> The Hydrological Choice
                      </h2>
                      {basics.map((item, idx) => (
                        <div key={idx} className="mb-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                          <h4 className="font-bold text-cyan-700 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-[2.5rem] overflow-hidden border-4 border-cyan-50 shadow-xl bg-white p-4">
                        <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 opacity-50">Soil Water Distribution Comparison</h4>
                        
                      </div>
                      <p className="text-xs text-center text-gray-400 italic">Diagram: Notice how drip irrigation creates a concentrated "bulb" of moisture at the roots while flood saturates the entire surface.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {intermediate.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col">
                      <h3 className="text-xl font-black text-cyan-700 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{item.content}</p>
                      <div className="bg-cyan-50 p-4 rounded-2xl">
                         <h5 className="text-[10px] uppercase font-bold text-cyan-800 mb-2 tracking-tighter">Field Specs</h5>
                         <ul className="text-xs space-y-1 opacity-80">
                           {item.tips.map((t, i) => <li key={i}>• {t}</li>)}
                         </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-12">
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="rounded-[2.5rem] overflow-hidden border-4 border-blue-50 shadow-xl bg-white p-4">
                        <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 opacity-50">Subsurface Drip Architecture</h4>
                        
                      </div>
                      <div className="space-y-6">
                         <h2 className="text-3xl font-black text-blue-900 flex items-center gap-3">
                           <Zap className="text-blue-600" /> Precision Hydration
                         </h2>
                         <p className="text-gray-600">Advanced systems integrate <b>Evapotranspiration (ET)</b> data—calculating exactly how much water a plant loses to heat and wind—to refill only what is missing.</p>
                      </div>
                   </div>
                   <div className="grid md:grid-cols-3 gap-6">
                     {advanced.map((item, idx) => (
                        <div key={idx} className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl">
                          <h4 className="font-black text-blue-400 mb-4">{item.title}</h4>
                          <ul className="text-xs space-y-3 opacity-70">
                            {item.strategies.map((s, i) => <li key={i} className="flex gap-2"><span>✔</span> {s}</li>)}
                          </ul>
                        </div>
                     ))}
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Video Field Tours */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> System Demonstrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100">
                  <div className="aspect-video relative bg-black">
                    <iframe 
                      width="100%" height="100%" 
                      src={`https://www.youtube.com/embed/${video.id}`} 
                      title={video.title} frameBorder="0" allowFullScreen 
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="font-bold text-gray-800 text-sm">{video.title}</h5>
                    <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Efficiency Table */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-800 p-10 rounded-[3rem] text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><BarChart3 /> Economic Performance Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20 opacity-60 text-xs uppercase tracking-widest">
                      <th className="pb-4">System</th>
                      <th className="pb-4 text-center">Efficiency</th>
                      <th className="pb-4 text-center">Labor Needs</th>
                      <th className="pb-4 text-right">Primary Crop</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 font-bold">Surface/Flood</td>
                      <td className="py-4 text-center text-red-300">45%</td>
                      <td className="py-4 text-center">High</td>
                      <td className="py-4 text-right">Rice / Sugarcane</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 font-bold">Sprinkler</td>
                      <td className="py-4 text-center text-cyan-300">75%</td>
                      <td className="py-4 text-center">Moderate</td>
                      <td className="py-4 text-right">Potatoes / Cereals</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-4 font-bold">Precision Drip</td>
                      <td className="py-4 text-center text-emerald-300">95%</td>
                      <td className="py-4 text-center text-emerald-300">Low (Auto)</td>
                      <td className="py-4 text-right">Orchards / Vineyards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default IrrigationMethods;