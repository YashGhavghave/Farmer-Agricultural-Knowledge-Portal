import React, { useState } from 'react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'
import Footer from '../footer'

function SoilAmendments() {
  const intro = 'Soil amendments improve texture, fertility, and water-holding capacity. Use compost, manure, lime, and gypsum strategically.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What Are Soil Amendments?',
      content: 'Materials added to soil to improve its physical and chemical properties. Compost, manure, lime, gypsum, sand, organic matter - anything that betters soil health.'
    },
    {
      title: 'Why Amend Soil?',
      content: 'Poor soil structure, low fertility, imbalanced pH, nutrient deficiencies. Amendments fix these problems. Essential for degraded or new land.'
    },
    {
      title: 'Types of Amendments',
      content: 'Organic (compost, manure, mulch), mineral (lime, gypsum, sand), and biological (biofertilizers, biochar). Choose based on soil deficiency.'
    }
  ]

  const intermediate = [
    {
      title: 'Organic Amendments - Compost',
      content: 'Made from decomposed plant and animal material. Adds nutrients, improves structure, and increases water-holding capacity. Best amendment for most soils.',
      tips: ['6-8 weeks to fully decompose', 'Apply 5-10 tons/ha annually', 'Improves soil structure dramatically', 'Reduces compaction', 'Increases earthworm population', 'Free if made on farm']
    },
    {
      title: 'Manure Applications',
      content: 'Cattle, poultry, and sheep manure add organic matter and nutrients. Cow manure most balanced. Apply 5-20 tons/ha depending on quality.',
      tips: ['Fully decomposed is crucial', 'Fresh manure can burn crops', '3-6 months aging recommended', 'Poultry manure is nitrogen-rich', 'Mix with straw for better results', 'Apply before planting']
    },
    {
      title: 'Lime & Gypsum',
      content: 'Lime raises pH in acidic soils. Gypsum improves clay structure without changing pH. Critical for soil chemistry balance.',
      tips: ['Lime: 2-5 tons/ha for acid soils (pH<6.5)', 'Gypsum: 2-3 tons/ha for clay soils', 'Lime needs 2-3 months to work', 'Gypsum works in 4-6 weeks', 'Test pH before applying']
    }
  ]

  const advanced = [
    {
      title: 'Vermicompost & Biochar',
      content: 'Vermicompost (earthworm castings) is nutrient-dense. Biochar improves water-holding and harbors beneficial microbes. Premium amendments for high-value crops.',
      strategies: [
        'Vermicompost: ₹10000-15000/ton but highly effective',
        'Apply 2-5 tons/ha for best results',
        'Biochar: 5-10 tons/ha, improves water retention',
        'Combination with compost gives best results'
      ]
    },
    {
      title: 'Biological Amendments',
      content: 'Biofertilizers (N-fixing bacteria, PSB), Trichoderma, and mycorrhizal fungi. Enhance nutrient availability and plant health.',
      strategies: [
        'Mix with compost before applying',
        'Azospirillum for cereals',
        'Phosphate-solubilizing bacteria (PSB)',
        'Mycorrhizal fungi increase nutrient uptake'
      ]
    },
    {
      title: 'Integrated Amendment Strategy',
      content: 'Combine organic, mineral, and biological amendments. Create comprehensive soil improvement program. Monitor and adjust over years.',
      strategies: [
        'Year 1: Heavy compost + lime if needed',
        'Year 2: Maintained with crop residues',
        'Year 3: Vermicompost + biofertilizers',
        'Continuous: Mulching and cover crops'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <PageTemplate title={'Soil Amendments'} >
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">💰 Cost-Benefit Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-green-700 mb-2">✓ Most Cost-Effective:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Farm compost - Free/minimal cost</li>
                  <li>Crop residues - Free on farm</li>
                  <li>Green manuring - Save fertilizer costs</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700 mb-2">💎 Premium Options:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vermicompost - ₹100-150/kg</li>
                  <li>Biochar - ₹20-30/kg</li>
                  <li>Biofertilizers - ₹100-200/kg</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 font-semibold text-blue-700">💡 Recommendation: Start with farm compost, progress to purchased amendments as income increases.</p>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilAmendments
