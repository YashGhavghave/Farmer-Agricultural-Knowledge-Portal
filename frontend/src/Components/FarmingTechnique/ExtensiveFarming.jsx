import React from 'react'
import { motion } from 'framer-motion'
import { 
  Maximize, Map, Layers, TrendingDown, 
  Info, ShieldCheck, Tractor, Globe 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function ExtensiveFarming() {
  const { isDark } = useTheme()

  const videos = [
    { id: 'vA6z08I20-A', title: 'Extensive vs Intensive Systems', desc: 'Understanding the core differences in land use and capital.' },
    { id: 'h7T9cO6S_yU', title: 'Broadacre Grain Farming', desc: 'A look into large-scale wheat and barley production in extensive zones.' },
    { id: '097Y861mE70', title: 'Ranching & Pastoralism', desc: 'How livestock is managed over vast territories with minimal intervention.' }
  ];

  return (
    <PageTemplate title={'Extensive Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Core Definition */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Map className="text-emerald-500" /> Large-Scale, Low-Input
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Extensive farming is an agricultural production system that uses <b>small inputs of labor, fertilizers, and capital</b> relative to the land area being farmed. It relies primarily on the natural fertility of the soil and the local climate.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-amber-500 ${isDark ? 'bg-amber-500/5' : 'bg-amber-50'}`}>
              <p className="text-sm font-medium italic">"The strategy here is to maximize total profit across thousands of hectares, even if the yield per single hectare is low."</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-500/20">
            
          </div>
        </section>

        {/* 2. Key Characteristics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Land Area", value: "Massive", icon: Maximize, color: "text-blue-500" },
            { label: "Per Acre Yield", value: "Low", icon: TrendingDown, color: "text-red-500" },
            { label: "Population", value: "Sparse", icon: Globe, color: "text-purple-500" },
            { label: "Machinery", icon: Tractor, value: "Specialized", color: "text-emerald-500" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. The Intensive vs Extensive Comparison */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layers className="text-blue-500" /> Strategic Comparison
          </h3>
          <div className={`overflow-x-auto rounded-3xl border ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Feature</th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">Extensive Farming</th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">Intensive Farming</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Location", "Vast plains (USA, Australia)", "Densely populated (India, SE Asia)"],
                  ["Labor Force", "Minimal (Highly mechanized)", "High (Manual labor)"],
                  ["Soil Health", "Low impact, natural recovery", "High chemical/fertilizer use"],
                  ["Crops", "Wheat, Barley, Cattle", "Vegetables, Dairy, Rice"],
                  ["Total Output", "High (due to land size)", "High (due to efficiency)"]
                ].map(([feature, ext, int], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-slate-500/5 transition-colors">
                    <td className="p-4 font-semibold">{feature}</td>
                    <td className="p-4 opacity-80">{ext}</td>
                    <td className="p-4 opacity-80">{int}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Ecological Impact Visual */}
        <section className={`p-8 rounded-[3rem] ${isDark ? 'bg-slate-800/40' : 'bg-emerald-50/50 border border-emerald-100'}`}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-emerald-600" /> Environmental Footprint
              </h3>
              <p className="opacity-70 leading-relaxed mb-4">
                Because extensive farming uses fewer synthetic fertilizers and pesticides per unit of land, it often has a <b>lower ecological impact</b> on a local level. However, because it requires so much land, it can be a driver of habitat conversion.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">✅ Low risk of soil salinity</li>
                <li className="flex gap-2">✅ Preservation of natural soil structure</li>
                <li className="flex gap-2">⚠️ Potential for overgrazing in pastoral systems</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
               
            </div>
          </div>
        </section>

        {/* 5. Video Learning Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center">Field Study & Analysis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className={`p-4 rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                  />
                </div>
                <h5 className="font-bold text-sm mb-1">{video.title}</h5>
                <p className="text-xs opacity-60 mb-3">{video.desc}</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-emerald-500 font-bold hover:underline uppercase tracking-widest"
                >
                  View on YouTube →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default ExtensiveFarming;