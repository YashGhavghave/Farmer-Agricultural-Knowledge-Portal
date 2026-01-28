import React, { useState } from 'react'
import ModelTemplate from './ModelTemplate.jsx'

export default function Chana(){
  const [inputs, setInputs] = useState({ soilPH:'7.0', rainfall:'200', season:'Kharif' })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const runModel = async ()=>{
    // Placeholder: call your AI backend here
    setLoading(true)
    setTimeout(()=>{
      setResult({ score: Math.random().toFixed(2), suggestion: 'Apply 20kg N/ha and ensure irrigation' })
      setLoading(false)
    },700)
  }

  return (
    <ModelTemplate title="Chana Model" description="Predict growth, diseases and fertilizer suggestions for Chana (chickpea).">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Soil pH</label>
          <input value={inputs.soilPH} onChange={(e)=>setInputs({...inputs, soilPH:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rainfall (mm)</label>
          <input value={inputs.rainfall} onChange={(e)=>setInputs({...inputs, rainfall:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Season</label>
          <select value={inputs.season} onChange={(e)=>setInputs({...inputs, season:e.target.value})} className="mt-1 block w-full rounded-md border px-3 py-2">
            <option>Kharif</option>
            <option>Rabi</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={runModel} className="px-4 py-2 bg-emerald-600 text-white rounded shadow hover:bg-emerald-700">Run Model</button>
        {loading && <span className="text-sm text-gray-500">Running...</span>}
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
