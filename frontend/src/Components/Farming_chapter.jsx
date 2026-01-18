import React from 'react'
import { Link } from 'react-router-dom';
import PageTemplate from './ui/PageTemplate'
import hero from '../assets/farming.svg'
import { useTheme } from '../Context/ThemeContext';


function Farming_chapter() {
    const { isDark } = useTheme();
  const intro = 'Complete beginner guide to agriculture, farming techniques, and becoming a smart farmer.'

  return (
    <PageTemplate title={'Introduction to Agriculture'}  className={isDark ? 'dark-classes' : 'light-classes'}>
      <div className="text-gray-800 leading-7"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
        {/* Intro Paragraph */}
        <p className="mb-6 p-6 rounded-2xl shadow" style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          Agriculture is the foundation of human civilization. It involves the
          cultivation of crops, management of soil, raising of animals, and the
          use of technology to produce food, fiber, and raw materials. For
          beginners entering farming—especially those from engineering, IT, or
          non-agriculture backgrounds—understanding these fundamentals is the
          first and most important step. This chapter provides a complete and
          easy-to-understand introduction to agriculture, helping you build a
          strong base before exploring deeper chapters.
        </p>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          1. What Is Agriculture?
        </h2>
        <p>
          Agriculture is the science, art, and practice of growing plants and rearing animals for human use. It includes several essential
          activities such as soil preparation, seed selection, irrigation,
          fertilization, pest and disease control, crop harvesting, storage,
          and post-harvest processing. Modern agriculture now integrates AI,
          Machine Learning, IoT sensors, weather prediction, and drone-based
          monitoring to improve productivity and reduce risk.
        </p>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          2. Types of Farming
        </h2>
        <div className="flex flex-col text-blue-500"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <Link to="/farming_technique/aeroponics">:- What is Aeroponics Farming?</Link>
          <Link to="/farming_technique/agroforestry">:- What is Agroforestry Farming?</Link>
          <Link to="/farming_technique/aquaponics">:- What is Aquaponics Farming?</Link>
          <Link to="/farming_technique/hydroponics">:- What is Hydroponics Farming?</Link>
          <Link to="/farming_technique/organic-farming">:- What is Organic Farming?</Link>
          <Link to="/farming_technique/subsistence-farming">:- What is Subsistence Farming?</Link>
          <Link to="/farming_technique/commercial-farming">:- What is Commercial Farming?</Link>
          <Link to="/farming_technique/mixed-farming">:- What is Mixed Farming?</Link>
          <Link to="/farming_technique/intensive-farming">:- What is Intensive Farming?</Link>
          <Link to="/farming_technique/extensive-farming">:- What is Extensive Farming?</Link>
          <Link to="/farming_technique/precision-farming">:- What is Precision Farming?</Link>
          <Link to="/farming_technique/vertical-farming">:- What is Vertical Farming?</Link>
          <Link to="/farming_technique/urban-agriculture">:- What is Urban Farming?</Link>
          <Link to="/farming_technique/permaculture">:- What is Permaculture Farming?</Link>
          <Link to="/farming_technique/plantation-farming">:- What is Plantation Farming?</Link>
          <Link to="/farming_technique/shifting-cultivation">:- What is Shifting Cultivation Farming?</Link>
          <Link to="/farming_technique/dryland-farming">:- What is Dryland Farming?</Link>
          <Link to="/farming_technique/pastoral-farming">:- What is Pastoral Farming?</Link>
        </div>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          3. Importance of Agriculture
        </h2>
        <ul className="list-disc pl-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <li>A primary source of food for the global population</li>
          <li>Provides raw materials for industries like textiles, oil, sugar, paper</li>
          <li>Major employment source—especially in developing countries</li>
          <li>Supports trade, exports, and strengthens the economy</li>
          <li>Maintains ecological balance and biodiversity</li>
          <li>Vital for national food security and self-sufficiency</li>
        </ul>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          4. Branches of Agriculture
        </h2>
        <p> Agriculture is a broad field divided into many specialized branches: </p>
        <ul className="list-disc pl-6 mt-2"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <li><b>Agronomy:</b> Field crop production, soil management, irrigation</li>
          <li><b>Horticulture:</b> Fruits, vegetables, flowers, medicinal plants</li>
          <li><b>Animal Husbandry:</b> Rearing cattle, goats, poultry, dairy animals</li>
          <li><b>Soil Science:</b> Nutrients, soil types, pH, fertility improvement</li>
          <li><b>Plant Pathology:</b> Study of plant diseases & pests</li>
          <li><b>Entomology:</b> Study of insects affecting plants</li>
          <li><b>Agricultural Engineering:</b> Machinery, tools, irrigation systems</li>
          <li><b>Agricultural Economics:</b> Farm planning, cost analysis, marketing</li>
          <li><b>Agroforestry:</b> Integrated trees + crops farming systems</li>
          <li><b>Organic Farming:</b> Natural, chemical-free agriculture</li>
        </ul>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          5. Basic Requirements for Farming
        </h2>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>a) Soil</h3>
        <p>
          Soil is the foundation of agriculture. Different crops grow best in
          different soil types. Understanding soil structure, texture, pH, nutrients, and water-holding capacity helps farmers plan their fields.
        </p>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>b) Water / Irrigation</h3>
        <p>
          Plants require water for photosynthesis and nutrient transport.
          Irrigation systems include drip, sprinkler, flood, furrow, and modern sensor-based irrigation.
        </p>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>c) Climate</h3>
        <p>
          Temperature, sunlight, humidity, wind, and rainfall affect plant
          growth. Each crop has a specific climatic requirement—for example,
          cotton thrives in high temperatures, while wheat prefers cooler weather.
        </p>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>d) Seeds</h3>
        <p>
          High-quality seeds are essential for achieving higher yields and
          disease resistance. Seeds can be hybrid, genetically improved, or traditional varieties depending on crop and region.
        </p>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>e) Fertilizers & Nutrients</h3>
        <p>
          Plants require nitrogen (N), phosphorus (P), potassium (K), and
          micronutrients such as zinc, sulfur, and magnesium. These are supplied through organic sources (compost, manure) or chemical fertilizers.
        </p>

        <h3 className="text-xl font-semibold mt-4"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>f) Pest & Disease Management</h3>
        <p>
          Crops often suffer from fungal, bacterial, viral, and insect-related
          issues. Timely diagnosis and treatment using pesticides, biological control, and AI-based disease detection tools reduces crop loss.
        </p>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          6. Types of Farming
        </h2>
        <ul className="list-disc pl-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <li><b>Subsistence Farming:</b> Growing crops for personal/family use</li>
          <li><b>Commercial Farming:</b> Large-scale farming for profit and markets</li>
          <li><b>Mixed Farming:</b> Combination of crops + livestock</li>
          <li><b>Organic Farming:</b> No chemicals; natural fertilizers and pest control</li>
          <li><b>Intensive Farming:</b> Maximum output from limited land</li>
          <li><b>Extensive Farming:</b> Low input, large land area farming</li>
          <li><b>Precision Farming:</b> AI, sensors, drones, ML models to improve yield</li>
        </ul>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          7. Key Challenges Faced by Beginners
        </h2>
        <ul className="list-disc pl-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <li>Lack of knowledge about soil properties and crop suitability</li>
          <li>Unawareness of seasonal crop patterns</li>
          <li>Improper fertilizer usage leading to nutrient imbalance</li>
          <li>Incorrect pesticide selection causing crop damage</li>
          <li>Fear of financial loss from diseases or climate conditions</li>
          <li>Lack of access to expert guidance and scientific farming practices</li>
          <li>Difficulty identifying plant diseases</li>
        </ul>
  </section>

  <section className="bg-white p-6 rounded-2xl shadow mb-6"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
  <h2 className="text-2xl font-semibold text-green-800 mb-3"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          8. How Our Platform Helps Beginners
        </h2>
        <p>
          Our platform is designed to simplify farming for beginners and modern
          learners. We integrate AI, machine learning, and practical farming
          knowledge to support every stage of crop production.
        </p>

        <ul className="list-disc pl-6 mt-2"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          <li>Chapter-based learning for step-by-step understanding</li>
          <li>AI-powered plant disease detection</li>
          <li>Automatic pesticide recommendations</li>
          <li>Soil health guidance and fertilizer suggestions</li>
          <li>Seasonal crop planning support</li>
          <li>Market analysis and business growth strategies</li>
          <li>Beginner-friendly language and visuals for quick learning</li>
        </ul>

        <p className="mt-8 mb-12"style={isDark ? { backgroundColor: '#1f2937', color:"white" } : { backgroundColor: '#ffffff' }}>
          With the right knowledge, tools, and modern AI integration, anyone
          from any background can become a successful farmer. This chapter marks
          the beginning of your journey toward smart, scientific, and profitable
          farming.
        </p>
        </section>
      </div>
    </PageTemplate>
  )
}

export default Farming_chapter
