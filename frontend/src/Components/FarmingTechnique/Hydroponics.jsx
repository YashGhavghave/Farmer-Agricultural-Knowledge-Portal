import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
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
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-blue-50 p-4 rounded">
        <h4 className="font-semibold text-blue-700 mb-2">Tips:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-cyan-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-cyan-700 mb-2">Strategies:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function Hydroponics() {
  const intro = 'Growing plants in nutrient-rich water without soil - maximum yield with minimal water usage.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Hydroponics?',
      content: 'Hydroponics is a soil-less farming method where plant roots are suspended in nutrient-enriched water. Plants grow 10x faster with 90% less water than traditional farming.'
    },
    {
      title: 'Key Advantages',
      content: '• 10x faster growth rates • 90% water savings • Year-round production • No pesticides needed • Higher yields per square meter • Perfect for urban farming'
    },
    {
      title: 'System Requirements',
      content: 'Basic setup needs: growing medium (rockwool, clay pellets), nutrient solution, pH meter (6.0-7.0), EC meter (1.2-2.0), light source, and water pump.'
    }
  ]

  const intermediate = [
    {
      title: 'NFT (Nutrient Film Technique)',
      content: 'Thin nutrient solution flows along sloped channels. Best for leafy greens. Simple, low maintenance, quick setup.',
      tips: ['Channel angle: 1:15 slope', 'Flow rate: 1-1.5 L/min', 'Plant spacing: 15-20cm apart', 'Ideal for lettuce, basil, herbs']
    },
    {
      title: 'DWC (Deep Water Culture)',
      content: 'Roots suspended directly in aerated nutrient solution. Best for quick crops. High yield, minimal waste.',
      tips: ['Water depth: 15-30cm', 'Air stones critical for oxygen', 'EC: 1.4-1.8', 'Change water every 3 weeks']
    },
    {
      title: 'Nutrient Solution Management',
      content: 'Balanced NPK ratio with micronutrients. Monitor pH, EC, and temperature daily. Different crops need different nutrient profiles.',
      tips: ['Nitrogen: 150-200 ppm', 'Phosphorus: 30-50 ppm', 'Potassium: 100-150 ppm', 'EC testing: Daily minimum']
    }
  ]

  const advanced = [
    {
      title: 'Precision Nutrient Formulation',
      content: 'Use hydroponic calculators to create custom solutions. Vary nutrients by growth stage. Use chelated micronutrients for better availability.',
      strategies: [
        'Vegetative stage: High nitrogen ratio',
        'Flowering stage: Increase phosphorus and potassium',
        'Fruiting stage: Boost potassium for yield',
        'Use foliar feeding with dilute solutions'
      ]
    },
    {
      title: 'Environmental Control Systems',
      content: 'Automate with sensors, controllers, and monitoring systems. Optimize light, temperature (20-28°C), humidity (60-70%), and CO2 levels.',
      strategies: [
        'Automated pH adjustment systems',
        'Temperature control with chillers/heaters',
        'LED grow lights (HPS alternative)',
        'WiFi monitoring and alerts'
      ]
    },
    {
      title: 'Advanced Crop Production',
      content: 'Multi-crop systems, vertical farming integration, and market timing strategies. Produce 6-8 cycles per year.',
      strategies: [
        'Stagger plantings for continuous harvest',
        'Intercrop fast and slow growers',
        'Integrate aquaponics for protein',
        'Use data analytics for yield prediction'
      ]
    }
  ]

  
  

  return (
    <PageTemplate title={'Hydroponics'} >
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
          <h3 className="text-2xl font-bold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✓ Start with leafy greens - lowest risk, highest success rate</li>
            <li>✓ Invest in good pH and EC meters - they pay for themselves</li>
            <li>✓ Keep detailed records of nutrient solutions and schedules</li>
            <li>✓ Join hydroponics communities for troubleshooting support</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Hydroponics;
