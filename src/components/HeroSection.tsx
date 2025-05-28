
import React from 'react';
import { Calculator, Clock, Award, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
