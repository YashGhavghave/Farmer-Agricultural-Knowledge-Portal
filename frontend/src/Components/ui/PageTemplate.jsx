import React from 'react'
import Navbar from '../Navbar'
import Footer from '../footer.jsx'
import { useTheme } from '../../Context/ThemeContext.jsx';


function PageTemplate({ title, hero, intro, children })
{
   const { isDark } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50" style={isDark ? { backgroundColor: '#1f2937' } : { backgroundColor: '#ffffff' }}>
      <Navbar />

      <header className="bg-white border-b border-gray-200" style={isDark ? { backgroundColor: '#1f2937' } : { backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center gap-6" style={isDark ? { backgroundColor: '#1f2937' } : { backgroundColor: '#ffffff' }}>
          {hero && (
            <img src={hero} alt={title} className="w-48 h-36 object-cover rounded-lg shadow" />
          )}

          <div>
            <h1 className="text-4xl font-bold text-green-700">{title}</h1>
            {intro && <p className="mt-2 text-gray-700 max-w-2xl">{intro}</p>}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default PageTemplate
