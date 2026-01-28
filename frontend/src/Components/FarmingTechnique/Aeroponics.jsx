import React from "react";
import { motion } from "framer-motion";
import {
  Wind,
  Droplets,
  Zap,
  Activity,
  Info,
  Settings,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import PageTemplate from "../ui/PageTemplate";
import { useTheme } from "../../Context/ThemeContext";

function Aeroponics() {
  const { isDark } = useTheme();

  // Updated Video Mapping with correct Embed IDs
  const videos = [
    {
      id: "kT9r-CqZ7iY",
      title: "Introduction to Aeroponics",
      desc: "Basics of air/mist environments.",
    },
    {
      id: "7Sb0UoghFoE",
      title: "DIY Aeroponics at Home",
      desc: "Building a small-scale system for herbs.",
    },
    {
      id: "xXJJzRNeB9c",
      title: "Commercial Pros & Cons",
      desc: "Efficiency and operational challenges.",
    },
  ];

  {
    /* 5. Videos Grid with Fixes */
  }

  return (
    <PageTemplate title={"Aeroponics: Technical Guide"}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        {/* 1. Scientific Overview */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Wind className="text-emerald-500" /> The Science of HPA
            </h2>
            <p
              className={`text-lg leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              Aeroponics is the most advanced form of soilless culture. By
              suspending roots in a <b>High-Pressure Aeroponics (HPA)</b>{" "}
              chamber, plants receive a nutrient mist with a droplet size of 50
              microns.
            </p>
            <p
              className={`text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              This "Air-Culture" maximizes the oxygen-to-root ratio, allowing
              plants to grow significantly faster than in soil or traditional
              hydroponics.
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-500/20"></div>
        </section>

        {/* 2. Technical Component Table */}
        <section>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="text-blue-500" /> Engineering Components
          </h3>
          <div
            className={`overflow-x-auto rounded-3xl border ${isDark ? "border-slate-700 bg-slate-900/50" : "border-slate-200 bg-white shadow-sm"}`}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? "bg-slate-800" : "bg-slate-50"}>
                  <th className="p-4 font-bold border-b border-inherit">
                    Component
                  </th>
                  <th className="p-4 font-bold border-b border-inherit">
                    Role
                  </th>
                  <th className="p-4 font-bold border-b border-inherit">
                    Tech Spec
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pressure Pump", "Creates the nutrient mist", "60–100 PSI"],
                  ["Mist Nozzles", "Atomizes water particles", "50-80 Microns"],
                  [
                    "Cycle Timer",
                    "Controls misting pulses",
                    "Precision: Seconds",
                  ],
                  [
                    "Accumulator Tank",
                    "Maintains constant pressure",
                    "2-5 Gallon Capacity",
                  ],
                ].map(([name, role, spec], i) => (
                  <tr
                    key={i}
                    className="border-b border-inherit last:border-0 hover:bg-emerald-500/5 transition-colors"
                  >
                    <td className="p-4 font-semibold text-emerald-500">
                      {name}
                    </td>
                    <td className="p-4 opacity-80">{role}</td>
                    <td className="p-4 font-mono text-sm">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. The Lifecycle Diagram Placeholder */}
        <section
          className={`p-8 rounded-[3rem] ${isDark ? "bg-slate-800/40" : "bg-slate-50"}`}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            The Aeroponic Lifecycle
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h4 className="font-bold">Atomization</h4>
              <p className="text-sm opacity-70">
                Nutrients are sprayed into ultra-fine droplets that coat root
                hairs instantly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h4 className="font-bold">Gas Exchange</h4>
              <p className="text-sm opacity-70">
                Roots absorb CO2 and Oxygen directly from the air between mist
                cycles.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h4 className="font-bold">Rapid Uptake</h4>
              <p className="text-sm opacity-70">
                Lack of soil resistance allows the plant to focus 100% energy on
                growth.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600"></div>
        </section>

        {/* 4. Comparison Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div
            className={`p-8 rounded-[2rem] border-l-4 border-emerald-500 ${isDark ? "bg-slate-900" : "bg-white shadow-md"}`}
          >
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" /> Pros
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>• Zero soil pathogens or root rot.</li>
              <li>• 95% reduction in water usage.</li>
              <li>• High density (vertical) capability.</li>
            </ul>
          </div>
          <div
            className={`p-8 rounded-[2rem] border-l-4 border-red-500 ${isDark ? "bg-slate-900" : "bg-white shadow-md"}`}
          >
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="text-red-500" /> Critical Risks
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>• Power failure kills plants in 30 mins.</li>
              <li>• High technical barrier for beginners.</li>
              <li>• Nozzles clog easily with hard water.</li>
            </ul>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`p-4 rounded-3xl border ${isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black relative">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h5 className="font-bold text-sm mb-1">{video.title}</h5>
              <p className="text-xs opacity-60 mb-3">{video.desc}</p>

              {/* Fallback Link if Iframe fails */}
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-500 hover:underline"
              >
                Video not loading? Watch on YouTube →
              </a>
            </div>
          ))}<br></br>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Aeroponics;
