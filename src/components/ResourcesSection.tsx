
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Ruler, Calculator, TrendingUp } from 'lucide-react';

const ResourcesSection = () => {
  return (
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
  );
};

export default ResourcesSection;
