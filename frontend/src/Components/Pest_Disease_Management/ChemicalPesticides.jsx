import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import pest from '../../assets/pest.svg'
import Footer from '../footer'

function ChemicalPesticides() {
  const intro = 'Chemical pesticides - proper selection, safe application, timing, and precautions for effective pest management.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'Why Chemical Pesticides?',
      content: 'Fast-acting control for severe pest outbreaks. Chemical pesticides work when biological control insufficient. Use as last resort after other methods fail.'
    },
    {
      title: 'Common Chemical Groups',
      content: 'Insecticides (kill insects), Fungicides (prevent fungi), Herbicides (kill weeds). Each group has multiple options. Rotation essential to prevent resistance.'
    },
    {
      title: 'Safety First',
      content: 'Always wear protective gear. Follow label instructions exactly. Never mix chemicals. Store safely away from children and animals. Dispose properly.'
    }
  ]

  const intermediate = [
    {
      title: 'Insecticide Selection',
      content: 'Choose based on pest type and stage. Organophosphates, carbamates, pyrethroids, neonicotinoids. Rotate groups to prevent resistance.',
      tips: ['Carbaryl (Sevin): Cost ₹400-600/liter', 'Spinosad: Natural, broad-spectrum', 'Neonicotinoids: Systemically absorbed', 'Pyrethroids: Fast knockdown', 'Read label for pests & dosage', 'Check MRL (Maximum Residue Level)']
    },
    {
      title: 'Fungicide Application',
      content: 'Preventive spray more effective than curative. Start spraying before disease appears. Alternate different active ingredients.',
      tips: ['Mancozeb: Broad-spectrum, cost ₹600-1000/kg', 'Carbendazim: For powdery mildew', 'Sulphur: For mites and fungus', 'Copper fungicides: For bacterial diseases', 'Spray interval: 10-15 days typically', 'Stop 15-20 days before harvest']
    },
    {
      title: 'Safe Application Practices',
      content: 'Proper timing and technique ensure effectiveness and minimize drift. Apply early morning or evening. Avoid rainy days.',
      tips: ['Spray pressure: 2-3 kg/cm²', 'Nozzle height: 45-60cm from foliage', 'Speed: 3-5 km/h for tractor', 'Coverage: Entire plant top and bottom', 'Spray tank should be clean', 'Wear gloves, mask, apron always']
    }
  ]

  const advanced = [
    {
      title: 'Resistance Management',
      content: 'Pests develop resistance if same chemical used repeatedly. Rotate different chemical groups and modes of action.',
      strategies: [
        'Use Group A chemical for 2-3 sprays',
        'Switch to Group B chemical next',
        'Return to Group A after 2-3 seasons',
        'Combine with non-chemical methods',
        'Monitor pest population trends',
        'Reduce chemical use gradually'
      ]
    },
    {
      title: 'Economical Pesticide Use',
      content: 'Use minimum effective dose. Scout fields first, spray only when needed. Preventive sprays not always necessary.',
      strategies: [
        'Calculate before spraying',
        'E.g., Sevin 50 WP: 2kg per 1000L water',
        'Cost: ₹800-1200/hectare per spray',
        'Spray only if pest exceeds threshold',
        'Combine multiple pests in one spray',
        '2-3 sprays max per season'
      ]
    },
    {
      title: 'Integrated Approach - Reducing Chemical Use',
      content: 'Combine chemicals with biological controls. Reduce chemical sprays from 5-6 to 1-2 per season.',
      strategies: [
        'Start with resistant variety',
        'Add crop rotation & sanitation',
        'Release biological agents',
        'Use IPM thresholds for spray decision',
        'Chemical only if threshold exceeded',
        '60-70% pesticide reduction possible'
      ]
    }
  ]

  const TabButton = ({ label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all ${
        activeTab === value
          ? 'bg-orange-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  )

  const ContentCard = ({ title, content, tips, strategies }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-orange-500">
      <h3 className="text-2xl font-bold text-orange-700 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className="bg-orange-50 p-4 rounded">
          <h4 className="font-semibold text-orange-700 mb-2">⚙️ Guidelines:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className="bg-amber-50 p-4 rounded mt-3">
          <h4 className="font-semibold text-amber-700 mb-2">🎯 Strategic Implementation:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <PageTemplate title="Chemical Pesticides" hero={pest} intro={intro}>
        <div className="space-y-8">
          {/* <div className="flex gap-4 flex-wrap">
            <TabButton label="Basics" value="basics" />
            <TabButton label="Intermediate" value="intermediate" />
            <TabButton label="Advanced" value="advanced" />
          </div> */}

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

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">⚠️ Safety Precautions - CRITICAL</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>✓ Always wear protective gear: Gloves, mask, apron, boots</li>
              <li>✓ Never spray when pregnant or ill</li>
              <li>✓ Keep away from children and pets during application</li>
              <li>✓ Don't eat, drink, or smoke while handling chemicals</li>
              <li>✓ Wash hands thoroughly after application</li>
              <li>✓ Store chemicals in locked cabinet, away from water sources</li>
              <li>✓ Keep MSDSs (Material Safety Data Sheets) accessible</li>
              <li>✓ Maintain harvest interval (don't spray near harvest)</li>
              <li>✓ In case of poisoning, contact poison control immediately</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-4">📋 Pre-Spray Checklist</h3>
            <div className="space-y-2 text-gray-700">
              <p>□ Confirmed pest identification (not guessing)</p>
              <p>□ Pest population exceeds economic threshold</p>
              <p>□ Weather suitable (no rain expected in 24hrs)</p>
              <p>□ Read pesticide label completely</p>
              <p>□ Calculated correct dosage for field size</p>
              <p>□ Cleaned spray equipment thoroughly</p>
              <p>□ Checked protective gear condition</p>
              <p>□ Notified neighbors of spraying</p>
              <p>□ Checked harvest interval on label</p>
              <p className="font-semibold text-green-700 mt-3">Only spray when ALL checks ✓</p>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default ChemicalPesticides;
