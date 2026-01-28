import React, { useState } from 'react'
import ModelTemplate from './ModelTemplate.jsx'

export default function Cotton(){
  const [inputs, setInputs] = useState({ variety:'BT', area:'1', irrigation:'normal' })
  const [result, setResult] = useState(null)

  const runModel = ()=>{
    setResult({ score: (0.6 + Math.random()*0.3).toFixed(2), suggestion: 'Use drip irrigation and monitor pests weekly.' })
  }

  return (
    <ModelTemplate title="Cotton Model" description="Yield estimates and pest risk for cotton varieties.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Variety</label>
          <input value={inputs.variety} onChange={(e)=>setInputs({...inputs, variety:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Area (ha)</label>
          <input value={inputs.area} onChange={(e)=>setInputs({...inputs, area:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
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
