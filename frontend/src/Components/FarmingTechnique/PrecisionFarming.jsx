import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-orange-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-orange-500">
    <h3 className="text-2xl font-bold text-orange-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-orange-50 p-4 rounded">
        <h4 className="font-semibold text-orange-700 mb-2">Tips:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-amber-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-amber-700 mb-2">Strategies:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function PrecisionFarming() {
  const intro = 'Data-driven farming using GPS, sensors, and analytics to optimize inputs and maximize yields with minimal waste.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Precision Farming?',
      content: 'Precision farming uses technology to apply inputs (water, fertilizer, pesticides) only where needed. Same as traditional farming but smarter - targeted, efficient, profitable.'
    },
    {
      title: 'Key Technologies',
      content: 'GPS-guided tractors, soil sensors, weather stations, drones, satellite imagery, and analytics software. Collect data → Analyze → Act → Optimize.'
    },
    {
      title: 'Main Benefits',
      content: '• 15-20% water savings • 10-15% fertilizer reduction • 20-30% yield increase • Lower pesticide use • Reduced environmental impact • Data-driven decisions'
    }
  ]

  const intermediate = [
    {
      title: 'GPS-Guided Equipment',
      content: 'Automated tractors with centimeter-level accuracy. Reduce overlaps, skip missed areas, and improve efficiency. RTK-GPS for ±2cm accuracy.',
      tips: ['RTK-GPS enables auto-steering', 'Variable rate application maps', 'Reduces overlapping by 5-10%', 'Payback in 3-4 seasons']
    },
    {
      title: 'Soil Sensing & Mapping',
      content: 'EC (electrical conductivity) sensors measure soil properties. Create variable maps for targeted inputs. Different zones get different treatments.',
      tips: ['Conduct soil sampling grid: 20m×20m', 'Map nitrogen, pH, organic matter', 'Create variable application zones', 'Update maps every 2-3 years']
    },
    {
      title: 'Remote Sensing with Drones',
      content: 'Aerial imagery reveals crop health, pest damage, and irrigation issues before visible to ground level. Multispectral and thermal cameras.',
      tips: ['NDVI (vegetation index) identifies stress zones', 'Thermal imaging for irrigation needs', 'Early pest/disease detection', 'Monitor 500+ hectares per flight']
    }
  ]

  const advanced = [
    {
      title: 'Integrated Data Analytics',
      content: 'Combine soil data, weather, crop models, and yield history. AI predicts optimal planting times, varieties, and input rates.',
      strategies: [
        'Machine learning for yield prediction',
        'Weather-integrated advisory systems',
        'Crop modeling for variety selection',
        'Real-time field monitoring dashboards'
      ]
    },
    {
      title: 'IoT Sensors & Smart Irrigation',
      content: 'Network of soil moisture, temperature, and weather sensors. Automated irrigation triggers based on actual soil conditions, not fixed schedules.',
      strategies: [
        'Soil moisture sensors at 3 depths',
        'Automated irrigation scheduling',
        'Fertilizer fertigation optimization',
        ' 40-50% water reduction possible'
      ]
    },
    {
      title: 'Variable Rate Application',
      content: 'Apply different amounts of inputs to different field zones based on maps. Deliver exact nutrients where needed, nowhere else.',
      strategies: [
        'Variable nitrogen application by zone',
        'Variable seeding rate maps',
        'Targeted pesticide application',
        '20-30% cost reduction possible'
      ]
    }
  ]

  

  return (
    <PageTemplate title={'Precision Farming'} >
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

        <div className="bg-linear-to-r from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-200">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">🎯 ROI Timeline</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Year 1:</strong> Technology investment (~₹15-30 lakhs), break-even on equipment</p>
            <p><strong>Year 2:</strong> 15-20% yield increase starts showing ROI</p>
            <p><strong>Year 3+:</strong> 25-30% cumulative savings and higher yields</p>
            <p className="mt-4 font-semibold text-green-700">💰 Potential: ₹2-3 lakhs additional profit per 100 hectares annually</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default PrecisionFarming;

// export default PrecisionFarming
