import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/crops.svg'
import Footer from '../footer'

function VegetablesFruits() {
  const intro = 'High-value vegetables and fruits - tomato, onion, potato, mango, banana - complete production and marketing guide.'
  const [selectedCrop, setSelectedCrop] = useState('tomato')

  const crops = {
    tomato: {
      color: 'rose',
      season: 'Year-round (Kharif & Rabi)',
      rainfall: '600-1000mm',
      temp: '20-25°C',
      soil: 'Well-drained loam',
      duration: '90-120 days',
      yield: '20-30 tons/ha',
      
      summary: 'Tomato is high-value vegetable. Spacing: 60×45cm. Stake/string support essential. Needs 5-6 irrigations. Yield: 20-30 tons/ha fresh, ₹300-500/kg market price. Target return: ₹500000-1000000/ha in commercial areas.'
    },
    onion: {
      color: 'purple',
      season: 'Rabi (October-March)',
      rainfall: '600-750mm',
      temp: '15-25°C',
      soil: 'Well-drained loam',
      duration: '130-140 days',
      yield: '40-50 tons/ha',
      
      summary: 'Onion: Kharif for storage varieties, Rabi for fresh market. Nursery for 4-5 weeks. Spacing: 15×10cm. Critical stage: Bulb formation (45-60 DAS). Yield: 40-50 tons/ha. Price: ₹500-2000/bag. Storage possible (4-5 months). Return: ₹300000-600000/ha.'
    },
    potato: {
      color: 'orange',
      season: 'Rabi (September-February)',
      rainfall: '400-500mm',
      temp: '15-20°C',
      soil: 'Well-drained loam',
      duration: '90-110 days',
      yield: '25-35 tons/ha',
      
      summary: 'Potato: Seed piece rate 25-30 quintals/ha (high cost). Ridge planting 60cm apart. Seed treatment protects from diseases. Irrigation critical: 4-5 times. Yield: 25-35 tons/ha. Price: ₹600-1500/bag. Processing value higher. Return: ₹250000-500000/ha.'
    },
    banana: {
      color: 'yellow',
      season: 'Year-round planting',
      rainfall: '750-2250mm',
      temp: '20-30°C',
      soil: 'Well-drained, fertile',
      duration: '12-14 months to first harvest',
      yield: '40-60 tons/ha/year',
      
      summary: 'Banana: Perennial crop, 8-10 year economic life. Spacing: 2×2m (2500 plants/ha). Sucker management critical. Fertilizer heavy: 150kg N, 50kg P, 200kg K/ha/year. Irrigation year-round. Yield: 40-60 tons/ha. Price: ₹200-500/dozen. Return: ₹400000-800000/ha annually.'
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
      <PageTemplate title={'Vegetables & Fruits'} >
        <div className="space-y-8">
          {/* Crop Selection */}
          <div className="flex gap-4 flex-wrap">
            <CropButton name="Tomato" value="tomato" />
            <CropButton name="Onion" value="onion" />
            <CropButton name="Potato" value="potato" />
            <CropButton name="Banana" value="banana" />
          </div>

          {/* Crop Info */}
          <div className="bg-green-100 p-6 rounded-lg border border-green-300">
            <h2 className="text-3xl font-bold text-green-900 mb-4 capitalize">{selectedCrop.toUpperCase()} Cultivation Guide</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800 mb-4">
              <div><strong>Season:</strong> {crop.season}</div>
              <div><strong>Duration:</strong> {crop.duration}</div>
              <div><strong>Rainfall:</strong> {crop.rainfall}</div>
              <div><strong>Temperature:</strong> {crop.temp}</div>
              <div><strong>Soil Type:</strong> {crop.soil}</div>
              <div><strong>Expected Yield:</strong> {crop.yield}</div>
            </div>
            <div className="bg-white p-4 rounded border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">Complete Overview:</h3>
              <p className="text-gray-700 leading-relaxed">{crop.summary}</p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">💰 High-Value Vegetable/Fruit Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-green-700 mb-2">Economic Advantages:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Higher yield value than cereals</li>
                  <li>3-5x return vs grains</li>
                  <li>Market demand year-round</li>
                  <li>Employment opportunity</li>
                  <li>Processing/value-addition possible</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700 mb-2">Technical Requirements:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Quality seeds essential</li>
                  <li>More labor intensive</li>
                  <li>Precise irrigation needed</li>
                  <li>Regular fertilization critical</li>
                  <li>Disease management important</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Issues & Solutions */}
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">🐛 Common Issues & Solutions</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Pest Management:</strong> Use IPM approach - resistant varieties, cultural practices, biological controls first, chemicals only if needed.</p>
              <p><strong>Disease Control:</strong> Early detection critical. Scout fields 2-3 times/week. Prevent rather than cure - sanitization & fungicide spray important.</p>
              <p><strong>Market Fluctuation:</strong> Prices vary seasonally. Contract farming reduces risk. Diversification of crops spreads risk.</p>
              <p><strong>Water Scarcity:</strong> Drip irrigation saves 40-50% water. Mulching reduces evaporation. Micro-catchment in dry areas.</p>
              <p><strong>Soil Health:</strong> Heavy fertilizer use degrades soil. Add organic matter 5-10 tons/ha annually. Rotate crops every 2-3 years.</p>
            </div>
          </div>

          {/* Market Information */}
          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">📊 Marketing Tips</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li><strong>Direct Selling:</strong> Farm-gate sales double profit vs wholesale. Build customer relationships.</li>
              <li><strong>Quality Grading:</strong> First-grade vegetables fetch 30-50% premium. Sorting & packaging important.</li>
              <li><strong>Cooperative Marketing:</strong> Pool with other farmers, better bargaining power with traders.</li>
              <li><strong>Organic Premium:</strong> Organic vegetables fetch 40-60% higher prices. Certification worth investment.</li>
              <li><strong>Processing/Value-Addition:</strong> Tomato paste, onion powder, chips increase value 3-5x but need investment & marketing.</li>
            </ul>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default VegetablesFruits
