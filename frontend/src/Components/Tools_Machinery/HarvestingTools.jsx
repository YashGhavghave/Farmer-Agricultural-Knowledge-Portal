import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Combine, Hand, Box, 
  Leaf, Sun, Factory, 
  ShieldCheck, AlertTriangle, Info 
} from 'lucide-react'
import Navbar from '../Navbar'
import PageTemplate from '../ui/PageTemplate'
import Footer from '../footer'

const TabButton = ({ label, value, activeTab, setActiveTab, icon: Icon }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
      activeTab === value
        ? 'bg-green-700 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
)

const ContentCard = ({ title, content, advantages, disadvantages, tips, imagePrompt }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl shadow-sm p-8 mb-6 border border-green-100 hover:shadow-md transition-shadow"
  >
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-2xl font-black text-green-900 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{content}</p>

        {advantages && (
          <div className="bg-green-50/50 p-4 rounded-xl mb-3 border border-green-100">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <ShieldCheck size={18} /> Advantages:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {advantages.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {disadvantages && (
          <div className="bg-red-50/50 p-4 rounded-xl mb-3 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} /> Disadvantages:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {disadvantages.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {tips && (
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Info size={18} /> Practical Tips:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {tips.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
      {imagePrompt && (
        <div className="lg:w-1/3 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          
        </div>
      )}
    </div>
  </motion.div>
)

function HarvestingTools() {
  const [activeTab, setActiveTab] = useState('mechanized')

  const mechanizedTools = [
    {
      title: 'Combine Harvester',
      content: 'A single machine that performs multiple operations: reaping (cutting), threshing (separating grain), and winnowing (cleaning). Ideal for large-scale cereal farming.',
      advantages: ['High efficiency and speed', 'Reduces labor costs significantly', 'Minimal grain loss in dry conditions', 'Covers large areas quickly'],
      disadvantages: ['High initial cost', 'Requires skilled operators', 'Not suitable for small or uneven fields', 'Can damage wet crops'],
      tips: ['Adjust settings based on crop type and moisture', 'Perform regular maintenance', 'Ensure clear field pathways'],
      imagePrompt: 'A modern red combine harvester working in a vast golden wheat field under a blue sky.'
    },
    {
      title: 'Reaper-Binder',
      content: 'Cuts and bundles crops (like wheat, paddy) into sheaves. These bundles are then manually collected for threshing. Suitable for small to medium-sized farms.',
      advantages: ['Lower cost than combines', 'Less crop damage than manual cutting', 'Bundles make collection easier', 'Works on slightly uneven terrain'],
      disadvantages: ['Requires separate threshing operation', 'Still needs significant manual labor for binding and collecting', 'Slower than combine harvesters'],
      tips: ['Ensure blades are sharp', 'Adjust cutting height carefully', 'Maintain proper speed for even bundling'],
      imagePrompt: 'A green reaper-binder machine cutting and bundling rice stalks in a paddy field, with farmers collecting the bundles in the background.'
    },
    {
      title: 'Power Tiller Operated Reaper',
      content: 'A smaller, more agile reaper attached to a power tiller. It cuts crops and lays them in rows, ready for manual bundling and threshing. Excellent for small and fragmented landholdings.',
      advantages: ['Affordable and easy to maneuver', 'Suitable for small plots and hilly areas', 'Reduces drudgery of manual cutting', 'Low fuel consumption'],
      disadvantages: ['Requires manual bundling and threshing', 'Slower than larger reapers', 'Operator fatigue over long periods'],
      tips: ['Ensure proper blade alignment', 'Regularly check engine oil and fuel filters', 'Use safety gear during operation'],
      imagePrompt: 'A farmer operating a power tiller attached with a reaper cutting small plots of wheat, with neat rows of cut stalks.'
    }
  ]

  const manualTools = [
    {
      title: 'Sickle',
      content: 'A classic hand tool used for cutting grain, grass, or harvesting vegetables close to the ground. Extremely versatile for small-scale and intricate tasks.',
      advantages: ['Very low cost', 'No fuel or electricity needed', 'Precision cutting for delicate crops', 'Ideal for small plots and subsistence farming'],
      disadvantages: ['Highly labor-intensive', 'Slow operation rate', 'Causes physical strain and fatigue', 'Risk of cuts and injuries'],
      tips: ['Keep blade sharp for efficient cutting', 'Use proper posture to reduce back strain', 'Wear protective gloves'],
      imagePrompt: 'A close-up shot of a farmer\'s hand holding a sharp sickle, cutting rice stalks in a lush green paddy field.'
    },
    {
      title: 'Manual Thresher / Pedal Thresher',
      content: 'Used to separate grain from stalks after manual harvesting. Grains are beaten or rubbed against a drum or grill. Pedal threshers use foot power.',
      advantages: ['Affordable and easy to maintain', 'No electricity needed (pedal type)', 'Suitable for small quantities of grain', 'Prevents grain damage compared to rough beating'],
      disadvantages: ['Labor-intensive and slow', 'Low output capacity', 'Dusty operation, can cause respiratory issues'],
      tips: ['Ensure proper ventilation', 'Wear masks to avoid dust inhalation', 'Regularly clean internal parts'],
      imagePrompt: 'A farmer operating a pedal thresher, feeding bundles of wheat stalks into it, with separated grains collecting below.'
    },
    {
      title: 'Winnowing Fan / Basket',
      content: 'Traditional method to separate grain from chaff using wind. The mixture is tossed into the air, and lighter chaff blows away while heavier grain falls down.',
      advantages: ['Zero cost (if using baskets)', 'No power required', 'Simple and effective in windy conditions'],
      disadvantages: ['Highly weather-dependent (needs wind)', 'Slow and tedious for large volumes', 'Less efficient than mechanical winnowers'],
      tips: ['Perform on a clear, sunny, windy day', 'Use a large, flat surface for collection', 'Avoid strong gusts that scatter grain'],
      imagePrompt: 'A woman farmer winnowing grains using a traditional bamboo basket, tossing grains into the air, with chaff blowing away in the wind.'
    }
  ]

  const postHarvest = [
    {
      title: 'Cleaning and Grading',
      content: 'Removing impurities (stones, straw, unripe grains) and sorting grains by size, weight, or quality. Enhances market value and storage life.',
      advantages: ['Increases market price of produce', 'Improves storage quality and reduces spoilage', 'Meets quality standards for sale or processing', 'Removes contaminants harmful to health'],
      disadvantages: ['Requires additional equipment (sieve, grader) or labor', 'Time-consuming for large volumes', 'Can cause minor grain damage if not done carefully'],
      tips: ['Use appropriate sieve sizes for specific grains', 'Ensure thorough drying before cleaning', 'Store cleaned grains separately'],
      imagePrompt: 'A close-up of hands cleaning freshly harvested grains, removing small stones and debris, with clean grains in a pile.'
    },
    {
      title: 'Drying',
      content: 'Reducing moisture content to safe levels (e.g., 12-14% for most grains) to prevent mold growth, insect infestation, and spoilage during storage.',
      advantages: ['Crucial for long-term storage', 'Prevents significant post-harvest losses', 'Maintains grain quality (taste, appearance)', 'Inhibits pest and pathogen activity'],
      disadvantages: ['Can be time-consuming (sun drying)', 'Requires good weather conditions', 'Mechanical dryers are expensive', 'Over-drying can reduce grain quality'],
      tips: ['Spread grains thinly on clean mats or concrete', 'Turn regularly for even drying', 'Use moisture meters for accurate readings', 'Protect from rain and dew'],
      imagePrompt: 'A wide shot of farmers spreading freshly harvested paddy on a large concrete area under the sun for drying, with clear blue skies.'
    },
    {
      title: 'Storage Solutions',
      content: 'Storing grains in safe, dry, and pest-free conditions. Options range from traditional earthen pots to modern hermetic bags and silos.',
      advantages: ['Protects produce from pests, rodents, and moisture', 'Allows farmers to sell when prices are favorable', 'Ensures food security throughout the year', 'Preserves quality for consumption or seed'],
      disadvantages: ['Requires dedicated space and investment', 'Poor storage leads to significant losses', 'Risk of spoilage if moisture is not controlled'],
      tips: ['Ensure storage area is clean and dry', 'Use pest-proof containers (e.g., Pusa bin, metal bins)', 'Monitor for signs of pests or mold regularly', 'Treat grains with safe protectants if necessary'],
      imagePrompt: 'An interior shot of a well-organized farm storage facility with various types of grains stored in modern hermetic bags and traditional large earthen pots.'
    }
  ]

  return (
    <>
      {/* <Navbar /> */}
      <PageTemplate title="Harvesting Tools & Post-Harvest Handling">
        <div className="max-w-7xl mx-auto space-y-12 pb-20">
          
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-[2rem] border border-green-200 shadow-md"
          >
            <p className="text-xl font-semibold text-green-800 leading-relaxed text-center">
              The harvesting phase is where all your hard work comes to fruition. Proper tools and post-harvest care are vital to maximize yields and minimize losses, ensuring quality produce from farm to market.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex gap-4 flex-wrap justify-center border-b border-gray-200 pb-6">
            <TabButton label="Mechanized Harvesting" value="mechanized" activeTab={activeTab} setActiveTab={setActiveTab} icon={Combine} />
            <TabButton label="Manual & Small Tools" value="manual" activeTab={activeTab} setActiveTab={setActiveTab} icon={Hand} />
            <TabButton label="Post-Harvest Care" value="postHarvest" activeTab={activeTab} setActiveTab={setActiveTab} icon={Box} />
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {activeTab === 'mechanized' && (
                <>
                  <h2 className="text-4xl font-black text-gray-900 mb-6 text-center">Modern Efficiency</h2>
                  {mechanizedTools.map((tool, idx) => (
                    <ContentCard key={idx} {...tool} />
                  ))}
                </>
              )}

              {activeTab === 'manual' && (
                <>
                  <h2 className="text-4xl font-black text-gray-900 mb-6 text-center">Traditional & Versatile</h2>
                  {manualTools.map((tool, idx) => (
                    <ContentCard key={idx} {...tool} />
                  ))}
                </>
              )}

              {activeTab === 'postHarvest' && (
                <>
                  <h2 className="text-4xl font-black text-gray-900 mb-6 text-center">Value Preservation</h2>
                  {postHarvest.map((item, idx) => (
                    <ContentCard key={idx} {...item} />
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Harvesting Method Comparison */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-[2rem] border border-blue-200 shadow-lg mt-12">
            <h3 className="text-3xl font-black text-blue-800 mb-6 text-center flex items-center justify-center gap-3">
              <Leaf size={28} /> Method Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white rounded-xl shadow-md">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 rounded-tl-xl">Method</th>
                    <th className="p-4">Investment</th>
                    <th className="p-4">Speed</th>
                    <th className="p-4">Labor Required</th>
                    <th className="p-4 rounded-tr-xl">Ideal For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold">Combine Harvester</td>
                    <td className="p-4 text-red-600 font-medium">High</td>
                    <td className="p-4 text-green-600 font-medium">Very Fast</td>
                    <td className="p-4">Very Low</td>
                    <td className="p-4">Large Farms (Cereals)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold">Reaper-Binder</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">Medium (for bundling/threshing)</td>
                    <td className="p-4">Medium Farms</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold">Power Tiller Reaper</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">Medium-Slow</td>
                    <td className="p-4">Medium (for bundling/threshing)</td>
                    <td className="p-4">Small/Fragmented Farms</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Manual (Sickle/Thresher)</td>
                    <td className="p-4 text-green-600 font-medium">Very Low</td>
                    <td className="p-4 text-red-600 font-medium">Very Slow</td>
                    <td className="p-4">Very High</td>
                    <td className="p-4">Subsistence/Very Small Farms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-blue-700 font-semibold text-sm">
              Choosing the right tool depends on your farm size, crop type, and available labor.
            </p>
          </div>

          {/* Post-Harvest Loss Reduction Tips */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-[2rem] border border-purple-200 shadow-lg mt-12">
            <h3 className="text-3xl font-black text-purple-800 mb-6 text-center flex items-center justify-center gap-3">
              <Factory size={28} /> Minimize Post-Harvest Losses
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="font-bold text-lg text-purple-700 mb-3">During Harvesting:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Harvest at optimal maturity to prevent shattering or spoilage.</li>
                  <li>Avoid over-drying crops in the field (sun-cracking).</li>
                  <li>Minimize mechanical damage during combine operations.</li>
                  <li>Ensure clean collecting surfaces to prevent contamination.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-purple-700 mb-3">During Storage & Processing:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dry grains to the recommended moisture content before storage.</li>
                  <li>Use pest-resistant storage structures (e.g., hermetic bags, metal bins).</li>
                  <li>Regularly inspect stored grains for pests, mold, and rodents.</li>
                  <li>Proper ventilation in storage areas is crucial.</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-purple-700 font-semibold text-sm">
              Up to 20-30% of harvested produce can be lost due to poor post-harvest handling. Small improvements make a big difference!
            </p>
          </div>

        </div>
      </PageTemplate>
      <Footer />
    </>
  )
}

export default HarvestingTools