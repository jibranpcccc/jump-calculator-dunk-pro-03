
import { Star } from 'lucide-react';

const TouchOptimizedSocial = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8 md:mb-12">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Trusted by Athletes Worldwide</h2>
        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center mb-2 md:mb-3 space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />)}
            </div>
            <p className="text-sm md:text-base text-gray-600 italic mb-2">"Improved my vertical jump by 8 inches in 4 months!"</p>
            <p className="text-xs md:text-sm text-gray-500">- Marcus, College Player</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center mb-2 md:mb-3 space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />)}
            </div>
            <p className="text-sm md:text-base text-gray-600 italic mb-2">"Finally dunked after following the training plan!"</p>
            <p className="text-xs md:text-sm text-gray-500">- Sarah, High School Athlete</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center mb-2 md:mb-3 space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />)}
            </div>
            <p className="text-sm md:text-base text-gray-600 italic mb-2">"Most accurate calculator I've found online."</p>
            <p className="text-xs md:text-sm text-gray-500">- Coach Johnson, Trainer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchOptimizedSocial;
