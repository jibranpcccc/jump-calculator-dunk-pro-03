
import React, { useState } from 'react';
import { Clock, Calculator } from 'lucide-react';

const MaxHangtimeCalculator = () => {
  const [verticalJump, setVerticalJump] = useState<number>(0);
  const [hangtime, setHangtime] = useState<number | null>(null);

  const calculateHangtime = () => {
    if (verticalJump <= 0) {
      setHangtime(null);
      return;
    }
    
    // Physics formula: Time = 2 * sqrt(2 * height / gravity)
    // height in meters, gravity = 9.81 m/s²
    const heightInMeters = (verticalJump * 2.54) / 100; // Convert inches to meters
    const timeInSeconds = 2 * Math.sqrt((2 * heightInMeters) / 9.81);
    
    setHangtime(timeInSeconds);
  };

  const getHangtimeComparison = (time: number) => {
    if (time < 0.4) return "Below average - focus on improving your vertical jump";
    if (time < 0.5) return "Average recreational player level";
    if (time < 0.6) return "Good - above average player level";
    if (time < 0.7) return "Excellent - competitive player level";
    if (time < 0.8) return "Elite - college/semi-pro level";
    return "Professional athlete level - exceptional hangtime!";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Clock className="w-8 h-8 text-blue-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Max Hangtime Calculator</h2>
          <p className="text-gray-600">Calculate how long you stay in the air</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vertical Jump Height (inches)
          </label>
          <input
            type="number"
            value={verticalJump || ''}
            onChange={(e) => setVerticalJump(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your vertical jump in inches"
          />
        </div>

        <button
          onClick={calculateHangtime}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate Hangtime
        </button>

        {hangtime !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Hangtime Results:</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              {hangtime.toFixed(3)} seconds
            </p>
            <p className="text-sm text-blue-700 mb-3">
              {getHangtimeComparison(hangtime)}
            </p>
            
            <div className="text-xs text-blue-600">
              <p><strong>Fun Fact:</strong> Michael Jordan's hangtime was approximately 0.92 seconds!</p>
            </div>
          </div>
        )}

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">How This Works:</h4>
          <p className="text-xs text-gray-600">
            This calculator uses physics principles to determine your airtime. The formula accounts for gravity's effect 
            on your jump, giving you the total time from takeoff to landing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaxHangtimeCalculator;
