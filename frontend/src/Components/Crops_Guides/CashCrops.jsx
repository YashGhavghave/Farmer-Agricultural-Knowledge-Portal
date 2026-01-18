import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/crops.svg'
import Footer from '../footer'

function CashCrops() {
  const intro = 'Cash crops - cotton, sugarcane, groundnut, tobacco, sunflower - high-value export-oriented crops.'
  const [selectedCrop, setSelectedCrop] = useState('cotton')

  const crops = {
    cotton: {
      color: 'slate',
      season: 'Kharif (June-December)',
      rainfall: '600-1000mm',
      temp: '21-24°C',
      soil: 'Black/alluvial soil',
      duration: '180-210 days',
      yield: '15-25 quintal lint/ha',
      
      summary: 'Cotton: BT cotton dominates (95% area). Spacing: 90×60cm. Fertilizer: 120kg N, 60kg P, 40kg K/ha. Irrigation: 6-8 times critical. Pest pressure high - use IPM. Yield: 15-25 quintal lint/ha. Price: ₹5000-7000/quintal. Return: ₹400000-700000/ha.'
    },
    sugarcane: {
      color: 'amber',
      season: 'Autumn/Spring plant',
      rainfall: '1250-2250mm',
      temp: '20-26°C',
      soil: 'Deep fertile loam',
      duration: '12-14 months',
      yield: '70-90 tons/ha',
      
      summary: 'Sugarcane: Perennial, 3-4 ratoon crops possible. Seed rate: 50000 buds/ha. Spacing: 90cm rows. Heavy fertilizer: 150kg N, 70kg P, 60kg K/ha. Water: 45-50 irrigations critical. Yield: 70-90 tons/ha. Price: ₹2800-3500/ton. Return: ₹300000-500000/ha.'
    },
    groundnut: {
      color: 'orange',
      season: 'Kharif (June-October)',
      rainfall: '400-600mm',
      temp: '24-28°C',
      soil: 'Sandy loam (soil-specific)',
      duration: '100-120 days',
      yield: '15-25 quintal/ha',
      
      summary: 'Groundnut: Soil type critical - sandy loam ideal. Spacing: 30×10cm (pods develop underground). Fertilizer: 20kg N, 45kg P, 40kg K/ha. Irrigation: 2-3 times. Kernel percentage: 70-75% indicates maturity. Yield: 15-25 quintal/ha. Price: ₹6000-9000/quintal. Return: ₹250000-450000/ha.'
    },
    sunflower: {
      color: 'yellow',
      season: 'Kharif & Rabi',
      rainfall: '400-750mm',
      temp: '20-25°C',
      soil: 'Well-drained loam',
      duration: '90-120 days',
      yield: '15-25 quintal/ha',
      
      summary: 'Sunflower: High oil-content crop. Spacing: 60×30cm. Fertilizer: 60kg N, 40kg P, 30kg K/ha. Pollinator friendly - important for good yield. Water: 3-4 irrigations. Heliotropism: head follows sun until flower maturity. Yield: 15-25 quintal/ha. Price: ₹6000-7500/quintal. Return: ₹200000-350000/ha.'
    },
    tobacco: {
      color: 'red',
      season: 'Rabi (Oct-May)',
      rainfall: '500-750mm',
      temp: '15-24°C',
      soil: 'Well-drained loam',
      duration: '120-150 days',
      yield: '20-35 quintal/ha',
      
      summary: 'Tobacco: High-input, high-return crop. Nursery phase critical (45 days). Transplanting at 30-40cm height. Spacing: 60×40cm. Fertilizer: 150kg N, 60kg P, 120kg K/ha (high potash). Water: 6-8 irrigations. Harvest by picking leaves (priming). Yield: 20-35 quintal/ha. Price: ₹3000-8000/quintal (varies by grade). Return: ₹300000-600000/ha. NOTE: Export demand declining - consider alternatives.'
    }
  }

  const CropButton = ({ name, value }) => (
    <button
      onClick={() => setSelectedCrop(value)}
      className={`px-4 py-2 font-semibold rounded-lg transition-all ${
        selectedCrop === value
          ? 'bg-green-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {name}
    </button>
  )

  const crop = crops[selectedCrop]

  return (
    <>
      <PageTemplate title={'Cash Crops'} >
        <div className="space-y-8">
          {/* Crop Selection */}
          <div className="flex gap-4 flex-wrap">
            <CropButton name="Cotton" value="cotton" />
            <CropButton name="Sugarcane" value="sugarcane" />
            <CropButton name="Groundnut" value="groundnut" />
            <CropButton name="Sunflower" value="sunflower" />
            <CropButton name="Tobacco" value="tobacco" />
          </div>

          {/* Crop Info */}
          <div className="bg-blue-100 p-6 rounded-lg border border-blue-300">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 capitalize">{selectedCrop.toUpperCase()} Production Guide</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800 mb-4">
              <div><strong>Season:</strong> {crop.season}</div>
              <div><strong>Duration:</strong> {crop.duration}</div>
              <div><strong>Rainfall:</strong> {crop.rainfall}</div>
              <div><strong>Temperature:</strong> {crop.temp}</div>
              <div><strong>Soil Type:</strong> {crop.soil}</div>
              <div><strong>Expected Yield:</strong> {crop.yield}</div>
            </div>
            <div className="bg-white p-4 rounded border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">Complete Overview:</h3>
              <p className="text-gray-700 leading-relaxed">{crop.summary}</p>
            </div>
          </div>

          {/* Cash Crop Economics */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">💰 Cash Crop Economics</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-green-700 mb-2">Why Cash Crops?</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Higher income per hectare</li>
                  <li>Export market opportunities</li>
                  <li>Premium for quality crops</li>
                  <li>Industrial demand guaranteed</li>
                  <li>Value chain employment</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700 mb-2">Key Challenges:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>High input costs</li>
                  <li>Global price volatility</li>
                  <li>Market concentration risk</li>
                  <li>Soil degradation if monoculture</li>
                  <li>Farmer debt concerns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Production Practices */}
          <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">🌱 Best Production Practices</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-purple-700 mb-2">✓ Soil Health Management:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use quality seeds/planting material (crucial)</li>
                  <li>Intercropping with pulses maintains soil nitrogen</li>
                  <li>Add 5-10 tons FYM/ha annually</li>
                  <li>Rotate crops - avoid monoculture</li>
                  <li>Monitor soil fertility every 2 years</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700 mb-2">✓ Nutrient Management:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Follow soil test recommendations</li>
                  <li>Balanced NPK ratio essential - over-N causes disease</li>
                  <li>Micro-nutrients may be needed (Zn, B, Mn)</li>
                  <li>Foliar spray during critical growth stages</li>
                  <li>Cost-benefit: ₹500 soil test saves ₹5000+ in wrong fertilizer</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700 mb-2">✓ Pest & Disease Control:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Scout fields weekly for early detection</li>
                  <li>Use resistant varieties when available</li>
                  <li>Maintain field sanitation - remove infected plants</li>
                  <li>Biological control preferred over chemicals</li>
                  <li>Chemical spray only when threshold level reached (cost-effective)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Linkages */}
          <div className="bg-indigo-50 p-8 rounded-lg border border-indigo-200">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">🏪 Market Linkages & Value Addition</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Contract Farming:</strong> Pre-decided price with companies/traders. Reduces price risk. Examples: Cotton seed companies, sugar mills, tobacco companies offer contracts. Minimum return guaranteed.</p>
              <p><strong>Quality Premium:</strong> Better grade/quality fetches 10-30% higher prices. Sort & grade before selling. For cotton: longer staple = higher price. For sugarcane: higher sucrose = higher return.</p>
              <p><strong>Processing & Value-Addition:</strong> Groundnut → groundnut oil/peanut butter (3-5x value). Cotton → yarn/fabric (complex but higher returns). Sunflower → refined oil (2-3x value).</p>
              <p><strong>Storage & Timing:</strong> Market prices seasonal. Sugarcane: harvest when processor ready. Cotton: store properly (50% moisture loss = 50% weight loss). Groundnut: proper drying critical (12% moisture).</p>
              <p><strong>Farmer Producer Organizations (FPOs):</strong> Collective marketing gives better negotiation power. Can access bulk contracts. Reduces middleman margins.</p>
            </div>
          </div>

          {/* Sustainability Note */}
          <div className="bg-red-50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ Sustainability & Future Outlook</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Global Trends:</strong> Tobacco demand declining worldwide (health concerns). Cotton facing synthetic fiber competition. Sugarcane under climate stress in some regions. Sunflower, groundnut relatively stable.</p>
              <p><strong>Soil Concerns:</strong> Monoculture degrades soil health. Sugarcane water-intensive (6-8 irrigations). Cotton pesticide-heavy historically. Implement crop rotation to maintain long-term productivity.</p>
              <p><strong>Climate Adaptation:</strong> Groundnut tolerates drought well. Cotton varieties for water-scarce regions available. Consider climate-resilient varieties as weather patterns change.</p>
              <p><strong>Risk Mitigation:</strong> Don't depend on single cash crop. Diversify with food crops. Join FPOs for risk sharing. Crop insurance available - explore government schemes (PMFBY).</p>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default CashCrops
