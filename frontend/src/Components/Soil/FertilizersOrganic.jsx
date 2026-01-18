import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/organic.svg'
import Footer from '../footer'

function FertilizersOrganic() {
  const intro = 'Organic fertilizers - compost, manure, and biofertilizers for sustainable soil health and nutrition.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What Are Organic Fertilizers?',
      content: 'Plant and animal-derived nutrients. Examples: compost, manure, bone meal, seaweed, biofertilizers. Slow-release, improve soil structure, sustainable.'
    },
    {
      title: 'Key Advantages',
      content: '• Improves soil structure • Increases organic matter • Feeds soil microbes • Slow nutrient release • Cost-effective (if made on farm) • Sustainable'
    },
    {
      title: 'Main Types',
      content: 'Compost (plant waste), FYM (animal manure), poultry manure, bone meal, neem cake, biofertilizers, and seaweed extracts.'
    }
  ]

  const intermediate = [
    {
      title: 'Farmyard Manure (FYM)',
      content: 'Mix of animal bedding and waste. Cattle manure best - balanced NPK. Application 5-20 tons/ha depending on quality and crop.',
      tips: ['Fully decomposed is essential', 'Rich in organic carbon', 'Apply 2-3 months before crop', 'Contains N:2%, P:1%, K:2%', 'Improves water retention', 'Sustainable if produced on farm']
    },
    {
      title: 'Poultry Manure',
      content: 'Nitrogen-rich, fast-acting. 2-3 tons/ha sufficient. Properly aged (3-6 months) to avoid burning crops.',
      tips: ['Very nitrogen-rich (N: 3-4%)', 'Quick nutrient release', 'Must be fully decomposed', 'Can cause salt accumulation', 'Best for vegetables', 'Mix with compost for balance']
    },
    {
      title: 'Biofertilizers - Nitrogen Fixers',
      content: 'Bacteria and fungi that convert atmospheric nitrogen to plant-available form. Azospirillum, Azotobacter, Rhizobium. Save 30-50% on synthetic nitrogen.',
      tips: ['Azospirillum for cereals (rice, wheat, maize)', 'Rhizobium for pulses (gram, chickpea)', 'Azotobacter for vegetables', 'Apply with seed or in compost', 'Cost: ₹100-200/kg', 'Save ₹3000-5000/ha on urea']
    }
  ]

  const advanced = [
    {
      title: 'Vermicompost Production',
      content: 'Earthworm-processed compost. Nutrient-dense, microbial-rich, excellent for high-value crops. Profitable to produce and sell.',
      strategies: [
        'Establish vermibed with local earthworms',
        'Feed with kitchen waste, crop residues',
        '6-8 months to harvest',
        'Yield: 1kg worms produce 40-50kg annually',
        'Sell for ₹10000-15000/ton'
      ]
    },
    {
      title: 'Biofertilizer Consortiums',
      content: 'Combine multiple microbes for synergistic effect. Nitrogen fixers + phosphate solubilizers + potassium mobilizers.',
      strategies: [
        'Azospirillum + PSB + Bacillus combination',
        'Apply through soil or foliar spray',
        'Inoculate compost for better results',
        'Save 50% fertilizer costs',
        '30-40% yield increase in soils with deficiency'
      ]
    },
    {
      title: 'Integrated Nutrient Management',
      content: 'Combine organic and biofertilizers. 50% recommended dose NPK from organic, rest from bio-agents. Best for long-term sustainability.',
      strategies: [
        'Year 1: 100% organic (establish microbes)',
        'Year 2-3: 70% organic + 30% chemical',
        'Year 3+: 50% organic + biofertilizers',
        'Soil health improves each year'
      ]
    }
  ]

  return (
    <PageTemplate title={'Organic Fertilizers'} >
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

        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4">📊 Organic vs Chemical Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3 text-left font-bold">Factor</th>
                  <th className="p-3 text-left">Organic</th>
                  <th className="p-3 text-left">Chemical</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Nutrient Release</td>
                  <td>Slow (over months)</td>
                  <td>Fast (days)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Soil Health</td>
                  <td>Improves over time</td>
                  <td>Can degrade</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Cost/ha</td>
                  <td>₹5000-15000 (if farm-made: ₹0)</td>
                  <td>₹10000-20000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Initial Yield</td>
                  <td>Moderate (then improves)</td>
                  <td>High (but unsustainable)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Long-term Viability</td>
                  <td>✓ Sustainable</td>
                  <td>✗ Degrades soil</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-green-800 font-semibold">💚 Best approach: Integrated Nutrient Management - combine organic with biofertilizers for sustainability and productivity.</p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default FertilizersOrganic
