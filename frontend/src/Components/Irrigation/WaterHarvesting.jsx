import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CloudRain, Waves, Home, 
  ShieldCheck, Info, Activity, 
  PlayCircle, Hammer 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

function WaterHarvesting() {
  const intro = 'Capture and store rainwater to build a resilient, drought-proof agricultural ecosystem.'
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: '6Sre_M6WvHk', title: 'Community Watershed Management', desc: 'How entire villages transform landscapes through check dams.' },
    { id: '1A-S8x_WvQk', title: 'Constructing a Farm Pond', desc: 'Technical steps for excavation, lining, and inlet design.' },
    { id: 'uF_Gf9S_2x8', title: 'Rooftop Filtration Systems', desc: 'Setting up first-flush diverters and charcoal filters.' }
  ];

  const TabButton = ({ label, value, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
        activeTab === value
          ? 'bg-sky-600 text-white shadow-lg scale-105'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  )

  return (
    <>
      <PageTemplate title="Water Harvesting" hero={irrigation} intro={intro}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" icon={Info} />
            <TabButton label="Structures" value="intermediate" icon={Hammer} />
            <TabButton label="Advanced" value="advanced" icon={Activity} />
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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                      <CloudRain className="text-sky-600" /> Rainwater Resilience
                    </h2>
                    <p className="text-gray-600 leading-relaxed italic">
                      "Water harvesting isn't just about storage; it's about slowing down the water's journey through your land, giving it time to sink in and recharge the lifeblood of your farm."
                    </p>
                    <div className="p-6 bg-white rounded-3xl border-l-8 border-sky-500 shadow-sm">
                       <h4 className="font-bold text-sky-800 mb-2">The Closed Loop</h4>
                       <p className="text-sm text-gray-500">By capturing runoff, you prevent soil erosion and stop nutrients from being washed away into nearby streams.</p>
                    </div>
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border-4 border-sky-50 shadow-xl bg-white p-4">
                    
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="space-y-12">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-sky-700 mb-4 flex items-center gap-2"><Home /> Rooftop Collection</h4>
                        
                        <p className="text-xs mt-4 text-gray-400 italic">Essential: The 'First Flush' diverter removes bird droppings and dust from the first 5 minutes of rain.</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-sky-700 mb-4 flex items-center gap-2"><Waves /> Check Dam Design</h4>
                        
                        <p className="text-xs mt-4 text-gray-400 italic">Technical: An 'Apron' prevents the falling water from eroding the base of the structure.</p>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-8">
                   <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                     <ShieldCheck className="text-sky-600" /> Aquifer Management
                   </h2>
                   <div className="grid lg:grid-cols-2 gap-12">
                      <div className="bg-sky-900 text-white p-10 rounded-[3rem] shadow-2xl">
                         <h4 className="text-xl font-bold mb-6 text-sky-300">Groundwater Recharge Strategy</h4>
                         <p className="text-sm opacity-80 mb-6">Traditional harvesting stores water <b>horizontally</b>. Recharge wells store it <b>vertically</b>, using the natural soil layers as a massive, evaporation-free reservoir.</p>
                         <ul className="space-y-4 text-xs">
                           <li className="flex gap-3"><b>1.</b> Desiltation of percolation tanks annually.</li>
                           <li className="flex gap-3"><b>2.</b> Directing roof water into shallow recharge pits.</li>
                           <li className="flex gap-3"><b>3.</b> Using reverse bore wells with high-efficiency filters.</li>
                         </ul>
                      </div>
                      <div className="rounded-[2.5rem] overflow-hidden border-4 border-sky-50 shadow-xl bg-white p-4">
                         
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Videos */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> Field Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 transition-hover hover:shadow-lg">
                  <div className="aspect-video relative bg-black">
                    <iframe 
                      width="100%" height="100%" 
                      src={`https://www.youtube.com/embed/${video.id}`} 
                      title={video.title} frameBorder="0" allowFullScreen 
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="font-bold text-gray-800 text-sm group-hover:text-sky-600">{video.title}</h5>
                    <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats & Tips */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-600 to-blue-800 p-10 rounded-[3rem] text-white shadow-xl">
               <h3 className="text-2xl font-black mb-4">Investment Potential</h3>
               <div className="bg-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Example: 100 Ha Farm / 750mm Rain</p>
                  <p className="text-xs opacity-70">Annual Benefit: ₹2,00,000 - ₹3,00,000</p>
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-300 w-[70%]" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">ROI: 2-3 Years Typical</p>
               </div>
            </div>

            <div className="bg-yellow-50 p-10 rounded-[3rem] border-2 border-yellow-100">
               <h3 className="text-2xl font-black text-yellow-800 mb-4 flex items-center gap-2"><Hammer size={24}/> Construction Guide</h3>
               <ul className="space-y-3 text-xs text-yellow-700 font-medium">
                 <li>• Locate the lowest topographical point for ponds.</li>
                 <li>• Use 300-micron lining for sandy soils.</li>
                 <li>• Silt traps are mandatory to prevent pond shallowing.</li>
                 <li>• Spillways must be designed for peak overflow.</li>
               </ul>
            </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default WaterHarvesting;