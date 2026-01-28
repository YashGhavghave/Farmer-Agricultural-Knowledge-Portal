import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, Truck, Factory, BarChart3, 
  Globe, Package, ShieldCheck, DollarSign 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function CommercialFarming() {
  const { isDark } = useTheme()

  const videos = [
    { id: 'h7T9cO6S_yU', title: 'Commercial Farming Operations', desc: 'Overview of large-scale mechanization and yield management.' },
    { id: '097Y861mE70', title: 'Agricultural Supply Chain', desc: 'How produce moves from massive farms to global markets.' },
    { id: 'vA6z08I20-A', title: 'Smart Ag-Tech in Commerce', desc: 'Using data analytics to maximize profit margins.' }
  ];

  return (
    <PageTemplate title={'Commercial Farming'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Business Definition */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <TrendingUp className="text-emerald-500" /> Market-Oriented Production
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Commercial farming is the large-scale production of crops and livestock for <b>sale in markets</b> rather than personal consumption. It is characterized by high capital investment, heavy use of technology, and a focus on "yield per hectare" optimization.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-blue-500 ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
              <p className="text-sm font-medium italic">"Success in commercial farming is measured by Return on Investment (ROI) and supply chain efficiency."</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-500/20">
            
          </div>
        </section>

        {/* 2. Key Commercial Pillar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Capital", value: "High Investment", icon: DollarSign, color: "text-green-500" },
            { label: "Labor", value: "Mechanized", icon: Factory, color: "text-blue-500" },
            { label: "Market", value: "Global/Export", icon: Globe, color: "text-purple-500" },
            { label: "Scale", value: "Monoculture", icon: Package, color: "text-orange-500" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Operational Strategy */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart3 className="text-emerald-500" /> The Commercial Supply Chain
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { 
                title: "Extensive Farming", 
                text: "Large land areas with lower input per unit area. Common in grain production like wheat and corn.",
                icon: Truck 
              },
              { 
                title: "Intensive Farming", 
                text: "Maximizing yield on smaller plots with high fertilizers and labor. Common in dairy and fruit farming.",
                icon: ShieldCheck 
              },
              { 
                title: "Plantation", 
                text: "Focused on a single cash crop (Tea, Coffee, Rubber) for international export markets.",
                icon: Package 
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

        {/* 4. Technical Comparison Table */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Commercial vs. Subsistence</h3>
          <div className={`overflow-x-auto rounded-3xl border ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <th className="p-4 font-bold border-b border-inherit">Feature</th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">Commercial</th>
                  <th className="p-4 font-bold border-b border-inherit text-orange-500">Subsistence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Goal", "Profit & Export", "Family Survival"],
                  ["Land Size", "Massive (Hectares)", "Small (Acres)"],
                  ["Technology", "Heavy Machinery/AI", "Manual Tools/Draft Animals"],
                  ["Crop Type", "Cash Crops (Monoculture)", "Food Crops (Diverse)"]
                ].map(([feature, comm, subs], i) => (
                  <tr key={i} className="border-b border-inherit last:border-0">
                    <td className="p-4 font-semibold">{feature}</td>
                    <td className="p-4 opacity-80">{comm}</td>
                    <td className="p-4 opacity-80">{subs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Video Gallery (Corrected Iframe Logic) */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center">Industry Learning</h2>
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
                  className="text-[10px] text-blue-500 font-bold hover:underline"
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

export default CommercialFarming;