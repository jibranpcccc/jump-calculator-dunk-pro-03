
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Target, RotateCcw, Ruler } from "lucide-react";

const VerticalJumpTestCalculator = () => {
  const [standingReach, setStandingReach] = useState("");
  const [jumpReach, setJumpReach] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateVerticalJump = useCallback(() => {
    const standingNum = parseFloat(standingReach);
    const jumpNum = parseFloat(jumpReach);

    if (!standingNum || standingNum <= 0 || standingNum > 150) {
      setResult("⚠️ Please enter a valid standing reach between 1-150 inches");
      setShowResult(true);
      return;
    }

    if (!jumpNum || jumpNum <= 0 || jumpNum > 200) {
      setResult("⚠️ Please enter a valid jump reach between 1-200 inches");
      setShowResult(true);
      return;
    }

    if (jumpNum <= standingNum) {
      setResult("⚠️ Jump reach should be higher than standing reach");
      setShowResult(true);
      return;
    }

    const verticalJump = jumpNum - standingNum;
    let category = "";
    
    if (verticalJump >= 35) category = "Elite (Professional Level)";
    else if (verticalJump >= 28) category = "Excellent (College Level)";
    else if (verticalJump >= 20) category = "Good (High School Level)";
    else if (verticalJump >= 12) category = "Average";
    else category = "Below Average";

    setResult(`📏 Your vertical jump: ${verticalJump.toFixed(1)} inches - ${category}`);
    setShowResult(true);
  }, [standingReach, jumpReach]);

  const resetCalculator = useCallback(() => {
    setStandingReach("");
    setJumpReach("");
    setResult(null);
    setShowResult(false);
  }, []);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="h-8 w-8 mr-2" />
          <CardTitle className="text-2xl font-bold">Vertical Jump Test Calculator</CardTitle>
        </div>
        <p className="text-blue-50">
          Measure your exact vertical jump height and see how you rank!
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="standing-reach" className="flex items-center text-gray-700 font-medium">
              <Ruler className="h-4 w-4 mr-2 text-blue-600" />
              Standing Reach (inches)
            </Label>
            <Input
              id="standing-reach"
              type="number"
              placeholder="e.g., 96"
              value={standingReach}
              onChange={(e) => setStandingReach(e.target.value)}
              className="text-center text-lg border-2 focus:border-blue-500"
              min="1"
              max="150"
            />
            <p className="text-xs text-gray-500 text-center">
              Arms up, fingertips to floor
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="jump-reach" className="flex items-center text-gray-700 font-medium">
              <Target className="h-4 w-4 mr-2 text-blue-600" />
              Jump Reach (inches)
            </Label>
            <Input
              id="jump-reach"
              type="number"
              placeholder="e.g., 124"
              value={jumpReach}
              onChange={(e) => setJumpReach(e.target.value)}
              className="text-center text-lg border-2 focus:border-blue-500"
              min="1"
              max="200"
            />
            <p className="text-xs text-gray-500 text-center">
              Highest point you can reach when jumping
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={calculateVerticalJump} 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold"
            disabled={!standingReach || !jumpReach}
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            Calculate Jump
          </Button>
          <Button 
            onClick={resetCalculator} 
            variant="outline"
            className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {showResult && result && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Result:</h3>
            <p className="text-xl mb-4 text-gray-800">{result}</p>
            
            <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Vertical Jump Standards:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• Elite: 35+ inches (NBA/Pro level)</p>
                <p>• Excellent: 28-34 inches (College level)</p>
                <p>• Good: 20-27 inches (High school level)</p>
                <p>• Average: 12-19 inches</p>
                <p>• Below Average: Under 12 inches</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium">📏 How to test: Stand and reach up, mark highest point</p>
            <p>🦘 Jump and touch highest point possible</p>
            <p className="text-xs text-gray-500">
              *Subtract standing reach from jump reach for vertical jump height
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VerticalJumpTestCalculator;
