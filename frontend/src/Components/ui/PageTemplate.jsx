import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../footer.jsx'
import { useTheme } from '../../Context/ThemeContext.jsx';

function PageTemplate({ title, hero, intro, children }) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[#0f172a] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />

      {/* Hero Section */}
      <header className={`relative overflow-hidden border-b transition-colors duration-500 ${
        isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-emerald-500' : 'bg-green-200'
          }`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {hero && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src={hero} 
                  alt={title} 
                  className="relative w-64 h-48 md:w-80 md:h-60 object-cover rounded-[2rem] shadow-2xl" 
                />
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-center md:text-left"
            >
              <nav className="mb-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-green-600">
                <span className="opacity-50">Agriculture</span>
                <span className="opacity-50">/</span>
                <span>{title}</span>
              </nav>
              <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {title}<span className="text-green-600">.</span>
              </h1>
              {intro && (
                <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {intro}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default PageTemplate