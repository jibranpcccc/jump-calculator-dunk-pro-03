
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VerticalJumpTestCalculator from "@/components/VerticalJumpTestCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Ruler, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const VerticalJumpTestPage = () => {
  const faqData = [
    {
      question: "How do I accurately measure my vertical jump?",
      answer: "Measure your standing reach first (arms overhead, fingertips to floor). Then jump and mark your highest point. Subtract standing reach from jump reach to get your vertical jump height."
    },
    {
      question: "What's a good vertical jump height?",
      answer: "Average vertical jumps: 12-19 inches (recreational), 20-27 inches (high school), 28-34 inches (college), 35+ inches (professional). Elite athletes often jump 40+ inches."
    },
    {
      question: "How can I improve my vertical jump test results?",
      answer: "Focus on plyometric exercises, strength training (squats, deadlifts), proper jumping technique, and consistent practice. Most athletes can improve 4-12 inches with proper training."
    },
    {
      question: "Should I test my vertical jump from one foot or two feet?",
      answer: "Our calculator uses the standard two-foot vertical jump test, which is more common in basketball. One-foot jumps (running approach) typically yield higher results but are harder to measure accurately."
    }
  ];

  return (
    <>
      <SEOManager
        title="Free Vertical Jump Test Calculator | Measure Your Exact Jump Height"
        description="Test your vertical jump height with our free calculator. Compare your results to high school, college, and NBA standards. Get accurate measurements and training tips!"
        keywords="vertical jump test, vertical leap calculator, jump height measurement, vertical jump standards, basketball vertical test, free jump calculator"
        canonicalUrl="https://dunkcalculator.com/vertical-jump-test"
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
          <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Vertical Jump Test Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Measure your exact vertical jump height and see how you rank against high school, college, and professional basketball standards. Get instant results and improvement tips!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Accurate Measurement</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Compare to Standards</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Training Tips</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Testing</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <VerticalJumpTestCalculator />
            </div>
          </section>

          {/* Testing Standards */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Vertical Jump Standards by Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-sm">AVG</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Average (Recreational)</h3>
                    <p className="text-2xl font-bold text-gray-600 mb-2">12-19"</p>
                    <p className="text-sm text-gray-500">General population, casual players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">HS</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">High School</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">20-27"</p>
                    <p className="text-sm text-gray-500">Varsity basketball players</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-sm">COL</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">College</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">28-34"</p>
                    <p className="text-sm text-gray-500">Division I basketball</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-sm">PRO</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Professional</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">35+"</p>
                    <p className="text-sm text-gray-500">NBA, elite athletes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How to Test */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Test Your Vertical Jump</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow these steps for the most accurate vertical jump measurement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Measure Standing Reach</h3>
                    <p className="text-gray-600">Stand with both arms raised overhead. Measure from floor to fingertips. This is your baseline reach.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Jump and Mark</h3>
                    <p className="text-gray-600">Jump from two feet and touch/mark the highest point possible. Use chalk or have someone mark your reach.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Calculate Difference</h3>
                    <p className="text-gray-600">Subtract standing reach from jump reach. The difference is your vertical jump height!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pro Player Examples */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">NBA Player Vertical Jump Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Michael Jordan</h3>
                  <p className="text-3xl font-bold text-red-600 mb-1">46"</p>
                  <p className="text-sm text-gray-500">6'6" Guard</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Zion Williamson</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">45"</p>
                  <p className="text-sm text-gray-500">6'7" Forward</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">LeBron James</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-1">40"</p>
                  <p className="text-sm text-gray-500">6'9" Forward</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Spud Webb</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">42"</p>
                  <p className="text-sm text-gray-500">5'7" Guard</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Vertical Jump Test FAQ</h2>
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
              <h2 className="text-3xl font-bold text-center mb-12">Improve Your Vertical Jump</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-orange-600">
                        Training Programs
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Complete vertical jump training programs to increase your jumping ability.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 hover:underline text-sm font-medium">
                      Start Training →
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
                    <p className="text-gray-600 mb-4">Find out if you can dunk a basketball with your current vertical jump.</p>
                    <Link to="/dunk-calculator" className="text-blue-600 hover:underline text-sm font-medium">
                      Test Dunking →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Ruler className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/best-vertical-jump-exercises" className="hover:text-green-600">
                        Best Exercises
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn the most effective exercises for increasing vertical jump height.</p>
                    <Link to="/blog/best-vertical-jump-exercises" className="text-green-600 hover:underline text-sm font-medium">
                      View Exercises →
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
                title="Test Your Vertical Jump Now"
                description="Measure your exact vertical jump height and compare to basketball standards. Get personalized training recommendations!"
                buttonText="Start Vertical Jump Test"
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

export default VerticalJumpTestPage;
