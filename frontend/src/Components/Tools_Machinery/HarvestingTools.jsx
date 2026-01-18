import React from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/harvesting.svg'

function HarvestingTools() {
  const intro = 'Overview of harvesting tools and post-harvest handling to reduce losses.'

  return (
    <PageTemplate title={'Harvesting Tools'} >
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Common Harvesting Machines</h2>
        <ul className="list-disc pl-6">
          <li>Combine Harvester — for cereals</li>
          <li>Reaper-Binder — small to medium farms</li>
          <li>Threshers & Manual Tools — for small-scale operations</li>
        </ul>
      </div>
    </PageTemplate>
  )
}

export default HarvestingTools
