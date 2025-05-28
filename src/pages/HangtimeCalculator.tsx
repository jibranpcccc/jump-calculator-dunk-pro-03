
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HangtimeCalculator from "@/components/HangtimeCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HangtimeCalculatorPage = () => {
  const faqData = [
    {
      question: "What is hangtime in basketball?",
      answer: "Hangtime is the total amount of time a player stays in the air during a jump. It's calculated using physics based on how high you jump - the higher you jump, the longer you stay in the air."
    },
    {
      question: "How is hangtime calculated?",
      answer: "Hangtime uses the physics formula: t = 2 × √(2h/g), where h is jump height in meters and g is gravity (9.81 m/s²). The time represents total air time from takeoff to landing."
    },
    {
      question: "What was Michael Jordan's hangtime?",
      answer: "Michael Jordan's legendary hangtime was approximately 0.92 seconds, achieved with his incredible 46-inch vertical jump. This made him appear to 'float' in the air during dunks."
    },
    {
      question: "Can I improve my hangtime?",
      answer: "Yes! Hangtime is directly related to your vertical jump height. By increasing your vertical jump through training, you'll automatically increase your hangtime. A 4-inch jump improvement can add 0.1+ seconds of hangtime."
    }
  ];

  return (
    <>
      <SEOManager
        title="Basketball Hangtime Calculator | Calculate Your Airtime in Seconds"
        description="Calculate how long you stay in the air during basketball jumps! Free hangtime calculator using physics formulas. Compare to Michael Jordan and NBA standards!"
        keywords="hangtime calculator, basketball hangtime, airtime calculator, how long in air basketball, jordan hangtime, vertical jump airtime"
        canonicalUrl="https://dunkcalculator.com/hangtime-calculator"
        pageType="product"
        faqData={faqData}
        enableAnalytics={true}
        enableBreadcrumbs={true}
        enablePerformance={true}
        enableSocialMeta={true}
        enableTechnicalSEO={true}
      />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Basketball Hangtime Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Calculate how long you stay in the air during your basketball jumps! Use physics to determine your hangtime and compare to legendary players like Michael Jordan.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Physics Formula</span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">✓ Jordan Comparison</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Elite Standards</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <HangtimeCalculator />
            </div>
          </section>

          {/* Physics Explanation */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">The Science of Hangtime</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Hangtime is governed by physics and directly related to how high you can jump vertically.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Physics Formula</h3>
                    <p className="text-gray-600 mb-2">t = 2 × √(2h/g)</p>
                    <p className="text-sm text-gray-500">Where h = height, g = gravity (9.81 m/s²)</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Gravity Effect</h3>
                    <p className="text-gray-600 mb-2">What goes up must come down</p>
                    <p className="text-sm text-gray-500">Gravity pulls you back down at 32 feet/second²</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Height = Time</h3>
                    <p className="text-gray-600 mb-2">Higher jumps = longer hangtime</p>
                    <p className="text-sm text-gray-500">Double your jump height = 1.4x hangtime</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Hangtime Standards */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Hangtime Standards by Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-sm">AVG</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Below Average</h3>
                    <p className="text-2xl font-bold text-gray-600 mb-2">&lt;0.5s</p>
                    <p className="text-sm text-gray-500">Recreational players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">OK</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Average</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">0.5-0.69s</p>
                    <p className="text-sm text-gray-500">Typical players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">HS</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Good (High School)</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">0.7-0.84s</p>
                    <p className="text-sm text-gray-500">Varsity level</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-sm">PRO</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Elite (NBA Level)</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">1.0+s</p>
                    <p className="text-sm text-gray-500">Professional</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Famous Hangtimes */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Legendary Basketball Hangtimes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Michael Jordan</h3>
                  <p className="text-3xl font-bold text-red-600 mb-1">0.92s</p>
                  <p className="text-sm text-gray-500">46" vertical jump</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Zion Williamson</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">0.90s</p>
                  <p className="text-sm text-gray-500">45" vertical jump</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Vince Carter</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-1">0.87s</p>
                  <p className="text-sm text-gray-500">43" vertical jump</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">LeBron James</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">0.81s</p>
                  <p className="text-sm text-gray-500">40" vertical jump</p>
                </div>
              </div>
            </div>
          </section>

          {/* Improve Hangtime */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Improve Your Hangtime</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Since hangtime is based on vertical jump height, improving your jump will automatically increase your airtime.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Plyometric Training</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Box jumps</li>
                      <li>• Depth jumps</li>
                      <li>• Jump squats</li>
                      <li>• Bound exercises</li>
                      <li>• Single-leg hops</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Strength Training</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Squats & deadlifts</li>
                      <li>• Calf raises</li>
                      <li>• Bulgarian split squats</li>
                      <li>• Hip thrusts</li>
                      <li>• Olympic lifts</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Technique Focus</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Proper arm swing</li>
                      <li>• Two-foot takeoff</li>
                      <li>• Core engagement</li>
                      <li>• Landing mechanics</li>
                      <li>• Timing practice</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Hangtime Calculator FAQ</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 text-lg">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Basketball Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-test" className="hover:text-orange-600">
                        Vertical Jump Test
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Measure your vertical jump to calculate accurate hangtime.</p>
                    <Link to="/vertical-jump-test" className="text-orange-600 hover:underline text-sm font-medium">
                      Test Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/dunk-calculator" className="hover:text-blue-600">
                        Dunk Calculator
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Find out if you can dunk with your current jumping ability.</p>
                    <Link to="/dunk-calculator" className="text-blue-600 hover:underline text-sm font-medium">
                      Test Dunking →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-green-600">
                        Jump Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Complete training programs to increase your hangtime.</p>
                    <Link to="/vertical-jump-training" className="text-green-600 hover:underline text-sm font-medium">
                      Start Training →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <CallToAction
                title="Calculate Your Basketball Hangtime"
                description="Find out how long you stay in the air during jumps. Compare to Michael Jordan and get tips to improve your hangtime!"
                buttonText="Calculate Hangtime"
                buttonLink="#calculator"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HangtimeCalculatorPage;
