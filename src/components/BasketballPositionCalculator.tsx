
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Target, RotateCcw, Trophy } from "lucide-react";

const BasketballPositionCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [verticalJump, setVerticalJump] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculatePosition = useCallback(() => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const jumpNum = parseFloat(verticalJump);

    if (!heightNum || heightNum <= 0 || heightNum > 96) {
      setResult("⚠️ Please enter a valid height between 1-96 inches");
      setShowResult(true);
      return;
    }

    if (!weightNum || weightNum <= 0 || weightNum > 400) {
      setResult("⚠️ Please enter a valid weight between 1-400 lbs");
      setShowResult(true);
      return;
    }

    if (!jumpNum || jumpNum <= 0 || jumpNum > 60) {
      setResult("⚠️ Please enter a valid vertical jump between 1-60 inches");
      setShowResult(true);
      return;
    }

    const heightInFeet = heightNum / 12;
    const bmi = (weightNum / (heightNum * heightNum)) * 703;
    
    let primaryPosition = "";
    let secondaryPosition = "";
    let reasoning = "";

    if (heightInFeet >= 6.8) {
      primaryPosition = "Center (C)";
      secondaryPosition = jumpNum >= 25 ? "Power Forward (PF)" : "Center (C)";
      reasoning = "Your height makes you ideal for playing in the paint, protecting the rim, and grabbing rebounds.";
    } else if (heightInFeet >= 6.5) {
      primaryPosition = "Power Forward (PF)";
      secondaryPosition = jumpNum >= 28 ? "Small Forward (SF)" : "Center (C)";
      reasoning = "Perfect size for post play while maintaining mobility. Can stretch the floor or work inside.";
    } else if (heightInFeet >= 6.2) {
      primaryPosition = "Small Forward (SF)";
      secondaryPosition = jumpNum >= 25 ? "Shooting Guard (SG)" : "Power Forward (PF)";
      reasoning = "Versatile position allowing you to play inside and outside. Great for modern basketball.";
    } else if (heightInFeet >= 5.9) {
      primaryPosition = "Shooting Guard (SG)";
      secondaryPosition = jumpNum >= 30 ? "Small Forward (SF)" : "Point Guard (PG)";
      reasoning = "Ideal for perimeter scoring, mid-range shots, and defensive versatility.";
    } else {
      primaryPosition = "Point Guard (PG)";
      secondaryPosition = jumpNum >= 25 ? "Shooting Guard (SG)" : "Point Guard (PG)";
      reasoning = "Perfect for ball handling, court vision, and leading the team's offense.";
    }

    setResult(`🏀 Primary Position: ${primaryPosition}\n🎯 Secondary Position: ${secondaryPosition}\n\n💡 Why: ${reasoning}\n\n📊 Your Profile:\n• Height: ${heightInFeet.toFixed(1)}' (${heightNum}")\n• BMI: ${bmi.toFixed(1)}\n• Vertical Jump: ${jumpNum}"`);
    setShowResult(true);
  }, [height, weight, verticalJump]);

  const resetCalculator = useCallback(() => {
    setHeight("");
    setWeight("");
    setVerticalJump("");
    setResult(null);
    setShowResult(false);
  }, []);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-8 w-8 mr-2" />
          <CardTitle className="text-2xl font-bold">Basketball Position Calculator</CardTitle>
        </div>
        <p className="text-orange-50">
          Find your ideal basketball position based on your physical attributes!
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <Label htmlFor="height-pos" className="flex items-center text-gray-700 font-medium">
              <Target className="h-4 w-4 mr-2 text-orange-600" />
              Height (inches)
            </Label>
            <Input
              id="height-pos"
              type="number"
              placeholder="e.g., 72"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-center text-lg border-2 focus:border-orange-500"
              min="1"
              max="96"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="weight-pos" className="flex items-center text-gray-700 font-medium">
              <Trophy className="h-4 w-4 mr-2 text-orange-600" />
              Weight (lbs)
            </Label>
            <Input
              id="weight-pos"
              type="number"
              placeholder="e.g., 180"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-center text-lg border-2 focus:border-orange-500"
              min="1"
              max="400"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="vertical-pos" className="flex items-center text-gray-700 font-medium">
              <Target className="h-4 w-4 mr-2 text-orange-600" />
              Vertical Jump (inches)
            </Label>
            <Input
              id="vertical-pos"
              type="number"
              placeholder="e.g., 28"
              value={verticalJump}
              onChange={(e) => setVerticalJump(e.target.value)}
              className="text-center text-lg border-2 focus:border-orange-500"
              min="1"
              max="60"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={calculatePosition} 
            className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 text-lg font-semibold"
            disabled={!height || !weight || !verticalJump}
          >
            <Users className="h-5 w-5 mr-2" />
            Find My Position
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
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Your Basketball Position:</h3>
            <div className="text-lg mb-4 text-gray-800 whitespace-pre-line">{result}</div>
            
            <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Position Guide:</h4>
              <div className="text-sm text-orange-700 space-y-1">
                <p>• <strong>Point Guard (PG):</strong> Floor general, ball handler, facilitator</p>
                <p>• <strong>Shooting Guard (SG):</strong> Perimeter scorer, defender</p>
                <p>• <strong>Small Forward (SF):</strong> Versatile wing player</p>
                <p>• <strong>Power Forward (PF):</strong> Interior/exterior hybrid</p>
                <p>• <strong>Center (C):</strong> Rim protector, rebounder</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium">🏀 Position based on height, weight, and athleticism</p>
            <p>📈 Modern basketball values versatility and skill over traditional size</p>
            <p className="text-xs text-gray-500">
              *Positions are suggestions - skill development is most important!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasketballPositionCalculator;
