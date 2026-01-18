import React, { useState } from 'react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'
import Footer from '../footer'

function FertilizersChemical() {
  const intro = 'Chemical fertilizers - fast-acting nutrients for high yields. Use correctly to avoid soil degradation.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What Are Chemical Fertilizers?',
      content: 'Synthesized nutrients concentrated in salts. Urea (N), DAP/SSP (P), MOP (K). Fast nutrient availability, higher yields short-term, but degrade soil long-term if overused.'
    },
    {
      title: 'Common Types',
      content: 'Urea (46% N), DAP (18-46-0), SSP (16% P), MOP (60% K), NPK complexes (10-10-10, 12-32-16). Choose based on crop needs.'
    },
    {
      title: 'Key Advantages',
      content: '• Fast nutrient availability • Easy to apply • Predictable results • High yields possible • Less labor-intensive'
    }
  ]

  const intermediate = [
    {
      title: 'Nitrogen Fertilizers',
      content: 'Urea (46% N) most common. Split applications crucial - 50% at planting, 25% at vegetative, 25% at flowering. Reduces losses, improves uptake.',
      tips: ['Urea cost: ₹6500-7500/bag (45kg)', 'Split doses 3-4 times for cereals', 'Apply at vegetative growth peak', 'Avoid application during rain', 'Nitrate forms (CAN) for acidic soils', 'Ammoniacal forms (urea) for neutral']
    },
    {
      title: 'Phosphate Fertilizers',
      content: 'DAP (18-46-0) quick-acting but less soluble. SSP (16% P) slower but soluble in acid soils. Single application at planting sufficient.',
      tips: ['DAP cost: ₹20000-22000/bag (50kg)', 'SSP cost: ₹15000-17000/bag (50kg)', 'Apply full dose at planting', 'Important for root development', 'Fixes in soil - add manure for efficiency', 'More effective in acidic soils']
    },
    {
      title: 'Potash Fertilizers',
      content: 'MOP (60% K) standard source. Essential for fruit quality, disease resistance, drought tolerance. Single dose at flowering best.',
      tips: ['MOP cost: ₹20000-22000/bag (50kg)', 'Apply at flowering/fruiting stage', 'Essential for potato, banana, sugarcane', 'Reduces incidence of diseases', 'Improves shelf life of fruits', 'Deficiency shows on leaf margins']
    }
  ]

  const advanced = [
    {
      title: 'Balanced NPK Formulations',
      content: 'Pre-mixed NPK complexes save labor and ensure balanced nutrition. Different ratios for different crop stages.',
      strategies: [
        'Vegetative stage: High N (19-19-19)',
        'Flowering stage: Low N, high P and K (10-52-10)',
        'Cost efficient for large fields',
        'Uniform nutrient distribution'
      ]
    },
    {
      title: 'Micronutrient Application',
      content: 'Beyond NPK, crops need Fe, Zn, Mn, Cu, B. Deficiencies common in intensive cropping. Soil or foliar application.',
      strategies: [
        'Zinc deficiency: Most common in rice',
        'Iron chlorosis: High pH soils',
        'Boron: Critical for fruit crops',
        'Chelated forms available for absorption'
      ]
    },
    {
      title: 'Economic Fertilizer Management',
      content: 'Target nutrient removal, not fixed rates. Use soil testing to optimize doses. Every ₹1 invested should return ₹3-4.',
      strategies: [
        'Wheat removes 20kg N, 4kg P, 5kg K/ton grain',
        'Rice removes 15kg N, 3kg P, 12kg K/ton grain',
        'Base fertilizer on expected yield',
        'Monitor soil fertility trends'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <PageTemplate title={'Chemical Fertilizers'} >
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">⚠️ Important Precautions</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ <strong>Don't Overuse:</strong> Excess fertilizer burns crops and pollutes groundwater</li>
              <li>✓ <strong>Soil Testing First:</strong> Know soil status before applying fertilizer</li>
              <li>✓ <strong>Split Applications:</strong> Multiple small doses better than one large dose</li>
              <li>✓ <strong>Add Organic Matter:</strong> Chemical fertilizers alone degrade soil over time</li>
              <li>✓ <strong>Timing Matters:</strong> Apply at correct crop growth stage</li>
              <li>✓ <strong>Water Carefully:</strong> Water before and after application for nutrient movement</li>
              <li>✓ <strong>Long-term Sustainability:</strong> Eventually shift to integrated nutrient management</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">💡 Recommended Transition Strategy</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Years 1-2:</strong> Use chemical fertilizers with soil testing. Establish baseline yields.</p>
              <p><strong>Years 2-3:</strong> Add organic amendments (5-10 tons compost/ha). Reduce chemical fertilizer by 20-30%.</p>
              <p><strong>Years 3-5:</strong> Incorporate biofertilizers. Use Integrated Nutrient Management - 50% organic, 50% chemical.</p>
              <p><strong>Years 5+:</strong> Shift mostly to organic with selective chemical use. Soil fertility increases, costs decrease.</p>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default FertilizersChemical
