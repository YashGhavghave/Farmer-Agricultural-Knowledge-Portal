import React from 'react'
import { motion } from 'framer-motion'
import { 
  RefreshCcw, Trees, Flame, Recycle, 
  MapPin, AlertCircle, PlayCircle, History 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function ShiftingCultivation() {
  const { isDark } = useTheme()

  const videos = [
    { id: '1A-S8x_WvQk', title: 'Traditional Jhum Cultivation', desc: 'A look at how indigenous communities manage land in hilly regions.' },
    { id: 'uF_Gf9S_2x8', title: 'The Soil Science of Ash', desc: 'Understanding how fire releases nutrients back into the soil ecosystem.' },
    { id: '7Sb0UoghFoE', title: 'Transitioning to Sedentary', desc: 'Modern alternatives to shifting cultivation for forest conservation.' }
  ];

  return (
    <PageTemplate title={'Shifting Cultivation'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. The Rotational Cycle */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <RefreshCcw className="text-orange-600" /> The Cycle of Movement
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Shifting cultivation is an agricultural system where plots of land are cleared (often with fire), cultivated for a few years, and then <b>abandoned</b> to allow natural vegetation to restore soil fertility.
            </p>
            <div className={`p-4 rounded-2xl border-l-4 border-orange-500 ${isDark ? 'bg-orange-500/5' : 'bg-orange-50'}`}>
              <p className="text-sm font-medium italic text-orange-800 dark:text-orange-300">
                "It is a battle against time: the farmer must move before the soil nutrients are exhausted and weeds take over."
              </p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-orange-500/20 bg-white p-4">
            
          </div>
        </section>

        {/* 2. System Characteristics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Input", value: "Zero Chemical", icon: Recycle, color: "text-emerald-500" },
            { label: "Land Ownership", value: "Communal", icon: MapPin, color: "text-blue-500" },
            { label: "Labor", value: "Human-Heavy", icon: History, color: "text-amber-600" },
            { label: "Land Recovery", value: "Fallow Period", icon: Trees, color: "text-green-600" },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. The Traditional Process */}
        <section className={`p-8 rounded-[3rem] ${isDark ? 'bg-slate-900 border border-white/5' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Flame className="text-red-500" /> Operational Stages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Slash & Burn", 
                desc: "Vegetation is cut during the dry season and burned. The ash acts as a natural potash-rich fertilizer." 
              },
              { 
                step: "02", 
                title: "Short-Term Crop", 
                desc: "Crops like dry rice, maize, and millet are sown. No ploughing is used to prevent soil erosion." 
              },
              { 
                step: "03", 
                title: "Fallow (Rest)", 
                desc: "After 2-3 years, the plot is left for 10-20 years. Forest regrowth restores nitrogen and organic matter." 
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black opacity-10 absolute -top-4 -left-2">{item.step}</div>
                <h4 className="font-bold text-lg mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-inner bg-white p-4">
             
          </div>
        </section>

        {/* 4. Critical Environmental Debate */}
        <section>
          <div className={`p-10 rounded-[3rem] border-2 ${isDark ? 'bg-red-500/5 border-red-500/20' : 'bg-red-50 border-red-100'}`}>
            <h3 className="text-2xl font-black text-red-700 mb-6 flex items-center gap-2">
              <AlertCircle /> Sustainability Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider opacity-60">The Conflict</h4>
                <p className="text-sm leading-relaxed">
                  As populations grow, the <b>fallow period</b> is being shortened from 15 years to just 3-5 years. This prevents the forest from regenerating, leading to permanent deforestation and soil infertility.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 text-xs"><b>Carbon:</b> Burning releases stored carbon dioxide into the atmosphere.</li>
                <li className="flex gap-2 text-xs"><b>Erosion:</b> Exposed soil on hillsides is easily washed away by tropical rains.</li>
                <li className="flex gap-2 text-xs"><b>Policy:</b> Many governments are incentivizing farmers to switch to permanent terrace farming.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Video Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Field Observations
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

export default ShiftingCultivation;