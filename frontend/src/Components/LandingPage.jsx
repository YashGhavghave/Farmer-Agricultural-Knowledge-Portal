import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { GoogleGenAI } from '@google/genai';
import { 
  Sprout, CloudSun, Cpu, BarChart3, Zap 
} from 'lucide-react';

import Navbar from './Navbar';
import Footer from './footer.jsx';
import { useTheme } from '../Context/ThemeContext';

/* ================= AUTH GUARD ================= */
function TokenVerify() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, [navigate]);
  return null;
}

/* ================= FEATURE CARD ================= */
const FeatureCard = ({ icon: Icon, title, desc, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`p-8 rounded-3xl border transition-all
      ${isDark 
        ? 'bg-gray-800/60 border-gray-700 text-gray-300' 
        : 'bg-white border-gray-100 shadow-xl text-gray-700'
      }
    `}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6
      ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}
    `}>
      <Icon size={28} />
    </div>
    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h3>
    <p>{desc}</p>
  </motion.div>
);

/* ================= MAIN COMPONENT ================= */
function LandingPage() {
  const { isDark } = useTheme();
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

  /* ===== AI STATES ===== */
  const [crop, setCrop] = useState('wheat');
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [geminiAdvice, setGeminiAdvice] = useState('');
  const [geminiLoading, setGeminiLoading] = useState(false);
  const [geminiError, setGeminiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const normalizeGeminiAdvice = (text) => {
    if (!text || typeof text !== 'string') return '';
    return text
      .replace(/\r/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/^\*\s+/gm, '• ')
      .replace(/^\s*[-]\s+/gm, '• ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const generateGeminiAdvice = async ({ cropName, predictionLabel, confidence, imageFile }) => {
    if (!geminiApiKey || !ai) {
      setGeminiError('Gemini API key is missing. Add VITE_GEMINI_API_KEY in your frontend .env file.');
      return;
    }

    setGeminiLoading(true);
    setGeminiError('');

    try {
      const imageBase64 = await fileToBase64(imageFile);

        const prompt = `You are an expert agronomist and plant pathologist. Analyze this crop leaf image and give practical farmer-friendly guidance.

Crop: ${cropName}
Model prediction: ${predictionLabel}
Model confidence: ${confidence}%
      Response language: ${outputLanguage}

Return plain text only (no markdown symbols like *, **, or #).
Use exactly these section titles and keep each section concise:

1) Likely disease overview
2) Visual symptoms to confirm
3) Immediate actions (next 24-48 hours)
4) Treatment plan (organic + chemical options)
5) Prevention for next season
6) When to contact a local agri expert

