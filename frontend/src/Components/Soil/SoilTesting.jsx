import React, { useState } from 'react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'
import Footer from '../footer'

function SoilTesting() {
  const intro = 'Soil testing reveals nutrient status, pH, and organic matter - essential for optimized fertilizer application and better yields.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'Why Test Your Soil?',
      content: 'Soil testing determines exact nutrient levels - nitrogen, phosphorus, potassium, micronutrients, pH, and organic matter. Apply fertilizers based on actual need, not guesswork.'
    },
    {
      title: 'What Gets Tested?',
      content: 'Major nutrients (NPK), micronutrients (Fe, Zn, Mn, Cu), organic carbon, pH, electrical conductivity (EC), and texture. Complete picture of soil health.'
    },
    {
      title: 'When to Test?',
      content: 'Before starting a new crop, every 2-3 years for ongoing crops, or when yields drop. Best time: after harvest in autumn. Do it once before starting any new farming venture.'
    }
  ]

  const intermediate = [
    {
      title: 'Soil Sampling Methodology',
      content: 'Proper sampling ensures accurate results. Take samples from multiple spots, mix them, and send to lab. Pattern and depth matter.',
      tips: ['Take 10-15 sub-samples per field', 'Sample at 0-15cm and 15-30cm depth', 'W-pattern sampling across field', 'Avoid wet soil', 'Send 500g per depth to lab', 'Use clean plastic bags']
    },
    {
      title: 'Reading Soil Test Results',
      content: 'Results show nutrient levels in mg/kg. Compare with target levels for your crop. Interpretation guides fertilizer recommendations.',
      tips: ['Nitrogen (N): 250-280 mg/kg optimal', 'Phosphorus (P): 25-30 mg/kg for wheat', 'Potassium (K): 200-250 mg/kg optimal', 'pH: 6.5-7.0 for most crops', 'OC (Organic Carbon): 0.5-0.7%']
    },
    {
      title: 'Cost & Turnaround',
      content: 'Government labs: ₹150-300 per sample (government subsidized). Private labs: ₹500-1000 per sample. Results in 10-15 days.',
      tips: ['Government labs cost-effective', 'Private labs faster but expensive', 'Online soil mapping now available', 'Combine with extension officer advice']
    }
  ]

  const advanced = [
    {
      title: 'Digital Soil Mapping',
      content: 'Using satellites and drones to map soil variability. Create variable fertilizer application maps. Precision agriculture at scale.',
      strategies: [
        'NDVI mapping shows crop stress zones',
        'EC mapping identifies soil variation',
        'Yield maps guide future testing',
        'Predictive models for next season'
      ]
    },
    {
      title: 'Micronutrient Diagnosis',
      content: 'Visual symptoms help identify deficiencies. But soil testing confirms it. Different crops need different micronutrient levels.',
      strategies: [
        'Zinc: Critical in rice systems',
        'Iron: Important in high-pH soils',
        'Boron: Essential for pulses',
        'Test every 3-4 years minimum'
      ]
    },
    {
      title: 'Soil Health Monitoring',
      content: 'Beyond NPK, monitor biological and physical health. Microbial biomass, enzyme activity, and water-stable aggregates.',
      strategies: [
        'Trending organic matter over years',
        'Monitor microbial communities',
        'Track pH changes annually',
        'Correlate yields with soil metrics'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <PageTemplate title={'Soil Testing'} >
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

          <div className="bg-linear-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Soil Testing Checklist</h3>
            <ul className="text-gray-700 space-y-2">
              <li>□ Identify soil sampling centers near you</li>
              <li>□ Sample at correct depth and pattern</li>
              <li>□ Send samples in proper containers</li>
              <li>□ Wait 10-15 days for results</li>
              <li>□ Compare with crop-specific targets</li>
              <li>□ Consult extension officer for interpretation</li>
              <li>□ Plan fertilizer doses based on results</li>
              <li>□ Keep records for future reference</li>
            </ul>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default SoilTesting
