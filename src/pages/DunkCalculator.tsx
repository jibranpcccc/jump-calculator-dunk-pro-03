
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Target, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const DunkCalculatorPage = () => {
  const faqData = [
    {
      question: "How accurate is the dunk calculator?",
      answer: "Our dunk calculator uses the standard NBA rim height of 10 feet and physics-based calculations. It provides a reliable estimate, but actual dunking also requires proper technique, timing, and practice."
    },
    {
      question: "What measurements do I need for the dunk calculator?",
      answer: "You need three measurements: your height in inches, your standing reach (fingertips to floor with arms raised), and your vertical jump height. All measurements should be taken without shoes."
    },
    {
      question: "Can I improve my dunk ability if the calculator says I can't dunk?",
      answer: "Absolutely! The calculator shows your current potential. With proper vertical jump training, most athletes can improve their jumping ability by 4-12 inches, significantly increasing their dunking potential."
    },
    {
      question: "What's the difference between standing reach and height?",
      answer: "Height is your total body height. Standing reach is measured with your arms fully extended overhead, from fingertips to the floor. Standing reach is typically 1.3-1.35x your height."
    }
  ];

  return (
    <>
      <SEOManager
        title="Dunk Calculator | Free Basketball Dunk Test - Can You Dunk?"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. Get accurate results based on NBA rim height!"
        keywords="dunk calculator, can you dunk, basketball dunk test, dunk height calculator, free dunk test, basketball rim height calculator"
        canonicalUrl="https://dunkcalculator.com/dunk-calculator"
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
          <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Dunk Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find out if you can dunk a basketball on a regulation 10-foot rim! Enter your measurements and get instant results based on NBA standards and physics calculations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ NBA Regulation Height</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Physics-Based Formula</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Instant Results</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Training Tips</span>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <DunkCalculator />
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How the Dunk Calculator Works</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our calculator uses the official NBA rim height and your physical measurements to determine your dunking potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Enter Your Measurements</h3>
                    <p className="text-gray-600">Input your height, standing reach, and vertical jump height in inches for accurate calculations.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Physics Calculation</h3>
                    <p className="text-gray-600">We calculate your maximum reach: Height + Standing Reach + Vertical Jump vs. 120 inches (10 feet).</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Get Your Results</h3>
                    <p className="text-gray-600">Instant feedback on your dunking ability plus personalized training recommendations.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Measurement Guide */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Measure Correctly</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Height Measurement</h3>
                  <p className="text-gray-600">Stand straight against a wall without shoes. Measure from floor to the top of your head.</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Standing Reach</h3>
                  <p className="text-gray-600">Raise both arms overhead and measure from floor to fingertips. Keep arms straight and reach as high as possible.</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vertical Jump</h3>
                  <p className="text-gray-600">Jump from two feet and mark your highest reach. Subtract standing reach from jump reach for vertical jump height.</p>
                </div>
              </div>
            </div>
          </section>

          {/* NBA Standards */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">NBA Dunking Standards</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Physical Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Rim Height: 10 feet (120 inches)</li>
                      <li>• Minimum Reach: 120+ inches to dunk</li>
                      <li>• Average NBA Standing Reach: 108-112 inches</li>
                      <li>• Average NBA Vertical: 28-32 inches</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Player Examples</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Michael Jordan: 6'6" height, 46" vertical</li>
                      <li>• LeBron James: 6'9" height, 40" vertical</li>
                      <li>• Zion Williamson: 6'7" height, 45" vertical</li>
                      <li>• Spud Webb: 5'7" height, 42" vertical</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Common questions about our dunk calculator and basketball dunking.
              </p>
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
                    <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-test" className="hover:text-blue-600">
                        Vertical Jump Test
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Measure your exact vertical jump height and compare to basketball standards.</p>
                    <Link to="/vertical-jump-test" className="text-blue-600 hover:underline text-sm font-medium">
                      Test Your Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-green-600">
                        Vertical Jump Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Complete training programs to increase your vertical jump and dunking ability.</p>
                    <Link to="/vertical-jump-training" className="text-green-600 hover:underline text-sm font-medium">
                      Start Training →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-dunk-tips" className="hover:text-purple-600">
                        Dunking Techniques
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Master proper dunking form and avoid common mistakes.</p>
                    <Link to="/basketball-dunk-tips" className="text-purple-600 hover:underline text-sm font-medium">
                      Learn Techniques →
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
                title="Ready to Test Your Dunking Ability?"
                description="Use our free dunk calculator to find out if you can dunk a basketball and get personalized training recommendations."
                buttonText="Try Dunk Calculator"
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

export default DunkCalculatorPage;
