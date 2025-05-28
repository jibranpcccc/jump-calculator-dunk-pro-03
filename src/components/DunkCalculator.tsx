
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Target, TrendingUp } from "lucide-react";

const DunkCalculator = () => {
  const [height, setHeight] = useState("");
  const [reach, setReach] = useState("");
  const [verticalJump, setVerticalJump] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateDunk = () => {
    const heightNum = parseFloat(height);
    const reachNum = parseFloat(reach);
    const jumpNum = parseFloat(verticalJump);

    if (!heightNum || !reachNum || !jumpNum) {
      setResult("Please fill in all fields with valid numbers");
      setShowResult(true);
      return;
    }

    // Basketball rim height is 10 feet (120 inches)
    const rimHeight = 120;
    const maxReach = heightNum + reachNum + jumpNum;

    if (maxReach >= rimHeight) {
      const surplus = maxReach - rimHeight;
      setResult(`🏀 YES! You can dunk! You can reach ${surplus.toFixed(1)} inches above the rim.`);
    } else {
      const deficit = rimHeight - maxReach;
      setResult(`❌ Not quite yet. You need ${deficit.toFixed(1)} more inches to dunk.`);
    }
    setShowResult(true);
  };

  const resetCalculator = () => {
    setHeight("");
    setReach("");
    setVerticalJump("");
    setResult(null);
    setShowResult(false);
  };

  return (
    <div id="calculator" className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-orange-600 mr-2" />
            <CardTitle className="text-2xl font-bold">Dunk Calculator</CardTitle>
          </div>
          <p className="text-gray-600">
            Find out if you can dunk a basketball! Enter your measurements below.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height" className="flex items-center">
                <Target className="h-4 w-4 mr-1" />
                Height (inches)
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 72"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Your standing height</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reach" className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Standing Reach (inches)
              </Label>
              <Input
                id="reach"
                type="number"
                placeholder="e.g., 96"
                value={reach}
                onChange={(e) => setReach(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Arms up, fingertips to floor</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vertical" className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Vertical Jump (inches)
              </Label>
              <Input
                id="vertical"
                type="number"
                placeholder="e.g., 28"
                value={verticalJump}
                onChange={(e) => setVerticalJump(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">How high you can jump</p>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={calculateDunk} className="bg-orange-600 hover:bg-orange-700">
              Calculate My Dunk
            </Button>
            <Button onClick={resetCalculator} variant="outline">
              Reset
            </Button>
          </div>

          {showResult && result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Result:</h3>
              <p className="text-lg">{result}</p>
              {result.includes("YES") && (
                <p className="text-sm text-green-600 mt-2">
                  🎉 Congratulations! You have the reach to dunk!
                </p>
              )}
              {result.includes("Not quite") && (
                <p className="text-sm text-blue-600 mt-2">
                  💪 Keep training! Check out our vertical jump training tips.
                </p>
              )}
            </div>
          )}

          <div className="text-center text-sm text-gray-500">
            <p>NBA rim height: 10 feet (120 inches)</p>
            <p>Calculate: Height + Standing Reach + Vertical Jump ≥ 120 inches</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DunkCalculator;
