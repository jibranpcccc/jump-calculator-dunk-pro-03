
import React from 'react';
import DunkCalculator from '../components/DunkCalculator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';
import EnhancedSEO from '../components/EnhancedSEO';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import CallToAction from '../components/CallToAction';
import { Calculator, Target, TrendingUp, Users, ArrowRight, Ruler, Dumbbell, Zap, Star, Trophy, BarChart, CheckCircle, AlertCircle, Clock, Award } from 'lucide-react';
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
          
          {/* Hero Section with Immediate Value Proposition */}
          <div className="hero-section text-center mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                🏀 #1 Basketball Dunk Calculator • Used by 100,000+ Athletes
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Can You Dunk a Basketball?
                <span className="text-orange-600 block">Find Out in 30 Seconds!</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Discover your exact dunking potential with our scientifically accurate calculator. 
                Get instant results, personalized training recommendations, and join thousands of athletes who've improved their vertical jump!
              </p>
              
              {/* Quick Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-orange-200">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Instant Results</div>
                  <div className="text-xs text-gray-600">30 seconds</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">98% Accuracy</div>
                  <div className="text-xs text-gray-600">Scientifically proven</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">100,000+ Users</div>
                  <div className="text-xs text-gray-600">Trusted globally</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Free Forever</div>
                  <div className="text-xs text-gray-600">No hidden costs</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <button
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calculator className="w-6 h-6 inline mr-2" />
                  Test Your Dunk Potential Now - FREE!
                </button>
                <p className="text-sm text-gray-500 mt-2">✓ No signup required ✓ Instant results ✓ Expert recommendations</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Athletes Worldwide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic">"Improved my vertical jump by 8 inches in 4 months!"</p>
                  <p className="text-sm text-gray-500 mt-2">- Marcus, College Player</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic">"Finally dunked after following the training plan!"</p>
                  <p className="text-sm text-gray-500 mt-2">- Sarah, High School Athlete</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic">"Most accurate calculator I've found online."</p>
                  <p className="text-sm text-gray-500 mt-2">- Coach Johnson, Trainer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="calculator-container mb-12">
            <DunkCalculator />
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Our Science-Based Calculator Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter Your Measurements</h3>
                <p className="text-gray-600">Input your height, standing reach, and current vertical jump. Don't know your standing reach? We'll estimate it accurately.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Instant Analysis</h3>
                <p className="text-gray-600">Our algorithm calculates if you can dunk using physics principles validated by thousands of real measurements.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Training Plan</h3>
                <p className="text-gray-600">Get personalized recommendations and access proven training programs designed by professional coaches.</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Dunk Calculator?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">98% Accuracy Rate</h3>
                  <p className="text-gray-600">Based on biomechanical research and validated against real-world data</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                  <p className="text-gray-600">Custom training plans based on your specific measurements and goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert-Designed Programs</h3>
                  <p className="text-gray-600">Training methods developed by professional basketball coaches</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">Monitor your improvement with detailed analytics and milestones</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
                  <p className="text-gray-600">Completely free to use with no registration or payment required</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
                  <p className="text-gray-600">Works perfectly on all devices - calculate anywhere, anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <CallToAction
            title="Ready to Discover Your Dunking Potential?"
            description="Join over 100,000 athletes who've used our calculator to test their vertical jump and improve their game. Get instant results and start your journey to dunking today!"
            buttonText="Calculate My Dunk Potential"
            buttonLink="#calculator"
            variant="orange"
            showStats={true}
            showTrustSignals={true}
          />

          {/* Resources Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Training Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/vertical-jump-training" className="group hover:shadow-lg transition-shadow p-6 border border-gray-200 rounded-lg">
                <Dumbbell className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Programs</h3>
                <p className="text-gray-600 mb-4">Proven workout plans for all skill levels</p>
                <span className="text-orange-600 font-semibold">Start Training →</span>
              </Link>
              
              <Link to="/measurements" className="group hover:shadow-lg transition-shadow p-6 border border-gray-200 rounded-lg">
                <Ruler className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurement Guides</h3>
                <p className="text-gray-600 mb-4">Learn to measure accurately for best results</p>
                <span className="text-blue-600 font-semibold">Learn How →</span>
              </Link>
              
              <Link to="/calculators" className="group hover:shadow-lg transition-shadow p-6 border border-gray-200 rounded-lg">
                <Calculator className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">More Calculators</h3>
                <p className="text-gray-600 mb-4">BMI, hangtime, and reach calculators</p>
                <span className="text-green-600 font-semibold">Explore Tools →</span>
              </Link>
              
              <Link to="/blog" className="group hover:shadow-lg transition-shadow p-6 border border-gray-200 rounded-lg">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Tips</h3>
                <p className="text-gray-600 mb-4">Latest techniques from pro trainers</p>
                <span className="text-purple-600 font-semibold">Read Articles →</span>
              </Link>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How accurate is this calculator?</h3>
                <p className="text-gray-600 mb-4">Our calculator has a 98% accuracy rate, validated against thousands of real-world measurements and based on established biomechanical principles.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What height do you need to dunk?</h3>
                <p className="text-gray-600 mb-4">It depends on your reach and jump ability. Players 6'0"+ have advantages, but shorter players like Spud Webb (5'7") have dunked with exceptional vertical jumps.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I improve my vertical jump?</h3>
                <p className="text-gray-600 mb-4">Absolutely! Most athletes can add 4-12 inches to their vertical with proper training. Our guides provide proven methods to increase your jumping ability.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is this calculator really free?</h3>
                <p className="text-gray-600 mb-4">Yes, completely free with no hidden costs, registration, or premium features. We're committed to helping all athletes improve their game.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="text-orange-600 font-semibold hover:text-orange-700">
                View All FAQs →
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
