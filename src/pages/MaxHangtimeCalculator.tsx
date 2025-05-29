
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import MaxHangtimeCalculator from "../components/MaxHangtimeCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, TrendingUp, CheckCircle, Zap } from "lucide-react";

const MaxHangtimeCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Max Hangtime Calculator | How Long Can You Stay in the Air?</title>
        <meta name="description" content="Calculate your maximum hangtime based on vertical jump height. Discover the physics behind air time and compare to professional athletes." />
        <meta name="keywords" content="hangtime calculator, air time, vertical jump, basketball physics, jump duration" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/max-hangtime/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Max Hangtime Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Calculate your maximum hangtime based on vertical jump height. Discover the physics behind air time and compare to professional athletes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Physics Based</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Professional Comparison</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Instant Results</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
            </div>
          </section>

          {/* Calculator Section */}
          <div className="max-w-4xl mx-auto mb-12" id="calculator">
            <MaxHangtimeCalculator />
          </div>

          {/* Step-by-Step Guide */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Use the Max Hangtime Calculator</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow these simple steps to calculate your maximum hangtime and understand your airtime potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Your Vertical Jump</h3>
                    <p className="text-gray-600">Accurately measure your maximum vertical jump height in inches. Use proper measuring techniques for best results.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Enter Jump Height</h3>
                    <p className="text-gray-600">Input your vertical jump measurement into the calculator. Make sure to use your best jump height for accurate hangtime.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Get Your Hangtime</h3>
                    <p className="text-gray-600">Receive your exact hangtime in seconds, plus comparisons to professional standards and improvement tips.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What You Need to Know */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Understanding Hangtime Physics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Gravity is Constant</h3>
                      <p className="text-gray-600">Hangtime is calculated using Earth's gravity (9.81 m/s²). This constant determines how long you stay airborne based on jump height.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Height Determines Time</h3>
                      <p className="text-gray-600">The higher you jump, the longer you stay in the air. The relationship follows a square root function, not linear.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Total Airtime</h3>
                      <p className="text-gray-600">Hangtime includes both the upward and downward portions of your jump, from takeoff to landing.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Maximum at Peak</h3>
                      <p className="text-gray-600">You spend the most time near the peak of your jump, which creates the illusion of "floating" in the air.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">No Air Resistance</h3>
                      <p className="text-gray-600">Our calculation assumes no air resistance, which is accurate for human jumping since air resistance is minimal.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Practical Application</h3>
                      <p className="text-gray-600">Understanding hangtime helps with timing for dunks, rebounds, and other basketball skills requiring airtime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hangtime Standards */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Hangtime Standards by Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-sm">REC</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Recreational</h3>
                    <p className="text-2xl font-bold text-gray-600 mb-2">&lt;0.4s</p>
                    <p className="text-sm text-gray-500">Casual players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">AVG</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Average</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">0.4-0.6s</p>
                    <p className="text-sm text-gray-500">Regular players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">GOOD</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Competitive</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">0.6-0.8s</p>
                    <p className="text-sm text-gray-500">High school/college</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-sm">ELITE</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Professional</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">0.8+s</p>
                    <p className="text-sm text-gray-500">NBA level</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Professional Examples */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Professional Player Hangtimes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Michael Jordan</h3>
                  <p className="text-3xl font-bold text-red-600 mb-1">0.92s</p>
                  <p className="text-sm text-gray-500">46" vertical jump</p>
                  <p className="text-xs text-gray-400 mt-2">Legendary "Air" Jordan</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Zion Williamson</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">0.90s</p>
                  <p className="text-sm text-gray-500">45" vertical jump</p>
                  <p className="text-xs text-gray-400 mt-2">Modern powerhouse</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Vince Carter</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-1">0.87s</p>
                  <p className="text-sm text-gray-500">43" vertical jump</p>
                  <p className="text-xs text-gray-400 mt-2">Half-man, half-amazing</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">LeBron James</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">0.81s</p>
                  <p className="text-sm text-gray-500">40" vertical jump</p>
                  <p className="text-xs text-gray-400 mt-2">The King's athleticism</p>
                </div>
              </div>
            </div>
          </section>

          {/* Improving Hangtime */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Improve Your Hangtime</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Plyometric Training</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Box jumps (progressive heights)</li>
                      <li>• Depth jumps (3-4 feet)</li>
                      <li>• Jump squats (explosive)</li>
                      <li>• Broad jumps (horizontal power)</li>
                      <li>• Single-leg bounds</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Strength Building</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Squats (heavy, explosive)</li>
                      <li>• Deadlifts (posterior chain)</li>
                      <li>• Calf raises (ankle power)</li>
                      <li>• Bulgarian split squats</li>
                      <li>• Hip thrusts (glute power)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Technique Focus</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Perfect arm swing timing</li>
                      <li>• Maximize takeoff angle</li>
                      <li>• Core stability training</li>
                      <li>• Landing mechanics</li>
                      <li>• Consistent practice routine</li>
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

export default MaxHangtimeCalculatorPage;
