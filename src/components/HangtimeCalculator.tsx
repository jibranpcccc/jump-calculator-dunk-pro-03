
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Target, RotateCcw, Zap } from "lucide-react";

const HangtimeCalculator = () => {
  const [verticalJump, setVerticalJump] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateHangtime = useCallback(() => {
    const jumpNum = parseFloat(verticalJump);

    if (!jumpNum || jumpNum <= 0 || jumpNum > 60) {
      setResult("⚠️ Please enter a valid vertical jump between 1-60 inches");
      setShowResult(true);
      return;
    }

    // Physics formula: t = 2 * sqrt(2h/g) where h is height in meters, g is gravity
    const heightInMeters = jumpNum * 0.0254; // Convert inches to meters
    const gravity = 9.81; // m/s²
    const hangtimeSeconds = 2 * Math.sqrt((2 * heightInMeters) / gravity);
    
    let category = "";
    if (hangtimeSeconds >= 1.0) category = "Elite - Michael Jordan Level";
    else if (hangtimeSeconds >= 0.85) category = "Excellent - College Level";
    else if (hangtimeSeconds >= 0.7) category = "Good - High School Level";
    else if (hangtimeSeconds >= 0.5) category = "Average";
    else category = "Below Average";

    setResult(`⏱️ Your hangtime: ${hangtimeSeconds.toFixed(2)} seconds - ${category}`);
    setShowResult(true);
  }, [verticalJump]);

  const resetCalculator = useCallback(() => {
    setVerticalJump("");
    setResult(null);
    setShowResult(false);
  }, []);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <Clock className="h-8 w-8 mr-2" />
          <CardTitle className="text-2xl font-bold">Basketball Hangtime Calculator</CardTitle>
        </div>
        <p className="text-purple-50">
          Calculate how long you stay in the air during your jump!
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="space-y-3">
          <Label htmlFor="vertical-jump" className="flex items-center text-gray-700 font-medium">
            <Zap className="h-4 w-4 mr-2 text-purple-600" />
            Vertical Jump Height (inches)
          </Label>
          <Input
            id="vertical-jump"
            type="number"
            placeholder="e.g., 28"
            value={verticalJump}
            onChange={(e) => setVerticalJump(e.target.value)}
            className="text-center text-lg border-2 focus:border-purple-500"
            min="1"
            max="60"
          />
          <p className="text-xs text-gray-500 text-center">
            Enter your maximum vertical jump height
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={calculateHangtime} 
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 text-lg font-semibold"
            disabled={!verticalJump}
          >
            <Clock className="h-5 w-5 mr-2" />
            Calculate Hangtime
          </Button>
          <Button 
            onClick={resetCalculator} 
            variant="outline"
            className="border-2 border-gray-300 hover:border-purple-500 px-6 py-3"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {showResult && result && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Result:</h3>
            <p className="text-xl mb-4 text-gray-800">{result}</p>
            
            <div className="p-4 bg-purple-100 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Hangtime Standards:</h4>
              <div className="text-sm text-purple-700 space-y-1">
                <p>• Elite: 1.0+ seconds (NBA/Pro level)</p>
                <p>• Excellent: 0.85-0.99 seconds (College level)</p>
                <p>• Good: 0.7-0.84 seconds (High school level)</p>
                <p>• Average: 0.5-0.69 seconds</p>
                <p>• Below Average: Under 0.5 seconds</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium">⏱️ Hangtime = Time spent in the air during jump</p>
            <p>🧮 Formula: Uses physics to calculate based on vertical height</p>
            <p className="text-xs text-gray-500">
              *Michael Jordan's legendary hangtime was approximately 0.92 seconds
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HangtimeCalculator;
