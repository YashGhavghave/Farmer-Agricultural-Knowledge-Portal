import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Globe,
  Ship,
  Landmark,
  Users,
  BarChart3,
  Layers,
  PlayCircle,
} from "lucide-react";
import PageTemplate from "../ui/PageTemplate";
import { useTheme } from "../../Context/ThemeContext";

function PlantationFarming() {
  const { isDark } = useTheme();

  const videos = [
    {
      id: "1A987R8S8_I",
      title: "Industrial Tea Production",
      desc: "From leaf plucking to factory processing on a massive scale.",
    },
    {
      id: "u_v9f8S82Xw",
      title: "Rubber Tapping & Processing",
      desc: "The technical lifecycle of latex extraction in tropical plantations.",
    },
    {
      id: "x8C9vO9S_0U",
      title: "The Economics of Cash Crops",
      desc: "How global markets influence plantation management and yields.",
    },
  ];

  return (
    <PageTemplate title={"Plantation Farming"}>
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        {/* 1. Industrial Definition */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Factory className="text-blue-600" /> Estate-Based Agriculture
            </h2>
            <p
              className={`text-lg leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              Plantation farming is a form of <b>commercial farming</b> where a
              single crop is grown on a massive estate. It bridges the gap
              between agriculture and industry, often featuring on-site
              processing units.
            </p>
            <div
              className={`p-4 rounded-2xl border-l-4 border-blue-600 ${isDark ? "bg-blue-600/5" : "bg-blue-50"}`}
            >
              <p className="text-sm font-medium italic">
                "A plantation is essentially a factory in the forest—it requires
                heavy capital, advanced technology, and a massive labor force."
              </p>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-500/20 bg-white p-4"></div>
        </section>

        {/* 2. Key Industrial Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Land Area",
              value: "Large Estate",
              icon: Layers,
              color: "text-emerald-500",
            },
            {
              label: "Investment",
              value: "High Capital",
              icon: Landmark,
              color: "text-amber-600",
            },
            {
              label: "Objective",
              value: "Global Export",
              icon: Ship,
              color: "text-blue-500",
            },
            {
              label: "Market",
              value: "World Trade",
              icon: Globe,
              color: "text-purple-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border text-center ${isDark ? "bg-slate-900 border-white/5" : "bg-white border-black/5 shadow-sm"}`}
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3. The Vertical Processing Chain */}
        <section
          className={`p-8 rounded-[3rem] ${isDark ? "bg-slate-900 border border-white/5" : "bg-blue-50/50 border border-blue-100"}`}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-600" /> The Processing Cycle
              </h3>
              <p className="opacity-70 leading-relaxed mb-6">
                Most plantation crops are highly perishable or bulky, requiring{" "}
                <b>immediate processing</b> near the site of production to
                maintain quality.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl">
                  <h5 className="font-bold text-sm">Harvesting</h5>
                  <p className="text-xs opacity-60">
                    Labor-intensive plucking or tapping.
                  </p>
                </div>
                <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl">
                  <h5 className="font-bold text-sm">Milling</h5>
                  <p className="text-xs opacity-60">
                    On-site primary processing/refining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Major Plantation Crops & Regions */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Global Distribution</h3>
          <div
            className={`overflow-x-auto rounded-3xl border ${isDark ? "border-slate-700 bg-slate-900/50" : "border-slate-200 bg-white shadow-sm"}`}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={isDark ? "bg-slate-800" : "bg-slate-50"}>
                  <th className="p-4 font-bold border-b border-inherit">
                    Crop Type
                  </th>
                  <th className="p-4 font-bold border-b border-inherit text-emerald-500">
                    Key Region
                  </th>
                  <th className="p-4 font-bold border-b border-inherit text-blue-500">
                    Characteristics
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tea", "India, Sri Lanka", "High rainfall, sloped terrain."],
                  [
                    "Coffee",
                    "Brazil, Vietnam",
                    "Frost-free tropical highlands.",
                  ],
                  [
                    "Rubber",
                    "Malaysia, Indonesia",
                    "Humid equatorial lowlands.",
                  ],
                  [
                    "Sugar Cane",
                    "Cuba, India, Brazil",
                    "Frost-free, high water demand.",
                  ],
                ].map(([crop, region, feat], i) => (
                  <tr
                    key={i}
                    className="border-b border-inherit last:border-0 hover:bg-blue-500/5 transition-colors"
                  >
                    <td className="p-4 font-bold">{crop}</td>
                    <td className="p-4 opacity-80">{region}</td>
                    <td className="p-4 text-sm opacity-70">{feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* </table> */}
          </div>
        </section>

        {/* 5. Video Gallery */}
        <section>
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <PlayCircle className="text-red-500" /> Estate Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`p-4 rounded-3xl border ${isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <h5 className="font-bold text-sm mb-1">{video.title}</h5>
                <p className="text-xs opacity-60 mb-3">{video.desc}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-600 font-bold hover:underline"
                >
                  VIEW ON YOUTUBE →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}

export default PlantationFarming;
