
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ApproachJumpCalculator from "../components/ApproachJumpCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Zap, CheckCircle, Play } from "lucide-react";

const ApproachJumpCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Approach Jump Calculator | Basketball Running Jump vs Standing Jump</title>
        <meta name="description" content="Analyze the effectiveness of your approach jump vs standing jump. Optimize your approach technique for maximum dunking performance with our free calculator." />
        <meta name="keywords" content="approach jump calculator, dunk approach, running vertical jump, basketball training, standing vs running jump" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/approach-jump/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Approach Jump Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Analyze the effectiveness of your approach jump versus standing jump. Optimize your approach technique for maximum dunking performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">✓ Running vs Standing</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Performance Analysis</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Technique Tips</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
            </div>
          </section>

          {/* Calculator Section */}
          <div className="max-w-4xl mx-auto mb-12" id="calculator">
            <ApproachJumpCalculator />
          </div>

          {/* Step-by-Step Guide */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Use the Approach Jump Calculator</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow these steps to analyze your approach jump technique and compare it to your standing jump.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Standing Jump</h3>
                    <p className="text-gray-600">First, measure your standing vertical jump. Jump from a stationary position with no running start. Record your highest reach.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Approach Jump</h3>
                    <p className="text-gray-600">Take 3-5 steps and jump with your preferred approach technique. Measure your highest reach and note the approach length.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Compare & Analyze</h3>
                    <p className="text-gray-600">Enter both measurements to see the difference, get efficiency ratings, and receive personalized improvement recommendations.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What You Need to Know */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Essential Knowledge for Approach Jumping</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Optimal Approach Length</h3>
                      <p className="text-gray-600">Most players benefit from 3-5 step approaches. Longer approaches can reduce efficiency due to fatigue and timing issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Penultimate Step Technique</h3>
                      <p className="text-gray-600">The second-to-last step should be the longest, helping convert horizontal momentum into vertical lift.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Consistent Takeoff Spot</h3>
                      <p className="text-gray-600">Practice taking off from the same spot every time to develop muscle memory and maximize efficiency.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">One-Foot vs Two-Foot</h3>
                      <p className="text-gray-600">One-foot takeoffs typically work better with approach jumps, while two-foot takeoffs are better for standing jumps.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Arm Swing Coordination</h3>
                      <p className="text-gray-600">Coordinate your arm swing with your approach steps for maximum upward momentum transfer.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Speed vs Control Balance</h3>
                      <p className="text-gray-600">Find the sweet spot between approach speed and control. Too fast can hurt timing, too slow reduces momentum benefit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Techniques */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Different Approach Techniques</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Left Foot Takeoff</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Right-handed players typically</li>
                      <li>• Approach from right side</li>
                      <li>• Last two steps: Right-Left</li>
                      <li>• Plant left foot for takeoff</li>
                      <li>• Natural for right-hand dunks</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Right Foot Takeoff</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Left-handed players typically</li>
                      <li>• Approach from left side</li>
                      <li>• Last two steps: Left-Right</li>
                      <li>• Plant right foot for takeoff</li>
                      <li>• Natural for left-hand dunks</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">Two-Foot Takeoff</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Both feet plant simultaneously</li>
                      <li>• Straight-on approach</li>
                      <li>• More power, less finesse</li>
                      <li>• Better for shorter players</li>
                      <li>• Requires more practice</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Performance Analysis */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Understanding Your Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">EXCELLENT</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">6+ inch improvement</h3>
                    <p className="text-sm text-gray-500">Exceptional approach technique</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">GOOD</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">3-5 inch improvement</h3>
                    <p className="text-sm text-gray-500">Solid approach technique</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 font-bold text-sm">FAIR</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">1-2 inch improvement</h3>
                    <p className="text-sm text-gray-500">Room for improvement</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-sm">POOR</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No improvement</h3>
                    <p className="text-sm text-gray-500">Focus on technique</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Approach Jump Mistakes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Too Many Steps</h3>
                    <p className="text-gray-600">Taking too many approach steps can actually decrease your jump height due to fatigue and poor timing.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Poor Last Step</h3>
                    <p className="text-gray-600">Not properly setting up the last step reduces your ability to convert horizontal momentum to vertical lift.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Wrong Foot Takeoff</h3>
                    <p className="text-gray-600">Using your weaker takeoff foot can significantly reduce your jumping efficiency and height.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Inconsistent Approach</h3>
                    <p className="text-gray-600">Varying your approach steps and timing prevents you from developing optimal muscle memory.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Poor Arm Timing</h3>
                    <p className="text-gray-600">Not coordinating your arm swing with your approach steps wastes potential upward momentum.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-600 mb-2">Speed Over Control</h3>
                    <p className="text-gray-600">Running too fast in your approach can hurt your timing and reduce your actual jumping ability.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApproachJumpCalculatorPage;
