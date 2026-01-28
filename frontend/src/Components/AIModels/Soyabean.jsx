import React, { useState } from 'react'
import ModelTemplate from './ModelTemplate.jsx'

export default function Soyabean(){
  const [inputs, setInputs] = useState({ variety:'Local', plantingDensity:'30' })
  const [result, setResult] = useState(null)

  const runModel = ()=>{
    setResult({ score: (0.55 + Math.random()*0.35).toFixed(2), suggestion: 'Optimize planting density and monitor for leaf spot.' })
  }

  return (
    <ModelTemplate title="Soyabean Model" description="Suggestions and risk analysis for Soyabean crops.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Variety</label>
          <input value={inputs.variety} onChange={(e)=>setInputs({...inputs, variety:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Planting Density (plants/m2)</label>
          <input value={inputs.plantingDensity} onChange={(e)=>setInputs({...inputs, plantingDensity:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
      </div>

      <div className="mt-6">
        <button onClick={runModel} className="px-4 py-2 bg-emerald-600 text-white rounded">Run Model</button>
      </div>

      {result && (
        <div className="mt-6 bg-gray-50 border rounded p-4">
          <h4 className="font-semibold">Result</h4>
          <p className="mt-2">Confidence: <strong>{result.score}</strong></p>
          <p className="mt-1">Suggestion: {result.suggestion}</p>
        </div>
      )}
    </ModelTemplate>
  )
}
