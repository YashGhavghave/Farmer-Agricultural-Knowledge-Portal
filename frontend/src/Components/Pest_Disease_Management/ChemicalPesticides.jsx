import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, ShieldAlert, Droplets, 
  RotateCcw, Target, Info, 
  PlayCircle, ClipboardCheck 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-orange-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

function ChemicalPesticides() {
  const intro = 'Essential guidelines for the responsible selection, safety, and application of chemical pesticides to manage severe outbreaks.'
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'vA6z08I20-A', title: 'Calibration of Knapsack Sprayers', desc: 'How to calculate the exact flow rate for uniform coverage.' },
    { id: 'h7T9cO6S_yU', title: 'Identifying Resistance in the Field', desc: 'Signs that your current chemical group is no longer effective.' },
    { id: '097Y861mE70', title: 'PPE: Proper Donning & Doffing', desc: 'The safe way to put on and take off protective gear.' }
  ];

  // ... (basics, intermediate, advanced data arrays from your snippet)

  return (
    <>
      <PageTemplate title="Chemical Pesticides" hero={pest} intro={intro}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
            <TabButton label="Application" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Droplets} />
            <TabButton label="Resistance" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={RotateCcw} />
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
                      <ShieldAlert className="text-orange-600" /> Targeted Intervention
                    </h2>
                    <p className="text-gray-600 leading-relaxed italic">
                      "Chemicals are a powerful tool, but they are a medicine for the land, not a food. Use them with the same caution you would use with prescription drugs."
                    </p>
                    <div className="p-6 bg-white rounded-3xl border-l-8 border-orange-500 shadow-sm">
                       <h4 className="font-bold text-orange-800 mb-2">The 'Last Resort' Rule</h4>
                       <p className="text-sm text-gray-500">Only move to chemical control when cultural, mechanical, and biological methods fail to keep pests below the Economic Threshold Level (ETL).</p>
                    </div>
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border-4 border-orange-50 shadow-xl bg-white p-6">
                    <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 opacity-50">Proper PPE Configuration</h4>
                    
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="space-y-12">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-orange-700 mb-4 flex items-center gap-2"><Target /> Nozzle Precision</h4>
                        
                        <p className="text-xs mt-4 text-gray-400 italic">Technical: Using a flat-fan nozzle is best for herbicides, while hollow-cone nozzles provide better coverage for fungicides on dense foliage.</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-orange-700 mb-4 flex items-center gap-2"><Droplets /> Spray Drift Prevention</h4>
                        <p className="text-sm text-gray-600 mb-4">Chemical drift wastes money and harms neighbors. Monitor these factors before spraying:</p>
                        <ul className="text-xs space-y-2 opacity-80">
                           <li>• <b>Wind Speed:</b> Ideal is 3–10 km/h. Never spray above 15 km/h.</li>
                           <li>• <b>Temperature:</b> Avoid spraying in high heat ({'>'}30°C) to prevent evaporation.</li>
                           <li>• <b>Droplet Size:</b> Larger droplets drift less than fine mists.</li>
                        </ul>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-8">
                   <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                     <RotateCcw className="text-orange-600" /> Combatting Resistance
                   </h2>
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                         <div className="bg-orange-950 text-white p-10 rounded-[3rem] shadow-2xl">
                            <h4 className="text-xl font-bold mb-6 text-orange-300">MoA (Mode of Action) Rotation</h4>
                            <p className="text-sm opacity-80 mb-6">Pests don't just get "used" to chemicals; the ones that survive have a genetic advantage. If you keep using the same chemical, you are effectively "breeding" a super-pest that is immune to that treatment.</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Strategy: Never use the same IRAC/FRAC group code twice in a row.</p>
                         </div>
                      </div>
                      <div className="rounded-[2.5rem] overflow-hidden border-4 border-orange-50 shadow-xl bg-white p-4">
                         
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Videos */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> Professional Application Skills
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
                    <h5 className="font-bold text-gray-800 text-sm group-hover:text-orange-600">{video.title}</h5>
                    <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Safety & Checklist Grids */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-600 to-red-800 p-10 rounded-[3rem] text-white shadow-xl">
               <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><AlertTriangle /> Poison Control</h3>
               <div className="bg-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm border border-white/20">
                  <p className="text-sm font-bold">In case of skin contact:</p>
                  <p className="text-xs opacity-70">Remove contaminated clothing and wash skin with soap and running water for 15 minutes.</p>
                  <hr className="border-white/20" />
                  <p className="text-sm font-bold">In case of ingestion:</p>
                  <p className="text-xs opacity-70">Do not induce vomiting unless told by a doctor. Seek immediate medical help with the pesticide container in hand.</p>
               </div>
            </div>

            <div className="bg-amber-50 p-10 rounded-[3rem] border-2 border-amber-100">
               <h3 className="text-2xl font-black text-amber-800 mb-4 flex items-center gap-2"><ClipboardCheck size={24}/> Pre-Spray Mandatory Checks</h3>
               <ul className="space-y-2 text-xs text-amber-900 font-medium">
                 <li>• Confirmed pest identification (not guessing).</li>
                 <li>• Wind speed is below the 15 km/h limit.</li>
                 <li>• Nozzle is calibrated and not clogged.</li>
                 <li>• Neighbors and nearby bee-keepers notified.</li>
                 <li>• Check the PHI (Pre-Harvest Interval) date.</li>
               </ul>
            </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default ChemicalPesticides;