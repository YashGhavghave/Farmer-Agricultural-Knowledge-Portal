import React from 'react'
import { Link } from 'react-router-dom'
import PageTemplate from '../ui/PageTemplate.jsx'

export default function AIIndex(){
  const models = [
    { key: 'chana', title: 'Chana (Chickpea) Model' },
    { key: 'cotton', title: 'Cotton Model' },
    { key: 'tur', title: 'Tur (Pigeon Pea) Model' },
    { key: 'soyabean', title: 'Soyabean Model' },
    { key: 'crop-suggestion', title: 'Crop Suggestion' },
  ]

  return (
    <PageTemplate title="AI Models" intro="AI-assisted models for crop diagnosis, yield prediction and suggestions. These tools are designed for engineers coming from IT — clear inputs, explainable outputs, and integration points for your own models.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {models.map(m => (
          <Link key={m.key} to={`/ai/${m.key}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700">{m.title}</h3>
            <p className="mt-2 text-sm text-gray-600">Click to open the integration page for the {m.title} — here you can test inputs, view model outputs, and integrate your AI model endpoints.</p>
          </Link>
        ))}
      </div>
    </PageTemplate>
  )
}
