
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
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
  );
};

export default WhyChooseUsSection;
