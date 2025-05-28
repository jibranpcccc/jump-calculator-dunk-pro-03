import React, { useState } from 'react';
import { Calculator, TrendingUp, Target, Users, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DunkCalculatorProps {
  // Add any props you need here
}

interface DunkCalculatorResult {
  verdict: string;
  verdictColor: string;
  maxJumpReach: number;
  clearanceAboveRim: number;
  clearanceAboveDunk: number;
  verticalNeededToTouchRim: number;
  verticalNeededToDunk: number;
  ageComparison?: string;
  standingReachInches: number;
  rimHeightInches: number;
  targetDunkHeight: number;
}

type HeightUnit = 'ft' | 'cm';
type WeightUnit = 'lbs' | 'kg';
type VerticalJumpUnit = 'in' | 'cm';
type RimHeightUnit = 'ft' | 'm';
type PalmingAbility = 'yes-easily' | 'yes-difficulty' | 'no';
type JumpType = 'standing' | 'running-one' | 'running-two';
type DunkingGoal = 'touch-rim' | 'one-handed' | 'two-handed' | 'windmill' | 'other';

interface DunkCalculatorInputs {
  height: number;
  heightUnit: 'ft' | 'cm';
  heightFeet?: number;
  heightInches?: number;
  standingReach: number;
  standingReachUnit: 'ft' | 'cm';
  verticalJump: number;
  verticalJumpUnit: 'in' | 'cm';
  rimHeight: number;
  rimHeightUnit: 'ft' | 'm';
  palmingAbility: 'yes-easily' | 'yes-difficulty' | 'no';
  jumpType: 'standing' | 'running-one' | 'running-two';
  age?: number;
  weight?: number;
  weightUnit: 'lbs' | 'kg';
  dunkingGoal: 'touch-rim' | 'one-handed' | 'two-handed' | 'windmill' | 'other';
}

const DunkCalculator = () => {

  const [inputs, setInputs] = useState<DunkCalculatorInputs>({
    height: 0,
    heightUnit: 'ft',
    heightFeet: 6,
    heightInches: 0,
    standingReach: 0,
    standingReachUnit: 'ft',
    verticalJump: 0,
    verticalJumpUnit: 'in',
    rimHeight: 10,
    rimHeightUnit: 'ft',
    palmingAbility: 'no',
    jumpType: 'running-two',
    age: undefined,
    weight: undefined,
    weightUnit: 'lbs',
    dunkingGoal: 'two-handed'
  });

  const [results, setResults] = useState<any>(null);

  const convertToInches = (value: number, unit: string) => {
    switch (unit) {
      case 'ft': return value * 12;
      case 'cm': return value / 2.54;
      case 'm': return value * 39.37;
      default: return value;
    }
  };

  const calculateDunkPotential = () => {
    // Enhanced calculation logic
    let standingReachInches = inputs.standingReachUnit === 'ft' 
      ? inputs.standingReach * 12 
      : inputs.standingReach / 2.54;

    let verticalJumpInches = inputs.verticalJumpUnit === 'in' 
      ? inputs.verticalJump 
      : inputs.verticalJump / 2.54;

    let rimHeightInches = inputs.rimHeightUnit === 'ft' 
      ? inputs.rimHeight * 12 
      : inputs.rimHeight * 39.37;

    // Adjust vertical based on jump type
    if (inputs.jumpType === 'running-one') {
      verticalJumpInches += 2; // Running jump bonus
    } else if (inputs.jumpType === 'running-two') {
      verticalJumpInches += 4; // Two-foot running jump bonus
    }

    const maxJumpReach = standingReachInches + verticalJumpInches;
    
    // Dynamic dunk buffer based on palming ability and goal
    let dunkBuffer = 6; // Base buffer
    if (inputs.palmingAbility === 'yes-easily') {
      dunkBuffer = 4;
    } else if (inputs.palmingAbility === 'yes-difficulty') {
      dunkBuffer = 5;
    }

    // Adjust buffer based on dunk goal
    switch (inputs.dunkingGoal) {
      case 'touch-rim': dunkBuffer = 0; break;
      case 'one-handed': dunkBuffer += 2; break;
      case 'windmill': dunkBuffer += 6; break;
      case 'other': dunkBuffer += 8; break;
    }

    const targetDunkHeight = rimHeightInches + dunkBuffer;
    const clearanceAboveRim = maxJumpReach - rimHeightInches;
    const clearanceAboveDunk = maxJumpReach - targetDunkHeight;
    
    const verticalNeededToTouchRim = Math.max(0, rimHeightInches - standingReachInches);
    const verticalNeededToDunk = Math.max(0, targetDunkHeight - standingReachInches);

    // Determine verdict
    let verdict = '';
    let verdictColor = '';
    if (clearanceAboveDunk >= 0) {
      verdict = 'YES! You Can Likely Dunk!';
      verdictColor = 'text-green-600';
    } else if (clearanceAboveDunk >= -4) {
      verdict = 'ALMOST THERE! You\'re Just Inches Away!';
      verdictColor = 'text-orange-600';
    } else {
      verdict = 'MORE LIFT NEEDED! Let\'s Start Your Journey!';
      verdictColor = 'text-red-600';
    }

    // Age-based comparison
    let ageComparison = '';
    if (inputs.age) {
      const avgVerticals: { [key: string]: number } = {
        '13-14': 16, '15-16': 20, '17-18': 24, '19-22': 26, '23-30': 24, '30+': 20
      };
      
      let ageGroup = '30+';
      if (inputs.age <= 14) ageGroup = '13-14';
      else if (inputs.age <= 16) ageGroup = '15-16';
      else if (inputs.age <= 18) ageGroup = '17-18';
      else if (inputs.age <= 22) ageGroup = '19-22';
      else if (inputs.age <= 30) ageGroup = '23-30';
      
      const avgForAge = avgVerticals[ageGroup];
      if (verticalJumpInches >= avgForAge + 4) ageComparison = 'Excellent';
      else if (verticalJumpInches >= avgForAge + 2) ageComparison = 'Good';
      else if (verticalJumpInches >= avgForAge - 2) ageComparison = 'Average';
      else if (verticalJumpInches >= avgForAge - 4) ageComparison = 'Below Average';
      else ageComparison = 'Poor';
    }

    setResults({
      verdict,
      verdictColor,
      maxJumpReach: Math.round(maxJumpReach),
      clearanceAboveRim: Math.round(clearanceAboveRim),
      clearanceAboveDunk: Math.round(clearanceAboveDunk),
      verticalNeededToTouchRim: Math.round(verticalNeededToTouchRim),
      verticalNeededToDunk: Math.round(verticalNeededToDunk),
      ageComparison,
      standingReachInches: Math.round(standingReachInches),
      rimHeightInches: Math.round(rimHeightInches),
      targetDunkHeight: Math.round(targetDunkHeight)
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-orange-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Can You Dunk? Find Out Now & Unlock Your Vertical Potential!</h2>
        </div>
        <p className="text-lg text-gray-600">
          Enter your measurements below to discover your dunking potential and get personalized training recommendations
        </p>
      </div>

      {/* Input Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Standing Reach */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Standing Reach *
            <Link to="/measurements/standing-reach" className="ml-2 text-orange-600 hover:text-orange-700">
              <Info className="w-4 h-4 inline" />
            </Link>
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              step="0.5"
              value={inputs.standingReach || ''}
              onChange={(e) => setInputs({...inputs, standingReach: parseFloat(e.target.value) || 0})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="0"
            />
            <select
              value={inputs.standingReachUnit}
              onChange={(e) => setInputs({...inputs, standingReachUnit: e.target.value as 'ft' | 'cm'})}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="ft">ft</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>

        {/* Current Vertical Jump */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Current Vertical Jump *
            <Link to="/measurements/vertical-jump" className="ml-2 text-orange-600 hover:text-orange-700">
              <Info className="w-4 h-4 inline" />
            </Link>
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              step="0.5"
              value={inputs.verticalJump || ''}
              onChange={(e) => setInputs({...inputs, verticalJump: parseFloat(e.target.value) || 0})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="0"
            />
            <select
              value={inputs.verticalJumpUnit}
              onChange={(e) => setInputs({...inputs, verticalJumpUnit: e.target.value as 'in' | 'cm'})}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>

        {/* Rim Height */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Basketball Rim Height
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              step="0.5"
              value={inputs.rimHeight || ''}
              onChange={(e) => setInputs({...inputs, rimHeight: parseFloat(e.target.value) || 10})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="10"
            />
            <select
              value={inputs.rimHeightUnit}
              onChange={(e) => setInputs({...inputs, rimHeightUnit: e.target.value as 'ft' | 'm'})}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="ft">ft</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>
      </div>

      {/* Optional Inputs */}
      <div className="border-t pt-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Optional: For More Detailed Results</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Palming Ability */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Can You Palm a Basketball?
            </label>
            <select
              value={inputs.palmingAbility}
              onChange={(e) => setInputs({...inputs, palmingAbility: e.target.value as any})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="yes-easily">Yes, easily</option>
              <option value="yes-difficulty">Yes, with some difficulty</option>
              <option value="no">No, I cannot</option>
            </select>
          </div>

          {/* Jump Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Primary Jump Type
            </label>
            <select
              value={inputs.jumpType}
              onChange={(e) => setInputs({...inputs, jumpType: e.target.value as any})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="standing">Standing Jump (No Run-up)</option>
              <option value="running-one">Running Jump (One-Foot Takeoff)</option>
              <option value="running-two">Running Jump (Two-Foot Takeoff)</option>
            </select>
          </div>

          {/* Dunking Goal */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              My Dunking Goal
            </label>
            <select
              value={inputs.dunkingGoal}
              onChange={(e) => setInputs({...inputs, dunkingGoal: e.target.value as any})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="touch-rim">Just Touch the Rim</option>
              <option value="one-handed">One-Handed Dunk</option>
              <option value="two-handed">Two-Handed Dunk</option>
              <option value="windmill">Basic Windmill</option>
              <option value="other">Other Advanced Dunk</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Age (Years)
            </label>
            <input
              type="number"
              value={inputs.age || ''}
              onChange={(e) => setInputs({...inputs, age: parseInt(e.target.value) || undefined})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Optional"
            />
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center mb-8">
        <button
          onClick={calculateDunkPotential}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Calculator className="w-6 h-6 mr-2" />
          Calculate My Dunk Potential!
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="border-t pt-8">
          {/* Verdict */}
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 ${results.verdictColor}`}>
              {results.verdict}
            </h3>
            
            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-full h-8 mb-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold"
                   style={{width: `${(results.standingReachInches / results.targetDunkHeight) * 100}%`}}>
                Standing Reach: {results.standingReachInches}"
              </div>
              <div className="absolute top-0 h-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold"
                   style={{
                     left: `${(results.standingReachInches / results.targetDunkHeight) * 100}%`,
                     width: `${((results.maxJumpReach - results.standingReachInches) / results.targetDunkHeight) * 100}%`
                   }}>
                +{results.maxJumpReach - results.standingReachInches}" Jump
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-gray-700">
                Target: {results.targetDunkHeight}"
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-1">Max Jump Reach</h4>
              <p className="text-2xl font-bold text-blue-600">{results.maxJumpReach}"</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-1">Above/Below Rim</h4>
              <p className="text-2xl font-bold text-green-600">
                {results.clearanceAboveRim >= 0 ? '+' : ''}{results.clearanceAboveRim}"
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-1">Needed to Touch Rim</h4>
              <p className="text-2xl font-bold text-orange-600">{results.verticalNeededToTouchRim}"</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-1">Needed to Dunk</h4>
              <p className="text-2xl font-bold text-red-600">{results.verticalNeededToDunk}"</p>
            </div>
          </div>

          {/* Age Comparison */}
          {results.ageComparison && (
            <div className="bg-purple-50 p-4 rounded-lg mb-8">
              <p className="text-center text-gray-700">
                Based on your age ({inputs.age}), your current vertical jump is considered{' '}
                <strong>{results.ageComparison}</strong>.{' '}
                <Link to="/vertical-jump-benchmarks" className="text-orange-600 underline">
                  See how you compare to others in your age group →
                </Link>
              </p>
            </div>
          )}

          {/* Personalized Recommendations */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Personalized Path to Dunking:</h3>
            
            {results.clearanceAboveDunk >= 0 && (
              <div className="space-y-3">
                <p className="text-green-700 font-semibold">
                  🎉 Congratulations! You've got the hops! Ready to take it to the next level?
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/dunking-skills/types-of-dunks" 
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Learn Advanced Dunking Techniques <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link to="/dunking-skills/first-dunk-guide" 
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Perfect Your Dunking Form <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {results.clearanceAboveDunk < 0 && results.clearanceAboveDunk >= -4 && (
              <div className="space-y-3">
                <p className="text-orange-700 font-semibold">
                  🔥 You're so close to throwing it down! A little focused effort can get you there.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/vertical-jump-training/plyometrics" 
                        className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    Key Plyometric Exercises <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link to="/vertical-jump-training/programs" 
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    4-Week Vertical Blast Program <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {results.clearanceAboveDunk < -4 && (
              <div className="space-y-3">
                <p className="text-red-700 font-semibold">
                  💪 Every great journey starts with a single step (or jump!). Let's build your foundation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/vertical-jump-training" 
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Ultimate Vertical Jump Guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link to="/vertical-jump-training/strength-training" 
                        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    Strength Training for Jumpers <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {inputs.palmingAbility === 'no' && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700">
                  💡 <strong>Pro Tip:</strong> Improving your grip can make a big difference.{' '}
                  <Link to="/dunking-skills/how-to-palm-basketball" className="underline">
                    Learn How to Palm a Basketball →
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DunkCalculator;
