
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComprehensiveSEO from "@/components/ComprehensiveSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator, Activity, Target, TrendingUp } from "lucide-react";

const BasketballBMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    basketballCategory: string;
    recommendations: string[];
    idealRange: string;
  } | null>(null);

  const calculateBMI = () => {
    const heightInInches = parseFloat(height);
    const weightInPounds = parseFloat(weight);
    
    if (!heightInInches || !weightInPounds || heightInInches <= 0 || weightInPounds <= 0) {
      alert("Please enter valid height and weight values");
      return;
    }

    const heightInMeters = heightInInches * 0.0254;
    const weightInKg = weightInPounds * 0.453592;
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    
    let category = "";
    let basketballCategory = "";
    let recommendations: string[] = [];
    let idealRange = "";

    // Standard BMI categories
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // Basketball-specific categories based on athlete standards
    if (bmi < 20) {
      basketballCategory = "Lean Athletic Build";
      idealRange = "20-25";
      recommendations = [
        "Consider strength training to build muscle mass",
        "Focus on protein intake for muscle development", 
        "Excellent for speed and agility positions",
        "May need to add size for post play"
      ];
    } else if (bmi < 25) {
      basketballCategory = "Optimal Athletic Build";
      idealRange = "20-25";
      recommendations = [
        "Excellent BMI range for basketball performance",
        "Maintain current fitness through balanced training",
        "Good balance of speed, strength, and power",
        "Continue current nutrition and training regimen"
      ];
    } else if (bmi < 27) {
      basketballCategory = "Power Forward/Center Build";
      idealRange = "23-27";
      recommendations = [
        "Good for interior positions requiring size",
        "Monitor body fat percentage for optimal performance",
        "Focus on maintaining mobility and agility",
        "Consider position-specific training"
      ];
    } else if (bmi < 30) {
      basketballCategory = "Heavy Interior Build";
      idealRange = "25-28";
      recommendations = [
        "May limit speed and jumping ability",
        "Consider cardiovascular conditioning",
        "Focus on core strength and flexibility",
        "Evaluate nutrition for performance optimization"
      ];
    } else {
      basketballCategory = "Above Optimal Range";
      idealRange = "20-27";
      recommendations = [
        "Recommend consultation with sports nutritionist",
        "Focus on cardiovascular health and mobility",
        "Gradual weight management for performance",
        "Consider low-impact conditioning exercises"
      ];
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      basketballCategory,
      recommendations,
      idealRange
    });
  };

  const faqData = [
    {
      question: "What's the ideal BMI for basketball players?",
      answer: "For basketball players, the ideal BMI typically ranges from 20-27, depending on position. Guards often perform best at 20-24, while forwards and centers may excel at 23-27 due to their need for size and strength."
    },
    {
      question: "How does basketball BMI differ from regular BMI?",
      answer: "Basketball BMI considers the sport's specific demands. While standard BMI may categorize muscular athletes as 'overweight,' basketball BMI accounts for muscle mass, position requirements, and athletic performance needs."
    },
    {
      question: "Should I lose weight if my BMI is high for basketball?",
      answer: "Not necessarily. Focus on body composition rather than just weight. A higher BMI from muscle mass can be beneficial for certain positions. Consult with a sports nutritionist for personalized advice."
    },
    {
      question: "How often should basketball players check their BMI?",
      answer: "Monthly monitoring is ideal during training seasons. BMI should be tracked alongside body fat percentage and performance metrics for a complete picture of athletic conditioning."
    }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="Basketball BMI Calculator - Optimize Your Athletic Performance"
        description="Calculate your basketball-specific BMI with our specialized tool. Get position-specific recommendations and training advice for optimal basketball performance and conditioning."
        keywords="basketball BMI calculator, athletic BMI, basketball player BMI, sports BMI calculator, basketball conditioning, athletic performance"
        canonicalUrl="https://dunkcalculator.com/basketball-bmi-calculator"
        pageType="calculator"
        faqData={faqData}
        breadcrumbs={[
          { name: "Home", url: "https://dunkcalculator.com/" },
          { name: "Calculators", url: "https://dunkcalculator.com/calculators" },
          { name: "Basketball BMI Calculator", url: "https://dunkcalculator.com/basketball-bmi-calculator" }
        ]}
        enableAll={true}
      />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="container mx-auto text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Athletic Performance Tool</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Basketball BMI Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Calculate your basketball-specific BMI with position-based recommendations. 
                Get insights into optimal body composition for peak basketball performance and conditioning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Position-Specific Analysis</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Athletic Standards</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Performance Insights</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Input */}
                <Card className="h-fit">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calculator className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-2xl">BMI Calculator</CardTitle>
                    </div>
                    <p className="text-gray-600">Enter your measurements to calculate basketball-specific BMI</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (inches)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="e.g., 72"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500">Enter your height in inches (e.g., 6'0" = 72 inches)</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (pounds)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="e.g., 180"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500">Enter your weight in pounds</p>
                    </div>
                    
                    <Button 
                      onClick={calculateBMI}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                      size="lg"
                    >
                      Calculate Basketball BMI
                    </Button>
                  </CardContent>
                </Card>

                {/* Results */}
                {result && (
                  <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">Your Basketball BMI Results</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-blue-600 mb-2">{result.bmi}</div>
                        <div className="text-lg font-semibold text-gray-900">{result.basketballCategory}</div>
                        <div className="text-sm text-gray-600">Standard BMI: {result.category}</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Ideal Range for Basketball:</h3>
                        <div className="text-lg font-medium text-green-600">{result.idealRange}</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3">Recommendations:</h3>
                        <div className="space-y-2">
                          {result.recommendations.map((rec, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </section>

          {/* Position Guide */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">BMI by Basketball Position</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Different basketball positions have varying optimal BMI ranges based on their role requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Point Guard / Shooting Guard</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">20-24</div>
                    <p className="text-gray-600 text-sm mb-4">Optimal BMI Range</p>
                    <div className="text-left space-y-1 text-sm text-gray-700">
                      <div>• Emphasizes speed and agility</div>
                      <div>• Quick directional changes</div>
                      <div>• Endurance for full-court play</div>
                      <div>• Lean muscle for efficiency</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Small Forward / Power Forward</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">22-26</div>
                    <p className="text-gray-600 text-sm mb-4">Optimal BMI Range</p>
                    <div className="text-left space-y-1 text-sm text-gray-700">
                      <div>• Balance of size and athleticism</div>
                      <div>• Versatile play requirements</div>
                      <div>• Moderate power needs</div>
                      <div>• Good mobility maintenance</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Center</h3>
                    <div className="text-2xl font-bold text-orange-600 mb-2">24-27</div>
                    <p className="text-gray-600 text-sm mb-4">Optimal BMI Range</p>
                    <div className="text-left space-y-1 text-sm text-gray-700">
                      <div>• Maximum size and strength</div>
                      <div>• Post play dominance</div>
                      <div>• Rebounding advantage</div>
                      <div>• Physical presence in paint</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BMI vs Performance */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">BMI and Basketball Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">Speed</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">BMI 20-22</h3>
                  <p className="text-gray-600 text-sm">Optimal for maximum speed and agility. Best for guards and perimeter players.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">Balance</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">BMI 22-25</h3>
                  <p className="text-gray-600 text-sm">Perfect balance of speed, strength, and power. Ideal for forwards and versatile players.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">Power</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">BMI 25-27</h3>
                  <p className="text-gray-600 text-sm">Maximum strength and power for interior play. Best for centers and power forwards.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">Size</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">BMI 27+</h3>
                  <p className="text-gray-600 text-sm">Emphasis on size over mobility. May require specialized conditioning for optimal performance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">Basketball BMI FAQ</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BasketballBMICalculator;
