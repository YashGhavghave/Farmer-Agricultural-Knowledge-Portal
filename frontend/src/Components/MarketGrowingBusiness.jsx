import React from 'react'
import PageTemplate from './ui/PageTemplate'
import hero from '../assets/market.svg'

function MarketGrowingBusiness() {
  const intro = 'Market insights, pricing strategies, and value-add ideas to grow farm business.'

  return (
    <PageTemplate title={'Market & Growing Business'} >
      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Crop Selection & Market Fit</h2>
        <p>Choose crops based on local demand, seasonality and profitability.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Value Addition & Packaging</h2>
        <p>Simple post-harvest processing, sorting and packaging to increase sale value.</p>
      </section>
    </PageTemplate>
  )
}

export default MarketGrowingBusiness
