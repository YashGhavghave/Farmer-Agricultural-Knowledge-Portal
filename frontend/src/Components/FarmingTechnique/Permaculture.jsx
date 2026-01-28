import React from 'react'
import { motion } from 'framer-motion'
import { 
  Infinity, Leaf, Home, ShieldCheck, 
  Waves, Target, Compass, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import { useTheme } from '../../Context/ThemeContext'

function Permaculture() {
  const { isDark } = useTheme()

  const videos = [
    { id: 'T6_0V6_f3U8', title: 'Permaculture Design Principles', desc: 'Understanding the 12 core principles that guide sustainable design.' },
    { id: 'QBLKuYBe5L4', title: 'The Permaculture Zone System', desc: 'How to organize your land based on the frequency of human intervention.' },
    { id: '6S6V9u5S2O8', title: 'Creating Plant Guilds', desc: 'Designing groups of plants that support and protect each other.' }
  ];

  return (
    <PageTemplate title={'Permaculture'}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        
        {/* 1. Philosophy & Ethics */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Infinity className="text-emerald-600" /> Permanent Agriculture
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Permaculture is a design system for creating <b>sustainable human habitats</b> by simulating or directly utilizing the patterns and resilient features observed in natural ecosystems. 
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Earth Care", icon: Leaf },
                { label: "People Care", icon: Home },
                { label: "Fair Share", icon: ShieldCheck }
              ].map((ethic, i) => (
                <div key={i} className="text-center">
                  <div className="p-3 rounded-full bg-emerald-500/10 inline-block mb-2">
                    <ethic.icon className="text-emerald-600" size={24} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider">{ethic.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-500/20 bg-white p-4">
            
          </div>
        </section>

        {/* 2. The Zone System */}
        <section className={`p-8 rounded-[3rem] ${isDark ? 'bg-slate-900 border border-white/5' : 'bg-emerald-50/50 border border-emerald-100'}`}>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Compass className="text-emerald-600" /> Zone Analysis
              </h3>
              <p className="opacity-70 leading-relaxed mb-6">
                Design efficiency is achieved by placing elements according to <b>how often you use them</b>.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm"><b>Zone 0:</b> The home (The center of activity).</li>
                <li className="flex gap-3 text-sm"><b>Zone 1:</b> Kitchen garden & herbs (Visited daily).</li>
                <li className="flex gap-3 text-sm"><b>Zone 2:</b> Orchards & poultry (Requires regular check-ins).</li>
                <li className="flex gap-3 text-sm"><b>Zone 5:</b> The Wild (No intervention, only observation).</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
               
            </div>
          </div>
        </section>

        {/* 3. Biological Guilds (The Tech) */}
        <section>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Target className="text-blue-500" /> Functional Interconnection
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
              <h4 className="font-black text-xl mb-4 text-emerald-600 underline decoration-wavy">The Apple Tree Guild</h4>
              <p className="text-sm opacity-80 mb-6">In permaculture, we never plant a tree alone. We plant it with a <b>guild</b> of supporters:</p>
              <ul className="space-y-2 text-xs font-mono">
                <li className="flex justify-between"><span>Nitrogen Fixer:</span> <span className="text-blue-500">Clover/Lupine</span></li>
                <li className="flex justify-between"><span>Accumulator:</span> <span className="text-blue-500">Comfrey</span></li>
                <li className="flex justify-between"><span>Pest Repellent:</span> <span className="text-blue-500">Garlic/Daffodil</span></li>
                <li className="flex justify-between"><span>Pollinator:</span> <span className="text-blue-500">Dill/Fennel</span></li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-4 border-2 border-dashed border-emerald-500/20 rounded-3xl">
              
            </div>
          </div>
        </section>

        {/* 4. Strategic Comparison */}
        <div className={`overflow-x-auto rounded-3xl border ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white shadow-sm'}`}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
                <th className="p-4 font-bold border-b border-inherit">Permaculture Concept</th>
                <th className="p-4 font-bold border-b border-inherit text-emerald-500">Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Swales", "Water harvesting on contour to hydrate landscapes."],
                ["Sheet Mulching", "Building soil without tilling (no-dig)."],
                ["Food Forests", "Multi-layered perennial food production."],
                ["Stacking Functions", "Every element should serve at least 3 purposes."]
              ].map(([concept, app], i) => (
                <tr key={i} className="border-b border-inherit last:border-0">
                  <td className="p-4 font-bold">{concept}</td>
                  <td className="p-4 opacity-70 text-sm">{app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5. Resource Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Design Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className={`p-4 rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
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
                <p className="text-xs opacity-60 mb-3 leading-tight">{video.desc}</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-emerald-600 font-bold hover:underline"
                >
                  WATCH LESSON →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}

export default Permaculture;