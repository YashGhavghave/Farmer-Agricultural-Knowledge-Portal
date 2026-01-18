import React from 'react'
import PageTemplate from './ui/PageTemplate'
import hero from '../assets/about.svg'

function About() {
  const intro = 'Learn about our platform and mission to empower farmers with knowledge and technology.'

  return (
    <PageTemplate title={'About Us'} >
      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Our Mission</h2>
        <p>Empowering farmers through accessible, science-backed agricultural knowledge and modern farming techniques.</p>
      </section>

        <section className="bg-white p-6 rounded-2xl shadow mt-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Indian Agricultural Sectors — Overview</h2>
          <p className="mb-4">Agriculture in India is a multi-sectoral system that includes crop production, horticulture, livestock, fisheries, forestry, and allied activities. It supports livelihoods for around 50% of the population and remains a key driver of rural economies.</p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-green-700">Crop Production</h3>
              <p className="text-sm">Major subsectors: cereals (rice, wheat, maize), pulses, oilseeds, and commercial crops (sugarcane, cotton). Dominated by small and marginal farmers who account for most landholdings.</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Horticulture & Plantation</h3>
              <p className="text-sm">Horticulture (fruits, vegetables, flowers, spices) is the fastest-growing segment and a major source of farm income. Plantation crops include tea, coffee, rubber, and coconut.</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Livestock & Dairy</h3>
              <p className="text-sm">Dairy, poultry, and small ruminants provide year-round income and are important for nutrition. India is one of the world's largest milk producers, driven by smallholders and cooperatives.</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Fisheries & Aquaculture</h3>
              <p className="text-sm">Coastal and inland fisheries contribute significant export earnings and rural employment. Aquaculture (fish farming) has expanded rapidly with improved feeds and pond management.</p>
            </div>
          </div>

          <h3 className="font-semibold text-green-700 mt-4">Key Characteristics & Challenges</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Predominance of smallholder farms — fragmented landholdings limit economies of scale.</li>
            <li>Seasonal and monsoon-dependent cropping — water management and irrigation are critical.</li>
            <li>Supply chain gaps — post-harvest losses and limited cold chain for perishables.</li>
            <li>Policy support — MSP, subsidies, and extension services shape cropping decisions.</li>
          </ul>

          <h3 className="font-semibold text-green-700 mt-4">Opportunities</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Horticulture and value-addition for higher farmer incomes.</li>
            <li>Precision farming, climate-smart practices, and digital advisory services.</li>
            <li>Organics and export-oriented production for premium markets.</li>
          </ul>
        </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Our Vision</h2>
        <p>Creating a thriving agricultural community where every farmer has access to tools, knowledge, and support for sustainable and profitable farming.</p>
      </section>
    </PageTemplate>
  )
}

export default About
