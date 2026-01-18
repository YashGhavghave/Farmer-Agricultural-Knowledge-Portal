import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-green-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-green-500">
    <h3 className="text-2xl font-bold text-green-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-green-50 p-4 rounded">
        <h4 className="font-semibold text-green-700 mb-2">Tips:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-lime-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-lime-700 mb-2">Strategies:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function IntensiveFarming() {
  const intro = 'High-input, high-yield farming maximizing production per unit area through intensive management and inputs.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Intensive Farming?',
      content: 'Maximizing crop production by increasing inputs (labor, fertilizer, pesticides) on a given land area. Goal: highest possible yield per hectare.'
    },
    {
      title: 'Key Characteristics',
      content: '• Multiple crops per year (2-3 cycles) • High fertilizer use • Chemical pest management • Improved varieties • Controlled water supply • Heavy mechanization'
    },
    {
      title: 'Main Objectives',
      content: 'Maximize yields, reduce fallow periods, continuous production, efficient land use, and higher farm income from limited land area.'
    }
  ]

  const intermediate = [
    {
      title: 'Crop Intensification Strategies',
      content: 'Use high-yielding varieties, reduce spacing, multi-crop systems. Example: Wheat → Summer vegetables → Pulses cycle year-round.',
      tips: ['Spacing 15-20% less than recommended', 'Use hybrid and high-yielding varieties', 'Staggered planting for continuous harvest', 'Monoculture or intercropping based on market']
    },
    {
      title: 'Nutrient Management',
      content: 'Heavy nutrient demand requires large doses of fertilizers. Regular soil testing and split applications crucial. NPK ratios vary by crop.',
      tips: ['Nitrogen: 120-150 kg/ha for cereals', 'Phosphorus: 60-80 kg/ha', 'Potassium: 40-60 kg/ha', 'Micronutrients based on soil test']
    },
    {
      title: 'Pest & Disease Management',
      content: 'Intensive cropping increases pest pressure. Chemical pesticides, regular scouting, and preventive sprays essential.',
      tips: ['Scout fields 2-3 times per week', 'Economic threshold concept critical', 'Rotation of chemicals prevents resistance', 'Timing of spray crucial for effectiveness']
    }
  ]

  const advanced = [
    {
      title: 'Multi-Crop Rotation Planning',
      content: 'Design year-round cropping pattern for maximum productivity. Kharif (monsoon) → Rabi (winter) → Summer crops utilizing same land.',
      strategies: [
        'Kharif (June-Oct): Rice, maize, cotton',
        'Rabi (Oct-Mar): Wheat, chickpea, mustard',
        'Summer (Mar-Jun): Vegetables, groundnut',
        'Each sequence respects crop nutrition needs'
      ]
    },
    {
      title: 'Precision Input Management',
      content: 'Variable rate nutrient application, drip irrigation, and soil-specific management. Reduce waste while maintaining high yields.',
      strategies: [
        'Soil testing every 18-24 months',
        'Nutrient timing based on crop stage',
        'Drip irrigation saves 30-40% water',
        'Use of soil moisture sensors'
      ]
    },
    {
      title: 'Economic Optimization',
      content: 'High inputs require high yields to be profitable. Market understanding and contract farming crucial. Direct selling increases margins.',
      strategies: [
        'Target 4-6 tons/ha rice yield',
        'Target 40-50 tons/ha vegetables',
        'Contract farming reduces risk',
        'Cooperative marketing improves pricing'
      ]
    }
  ]

  

  return (
    <PageTemplate title={'Intensive Farming'} >
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

        <div className="bg-linear-to-r from-green-50 to-lime-50 p-8 rounded-lg border border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4">⚠️ Important Considerations</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Risk:</strong> High inputs mean high risk if yields don't meet targets</li>
            <li>• <strong>Sustainability:</strong> Can deplete soil if not managed with organic matter additions</li>
            <li>• <strong>Investment:</strong> Requires capital for seeds, fertilizers, pesticides, machinery</li>
            <li>• <strong>Market:</strong> Ensure market exists for higher production volumes</li>
            <li>• <strong>Soil Health:</strong> Regular organic matter additions critical for long-term viability</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}

export default IntensiveFarming;

// export default IntensiveFarming
