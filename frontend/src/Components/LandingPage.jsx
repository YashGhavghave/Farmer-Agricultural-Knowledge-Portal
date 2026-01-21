import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './footer.jsx' 
import { useTheme } from '../Context/ThemeContext';


function TokenVerify() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [navigate])

  return null
}

function LandingPage() {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <TokenVerify />
      
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:pr-12">
            <div className="mb-8">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Agriculture Knowledge Portal
              </h1>
              <p className={`text-xl leading-relaxed max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Advanced AI platform delivering real-time crop monitoring, weather analytics, 
                and yield optimization for modern farmers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-4 rounded-lg hover:border-green-700 transition-all duration-300 w-full sm:w-auto text-lg">
                View Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">50K+</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Monitoring</div>
              </div>
              <div className="md:block hidden">
                <div className="text-3xl font-bold text-green-600 mb-1">₹5Cr+</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Savings</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className={`rounded-3xl p-12 h-96 flex items-center justify-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
              <div className="text-center">
                <div className={`w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gray-700' : 'bg-green-200'}`}>
                  <span className="text-4xl">🌾</span>
                </div>
                <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Platform Features
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive tools built for precision agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gray-600' : 'bg-green-100'}`}>
                <span className="text-2xl">📊</span>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Crop Analytics</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Real-time monitoring and disease detection with 99% accuracy
              </p>
            </div>

            <div className={`text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gray-600' : 'bg-emerald-100'}`}>
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Weather Insights</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Hyper-local forecasts optimized for crop-specific planning
              </p>
            </div>

            <div className={`text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gray-600' : 'bg-blue-100'}`}>
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Automation</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                IoT integration for irrigation and equipment management
              </p>
            </div>

            <div className={`text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gray-600' : 'bg-purple-100'}`}>
                <span className="text-2xl">📈</span>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Yield Prediction</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                AI-driven insights for maximum harvest optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get Started in 3 Steps
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Simple onboarding designed for immediate results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center group">
            <div className="w-24 h-24 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              1
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Register</h3>
            <p className={`max-w-sm mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Create account and connect your farm location
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              2
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Analyze</h3>
            <p className={`max-w-sm mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              AI processes satellite data and delivers insights
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              3
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Optimize</h3>
            <p className={`max-w-sm mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Implement recommendations for higher yields
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Trusted by Farmers Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <span className="text-xl">RK</span>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Ramesh Kumar</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Tomato Farmer, Punjab</p>
                </div>
              </div>
              <p className={`italic leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Increased yield by 45% in first season. Disease detection saved my crop."
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <span className="text-xl">SD</span>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Sita Devi</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Organic Grower</p>
                </div>
              </div>
              <p className={`italic leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Water usage down 40%, profits up significantly. Game changer."
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <span className="text-xl">AS</span>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Ajay Singh</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Rice Farmer, UP</p>
                </div>
              </div>
              <p className={`italic leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Weather predictions are incredibly accurate. Perfect planting timing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join thousands of farmers using AI precision agriculture for better yields
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-12 py-5 rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300">
            Start 14-Day Free Trial
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default LandingPage
