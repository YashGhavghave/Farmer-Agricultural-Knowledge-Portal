import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-red-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-red-500">
    <h3 className="text-2xl font-bold text-red-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-red-50 p-4 rounded">
        <h4 className="font-semibold text-red-700 mb-2">Tips:</h4>
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

function VerticalFarming() {
  const intro = 'Growing crops in vertically-stacked layers using controlled environments - maximum yield in minimum space, perfect for urban areas.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Vertical Farming?',
      content: 'Stacking plants in vertical layers with controlled light, temperature, and nutrients. Produce 300-400 times more per square meter than traditional farming.'
    },
    {
      title: 'System Structure',
      content: 'LED grow lights, hydroponic systems, climate control, water recirculation, and automation. Each layer gets precisely controlled conditions.'
    },
    {
      title: 'Key Advantages',
      content: '• 300-400x yield per sq meter • 95% less water • Year-round production • No pesticides (controlled environment) • Urban-based • Crops ready in weeks'
    }
  ]

  const intermediate = [
    {
      title: 'Tower & Channel Systems',
      content: 'Grow towers stack plants vertically with irrigation flowing down. Each tower holds 50-100 plants in 4-5 sq ft footprint.',
      tips: ['Tower height: 4-6 feet typically', 'Plants per tower: 50-100', 'Yield: 1-2kg per month per sq meter', 'Best for: Leafy greens, herbs, strawberries']
    },
    {
      title: 'LED Grow Lights',
      content: 'Energy-efficient lighting reduces heat. Red (660nm) and blue (450nm) LEDs optimize photosynthesis. Layer spacing: 30-45cm.',
      tips: ['LED consumption: 30-50 W/sq meter', '16 hours light / 8 hours dark cycle', 'Blue light for vegetative growth', 'Red light for flowering and fruiting']
    },
    {
      title: 'Climate Control Essentials',
      content: 'Temperature 18-24°C, Humidity 50-70%, CO2 levels 400-1000ppm. Ventilation and air circulation critical for disease prevention.',
      tips: ['HVAC for temperature control', 'Dehumidifiers if needed', 'Air circulation fans every layer', 'CO2 enrichment increases yield 20-30%']
    }
  ]

  const advanced = [
    {
      title: 'Automation & IoT Integration',
      content: 'Sensors monitor environment continuously. Automated controls adjust lights, irrigation, nutrients. Reduces labor by 80%.',
      strategies: [
        'pH, EC, light, temperature sensors',
        'Automated nutrient delivery systems',
        'Cloud monitoring and alerts',
        'Integration with farm management software'
      ]
    },
    {
      title: 'Multi-Crop Scheduling',
      content: 'Stagger plantings for continuous harvest. Different crops at different maturity stages in different towers.',
      strategies: [
        'Leafy greens: 30-day cycle (8 harvests/year)',
        'Herbs: 20-day cycle (18 harvests/year)',
        'Strawberries: Continuous production',
        'Crop planning software essential'
      ]
    },
    {
      title: 'Economic Optimization',
      content: 'Capital intensive (₹50-100 lakhs per 1000 sq ft), but ROI in 3-5 years. High-value crops maximize profit.',
      strategies: [
        'Target premium market (organic, local)',
        'Microgreens and specialty herbs (10x margin)',
        '₹500-1000/kg retail pricing possible',
        'Direct-to-consumer sales reduce costs 30%'
      ]
    }
  ]

  

  return (
    <PageTemplate title={'Vertical Farming'} >
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

        <div className="bg-linear-to-r from-red-50 to-pink-50 p-8 rounded-lg border border-red-200">
          <h3 className="text-2xl font-bold text-red-800 mb-4">🏆 Best Crops for Vertical Farms</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold text-green-700">🟢 Best ROI:</p>
              <ul className="list-disc list-inside">
                <li>Microgreens (₹1000-2000/kg)</li>
                <li>Specialty herbs (₹800-1200/kg)</li>
                <li>Premium lettuce (₹300-500/kg)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-green-700">🟡 Good Crops:</p>
              <ul className="list-disc list-inside">
                <li>Leafy greens</li>
                <li>Strawberries</li>
                <li>Peppers (high value)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default VerticalFarming;

// export default VerticalFarming
