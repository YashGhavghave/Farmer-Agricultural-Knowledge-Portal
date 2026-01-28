import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bug, ShieldCheck, Beaker, 
  FlaskConical, Leaf, Microscope, 
  PlayCircle, ThermometerSun 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-green-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

function BioPesticides() {
  const intro = 'Sustainable pest management using nature’s own mechanisms—biological organisms and plant-derived compounds.'
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'vA6z08I20-A', title: 'Making Neem Extract at Home', desc: 'A step-by-step guide to fermenting and straining neem leaves.' },
    { id: 'h7T9cO6S_yU', title: 'Applying Bt Effectively', desc: 'Timing and spraying techniques for caterpillar control.' },
    { id: '097Y861mE70', title: 'Installing Pheromone Traps', desc: 'Optimal placement and monitoring for Diamondback moths.' }
  ];

  // ... (basics, intermediate, advanced data arrays from your snippet)

  return (
    <>
      <PageTemplate title="Bio-Pesticides" hero={pest} intro={intro}>
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Nav Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Leaf} />
            <TabButton label="Biocontrols" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Microscope} />
            <TabButton label="Strategies" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskConical} />
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
                      <Bug className="text-green-600" /> Natural Pest Suppression
                    </h2>
                    <p className="text-gray-600 leading-relaxed italic">
                      "Bio-pesticides work by mimicking nature. Instead of a broad-spectrum 'kill-all' chemical, we use targeted biological agents that preserve the ecosystem."
                    </p>
                    <div className="p-6 bg-white rounded-3xl border-l-8 border-green-500 shadow-sm">
                       <h4 className="font-bold text-green-800 mb-2">Targeted Action</h4>
                       <p className="text-sm text-gray-500">Unlike chemicals, most biopesticides affect specific pest groups, leaving ladybugs, bees, and spiders unharmed.</p>
                    </div>
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border-4 border-green-50 shadow-xl bg-white p-4">
                    
                  </div>
                </div>
              )}

              {activeTab === 'intermediate' && (
                <div className="space-y-12">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2"><Beaker /> How Bt Works</h4>
                        
                        <p className="text-xs mt-4 text-gray-400 italic">Technical: Bt toxins only activate in the alkaline environment of an insect's midgut.</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2"><ThermometerSun /> Application Sensitivity</h4>
                        <p className="text-sm text-gray-600 mb-4">Bio-pesticides are <b>living agents</b>. UV light and high heat can degrade them before they reach the pest.</p>
                        <ul className="text-xs space-y-2 opacity-80">
                           <li>• Apply during late evening to avoid UV degradation.</li>
                           <li>• Maintain high humidity for fungal spores (Beauveria).</li>
                           <li>• Use non-chlorinated water for mixing.</li>
                        </ul>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-8">
                   <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                     <FlaskConical className="text-green-600" /> Mating Disruption Tech
                   </h2>
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                         <div className="bg-lime-900 text-white p-10 rounded-[3rem] shadow-2xl">
                            <h4 className="text-xl font-bold mb-6 text-lime-300">Pheromone Strategy</h4>
                            <p className="text-sm opacity-80">By flooding the field with synthetic sex pheromones, male insects are unable to find females. This "mating confusion" crashes the next generation's population without a single drop of poison.</p>
                         </div>
                      </div>
                      <div className="rounded-[2.5rem] overflow-hidden border-4 border-lime-50 shadow-xl bg-white p-4">
                         
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Videos */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
              <PlayCircle className="text-red-500" /> Preparation & Application
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
                    <h5 className="font-bold text-gray-800 text-sm group-hover:text-green-600">{video.title}</h5>
                    <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Selection Guide Table */}
          <div className="bg-gradient-to-br from-green-600 to-lime-800 p-10 rounded-[3rem] text-white shadow-2xl overflow-hidden relative">
             <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><ShieldCheck /> Bio-Agent Performance Matrix</h3>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20 opacity-60 text-xs uppercase tracking-widest">
                      <th className="pb-4">Pest Category</th>
                      <th className="pb-4">Agent</th>
                      <th className="pb-4 text-center">Shelf Life</th>
                      <th className="pb-4 text-right">Primary Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/10">
                      <td className="py-4 font-bold">Caterpillars</td>
                      <td className="py-4 italic">B. thuringiensis</td>
                      <td className="py-4 text-center">12-24 Months</td>
                      <td className="py-4 text-right">Extremely targeted</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 font-bold">Sucking Pests</td>
                      <td className="py-4 italic">Neem Oil (Azadirachtin)</td>
                      <td className="py-4 text-center">6-12 Months</td>
                      <td className="py-4 text-right">Repellent & Anti-feedant</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-bold">Soil Fungi</td>
                      <td className="py-4 italic">Trichoderma</td>
                      <td className="py-4 text-center">3-6 Months</td>
                      <td className="py-4 text-right">Root colonization</td>
                    </tr>
                  </tbody>
                </table>
             </div>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default BioPesticides;