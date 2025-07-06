import { useState } from 'react'
import './App.css'

function App() {
  const [activeSport, setActiveSport] = useState('football')

  const sports = [
    { id: 'football', name: 'Football', icon: '⚽', bg: 'bg-green-500' },
    { id: 'basketball', name: 'Basketball', icon: '🏀', bg: 'bg-orange-500' },
    { id: 'tennis', name: 'Tennis', icon: '🎾', bg: 'bg-blue-400' },
    { id: 'running', name: 'Running', icon: '🏃', bg: 'bg-purple-500' },
    { id: 'swimming', name: 'Swimming', icon: '🏊', bg: 'bg-cyan-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className={`relative h-96 ${sports.find(s => s.id === activeSport)?.bg || 'bg-green-500'} transition-all duration-500`}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">SPORTIFY</h1>
          <p className="text-xl md:text-2xl mb-8 text-center px-4">Fuel your passion for sports with our premium gear</p>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Sports Navigation */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="flex justify-center space-x-2 md:space-x-4">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setActiveSport(sport.id)}
              className={`${sport.bg} ${activeSport === sport.id ? 'transform -translate-y-2 scale-110' : ''} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              {sport.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured {sports.find(s => s.id === activeSport)?.name} Gear</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className={`h-48 ${sports.find(s => s.id === activeSport)?.bg} flex items-center justify-center text-8xl`}>
                {sports.find(s => s.id === activeSport)?.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium {sports.find(s => s.id === activeSport)?.name} Equipment</h3>
                <p className="text-gray-600 mb-4">High-performance gear for professionals and enthusiasts alike.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$99.99</span>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Sports Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest sports gear, deals, and tips.</p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-xl">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-l sm:rounded-r-none rounded mb-2 sm:mb-0 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r sm:rounded-l-none rounded hover:bg-blue-700 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Sportify. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-400 transition duration-200">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition duration-200">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition duration-200">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App