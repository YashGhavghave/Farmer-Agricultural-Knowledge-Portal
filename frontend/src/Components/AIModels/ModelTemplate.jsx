import React from 'react'
import PageTemplate from '../ui/PageTemplate.jsx'

export default function ModelTemplate({ title, children, description }){
  return (
    <PageTemplate title={title} intro={description}>
      <div className="bg-white rounded-lg shadow p-6">
        {children}
      </div>
    </PageTemplate>
  )
}
