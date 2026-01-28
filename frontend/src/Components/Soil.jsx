import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Waves, 
  Beaker, 
  Leaf, 
  ChevronRight, 
  Info, 
  Droplets, 
  Thermometer,
  Layers
} from "lucide-react";
import PageTemplate from "./ui/PageTemplate";
import { Link } from 'react-router-dom';

const SoilCard = ({ title, icon: Icon, children, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
    <div className="text-gray-600 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

function Soil() {
  const [activeStep, setActiveStep] = useState(0);

  const testingSteps = [
    { title: "Sample Collection", desc: "Take samples from 10-15 random spots in a 'Z' pattern at 15cm depth." },
    { title: "Processing", desc: "Mix samples in a plastic bucket, air dry in shade, and pack 500g for the lab." },
    { title: "Analysis", desc: "Lab tests for pH, OC, N, P, K, and micronutrients like Zinc and Boron." }
  ];

  return (
    <PageTemplate 
      title="Soil Health & Management" 
      intro="The foundation of every high-yield crop starts 6 inches below the surface."
    >
      <div className="max-w-6xl mx-auto pb-20 space-y-12">
        
        {/* Section 1: Texture & Types */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Understanding <span className="text-emerald-600">Soil Texture</span>
            </h2>
            <p className="text-lg text-gray-600">
              Texture is determined by the ratio of Sand, Silt, and Clay. This physical property 
              dictates how well your soil breathes and holds onto water.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <h4 className="font-bold text-amber-800">Sandy Soil</h4>
                <p className="text-xs text-amber-700">High drainage, low nutrient retention. Needs frequent organic matter.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800">Clay Soil</h4>
                <p className="text-xs text-blue-700">Small particles, high water-holding, but prone to compaction.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-[3rem] p-8 flex flex-col items-center justify-center border border-gray-100 shadow-inner">
            <h4 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-6">The Texture Triangle</h4>
            
            <p className="mt-4 text-xs text-center text-gray-400 italic italic">Loam is considered the ideal texture for most agricultural crops.</p>
          </div>
        </div>

        {/* Section 2: Soil Testing Workflow */}
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Beaker /> Precision Soil Testing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testingSteps.map((step, idx) => (
                <div key={idx} className="relative group cursor-pointer" onClick={() => setActiveStep(idx)}>
                  <div className={`mb-4 text-5xl font-black transition-colors ${activeStep === idx ? "text-emerald-400" : "text-white/20"}`}>
                    0{idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-emerald-100/70 text-sm leading-relaxed">{step.desc}</p>
                  {idx < 2 && <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/10" size={32} />}
                </div>
              ))}
            </div>
          </div>
          <Layers className="absolute right-0 bottom-0 opacity-5 -mr-16 -mb-16" size={400} />
        </div>

          {/* Section 3: Amendments & Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SoilCard title="pH Correction" icon={Droplets} color="bg-blue-500">
            Soil pH affects nutrient availability. Use <b>Lime</b> for acidic soils and <b>Gypsum</b> for alkaline (sodic) soils.
            
          </SoilCard>

          <SoilCard title="Organic Matter" icon={Leaf} color="bg-emerald-500">
            Increase <b>Cation Exchange Capacity (CEC)</b> by adding FYM (Farm Yard Manure), Vermicompost, or Green Manure.
          </SoilCard>

          <SoilCard title="Structure" icon={Waves} color="bg-orange-500">
            Healthy soil should have 50% pore space for air and water. Avoid heavy machinery use when soil is wet to prevent <b>Compaction</b>.
          </SoilCard>
        </div>

        {/* Quick Links: Soil Subpages */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-black text-gray-900 mb-6">Related Guides & Deep Dives</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/soil/soil-testing" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Soil Testing</h4>
              <p className="text-sm text-gray-500 mt-2">Sampling, lab analysis and interpretation.</p>
            </Link>

            <Link to="/soil/soil-type" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Soil Types</h4>
              <p className="text-sm text-gray-500 mt-2">Texture, structure and field identification.</p>
            </Link>

            <Link to="/soil/soil-amendments" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Soil Amendments</h4>
              <p className="text-sm text-gray-500 mt-2">Lime, gypsum, organic matter and how to use them.</p>
            </Link>

            <Link to="/soil/fertilizers-chemical" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Chemical Fertilizers</h4>
              <p className="text-sm text-gray-500 mt-2">Grades, application timing and safety.</p>
            </Link>

            <Link to="/soil/fertilizers-organic" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Organic Fertilizers</h4>
              <p className="text-sm text-gray-500 mt-2">Compost, FYM and green manures.</p>
            </Link>

            <Link to="/nav/fertilizer" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
              <h4 className="font-bold text-gray-900">Fertilizer Hub</h4>
              <p className="text-sm text-gray-500 mt-2">Overview: N-P-K science and application guides.</p>
            </Link>
          </div>
        </div>

        {/* Practical Tips Callout */}
        <div className="bg-white border-2 border-dashed border-emerald-200 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-emerald-100 p-4 rounded-2xl">
            <Info className="text-emerald-600" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-black text-gray-900 mb-1">Quick Field Test: The Ribbon Test</h4>
            <p className="text-gray-500 text-sm">
              Squeeze a moist ball of soil in your hand. If it crumbles immediately, it's Sandy. 
              If you can squeeze it into a long 'ribbon' between your thumb and finger, it has high Clay content.
            </p>
          </div>
          <button className="whitespace-nowrap bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-colors ml-auto">
            Book a Lab Test
          </button>
        </div>

      </div>
    </PageTemplate>
  );
}

export default Soil;