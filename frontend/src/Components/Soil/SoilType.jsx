import React, { useState } from 'react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'
import Footer from '../footer'

function SoilType() {
  const intro = 'Understanding soil types - clay, silt, sand, and loam - helps choose crops and management practices.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'Soil Texture Basics',
      content: 'Soil consists of sand (coarse, drains fast), silt (medium, balanced), and clay (fine, holds water). The ratio determines soil type and water-holding capacity.'
    },
    {
      title: 'Five Main Soil Types',
      content: 'Sandy (55% sand), Silt (>50% silt), Clay (40% clay), Loam (balanced mix), Clay loam (35-40% clay). Most productive is silt loam - balanced properties.'
    },
    {
      title: 'Identifying Your Soil Type',
      content: 'Squeeze test: Sandy feels gritty, clay is sticky and forms a ball, loam holds shape loosely. Or get soil test done by lab.'
    }
  ]

  const intermediate = [
    {
      title: 'Sandy Soils',
      content: 'Drains too fast, loses nutrients, low water-holding capacity. Crops: groundnut, watermelon. Amendment: add organic matter to improve water retention.',
      tips: ['Water holding: 6-10%', 'Easy to work but nutrient loss', 'Needs frequent watering', 'Add 5+ tons compost/ha', 'Use slow-release fertilizers', 'Mulching essential']
    },
    {
      title: 'Clay Soils',
      content: 'Poor drainage, compacts easily, difficult to work. Crops: rice, chickpea. Amendment: add organic matter and sand to improve drainage.',
      tips: ['Water holding: 30-50%', 'Waterlogging risk', 'Hard when dry, sticky when wet', 'Add gypsum for dispersion', 'Deep ploughing in summer', 'Avoid compaction']
    },
    {
      title: 'Loam Soils',
      content: 'Perfect balance - good drainage and water-holding capacity. Most fertile. Crops: any crop performs well. Amendment: maintain with organic matter.',
      tips: ['Water holding: 15-25%', 'Ideal for most crops', 'Balanced nutrients', 'Maintain 2-3% organic matter', 'Rotate crops annually', 'Minimal amendment needed']
    }
  ]

  const advanced = [
    {
      title: 'Soil Structure Improvement',
      content: 'Aggregate stability (soil crumbs) more important than texture. Organic matter builds stable aggregates. Use compost, manure, crop residues.',
      strategies: [
        'Stable aggregates improve aeration',
        'Water infiltration 2-3x better',
        'Earthworms create macropores',
        'Microbial glues bind soil particles'
      ]
    },
    {
      title: 'Crop-Soil Matching',
      content: 'Match crops to soil type for best results. Deep-rooted crops for sandy, shallow-rooted for clay, anything for loam.',
      strategies: [
        'Sandy: Groundnut, watermelon, millet',
        'Clay: Rice, chickpea, sugarcane',
        'Loam: Wheat, maize, cotton',
        'Silt loam: All crops perform best'
      ]
    },
    {
      title: 'Advanced Soil Testing & Remediation',
      content: 'Beyond NPK, analyze soil biology, water stability, and porosity. Customize management for specific soil properties.',
      strategies: [
        'Microbial biomass testing',
        'Enzymatic activity for health',
        'Aggregate stability tests',
        'Hydraulic conductivity measurement'
      ]
    }
  ]

  const TabButton = ({ label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all ${
        activeTab === value
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  )

  const ContentCard = ({ title, content, tips, strategies }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500">
      <h3 className="text-2xl font-bold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-700 mb-2">💡 Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className="bg-cyan-50 p-4 rounded mt-3">
          <h4 className="font-semibold text-cyan-700 mb-2">🎯 Advanced Strategies:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <Navbar />
      <PageTemplate title={'Soil Types'} >
        <div className="space-y-8">
          <div className="flex gap-4 flex-wrap">
            <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton label="Intermediate" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="mt-6">
            {activeTab === 'basics' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Beginner Level</h2>
                {basics.map((item, idx) => <ContentCard key={idx} {...item} />)}
              </div>
            )}

            {activeTab === 'intermediate' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intermediate Level</h2>
                {intermediate.map((item, idx) => <ContentCard key={idx} {...item} />)}
              </div>
            )}

            {activeTab === 'advanced' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Level</h2>
                {advanced.map((item, idx) => <ContentCard key={idx} {...item} />)}
              </div>
            )}
          </div>

          <div className="bg-linear-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">🌾 Soil Type Benefits & Challenges</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-3 text-left font-bold">Type</th>
                    <th className="p-3 text-left">Water Holding</th>
                    <th className="p-3 text-left">Best For</th>
                    <th className="p-3 text-left">Main Issue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Sandy</td>
                    <td>Low (6-10%)</td>
                    <td>Groundnut, Millet</td>
                    <td>Loses nutrients & water</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Clay</td>
                    <td>High (30-50%)</td>
                    <td>Rice, Chickpea</td>
                    <td>Poor drainage, hard work</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Loam</td>
                    <td>Medium (15-25%)</td>
                    <td>All crops</td>
                    <td>None - ideal soil</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilType
