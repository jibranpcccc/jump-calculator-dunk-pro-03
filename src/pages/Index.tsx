
import React from 'react';
import DunkCalculator from '../components/DunkCalculator';
import { GlobalSEO } from '../components/SEOComponents';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';
import { Calculator, Target, TrendingUp, Users, ArrowRight, Ruler, Dumbbell, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <GlobalSEO />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        {/* Header/Navigation */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                Dunk Calculator
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/measurements" className="text-gray-700 hover:text-orange-600 font-medium">
                  Measurements
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium">
                  Blog
                </Link>
                <Link to="/faq" className="text-gray-700 hover:text-orange-600 font-medium">
                  FAQ
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Can You Dunk a Basketball?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover your dunking potential with our scientifically accurate calculator. 
              Get instant results and personalized training recommendations!
            </p>
          </div>

          {/* Main Calculator */}
          <DunkCalculator />

          {/* How Calculator Works */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How Our Dunk Calculator Accurately Estimates Your Potential
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Our calculator uses a simple but scientifically sound formula: 
                  <strong> Effective Dunking Reach = Standing Reach + Current Vertical Jump</strong>
                </p>
                <p className="text-gray-600 mb-4">
                  We then compare this to your <strong>Target Dunking Height = Rim Height + Dunking Buffer</strong> 
                  (approximately 6 inches, adjusted based on your palming ability and dunk goal).
                </p>
                <p className="text-gray-600">
                  Factors like palm size, jump type, and specific dunk goals refine the calculation 
                  to give you the most accurate assessment possible.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Breakdown:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Standing Reach:</span>
                    <span className="font-semibold">Your natural advantage</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Vertical Jump:</span>
                    <span className="font-semibold">Your explosive power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>= Max Jump Reach:</span>
                    <span className="font-semibold">Your total potential</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between">
                    <span>Rim Height:</span>
                    <span className="font-semibold">120 inches (10 ft)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Dunk Buffer:</span>
                    <span className="font-semibold">4-8 inches</span>
                  </div>
                  <div className="flex justify-between text-orange-600 font-bold">
                    <span>= Target Height:</span>
                    <span>Your dunk goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Potential */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It's Not Just About Height: Understanding Your True Dunking Potential
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standing Reach Matters Most</h3>
                <p className="text-gray-600">
                  Standing reach is often more critical than raw height. Longer arms relative to height 
                  give you a natural advantage that can't be trained.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Body Types & Jump Styles</h3>
                <p className="text-gray-600">
                  Different body types naturally favor one-foot or two-foot jumping styles. 
                  Understanding your optimal approach maximizes your potential.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inspiration</h3>
                <p className="text-gray-600">
                  <strong>Spud Webb, at 5'7", won an NBA Slam Dunk contest!</strong> 
                  It's not about being the tallest - it's about maximizing YOUR potential.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The 5 Key Ingredients to Unleashing Your Inner Dunker
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Explosive Vertical Power</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The engine of your dunk. Raw jumping ability that can be significantly improved with proper training.
                </p>
                <Link to="/measurements/vertical-jump" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn to Measure Vertical Jump →
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Ruler className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Optimal Standing Reach</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your natural advantage. Learn to measure it accurately and understand how it impacts your potential.
                </p>
                <Link to="/measurements/standing-reach" className="text-orange-600 font-semibold hover:text-orange-700">
                  How to Measure Standing Reach →
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Flawless Jumping Technique</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Efficiency in motion. Proper approach, takeoff, and timing can add inches to your jump.
                </p>
                <Link to="/measurements/vertical-jump" className="text-orange-600 font-semibold hover:text-orange-700">
                  Vertical Jump Testing Guide →
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">4. Superior Ball Control & Grip</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Securing the slam. Hand size and grip strength determine which dunks you can perform.
                </p>
                <Link to="/measurements/other-measurements" className="text-orange-600 font-semibold hover:text-orange-700">
                  Hand Measurement Guide →
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Dumbbell className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">5. Consistent Strength & Conditioning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Building a resilient athletic body. Strength training provides the foundation for explosive power and injury prevention.
                </p>
                <Link to="/blog" className="text-orange-600 font-semibold hover:text-orange-700">
                  Training Articles & Tips →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game and Soar Above the Rim?</h2>
            <p className="text-xl mb-8">
              Whether you can already dunk or need to add some inches to your vertical, we have the resources to help you reach your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/measurements"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Learn Measurement Techniques
              </Link>
              <Link 
                to="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Read Training Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Dunk Calculator</h3>
                <p className="text-gray-400">
                  Helping basketball players reach their dunking potential through accurate calculations and expert guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Measurements</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/measurements/standing-reach" className="hover:text-white">Standing Reach</Link></li>
                  <li><Link to="/measurements/vertical-jump" className="hover:text-white">Vertical Jump</Link></li>
                  <li><Link to="/measurements/hoop-heights" className="hover:text-white">Hoop Heights</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/blog" className="hover:text-white">Training Blog</Link></li>
                  <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link to="/measurements" className="hover:text-white">All Measurements</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
              <p>&copy; 2024 Dunk Calculator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
