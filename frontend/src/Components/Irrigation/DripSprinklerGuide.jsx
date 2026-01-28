import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, Settings, Zap, 
  Sprout, Activity, Layout, 
  PlayCircle, Wrench 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

function DripSprinklerGuide() {
  const intro = 'Master water-efficient farming through precision drip and sprinkler engineering.'
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'vA6z08I20-A', title: 'Drip System Maintenance', desc: 'How to flush lines and prevent emitter clogging.' },
    { id: 'h7T9cO6S_yU', title: 'Sprinkler Layout Basics', desc: 'Designing for uniform coverage on uneven terrain.' },
    { id: '097Y861mE70', title: 'Venturi Fertigation Setup', desc: 'Technical guide to installing a fertilizer injector.' }
  ];

  const TabButton = ({ label, value, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
        activeTab === value
          ? 'bg-teal-600 text-white shadow-lg scale-105'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  )

  return (
    <>
      <PageTemplate title="Drip & Sprinkler Guide" hero={irrigation} intro={intro}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Navigation */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" icon={Layout} />
            <TabButton label="Installation" value="intermediate" icon={Settings} />
            <TabButton label="Advanced" value="advanced" icon={Zap} />
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
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                        <Droplets className="text-teal-600" /> System Fundamentals
                      </h2>
                      <div className="p-6 bg-white rounded-3xl border-l-8 border-teal-500 shadow-sm">
                        <h3 className="text-xl font-bold text-teal-700 mb-2">The Drip Advantage</h3>
                        <p className="text-gray-600">Drip irrigation provides a slow, steady release of water directly to the root zone, maintaining the ideal <b>field capacity</b> of the soil without runoff or evaporation loss.</p>
                      </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border-4 border-teal-100 shadow-xl bg-white p-4">
                      
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                    <Wrench className="text-teal-600" /> Engineering & Setup
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                       <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2"><Activity /> Sprinkler Uniformity</h4>
                       
                       <p className="text-sm mt-4 text-gray-500 italic">Uniform coverage is achieved when the spray from one sprinkler reaches the base of the next.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                       <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2"><Layout /> Lateral Spacing</h4>
                       
                       <p className="text-sm mt-4 text-gray-500 italic">Correct lateral spacing ensures every plant receives identical water volume.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                    <Zap className="text-teal-600" /> Automation & Fertigation
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="rounded-3xl overflow-hidden border-4 border-cyan-100 shadow-xl bg-white p-4">
                      
                    </div>
                    <div className="space-y-4">
                      <div className="p-5 bg-cyan-50 rounded-2xl border border-cyan-200">
                        <h4 className="font-black text-cyan-800">Precision Fertigation</h4>
                        <p className="text-sm text-cyan-700">By injecting water-soluble fertilizers directly into the main stream, you eliminate the labor of manual spreading and prevent nutrient leaching into groundwater.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Video Gallery Section */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> Practical Demonstrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="aspect-video bg-gray-100 relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                      title={video.title} 
                      frameBorder="0" 
                      allowFullScreen 
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="font-bold text-teal-800 group-hover:text-teal-600 transition-colors">{video.title}</h5>
                    <p className="text-xs text-gray-500 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculator / Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 rounded-[3rem] text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Sprout /> ROI Timeline</h3>
              <div className="space-y-4 opacity-90">
                <div className="flex justify-between border-b border-white/20 pb-2"><span>Year 1:</span> <b>Installation</b></div>
                <div className="flex justify-between border-b border-white/20 pb-2"><span>Year 2:</span> <b>Break-even</b></div>
                <div className="flex justify-between border-b border-white/20 pb-2"><span>Year 3+:</span> <b>Profit Boost</b></div>
                <p className="text-sm italic mt-4 bg-white/10 p-3 rounded-lg">Potential ₹75,000/ha annual benefit in cash crops like Tomato.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100">
               <h3 className="text-2xl font-bold text-blue-800 mb-4">Maintenance Schedule</h3>
               <ul className="space-y-3 text-sm text-blue-700">
                 <li className="flex items-center gap-2 font-bold">● Weekly: Check and flush sand filters.</li>
                 <li className="flex items-center gap-2">● Monthly: Flush lateral ends and check for leaks.</li>
                 <li className="flex items-center gap-2">● Seasonal: Acid treatment for scale buildup (if hard water).</li>
               </ul>
            </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default DripSprinklerGuide;