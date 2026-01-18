import React from "react";
import PageTemplate from "./ui/PageTemplate";
import hero from "../assets/fertilizer.svg";

function Fertilizers() {
  const intro =
    "Understand N-P-K, grades, types, and best practices for safe and efficient fertilizer use.";

  return (
    <PageTemplate title={"Fertilizers: The Essential Guide"} >
      {/* Existing content moved into template children */}

      <p className="text-lg mb-8 leading-relaxed">
        A fertilizer is any natural or synthetic material added to soil or plant tissues to supply essential nutrients required for plant growth. Fertilizers correct nutrient deficiencies, improve crop health, and enhance agricultural productivity.

        Fertilizers supply essential nutrients that plants need for healthy
        growth. Whether natural or synthetic, understanding fertilizer types,
        nutrient ratios, and proper use is key to improving yield and maintaining
        soil health.
      </p>

      {/*        * SECTION 1        * */}
      <section className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          1. Fertilizer Grade, Ratio, and N-P-K
        </h2>

        {/* 1.1 Grade */}
        <h3 className="text-xl font-semibold mb-2">1.1 What Is Fertilizer Grade?</h3>
        <p className="mb-4">
          <b>Fertilizer Grade</b> refers to the guaranteed percentage of
          <b> Nitrogen (N)</b>, <b>Phosphorus (P₂O₅)</b>, and
          <b> Potassium (K₂O)</b> in a fertilizer.
          <br />
          Always listed in  N–P–K  order.
        </p>

        <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          Example: A fertilizer bag labeled <b>28–28–0</b> contains
          28% Nitrogen, 28% Phosphorus, and 0% Potassium .
        </p>

        {/* 1.3 Ratio */}
        <h3 className="text-xl font-semibold mt-6 mb-2">1.3 Types of Fertilizers</h3>

        <div className="bg-green-50 p-4 pl-6 mt-3 rounded-lg border-l-4 border-green-500">
          <ul className="list-disc pl-6">
            <li>Chemical (Inorganic) fertilizers</li>
            <li>Organic fertilizers</li>
            <li>Biofertilizers</li>
            <li>Customized and fortified fertilizers</li>
            <li>Slow-release and controlled-release fertilizers</li>
          </ul>
        </div>
      </section>

      {/*        * SECTION 2        * */}
      <section className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          2. Classification of Fertilizers
        </h2>

        {/* 2.1 Based on Composition */}
        <h3 className="text-xl font-semibold mb-3">
          2.1 Based on Nutrient Content (Composition)
        </h3>

        {/* TABLE */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-white shadow rounded-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">Straight Fertilizers</td>
                <td className="p-3">Supply only one primary plant nutrient.</td>
                <td className="p-3">Urea, Ammonium Sulphate</td>
              </tr>

              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">Complex Fertilizers</td>
                <td className="p-3">Contain 2–3 nutrients chemically combined.</td>
                <td className="p-3">DAP, Nitrophosphates</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="p-3 font-semibold">Mixed Fertilizers</td>
                <td className="p-3">Physical mixtures of straight fertilizers.</td>
                <td className="p-3">Custom NPK blends</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2.2 Physical Form */}
        <h3 className="text-xl font-semibold mb-3">2.2 Based on Physical Form</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Solid Fertilizers (Granules, Prills, Crystals)</li>
          <li>Liquid Fertilizers (easy mixing, uniform application)</li>
        </ul>
      </section>

      {/*        * SECTION 3        * */}
      <section className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          3. 🇮🇳 Key Fertilizer Grades Used in Indian Agriculture
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">Grade</th>
                <th className="p-3 text-left">Use & Benefits</th>
                <th className="p-3 text-left">When to Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">10–26–26</td>
                <td className="p-3">High P & K — boosts flowering and grain filling</td>
                <td className="p-3">Basal / early stage</td>
              </tr>

              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">14–35–14</td>
                <td className="p-3">Starter fertilizer — strong root establishment</td>
                <td className="p-3">Basal application</td>
              </tr>

              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">Urea (46–0–0)</td>
                <td className="p-3">Concentrated nitrogen source for vegetative growth</td>
                <td className="p-3">Top dressing</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="p-3 font-semibold">DAP (18–46–0)</td>
                <td className="p-3">High phosphorus & good nitrogen — ideal for roots</td>
                <td className="p-3">Basal application</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/*        * SECTION 4        * */}
      <section className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          4. Detailed Classification by Nutrient
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">A. Nitrogenous Fertilizers</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Ammonium Sulphate</li>
          <li>CAN (Calcium Ammonium Nitrate)</li>
          <li>Urea (Most used in India)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">B. Phosphatic Fertilizers</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Single Super Phosphate (SSP)</li>
          <li>Triple Super Phosphate (TSP)</li>
          <li>DAP</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">C. Potassic Fertilizers</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>MOP (Muriate of Potash)</li>
          <li>SOP (Sulphate of Potash)</li>
        </ul>
      </section>

      {/*        * SECTION 5        * */}
      <section className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          5. Secondary & Micronutrient Fertilizers
        </h2>

        <h3 className="text-xl font-semibold mb-2">Secondary Nutrients</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Magnesium Sulphate</li>
          <li>Calcium Chloride</li>
          <li>Sulphur</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Micronutrients</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Zinc Sulphate</li>
          <li>Ferrous Sulphate</li>
          <li>Borax</li>
          <li>Manganese Sulphate</li>
        </ul>
      </section>

      {/*        * NEXT STEPS        * */}
      <section className="bg-green-100 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">
          💡 Your Next Step: Precision Fertilizer Application
        </h2>
        <p className="mb-4">
          To maximize fertilizer efficiency, always perform a <b>Soil Test</b>.
          This tells you exactly what nutrients your soil lacks.
        </p>

        <button
          className="bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800"
          onClick={() => alert("Redirecting to soil test details...")}
        >
          Check Soil Requirements
        </button>
      </section>
    </PageTemplate>
  );
}

export default Fertilizers;
