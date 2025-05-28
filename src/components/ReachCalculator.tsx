
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ruler, Target, RotateCcw, User } from "lucide-react";

const ReachCalculator = () => {
  const [height, setHeight] = useState("");
  const [armspan, setArmspan] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateReach = useCallback(() => {
    const heightNum = parseFloat(height);
    const armspanNum = parseFloat(armspan);

    if (!heightNum || heightNum <= 0 || heightNum > 96) {
      setResult("⚠️ Please enter a valid height between 1-96 inches");
      setShowResult(true);
      return;
    }

    if (!armspanNum || armspanNum <= 0 || armspanNum > 120) {
      setResult("⚠️ Please enter a valid armspan between 1-120 inches");
      setShowResult(true);
      return;
    }

    // Standing reach is approximately 1.33 times height or use armspan/2 + shoulder height
    const estimatedStandingReach = Math.max(heightNum * 1.33, armspanNum * 0.52 + heightNum * 0.13);
    const armspanToHeightRatio = armspanNum / heightNum;
    
    let reachCategory = "";
    if (armspanToHeightRatio >= 1.10) reachCategory = "Exceptional reach advantage";
    else if (armspanToHeightRatio >= 1.05) reachCategory = "Above average reach";
    else if (armspanToHeightRatio >= 0.98) reachCategory = "Average proportions";
    else reachCategory = "Below average reach";

    setResult(`📏 Estimated standing reach: ${estimatedStandingReach.toFixed(1)} inches\n🦅 Armspan-to-height ratio: ${armspanToHeightRatio.toFixed(2)} - ${reachCategory}`);
    setShowResult(true);
  }, [height, armspan]);

  const resetCalculator = useCallback(() => {
    setHeight("");
    setArmspan("");
    setResult(null);
    setShowResult(false);
  }, []);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <Ruler className="h-8 w-8 mr-2" />
          <CardTitle className="text-2xl font-bold">Basketball Reach Calculator</CardTitle>
        </div>
        <p className="text-green-50">
          Calculate your standing reach and wingspan advantage for basketball!
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="height" className="flex items-center text-gray-700 font-medium">
              <User className="h-4 w-4 mr-2 text-green-600" />
              Height (inches)
            </Label>
            <Input
              id="height"
              type="number"
              placeholder="e.g., 72"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-center text-lg border-2 focus:border-green-500"
              min="1"
              max="96"
            />
            <p className="text-xs text-gray-500 text-center">
              Your height in inches
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="armspan" className="flex items-center text-gray-700 font-medium">
              <Target className="h-4 w-4 mr-2 text-green-600" />
              Armspan (inches)
            </Label>
            <Input
              id="armspan"
              type="number"
              placeholder="e.g., 75"
              value={armspan}
              onChange={(e) => setArmspan(e.target.value)}
              className="text-center text-lg border-2 focus:border-green-500"
              min="1"
              max="120"
            />
            <p className="text-xs text-gray-500 text-center">
              Fingertip to fingertip with arms spread
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={calculateReach} 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg font-semibold"
            disabled={!height || !armspan}
          >
            <Ruler className="h-5 w-5 mr-2" />
            Calculate Reach
          </Button>
          <Button 
            onClick={resetCalculator} 
            variant="outline"
            className="border-2 border-gray-300 hover:border-green-500 px-6 py-3"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {showResult && result && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Result:</h3>
            <div className="text-xl mb-4 text-gray-800 whitespace-pre-line">{result}</div>
            
            <div className="p-4 bg-green-100 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">NBA Player Comparisons:</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>• Kevin Durant: 6'11" height, 7'5" wingspan (1.08 ratio)</p>
                <p>• Kawhi Leonard: 6'7" height, 7'3" wingspan (1.09 ratio)</p>
                <p>• Giannis: 6'11" height, 7'3" wingspan (1.06 ratio)</p>
                <p>• Average NBA: 1.04-1.06 wingspan-to-height ratio</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium">📏 Standing reach ≈ Height × 1.33 or calculated from armspan</p>
            <p>🦅 Longer arms = Higher standing reach = Better dunking potential</p>
            <p className="text-xs text-gray-500">
              *Most NBA players have arms longer than their height
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReachCalculator;
