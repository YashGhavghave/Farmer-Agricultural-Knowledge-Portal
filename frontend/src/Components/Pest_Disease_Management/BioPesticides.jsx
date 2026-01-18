import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

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
    <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
    {tips && (
      <div className="bg-green-50 p-4 rounded">
        <h4 className="font-semibold text-green-700 mb-2">🌿 Usage Guidelines:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-lime-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-lime-700 mb-2">🔬 Advanced Techniques:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function BioPesticides() {
  const intro = 'Bio-pesticides - natural pest control using beneficial organisms and plant-derived compounds, safe for humans and environment.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What Are Bio-pesticides?',
      content: 'Pest control using natural enemies or plant-derived compounds. Examples: Bacillus thuringiensis (Bt), neem oil, ladybugs. Zero residue, safer for health.'
    },
    {
      title: 'Advantages Over Chemicals',
      content: '• No chemical residue • Safe for humans & environment • Beneficial insects survive • Cheaper long-term • No resistance build-up • Can be made on-farm'
    },
    {
      title: 'Common Bio-pesticides',
      content: 'Bacillus thuringiensis (Bt), Bacillus subtilis, Pseudomonas fluorescens, Beauveria, neem oil, pyrethrin, pheromones. Each targets specific pests or pathogens. Combine stewardship with monitoring for best results.'
    }
  ]

  const intermediate = [
    {
      title: 'Bacillus thuringiensis (Bt)',
      content: 'Naturally occurring bacterium producing crystal proteins (Cry toxins) that selectively kill caterpillars and certain insect larvae. Widely used in India for crops like cotton, vegetables, and rice. Safe for mammals, birds and most beneficial insects.',
      tips: ['Formulations: wettable powders or liquid concentrates', 'Concentration: follow label (typical 2-5 g or ml per liter depending on product)', 'Spray on young larvae (1st-2nd instar) for best control', 'Reapply every 5-7 days or after heavy rain', 'Store in cool, dry place; avoid direct sunlight before application']
    },
    {
      title: 'Neem Products',
      content: 'Neem leaves, seeds, and oil suppress insects by affecting feeding and reproduction. Also has fungicidal properties.',
      tips: ['Neem oil: 3-5% concentration', 'Cost: ₹600-1000/liter', 'Controls: Aphids, whitefly, mites, scale insects', 'Spray early morning or evening', 'Repeat every 10-14 days', 'Use with spreader-sticker for better coverage']
    },
    {
      title: 'Entomopathogenic Fungi',
      content: 'Beauveria and Metarhizium fungi infect and kill insects. Work best in humid conditions (>80% humidity).',
      tips: ['Beauveria: Controls whitefly, aphids, mites', 'Cost: ₹2000-3000/gram', 'Apply: 10^8 spores/ml concentration', 'Best in rainy season', 'Reapply every 5-7 days', 'Combine with neem for better results']
    }
  ]

  // Additional intermediate item for bacterial biopesticides beyond Bt
  intermediate.push({
    title: 'Other Bacterial Biopesticides',
    content: 'Bacillus subtilis (biofungicide) and Pseudomonas fluorescens (soil health and pathogen suppression) are used against soil-borne diseases and as plant growth promoters. These bacteria act via competition, antibiotic production, and induced systemic resistance.',
    tips: ['B. subtilis: seed treatment or foliar spray', 'P. fluorescens: seed treatment and soil drench', 'Follow label rates; usually 10^8 CFU/g or ml formulations', 'Compatible with integrated nutrient and disease management']
  })

  const advanced = [
    {
      title: 'Pheromone-Based Control',
      content: 'Use insect pheromones to trap or confuse pests. Sex pheromones attract males, preventing mating. Non-toxic, effective.',
      strategies: [
        'Sex pheromone traps: ₹50-100 each',
        'Used for: Diamondback moth, armyworm',
        'Place 4-5 traps per hectare',
        'Change lures every 2-3 weeks',
        'Monitor and remove trapped insects',
        'Reduce population 60-80% with traps'
      ]
    },
    {
      title: 'Microbial Consortium Approach',
      content: 'Combine Bt, fungi, bacteria, and plant products for comprehensive pest suppression. Synergistic effect stronger than single agent.',
      strategies: [
        'Week 1: Bt spray for caterpillars',
        'Week 2: Beauveria for whitefly/mites',
        'Week 3: Neem oil for preventive cover',
        'Week 4: Pheromone monitoring',
        'Rotate to prevent resistance',
        'Cost: ₹3000-5000/hectare/season'
      ]
    },
    {
      title: 'On-Farm Bio-pesticide Production',
      content: 'Produce neem extract and Bt preparations at farm level. Cost-effective, sustainable, self-reliant approach.',
      strategies: [
        'Neem extract: Grind 20kg neem leaves + 40L water, strain, use 5% solution',
        'Cost: ₹100-200/hectare',
        'Soap + oil spray: 20ml soap, 20ml oil in 10L water',
        'Garlic + chili spray: Boil 500g each in 10L water',
        'Ferment for 3-5 days before use'
      ]
    }
  ]


  return (
    <>
      <PageTemplate title="Bio-Pesticides" hero={pest} intro={intro}>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">🌱 Bio-pesticide Selection Guide</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-3 text-left font-bold">Pest</th>
                    <th className="p-3 text-left">Best Bio-pesticide</th>
                    <th className="p-3 text-left">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Stem borer</td>
                    <td>Bt, Trichoderma</td>
                    <td>Young larvae stage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Aphids</td>
                    <td>Neem, Beauveria</td>
                    <td>High population period</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Whitefly</td>
                    <td>Beauveria, neem</td>
                    <td>Early infestation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Caterpillars</td>
                    <td>Bt, pheromone</td>
                    <td>1st-2nd instar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">💚 Health & Environmental Benefits</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li><strong>Zero residue:</strong> No harmful chemicals in food or soil</li>
              <li><strong>Safe handling:</strong> No protective gear needed for application</li>
              <li><strong>No resistance:</strong> Pests don't build resistance to biopesticides</li>
              <li><strong>Beneficial insects:</strong> Natural enemies survive and multiply</li>
              <li><strong>Groundwater:</strong> No chemical pollution of water sources</li>
              <li><strong>Organic certification:</strong> Eligible for premium pricing</li>
            </ul>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default BioPesticides
