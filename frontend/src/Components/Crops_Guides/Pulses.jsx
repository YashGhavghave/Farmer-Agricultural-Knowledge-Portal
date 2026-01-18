import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/crops.svg'
import Footer from '../footer'

function Pulses() {
  const intro = 'Pulses - protein-rich legumes for nutrition and soil health. Chickpea, lentil, pigeon pea, arhar: complete cultivation guide.'
  const [selectedCrop, setSelectedCrop] = useState('chickpea')

  const crops = {
    chickpea: {
      color: 'amber',
      season: 'Rabi (October-February)',
      rainfall: '400-500mm',
      temp: '15-25°C',
      soil: 'Well-drained loam, slightly alkaline best',
      duration: '100-120 days',
      yield: '2-3 tons/ha',
      
      basics: [
        {
          title: 'Land Preparation',
          content: 'Light soil preferred - chickpea grows well in medium soils. 2-3 ploughing sufficient. Good drainage essential - avoid waterlogging.'
        },
        {
          title: 'Sowing',
          content: 'October-November optimal (region-dependent). Spacing: 30×10cm. Seed rate: 80-100 kg/ha. Seed treatment with Rhizobium crucial for nitrogen fixation.'
        },
        {
          title: 'Rhizobium Inoculation',
          content: 'Chickpea-specific Rhizobium bacteria fix atmospheric nitrogen. Inoculated seeds give 30-40% higher yield. Cost: ₹200-400/ha.'
        }
      ],
      
      intermediate: [
        {
          title: 'Minimal Fertilizer Needed',
          content: 'Chickpea fixes own nitrogen. Apply only P and K: 40kg P/ha, 40kg K/ha. Add 2-3 tons FYM/ha for organic matter.',
          tips: ['Nitrogen fixation: 80-100kg/ha from air', 'Excess N reduces yield & increases pests', 'PSB (phosphate-solubilizing bacteria) enhance P availability']
        },
        {
          title: 'Water Management',
          content: 'Rainfall usually sufficient. Supplementary irrigation only if drought. Excess water causes root rot. Best yield on residual moisture.',
          tips: ['Drought tolerant - saves irrigation cost', '1-2 irrigations only in severe drought', 'Avoid irrigation at flowering stage']
        },
        {
          title: 'Disease Management',
          content: 'Wilt disease biggest threat in specific soils. Use resistant varieties, crop rotation. Alternaria, botrytis less damaging.',
          tips: ['Resistant varieties: JG11, JG16', 'Avoid continuous chickpea (min 2-3 year rotation)', 'Fungicide spray if needed (₹1000-1500/ha)']
        }
      ],
      
      advanced: [
        {
          title: 'High-Yield Varieties',
          content: 'Modern varieties: JG14 (3.5t/ha potential), Pusa varieties. Better disease resistance, higher yield, better market acceptance.',
          strategies: ['Premium seed cost: ₹50-80/kg', 'Yield increase: 40-50% possible', 'Market price: ₹7000-9000/bag premium']
        },
        {
          title: 'Crop Rotation Benefits',
          content: 'Chickpea after maize/cotton fixes 100kg N/ha. Next wheat requires 30% less nitrogen. 3-year rotation most beneficial.',
          strategies: ['Maize → Chickpea → Wheat cycle', 'Save ₹5000-7000 on N fertilizer', 'Soil health improves yearly', 'Better disease control']
        },
        {
          title: 'Premium Quality Production',
          content: 'Large bold grains fetch premium. Specific agronomy for quality: variety selection, spacing, timely operations.',
          strategies: ['Big chickpea market price: ₹10000-12000/bag', 'Premium markets: Export quality', 'Processing value: Flour, splits']
        }
      ]
    },
    lentil: {
      color: 'green',
      season: 'Rabi (October-February)',
      rainfall: '250-350mm',
      temp: '10-25°C',
      soil: 'Well-drained loam, acidic tolerable',
      duration: '80-100 days',
      yield: '1.5-2.5 tons/ha',
      
      basics: [
        {
          title: 'Drought Tolerant Crop',
          content: 'Lentil suits dryland farming. Needs minimal water. Grows well in north India. Quick-maturing allows escape from late-season rains.'
        },
        {
          title: 'Sowing',
          content: 'October-November. Spacing: 20×10cm. Seed rate: 40-50 kg/ha (smallest among pulses). Use inoculated seed.'
        },
        {
          title: 'Varieties',
          content: 'PL5 (brown), DL1 (red), Pusa varieties. Red lentil more valuable (₹6000-8000/bag) than brown (₹4000-5000/bag).'
        }
      ],
      
      intermediate: [
        {
          title: 'Fertilizer Requirement',
          content: 'Very low fertilizer need - nitrogen fixation abundant. Apply only P: 25-30 kg/ha. FYM 2-3 tons/ha beneficial.',
          tips: ['Nitrogen from fixation: 70-80kg/ha', 'No need for N fertilizer', 'P deficiency rare but check']
        },
        {
          title: 'Irrigation',
          content: 'Usually rain-fed. In low-rainfall years, 1-2 protective irrigations at critical growth stages sufficient.',
          tips: ['Drought escape crop - matures early', 'Saves irrigation cost vs chickpea', 'Perfect for dryland']
        },
        {
          title: 'Pest & Disease',
          content: 'Relatively pest-free. Diseases: Stemphylium (leaf spot). Avoid dense stands. Good airflow reduces disease.',
          tips: ['Proper spacing reduces disease', 'Fungicide only if severe', 'Rotate with non-legumes']
        }
      ],
      
      advanced: [
        {
          title: 'Red Lentil Export Market',
          content: 'Red/split lentil valuable for export (mainly Canada). Premium pricing. Specific cleaning and processing needed.',
          strategies: ['Export price: ₹10000-12000/bag', 'Processing required: Dehulling, splitting', 'Quality grade critical']
        },
        {
          title: 'Agro-forestry Integration',
          content: 'Lentil under tree canopy in silvopasture systems. Partial shade acceptable, reduced heat stress.',
          strategies: ['Trees + lentil + livestock', 'Diversified income', 'Sustainable land use']
        },
        {
          title: 'Conservation Agriculture',
          content: 'Zero-till lentil after rice/wheat. Retains moisture, saves labor, improves soil.',
          strategies: ['Direct seeding (no ploughing)', 'Saves ₹2000-3000/ha', 'Better soil structure', 'Sustainable']
        }
      ]
    },
    pigeonpea: {
      color: 'red',
      season: 'Kharif (June-January)',
      rainfall: '600-900mm',
      temp: '20-30°C',
      soil: 'Well-drained loam, tolerates acidic',
      duration: '180-210 days',
      yield: '1.5-2.5 tons/ha',
      
      basics: [
        {
          title: 'Long-Duration Crop',
          content: 'Pigeon pea takes 6-7 months (June to December/January). Space well for air circulation. Good drainage essential.'
        },
        {
          title: 'Intercropping Ideal',
          content: 'Plant pigeon pea at field boundaries or mixed intercropping with short-duration crops. Adds nitrogen, provides fodder.'
        },
        {
          title: 'Varieties',
          content: 'Medium varieties (medium duration, better yield): Pusa991, Pusa992. Short varieties for specific regions.'
        }
      ],
      
      intermediate: [
        {
          title: 'Nutrient Management',
          content: 'Apply 10kg N/ha (minimal), 20kg P/ha, 20kg K/ha. FYM 5-10 tons/ha or compost important for soil structure.',
          tips: ['Nitrogen fixation: 150-200kg/ha', 'Balanced nutrients critical', 'Deep rooting helps nutrient uptake']
        },
        {
          title: 'Intercropping Benefits',
          content: 'Pigeon pea + maize, pigeon pea + cotton. Maize gets nitrogen from legume. Intercrop productivity 40-50% higher.',
          tips: ['Pigeon pea + maize: Excellent combo', 'Land use efficiency maximum', 'Risk distribution']
        },
        {
          title: 'Pest Management',
          content: 'Helicoverpa (pod borer) major threat. IPM: Use pheromone traps, biological controls, insecticide only if severe.',
          tips: ['Pod borer: 2-3 affected pods per branch = spray', 'Pheromone traps reduce population', 'Biopesticides effective']
        }
      ],
      
      advanced: [
        {
          title: 'High-Yield Potential',
          content: 'Improved varieties and practices give 3-4 tons/ha. Requires precision agronomic management and timely operations.',
          strategies: ['Medium duration varieties: 2.5-3.0 t/ha', 'Spacing: 60×40cm optimal', 'Proper nutrient management critical']
        },
        {
          title: 'Pigeonpea in Agroforestry',
          content: 'Pigeon pea under tree canopy. Reduces pure tree income but adds legume revenue. Reduces erosion, improves soil.',
          strategies: ['Silvopasture system', 'Diversified income', 'Sustainable intensification']
        },
        {
          title: 'Processing & Value Addition',
          content: 'Split dal (arhar dal) most valuable product. Processing cost: ₹1000-1500/bag. Retail value: ₹12000-15000/bag.',
          strategies: ['Direct processing increases profit 50%', 'Cooperative or private mills', 'Quality control important']
        }
      ]
    }
  }

  const CropButton = ({ name, value }) => (
    <button
      onClick={() => setSelectedCrop(value)}
      className={`px-4 py-2 font-semibold rounded-lg transition-all ${
        selectedCrop === value
          ? `bg-${crops[value].color}-600 text-white`
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {name}
    </button>
  )

  const crop = crops[selectedCrop]

  const ContentCard = ({ title, content, tips, strategies }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-${crop.color}-500`}>
      <h3 className={`text-2xl font-bold text-${crop.color}-700 mb-3`}>{title}</h3>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className={`bg-${crop.color}-50 p-4 rounded`}>
          <h4 className={`font-semibold text-${crop.color}-700 mb-2`}>💡 Key Points:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className={`bg-${crop.color}-100 p-4 rounded mt-3`}>
          <h4 className={`font-semibold text-${crop.color}-800 mb-2`}>🎯 Advanced Techniques:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <PageTemplate title={'Pulses'} >
        <div className="space-y-8">
          {/* Crop Selection */}
          <div className="flex gap-4 flex-wrap">
            <CropButton name="Chickpea" value="chickpea" />
            <CropButton name="Lentil" value="lentil" />
            <CropButton name="Pigeon Pea" value="pigeonpea" />
          </div>

          {/* Crop Info Header */}
          <div className={`bg-${crop.color}-100 p-6 rounded-lg border border-${crop.color}-300`}>
            <h2 className={`text-3xl font-bold text-${crop.color}-900 mb-4 capitalize`}>{selectedCrop} Cultivation Guide</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              <div><strong>Season:</strong> {crop.season}</div>
              <div><strong>Duration:</strong> {crop.duration}</div>
              <div><strong>Rainfall:</strong> {crop.rainfall}</div>
              <div><strong>Temperature:</strong> {crop.temp}</div>
              <div><strong>Soil Type:</strong> {crop.soil}</div>
              <div><strong>Expected Yield:</strong> {crop.yield}</div>
            </div>
          </div>

          {/* Content Sections */}
          <div>
            <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>🌾 Basics - Getting Started</h3>
            {crop.basics.map((item, idx) => <ContentCard key={idx} {...item} />)}
          </div>

          <div>
            <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>📚 Intermediate - Optimizing Production</h3>
            {crop.intermediate.map((item, idx) => <ContentCard key={idx} {...item} />)}
          </div>

          <div>
            <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>🚀 Advanced - Maximizing Returns</h3>
            {crop.advanced.map((item, idx) => <ContentCard key={idx} {...item} />)}
          </div>

          {/* Summary Box */}
          <div className={`bg-gradient-to-r from-${crop.color}-50 to-${crop.color}-100 p-8 rounded-lg border border-${crop.color}-300`}>
            <h3 className={`text-2xl font-bold text-${crop.color}-900 mb-4`}>🌱 Key Benefit: Nitrogen Fixation</h3>
            <p className="text-gray-700 mb-3">All pulses fix atmospheric nitrogen through symbiotic bacteria (Rhizobium). This nitrogen benefits next crop and reduces fertilizer need.</p>
            <p className="text-green-700 font-semibold">💚 Growing pulses improves soil health and reduces farming costs long-term!</p>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default Pulses
