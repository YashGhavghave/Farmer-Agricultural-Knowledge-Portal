import React from 'react'
import PageTemplate from './ui/PageTemplate'
import hero from '../assets/soil.svg'

function Soil() {
  const intro = 'Soil types, testing, amendments and practical tips to keep fields healthy and productive.'

  return (
    <PageTemplate title={'Soil Health & Management'} >
      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Soil Types & Texture</h2>
        <p>Learn to identify loam, clay, sandy, and silt soils and their water-holding capacities.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Soil Testing</h2>
        <p>How to collect soil samples, interpret test reports, and adjust fertilizer plans based on results.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Soil Amendments & Organic Matter</h2>
        <p>Compost, green manures, and lime recommendations for balanced pH and improved structure.</p>
      </section>
    </PageTemplate>
  )
}

export default Soil
