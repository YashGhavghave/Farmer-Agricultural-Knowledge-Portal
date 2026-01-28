import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, Users, Footprints, ShieldCheck, 
  Trash2, Home, Sprout, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function SubsistenceFarming() {
  const { isDark } = useTheme()

  const videos = [
    { id: 'K6m90X38I-w', title: 'Life on a Subsistence Farm', desc: 'How families manage daily food production without modern machinery.' },
    { id: '7Sb0UoghFoE', title: 'Intensive Subsistence Systems', desc: 'Maximizing small plots of land in high-population areas.' },
    { id: '1A-S8x_WvQk', title: 'Traditional Seed Saving', desc: 'The importance of maintaining local crop varieties for resilience.' }
  ];

  return (
    <PageTemplate title={'Subsistence Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Core Philosophy */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Heart className="text-red-500" /> Farming for Survival
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Subsistence farming is a form of agriculture where nearly all the crops or livestock raised are used to <b>maintain the farmer and their family</b>, leaving little, if any, surplus for sale or trade.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-red-500 ${isDark ? 'bg-red-500/5' : 'bg-red-50'}`}>
              <p className="text-sm font-medium italic text-red-800 dark:text-red-300">
                "In this system, the farm is a closed loop of survival. Success is measured not in currency, but in calories and food security."
              </p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-red-500/20 bg-white p-4">
            
          </div>
        </section>

        {/* 2. Key Characteristics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Main Goal", value: "Consumption", icon: Home, color: "text-blue-500" },
            { label: "Labor", value: "Family-Based", icon: Users, color: "text-orange-500" },
            { label: "Tools", icon: Footprints, value: "Traditional", color: "text-amber-600" },
            { label: "Waste", value: "Zero Waste", icon: Trash2, color: "text-emerald-600" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. The Two Faces of Subsistence */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className={`p-8 rounded-[3rem] border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="text-xl font-black mb-4 flex items-center gap-2">
              <Sprout className="text-emerald-500" /> Intensive Subsistence
            </h4>
            <p className="text-sm opacity-70 mb-4">Found in densely populated regions like Southeast Asia. High labor on tiny plots to feed large families.</p>
            <ul className="text-xs space-y-2 opacity-80">
              <li>• Double or triple cropping per year</li>
              <li>• Heavy use of animal manure</li>
              <li>• Intricate irrigation systems (e.g., Paddy fields)</li>
            </ul>
          </div>
          <div className={`p-8 rounded-[3rem] border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="text-xl font-black mb-4 flex items-center gap-2 text-orange-600">
              <ShieldCheck /> Primitive Subsistence
            </h4>
            <p className="text-sm opacity-70 mb-4">Involves shifting cultivation and nomadic herding in areas with low population density.</p>
            <ul className="text-xs space-y-2 opacity-80">
              <li>• Minimal tools (hoes and digging sticks)</li>
              <li>• Reliance on natural soil fertility</li>
              <li>• Often involves communal land ownership</li>
            </ul>
          </div>
        </section>

        {/* 4. Efficiency Matrix */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Resource Management</h3>
          
          <div className={`overflow-x-auto rounded-3xl border mt-6 ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Resource</th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">Source</th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">Utilization</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Seeds", "Previous Harvest", "Heirloom varieties saved annually"],
                  ["Fertility", "Livestock Waste", "Compost and manure-based nutrients"],
                  ["Pest Control", "Bio-diversity", "Intercropping and physical removal"],
                  ["Water", "Rainfall/Well", "Manual or gravity-fed irrigation"]
                ].map(([res, source, util], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-slate-500/5 transition-colors">
                    <td className="p-4 font-semibold">{res}</td>
                    <td className="p-4 opacity-80">{source}</td>
                    <td className="p-4 text-emerald-600 font-medium text-sm">{util}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Video Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Documentary Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className={`p-4 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                    title={video.title} 
                    frameBorder="0" 
                    allowFullScreen 
                  />
                </div>
                <h5 className="font-bold text-sm mb-1">{video.title}</h5>
                <p className="text-xs opacity-60">{video.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default SubsistenceFarming;