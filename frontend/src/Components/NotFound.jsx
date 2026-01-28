import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import PageTemplate from './ui/PageTemplate';

export default function NotFound() {
  return (
    <PageTemplate 
      title="Lost in the Field?" 
      intro="It seems this path hasn't been plowed yet."
    >
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        {/* Animated 404 Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-emerald-100 p-6 rounded-full shadow-inner">
                <Search size={64} className="text-emerald-600 animate-pulse" />
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            The resource you're looking for might have been moved, deleted, or 
            perhaps it never existed in our database. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-105 transition-all"
            >
              <Home size={20} />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Helpful Links Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-left">
           {[
             { label: "Check Guides", link: "/guides", icon: <HelpCircle className="text-blue-500" /> },
             { label: "Soil Analysis", link: "/soil-prep", icon: <Search className="text-orange-500" /> },
             { label: "Community", link: "/community", icon: <Home className="text-purple-500" /> }
           ].map((item, i) => (
             <Link 
               key={i} 
               to={item.link}
               className="p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-shadow group"
             >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{item.label}</h4>
                <p className="text-xs text-gray-400 mt-1">Visit our {item.label.toLowerCase()} section.</p>
             </Link>
           ))}
        </div>
      </div>
    </PageTemplate>
  );
}