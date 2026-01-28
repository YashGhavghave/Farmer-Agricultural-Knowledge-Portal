import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sprout, Recycle, Bug, 
  Beaker, TrendingUp, Info, 
  CheckCircle2, PlayCircle 
} from 'lucide-react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/organic.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-emerald-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-emerald-50 hover:shadow-md transition-shadow"
  >
    <h3 className="text-2xl font-black text-emerald-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-wrap">{content}</p>
    
    {tips && (
      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
        <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
          <CheckCircle2 size={18} /> Application Tips:
        </h4>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          {tips.map((tip, idx) => <li key={idx} className="flex items-start gap-2"><span>•</span> {tip}</li>)}
        </ul>
      </div>
    )}
    
    {strategies && (
      <div className="mt-4 bg-lime-50 p-6 rounded-2xl border border-lime-100">
        <h4 className="font-bold text-lime-700 mb-3 flex items-center gap-2">
          <TrendingUp size={18} /> Yield Strategy:
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-lime-500" /> {strategy}
          </li>)}
        </ul>
      </div>
    )}
  </motion.div>
)

function FertilizersOrganic() {
  const [activeTab, setActiveTab] = useState('basics')

  const videos = [
    { id: 'vA6z08I20-A', title: 'Setting up a Vermicompost Pit', desc: 'Bed preparation and moisture management for earthworms.' },
    { id: 'h7T9cO6S_yU', title: 'Biofertilizer Seed Treatment', desc: 'How to coat seeds with Rhizobium culture before sowing.' }
  ];

  return (
    <PageTemplate title="Organic Fertilizers" hero={hero}>
      <div className="max-w-6xl mx-auto space-y-12 pb-20">
        
        {/* Navigation */}
        <div className="flex gap-4 flex-wrap border-b border-gray-100 pb-6">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} icon={Info} />
          <TabButton label="Manures" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} icon={Recycle} />
          <TabButton label="Bio-Tech" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} icon={Beaker} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'basics' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-gray-900 flex items-center gap-3">
                    <Sprout className="text-emerald-600" /> Soil Regeneration
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    "Feeding the soil allows the soil to feed the plant. Organic matter acts as a reservoir of nutrients and a home for beneficial biology."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[3rem] shadow-xl border border-emerald-50">
                  <h4 className="text-center font-bold text-xs uppercase tracking-widest mb-4 text-emerald-500">The Composting Cycle</h4>
                  
                </div>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-2xl mb-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-4">Biological Nitrogen Fixation</h3>
                  <p className="opacity-80 text-sm leading-relaxed mb-4">
                    Biofertilizers like <b>Rhizobium</b> create a symbiotic relationship with legume roots. They "inhale" nitrogen gas from the air and "exhale" it directly into the plant's root system.
                  </p>
                  
                </div>
              </div>
            )}

            {/* Content Logic */}
            <div className="space-y-4">
               {/* basics.map, intermediate.map, etc based on activeTab */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison Table */}
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
          <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="text-emerald-500" /> Comparison Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wider">
                  <th className="pb-4">Factor</th>
                  <th className="pb-4">Organic</th>
                  <th className="pb-4">Chemical</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-50"><td className="py-4 font-bold">Nutrient Release</td><td>Slow (Safety for roots)</td><td>Fast (Risk of burn)</td></tr>
                <tr className="border-b border-gray-50"><td className="py-4 font-bold">Soil Structure</td><td>Improves porosity</td><td>Can cause compaction</td></tr>
                <tr><td className="py-4 font-bold">Microbial Life</td><td>Boosts populations</td><td>Can inhibit activity</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Video Tutorials */}
        <section className="pt-12">
          <h2 className="text-3xl font-black text-center mb-10 flex items-center justify-center gap-3">
            <PlayCircle className="text-emerald-500" /> Practical Demonstrations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <div className="aspect-video relative bg-black">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} frameBorder="0" allowFullScreen />
                </div>
                <div className="p-5">
                  <h5 className="font-bold text-gray-800 group-hover:text-emerald-600">{video.title}</h5>
                  <p className="text-xs text-gray-400 mt-1">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </PageTemplate>
  )
}

export default FertilizersOrganic;