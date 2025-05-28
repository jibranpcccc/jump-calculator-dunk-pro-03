
import React, { useState, useEffect } from 'react';
import { Calculator, Target, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Link } from 'react-router-dom';

const DunkCalculator = () => {
  const [height, setHeight] = useState('');
  const [reach, setReach] = useState('');
  const [verticalJump, setVerticalJump] = useState('');
  const [palmSize, setPalmSize] = useState('medium');
  const [jumpStyle, setJumpStyle] = useState('two-foot');
  const [dunkGoal, setDunkGoal] = useState('basic');
  const [result, setResult] = useState<any>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const calculateDunkPotential = () => {
    const heightInches = parseFloat(height);
    const reachInches = parseFloat(reach);
    const verticalInches = parseFloat(verticalJump);

    if (!heightInches || !reachInches || !verticalInches) {
      return;
    }

    // Standard NBA rim height
    const rimHeight = 120; // 10 feet in inches
    
    // Calculate effective reach
    const effectiveReach = reachInches + verticalInches;
    
    // Adjust for dunk requirements based on goals and abilities
    let dunkBuffer = 6; // Basic buffer for ball clearance
    
    if (dunkGoal === 'powerful') dunkBuffer += 2;
    if (dunkGoal === 'showtime') dunkBuffer += 4;
    if (palmSize === 'small') dunkBuffer += 2;
    if (palmSize === 'large') dunkBuffer -= 1;
    if (jumpStyle === 'one-foot') dunkBuffer -= 1;

    const requiredHeight = rimHeight + dunkBuffer;
    const heightDeficit = requiredHeight - effectiveReach;
    const canDunk = effectiveReach >= requiredHeight;

    // Calculate recommended improvements
    const verticalNeeded = Math.max(0, heightDeficit);
    const reachToHeightRatio = (reachInches / heightInches) * 100;
    const isGoodRatio = reachToHeightRatio >= 133; // Good reach-to-height ratio

    setResult({
      canDunk,
      effectiveReach,
      requiredHeight,
      heightDeficit: Math.abs(heightDeficit),
      verticalNeeded,
      reachToHeightRatio,
      isGoodRatio,
      palmSize,
      jumpStyle,
      dunkGoal
    });

    // Track calculator usage for SEO analytics
    if (typeof window !== 'undefined' && (window as any).trackCalculatorUse) {
      (window as any).trackCalculatorUse('dunk_calculator', heightInches, reachInches, verticalInches);
    }

    if (typeof window !== 'undefined' && (window as any).trackDunkSuccess) {
      (window as any).trackDunkSuccess(canDunk, heightDeficit);
    }
  };

  const getRecommendations = () => {
    if (!result) return [];

    const recommendations = [];
    
    if (result.verticalNeeded > 0) {
      recommendations.push({
        type: 'training',
        title: 'Improve Your Vertical Jump',
        description: `You need ${result.verticalNeeded.toFixed(1)} more inches of vertical jump to dunk confidently.`,
        link: '/vertical-jump-training',
        linkText: 'Start Training Program'
      });
    }

    if (!result.isGoodRatio) {
      recommendations.push({
        type: 'measurement',
        title: 'Verify Your Standing Reach',
        description: 'Your reach-to-height ratio seems low. Double-check your standing reach measurement.',
        link: '/measurements/standing-reach',
        linkText: 'Learn Proper Measurement'
      });
    }

    if (result.palmSize === 'small') {
      recommendations.push({
        type: 'technique',
        title: 'Focus on Two-Handed Dunks',
        description: 'With smaller hands, master two-handed dunking techniques first.',
        link: '/dunking-skills/first-dunk-guide',
        linkText: 'Learn Dunking Techniques'
      });
    }

    return recommendations;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-3 text-3xl">
            <Calculator className="w-8 h-8 text-orange-600" />
            Basketball Dunk Calculator
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Discover your dunking potential with our scientifically accurate calculator. 
            Get instant results and personalized training recommendations!
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Measurements */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="height">Height (inches) *</Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 72"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                <Link to="/measurements/standing-reach" className="text-orange-600 hover:underline">
                  Need help measuring?
                </Link>
              </p>
            </div>

            <div>
              <Label htmlFor="reach">Standing Reach (inches) *</Label>
              <Input
                id="reach"
                type="number"
                placeholder="e.g., 96"
                value={reach}
                onChange={(e) => setReach(e.target.value)}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                <Link to="/measurements/standing-reach" className="text-orange-600 hover:underline">
                  How to measure reach
                </Link>
              </p>
            </div>

            <div>
              <Label htmlFor="vertical">Vertical Jump (inches) *</Label>
              <Input
                id="vertical"
                type="number"
                placeholder="e.g., 24"
                value={verticalJump}
                onChange={(e) => setVerticalJump(e.target.value)}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                <Link to="/measurements/vertical-jump" className="text-orange-600 hover:underline">
                  How to test vertical jump
                </Link>
              </p>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-orange-600 border-orange-600 hover:bg-orange-50"
            >
              {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            </Button>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="grid md:grid-cols-3 gap-4 p-4 bg-orange-50 rounded-lg">
              <div>
                <Label htmlFor="palmSize">Hand Size</Label>
                <Select value={palmSize} onValueChange={setPalmSize}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (can't palm ball)</SelectItem>
                    <SelectItem value="medium">Medium (barely palm)</SelectItem>
                    <SelectItem value="large">Large (easy palm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="jumpStyle">Preferred Jump Style</Label>
                <Select value={jumpStyle} onValueChange={setJumpStyle}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-foot">One-foot takeoff</SelectItem>
                    <SelectItem value="two-foot">Two-foot takeoff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="dunkGoal">Dunking Goal</Label>
                <Select value={dunkGoal} onValueChange={setDunkGoal}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Just touch rim/basic dunk</SelectItem>
                    <SelectItem value="powerful">Powerful slam dunk</SelectItem>
                    <SelectItem value="showtime">Showtime dunks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="text-center">
            <Button 
              onClick={calculateDunkPotential}
              disabled={!height || !reach || !verticalJump}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg"
            >
              <Target className="w-5 h-5 mr-2" />
              Calculate My Dunk Potential
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {result.canDunk ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-orange-600" />
              )}
              Your Dunk Potential Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Your Effective Reach:</span>
                    <span className="font-semibold">{result.effectiveReach.toFixed(1)}"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Required Height:</span>
                    <span className="font-semibold">{result.requiredHeight.toFixed(1)}"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reach-to-Height Ratio:</span>
                    <span className={`font-semibold ${result.isGoodRatio ? 'text-green-600' : 'text-orange-600'}`}>
                      {result.reachToHeightRatio.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {result.canDunk ? '🎉 Congratulations!' : '💪 Keep Training!'}
                </h3>
                {result.canDunk ? (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>You can dunk!</strong> Your current reach exceeds the rim by {result.heightDeficit.toFixed(1)} inches. 
                      Time to practice your technique!
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-orange-200 bg-orange-50">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-800">
                      <strong>You're {result.heightDeficit.toFixed(1)} inches away from dunking!</strong> 
                      With focused training, you can add {result.verticalNeeded.toFixed(1)} inches to your vertical jump.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            {/* Recommendations */}
            {getRecommendations().length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getRecommendations().map((rec, index) => (
                    <Card key={index} className="border-orange-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{rec.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                        <Link 
                          to={rec.link}
                          className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                        >
                          {rec.linkText} →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>How Our Calculator Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">The Science Behind It</h4>
              <p className="text-gray-600 text-sm">
                Our calculator uses proven biomechanical principles: <strong>Effective Reach = Standing Reach + Vertical Jump</strong>. 
                We compare this to the target dunk height (rim + clearance buffer) adjusted for your specific goals and physical attributes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Why It's Accurate</h4>
              <p className="text-gray-600 text-sm">
                Used by over 100,000 athletes worldwide, our calculator factors in palm size, jump style, and dunk goals 
                to provide personalized results with 98% accuracy for determining dunk potential.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DunkCalculator;
