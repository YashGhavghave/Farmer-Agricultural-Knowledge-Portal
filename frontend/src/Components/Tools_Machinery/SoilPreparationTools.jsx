import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Wrench, 
  Settings2, 
  Tractor, 
  Sprout, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
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

const ToolCard = ({ title, subTitle, content, features, imagePrompt, type }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-orange-50 hover:shadow-md transition-shadow"
  >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
          {type}
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-1">{title}</h3>
        <p className="text-orange-600 font-bold mb-4">{subTitle}</p>
        <p className="text-gray-600 leading-relaxed mb-6">{content}</p>
        
        <div className="grid md:grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="text-orange-500" />
              {feature}
            </div>
          ))}
        </div>
      </div>
      {imagePrompt && (
        <div className="lg:w-2/5 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50 flex items-center justify-center p-2">
           {imagePrompt}
        </div>
      )}
    </div>
  </motion.div>
)

function SoilPreparationTools() {
  const [activeTab, setActiveTab] = useState('primary')

  return (
    <>
      <Navbar />
      <PageTemplate title="Soil Preparation & Tillage">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Tab Navigation */}
          <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6 justify-center">
            <TabButton label="Primary Tillage" value="primary" activeTab={activeTab} setActiveTab={setActiveTab} icon={Tractor} />
            <TabButton label="Secondary Tillage" value="secondary" activeTab={activeTab} setActiveTab={setActiveTab} icon={Settings2} />
            <TabButton label="Conservation" value="conservation" activeTab={activeTab} setActiveTab={setActiveTab} icon={ShieldCheck} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'primary' && (
                <>
                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-black text-gray-900 leading-tight">Primary Tillage: Breaking Ground</h2>
                      <p className="text-lg text-gray-600">
                        The first step in soil preparation. These tools are designed to cut, shatter, and invert the soil, often to a depth of 15–30cm. This buries weeds and aerates compacted layers.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-orange-50">
                      <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-orange-600">MB Plough Operation</h4>
                      
                    </div>
                  </div>
                  
                  <ToolCard 
                    title="Moldboard (MB) Plough"
                    subTitle="Best for: Soil Inversion & Weed Burial"
                    content="The most important tool for primary tillage. It cuts a furrow slice and turns it over completely, burying crop residue and killing weeds."
                    features={["Deep aeration", "High inversion rate", "Removes hard pan", "Heavy duty design"]}
                    type="Primary"
                    imagePrompt=""
                  />

                  <ToolCard 
                    title="Disc Plough"
                    subTitle="Best for: Hard, Dry, or Stony Soils"
                    content="Uses heavy steel discs to cut through soil rather than a share. Ideal for land where moldboard ploughs might break due to rocks or extremely dry conditions."
                    features={["Self-sharpening discs", "Works in trashy land", "Adjustable disc angle", "High durability"]}
                    type="Primary"
                  />
                </>
              )}

              {activeTab === 'secondary' && (
                <>
                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-orange-50 order-2 lg:order-1">
                      <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-orange-600">Seedbed Quality Comparison</h4>
                      
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                      <h2 className="text-4xl font-black text-gray-900 leading-tight">Secondary Tillage: Smoothing</h2>
                      <p className="text-lg text-gray-600">
                        Performed after primary tillage to pulverize soil clods, level the surface, and create a fine seedbed for optimal seed-to-soil contact.
                      </p>
                    </div>
                  </div>
                  
                  <ToolCard 
                    title="Rotavator (Rotary Tiller)"
                    subTitle="Best for: Rapid Seedbed Preparation"
                    content="A tractor-powered tool with rotating L-shaped blades. It performs the work of a plough, harrow, and leveler in a single pass."
                    features={["Time saving", "Fine soil tilth", "Fuel efficient", "Excellent for paddy fields"]}
                    type="Secondary"
                    imagePrompt=""
                  />

                  <ToolCard 
                    title="Disc Harrow"
                    subTitle="Best for: Breaking Clods & Mulching"
                    content="Consists of smaller discs arranged in gangs. It shatters clods and mixes the top 5-10cm of soil."
                    features={["Lightweight", "High speed", "Adjustable gangs", "Effective weed control"]}
                    type="Secondary"
                  />
                </>
              )}

              {activeTab === 'conservation' && (
                <div className="space-y-8">
                  <div className="bg-orange-950 text-white p-10 rounded-[3.5rem] shadow-2xl flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-4 flex items-center gap-3"><Sprout /> Conservation Tillage</h3>
                      <p className="opacity-80 leading-relaxed">
                        Modern farming focuses on <b>Minimum Tillage</b>. By keeping at least 30% crop residue on the surface, we reduce erosion, keep soil cool, and save fuel.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                       
                    </div>
                  </div>
                  
                  <ToolCard 
                    title="Cultivator / Chisel Plough"
                    subTitle="Best for: Deep Ripping without Inversion"
                    content="Breaks the soil without turning it over. This maintains the organic matter on the surface while still aerating the root zone."
                    features={["Prevents erosion", "Saves soil moisture", "Lower draft power", "Protects soil life"]}
                    type="Conservation"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Maintenance & Safety Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-[3.5rem] text-white shadow-lg">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-md">
                   <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                     <Wrench className="text-orange-500" /> Maintenance Guide
                   </h3>
                   <p className="text-gray-400 mb-6">Tillage tools deal with high friction and impact. Neglecting blades costs more in fuel than the parts themselves.</p>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4 w-full">
                   {[
                     { title: "Blade Sharpness", desc: "Dull blades increase fuel consumption by up to 15%." },
                     { title: "Bearing Lubrication", desc: "Grease disc gangs every 8-10 hours of operation." },
                     { title: "Bolt Tightening", desc: "Vibration loosens MB shares. Check daily." },
                     { title: "Tyre Pressure", desc: "Ensure equal tractor tyre pressure to prevent uneven tillage depth." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                         <h5 className="font-bold text-orange-400">{item.title}</h5>
                         <p className="text-xs text-gray-400">{item.desc}</p>
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

export default SoilPreparationTools