
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BasketballPositionCalculator from "@/components/BasketballPositionCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BasketballPositionCalculatorPage = () => {
  const faqData = [
    {
      question: "How accurate is the basketball position calculator?",
      answer: "Our calculator provides suggestions based on traditional position requirements and your physical attributes. However, modern basketball values versatility, and skill development is more important than size alone."
    },
    {
      question: "Can I play a different position than recommended?",
      answer: "Absolutely! The calculator provides a starting point, but basketball positions are increasingly fluid. Focus on developing skills for your preferred position regardless of size."
    },
    {
      question: "What if I'm between two positions?",
      answer: "Many modern players are 'tweeners' who can play multiple positions. This versatility is valuable - develop skills for both positions to maximize your value on the court."
    },
    {
      question: "How has basketball position requirements changed?",
      answer: "Modern basketball emphasizes skill over size. Point guards can be tall, centers can shoot 3-pointers, and forwards handle the ball. Focus on skills more than traditional position limits."
    }
  ];

  return (
    <>
      <SEOManager
        title="Basketball Position Calculator | Find Your Ideal Basketball Position"
        description="Find your ideal basketball position based on height, weight, and athleticism! Free position calculator with NBA insights and training recommendations for each position."
        keywords="basketball position calculator, what position should I play basketball, basketball position finder, ideal basketball position, position by height basketball"
        canonicalUrl="https://dunkcalculator.com/basketball-position-calculator"
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
          <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Basketball Position Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find your ideal basketball position based on your physical attributes! Get personalized recommendations and training tips for point guard, shooting guard, forward, or center positions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ 5 Position Analysis</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">✓ Physical Attributes</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Training Tips</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ NBA Insights</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <BasketballPositionCalculator />
            </div>
          </section>

          {/* Basketball Positions Overview */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Basketball Positions Explained</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">PG</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Point Guard (1)</h3>
                    <p className="text-gray-600 mb-4">The floor general who runs the offense, handles the ball, and creates opportunities for teammates.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Typical Height:</strong> 5'9" - 6'3"</p>
                      <p><strong>Key Skills:</strong> Ball handling, court vision, passing, leadership</p>
                      <p><strong>Examples:</strong> Stephen Curry, Chris Paul</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">SG</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Shooting Guard (2)</h3>
                    <p className="text-gray-600 mb-4">Primary scorer from the perimeter, strong defender, and reliable shooter from all ranges.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Typical Height:</strong> 6'1" - 6'6"</p>
                      <p><strong>Key Skills:</strong> Shooting, defense, athleticism, scoring</p>
                      <p><strong>Examples:</strong> Kobe Bryant, James Harden</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-sm">SF</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Small Forward (3)</h3>
                    <p className="text-gray-600 mb-4">Versatile player who can score inside and outside, rebound, and defend multiple positions.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Typical Height:</strong> 6'4" - 6'9"</p>
                      <p><strong>Key Skills:</strong> Versatility, athleticism, shooting, defense</p>
                      <p><strong>Examples:</strong> LeBron James, Kevin Durant</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 font-bold text-sm">PF</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Power Forward (4)</h3>
                    <p className="text-gray-600 mb-4">Strong inside player who rebounds, scores in the post, and increasingly shoots from outside.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Typical Height:</strong> 6'7" - 6'11"</p>
                      <p><strong>Key Skills:</strong> Strength, rebounding, post play, mid-range shooting</p>
                      <p><strong>Examples:</strong> Tim Duncan, Giannis Antetokounmpo</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-sm">C</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Center (5)</h3>
                    <p className="text-gray-600 mb-4">Tallest player who protects the rim, rebounds, and scores close to the basket.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Typical Height:</strong> 6'9" - 7'2"</p>
                      <p><strong>Key Skills:</strong> Size, shot blocking, rebounding, post moves</p>
                      <p><strong>Examples:</strong> Shaquille O'Neal, Joel Embiid</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Position Requirements */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Physical Requirements by Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Guards (PG/SG)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Height Range:</span>
                        <span className="font-medium">5'9" - 6'6"</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ideal Weight:</span>
                        <span className="font-medium">160-210 lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vertical Jump:</span>
                        <span className="font-medium">25+ inches</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Body Type:</span>
                        <span className="font-medium">Lean, athletic</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Key Attribute:</span>
                        <span className="font-medium">Speed & agility</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Forwards (SF/PF)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Height Range:</span>
                        <span className="font-medium">6'4" - 6'11"</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ideal Weight:</span>
                        <span className="font-medium">200-250 lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vertical Jump:</span>
                        <span className="font-medium">20+ inches</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Body Type:</span>
                        <span className="font-medium">Athletic, versatile</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Key Attribute:</span>
                        <span className="font-medium">Versatility</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Centers (C)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Height Range:</span>
                        <span className="font-medium">6'9" - 7'2"</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ideal Weight:</span>
                        <span className="font-medium">240-300 lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vertical Jump:</span>
                        <span className="font-medium">15+ inches</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Body Type:</span>
                        <span className="font-medium">Strong, powerful</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Key Attribute:</span>
                        <span className="font-medium">Size & strength</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Modern Basketball Evolution */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Modern Basketball Evolution</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Basketball positions are becoming more fluid as the game emphasizes skill and versatility over traditional size requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">Position-less Basketball</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Guards playing multiple positions</li>
                      <li>• Centers shooting 3-pointers</li>
                      <li>• Forwards handling the ball</li>
                      <li>• Emphasis on switching defense</li>
                      <li>• Skill over size preference</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Key Skills Focus</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Shooting from all ranges</li>
                      <li>• Ball handling for all positions</li>
                      <li>• Basketball IQ and decision making</li>
                      <li>• Defensive versatility</li>
                      <li>• Athletic development</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Player Examples</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Magic Johnson: 6'9" point guard</li>
                      <li>• Kevin Durant: 7' guard/forward</li>
                      <li>• Draymond Green: 6'6" center</li>
                      <li>• Ben Simmons: 6'10" point guard</li>
                      <li>• Nikola Jokić: Playmaking center</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Position Calculator FAQ</h2>
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

          {/* Training by Position */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Training Focus by Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/increase-vertical-jump-exercises" className="hover:text-blue-600">
                        Guard Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Focus on agility, ball handling, shooting, and conditioning for guard positions.</p>
                    <Link to="/blog/increase-vertical-jump-exercises" className="text-blue-600 hover:underline text-sm font-medium">
                      View Exercises →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-green-600">
                        Forward Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Develop versatility with shooting, rebounding, and athletic training.</p>
                    <Link to="/vertical-jump-training" className="text-green-600 hover:underline text-sm font-medium">
                      Start Training →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Trophy className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/best-vertical-jump-exercises" className="hover:text-orange-600">
                        Center Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Build strength, post moves, and improve mobility for center play.</p>
                    <Link to="/blog/best-vertical-jump-exercises" className="text-orange-600 hover:underline text-sm font-medium">
                      View Exercises →
                    </Link>
                  </CardContent>
                </Card>
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
                    <p className="text-gray-600 mb-4">Measure your jumping ability for position-specific requirements.</p>
                    <Link to="/vertical-jump-test" className="text-orange-600 hover:underline text-sm font-medium">
                      Test Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-bmi-calculator" className="hover:text-blue-600">
                        Basketball BMI
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Calculate BMI with basketball position insights and recommendations.</p>
                    <Link to="/basketball-bmi-calculator" className="text-blue-600 hover:underline text-sm font-medium">
                      Calculate BMI →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/reach-calculator" className="hover:text-green-600">
                        Reach Calculator
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Calculate wingspan and reach advantages for different positions.</p>
                    <Link to="/reach-calculator" className="text-green-600 hover:underline text-sm font-medium">
                      Calculate Reach →
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
                title="Find Your Ideal Basketball Position"
                description="Discover which basketball position matches your physical attributes and get personalized training recommendations to excel at your position!"
                buttonText="Find My Position"
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

export default BasketballPositionCalculatorPage;
