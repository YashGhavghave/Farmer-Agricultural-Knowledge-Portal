import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FlaskConical, 
  Sprout, 
  Table2, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  TrendingUp,
  Droplets
} from "lucide-react";
import PageTemplate from "./ui/PageTemplate";
import Footer from "./footer";

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-all duration-300 ${
      activeTab === value
        ? "bg-emerald-600 text-white shadow-lg scale-105"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const NutrientBadge = ({ type, color, desc }) => (
  <div className={`p-4 rounded-2xl border ${color} bg-white shadow-sm`}>
    <h4 className="font-black text-xl mb-1">{type}</h4>
    <p className="text-xs text-gray-500 leading-tight">{desc}</p>
  </div>
);

function Fertilizers() {
  const [activeTab, setActiveTab] = useState("basics");

  return (
    <PageTemplate title="Nutrient Management & Fertilizers">
      <div className="max-w-6xl mx-auto pb-20 space-y-12">
        
        {/* Modern Hero Intro */}
        <div className="bg-gradient-to-br from-emerald-900 to-green-800 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-black mb-4">Feed the Soil, Fuel the Crop</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-6">
              A scientific approach to fertilization involves understanding N-P-K ratios, 
              correcting micronutrient gaps, and timing applications to match plant growth stages.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span className="text-sm font-bold">NPK Optimized</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span className="text-sm font-bold">Soil Health Focused</span>
               </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
            <FlaskConical size={400} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 flex-wrap justify-center border-b border-gray-100 pb-8">
          <TabButton label="The N-P-K Science" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={FlaskConical} />
          <TabButton label="Indian Grades" value="grades" activeTab={activeTab} setActiveTab={setActiveTab} icon={Table2} />
          <TabButton label="Deficiency Guide" value="deficiency" activeTab={activeTab} setActiveTab={setActiveTab} icon={AlertTriangle} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "basics" && (
              <div className="space-y-10">
                <div className="grid md:grid-cols-3 gap-6">
                  <NutrientBadge type="N" color="border-blue-200 text-blue-600" desc="Nitrogen: Leaf growth and green pigment (Chlorophyll)." />
                  <NutrientBadge type="P" color="border-orange-200 text-orange-600" desc="Phosphorus: Root architecture and energy transfer (ATP)." />
                  <NutrientBadge type="K" color="border-purple-200 text-purple-600" desc="Potassium: Water regulation and disease resistance." />
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-10">
                   <div className="flex-1 space-y-6">
                      <h3 className="text-3xl font-black text-gray-900">Decoding Fertilizer Grade</h3>
                      <p className="text-gray-600">The <b>Grade</b> is a mandatory label showing the percentage of nutrients. For example, <b>DAP (18-46-0)</b> contains zero Potassium but is heavily loaded with Phosphorus for early rooting.</p>
                      <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                         <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2"><Info size={18}/> Pro Tip: Solubility</h4>
                         <p className="text-sm text-emerald-700 leading-relaxed">Not all phosphorus is equal. Ensure your fertilizer has high <b>Water Soluble Phosphorus</b> for immediate plant uptake.</p>
                      </div>
                   </div>
                   <div className="lg:w-2/5 bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Fertilizer Grade Anatomy</h4>
                      
                   </div>
                </div>
              </div>
            )}

            {activeTab === "grades" && (
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-center text-gray-900 mb-8">Standard Indian Fertilizer Grades</h3>
                <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl">
                  <table className="w-full text-left bg-white">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="p-6 font-bold">Grade (N-P-K)</th>
                        <th className="p-6 font-bold">Primary Use Case</th>
                        <th className="p-6 font-bold">Best Stage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        { grade: "Urea (46-0-0)", use: "Rapid vegetative growth", stage: "Top Dressing" },
                        { grade: "DAP (18-46-0)", use: "Root development & branching", stage: "Basal (Sowing)" },
                        { grade: "10-26-26", use: "Grain weight & flowering", stage: "Pre-flowering" },
                        { grade: "19-19-19", use: "Balanced all-purpose nutrition", stage: "Foliar Spray" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-50/50 transition-colors">
                          <td className="p-6 font-black text-emerald-700">{row.grade}</td>
                          <td className="p-6 text-gray-600">{row.use}</td>
                          <td className="p-6 font-bold text-gray-900 italic">{row.stage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "deficiency" && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2.5rem] border border-red-50 shadow-sm">
                  <h3 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-2">
                    <AlertTriangle /> Common Deficiencies
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-auto bg-blue-500 rounded-full" />
                      <div>
                        <h4 className="font-bold">Nitrogen (N)</h4>
                        <p className="text-sm text-gray-500 italic">Uniform yellowing of older leaves starting from the tip.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-auto bg-orange-500 rounded-full" />
                      <div>
                        <h4 className="font-bold">Phosphorus (P)</h4>
                        <p className="text-sm text-gray-500 italic">Purple or reddish tint on leaves; stunted root growth.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-auto bg-purple-500 rounded-full" />
                      <div>
                        <h4 className="font-bold">Potassium (K)</h4>
                        <p className="text-sm text-gray-500 italic">"Browning" or scorching of leaf margins (edges).</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center">
                   <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Visual Identification Chart</h4>
                   
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Next Step Section */}
        <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-emerald-100 relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                 <h3 className="text-3xl font-black text-gray-900 mb-4">Ready to Apply?</h3>
                 <p className="text-gray-600 leading-relaxed mb-6">
                   Using the right fertilizer is only half the battle. You must calculate the <b>Rate</b> based on your soil health card to avoid "Chemical Overload" which kills soil microbes.
                 </p>
                 <button className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200">
                    Get Soil Test Guidelines <TrendingUp size={20} />
                 </button>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex gap-6">
                 <div className="text-center">
                    <Droplets className="mx-auto text-emerald-600 mb-2" />
                    <p className="text-[10px] font-bold text-emerald-800 uppercase">Solubility</p>
                 </div>
                 <div className="text-center">
                    <TrendingUp className="mx-auto text-emerald-600 mb-2" />
                    <p className="text-[10px] font-bold text-emerald-800 uppercase">Yield Boost</p>
                 </div>
                 <div className="text-center">
                    <Sprout className="mx-auto text-emerald-600 mb-2" />
                    <p className="text-[10px] font-bold text-emerald-800 uppercase">Organic</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <Footer />
    </PageTemplate>
  );
}

export default Fertilizers;