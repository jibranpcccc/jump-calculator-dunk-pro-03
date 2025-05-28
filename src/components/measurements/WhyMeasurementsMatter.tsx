
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WhyMeasurementsMatter = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Accurate Measurements Are Critical</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">For Your Dunk Calculator Results:</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• <strong>Precision matters:</strong> A 2-inch error in standing reach = 2 inches off in your dunk calculation</li>
            <li>• <strong>Goal setting:</strong> Know exactly how many inches you need to gain</li>
            <li>• <strong>Progress tracking:</strong> Monitor improvements accurately over time</li>
            <li>• <strong>Training focus:</strong> Identify whether you need more height, technique, or strength</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">For Your Training Success:</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• <strong>Baseline establishment:</strong> Know your starting point for realistic goal setting</li>
            <li>• <strong>Motivation:</strong> See concrete progress as you improve</li>
            <li>• <strong>Program selection:</strong> Choose the right training intensity and approach</li>
            <li>• <strong>Injury prevention:</strong> Avoid overreaching based on inaccurate assessments</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-orange-50 rounded-lg">
        <h3 className="text-xl font-semibold text-orange-800 mb-3">Quick Start Recommendation:</h3>
        <p className="text-orange-700 mb-4">
          Start with measuring your <strong>standing reach</strong> and <strong>vertical jump</strong> - these two measurements 
          alone will give you 90% of the accuracy you need for the dunk calculator.
        </p>
        <Link 
          to="/measurements/standing-reach"
          className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
        >
          Begin with Standing Reach Measurement <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default WhyMeasurementsMatter;
