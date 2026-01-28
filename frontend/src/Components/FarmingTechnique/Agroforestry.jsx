import React from 'react'
import { motion } from 'framer-motion'
import { Trees, Sprout, Wind, ShieldCheck, Info, Layers, PlayCircle } from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function Agroforestry() {
  const { isDark } = useTheme()

  const videos = [
    { id: '4iS9W9N1j9s', title: 'Agroforestry Systems Explained', desc: 'A deep dive into how trees and crops interact to boost yields.' },
    { id: "M6u0S0mF0Gk", title: 'Alley Cropping Basics', desc: 'Techniques for planting rows of trees with crops in between.' },
    { id: '7Sb0UoghFoE', title: 'Silvopasture Management', desc: 'Integrating livestock with timber and forage production.' }
  ];

  return (
    <PageTemplate title={'Agroforestry Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Scientific Concept */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Trees className="text-emerald-500" /> Ecological Integration
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Agroforestry is a land management system that deliberately integrates trees or shrubs with agricultural crops or livestock. By utilizing <b>Vertical Stratification</b>, farmers can harvest from multiple layers of the ecosystem simultaneously.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-emerald-500 ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-50'}`}>
              <p className="text-sm font-medium italic">"It's not just about more trees; it's about the right tree, in the right place, for the right purpose."</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-500/20">
            
          </div>
        </section>

        {/* 2. The Five Main Systems */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 italic">
            <Layers className="text-blue-500" /> Core Agroforestry Practices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Alley Cropping", icon: Sprout, text: "Planting crops between wide rows of trees to provide shade and nitrogen fix." },
              { title: "Silvopasture", icon: ShieldCheck, text: "Combining trees with forage and livestock grazing for animal shelter and timber." },
              { title: "Riparian Buffers", icon: Wind, text: "Trees planted along water streams to prevent erosion and filter runoff." },
              { title: "Forest Farming", icon: Trees, text: "Cultivating high-value specialty crops (like ginseng) under a forest canopy." },
              { title: "Windbreaks", icon: Wind, text: "Linear rows of trees designed to protect crops and soil from wind erosion." }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <item.icon className="text-emerald-500 mb-4" size={28} />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Technical Benefits Table */}
        <section>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-500">
             Technical Advantages
          </h3>
          
          <div className={`overflow-x-auto rounded-3xl border mt-6 ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Mechanism</th>
                  <th className="p-4 font-bold border-b border-inherit">Benefit</th>
                  <th className="p-4 font-bold border-b border-inherit">Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nutrient Cycling", "Deep roots bring minerals up", "+20% Soil Fertility"],
                  ["Microclimate", "Canopy reduces heat stress", "-5°C Temp Control"],
                  ["Carbon Sink", "Trees sequester CO2", "Climate Mitigation"],
                  ["Biodiversity", "Habitat for pest predators", "-30% Pesticide Need"]
                ].map(([mech, ben, impact], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-emerald-500/5 transition-colors">
                    <td className="p-4 font-semibold text-emerald-500">{mech}</td>
                    <td className="p-4 opacity-80">{ben}</td>
                    <td className="p-4 font-mono text-sm">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Corrected Video Grid */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Learning Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className={`p-4 rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black relative shadow-inner">
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
                  className="text-[10px] text-emerald-500 hover:underline font-bold uppercase tracking-widest"
                >
                  Open in YouTube →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default Agroforestry;