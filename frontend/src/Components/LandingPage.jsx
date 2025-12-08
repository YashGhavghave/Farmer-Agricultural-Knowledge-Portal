import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './footer.jsx' 


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
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <TokenVerify />
      
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:pr-12">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                AI-Powered Precision Agriculture
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
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
                <div className="text-sm text-gray-600 font-medium">Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Monitoring</div>
              </div>
              <div className="md:block hidden">
                <div className="text-3xl font-bold text-green-600 mb-1">₹5Cr+</div>
                <div className="text-sm text-gray-600 font-medium">Savings</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌾</span>
                </div>
                <p className="text-gray-600 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools built for precision agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Crop Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time monitoring and disease detection with 99% accuracy
              </p>
            </div>

            <div className="text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Weather Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Hyper-local forecasts optimized for crop-specific planning
              </p>
            </div>

            <div className="text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                IoT integration for irrigation and equipment management
              </p>
            </div>

            <div className="text-center p-8 hover:shadow-lg rounded-xl hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Yield Prediction</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-driven insights for maximum harvest optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple onboarding designed for immediate results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center group">
            <div className="w-24 h-24 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              1
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Register</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Create account and connect your farm location
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              2
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analyze</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              AI processes satellite data and delivers insights
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
              3
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Optimize</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Implement recommendations for higher yields
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Farmers Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ramesh Kumar</h4>
                  <p className="text-sm text-gray-600">Tomato Farmer, Punjab</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Increased yield by 45% in first season. Disease detection saved my crop."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">SD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sita Devi</h4>
                  <p className="text-sm text-gray-600">Organic Grower</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Water usage down 40%, profits up significantly. Game changer."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ajay Singh</h4>
                  <p className="text-sm text-gray-600">Rice Farmer, UP</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
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
