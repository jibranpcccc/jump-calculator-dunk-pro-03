
import React from 'react';
import { Link } from 'react-router-dom';

const FAQPreviewSection = () => {
  return (
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
  );
};

export default FAQPreviewSection;
