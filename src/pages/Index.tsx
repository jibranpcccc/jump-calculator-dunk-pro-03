
import React from 'react';
import DunkCalculator from '../components/DunkCalculator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';
import EnhancedSEO from '../components/EnhancedSEO';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Calculator, Target, TrendingUp, Users, ArrowRight, Ruler, Dumbbell, Zap, Star, Trophy, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <EnhancedSEO 
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Your Vertical Jump Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress with expert guidance from professional coaches."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height, basketball fitness, athletic performance, sports calculator, dunking ability, jump training"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="website"
      />
      <PerformanceOptimizer />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Enhanced Hero Section */}
          <div className="hero-section text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Can You Dunk a Basketball?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Discover your dunking potential with our scientifically accurate calculator. 
                Get instant results and personalized training recommendations used by over 100,000 athletes worldwide!
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-1" />
                  <span>100,000+ Users</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-green-500 mr-1" />
                  <span>98% Accuracy</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="w-5 h-5 text-purple-500 mr-1" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="calculator-container mb-12">
            <DunkCalculator />
          </div>

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
                  to give you the most accurate assessment possible with 98% accuracy rate.
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

          {/* Enhanced Key Ingredients Section */}
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
                <Link to="/vertical-jump-training" className="text-orange-600 font-semibold hover:text-orange-700">
                  Complete Training Programs →
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game and Soar Above the Rim?</h2>
            <p className="text-xl mb-8">
              Whether you can already dunk or need to add some inches to your vertical, we have the comprehensive resources to help you reach your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/calculators"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Explore All Calculators
              </Link>
              <Link 
                to="/vertical-jump-training"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Start Training Program
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
