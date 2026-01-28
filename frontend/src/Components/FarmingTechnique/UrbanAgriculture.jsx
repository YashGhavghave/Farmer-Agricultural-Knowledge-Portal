import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, Leaf, Droplets, LayoutGrid, 
  MapPin, Wind, ThermometerSun, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function UrbanAgriculture() {
  const { isDark } = useTheme()

  const videos = [
    { id: '2n78yS46Xoc', title: 'Vertical Farming Technology', desc: 'How indoor farms use LED lighting and climate control to grow food.' },
    { id: 'jV9C7ndL3vU', title: 'Rooftop Garden Engineering', desc: 'Managing weight loads and irrigation on urban structures.' },
    { id: 'T6_0V6_f3U8', title: 'Community Gardening Models', desc: 'Social and ecological benefits of shared urban green spaces.' }
  ];

  return (
    <PageTemplate title={'Urban Agriculture'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. The Urban Pivot */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Building2 className="text-blue-500" /> Feeding the Concrete Jungle
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Urban agriculture is the practice of cultivating, processing, and distributing food within or around <b>metropolitan areas</b>. It turns "non-arable" city zones into highly productive nutrient hubs.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-blue-500 ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
              <p className="text-sm font-medium italic text-blue-800 dark:text-blue-300">
                "It’s about shortening the distance between the farm and the fork. In an urban farm, food travels meters, not miles."
              </p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-500/20 bg-white p-4">
            
          </div>
        </section>

        {/* 2. Key Urban Modalities */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Growth Vector", value: "Vertical", icon: LayoutGrid, color: "text-blue-500" },
            { label: "Medium", value: "Soilless", icon: Droplets, color: "text-cyan-500" },
            { label: "Climate", value: "Controlled", icon: ThermometerSun, color: "text-orange-500" },
            { label: "Community", value: "Localized", icon: MapPin, color: "text-emerald-500" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Core Technologies */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Hydroponics", 
              desc: "Growing plants in nutrient-rich water solutions without soil. Ideal for rooftops and balconies.",
              icon: Droplets 
            },
            { 
              title: "Vertical Stacking", 
              desc: "Using modular layers to maximize yield per square foot. Often uses LED arrays to mimic sunlight.",
              icon: LayoutGrid 
            },
            { 
              title: "Micro-Climates", 
              desc: "Utilizing city heat islands and wind breaks to grow crops that might not survive in open country.",
              icon: Wind 
            }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-[3rem] border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
              <item.icon className="text-blue-500 mb-4" size={32} />
              <h4 className="text-xl font-black mb-2">{item.title}</h4>
              <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* 4. Spatial Efficiency Matrix */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Urban Space Utilization</h3>
          
          <div className={`overflow-x-auto rounded-3xl border mt-6 ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Urban Zone</th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">System Choice</th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">Primary Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rooftops", "Greenhouse / Open Beds", "Maximum sunlight exposure"],
                  ["Basements", "LED Vertical Racks", "Year-round climate control"],
                  ["Balconies", "Tower Gardens", "High accessibility for households"],
                  ["Vacant Lots", "Raised Beds / Containers", "Soil contamination prevention"]
                ].map(([zone, system, advantage], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0 hover:bg-blue-500/5 transition-colors">
                    <td className="p-4 font-semibold">{zone}</td>
                    <td className="p-4 opacity-80">{system}</td>
                    <td className="p-4 text-emerald-600 font-medium text-sm">{advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Video Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Urban Farm Tours
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
                <p className="text-xs opacity-60 leading-tight">{video.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default UrbanAgriculture;