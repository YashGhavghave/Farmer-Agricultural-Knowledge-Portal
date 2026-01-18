import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-semibold rounded-lg transition-all ${
      activeTab === value
        ? 'bg-cyan-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
)

const ContentCard = ({ title, content, tips, strategies }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-cyan-500">
    <h3 className="text-2xl font-bold text-cyan-700 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
    {tips && (
      <div className="bg-cyan-50 p-4 rounded">
        <h4 className="font-semibold text-cyan-700 mb-2">💧 Key Parameters:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-blue-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-blue-700 mb-2">🎯 Advanced Implementation:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function IrrigationMethods() {
  const intro = 'Different irrigation methods from basic to advanced - surface, sprinkler, drip, and subsurface for water-efficient farming.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'Why Irrigation Matters',
      content: 'Irrigation supplements rainfall for crop growth. Choose method based on water availability, crop type, soil, and terrain. Efficiency critical as water becomes scarce.'
    },
    {
      title: 'Main Irrigation Methods',
      content: '1. Flood/Furrow (cheapest, 40-50% efficient) 2. Sprinkler (medium cost, 70-80% efficient) 3. Drip (high cost, 90-95% efficient) 4. Subsurface (high cost, variable)'
    },
    {
      title: 'Choosing Your Method',
      content: 'Consider: water availability, crop type, soil infiltration, terrain, budget, and labor. Sandy soil - drip best. Flat land - flood OK. Limited water - drip essential.'
    }
  ]

  const intermediate = [
    {
      title: 'Surface/Flood Irrigation',
      content: 'Water flows across field surface. Cheapest method. Best for rice, wheat, sugarcane. Problem: uneven coverage, high evaporation loss.',
      tips: ['Efficiency: 40-50%', 'Cost: ₹10000-20000/ha', 'Field leveling crucial for uniformity', '30-50% water loss to evaporation', 'Labor intensive', 'Suitable for flat, low-permeability soils']
    },
    {
      title: 'Furrow Irrigation',
      content: 'Water runs through furrows between rows. Better than flood, less water loss. Good for vegetables, cotton, maize.',
      tips: ['Efficiency: 60-70%', 'Cost: ₹15000-30000/ha', 'Furrow spacing: crop-dependent', 'Slope: 0.3-0.5% optimal', 'Reduces erosion compared to flood', '3-4 irrigations per season typically']
    },
    {
      title: 'Sprinkler Irrigation',
      content: 'Water sprayed over area like rainfall. Good for slopes, coarse soils, varied topography. Prevents waterlogging.',
      tips: ['Efficiency: 70-80%', 'Cost: ₹40000-70000/ha', 'Sprinkler spacing: 10-15m x 10-15m', 'Pressure required: 2-3 kg/cm²', 'Good for vegetables, flowers', 'Labor moderate']
    }
  ]

  const advanced = [
    {
      title: 'Drip Irrigation Systems',
      content: 'Water delivered directly to plant root zone. Highest efficiency. Most suitable for water scarcity. Integrates with fertigation.',
      strategies: [
        'Efficiency: 90-95%',
        'Cost: ₹60000-150000/ha',
        'Dripper spacing: 30-60cm',
        'Flow rate: 2-4 L/hour per plant',
        'Water savings: 40-60% vs flood',
        'Save ₹20000-30000/ha on irrigation'
      ]
    },
    {
      title: 'Micro Irrigation & Precision Systems',
      content: 'Combine drip with sensors and automation. Water and fertilizer applied exactly when and where needed. IoT-enabled systems.',
      strategies: [
        'Soil moisture sensors optimize watering',
        'Variable rate applications by zone',
        'Fertigation precise nutrient delivery',
        'Reduces fertilizer use 30-40%',
        'Smart controllers adjust for weather',
        'App-based monitoring from phone'
      ]
    },
    {
      title: 'Subsurface & Mulch Systems',
      content: 'Water delivered below surface through pipes or buried drips. Minimal evaporation. Ideal for arid regions. Combine with mulching.',
      strategies: [
        'Subsurface pipes: 10-15cm depth',
        'Plastic mulch + drip: 70-80% saving',
        'Reduces weed growth significantly',
        'Prevents salt accumulation on surface',
        'Best for high-value crops',
        '3-5 year ROI typical'
      ]
    }
  ]

  return (
    <>
      <PageTemplate title="Irrigation Methods" hero={irrigation} intro={intro}>
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

          <div className="bg-linear-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200">
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">📊 Efficiency & Cost Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-cyan-100">
                  <tr>
                    <th className="p-3 text-left font-bold">Method</th>
                    <th className="p-3 text-left">Efficiency</th>
                    <th className="p-3 text-left">Cost</th>
                    <th className="p-3 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Flood</td>
                    <td>40-50%</td>
                    <td>₹10-20K</td>
                    <td>Rice, wheat</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Furrow</td>
                    <td>60-70%</td>
                    <td>₹15-30K</td>
                    <td>Vegetables, cotton</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Sprinkler</td>
                    <td>70-80%</td>
                    <td>₹40-70K</td>
                    <td>Slopes, all crops</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Drip</td>
                    <td>90-95%</td>
                    <td>₹60-150K</td>
                    <td>High-value crops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default IrrigationMethods

