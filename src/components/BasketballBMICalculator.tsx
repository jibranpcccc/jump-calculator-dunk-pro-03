
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, Scale, RotateCcw, Users } from "lucide-react";

const BasketballBMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = useCallback(() => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || heightNum <= 0) {
      setResult("⚠️ Please enter a valid height");
      setShowResult(true);
      return;
    }

    if (!weightNum || weightNum <= 0) {
      setResult("⚠️ Please enter a valid weight");
      setShowResult(true);
      return;
    }

    let bmi: number;
    
    if (unit === "imperial") {
      // BMI = (weight in pounds / (height in inches)²) × 703
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    } else {
      // BMI = weight in kg / (height in meters)²
      bmi = weightNum / (heightNum * heightNum);
    }

    let category = "";
    let basketballNote = "";
    
    if (bmi < 18.5) {
      category = "Underweight";
      basketballNote = "May need to build muscle mass for basketball performance";
    } else if (bmi < 25) {
      category = "Normal weight";
      basketballNote = "Ideal range for most basketball positions";
    } else if (bmi < 30) {
      category = "Overweight";
      basketballNote = "Common for power forwards and centers";
    } else {
      category = "Obese";
      basketballNote = "May affect agility and jumping ability";
    }

    setResult(`📊 BMI: ${bmi.toFixed(1)} - ${category}\n🏀 ${basketballNote}`);
    setShowResult(true);
  }, [height, weight, unit]);

  const resetCalculator = useCallback(() => {
    setHeight("");
    setWeight("");
    setResult(null);
    setShowResult(false);
  }, []);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <Activity className="h-8 w-8 mr-2" />
          <CardTitle className="text-2xl font-bold">Basketball BMI Calculator</CardTitle>
        </div>
        <p className="text-green-50">
          Calculate your BMI and see how it relates to basketball performance
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="flex justify-center mb-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setUnit("imperial")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                unit === "imperial" 
                  ? "bg-green-600 text-white" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Imperial (ft/lbs)
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                unit === "metric" 
                  ? "bg-green-600 text-white" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Metric (cm/kg)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="height" className="flex items-center text-gray-700 font-medium">
              <Users className="h-4 w-4 mr-2 text-green-600" />
              Height ({unit === "imperial" ? "inches" : "cm"})
            </Label>
            <Input
              id="height"
              type="number"
              placeholder={unit === "imperial" ? "e.g., 72" : "e.g., 183"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-center text-lg border-2 focus:border-green-500"
              min="1"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="weight" className="flex items-center text-gray-700 font-medium">
              <Scale className="h-4 w-4 mr-2 text-green-600" />
              Weight ({unit === "imperial" ? "lbs" : "kg"})
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder={unit === "imperial" ? "e.g., 180" : "e.g., 82"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-center text-lg border-2 focus:border-green-500"
              min="1"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={calculateBMI} 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg font-semibold"
            disabled={!height || !weight}
          >
            <Activity className="h-5 w-5 mr-2" />
            Calculate BMI
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
              <h4 className="font-semibold text-green-800 mb-2">Basketball Position Guidelines:</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>• Point Guards: Usually 18.5-22 BMI (lean and agile)</p>
                <p>• Shooting Guards: 20-24 BMI (balanced build)</p>
                <p>• Small Forwards: 22-26 BMI (versatile athletes)</p>
                <p>• Power Forwards: 24-28 BMI (strong and athletic)</p>
                <p>• Centers: 26-32 BMI (size and strength focused)</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium">🏀 BMI is just one factor in basketball performance</p>
            <p>💪 Muscle mass, athleticism, and skill matter more than BMI alone</p>
            <p className="text-xs text-gray-500">
              *Many elite players have BMIs outside "normal" ranges due to muscle mass
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasketballBMICalculator;
