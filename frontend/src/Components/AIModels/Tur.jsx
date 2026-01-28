import React, { useState } from 'react'
import ModelTemplate from './ModelTemplate.jsx'

export default function Tur(){
  const [inputs, setInputs] = useState({ soilType:'Loamy', sowingDate:'2026-06-01' })
  const [result, setResult] = useState(null)

  const runModel = ()=>{
    setResult({ score: (0.5 + Math.random()*0.45).toFixed(2), suggestion: 'Ensure balanced fertilization; schedule irrigation.' })
  }

  return (
    <ModelTemplate title="Tur Model" description="Assessment and management suggestions for Tur (pigeon pea).">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Soil Type</label>
          <input value={inputs.soilType} onChange={(e)=>setInputs({...inputs, soilType:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sowing Date</label>
          <input type="date" value={inputs.sowingDate} onChange={(e)=>setInputs({...inputs, sowingDate:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
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
