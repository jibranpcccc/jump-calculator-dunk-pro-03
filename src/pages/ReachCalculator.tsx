
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReachCalculator from "@/components/ReachCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Ruler, User, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ReachCalculatorPage = () => {
  const faqData = [
    {
      question: "How do I measure my armspan accurately?",
      answer: "Stand with your back against a wall, arms spread horizontally. Have someone measure from fingertip to fingertip. Keep your arms straight and parallel to the ground for the most accurate measurement."
    },
    {
      question: "What's the relationship between armspan and height?",
      answer: "Most people have an armspan close to their height (ratio of 1.0). NBA players often have longer arms with ratios of 1.04-1.08. Elite players like Kevin Durant have ratios above 1.08."
    },
    {
      question: "How does reach advantage help in basketball?",
      answer: "Longer reach helps with rebounds, shot blocking, stealing passes, shooting over defenders, and dunking. A longer reach effectively makes you play taller than your actual height."
    },
    {
      question: "Can I improve my standing reach?",
      answer: "While you can't change your arm length, you can improve flexibility and shoulder mobility to maximize your reach. Stretching and proper posture can add 1-2 inches to your functional reach."
    }
  ];

  return (
    <>
      <SEOManager
        title="Basketball Reach Calculator | Standing Reach & Wingspan Calculator"
        description="Calculate your basketball reach and wingspan advantage! Compare armspan to height ratio with NBA players. Free reach calculator with professional insights!"
        keywords="basketball reach calculator, standing reach calculator, wingspan calculator, armspan calculator, reach advantage basketball, NBA wingspan"
        canonicalUrl="https://dunkcalculator.com/reach-calculator"
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
          <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-teal-50">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Basketball Reach Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Calculate your standing reach and wingspan advantage for basketball! Compare your armspan-to-height ratio with NBA players and discover your reach potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Standing Reach</span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">✓ Wingspan Ratio</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ NBA Comparisons</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <ReachCalculator />
            </div>
          </section>

          {/* Why Reach Matters */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Why Reach Matters in Basketball</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Longer reach provides significant advantages in basketball, effectively making you play taller than your actual height.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Offensive Advantages</h3>
                    <ul className="text-gray-600 space-y-1 text-left">
                      <li>• Shoot over defenders</li>
                      <li>• Better passing angles</li>
                      <li>• Easier dunking</li>
                      <li>• Extended dribbling</li>
                      <li>• Longer layup reach</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Ruler className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Defensive Benefits</h3>
                    <ul className="text-gray-600 space-y-1 text-left">
                      <li>• Better shot blocking</li>
                      <li>• Stealing passes</li>
                      <li>• Deflecting shots</li>
                      <li>• Rebounding advantage</li>
                      <li>• Longer defensive range</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <User className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Overall Impact</h3>
                    <ul className="text-gray-600 space-y-1 text-left">
                      <li>• Play taller than height</li>
                      <li>• Multiple position capability</li>
                      <li>• Matchup advantages</li>
                      <li>• Improved court coverage</li>
                      <li>• Enhanced versatility</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* NBA Wingspan Examples */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">NBA Player Wingspan Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Elite Wingspan Ratios</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Kevin Durant</span>
                        <span className="text-green-600 font-bold">1.08 ratio (6'11" → 7'5")</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kawhi Leonard</span>
                        <span className="text-green-600 font-bold">1.09 ratio (6'7" → 7'3")</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Giannis Antetokounmpo</span>
                        <span className="text-green-600 font-bold">1.06 ratio (6'11" → 7'3")</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Anthony Davis</span>
                        <span className="text-green-600 font-bold">1.08 ratio (6'10" → 7'5")</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Average Ratios by Position</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Point Guards</span>
                        <span className="text-blue-600 font-bold">1.03-1.05</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shooting Guards</span>
                        <span className="text-blue-600 font-bold">1.04-1.06</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Small Forwards</span>
                        <span className="text-blue-600 font-bold">1.05-1.07</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Power Forwards</span>
                        <span className="text-blue-600 font-bold">1.06-1.08</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Centers</span>
                        <span className="text-blue-600 font-bold">1.07-1.09</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Standing Reach Guide */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Understanding Standing Reach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Height</h3>
                    <p className="text-gray-600">Stand straight against a wall without shoes. Measure from floor to top of head.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Armspan</h3>
                    <p className="text-gray-600">Arms spread horizontally, measure fingertip to fingertip while standing against wall.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Calculate Reach</h3>
                    <p className="text-gray-600">Our calculator estimates standing reach based on your height and armspan measurements.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Wingspan Categories */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Wingspan Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-sm">-</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Below Average</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">&lt;0.98</p>
                    <p className="text-sm text-gray-500">Shorter arms relative to height</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">AVG</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Average</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">0.98-1.05</p>
                    <p className="text-sm text-gray-500">Normal proportions</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">+</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Above Average</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">1.05-1.10</p>
                    <p className="text-sm text-gray-500">Good basketball advantage</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-sm">++</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Exceptional</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">1.10+</p>
                    <p className="text-sm text-gray-500">Elite reach advantage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Reach Calculator FAQ</h2>
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
                    <Target className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/dunk-calculator" className="hover:text-orange-600">
                        Dunk Calculator
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Use your reach measurement to see if you can dunk a basketball.</p>
                    <Link to="/dunk-calculator" className="text-orange-600 hover:underline text-sm font-medium">
                      Test Dunking →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-test" className="hover:text-blue-600">
                        Vertical Jump Test
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Combine reach with vertical jump for complete basketball assessment.</p>
                    <Link to="/vertical-jump-test" className="text-blue-600 hover:underline text-sm font-medium">
                      Test Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <User className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-position-calculator" className="hover:text-green-600">
                        Position Calculator
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Find your ideal position based on reach and physical attributes.</p>
                    <Link to="/basketball-position-calculator" className="text-green-600 hover:underline text-sm font-medium">
                      Find Position →
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
                title="Calculate Your Basketball Reach"
                description="Discover your wingspan advantage and standing reach. Compare to NBA players and see how your reach affects your basketball potential!"
                buttonText="Calculate Reach"
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

export default ReachCalculatorPage;
