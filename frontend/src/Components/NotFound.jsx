import React from 'react'
import { Link } from 'react-router-dom'
import PageTemplate from './ui/PageTemplate'

export default function NotFound() {
  return (
    <PageTemplate title="Page Not Found" intro="The page you're looking for doesn't exist.">
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">404 — Not Found</h2>
        <p className="mb-6">We couldn't find the page you requested.</p>
        <Link to="/" className="px-4 py-2 bg-green-600 text-white rounded">Go home</Link>
      </div>
    </PageTemplate>
  )
}
