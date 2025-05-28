
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BasketballBMICalculator from "@/components/BasketballBMICalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Scale, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const BasketballBMICalculatorPage = () => {
  const faqData = [
    {
      question: "How is basketball BMI different from regular BMI?",
      answer: "Our basketball BMI calculator provides the same BMI calculation but includes basketball-specific insights about how your BMI relates to different positions and playing styles in basketball."
    },
    {
      question: "What's the ideal BMI for basketball players?",
      answer: "BMI varies by position: Point guards typically 18.5-22, shooting guards 20-24, small forwards 22-26, power forwards 24-28, and centers 26-32. Higher BMI often indicates more muscle mass in basketball."
    },
    {
      question: "Can a high BMI be good for basketball?",
      answer: "Yes! Many elite basketball players have 'high' BMIs due to muscle mass. Centers and power forwards often have BMIs over 25-30, which provides strength and presence in the paint."
    },
    {
      question: "Should I focus on BMI or other metrics for basketball?",
      answer: "BMI is just one factor. Focus more on body fat percentage, muscle mass, athleticism, vertical jump, and basketball skills. Many elite players exceed 'normal' BMI ranges due to muscle."
    }
  ];

  return (
    <>
      <SEOManager
        title="Basketball BMI Calculator | BMI for Basketball Players by Position"
        description="Calculate your BMI with basketball-specific insights. See how your BMI compares to different basketball positions and get personalized recommendations for your game!"
        keywords="basketball BMI calculator, BMI for basketball players, basketball body mass index, BMI by basketball position, athlete BMI calculator"
        canonicalUrl="https://dunkcalculator.com/basketball-bmi-calculator"
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
          <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Basketball BMI Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Calculate your Body Mass Index (BMI) with basketball-specific insights. See how your BMI relates to different basketball positions and get personalized recommendations!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Position Analysis</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Basketball Insights</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Imperial & Metric</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Calculator</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <BasketballBMICalculator />
            </div>
          </section>

          {/* BMI by Position */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">BMI by Basketball Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Point Guard</h3>
                    <p className="text-2xl font-bold text-blue-600 text-center mb-2">18.5-22</p>
                    <p className="text-gray-600 text-center text-sm">Lean and agile build for speed, ball handling, and court vision</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Shooting Guard</h3>
                    <p className="text-2xl font-bold text-green-600 text-center mb-2">20-24</p>
                    <p className="text-gray-600 text-center text-sm">Balanced build for shooting, defense, and athletic movement</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Small Forward</h3>
                    <p className="text-2xl font-bold text-purple-600 text-center mb-2">22-26</p>
                    <p className="text-gray-600 text-center text-sm">Versatile athletes who can play inside and outside</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Power Forward</h3>
                    <p className="text-2xl font-bold text-orange-600 text-center mb-2">24-28</p>
                    <p className="text-gray-600 text-center text-sm">Strong and athletic for rebounding and interior play</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Center</h3>
                    <p className="text-2xl font-bold text-red-600 text-center mb-2">26-32</p>
                    <p className="text-gray-600 text-center text-sm">Size and strength focused for paint dominance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* NBA Player Examples */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">NBA Player BMI Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Guards & Forwards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Stephen Curry (PG)</span>
                      <span className="text-green-600 font-bold">23.1 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Kobe Bryant (SG)</span>
                      <span className="text-green-600 font-bold">25.0 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">LeBron James (SF)</span>
                      <span className="text-green-600 font-bold">27.5 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Kevin Durant (PF)</span>
                      <span className="text-green-600 font-bold">26.9 BMI</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Centers & Big Men</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Shaquille O'Neal</span>
                      <span className="text-blue-600 font-bold">31.6 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dwight Howard</span>
                      <span className="text-blue-600 font-bold">28.8 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Giannis Antetokounmpo</span>
                      <span className="text-blue-600 font-bold">26.7 BMI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Joel Embiid</span>
                      <span className="text-blue-600 font-bold">27.3 BMI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BMI vs Performance */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">BMI and Basketball Performance</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Understanding how BMI relates to basketball performance and what it means for your game.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Lower BMI (18.5-22)</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• Better agility and speed</p>
                      <p>• Improved endurance</p>
                      <p>• Quick direction changes</p>
                      <p>• Better for perimeter play</p>
                      <p>• May need muscle building</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Moderate BMI (22-26)</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• Balanced strength and speed</p>
                      <p>• Versatile playing style</p>
                      <p>• Good all-around athleticism</p>
                      <p>• Ideal for most positions</p>
                      <p>• Strong defensive presence</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">Higher BMI (26+)</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• Greater strength and power</p>
                      <p>• Better rebounding ability</p>
                      <p>• Physical presence in paint</p>
                      <p>• Strong post-up game</p>
                      <p>• May impact quickness</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Basketball BMI FAQ</h2>
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
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Basketball Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-position-calculator" className="hover:text-orange-600">
                        Position Calculator
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Find your ideal basketball position based on physical attributes.</p>
                    <Link to="/basketball-position-calculator" className="text-orange-600 hover:underline text-sm font-medium">
                      Find Position →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-test" className="hover:text-blue-600">
                        Vertical Jump Test
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Measure your vertical jump and compare to basketball standards.</p>
                    <Link to="/vertical-jump-test" className="text-blue-600 hover:underline text-sm font-medium">
                      Test Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Activity className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/nutrition-vertical-jump" className="hover:text-green-600">
                        Basketball Nutrition
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn about nutrition for optimal basketball performance.</p>
                    <Link to="/blog/nutrition-vertical-jump" className="text-green-600 hover:underline text-sm font-medium">
                      Read Guide →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <CallToAction
                title="Calculate Your Basketball BMI"
                description="Get your BMI with basketball-specific insights and position recommendations. See how your body composition relates to your basketball performance!"
                buttonText="Calculate BMI"
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

export default BasketballBMICalculatorPage;
