import React from 'react'
import { motion } from 'framer-motion'
import { 
  RotateCcw, Beef, Sprout, ShieldCheck, 
  TrendingUp, CircleDollarSign, Info, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function MixedFarming() {
  const { isDark } = useTheme()

  const videos = [
    { id: '3wP6u6H_4rY', title: 'Integrated Crop-Livestock Systems', desc: 'How mixing animals and crops creates a sustainable nutrient cycle.' },
    { id: 'Xv8fNiaWl9k', title: 'Circular Farming Economy', desc: 'Reducing external inputs by recycling waste within the farm.' },
    { id: '7Sb0UoghFoE', title: 'Small-Scale Mixed Farming', desc: 'Maximizing productivity on limited acreage through diversification.' }
  ];

  return (
    <PageTemplate title={'Mixed Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. The Circular Concept */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <RotateCcw className="text-orange-500" /> Symbiotic Agriculture
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Mixed farming is an integrated system where <b>crop cultivation</b> and <b>livestock rearing</b> take place on the same farm. This creates a closed-loop system where the waste of one enterprise becomes the resource for the other.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-orange-500 ${isDark ? 'bg-orange-500/5' : 'bg-orange-50'}`}>
              <p className="text-sm font-medium italic">"It is the ultimate insurance policy for farmers—when crop prices fall, livestock provides a safety net, and vice versa."</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-orange-500/20 bg-white p-4">
            
          </div>
        </section>

        {/* 2. Key Pillars of Integration */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Nutrients", value: "Organic Manure", icon: Sprout, color: "text-emerald-500" },
            { label: "Animal Feed", value: "Crop Residues", icon: Beef, color: "text-amber-600" },
            { label: "Risk", value: "Diversified", icon: ShieldCheck, color: "text-blue-500" },
            { label: "Income", value: "Year-Round", icon: CircleDollarSign, color: "text-purple-500" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Operational Advantages */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="text-blue-500" /> Technical Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Soil Fertility", 
                text: "Animal manure replaces synthetic fertilizers, improving soil organic matter and microbial health.",
                icon: Sprout 
              },
              { 
                title: "Draft Power", 
                text: "In many systems, animals provide carbon-neutral labor for ploughing and transportation.",
                icon: RotateCcw 
              },
              { 
                title: "Weed Control", 
                text: "Livestock can graze on crop residues or fallow land, naturally managing weed populations.",
                icon: ShieldCheck 
              }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
                <item.icon className="text-orange-500 mb-4" size={28} />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Efficiency Table */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Resource Allocation</h3>
          <div className={`overflow-x-auto rounded-3xl border ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Component</th>
                  <th className="p-4 font-bold border-b border-inherit text-orange-500">Function</th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">Waste-to-Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Crops", "Primary Income", "Straw/Husk → Animal Bedding/Feed"],
                  ["Livestock", "Secondary Income", "Manure → Nitrogen-Rich Fertilizer"],
                  ["Legumes", "Nitrogen Fixation", "High-Protein Fodder"],
                  ["Farm Pond", "Irrigation", "Silt → Nutrient-Rich Topsoil"]
                ].map(([comp, func, waste], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-orange-500/5 transition-colors">
                    <td className="p-4 font-semibold">{comp}</td>
                    <td className="p-4 opacity-80">{func}</td>
                    <td className="p-4 font-mono text-sm">{waste}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Learning Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Field Analysis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className={`p-4 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
                <h5 className="font-bold text-sm mb-1">{video.title}</h5>
                <p className="text-xs opacity-60 mb-3">{video.desc}</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-orange-600 font-bold hover:underline"
                >
                  WATCH ON YOUTUBE →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default MixedFarming;