
import React from 'react';

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
