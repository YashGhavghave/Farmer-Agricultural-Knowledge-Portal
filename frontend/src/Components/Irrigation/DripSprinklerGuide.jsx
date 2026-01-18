import React, { useState } from 'react'
import PageTemplate from '../ui/PageTemplate'
import irrigation from '../../assets/irrigation.svg'
import Footer from '../footer'

function DripSprinklerGuide() {
  const intro = 'Drip and sprinkler systems - components, installation, maintenance, and best practices for water-efficient farming.'
  const [activeTab, setActiveTab] = useState('basics')

  const basics = [
    {
      title: 'What is Drip Irrigation?',
      content: 'Water delivered directly to plant root zone through buried or surface pipes. Minimal water loss. Most efficient irrigation method available.'
    },
    {
      title: 'Components of Drip System',
      content: 'Water source → Pump → Filter → Main line → Sub-main → Lateral lines → Drippers. Simple system, easy to maintain, expandable.'
    },
    {
      title: 'Why Choose Drip/Sprinkler?',
      content: '• Save 40-60% water • Precise nutrient delivery (fertigation) • No waterlogging • Higher yields • Suitable for all crops • Works on slopes'
    }
  ]

  const intermediate = [
    {
      title: 'Drip System Installation',
      content: 'Install before planting. Layout: main line along field, sub-mains every 30m, laterals every 30-60cm. Use stakes to keep pipes in place.',
      tips: ['Main line: 32-40mm PE pipe', 'Sub-main: 20-25mm PE pipe', 'Lateral: 12-16mm drip tape', 'Dripper spacing: 30-60cm apart', 'Depth: At or slightly below soil level', 'Layout L-shaped or parallel lines']
    },
    {
      title: 'Dripper Types & Selection',
      content: 'Online drippers (in-line), in-plant drippers, drip tapes, soakers. Choose based on crop spacing and soil type.',
      tips: ['Online drippers: Flexible placement, ₹1-2 each', 'Drip tape: Cheapest option, ₹5-10/meter', 'Line drippers: 2-5 L/hr flow rate', 'Self-cleaning drippers: Better for sediment-laden water', 'Pressure: 1-3 kg/cm² optimal']
    },
    {
      title: 'Sprinkler System Basics',
      content: 'Fixed or rotating sprinklers mounted on risers. Covers larger area. Suitable for slopes. Good for vegetables and flowers.',
      tips: ['Fixed sprinklers: 10-15m radius', 'Rotating sprinklers: 20-30m radius', 'Spacing: 10x10m or 12x15m typical', 'Riser height: 60-100cm', 'Pressure: 2-3 kg/cm² needed', 'Cost: ₹40000-70000/ha installed']
    }
  ]

  const advanced = [
    {
      title: 'Fertigation Systems',
      content: 'Fertilizers applied through irrigation water. Nutrients available when crop needs them. Reduces fertilizer use 30-40%.',
      strategies: [
        'Venturi injectors for liquid fertilizers',
        'Tanks for solid fertilizer dissolution',
        'Fertilizer solution: 0.5-1.0% concentration',
        'Split applications: N in multiple doses',
        'Prevents fertilizer pollution of water',
        'Reduces cost ₹20000-30000/ha/season'
      ]
    },
    {
      title: 'Micro Irrigation with Automation',
      content: 'Sensors measure soil moisture, controllers open/close valves. Mobile app for remote monitoring. Maximizes water use efficiency.',
      strategies: [
        'Tensiometers or capacitive soil moisture sensors',
        'Automatic watering based on moisture threshold',
        'Weather-based adjustments (ET reference)',
        'Reduce overirrigation by 30-50%',
        'Save labor with automated system',
        'App provides alerts and scheduling'
      ]
    },
    {
      title: 'Maintenance & Troubleshooting',
      content: 'Regular maintenance extends system life. Clogging from sediment main issue. Filter cleaning and pipe flushing critical.',
      strategies: [
        'Clean filters weekly',
        'Flush laterals and mains monthly',
        'Remove clogged drippers (every 3-5 years)',
        'Check pressure monthly',
        'Monitor for leaks and correct immediately',
        'Annual system inspection before season'
      ]
    }
  ]

  const TabButton = ({ label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all ${
        activeTab === value
          ? 'bg-teal-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  )

  const ContentCard = ({ title, content, tips, strategies }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-teal-500">
      <h3 className="text-2xl font-bold text-teal-700 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
      {tips && (
        <div className="bg-teal-50 p-4 rounded">
          <h4 className="font-semibold text-teal-700 mb-2">⚙️ Technical Details:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
      {strategies && (
        <div className="bg-cyan-50 p-4 rounded mt-3">
          <h4 className="font-semibold text-cyan-700 mb-2">🔧 Advanced Setup:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategies.map((strategy, idx) => <li key={idx}>{strategy}</li>)}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <>
      <PageTemplate title="Drip & Sprinkler Guide" hero={irrigation} intro={intro}>
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

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg border border-teal-200">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">📋 Installation Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-teal-700 mb-2">Before Installation:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Plan layout on paper</li>
                  <li>Calculate water requirement</li>
                  <li>Check water source capacity</li>
                  <li>Get cost estimates</li>
                  <li>Purchase quality materials</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-teal-700 mb-2">After Installation:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Flush all lines thoroughly</li>
                  <li>Test water output per dripper</li>
                  <li>Check pressure at main point</li>
                  <li>Monitor for leaks 1st week</li>
                  <li>Record water use baseline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">💰 Cost-Benefit Example</h3>
            <p className="text-gray-700 mb-4"><strong>For 1 hectare tomato/pepper:</strong></p>
            <div className="text-gray-700 space-y-2">
              <p>• Installation cost: ₹80,000</p>
              <p>• Water savings: 40 acre-feet/year = ₹15,000 savings</p>
              <p>• Yield increase: 30% = ₹40,000 additional income</p>
              <p>• Fertilizer savings: ₹20,000</p>
              <p>• <strong>Total annual benefit: ₹75,000</strong></p>
              <p>• <strong>Payback period: ~1.1 years ✓</strong></p>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default DripSprinklerGuide
