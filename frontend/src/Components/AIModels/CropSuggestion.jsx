import React, { useState } from 'react'
import ModelTemplate from './ModelTemplate.jsx'

export default function CropSuggestion(){
  const [inputs, setInputs] = useState({ location:'', soilPH:'7.0', season:'Kharif' })
  const [result, setResult] = useState(null)

  const runModel = ()=>{
    // placeholder for suggestion engine
    setResult({ crops: ['Chana', 'Soyabean'], reason: 'Suitable rainfall and soil pH' })
  }

  return (
    <ModelTemplate title="Crop Suggestion" description="Suggest best crops for a given location, soil and season using AI-driven models.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input value={inputs.location} onChange={(e)=>setInputs({...inputs, location:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Soil pH</label>
          <input value={inputs.soilPH} onChange={(e)=>setInputs({...inputs, soilPH:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
      </div>

      <div className="mt-6">
        <button onClick={runModel} className="px-4 py-2 bg-emerald-600 text-white rounded">Get Suggestions</button>
      </div>

      {result && (
        <div className="mt-6 bg-gray-50 border rounded p-4">
          <h4 className="font-semibold">Suggested Crops</h4>
          <ul className="list-disc pl-6 mt-2">
            {result.crops.map(c=> <li key={c}>{c}</li>)}
          </ul>
          <p className="mt-2 text-sm text-gray-600">Reason: {result.reason}</p>
        </div>
      )}
    </ModelTemplate>
  )
}
