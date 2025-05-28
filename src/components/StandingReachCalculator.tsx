
import React, { useState } from 'react';
import { Ruler, Calculator } from 'lucide-react';

const StandingReachCalculator = () => {
  const [height, setHeight] = useState<number>(0);
  const [heightUnit, setHeightUnit] = useState<string>('inches');
  const [wingspan, setWingspan] = useState<number>(0);
  const [wingspanUnit, setWingspanUnit] = useState<string>('inches');
  const [useWingspan, setUseWingspan] = useState<boolean>(false);
  const [standingReach, setStandingReach] = useState<number | null>(null);

  const calculateStandingReach = () => {
    if (height <= 0) {
      setStandingReach(null);
      return;
    }

    let heightInInches = height;
    if (heightUnit === 'feet') {
      heightInInches = height * 12;
    }

    let reachInInches;
    
    if (useWingspan && wingspan > 0) {
      let wingspanInInches = wingspan;
      if (wingspanUnit === 'feet') {
        wingspanInInches = wingspan * 12;
      }
      // Standing reach is typically wingspan * 1.33
      reachInInches = wingspanInInches * 1.33;
    } else {
      // Estimate based on height (average ratio is 1.33)
      reachInInches = heightInInches * 1.33;
    }

    setStandingReach(reachInInches);
  };

  const getReachAssessment = (reach: number) => {
    if (reach < 84) return "Below average reach - may need exceptional vertical jump";
    if (reach < 90) return "Average reach for recreational players";
    if (reach < 96) return "Good reach - advantage for dunking";
    if (reach < 102) return "Excellent reach - significant dunking advantage";
    return "Elite reach - natural dunking ability!";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Ruler className="w-8 h-8 text-purple-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Standing Reach Calculator</h2>
          <p className="text-gray-600">Calculate your standing reach for dunk assessment</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={height || ''}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter height"
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="inches">inches</option>
                <option value="feet">feet</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="useWingspan"
                checked={useWingspan}
                onChange={(e) => setUseWingspan(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="useWingspan" className="text-sm font-medium text-gray-700">
                Include wingspan (more accurate)
              </label>
            </div>
            {useWingspan && (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={wingspan || ''}
                  onChange={(e) => setWingspan(Number(e.target.value))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter wingspan"
                />
                <select
                  value={wingspanUnit}
                  onChange={(e) => setWingspanUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="inches">inches</option>
                  <option value="feet">feet</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={calculateStandingReach}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate Standing Reach
        </button>

        {standingReach !== null && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Your Standing Reach:</h3>
            <p className="text-2xl font-bold text-purple-600 mb-2">
              {standingReach.toFixed(1)} inches ({(standingReach / 12).toFixed(1)} feet)
            </p>
            <p className="text-sm text-purple-700 mb-3">
              {getReachAssessment(standingReach)}
            </p>
            
            <div className="text-xs text-purple-600 space-y-1">
              <p><strong>Rim Height:</strong> 120 inches (10 feet)</p>
              <p><strong>Vertical Jump Needed:</strong> {Math.max(0, 120 - standingReach).toFixed(1)} inches</p>
            </div>
          </div>
        )}

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">How This Works:</h4>
          <p className="text-xs text-gray-600">
            Standing reach is calculated using your height and wingspan. The typical ratio is about 1.33:1 
            (reach to height). Knowing your standing reach helps determine exactly how high you need to jump to dunk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandingReachCalculator;
