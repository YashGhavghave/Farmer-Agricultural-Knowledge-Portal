import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

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
    <p className="text-gray-700 mb-4">{content}</p>
    {tips && (
      <div className="bg-green-50 p-4 rounded">
        <h4 className="font-semibold text-green-700 mb-2">Tips:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}
    {strategies && (
      <div className="bg-emerald-50 p-4 rounded mt-3">
        <h4 className="font-semibold text-emerald-700 mb-2">Strategies:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
        </ul>
      </div>
    )}
  </div>
)

function OrganicFarming() {
  const intro = 'Principles and practices of organic farming that avoid synthetic chemicals, focusing on soil health and sustainability.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Organic Farming?',
      content: 'Organic farming is a system that relies on ecosystem management rather than external inputs. It emphasizes soil health, biodiversity, and sustainable practices without synthetic pesticides or fertilizers.'
    },
    {
      title: 'Core Principles',
      content: 'Organic farming follows four key principles: Health (soil and ecosystem), Ecology (natural processes), Fairness (ethics), and Care (responsibility to future generations).'
    },
    {
      title: 'Soil Health First',
      content: 'Healthy soil is the foundation. Organic farming builds soil through composting, crop rotation, and cover crops. Soil microorganisms are vital for nutrient cycling.'
    }
  ]

  const intermediate = [
    {
      title: 'Composting Methods',
      content: 'Create nutrient-rich compost using vegetative waste, animal manure, and farm residues. Proper decomposition (6-8 weeks) ensures pathogen elimination and nutrient availability.',
      tips: ['Maintain 25:1 carbon-to-nitrogen ratio', 'Turn pile every 2-3 weeks', 'Keep moisture at 40-60%']
    },
    {
      title: 'Crop Rotation Strategy',
      content: '3-4 year rotation prevents pest buildup and balances soil nutrients. Rotate between legumes, cereals, and cash crops for maximum benefit.',
      tips: ['Year 1: Nitrogen-fixing crops (beans, peas)', 'Year 2: Heavy feeders (corn, wheat)', 'Year 3: Light feeders (root crops)', 'Year 4: Legumes again']
    },
    {
      title: 'Pest Management',
      content: 'Use biological controls like neem oil, ladybugs, and parasitic wasps. Companion planting and trap crops help manage pests naturally.',
      tips: ['Plant marigolds to repel insects', 'Use pyrethrin from chrysanthemums', 'Release beneficial insects']
    }
  ]

  const advanced = [
    {
      title: 'Integrated Soil Nutrient Management',
      content: 'Combine various organic inputs: green manuring, biofertilizers, vermicompost, and microbial inoculants. Test soil regularly to optimize nutrient ratios.',
      strategies: [
        'Mycorrhizal fungi increase nutrient uptake by 400%',
        'Biofertilizers fix atmospheric nitrogen',
        'Vermicompost provides slow-release nutrients',
        'Seaweed extracts enhance growth hormones'
      ]
    },
    {
      title: 'Advanced Pest & Disease Management',
      content: 'Implement IPM (Integrated Pest Management) with real-time monitoring, predictive modeling, and strategic intervention.',
      strategies: [
        'Monitor pest populations using sticky traps',
        'Use economic threshold levels for intervention',
        'Apply bioagents (Trichoderma, Bacillus)',
        'Employ pheromone-based monitoring systems'
      ]
    },
    {
      title: 'Certification & Marketing',
      content: 'Understand certification standards and market organic products for 30-40% price premium. Maintain detailed records for compliance.',
      strategies: [
        'Get NPOP certification (India)',
        'Maintain 3-year transition records',
        'Document all inputs and practices',
        'Direct-to-consumer marketing increases margins'
      ]
    }
  ]

  return (
    <PageTemplate title={'Organic Farming'} >
      <div className="space-y-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 flex-wrap">
          <TabButton label="Basics" value="basics" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="Intermediate" value="intermediate" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="Advanced" value="advanced" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content Sections */}
        <div className="mt-6">
          {activeTab === 'basics' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beginner Level</h2>
              {basics.map((item, idx) => (
                <ContentCard key={idx} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'intermediate' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intermediate Level</h2>
              {intermediate.map((item, idx) => (
                <ContentCard key={idx} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'advanced' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Level</h2>
              {advanced.map((item, idx) => (
                <ContentCard key={idx} {...item} />
              ))}
            </div>
          )}
        </div>

        {/* Summary Box */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4">📌 Key Takeaway</h3>
          <p className="text-gray-700 leading-relaxed">
            Organic farming is a long-term investment in soil health and sustainability. Success requires patience, continuous learning, and commitment to ecological principles. Start small, practice crop rotation, build soil fertility, and gradually transition to certification.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default OrganicFarming;
