import React from 'react'
import { motion } from 'framer-motion'
import { 
  Beef, Map, Footprints, Wind, 
  ShieldCheck, TrendingUp, Activity, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function PastoralFarming() {
  const { isDark } = useTheme()

  const videos = [
    { id: 'vA6z08I20-A', title: 'Principles of Rotational Grazing', desc: 'Maximizing pasture regrowth through strategic animal movement.' },
    { id: 'h7T9cO6S_yU', title: 'Sustainable Rangeland Management', desc: 'How to maintain biodiversity in large-scale livestock systems.' },
    { id: '097Y861mE70', title: 'Nomadic vs. Commercial Pastoralism', desc: 'Understanding the socio-economic models of grazing.' }
  ];

  return (
    <PageTemplate title={'Pastoral Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Core Concept */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Beef className="text-amber-700" /> Livestock-Centric Systems
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Pastoral farming is a branch of agriculture concerned with the <b>raising of livestock</b> on natural or semi-natural grasslands. It is the primary land-use strategy for arid, mountainous, or cold regions where crop cultivation is non-viable.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-amber-600 ${isDark ? 'bg-amber-600/5' : 'bg-amber-50'}`}>
              <p className="text-sm font-medium italic">"Modern pastoralism is a game of grass management; you aren't just raising animals, you are farming sunlight via forage."</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-amber-500/20 bg-white p-2">
            
          </div>
        </section>

        {/* 2. Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Stocking Rate", value: "Optimal Density", icon: Activity, color: "text-blue-500" },
            { label: "Land Use", value: "Non-Arable", icon: Map, color: "text-emerald-500" },
            { label: "Mobility", value: "Rotational", icon: Footprints, color: "text-orange-500" },
            { label: "Resilience", value: "Climate-Adaptive", icon: Wind, color: "text-purple-500" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Grazing Strategies */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="text-amber-600" /> Operational Models
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Nomadic Pastoralism", 
                text: "Movement following seasonal rainfall and forage availability. Common in dryland ecosystems.",
                icon: Map 
              },
              { 
                title: "Transhumance", 
                text: "Seasonal movement between fixed summer (highland) and winter (lowland) pastures.",
                icon: Wind 
              },
              { 
                title: "Ranching", 
                text: "Commercial-scale grazing on fixed, often fenced land with a focus on meat or wool export.",
                icon: ShieldCheck 
              }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
                <item.icon className="text-blue-500 mb-4" size={28} />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Pasture Health Matrix */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Technical Land Management</h3>
          
          <div className={`overflow-x-auto rounded-3xl border mt-6 ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Factor</th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">Overgrazing Risk</th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">Sustainable Practice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Soil Impact", "Erosion & Compaction", "Manure Enrichment"],
                  ["Vegetation", "Invasive Species Rise", "Diverse Forage Cover"],
                  ["Water", "Runoff & Siltation", "Catchment Preservation"],
                  ["Biodiversity", "Ecosystem Collapse", "Habitat Synergy"]
                ].map(([feature, risk, practice], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-slate-500/5 transition-colors">
                    <td className="p-4 font-semibold">{feature}</td>
                    <td className="p-4 text-red-500/80 text-sm">{risk}</td>
                    <td className="p-4 text-emerald-600 font-medium">{practice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Video Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Rangeland Analysis
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
                  className="text-[10px] text-amber-700 font-bold hover:underline tracking-tighter"
                >
                  SOURCE: AGRI-EDUCATION →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default PastoralFarming;