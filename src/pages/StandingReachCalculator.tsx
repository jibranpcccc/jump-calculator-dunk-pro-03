
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import StandingReachCalculator from "../components/StandingReachCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Target, User, CheckCircle, TrendingUp } from "lucide-react";

const StandingReachCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Standing Reach Calculator | Measure Your Basketball Reach</title>
        <meta name="description" content="Calculate your standing reach for basketball and dunking. Essential measurement to determine how high you need to jump to dunk a basketball." />
        <meta name="keywords" content="standing reach calculator, basketball reach, dunk measurement, basketball calculator" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/standing-reach/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Standing Reach Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Calculate your standing reach for basketball and dunking. Essential measurement to determine how high you need to jump to dunk a basketball.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Essential for Dunking</span>
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">✓ NBA Comparisons</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Accurate Formula</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
            </div>
          </section>

          {/* Calculator Section */}
          <div className="max-w-4xl mx-auto mb-12" id="calculator">
            <StandingReachCalculator />
          </div>

          {/* Step-by-Step Guide */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Use the Standing Reach Calculator</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow these simple steps to calculate your standing reach and understand its importance for basketball performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Your Height</h3>
                    <p className="text-gray-600">Stand straight against a wall and measure from floor to the top of your head in inches. Remove shoes for accuracy.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Input Your Measurements</h3>
                    <p className="text-gray-600">Enter your height into the calculator. If you know your actual standing reach, you can input that directly too.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Get Your Results</h3>
                    <p className="text-gray-600">Receive your estimated standing reach, NBA comparisons, and understand what this means for your dunking ability.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What is Standing Reach */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What is Standing Reach?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Definition</h3>
                      <p className="text-gray-600">Standing reach is the height you can reach with both arms fully extended overhead while standing flat-footed on the ground.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Measurement Method</h3>
                      <p className="text-gray-600">Stand against a wall with arms fully extended up. Mark the highest point your fingertips can reach. Measure from floor to mark.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Importance for Dunking</h3>
                      <p className="text-gray-600">Standing reach determines your starting point for dunking. The rim is 120 inches high, so you need to jump enough to overcome the gap.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Height Ratio</h3>
                      <p className="text-gray-600">Standing reach is typically 1.3-1.35 times your height. Longer arms give you an advantage in basketball and dunking.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">NBA Standard</h3>
                      <p className="text-gray-600">Most NBA players have standing reaches between 108-115 inches, giving them significant advantages for dunking and shot blocking.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Cannot Be Improved</h3>
                      <p className="text-gray-600">Unlike vertical jump, standing reach is fixed based on your height and arm length. Focus on improving vertical jump instead.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Measure */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Accurately Measure Standing Reach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Stand Against Wall</h3>
                    <p className="text-gray-600 text-sm">Position yourself flat against a wall with your back, head, and heels touching the surface.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Extend Both Arms</h3>
                    <p className="text-gray-600 text-sm">Raise both arms directly overhead, keeping them straight and reaching as high as possible.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Mark Highest Point</h3>
                    <p className="text-gray-600 text-sm">Have someone mark the highest point your fingertips can reach on the wall.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Measure Distance</h3>
                    <p className="text-gray-600 text-sm">Measure from the floor to the mark. This is your standing reach height.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* NBA Comparisons */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">NBA Player Standing Reach Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Kevin Durant</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">114.25"</p>
                  <p className="text-sm text-gray-500">6'11" height</p>
                  <p className="text-xs text-gray-400 mt-2">Elite wingspan advantage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">LeBron James</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-1">111"</p>
                  <p className="text-sm text-gray-500">6'9" height</p>
                  <p className="text-xs text-gray-400 mt-2">Perfect proportions</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Kawhi Leonard</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">112"</p>
                  <p className="text-sm text-gray-500">6'7" height</p>
                  <p className="text-xs text-gray-400 mt-2">Exceptional wingspan</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Stephen Curry</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">100.5"</p>
                  <p className="text-sm text-gray-500">6'3" height</p>
                  <p className="text-xs text-gray-400 mt-2">Standard proportions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Standing Reach Impact */}
          <section className="py-16 px-4 bg-white rounded-xl shadow-lg mb-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Standing Reach Affects Basketball Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Dunking Ability</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Higher reach = easier dunking</li>
                      <li>• Less vertical jump needed</li>
                      <li>• More dunk variety possible</li>
                      <li>• Better finishing at rim</li>
                      <li>• Intimidation factor</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Ruler className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Defensive Impact</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Better shot blocking ability</li>
                      <li>• Alter more shots</li>
                      <li>• Rebounding advantage</li>
                      <li>• Steal passing lanes</li>
                      <li>• Overall court presence</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Offensive Benefits</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Shoot over defenders</li>
                      <li>• Better layup angles</li>
                      <li>• Post-up advantages</li>
                      <li>• Offensive rebounding</li>
                      <li>• Screen effectiveness</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Calculation Formula */}
          <section className="py-16 px-4 bg-gray-50 rounded-xl shadow-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Standing Reach Calculation Formula</h2>
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">Estimation Formula</h3>
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-blue-600 mb-2">Standing Reach = Height × 1.33</p>
                  <p className="text-gray-600">This is the standard estimation used when actual reach isn't measured</p>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Why 1.33?</h4>
                    <p className="text-gray-600 text-sm">Studies show the average ratio of standing reach to height is between 1.3-1.35 for most people.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Example Calculation</h4>
                    <p className="text-gray-600 text-sm">If you're 72 inches tall: 72 × 1.33 = 95.76 inches standing reach</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">Variation Note</h4>
                    <p className="text-gray-600 text-sm">Some people have longer or shorter arms relative to height, so actual measurement is always more accurate.</p>
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

export default StandingReachCalculatorPage;
