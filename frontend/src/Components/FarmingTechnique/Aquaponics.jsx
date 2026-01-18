import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-purple-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-purple-500">
    <h3 className="text-2xl font-bold text-purple-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-purple-50 p-4 rounded">
        <h4 className="font-semibold text-purple-700 mb-2">Tips:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-pink-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-pink-700 mb-2">Strategies:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function Aquaponics() {
  const intro = 'Sustainable integration of fish farming and hydroponics - produce both protein and vegetables in one system.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Aquaponics?',
      content: 'Aquaponics combines fish farming (aquaculture) with plant cultivation (hydroponics). Fish waste provides nitrogen for plants, and plants filter water for fish. A complete ecosystem.'
    },
    {
      title: 'Key Components',
      content: 'Fish tank (biofilter and nutrient source) → Growing bed (plants filter water) → Biofilter (beneficial bacteria) → Back to fish tank. Creates a closed-loop system.'
    },
    {
      title: 'Main Advantages',
      content: '• Two harvests in one system • Minimal water loss • No chemical fertilizers • Sustainable protein source • Natural pest control • 70% less water than soil farming'
    }
  ]

  const intermediate = [
    {
      title: 'Fish Selection & Management',
      content: 'Choose hardy, warm-water fish. Tilapia (most common), catfish, or carp. Maintain water temperature 25-27°C. Stock 30-50kg fish per 1000L water.',
      tips: ['Tilapia: Best for beginners, hardy, 6-8 month cycle', 'Feed fish 1-2% of body weight daily', 'Monitor ammonia: < 2 ppm', 'Aeration crucial for fish health']
    },
    {
      title: 'Plant Selection & Growing Media',
      content: 'Leafy greens grow fastest (30 days). Use expanded clay, gravel, or coconut coir. Different media suit different fish-load ratios.',
      tips: ['Fast crops: Lettuce, basil, spinach (30 days)', 'Medium crops: Tomatoes, peppers (60 days)', 'Clay media ratio: 60% media, 40% water', 'Change 10-20% water monthly']
    },
    {
      title: 'Biological Balance',
      content: 'Ammonia (fish waste) → Nitrite (Nitrosomonas bacteria) → Nitrate (Nitrobacter bacteria). This cycle feeds plants. Maintain 3 ppm ammonia minimum.',
      tips: ['Cycling takes 4-6 weeks before planting', 'Test ammonia, nitrite, nitrate weekly', 'pH: 6.8-7.0 for bacterial activity', 'Biofilm development in pipes is good']
    }
  ]

  const advanced = [
    {
      title: 'System Optimization & Scaling',
      content: 'Multi-tank systems, redundancy planning, and automated monitoring. Scale from 100L (hobby) to 10,000L (commercial).',
      strategies: [
        'NFT or DWC for faster plant cycles',
        'Multiple fish tanks for continuous harvest',
        'Backup aeration and power systems',
        'Target 1:1 to 1:2 fish:plant bed ratio'
      ]
    },
    {
      title: 'Advanced Water Chemistry',
      content: 'Fine-tune NPK levels for specific crops. Supplement missing nutrients. Monitor salinity and adjust feeding rates based on bioload.',
      strategies: [
        'Potassium supplementation (often needed)',
        'Iron chelate for dark leafy greens',
        'Phosphorus adjustment based on tests',
        'pH buffering with baking soda'
      ]
    },
    {
      title: 'Commercial Production',
      content: 'Integrated system management for profit. Sell both fish and vegetables. Market premium organic produce and high-value fish.',
      strategies: [
        'Target 40-50kg fish per 1000L',
        'Rotate 3-4 plant cycles per year',
        '20-25% ROI possible within 2 years',
        'Direct-to-consumer marketing doubles margin'
      ]
    }
  ]

  

  return (
    <PageTemplate title={'Aquaponics'} >
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

        <div className="bg-linear-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">🌱 Getting Started</h3>
          <ol className="text-gray-700 space-y-2 list-decimal list-inside">
            <li>Start with 500-1000L system for learning</li>
            <li>Cycle system for 4-6 weeks before adding plants</li>
            <li>Stock with hardy fish first (tilapia recommended)</li>
            <li>Plant fast-growing crops (lettuce, basil)</li>
            <li>Monitor water parameters obsessively for first month</li>
            <li>Scale up once you understand the system</li>
          </ol>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Aquaponics;

// export default Aquaponics
