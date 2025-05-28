
import React, { useState } from 'react';
import { Activity, Calculator } from 'lucide-react';

const ApproachJumpCalculator = () => {
  const [standingJump, setStandingJump] = useState<number>(0);
  const [runningJump, setRunningJump] = useState<number>(0);
  const [approachSteps, setApproachSteps] = useState<number>(3);
  const [results, setResults] = useState<any>(null);

  const calculateApproachEffectiveness = () => {
    if (standingJump <= 0 || runningJump <= 0) {
      setResults(null);
      return;
    }

    const difference = runningJump - standingJump;
    const percentage = (difference / standingJump) * 100;
    
    let effectiveness = "";
    let recommendations = [];

    if (percentage < 10) {
      effectiveness = "Poor Approach Utilization";
      recommendations = [
        "Work on approach timing and rhythm",
        "Practice penultimate step technique",
        "Focus on speed to height conversion",
        "Consider approach angle adjustments"
      ];
    } else if (percentage < 20) {
      effectiveness = "Average Approach Utilization";
      recommendations = [
        "Refine your approach speed",
        "Work on last two steps timing",
        "Practice explosive takeoff drills",
        "Focus on consistent approach pattern"
      ];
    } else if (percentage < 30) {
      effectiveness = "Good Approach Utilization";
      recommendations = [
        "Fine-tune approach rhythm",
        "Work on arm swing coordination",
        "Practice different approach angles",
        "Maintain current technique with consistency"
      ];
    } else {
      effectiveness = "Excellent Approach Utilization";
      recommendations = [
        "Maintain your current approach technique",
        "Focus on consistency in game situations",
        "Help teammates improve their approach",
        "Consider advanced dunk variations"
      ];
    }

    const optimalSteps = approachSteps >= 3 && approachSteps <= 5 ? "Optimal" : 
                        approachSteps < 3 ? "Too Short" : "Too Long";

    setResults({
      difference,
      percentage,
      effectiveness,
      recommendations,
      optimalSteps
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Activity className="w-8 h-8 text-red-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Approach Jump Calculator</h2>
          <p className="text-gray-600">Analyze your approach effectiveness</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Standing Vertical Jump (inches)
          </label>
          <input
            type="number"
            value={standingJump || ''}
            onChange={(e) => setStandingJump(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Running Vertical Jump (inches)
          </label>
          <input
            type="number"
            value={runningJump || ''}
            onChange={(e) => setRunningJump(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Approach Steps
          </label>
          <select
            value={approachSteps}
            onChange={(e) => setApproachSteps(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value={2}>2 steps</option>
            <option value={3}>3 steps</option>
            <option value={4}>4 steps</option>
            <option value={5}>5 steps</option>
            <option value={6}>6+ steps</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateApproachEffectiveness}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mb-6"
      >
        <Calculator className="w-5 h-5 mr-2" />
        Analyze Approach
      </button>

      {results && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <p className="text-sm text-red-600 font-medium">Jump Difference</p>
              <p className="text-2xl font-bold text-red-800">{results.difference}"</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="text-sm text-orange-600 font-medium">Improvement</p>
              <p className="text-2xl font-bold text-orange-800">{results.percentage.toFixed(1)}%</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <p className="text-sm text-yellow-600 font-medium">Step Count</p>
              <p className="text-2xl font-bold text-yellow-800">{results.optimalSteps}</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Assessment: {results.effectiveness}</h3>
            <h4 className="font-medium text-gray-700 mb-2">Recommendations:</h4>
            <ul className="space-y-1">
              {results.recommendations.map((rec: string, index: number) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-red-600 mr-2">•</span>
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

export default ApproachJumpCalculator;
