import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, Waves, Wind, 
  Settings, Zap, Gauge, 
  CheckCircle2, Info, ArrowRightCircle 
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

const EquipmentCard = ({ title, content, specs, imagePrompt }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-blue-50 hover:shadow-md transition-shadow"
  >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-black text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{content}</p>
        
        {specs && (
          <div className="grid md:grid-cols-2 gap-4">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                <CheckCircle2 size={16} className="text-blue-500" />
                {spec}
              </div>
            ))}
          </div>
        )}
      </div>
      {imagePrompt && (
        <div className="lg:w-1/3 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50 flex items-center justify-center p-4">
           {imagePrompt}
        </div>
      )}
    </div>
  </motion.div>
)

function IrrigationEquipment() {
  const [activeTab, setActiveTab] = useState('drip')

  return (
    <>
      <Navbar />
      <PageTemplate title="Irrigation Systems & Equipment">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* System Selection Tabs */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6 justify-center">
            <TabButton label="Drip Systems" value="drip" activeTab={activeTab} setActiveTab={setActiveTab} icon={Droplets} />
            <TabButton label="Sprinklers" value="sprinkler" activeTab={activeTab} setActiveTab={setActiveTab} icon={Wind} />
            <TabButton label="Pumps & Motors" value="pumps" activeTab={activeTab} setActiveTab={setActiveTab} icon={Zap} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'drip' && (
                <>
                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-black text-gray-900 leading-tight">Precision Drip Irrigation</h2>
                      <p className="text-lg text-gray-600">
                        The most efficient method (90-95% efficiency). Delivers water directly to the root zone, reducing evaporation and weed growth. Perfect for orchards, vegetables, and high-value crops.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-blue-50">
                      <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">Drip System Component Layout</h4>
                      
                    </div>
                  </div>
                  
                  <EquipmentCard 
                    title="Venturi Fertigation Injector"
                    content="A device that uses the pressure vacuum to pull liquid fertilizer into the irrigation line. This allows for 'fertigation'—feeding plants while watering."
                    specs={["No moving parts", "Chemical resistant", "Precise dosing", "Low maintenance"]}
                    imagePrompt=""
                  />
                </>
              )}

              {activeTab === 'sprinkler' && (
                <>
                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-blue-50 order-2 lg:order-1">
                      <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">Sprinkler Overlap Pattern</h4>
                      
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                      <h2 className="text-4xl font-black text-gray-900 leading-tight">Overhead Sprinklers</h2>
                      <p className="text-lg text-gray-600">
                        Mimics natural rainfall. Best for field crops like wheat, maize, and pulses. High portability and effective for frost protection.
                      </p>
                    </div>
                  </div>
                  
                  <EquipmentCard 
                    title="Impact Sprinkler Heads"
                    content="The classic 'knocking' sprinkler. Durable brass or plastic heads that rotate using a spring-loaded arm. Designed to throw water over long distances."
                    specs={["360° or partial rotation", "Adjustable radius", "High wind resistance", "Covers 10-30m radius"]}
                    imagePrompt=""
                  />
                </>
              )}

              {activeTab === 'pumps' && (
                <div className="space-y-8">
                  <div className="bg-blue-900 text-white p-10 rounded-[3.5rem] shadow-2xl flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-4 flex items-center gap-3"><Gauge /> Understanding Pump Head</h3>
                      <p className="opacity-80 leading-relaxed">
                        The 'Head' is the vertical height a pump can lift water. When selecting a pump, calculate: <b>Total Head = Vertical Lift + Pipe Friction Loss + Operating Pressure</b>.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                       
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <EquipmentCard title="Submersible Pumps" content="Installed inside the well/borehole. More efficient for deep water sources." />
                    <EquipmentCard title="Centrifugal Surface Pumps" content="Best for pulling water from ponds, rivers, or shallow wells (up to 7-8 meters)." />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Maintenance Checklist */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-[3.5rem] border border-blue-200 shadow-lg">
             <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="max-w-md">
                   <h3 className="text-3xl font-black text-blue-900 mb-4">System Health Checklist</h3>
                   <p className="text-blue-700 font-medium mb-6 italic">Poor maintenance leads to clogged emitters and uneven yields.</p>
                   <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                      Download Full Manual <ArrowRightCircle size={18} />
                   </button>
                </div>
                <div className="flex-1 grid gap-4">
                   {[
                     { title: "Filter Cleaning", desc: "Flush sand/disc filters weekly or when pressure drops 0.5 bar." },
                     { title: "Line Flushing", desc: "Open lateral ends monthly to clear accumulated silt." },
                     { title: "Acid Treatment", desc: "Use for 30 mins every season to clear calcium/lime scaling." },
                     { title: "Pressure Check", desc: "Ensure pump pressure matches emitter requirements (usually 1-2 bar)." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                         <h5 className="font-bold text-blue-800">{item.title}</h5>
                         <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default IrrigationEquipment