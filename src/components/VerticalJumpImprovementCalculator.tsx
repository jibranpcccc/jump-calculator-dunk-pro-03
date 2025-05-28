
import React, { useState } from 'react';
import { TrendingUp, Target } from 'lucide-react';

const VerticalJumpImprovementCalculator = () => {
  const [currentJump, setCurrentJump] = useState<number>(0);
  const [targetJump, setTargetJump] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<number>(12);
  const [results, setResults] = useState<any>(null);

  const calculateImprovement = () => {
    if (currentJump <= 0 || targetJump <= currentJump) {
      setResults(null);
      return;
    }

    const improvement = targetJump - currentJump;
    const monthlyGain = improvement / timeframe;
    const weeklyGain = monthlyGain / 4.33; // Average weeks per month

    let difficulty = "";
    let recommendations = [];

    if (improvement <= 4) {
      difficulty = "Achievable";
      recommendations = [
        "Focus on consistent plyometric training",
        "Add jump squats and depth jumps to your routine",
        "Work on landing mechanics and jump technique"
      ];
    } else if (improvement <= 8) {
      difficulty = "Challenging but Possible";
      recommendations = [
        "Intensive plyometric and strength training required",
        "Consider working with a trainer",
        "Focus on explosive movements and proper recovery",
        "Nutrition and sleep optimization crucial"
      ];
    } else if (improvement <= 12) {
      difficulty = "Very Difficult";
      recommendations = [
        "Requires exceptional dedication and training",
        "Professional coaching highly recommended",
        "May need to extend timeframe for realistic gains",
        "Focus on strength foundation first"
      ];
    } else {
      difficulty = "Extremely Difficult";
      recommendations = [
        "Consider adjusting expectations or extending timeframe",
        "Professional athletic development program needed",
        "May require 18-24 months for significant gains",
        "Focus on overall athleticism improvement"
      ];
    }

    setResults({
      improvement,
      monthlyGain,
      weeklyGain,
      difficulty,
      recommendations
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Vertical Jump Improvement Calculator</h2>
          <p className="text-gray-600">Plan your vertical jump training goals</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Vertical Jump (inches)
          </label>
          <input
            type="number"
            value={currentJump || ''}
            onChange={(e) => setCurrentJump(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., 24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Vertical Jump (inches)
          </label>
          <input
            type="number"
            value={targetJump || ''}
            onChange={(e) => setTargetJump(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., 30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timeframe (months)
          </label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
            <option value={18}>18 months</option>
            <option value={24}>24 months</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateImprovement}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mb-6"
      >
        <Target className="w-5 h-5 mr-2" />
        Calculate Training Plan
      </button>

      {results && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-sm text-green-600 font-medium">Total Improvement</p>
              <p className="text-2xl font-bold text-green-800">{results.improvement}"</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-600 font-medium">Monthly Goal</p>
              <p className="text-2xl font-bold text-blue-800">{results.monthlyGain.toFixed(1)}"</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-sm text-purple-600 font-medium">Weekly Goal</p>
              <p className="text-2xl font-bold text-purple-800">{results.weeklyGain.toFixed(2)}"</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Assessment: {results.difficulty}</h3>
            <h4 className="font-medium text-gray-700 mb-2">Recommended Approach:</h4>
            <ul className="space-y-1">
              {results.recommendations.map((rec: string, index: number) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalJumpImprovementCalculator;
