import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, Binary, Eye, 
  Layers, Lightbulb, ListChecks, 
  PlayCircle, Search 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-red-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

function IPMGuide() {
  const intro = 'Integrated Pest Management (IPM) is a decision-making process that combines multiple tools to minimize economic, health, and environmental risks.'
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'O6x_p_lq7uI', title: 'Field Scouting 101', desc: 'Master the zig-zag pattern for unbiased pest counting.' },
    { id: '1A-S8x_WvQk', title: 'Understanding ETL', desc: 'When to spray vs. when to let nature take its course.' },
    { id: 'uF_Gf9S_2x8', title: 'Building a Scouting Kit', desc: 'Essential tools: hand lens, sweep nets, and sticky traps.' }
  ];

  // ... (basics, intermediate, advanced data arrays from your snippet)

  return (
    <>
      <PageTemplate title="IPM Guide" hero={pest} intro={intro}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Lightbulb} />
            <TabButton label="Field Tools" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Search} />
            <TabButton label="Economics" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={BarChart3} />
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
                      <Layers className="text-red-600" /> The Control Pyramid
                    </h2>
                    <p className="text-gray-600 leading-relaxed italic">
                      "IPM is like a pyramid. The foundation is built on prevention. As you move up, the interventions become more specific and more intense."
                    </p>
                    
                  </div>
                  <div className="bg-red-900 text-white p-10 rounded-[3rem] shadow-2xl">
                     <h4 className="text-xl font-bold mb-6 text-red-300">The 4 Pillars</h4>
                     <ul className="space-y-4 text-sm">
                       <li className="flex gap-3"><b>1. Monitor:</b> Identify pests and their population levels.</li>
                       <li className="flex gap-3"><b>2. Thresholds:</b> Determine the point of action.</li>
                       <li className="flex gap-3"><b>3. Prevention:</b> Stop pests from becoming a problem.</li>
                       <li className="flex gap-3"><b>4. Control:</b> Use bio-controls first, chemicals last.</li>
                     </ul>
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="space-y-12">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2"><Eye /> Effective Scouting</h4>
                        
                        <p className="text-xs mt-4 text-gray-400 italic">Pro-Tip: Never just check the edges of the field; pests often congregate or hide in the center.</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2"><Binary /> Tool Comparison</h4>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-xs">
                              <span>Yellow Sticky Traps</span>
                              <span className="font-bold text-red-600">Aphids / Whitefly</span>
                           </div>
                           <div className="flex justify-between items-center text-xs">
                              <span>Blue Sticky Traps</span>
                              <span className="font-bold text-red-600">Thrips</span>
                           </div>
                           <div className="flex justify-between items-center text-xs">
                              <span>Pheromone Traps</span>
                              <span className="font-bold text-red-600">Moths / Borers</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-8">
                   <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                     <BarChart3 className="text-red-600" /> Economic Action Thresholds
                   </h2>
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                         <div className="bg-white p-8 rounded-[3rem] border-2 border-red-50 shadow-lg">
                            <h4 className="text-lg font-bold mb-4 text-gray-800">Visualizing the ETL</h4>
                            
                            <p className="text-xs text-gray-500 mt-4">The **Economic Threshold** is your 'trigger' point. If you act here, you prevent the pest from ever reaching the **Economic Injury Level**, where you start losing money.</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="p-6 bg-red-50 rounded-2xl">
                            <h5 className="font-bold text-red-800 text-sm">Rice Gall Midge</h5>
                            <p className="text-xs text-red-600">ETL: 5% silver shoots / sq.m</p>
                         </div>
                         <div className="p-6 bg-orange-50 rounded-2xl">
                            <h5 className="font-bold text-orange-800 text-sm">Cotton Bollworm</h5>
                            <p className="text-xs text-orange-600">ETL: 1 larva per plant</p>
                         </div>
                         <div className="p-6 bg-amber-50 rounded-2xl">
                            <h5 className="font-bold text-amber-800 text-sm">Potato Late Blight</h5>
                            <p className="text-xs text-amber-600">ETL: First sign of lesion (Preventive required)</p>
                         </div>
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Videos */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> IPM Mastery Skills
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
                    <h5 className="font-bold text-gray-800 text-sm group-hover:text-red-600">{video.title}</h5>
                    <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Checklist */}
          <div className="bg-gradient-to-br from-red-600 to-orange-800 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><ListChecks /> IPM Seasonal Checklist</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3 text-sm opacity-90">
                    <li className="flex gap-2"><span>□</span> Choose resistant varieties suited for the local climate.</li>
                    <li className="flex gap-2"><span>□</span> Set up monitoring traps (Yellow/Pheromone) early.</li>
                    <li className="flex gap-2"><span>□</span> Train staff to distinguish between 'pests' and 'friends'.</li>
                  </ul>
                  <ul className="space-y-3 text-sm opacity-90">
                    <li className="flex gap-2"><span>□</span> Only use chemicals with a different MoA than last time.</li>
                    <li className="flex gap-2"><span>□</span> Record every spray and every count for end-of-year review.</li>
                    <li className="flex gap-2 text-red-200 font-bold italic underline">Goal: Healthy crops, lower costs, clean water.</li>
                  </ul>
               </div>
             </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default IPMGuide;