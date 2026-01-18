import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-amber-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-amber-500">
    <h3 className="text-2xl font-bold text-amber-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
    {tips && (
      <div className="bg-amber-50 p-4 rounded">
        <h4 className="font-semibold text-amber-700 mb-2">💧 Key Practices:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-yellow-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-yellow-700 mb-2">🌾 Advanced Innovations:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function DrylandFarming() {
  const intro = 'Farming techniques for arid and semi-arid regions - efficient water use and drought-resistant crops.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Dryland Farming?',
      content: 'Farming without irrigation in regions receiving <750mm rainfall annually. Relies on water conservation, crop selection, and soil management.'
    },
    {
      title: 'Key Challenges',
      content: '• Unpredictable rainfall • Low yields • Soil erosion • Crop failure risk • Labor-intensive • Limited crop choices'
    },
    {
      title: 'Success Factors',
      content: 'Water conservation, drought-resistant varieties, organic matter buildup, proper spacing, and crop selection. Every drop of water counts.'
    }
  ]

  const intermediate = [
    {
      title: 'Water Conservation Techniques',
      content: 'Maximize water infiltration and minimize evaporation. Soil mulching, contour farming, and tied ridges reduce water loss.',
      tips: ['Mulching reduces evaporation 30-50%', 'Contour farming reduces runoff', 'Tied ridges create small basins', 'Weed removal saves 20-30% water', 'Summer ploughing improves infiltration']
    },
    {
      title: 'Crop Selection & Spacing',
      content: 'Choose drought-resistant crops: jowar, bajra, gram, pulses. Wider spacing reduces competition for water.',
      tips: ['Jowar: 45×20cm spacing', 'Bajra: 60×10cm spacing', 'Gram: 30×10cm spacing', 'Use certified drought-resistant varieties', 'Avoid thirsty crops like sugarcane']
    },
    {
      title: 'Soil Improvement for Water Retention',
      content: 'Organic matter improves water-holding capacity from 20% to 40%. Use farmyard manure, compost, and crop residues.',
      tips: ['Add 5-10 tons compost/ha annually', 'Grow legumes to fix nitrogen', 'Keep crop residues on field', 'Avoid frequent tilling']
    }
  ]

  const advanced = [
    {
      title: 'Micro-Catchment & Harvesting',
      content: 'Capture and store every drop during rains. Farm ponds, check dams, and soil pits store water for dry periods.',
      strategies: [
        'Half-moons: 5-7m diameter basins',
        'Zai pits: 30cm deep planting pits',
        'Farm ponds: Store for supplemental irrigation',
        'Check dams: Slow runoff and increase infiltration'
      ]
    },
    {
      title: 'Intercropping & Crop Combinations',
      content: 'Combine deep-rooted and shallow-rooted crops. Reduces competition, improves soil, diversifies income.',
      strategies: [
        'Jowar + groundnut: 2:2 ratio',
        'Bajra + pulses: Nitrogen fixation',
        'Tree + crops: Silvopasture system',
        'Early + late varieties: Spread risk'
      ]
    },
    {
      title: 'Modern Dryland Technologies',
      content: 'Drip irrigation with water harvesting, improved varieties, and climate forecasting for decision-making.',
      strategies: [
        'Drip saves 40-60% water',
        'Weather-based advisory systems',
        'Mulching with plastic sheets',
        'Use treated wastewater for non-food crops'
      ]
    }
  ]

  

  return (
    <PageTemplate title={'Dryland Farming'} >
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

        <div className="bg-linear-to-r from-amber-50 to-yellow-50 p-8 rounded-lg border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">🌍 Recommended Dryland Crops</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-semibold text-amber-700 mb-2">Cereals & Pulses:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Jowar (sorghum) - Best yields</li>
                <li>Bajra (pearl millet) - Very hardy</li>
                <li>Maize (rabi) - Good income</li>
                <li>Gram - High value pulse</li>
                <li>Arhar/Tur - Nitrogen fixation</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-amber-700 mb-2">Other Crops:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Groundnut - Oil seed</li>
                <li>Sunflower - Drought hardy</li>
                <li>Barley - Winter crop</li>
                <li>Chickpea - High nutrition</li>
                <li>Tree crops - Long-term income</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default DrylandFarming
