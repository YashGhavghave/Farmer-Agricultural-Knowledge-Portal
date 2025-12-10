import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './footer.jsx';

function Farming_chapter() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-7">

        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Introduction to Agriculture
        </h1>

        {/* Intro Paragraph */}
        <p className="mb-6">
          Agriculture is the foundation of human civilization. It involves the
          cultivation of crops, management of soil, raising of animals, and the
          use of technology to produce food, fiber, and raw materials. For
          beginners entering farming—especially those from engineering, IT, or
          non-agriculture backgrounds—understanding these fundamentals is the
          first and most important step. This chapter provides a complete and
          easy-to-understand introduction to agriculture, helping you build a
          strong base before exploring deeper chapters.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          1. What Is Agriculture?
        </h2>
        <p>
          Agriculture is the science, art, and practice of growing plants and
          rearing animals for human use. It includes several essential
          activities such as soil preparation, seed selection, irrigation,
          fertilization, pest and disease control, crop harvesting, storage,
          and post-harvest processing. Modern agriculture now integrates AI,
          Machine Learning, IoT sensors, weather prediction, and drone-based
          monitoring to improve productivity and reduce risk.
        </p>


        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          2. Types of Farming
        </h2>
        <div className="flex flex-col text-blue-500">
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

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          3. Importance of Agriculture
        </h2>
        <ul className="list-disc pl-6">
          <li>A primary source of food for the global population</li>
          <li>Provides raw materials for industries like textiles, oil, sugar, paper</li>
          <li>Major employment source—especially in developing countries</li>
          <li>Supports trade, exports, and strengthens the economy</li>
          <li>Maintains ecological balance and biodiversity</li>
          <li>Vital for national food security and self-sufficiency</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          4. Branches of Agriculture
        </h2>
        <p> Agriculture is a broad field divided into many specialized branches: </p>
        <ul className="list-disc pl-6 mt-2">
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

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          5. Basic Requirements for Farming
        </h2>

        <h3 className="text-xl font-semibold mt-4">a) Soil</h3>
        <p>
          Soil is the foundation of agriculture. Different crops grow best in
          different soil types. Understanding soil structure, texture, pH,
          nutrients, and water-holding capacity helps farmers plan their fields.
        </p>

        <h3 className="text-xl font-semibold mt-4">b) Water / Irrigation</h3>
        <p>
          Plants require water for photosynthesis and nutrient transport.
          Irrigation systems include drip, sprinkler, flood, furrow, and modern
          sensor-based irrigation.
        </p>

        <h3 className="text-xl font-semibold mt-4">c) Climate</h3>
        <p>
          Temperature, sunlight, humidity, wind, and rainfall affect plant
          growth. Each crop has a specific climatic requirement—for example,
          cotton thrives in high temperatures, while wheat prefers cooler
          weather.
        </p>

        <h3 className="text-xl font-semibold mt-4">d) Seeds</h3>
        <p>
          High-quality seeds are essential for achieving higher yields and
          disease resistance. Seeds can be hybrid, genetically improved, or
          traditional varieties depending on crop and region.
        </p>

        <h3 className="text-xl font-semibold mt-4">e) Fertilizers & Nutrients</h3>
        <p>
          Plants require nitrogen (N), phosphorus (P), potassium (K), and
          micronutrients such as zinc, sulfur, and magnesium. These are
          supplied through organic sources (compost, manure) or chemical
          fertilizers.
        </p>

        <h3 className="text-xl font-semibold mt-4">f) Pest & Disease Management</h3>
        <p>
          Crops often suffer from fungal, bacterial, viral, and insect-related
          issues. Timely diagnosis and treatment using pesticides, biological
          control, and AI-based disease detection tools reduces crop loss.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          6. Types of Farming
        </h2>
        <ul className="list-disc pl-6">
          <li><b>Subsistence Farming:</b> Growing crops for personal/family use</li>
          <li><b>Commercial Farming:</b> Large-scale farming for profit and markets</li>
          <li><b>Mixed Farming:</b> Combination of crops + livestock</li>
          <li><b>Organic Farming:</b> No chemicals; natural fertilizers and pest control</li>
          <li><b>Intensive Farming:</b> Maximum output from limited land</li>
          <li><b>Extensive Farming:</b> Low input, large land area farming</li>
          <li><b>Precision Farming:</b> AI, sensors, drones, ML models to improve yield</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          7. Key Challenges Faced by Beginners
        </h2>
        <ul className="list-disc pl-6">
          <li>Lack of knowledge about soil properties and crop suitability</li>
          <li>Unawareness of seasonal crop patterns</li>
          <li>Improper fertilizer usage leading to nutrient imbalance</li>
          <li>Incorrect pesticide selection causing crop damage</li>
          <li>Fear of financial loss from diseases or climate conditions</li>
          <li>Lack of access to expert guidance and scientific farming practices</li>
          <li>Difficulty identifying plant diseases</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-bold text-green-800 mt-10 mb-3">
          8. How Our Platform Helps Beginners
        </h2>
        <p>
          Our platform is designed to simplify farming for beginners and modern
          learners. We integrate AI, machine learning, and practical farming
          knowledge to support every stage of crop production.
        </p>

        <ul className="list-disc pl-6 mt-2">
          <li>Chapter-based learning for step-by-step understanding</li>
          <li>AI-powered plant disease detection</li>
          <li>Automatic pesticide recommendations</li>
          <li>Soil health guidance and fertilizer suggestions</li>
          <li>Seasonal crop planning support</li>
          <li>Market analysis and business growth strategies</li>
          <li>Beginner-friendly language and visuals for quick learning</li>
        </ul>

        <p className="mt-8 mb-12">
          With the right knowledge, tools, and modern AI integration, anyone
          from any background can become a successful farmer. This chapter marks
          the beginning of your journey toward smart, scientific, and profitable
          farming.
        </p>

      </div>

      <Footer />
    </div>
  )
}

export default Farming_chapter
