import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

function IPMGuide() {
  const intro = 'Integrated Pest Management (IPM) - combining biological, cultural, mechanical, and chemical controls for sustainable pest control.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is IPM?',
      content: 'IPM is a systematic approach using multiple pest control methods. Use chemical only as last resort. Monitor pest populations and act only when they exceed economic threshold.'
    },
    {
      title: 'IPM Principles',
      content: '1. Monitor: Scout fields 2-3x/week 2. Prevention: Use resistant varieties, crop rotation 3. Biological control: Release natural enemies 4. Cultural practices: Remove infected plants 5. Chemical: Only if needed'
    },
    {
      title: 'Economic Threshold',
      content: 'Pest level beyond which losses exceed control cost. Example: Rice leaf folder > 2 plants/sq.m requires control. Below this, let natural enemies handle it.'
    }
  ]

  const intermediate = [
    {
      title: 'Field Monitoring & Scouting',
      content: 'Regular field visits identify pests early. Use sticky traps (yellow/blue), beat cloth, hand observation. Record data for decision-making.',
      tips: ['Scout on cool mornings (6-9am)', 'Check 5-10 spots randomly per hectare', 'Count insects per plant or per sq.meter', 'Use sticky traps for flying insects', 'Compare with economic threshold levels', 'Weekly record-keeping essential']
    },
    {
      title: 'Cultural & Mechanical Control',
      content: 'Non-chemical methods preventing pest buildup. Crop rotation, field sanitation, removal of infected plants, proper spacing.',
      tips: ['Crop rotation 2-3 years minimum', 'Remove crop residues after harvest', 'Deep ploughing reduces soil pests', 'Remove infected plants immediately', 'Proper spacing reduces disease', 'Good drainage prevents fungal disease']
    },
    {
      title: 'Biological Control Agents',
      content: 'Natural enemies: Ladybugs eat aphids, parasitic wasps control caterpillars, Trichoderma fungus prevents diseases.',
      tips: ['Ladybugs: Eat 50-100 aphids/day each', 'Trichogramma: Parasitize 100+ moth eggs', 'Bacillus thuringiensis: Kill caterpillars', 'Release 50,000 parasitoids/hectare', 'Cost: ₹500-2000/ha', 'Work best with minimal chemical use']
    }
  ]

  const advanced = [
    {
      title: 'Threshold-Based Decision Making',
      content: 'Apply pesticide only when pest count exceeds economic threshold. Saves money and reduces chemical use.',
      strategies: [
        'Aphids: Spray at 5-10 per plant',
        'Leaf folder: 2-3 affected tillers per sq.m',
        'Whitefly: 15-20 insects per leaf',
        'Monitor daily during high-risk period',
        'Use pest forecasting models',
        'Save 40-50% chemical costs'
      ]
    },
    {
      title: 'Resistant Variety Selection',
      content: 'Choose varieties with built-in resistance to common pests and diseases. Most cost-effective long-term strategy.',
      strategies: [
        'Rice: Use varieties resistant to stem borer, gall midge',
        'Cotton: BT cotton eliminates bollworm',
        'Wheat: Resistance to Karnal bunt available',
        'Tomato: Resistant varieties to late blight',
        'Cost: Same as regular seeds',
        'Prevention most economical'
      ]
    },
    {
      title: 'Integrated Approach - Complete System',
      content: 'Combine all methods for comprehensive pest control. Resistant variety + crop rotation + biological control + monitoring + selective chemical use.',
      strategies: [
        'Year 1: Variety selection, baseline monitoring',
        'Year 2: Crop rotation, add biofertilizers',
        'Year 3: Release biological agents',
        'Year 4+: Minimal chemical use, <2 sprays/season',
        '30-50% pesticide reduction possible',
        'Yield increase from healthier soil'
      ]
    }
  ]

  const TabButton = ({ label, value }) => (
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
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className="bg-red-50 p-4 rounded">
          <h4 className="font-semibold text-red-700 mb-2">🔍 Field Methods:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className="bg-orange-50 p-4 rounded mt-3">
          <h4 className="font-semibold text-orange-700 mb-2">📈 Integrated Strategy:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <PageTemplate title="IPM Guide" hero={pest} intro={intro}>
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

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-4">✅ IPM Implementation Checklist</h3>
            <div className="space-y-2 text-gray-700">
              <p>□ Select resistant varieties for your region</p>
              <p>□ Plan crop rotation (3-year minimum)</p>
              <p>□ Scout fields 2-3 times per week</p>
              <p>□ Identify pest and determine threshold</p>
              <p>□ Try cultural/mechanical control first</p>
              <p>□ Release biological agents if available</p>
              <p>□ Use chemical only if threshold exceeded</p>
              <p>□ Keep detailed record of all pest observations</p>
              <p>□ Evaluate effectiveness each season</p>
              <p className="font-semibold text-green-700 mt-3">Result: 40-50% pesticide reduction, 15-25% cost savings, higher yields ✓</p>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default IPMGuide
