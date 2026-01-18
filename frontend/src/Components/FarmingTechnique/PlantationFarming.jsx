import React from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

function PlantationFarming() {
  const intro = 'Large-scale cultivation of single crops like tea, coffee, rubber and palm.'

  return (
    <PageTemplate title={'Plantation Farming'} >
      <div className="container mt-4">
        <h1 className="mb-4">Plantation Farming</h1>
      </div>
    </PageTemplate>
  )
}

export default PlantationFarming
