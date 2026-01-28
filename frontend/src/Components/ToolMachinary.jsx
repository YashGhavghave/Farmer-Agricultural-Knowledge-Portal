import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Droplets, 
  Scissors, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  ChevronRight,
  BarChart3
} from 'lucide-react';
import PageTemplate from './ui/PageTemplate';
import { Link } from 'react-router-dom';

const ToolCategory = ({ title, icon: Icon, tools, color }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col h-full"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-6 text-white`}>
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3 mb-8 flex-grow">
      {tools.map((tool, i) => (
        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {tool}
        </li>
      ))}
    </ul>
    <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm group">
      View Selection Guide <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

function ToolMachinary() {
  return (
    <PageTemplate 
      title="Tools & Machinery" 
      intro="From hand tools to heavy horsepower: optimize your mechanical workflow."
    >
      <div className="max-w-6xl mx-auto pb-20 space-y-12">
        
        {/* Section 1: Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ToolCategory 
            title="Soil Prep" 
            icon={Settings} 
            color="bg-orange-500"
            tools={["Reversible Ploughs", "Rotavators", "Laser Land Levellers", "Cultivators"]} 
          />
          <ToolCategory 
            title="Irrigation" 
            icon={Droplets} 
            color="bg-blue-500"
            tools={["Solar Pump Sets", "Drip Manifolds", "Impact Sprinklers", "Fertigation Tanks"]} 
          />
          <ToolCategory 
            title="Post-Harvest" 
            icon={Scissors} 
            color="bg-purple-500"
            tools={["Multi-crop Threshers", "Grain Dryers", "Cold Storage Tech", "Baling Machines"]} 
          />
        </div>

        {/* Section 2: Irrigation Tech Comparison */}
        <div className="bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-black text-gray-900">Precision <span className="text-blue-600">Irrigation</span></h2>
              <p className="text-gray-600 leading-relaxed">
                Choosing between Drip and Sprinkler systems depends on your crop type and soil infiltration rate. 
                Drip systems can reduce water waste by up to 60% compared to surface flooding.
              </p>
              
              

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                  <Zap className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900">Efficiency Boost</h4>
                    <p className="text-xs text-blue-700">Automation sensors can trigger pumps based on real-time soil moisture tension.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 p-12 text-white flex flex-col justify-center">
               <h4 className="text-sm font-black uppercase tracking-widest opacity-60 mb-6">Equipment Maintenance Checklist</h4>
               <div className="space-y-6">
                  {[
                    { t: "Pre-Season", d: "Lubricate moving parts, check hydraulic fluid levels." },
                    { t: "Daily Check", d: "Clean air filters, inspect for loose bolts/leaks." },
                    { t: "Storage", d: "Drain fuel systems, shield rubber parts from UV." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-2 border-white/20 pl-6">
                       <div>
                          <p className="font-bold">{item.t}</p>
                          <p className="text-sm text-blue-100 opacity-80">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Section 3: Post-Harvest Lifecycle */}
        <div className="bg-gray-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <BarChart3 className="text-emerald-400" /> Maximizing Post-Harvest ROI
            </h2>
            <p className="text-gray-400 mb-8">
              Mechanized harvesting reduces the "Critical Window" loss—the time between crop maturity and storage where quality degrades fastest.
            </p>
            
            

            <div className="flex flex-wrap gap-4">
               <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-50">Safety Certified</span>
               </div>
               <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-2">
                  <Wrench size={18} className="text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-50">Local Serviceable</span>
               </div>
            </div>
          </div>
          <Settings className="absolute right-0 bottom-0 text-white opacity-5 -mr-20 -mb-20 animate-spin-slow" size={400} />
        </div>

        {/* Maintenance Callout */}
        <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-6">
              <div className="p-4 bg-emerald-600 rounded-2xl text-white">
                <Wrench size={32} />
              </div>

                {/* Quick Links: Tools & Machinery Subpages */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Detailed Equipment Guides</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/tools_machinery/harvesting-tools" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
                      <h4 className="font-bold text-gray-900">Harvesting Tools</h4>
                      <p className="text-sm text-gray-500 mt-2">Threshers, combine tips and selecting the right header.</p>
                    </Link>

                    <Link to="/tools_machinery/irrigation-equipment" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
                      <h4 className="font-bold text-gray-900">Irrigation Equipment</h4>
                      <p className="text-sm text-gray-500 mt-2">Pumps, sprinklers, drip components and maintenance.</p>
                    </Link>

                    <Link to="/tools_machinery/soil-tools" className="block p-6 rounded-2xl border hover:shadow-lg transition-all bg-gray-50">
                      <h4 className="font-bold text-gray-900">Soil Preparation Tools</h4>
                      <p className="text-sm text-gray-500 mt-2">Ploughs, rotavators and land levelling equipment.</p>
                    </Link>
                  </div>
                </div>
              <div>
                <h4 className="text-xl font-black text-gray-900">Machinery Support</h4>
                <p className="text-gray-500 text-sm">Need a customized maintenance schedule for your specific tractor or pump?</p>
              </div>
           </div>
           <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200">
             Contact Specialist
           </button>
        </div>
      </div>
    </PageTemplate>
  );
}

export default ToolMachinary;