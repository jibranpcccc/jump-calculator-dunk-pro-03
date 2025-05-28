
import React from 'react';
import { Star } from 'lucide-react';

const SocialProofSection = () => {
  return (
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
  );
};

export default SocialProofSection;
