import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

function WaterHarvesting() {
  const intro = 'Water harvesting techniques - capture and store rainwater for supplemental irrigation, ensuring farm resilience during dry periods.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'Why Water Harvesting?',
      content: 'Many regions face seasonal water scarcity. Harvesting and storing rain during wet season provides water for dry season. Critical for dryland farming.'
    },
    {
      title: 'Basic Principle',
      content: 'Capture: Collect rainfall from fields or roofs → Storage: Store in tanks or ponds → Use: Supplemental irrigation during dry season.'
    },
    {
      title: 'Benefits',
      content: '• Reduce dependence on groundwater • Lower water table decline • Ensure irrigation in dry periods • Recharge aquifers • Cost-effective long-term'
    }
  ]

  const intermediate = [
    {
      title: 'Farm Ponds',
      content: 'Excavated reservoirs collecting runoff from fields. Most common method. 100m×100m×2m pond stores 20,000 cubic meters water.',
      tips: ['Capacity calculation: Area × depth', '100m×100m×2m = 20,000 cu.m = 200 acre-feet', 'Evaporation loss: 1-2 cu.m/day in summer', 'Lining: Plastic or bentonite recommended', 'Cost: ₹50000-200000 depending on size', 'Depth: 2-3m optimal for storage']
    },
    {
      title: 'Check Dams & Tanks',
      content: 'Small structures slowing runoff and increasing infiltration. Series across slopes. Recharge groundwater significantly.',
      tips: ['Check dams: Cost ₹500-2000 each', 'Stone/concrete construction', 'Spacing: Every 50-100m on slopes', 'Life: 10-20 years with maintenance', 'Recharge effect: Extends 200-300m upstream', 'Can raise water table 2-3 meters']
    },
    {
      title: 'Rooftop Harvesting',
      content: 'Collect rainfall from house/shed roofs. Suitable for small farms and homesteads. Can provide 10,000-20,000 liters annually.',
      tips: ['Collection surface: 100 sq.m roof = 1 lakh liters at 1000mm rain', 'Cost: ₹30000-50000 for full system', 'Tank size: 25,000-50,000 liters', 'Gutters and filters essential', 'Stores 6-8 months water for household', 'Can supplement micro-irrigation']
    }
  ]

  const advanced = [
    {
      title: 'Integrated Water Management',
      content: 'Combine multiple harvesting techniques. Rooftop + farm pond + check dams = comprehensive water security.',
      strategies: [
        'Roof water → Household use + subsurface tank',
        'Field runoff → Farm pond via check dams',
        'Pond water → Micro-irrigation system',
        'Monitor water table rise with bore wells',
        'Plan 3-year storage for severe droughts'
      ]
    },
    {
      title: 'Groundwater Recharge',
      content: 'Direct harvested water into aquifers through percolation tanks and shallow wells. Sustainable long-term solution.',
      strategies: [
        'Percolation tanks: 10×10×3m, cost ₹20000-40000',
        'Recharge bore wells: Cost ₹50000-100000',
        'Improve water table 5-10 meters in 3-5 years',
        'Benefits entire village/block',
        'Government subsidies often available'
      ]
    },
    {
      title: 'Climate-Smart Water Harvesting',
      content: 'Use weather forecasts, soil moisture, and water storage data to optimize irrigation scheduling. Data-driven approach.',
      strategies: [
        'Monitor rainfall and evaporation',
        'Predict dry period lengths',
        'Schedule irrigations based on stored water',
        'App-based water balance calculation',
        'Reduce waste to <10% of stored water'
      ]
    }
  ]

  const TabButton = ({ label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all ${
        activeTab === value
          ? 'bg-sky-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  )

  const ContentCard = ({ title, content, tips, strategies }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-sky-500">
      <h3 className="text-2xl font-bold text-sky-700 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className="bg-sky-50 p-4 rounded">
          <h4 className="font-semibold text-sky-700 mb-2">💧 Key Details:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className="bg-blue-50 p-4 rounded mt-3">
          <h4 className="font-semibold text-blue-700 mb-2">🌊 Integration Strategy:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <PageTemplate title="Water Harvesting" hero={irrigation} intro={intro}>
        <div className="space-y-8">
          <div className="flex gap-4 flex-wrap">
            <TabButton label="Basics" value="basics" />
            <TabButton label="Intermediate" value="intermediate" />
            <TabButton label="Advanced" value="advanced" />
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

          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-lg border border-sky-200">
            <h3 className="text-2xl font-bold text-sky-800 mb-4">📊 Water Harvesting Potential</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Example: 100 hectare farm in 750mm rainfall region</strong></p>
              <div className="bg-white p-4 rounded">
                <p>• Farm pond (20,000 cu.m): Stores 75 days water supply for 50 hectares</p>
                <p>• Check dams (20 dams × 500 cu.m): Additional 10,000 cu.m storage</p>
                <p>• Groundwater recharge: Raise water table 3-5 meters in 5 years</p>
                <p>• Total investment: ₹400000-600000</p>
                <p>• Benefit: ₹200000-300000/year in irrigation savings + groundwater security</p>
                <p className="font-semibold text-green-700 mt-2">✓ Payback: 2-3 years + long-term sustainability</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">🏗️ Construction Tips</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li><strong>Location:</strong> Choose lowest point to catch maximum runoff</li>
              <li><strong>Permeability Test:</strong> Dig pit, fill with water - check water table level after 24hrs</li>
              <li><strong>Lining:</strong> Use 300 micron plastic or bentonite if soil is permeable</li>
              <li><strong>Silt removal:</strong> Leave 0.5m at bottom, remove silt every 3-5 years</li>
              <li><strong>Spillway:</strong> Design for 1000-year flood, prevents overflow damage</li>
              <li><strong>Fencing:</strong> Prevent cattle/wildlife contamination</li>
            </ul>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default WaterHarvesting
