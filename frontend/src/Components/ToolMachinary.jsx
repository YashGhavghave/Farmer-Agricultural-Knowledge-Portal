import React from 'react'
import PageTemplate from './ui/PageTemplate'
import hero from '../assets/tools.svg'

function ToolMachinary() {
  const intro = 'Modern farm tools, selection tips, and maintenance guidance to improve efficiency.'

  return (
    <PageTemplate title={'Tools & Machinery'} >
      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Soil Preparation Tools</h2>
        <p>Ploughs, rotavators, and tillers — choose based on farm size and crop requirements.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Irrigation Equipment</h2>
        <p>Drip vs sprinkler systems, pump selection, and water-saving best practices.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Harvesting & Post-harvest Tools</h2>
        <p>Combine harvesters, threshers and proper storage practices to reduce losses.</p>
      </section>
    </PageTemplate>
  )
}

export default ToolMachinary
