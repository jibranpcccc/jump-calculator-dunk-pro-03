
import { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Target, TrendingUp, RotateCcw, Info } from "lucide-react";

const DunkCalculator = () => {
  const [height, setHeight] = useState("");
  const [reach, setReach] = useState("");
  const [verticalJump, setVerticalJump] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Auto-estimate reach based on height if reach is empty
  useEffect(() => {
    if (height && !reach) {
      const heightNum = parseFloat(height);
      if (heightNum > 0) {
        const estimatedReach = Math.round(heightNum * 1.33); // Average reach ratio
        setReach(estimatedReach.toString());
      }
    }
  }, [height, reach]);

  const calculateDunk = useCallback(() => {
    const heightNum = parseFloat(height);
    const reachNum = parseFloat(reach);
    const jumpNum = parseFloat(verticalJump);

    // Enhanced validation with better user feedback
    if (!heightNum || heightNum <= 0 || heightNum > 120) {
      setResult("⚠️ Please enter a valid height between 1-120 inches (most people are 60-84 inches)");
      setShowResult(true);
      setShowTips(false);
      return;
    }

    if (!reachNum || reachNum <= 0 || reachNum > 150) {
      setResult("⚠️ Please enter a valid reach between 1-150 inches (usually 1.3x your height)");
      setShowResult(true);
      setShowTips(false);
      return;
    }

    if (!jumpNum || jumpNum < 0 || jumpNum > 60) {
      setResult("⚠️ Please enter a valid vertical jump between 0-60 inches (average is 16-28 inches)");
      setShowResult(true);
      setShowTips(false);
      return;
    }

    // Basketball rim height is 10 feet (120 inches)
    const rimHeight = 120;
    const maxReach = reachNum + jumpNum; // Standing reach + vertical jump

    console.log("Dunk calculation:", { 
      heightNum, 
      reachNum, 
      jumpNum, 
      maxReach, 
      rimHeight,
      formula: "Standing Reach + Vertical Jump vs 120 inches"
    });

    if (maxReach >= rimHeight) {
      const surplus = maxReach - rimHeight;
      setResult(`🏀 YES! You can dunk! Your max reach is ${maxReach}" - that's ${surplus.toFixed(1)}" above the rim!`);
      setShowTips(true);
    } else {
      const deficit = rimHeight - maxReach;
      setResult(`❌ Not quite yet. You reach ${maxReach}" but need ${deficit.toFixed(1)}" more to touch the rim (120").`);
      setShowTips(true);
    }
    setShowResult(true);
  }, [height, reach, verticalJump]);

  const resetCalculator = useCallback(() => {
    setHeight("");
    setReach("");
    setVerticalJump("");
    setResult(null);
    setShowResult(false);
    setShowTips(false);
  }, []);

  return (
    <div id="calculator" className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-t-lg">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 mr-2" />
            <CardTitle className="text-2xl font-bold">Dunk Calculator</CardTitle>
          </div>
          <p className="text-orange-50">
            Find out if you can dunk a basketball! Enter your measurements below.
          </p>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label htmlFor="height" className="flex items-center text-gray-700 font-medium">
                <Target className="h-4 w-4 mr-2 text-orange-600" />
                Height (inches)
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 72 (6 feet)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="text-center text-lg border-2 focus:border-orange-500"
                min="1"
                max="120"
                aria-describedby="height-help"
              />
              <p id="height-help" className="text-xs text-gray-500 text-center">
                Your standing height without shoes
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="reach" className="flex items-center text-gray-700 font-medium">
                <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
                Standing Reach (inches)
              </Label>
              <Input
                id="reach"
                type="number"
                placeholder="e.g., 96"
                value={reach}
                onChange={(e) => setReach(e.target.value)}
                className="text-center text-lg border-2 focus:border-orange-500"
                min="1"
                max="150"
                aria-describedby="reach-help"
              />
              <p id="reach-help" className="text-xs text-gray-500 text-center">
                Arms up, fingertips to floor
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="vertical" className="flex items-center text-gray-700 font-medium">
                <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
                Vertical Jump (inches)
              </Label>
              <Input
                id="vertical"
                type="number"
                placeholder="e.g., 28"
                value={verticalJump}
                onChange={(e) => setVerticalJump(e.target.value)}
                className="text-center text-lg border-2 focus:border-orange-500"
                min="0"
                max="60"
                aria-describedby="vertical-help"
              />
              <p id="vertical-help" className="text-xs text-gray-500 text-center">
                How high you can jump up
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={calculateDunk} 
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 text-lg font-semibold"
              disabled={!height || !reach || !verticalJump}
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate My Dunk
            </Button>
            <Button 
              onClick={resetCalculator} 
              variant="outline"
              className="border-2 border-gray-300 hover:border-orange-500 px-6 py-3"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {showResult && result && (
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Result:</h3>
              <p className="text-xl mb-4 text-gray-800">{result}</p>
              
              {showTips && (
                <>
                  {result.includes("YES") && (
                    <div className="p-4 bg-green-100 rounded-lg border border-green-200 mb-4">
                      <p className="text-green-700 font-medium">
                        🎉 Congratulations! You have the reach to dunk a basketball!
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Practice your technique and you'll be dunking in no time!
                      </p>
                    </div>
                  )}
                  
                  {result.includes("Not quite") && (
                    <div className="p-4 bg-blue-100 rounded-lg border border-blue-200 mb-4">
                      <p className="text-blue-700 font-medium">
                        💪 Keep training! You're on your way to dunking.
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        Focus on increasing your vertical jump through plyometric training!
                      </p>
                    </div>
                  )}

                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div className="text-sm text-yellow-700">
                        <p className="font-medium mb-1">Pro Tips:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Practice on lower rims (8-9 feet) first</li>
                          <li>• Work on your approach and timing</li>
                          <li>• Build leg strength with squats and plyometrics</li>
                          <li>• Improve your vertical jump gradually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-medium">📏 NBA rim height: 10 feet (120 inches)</p>
              <p>📊 Formula: Standing Reach + Vertical Jump ≥ 120 inches</p>
              <p className="text-xs text-gray-500">
                *Results are estimates. Actual dunking requires technique and practice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DunkCalculator;
