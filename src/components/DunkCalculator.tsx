
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Target, TrendingUp, Info, AlertCircle, CheckCircle } from 'lucide-react';

const DunkCalculator = () => {
  const [height, setHeight] = useState('');
  const [reach, setReach] = useState('');
  const [vertical, setVertical] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<{
    canDunk: boolean;
    reachHeight: number;
    deficit: number;
    confidence: string;
    recommendations: string[];
  } | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [palmSize, setPalmSize] = useState('medium');
  const [jumpType, setJumpType] = useState('two-foot');
  const [dunkGoal, setDunkGoal] = useState('basic');
  const [palmingAbility, setPalmingAbility] = useState('difficulty');

  const calculateDunk = () => {
    const heightInches = parseFloat(height) * 12;
    const reachInches = parseFloat(reach);
    const verticalInches = parseFloat(vertical);
    
    if (!heightInches || !reachInches || !verticalInches) return;

    // NBA rim height is 120 inches (10 feet)
    const rimHeight = 120;
    
    // Calculate standing reach if not provided (estimate)
    const standingReach = reachInches || (heightInches * 1.3);
    
    // Calculate maximum jump reach
    const maxReach = standingReach + verticalInches;
    
    // Determine required clearance based on advanced settings
    let requiredClearance = 6; // base clearance for basic dunk
    
    if (palmSize === 'small') requiredClearance += 2;
    if (palmSize === 'large') requiredClearance -= 1;
    
    if (jumpType === 'one-foot') requiredClearance += 1;
    
    if (dunkGoal === 'touch-rim') requiredClearance = 0;
    if (dunkGoal === 'grab-rim') requiredClearance = 2;
    if (dunkGoal === 'one-hand') requiredClearance = 4;
    if (dunkGoal === 'two-hand') requiredClearance = 6;
    if (dunkGoal === 'windmill') requiredClearance = 8;
    if (dunkGoal === 'advanced') requiredClearance = 10;
    
    const targetHeight = rimHeight + requiredClearance;
    const deficit = targetHeight - maxReach;
    const canDunk = maxReach >= targetHeight;
    
    // Determine confidence level
    let confidence = 'Low';
    if (maxReach >= targetHeight + 3) confidence = 'Very High';
    else if (maxReach >= targetHeight) confidence = 'High';
    else if (deficit <= 3) confidence = 'Moderate';
    else if (deficit <= 6) confidence = 'Low';
    else confidence = 'Very Low';
    
    // Generate recommendations
    const recommendations = [];
    if (!canDunk) {
      if (deficit <= 2) {
        recommendations.push('You\'re very close! Focus on plyometric training and proper jumping technique.');
      } else if (deficit <= 4) {
        recommendations.push('Implement a structured vertical jump training program focusing on strength and explosiveness.');
      } else if (deficit <= 8) {
        recommendations.push('Start with foundational strength training and gradually add plyometric exercises.');
      } else {
        recommendations.push('Begin with general fitness, flexibility, and basic jump training. Consider focusing on basketball skills first.');
      }
      
      if (palmSize === 'small') {
        recommendations.push('Work on grip strength exercises and consider using basketballs with better grip.');
      }
      
      if (jumpType === 'two-foot' && deficit > 2) {
        recommendations.push('Try experimenting with one-foot takeoffs, which may be more natural for your body type.');
      }
    } else {
      recommendations.push('Congratulations! You have the physical ability to dunk. Practice approach and technique.');
      if (confidence === 'High' || confidence === 'Very High') {
        recommendations.push('You have plenty of clearance. Consider working on different dunk variations.');
      }
    }

    // Age-based recommendations if age is provided
    if (age) {
      const ageNum = parseInt(age);
      if (ageNum < 16) {
        recommendations.push('Focus on fundamental movement patterns and gradual strength development appropriate for your age.');
      } else if (ageNum > 30) {
        recommendations.push('Prioritize proper warm-up, recovery, and injury prevention in your training routine.');
      }
    }

    // Track calculator usage for analytics
    if (typeof window !== 'undefined' && (window as any).trackCalculatorUse) {
      (window as any).trackCalculatorUse('dunk_calculator', height, reach, vertical);
      (window as any).trackDunkSuccess(canDunk, deficit);
    }

    setResult({
      canDunk,
      reachHeight: maxReach,
      deficit: Math.abs(deficit),
      confidence,
      recommendations
    });
  };

  const resetCalculator = () => {
    setHeight('');
    setReach('');
    setVertical('');
    setWeight('');
    setAge('');
    setResult(null);
    setShowAdvanced(false);
    setPalmSize('medium');
    setJumpType('two-foot');
    setDunkGoal('basic');
    setPalmingAbility('difficulty');
  };

  return (
    <div className="max-w-4xl mx-auto" id="calculator">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-2xl">
            <Calculator className="w-6 h-6 mr-2 text-orange-600" />
            Basketball Dunk Calculator
          </CardTitle>
          <CardDescription className="text-lg">
            Enter your measurements to discover if you can dunk a basketball
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height" className="text-sm font-medium">
                Height (feet)
              </Label>
              <Input
                id="height"
                type="number"
                step="0.1"
                min="4"
                max="8"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="6.0"
                className="text-center"
              />
              <p className="text-xs text-gray-500">Your height in feet (e.g., 6.2 for 6'2")</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reach" className="text-sm font-medium">
                Standing Reach (inches)
              </Label>
              <Input
                id="reach"
                type="number"
                step="0.5"
                min="60"
                max="120"
                value={reach}
                onChange={(e) => setReach(e.target.value)}
                placeholder="96"
                className="text-center"
              />
              <p className="text-xs text-gray-500">How high you can reach standing flat-footed</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vertical" className="text-sm font-medium">
                Vertical Jump (inches)
              </Label>
              <Input
                id="vertical"
                type="number"
                step="0.5"
                min="0"
                max="60"
                value={vertical}
                onChange={(e) => setVertical(e.target.value)}
                placeholder="24"
                className="text-center"
              />
              <p className="text-xs text-gray-500">Your maximum vertical jump height</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm"
            >
              <Info className="w-4 h-4 mr-2" />
              {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            </Button>
          </div>

          {showAdvanced && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h4 className="font-medium text-gray-900">Advanced Settings</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Age (Years) - Optional</Label>
                  <Input
                    type="number"
                    min="5"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="25"
                    className="text-center"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Weight (lbs) - Optional</Label>
                  <Input
                    type="number"
                    min="50"
                    max="400"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="180"
                    className="text-center"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Palming Ability</Label>
                  <select
                    value={palmingAbility}
                    onChange={(e) => setPalmingAbility(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="easily">Yes, easily</option>
                    <option value="difficulty">Yes, with difficulty</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Jump Style</Label>
                  <select
                    value={jumpType}
                    onChange={(e) => setJumpType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="standing">Standing</option>
                    <option value="one-foot">Running One-Foot</option>
                    <option value="two-foot">Running Two-Foot</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Your Dunking Goal</Label>
                  <select
                    value={dunkGoal}
                    onChange={(e) => setDunkGoal(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="touch-rim">Touch Rim</option>
                    <option value="grab-rim">Grab Rim</option>
                    <option value="one-hand">One-Hand Dunk</option>
                    <option value="two-hand">Two-Hand Dunk</option>
                    <option value="windmill">Windmill</option>
                    <option value="advanced">Other Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button 
              onClick={calculateDunk} 
              className="flex-1 bg-orange-600 hover:bg-orange-700"
              disabled={!height || !reach || !vertical}
            >
              <Target className="w-4 h-4 mr-2" />
              Calculate Dunk Ability
            </Button>
            {result && (
              <Button variant="outline" onClick={resetCalculator}>
                Reset
              </Button>
            )}
          </div>

          {result && (
            <div className="mt-6 p-6 bg-white border rounded-lg shadow-sm">
              <div className="text-center mb-4">
                {result.canDunk ? (
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
                    <h3 className="text-2xl font-bold text-green-600">Yes, You Can Dunk!</h3>
                  </div>
                ) : (
                  <div className="flex items-center justify-center mb-2">
                    <AlertCircle className="w-8 h-8 text-red-600 mr-2" />
                    <h3 className="text-2xl font-bold text-red-600">Not Yet, But You Can Get There!</h3>
                  </div>
                )}
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span>Max Reach: {result.reachHeight.toFixed(1)}"</span>
                  <span>•</span>
                  <span>Rim Height: 120"</span>
                  {!result.canDunk && (
                    <>
                      <span>•</span>
                      <span>Need: +{result.deficit.toFixed(1)}"</span>
                    </>
                  )}
                </div>
                
                <Badge 
                  variant={result.confidence === 'Very High' || result.confidence === 'High' ? 'default' : 'secondary'}
                  className="mt-2"
                >
                  Confidence: {result.confidence}
                </Badge>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Personalized Recommendations:
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DunkCalculator;
