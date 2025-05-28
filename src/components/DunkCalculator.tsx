
import React, { useState, useEffect } from 'react';
import { Calculator, Info, TrendingUp, Target, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DunkCalculator = () => {
  // Form state
  const [height, setHeight] = useState({ feet: 6, inches: 0 });
  const [standingReach, setStandingReach] = useState('');
  const [verticalJump, setVerticalJump] = useState('');
  const [rimHeight, setRimHeight] = useState(120); // 10 feet in inches
  const [unitSystem, setUnitSystem] = useState('imperial');
  
  // Optional inputs
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [palmSize, setPalmSize] = useState('average');
  const [jumpStyle, setJumpStyle] = useState('');
  const [dunkingGoal, setDunkingGoal] = useState('basic');
  
  // Results state
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateDunk = () => {
    // Convert inputs to inches for calculation
    const heightInInches = (parseInt(height.feet) * 12) + parseInt(height.inches);
    const reachInInches = standingReach ? parseInt(standingReach) : estimateStandingReach(heightInInches);
    const jumpInInches = parseInt(verticalJump);
    
    // Calculate effective dunking reach
    const effectiveDunkingReach = reachInInches + jumpInInches;
    
    // Calculate dunking buffer needed (varies by palm size and goal)
    let dunkingBuffer = 6; // Base buffer in inches
    
    if (palmSize === 'small') dunkingBuffer += 2;
    if (palmSize === 'large') dunkingBuffer -= 1;
    
    if (dunkingGoal === 'comfortable') dunkingBuffer += 2;
    if (dunkingGoal === 'powerful') dunkingBuffer += 4;
    
    // Target dunking height
    const targetDunkingHeight = rimHeight + dunkingBuffer;
    
    // Gap calculation
    const gap = targetDunkingHeight - effectiveDunkingReach;
    
    // Determine result status
    let status = '';
    let canDunk = false;
    
    if (gap <= 0) {
      canDunk = true;
      status = gap <= -3 ? 'easily' : 'barely';
    } else {
      status = gap <= 3 ? 'close' : gap <= 6 ? 'moderate' : 'significant';
    }
    
    const calculationResults = {
      canDunk,
      status,
      gap: Math.abs(gap),
      effectiveDunkingReach,
      targetDunkingHeight,
      reachInInches,
      jumpInInches,
      dunkingBuffer,
      heightInInches,
      recommendations: generateRecommendations(gap, jumpInInches, parseInt(age) || 20)
    };
    
    setResults(calculationResults);
    setShowResults(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('calculator-results')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const estimateStandingReach = (heightInInches) => {
    // Rough estimate: standing reach is typically height + 6-9 inches
    return Math.round(heightInInches + 7.5);
  };

  const generateRecommendations = (gap, currentJump, userAge) => {
    const recommendations = [];
    
    if (gap <= 0) {
      recommendations.push({
        type: 'success',
        title: 'Congratulations! You can dunk!',
        description: 'Focus on perfecting your technique and building consistency.',
        links: [
          { text: 'Master Your First Dunk', url: '/dunking-skills/first-dunk-guide' },
          { text: 'Explore Different Dunk Types', url: '/dunking-skills/types-of-dunks' }
        ]
      });
    } else if (gap <= 3) {
      recommendations.push({
        type: 'close',
        title: 'You\'re SO close to dunking!',
        description: `You only need ${gap} more inches. Focus on explosive training and technique refinement.`,
        links: [
          { text: 'Plyometric Exercises for Quick Gains', url: '/vertical-jump-training/plyometrics' },
          { text: 'Perfect Your Jump Technique', url: '/dunking-skills/first-dunk-guide' }
        ]
      });
    } else if (gap <= 6) {
      recommendations.push({
        type: 'moderate',
        title: 'You need moderate improvement',
        description: `You need ${gap} more inches. A structured training program will get you there.`,
        links: [
          { text: 'Complete Vertical Jump Training Guide', url: '/vertical-jump-training' },
          { text: 'Strength Training for Jumpers', url: '/vertical-jump-training/strength-training' }
        ]
      });
    } else {
      recommendations.push({
        type: 'significant',
        title: 'You need significant improvement',
        description: `You need ${gap} more inches. Start with fundamentals and be patient with the process.`,
        links: [
          { text: 'Beginner\'s Training Program', url: '/vertical-jump-training/programs' },
          { text: 'Build Your Foundation', url: '/vertical-jump-training/strength-training' }
        ]
      });
    }

    // Age-specific recommendations
    if (userAge > 30) {
      recommendations.push({
        type: 'age',
        title: 'Training Considerations for Your Age',
        description: 'Focus on injury prevention, recovery, and gradual progression.',
        links: [
          { text: 'Flexibility & Injury Prevention', url: '/vertical-jump-training/flexibility-injury-prevention' },
          { text: 'Nutrition for Recovery', url: '/vertical-jump-training/nutrition' }
        ]
      });
    }

    // Jump-specific recommendations
    if (currentJump < 20) {
      recommendations.push({
        type: 'training',
        title: 'Build Your Base First',
        description: 'Start with strength training before moving to explosive exercises.',
        links: [
          { text: 'Strength Training Guide', url: '/vertical-jump-training/strength-training' },
          { text: 'Beginner Programs', url: '/vertical-jump-training/programs' }
        ]
      });
    } else if (currentJump > 30) {
      recommendations.push({
        type: 'advanced',
        title: 'Optimize Your Elite Jump',
        description: 'Focus on technique refinement and sport-specific training.',
        links: [
          { text: 'Advanced Training Techniques', url: '/vertical-jump-training/plyometrics' },
          { text: 'Perfect Your Dunking Form', url: '/dunking-skills/first-dunk-guide' }
        ]
      });
    }

    return recommendations;
  };

  const resetCalculator = () => {
    setHeight({ feet: 6, inches: 0 });
    setStandingReach('');
    setVerticalJump('');
    setAge('');
    setWeight('');
    setPalmSize('average');
    setJumpStyle('');
    setDunkingGoal('basic');
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="max-w-4xl mx-auto" id="calculator">
      {/* Calculator Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-12 h-12 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Free Basketball Dunk Calculator</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant, accurate results and personalized training recommendations. 
            Used by over 75,000+ basketball players worldwide.
          </p>
        </div>

        {/* Calculator Form */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Essential Inputs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Essential Information</h3>
            
            {/* Height Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Height *
                <Link to="/measurements/standing-reach" className="text-orange-600 hover:text-orange-700 ml-1">
                  <Info className="w-4 h-4 inline" />
                </Link>
              </label>
              <div className="flex space-x-2">
                <select 
                  value={height.feet}
                  onChange={(e) => setHeight({...height, feet: e.target.value})}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {[4,5,6,7,8].map(ft => (
                    <option key={ft} value={ft}>{ft} ft</option>
                  ))}
                </select>
                <select 
                  value={height.inches}
                  onChange={(e) => setHeight({...height, inches: e.target.value})}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(inch => (
                    <option key={inch} value={inch}>{inch} in</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Standing Reach */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standing Reach (inches) *
                <Link to="/measurements/standing-reach" className="text-orange-600 hover:text-orange-700 ml-1">
                  <Info className="w-4 h-4 inline" />
                </Link>
              </label>
              <input
                type="number"
                value={standingReach}
                onChange={(e) => setStandingReach(e.target.value)}
                placeholder="e.g., 102 (or leave blank to estimate)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Don't know? We'll estimate from your height, but measuring is more accurate.
              </p>
            </div>

            {/* Vertical Jump */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Vertical Jump (inches) *
                <Link to="/measurements/vertical-jump" className="text-orange-600 hover:text-orange-700 ml-1">
                  <Info className="w-4 h-4 inline" />
                </Link>
              </label>
              <input
                type="number"
                value={verticalJump}
                onChange={(e) => setVerticalJump(e.target.value)}
                placeholder="e.g., 28"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Rim Height */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Rim Height
                <Link to="/measurements/hoop-heights" className="text-orange-600 hover:text-orange-700 ml-1">
                  <Info className="w-4 h-4 inline" />
                </Link>
              </label>
              <select 
                value={rimHeight}
                onChange={(e) => setRimHeight(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={120}>10 feet (NBA/College Standard)</option>
                <option value={114}>9.5 feet</option>
                <option value={108}>9 feet</option>
                <option value={102}>8.5 feet</option>
                <option value={96}>8 feet</option>
              </select>
            </div>
          </div>

          {/* Optional Inputs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Optional (for better analysis)</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g., 22"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g., 180"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hand/Palm Size
                <Link to="/measurements/other-measurements" className="text-orange-600 hover:text-orange-700 ml-1">
                  <Info className="w-4 h-4 inline" />
                </Link>
              </label>
              <select 
                value={palmSize}
                onChange={(e) => setPalmSize(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="small">Small (can't palm basketball)</option>
                <option value="average">Average (can partially palm)</option>
                <option value="large">Large (can fully palm)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Jump Style</label>
              <select 
                value={jumpStyle}
                onChange={(e) => setJumpStyle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Not sure / Both</option>
                <option value="one-foot">One-foot takeoff</option>
                <option value="two-foot">Two-foot takeoff</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dunking Goal</label>
              <select 
                value={dunkingGoal}
                onChange={(e) => setDunkingGoal(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="basic">Just get it in (basic dunk)</option>
                <option value="comfortable">Comfortable, controlled dunk</option>
                <option value="powerful">Powerful, aggressive slam</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center mt-8">
          <button
            onClick={calculateDunk}
            disabled={!verticalJump}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            <Calculator className="w-6 h-6 inline mr-2" />
            Calculate My Dunk Potential!
          </button>
          {!verticalJump && (
            <p className="text-sm text-gray-500 mt-2">Please enter your vertical jump to calculate</p>
          )}
        </div>
      </div>

      {/* Results Section */}
      {showResults && results && (
        <div id="calculator-results" className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Dunk Analysis Results</h3>
            
            {/* Main Result */}
            <div className={`p-6 rounded-xl mb-6 ${
              results.canDunk 
                ? 'bg-green-50 border-2 border-green-200' 
                : 'bg-orange-50 border-2 border-orange-200'
            }`}>
              <div className="flex items-center justify-center mb-4">
                {results.canDunk ? (
                  <CheckCircle className="w-16 h-16 text-green-600" />
                ) : (
                  <Target className="w-16 h-16 text-orange-600" />
                )}
              </div>
              
              <h4 className={`text-2xl font-bold mb-2 ${
                results.canDunk ? 'text-green-800' : 'text-orange-800'
              }`}>
                {results.canDunk 
                  ? `YES! You can dunk ${results.status}!`
                  : `Not yet, but you're getting there!`
                }
              </h4>
              
              <p className={`text-lg ${
                results.canDunk ? 'text-green-700' : 'text-orange-700'
              }`}>
                {results.canDunk 
                  ? `You have ${results.gap} inches to spare. Time to start practicing your technique!`
                  : `You need ${results.gap} more inches to reach your dunking goal.`
                }
              </p>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Your Current Reach</h5>
                <p className="text-2xl font-bold text-blue-600">{results.effectiveDunkingReach}"</p>
                <p className="text-sm text-gray-600">Standing Reach + Vertical Jump</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Target Height Needed</h5>
                <p className="text-2xl font-bold text-orange-600">{results.targetDunkingHeight}"</p>
                <p className="text-sm text-gray-600">Rim Height + Dunking Buffer</p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900 text-center">Personalized Recommendations</h4>
            
            {results.recommendations.map((rec, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                rec.type === 'success' ? 'bg-green-50 border-green-500' :
                rec.type === 'close' ? 'bg-yellow-50 border-yellow-500' :
                rec.type === 'moderate' ? 'bg-orange-50 border-orange-500' :
                rec.type === 'significant' ? 'bg-red-50 border-red-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{rec.title}</h5>
                <p className="text-gray-700 mb-4">{rec.description}</p>
                <div className="flex flex-wrap gap-2">
                  {rec.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.url}
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {link.text}
                      <TrendingUp className="w-4 h-4 ml-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-8 space-x-4">
            <button
              onClick={resetCalculator}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Try Again
            </button>
            <Link
              to={results.canDunk ? "/dunking-skills/first-dunk-guide" : "/vertical-jump-training"}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
            >
              {results.canDunk ? "Learn Dunking Techniques" : "Start Training Program"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DunkCalculator;