Keep the response practical, safe, and concise for field use.`;

      const candidateModels = ['gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-1.5-flash'];
      let adviceText = '';
      let lastError = null;

      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: [
              {
                role: 'user',
                parts: [
                  { text: prompt },
                  {
                    inlineData: {
                      mimeType: imageFile.type || 'image/jpeg',
                      data: imageBase64,
                    },
                  },
                ],
              },
            ],
          });

          adviceText = normalizeGeminiAdvice(typeof response?.text === 'string' ? response.text : '');
          if (adviceText) break;
          lastError = new Error(`Empty response from ${modelName}`);
        } catch (error) {
          lastError = error;
        }
      }

      if (!adviceText) {
        throw lastError || new Error('No advice generated from Gemini');
      }

      setGeminiAdvice(adviceText);
    } catch (error) {
      const message =
        error?.message ||
        error?.error?.message ||
        'Could not generate Gemini recommendations right now.';
      setGeminiError(`Gemini request failed: ${message}`);
    } finally {
      setGeminiLoading(false);
    }
  };

  /* ===== DRAG & DROP ===== */
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
      setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setResult(null);
    setGeminiAdvice('');
    setGeminiError('');
  };

  /* ===== AI PREDICT ===== */
  const handlePredict = async () => {
    if (!image) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setResult(null);
    setGeminiAdvice('');
    setGeminiError('');

    try {
      const res = await axios.post(
        `http://localhost:5000/predict/${crop}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data);

      await generateGeminiAdvice({
        cropName: crop,
        predictionLabel: res.data?.prediction || 'Unknown',
        confidence: res.data?.confidence || 'N/A',
        imageFile: image,
      });
    } catch {
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors
      ${isDark ? 'bg-[#0f172a] text-slate-200' : 'bg-slate-50 text-slate-900'}
    `}>
      <Navbar />
      <TokenVerify />

      {/* ================= HERO ================= */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="inline-flex gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
              <Zap size={14} /> Next-Gen Agricultural Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Engineering the <span className="text-emerald-500">Future of Farming</span>
            </h1>
            <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              AI-powered crop disease diagnosis using EfficientNet and attention mechanisms.
            </p>
          </motion.div>

          <img
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff"
            alt="Farming AI"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className={`py-24 px-6 ${isDark ? 'bg-[#0f172a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          <FeatureCard icon={BarChart3} title="Crop Analytics" desc="Disease prediction models" isDark={isDark} />
          <FeatureCard icon={CloudSun} title="Weather IQ" desc="Climate-aware learning" isDark={isDark} />
          <FeatureCard icon={Cpu} title="Deep Learning" desc="EfficientNet + Attention" isDark={isDark} />
          <FeatureCard icon={Sprout} title="Sustainability" desc="Precision agriculture" isDark={isDark} />
        </div>
      </section>

      {/* ================= AI PREDICTION ================= */}
      <section className="py-24 px-6">
        <div className={`max-w-3xl mx-auto p-10 rounded-3xl border transition-colors
          ${isDark 
            ? 'bg-slate-800 border-slate-700 text-slate-200' 
            : 'bg-white border-slate-200 shadow-xl text-slate-900'
          }
        `}>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Leaf Disease Detection (AI)
          </h2>

          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className={`w-full p-4 mb-4 rounded-xl border outline-none
              ${isDark
                ? 'bg-slate-900 border-slate-600 text-slate-200'
                : 'bg-white border-slate-300 text-slate-900'
              }
            `}
          >
            <option value="cotton">Cotton</option>
            <option value="chickpea">Chickpea (Chana)</option>
            <option value="soybean">Black Gram</option>
            <option value="wheat">Wheat</option>
          </select>

          <select
            value={outputLanguage}
            onChange={(e) => setOutputLanguage(e.target.value)}
            className={`w-full p-4 mb-4 rounded-xl border outline-none
              ${isDark
                ? 'bg-slate-900 border-slate-600 text-slate-200'
                : 'bg-white border-slate-300 text-slate-900'
              }
            `}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
          </select>

          {/* Drag & Drop */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative mb-6 h-52 flex items-center justify-center rounded-2xl border-2 border-dashed transition-all
              ${dragActive ? 'border-emerald-500 bg-emerald-500/10' : ''}
              ${isDark 
                ? 'border-slate-600 bg-slate-900 text-slate-400' 
                : 'border-slate-300 bg-slate-50 text-slate-500'
              }
            `}
          >
            {preview ? (
              <img src={preview} alt="preview" className="max-h-full rounded-xl" />
            ) : (
              <p>Drag & drop leaf image here or click to upload</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          <button
            onClick={handlePredict}
            disabled={loading || geminiLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl"
          >
            {loading || geminiLoading ? "Analyzing..." : "Predict Disease"}
          </button>

          {result && (
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-emerald-500">
                {result.prediction}
              </p>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                Confidence: {result.confidence}%
              </p>

              {geminiLoading && (
                <p className={isDark ? 'text-slate-400 mt-4' : 'text-slate-600 mt-4'}>
                  Generating detailed cure guidance with Gemini...
                </p>
              )}

              {geminiError && (
                <p className="mt-4 text-rose-500 font-medium">{geminiError}</p>
              )}

              {geminiAdvice && (
                <div className={`mt-6 p-5 rounded-2xl text-left whitespace-pre-line border
                  ${isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}
                `}>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-500">
                    Gemini Detailed Disease Guidance
                  </h3>
                  <p>{geminiAdvice}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
