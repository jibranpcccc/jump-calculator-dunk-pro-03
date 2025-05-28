
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import CallToAction from "@/components/CallToAction";
import TrustSignals from "@/components/TrustSignals";
import QuickStats from "@/components/QuickStats";
import SEOManager from "@/components/SEOManager";
import FAQStructuredData from "@/components/FAQStructuredData";
import EnhancedHero from "@/components/EnhancedHero";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BookOpen, Users, Calculator, Activity } from "lucide-react";

const Index = () => {
  const faqData = [
    {
      question: "What height do you need to dunk a basketball?",
      answer: "It depends on your arm span and vertical jump! Generally, players 6'0\" and above have a better chance, but shorter players with exceptional jumping ability can also dunk. The key factors are your standing reach and how high you can jump."
    },
    {
      question: "How accurate is this dunk calculator?",
      answer: "Our calculator gives you a scientifically-based estimate using basic physics. However, real dunking also requires proper technique, timing, ball handling skills, and practice. Use this as a starting point to understand your potential."
    },
    {
      question: "Can I improve my vertical jump to dunk?",
      answer: "Absolutely! With proper training, most people can add 4-12 inches to their vertical jump through targeted exercises, plyometrics, strength training, and technique improvement. Check out our training guides for specific workout plans."
    }
  ];

  return (
    <>
      <SEOManager
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!"
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="product"
        faqData={faqData}
        productData={{
          name: "Basketball Dunk Calculator",
          brand: "Dunk Calculator",
          category: "Sports Application",
          price: "0",
          availability: "InStock"
        }}
        enableAnalytics={true}
        enableBreadcrumbs={true}
        enablePerformance={true}
        enableSocialMeta={true}
        enableTechnicalSEO={true}
      />

      <FAQStructuredData faqs={faqData} />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Enhanced Hero Section */}
          <EnhancedHero />

          {/* Calculator Section */}
          <section id="calculator" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Dunk Calculator</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Enter your measurements below to instantly discover if you can dunk a basketball on a regulation 10-foot rim.
                </p>
              </div>
              <DunkCalculator />
            </div>
          </section>

          {/* All Calculators Preview */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">More Basketball Calculators</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Explore our complete collection of free basketball performance calculators and training tools.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Dunk Calculator</h3>
                    <p className="text-gray-600 mb-4">Find out if you can dunk based on your height, reach, and vertical jump.</p>
                    <Link to="/#calculator" className="text-orange-600 hover:underline font-medium">
                      Test Now →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Vertical Jump Test</h3>
                    <p className="text-gray-600 mb-4">Measure your exact vertical jump height and compare to standards.</p>
                    <Link to="/calculators#vertical-jump-calculator" className="text-blue-600 hover:underline font-medium">
                      Measure Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Basketball BMI</h3>
                    <p className="text-gray-600 mb-4">Calculate BMI with basketball-specific insights and position analysis.</p>
                    <Link to="/calculators#bmi-calculator" className="text-green-600 hover:underline font-medium">
                      Calculate BMI →
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Link to="/calculators" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md">
                  View All Calculators
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How Our Dunk Calculator Works</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our basketball dunk calculator uses simple physics to determine if you can reach the 10-foot NBA rim height.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1. Enter Your Measurements</h3>
                    <p className="text-gray-600">Input your height, standing reach, and vertical jump distance in inches. Be as accurate as possible for best results.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2. We Calculate Your Max Reach</h3>
                    <p className="text-gray-600">We add your height + standing reach + vertical jump to find your maximum reach when jumping.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3. Compare to NBA Rim Height</h3>
                    <p className="text-gray-600">Basketball rims are exactly 10 feet (120 inches) high. If you can reach that high or higher, you can dunk!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Quick Tips */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Improve Your Dunking Ability</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Whether you can dunk now or need to improve, these resources will help you reach your basketball goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <TrendingUp className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">Increase Your Vertical Jump</h3>
                    <p className="text-sm text-gray-600 mb-3">Focus on plyometric exercises like box jumps, squat jumps, and depth jumps to build explosive power.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 text-sm hover:underline font-medium">
                      Learn vertical training →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Target className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">Perfect Your Technique</h3>
                    <p className="text-sm text-gray-600 mb-3">Learn proper dunking form, approach techniques, and timing for successful dunks.</p>
                    <Link to="/basketball-dunk-tips" className="text-orange-600 text-sm hover:underline font-medium">
                      Read dunk tips →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <BookOpen className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">Build Leg Strength</h3>
                    <p className="text-sm text-gray-600 mb-3">Develop leg and core strength through targeted exercises for explosive jumping power.</p>
                    <Link to="/blog/increase-vertical-jump-exercises" className="text-orange-600 text-sm hover:underline font-medium">
                      View exercises →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Users className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">Start Small & Practice</h3>
                    <p className="text-sm text-gray-600 mb-3">Practice on lower rims (8-9 feet) and gradually work your way up to regulation height.</p>
                    <Link to="/blog/how-to-dunk-beginners" className="text-orange-600 text-sm hover:underline font-medium">
                      Beginner guide →
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
                title="Test Your Dunk Potential Now!"
                description="Join thousands of basketball players who've used our free calculator to test their dunking ability."
                buttonText="Use Free Calculator"
                buttonLink="#calculator"
              />
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Get answers to common questions about dunking, vertical jumps, and basketball training.
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
              <div className="text-center mt-8">
                <Link to="/faq" className="text-orange-600 hover:underline font-medium text-lg">
                  View All Frequently Asked Questions →
                </Link>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Explore More Basketball Tools & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/how-to-measure-vertical-jump" className="hover:text-blue-600">
                        How to Measure Vertical Jump
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn the proper techniques to accurately measure your vertical jump at home or in the gym.</p>
                    <Link to="/blog/how-to-measure-vertical-jump" className="text-blue-600 hover:underline text-sm font-medium">
                      Read Guide →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/best-vertical-jump-exercises" className="hover:text-green-600">
                        Best Vertical Jump Exercises
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Discover the most effective exercises to increase your vertical jump and dunking ability.</p>
                    <Link to="/blog/best-vertical-jump-exercises" className="text-green-600 hover:underline text-sm font-medium">
                      View Exercises →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog/dunk-if-you-are-short" className="hover:text-purple-600">
                        Can Short Players Dunk?
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Explore strategies and success stories of shorter basketball players who learned to dunk.</p>
                    <Link to="/blog/dunk-if-you-are-short" className="text-purple-600 hover:underline text-sm font-medium">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
