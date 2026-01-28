import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Sprout, ShieldCheck, Microscope, 
  Droplets, SunDim, Wrench, LayoutGrid, ChevronRight 
} from 'lucide-react';
import PageTemplate from './ui/PageTemplate';
import { useTheme } from '../Context/ThemeContext';

// Reusable Section Component to handle theme and spacing
const ChapterSection = ({ title, children, icon: Icon, isDark }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-[2rem] shadow-sm mb-8 border transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/50 border-gray-700 text-gray-200' 
        : 'bg-white border-gray-100 text-gray-800'
    }`}
  >
    <div className="flex items-center gap-3 mb-6">
      {Icon && <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Icon size={24} /></div>}
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-green-900'}`}>{title}</h2>
    </div>
    {children}
  </motion.section>
);

function Farming_chapter() {
  const { isDark } = useTheme();

  const farmingTechniques = [
    { name: "Aeroponics", path: "/farming_technique/aeroponics" },
    { name: "Agroforestry", path: "/farming_technique/agroforestry" },
    { name: "Aquaponics", path: "/farming_technique/aquaponics" },
    { name: "Commercial Farming", path: "/farming_technique/commercial-farming" },
    { name: "Dryland Farming", path: "/farming_technique/dryland-farming" },
    { name: "Extensive Farming", path: "/farming_technique/extensive-farming" },
    { name: "Hydroponics", path: "/farming_technique/hydroponics" },
    { name: "Intensive Farming", path: "/farming_technique/intensive-farming" },
    { name: "Mixed Farming", path: "/farming_technique/mixed-farming" },
    { name: "Organic Farming", path: "/farming_technique/organic-farming" },
    { name: "Pastoral Farming", path: "/farming_technique/pastoral-farming" },
    { name: "Permaculture", path: "/farming_technique/permaculture" },
    { name: "Plantation Farming", path: "/farming_technique/plantation-farming" },
    { name: "Precision Farming", path: "/farming_technique/precision-farming" },
    { name: "Shifting Cultivation", path: "/farming_technique/shifting-cultivation" },
    { name: "Subsistence Farming", path: "/farming_technique/subsistence-farming" },
    { name: "Urban Agriculture", path: "/farming_technique/urban-agriculture" },
    { name: "Vertical Farming", path: "/farming_technique/vertical-farming" }
  ];

  return (
    <PageTemplate title={'Introduction to Agriculture'}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Intro Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className={`p-8 rounded-[2.5rem] mb-12 text-center border-2 border-dashed ${
            isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'
          }`}
        >
          <p className="text-lg leading-relaxed max-w-3xl mx-auto italic opacity-90">
            "Agriculture is the foundation of human civilization. For beginners entering farming—especially from IT or Engineering—understanding these fundamentals is the bridge to becoming a smart farmer."
          </p>
        </motion.div>

        {/* 1. Definition */}
        <ChapterSection title="1. What Is Agriculture?" icon={BookOpen} isDark={isDark}>
          <p className="leading-relaxed">
            Agriculture is the science, art, and practice of growing plants and rearing animals. 
            Modern agriculture now integrates <b>AI, IoT sensors, and drone monitoring</b> to improve productivity and reduce risk.
          </p>
        </ChapterSection>

        {/* 2. Types of Farming - Grid Layout */}
        <ChapterSection title="2. Modern Techniques" icon={LayoutGrid} isDark={isDark}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {farmingTechniques.map((tech) => (
              <Link 
                key={tech.path} 
                to={tech.path}
                className={`p-4 rounded-xl border flex items-center justify-between group transition-all ${
                  isDark ? 'bg-gray-900/50 border-white/5 hover:border-emerald-500/50' : 'bg-gray-50 border-black/5 hover:border-emerald-500'
                }`}
              >
                <span className="font-medium">{tech.name}</span>
                <ChevronRight size={16} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </ChapterSection>

        {/* Diagram Reference */}
        

        {/* 3. Branches & Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ChapterSection title="3. Major Branches" icon={Microscope} isDark={isDark}>
            <ul className="space-y-3 text-sm">
              <li><b>Agronomy:</b> Field crops & soil management</li>
              <li><b>Horticulture:</b> Fruits, veggies & flowers</li>
              <li><b>Soil Science:</b> Nutrients & pH management</li>
              <li><b>Ag Engineering:</b> Machinery & automation</li>
            </ul>
          </ChapterSection>

          <ChapterSection title="4. Requirements" icon={Wrench} isDark={isDark}>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Droplets className="text-blue-500 shrink-0" />
                <p className="text-sm"><b>Irrigation:</b> Drip and sensor-based water management.</p>
              </div>
              <div className="flex gap-3">
                <SunDim className="text-yellow-500 shrink-0" />
                <p className="text-sm"><b>Climate:</b> Monitoring humidity and temperature for specific crops.</p>
              </div>
              <div className="flex gap-3">
                <Sprout className="text-emerald-500 shrink-0" />
                <p className="text-sm"><b>Soil Health:</b> Balancing N-P-K levels and micronutrients.</p>
              </div>
            </div>
          </ChapterSection>
        </div>

        {/* 5. Platform Features */}
        <ChapterSection title="5. How We Help You" icon={ShieldCheck} isDark={isDark}>
          <div className={`grid md:grid-cols-2 gap-6 p-6 rounded-2xl ${isDark ? 'bg-black/20' : 'bg-emerald-50/50'}`}>
            <ul className="space-y-2 list-inside list-disc marker:text-emerald-500">
              <li>AI-powered disease detection</li>
              <li>Automatic pesticide recommendations</li>
              <li>Soil health guidance</li>
            </ul>
            <ul className="space-y-2 list-inside list-disc marker:text-emerald-500">
              <li>Seasonal crop planning</li>
              <li>Market analysis for growth</li>
              <li>Beginner-friendly visuals</li>
            </ul>
          </div>
        </ChapterSection>

        {/* Closing CTA */}
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-4">Ready to start your first crop?</h3>
          <Link 
            to="/nav/soil" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Start with Soil Health <ChevronRight size={20} />
          </Link>
        </div>

      </div>
    </PageTemplate>
  );
}

export default Farming_chapter;