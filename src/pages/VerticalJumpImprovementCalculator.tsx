
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import VerticalJumpImprovementCalculator from "../components/VerticalJumpImprovementCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Calendar, CheckCircle, Zap, Clock } from "lucide-react";

const VerticalJumpImprovementCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Vertical Jump Improvement Calculator | Plan Your Training Goals</title>
        <meta name="description" content="Calculate realistic vertical jump improvement goals and get personalized training recommendations based on your timeframe and current ability." />
        <meta name="keywords" content="vertical jump improvement, training goals, jump training calculator, basketball training" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/vertical-jump-improvement/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Vertical Jump Improvement Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Calculate realistic vertical jump improvement goals and get personalized training recommendations based on your timeframe and current ability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Realistic Goals</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Custom Training Plans</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Progress Tracking</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Science-Based</span>
            </div>
          </section>

          {/* Calculator Section */}
          <div className="max-w-4xl mx-auto mb-12" id="calculator">
            <VerticalJumpImprovementCalculator />
          </div>

          {/* Step-by-Step Guide */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Use the Improvement Calculator</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow these steps to set realistic vertical jump improvement goals and get your personalized training plan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Current Jump Height</h3>
                    <p className="text-gray-600 text-sm">Enter your current vertical jump measurement in inches for baseline assessment.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Training Timeframe</h3>
                    <p className="text-gray-600 text-sm">Select how long you plan to train (weeks/months) for realistic goal setting.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Experience Level</h3>
                    <p className="text-gray-600 text-sm">Choose your training experience to get customized improvement expectations.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Get Your Plan</h3>
                    <p className="text-gray-600 text-sm">Receive realistic goals and personalized training recommendations.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Realistic Expectations */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Realistic Improvement Expectations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Beginner (0-6 months)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 4-8 inches improvement possible</li>
                      <li>• Focus on basic technique</li>
                      <li>• Build foundational strength</li>
                      <li>• 3-4 training days per week</li>
                      <li>• Rapid initial progress</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Intermediate (6-24 months)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 2-6 inches improvement</li>
                      <li>• Advanced plyometrics</li>
                      <li>• Strength training focus</li>
                      <li>• 4-5 training days per week</li>
                      <li>• Steady progress with plateaus</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">Advanced (2+ years)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 1-3 inches improvement</li>
                      <li>• Specialized programs</li>
                      <li>• Peak performance focus</li>
                      <li>• 5-6 training days per week</li>
                      <li>• Slower but quality gains</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Training Factors */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Factors Affecting Improvement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-green-600 mb-4">Positive Factors</h3>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Consistent Training</h4>
                      <p className="text-gray-600">Regular training schedule with proper progression leads to steady improvements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Youth Advantage</h4>
                      <p className="text-gray-600">Younger athletes typically see faster and greater improvements due to neural adaptation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Proper Nutrition</h4>
                      <p className="text-gray-600">Adequate protein intake and overall nutrition support muscle growth and recovery.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Quality Sleep</h4>
                      <p className="text-gray-600">7-9 hours of sleep allow for proper recovery and adaptation to training.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-red-600 mb-4">Limiting Factors</h3>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Training Plateau</h4>
                      <p className="text-gray-600">Progress slows significantly after initial gains, requiring program adjustments.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Age Factor</h4>
                      <p className="text-gray-600">Older athletes may see slower improvements due to reduced neural plasticity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Body Weight</h4>
                      <p className="text-gray-600">Excess body weight can limit improvement potential and jumping efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Genetic Limits</h4>
                      <p className="text-gray-600">Individual genetic factors determine maximum potential for improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Training Timeline */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Typical Improvement Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Weeks 1-4</h3>
                    <p className="text-sm text-gray-600 mb-2">Foundation Building</p>
                    <p className="text-xs text-gray-500">1-2 inch improvement, technique focus, basic strength</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Weeks 5-12</h3>
                    <p className="text-sm text-gray-600 mb-2">Rapid Progress</p>
                    <p className="text-xs text-gray-500">2-4 inch improvement, plyometrics, strength gains</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Weeks 13-24</h3>
                    <p className="text-sm text-gray-600 mb-2">Plateau & Breakthrough</p>
                    <p className="text-xs text-gray-500">1-3 inch improvement, advanced training, consistency key</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">6+ Months</h3>
                    <p className="text-sm text-gray-600 mb-2">Refinement</p>
                    <p className="text-xs text-gray-500">0.5-2 inch improvement, specialization, peak performance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Training Strategies */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Proven Training Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Progressive Overload</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Gradually increase training intensity</li>
                      <li>• Add weight, height, or complexity</li>
                      <li>• Track all workout metrics</li>
                      <li>• Increase by 5-10% weekly</li>
                      <li>• Challenge your limits safely</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Periodization</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Plan training phases</li>
                      <li>• Alternate intensity levels</li>
                      <li>• Include recovery weeks</li>
                      <li>• Peak for specific goals</li>
                      <li>• Prevent overtraining</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Movement Quality</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Perfect technique first</li>
                      <li>• Focus on movement patterns</li>
                      <li>• Video analysis helpful</li>
                      <li>• Quality over quantity</li>
                      <li>• Consistent form standards</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerticalJumpImprovementCalculatorPage;
