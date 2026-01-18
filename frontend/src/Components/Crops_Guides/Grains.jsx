import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/crops.svg'
import Footer from '../footer'

function Grains() {
  const intro = 'Grain crops - rice, wheat, maize - provide staple food for billions. Complete cultivation guide from land prep to harvest.'
  const [selectedCrop, setSelectedCrop] = useState('rice')

  const crops = {
    rice: {
      color: 'blue',
      season: 'Kharif (June-October)',
      rainfall: '1200-1500mm',
      temp: '20-30°C',
      soil: 'Loam to clay, waterlogged tolerant',
      duration: '120-150 days',
      yield: '4-6 tons/ha',
      
      basics: [
        {
          title: 'Land Preparation',
          content: 'Puddle fields 4-5 times to create soft soil for transplanting. Maintain 5-7cm water throughout growing season. Use well-rotted manure 5-10 tons/ha.'
        },
        {
          title: 'Varieties',
          content: 'Choose based on region: Basmati (premium, ₹300-400/kg), Regular white rice (₹150-200/kg). Hybrid varieties give 20% higher yield.'
        },
        {
          title: 'Planting Method',
          content: 'Transplanting most common in India. Nursery for 30-35 days, then transplant 20×15cm spacing. Alternative: Direct seeding (saves water, labor).'
        }
      ],
      
      intermediate: [
        {
          title: 'Nutrient Management',
          content: 'Rice needs high nitrogen. Apply 120 kg N/ha: 60kg at planting, 30kg at tillering, 30kg at panicle initiation. P: 30-40kg/ha, K: 40-50kg/ha.',
          tips: ['Nitrogen splits critical for yield', 'Use green manure for ₹15000-20000 savings', 'Deficiency symptoms: yellowing leaves', 'P deficiency: Purple/dark color']
        },
        {
          title: 'Water Management',
          content: 'Maintain 5-7cm standing water. Daily water loss: 5-8mm through evapotranspiration. Alternate wetting-drying (AWD) saves 25-30% water.',
          tips: ['AWD: Drain field, refill at 15cm below surface', 'Saves ₹3000-5000/ha on water', 'No yield loss, better grain quality']
        },
        {
          title: 'Pest Management',
          content: 'Main pests: Stem borer, leaf folder, gall midge. Use resistant varieties, IPM approach, spray only if needed.',
          tips: ['Stem borer: Spray at tiller stage', 'Economic threshold: 2 affected tillers/sq.m', 'Use Bt or chemical only if threshold exceeded']
        }
      ],
      
      advanced: [
        {
          title: 'High-Tech Cultivation',
          content: 'SRI (System of Rice Intensification): Space 25×25cm, use 1 seedling per hill, intermittent irrigation. 25-30% yield increase, 40% water save.',
          strategies: ['Requires precision and monitoring', 'Best for small holdings', 'Training needed for proper technique', '₹50000-80000/ha additional investment']
        },
        {
          title: 'Hybrid Rice',
          content: 'F1 hybrids give 15-20% higher yields. Cost: ₹300-500/kg seed (higher than normal). Requires purchased seed yearly.',
          strategies: ['Yield potential: 6-8 tons/ha', 'Less fertilizer needed (10% less N)', 'Requires good agronomic practices', 'Premium price for some varieties']
        },
        {
          title: 'Post-Harvest Excellence',
          content: 'Proper harvesting at 20% moisture ensures quality and longevity. Mechanical harvesting, quick threshing, drying to 12-13% moisture.',
          strategies: ['Combine harvester: 1 hectare/day', 'Prevents shattering losses', 'Better grain quality', 'Export-quality output']
        }
      ]
    },
    wheat: {
      color: 'yellow',
      season: 'Rabi (October-March)',
      rainfall: '400-600mm',
      temp: '15-25°C',
      soil: 'Well-drained loam, silt loam best',
      duration: '110-140 days',
      yield: '4-5 tons/ha',
      
      basics: [
        {
          title: 'Land Preparation',
          content: 'Deep ploughing (15-20cm) breaks hardpan. 2-3 passes for fine tilth. Apply FYM 5-10 tons/ha. Create fine seed bed for uniform germination.'
        },
        {
          title: 'Sowing',
          content: 'October-November optimal timing (region-dependent). Spacing: 22.5cm between rows. Seed rate: 100-120 kg/ha. Seed dressing with fungicide prevents diseases.'
        },
        {
          title: 'Varieties',
          content: 'Bread wheat (bread making) and durum wheat (pasta, semolina). HYV varieties: PBW, HD, DBW series. Choose based on region and market.'
        }
      ],
      
      intermediate: [
        {
          title: 'Nitrogen Timing is Critical',
          content: 'Apply 120kg N/ha in splits: 60kg at sowing, 60kg at first irrigation (CRI stage). Timing impacts both yield and quality.',
          tips: ['Early split saves lodging risk', 'Monitor plant height', 'Excessive N reduces grain quality']
        },
        {
          title: 'Irrigation Schedule',
          content: 'Normally 3-4 irrigations needed: CRI (20-25 DAS), Tillering (45-50 DAS), Flowering (65-70 DAS), Grain filling (85-90 DAS).',
          tips: ['Drip irrigation saves 40-50% water', 'Critical stages: Tillering and grain filling', 'Waterlogging causes disease']
        },
        {
          title: 'Pest & Disease Management',
          content: 'Major diseases: Karnal bunt, loose smut. Use resistant varieties, seed treatment. Pests minor if resistant variety used.',
          tips: ['Varieties: PBW 677 resistant to Karnal bunt', 'Loose smut: Hot water seed treatment (52°C, 10 min)']
        }
      ],
      
      advanced: [
        {
          title: 'Conservation Agriculture',
          content: 'Zero/reduced tillage wheat after rice. Saves fuel, water, labor. Better soil structure, increased microbes. Yield same or higher.',
          strategies: ['No ploughing - direct seed', 'Saves ₹3000-5000/ha', 'Residue mulch improves soil', 'Better for environment']
        },
        {
          title: 'Quality Parameters',
          content: 'Protein content (12-13%), gluten strength, falling number. Market premium for quality. Choose variety and nutrient plan accordingly.',
          strategies: ['Bread wheat: 12-14% protein', 'Requires balanced fertilization', 'Late N application increases protein', 'Milling yield: 70-72%']
        },
        {
          title: 'Wheat-Rice Intensification',
          content: 'Rice-Wheat system productivity enhancement through residue management and crop scheduling.',
          strategies: ['30% yield increase possible', 'Reduce intercrop gap from 15 to 5 days', 'Maintain soil health with legumes', 'Intercrop groundnut for profit']
        }
      ]
    },
    maize: {
      color: 'orange',
      season: 'Kharif & Rabi',
      rainfall: '500-750mm',
      temp: '21-27°C',
      soil: 'Well-drained loam, high fertility',
      duration: '90-110 days',
      yield: '4-6 tons/ha',
      
      basics: [
        {
          title: 'Land Preparation',
          content: 'Deep ploughing 20-25cm deep. Add 5-10 tons FYM/ha. Create ridges for better drainage. Maize tolerates acidic soils well.'
        },
        {
          title: 'Sowing',
          content: 'Kharif: June-July, Rabi: October-November. Spacing: 60×25cm (4 plants/hill). Seed rate: 15-20 kg/ha. Seed treatment with carbendazim prevents seed rot.'
        },
        {
          title: 'Variety Selection',
          content: 'Hybrids dominate: NK40, Pioneer, Monsanto varieties. Open-pollinated varieties cheaper but lower yield. Hybrid seed cost: ₹150-300/kg.'
        }
      ],
      
      intermediate: [
        {
          title: 'High Nitrogen Requirement',
          content: 'Maize feeds heavily on nitrogen. Apply 120 kg N/ha: 40% at sowing, 30% at knee-high, 30% at tasseling.',
          tips: ['Nitrogen critical at knee-high stage', 'Visual deficiency: Yellow lower leaves', 'Use green manuring (Sesbania) for ₹20000 savings']
        },
        {
          title: 'Irrigation',
          content: '3-4 irrigations for monsoon, 4-5 for post-monsoon. Critical stages: Knee-high and tasseling. 25mm each irrigation.',
          tips: ['Drip saves 30-40% water', 'Avoid waterlogging', 'Moisture during grain fill critical']
        },
        {
          title: 'Intercropping',
          content: 'Intercrop pulses (beans, peas) or vegetables in 2:1 ratio. Utilize sunlight, nitrogen fixation, additional income.',
          tips: ['Maize + beans: Better land use', 'Maize + pumpkin: 40% higher return', 'No yield reduction in maize']
        }
      ],
      
      advanced: [
        {
          title: 'Specialized Maize Products',
          content: 'Sweet corn (vegetable, ₹400-600/cob), Baby corn (₹80-120/cob), Popcorn (₹300-400/kg). Premium prices, different agronomy.',
          strategies: ['Sweet corn: Harvest at milk stage', 'Baby corn: Pick at silking', 'Higher value but more labor']
        },
        {
          title: 'Hybrid Maize Management',
          content: 'Hybrids very responsive to inputs. Fertilizer effect doubled vs open varieties. Precise agronomic timing crucial.',
          strategies: ['Spacing critical: 60×25cm mandatory', 'Split N application essential', 'De-tasseling for seed production']
        },
        {
          title: 'Maize-Legume System',
          content: 'Follow maize with pulse crop (lentil, chickpea). Nitrogen fixation reduces fertilizer need next season. Sustainable rotation.',
          strategies: ['Maize → Chickpea: Best combination', 'Reduce N by 30-40% in pulse crop', 'Soil health improves yearly', '₹30000-40000 extra profit/ha']
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
  const colorMap = { blue: 'blue', yellow: 'yellow', orange: 'orange' }

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
      <PageTemplate title={'Grain Crops'} >
        <div className="space-y-8">
          {/* Crop Selection */}
          <div className="flex gap-4 flex-wrap">
            <CropButton name="Rice" value="rice" />
            <CropButton name="Wheat" value="wheat" />
            <CropButton name="Maize" value="maize" />
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
            <h3 className={`text-2xl font-bold text-${crop.color}-900 mb-4`}>📊 Expected Economics ({selectedCrop.toUpperCase()})</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Cost of Cultivation:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Land prep: ₹5000</li>
                  <li>Seed/nursery: ₹4000-6000</li>
                  <li>Fertilizer: ₹10000-15000</li>
                  <li>Pesticides: ₹2000-4000</li>
                  <li>Labor/harvesting: ₹10000-15000</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Returns:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Yield: {crop.yield}</li>
                  <li>Market rate: ₹2000-3000/bag</li>
                  <li>Gross income: ₹80000-150000</li>
                  <li>Net profit: ₹30000-60000/ha</li>
                  <li>ROI: 100-200%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default Grains
