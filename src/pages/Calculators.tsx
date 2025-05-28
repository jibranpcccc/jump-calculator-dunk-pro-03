
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import VerticalJumpTestCalculator from "@/components/VerticalJumpTestCalculator";
import BasketballBMICalculator from "@/components/BasketballBMICalculator";
import HangtimeCalculator from "@/components/HangtimeCalculator";
import ReachCalculator from "@/components/ReachCalculator";
import BasketballPositionCalculator from "@/components/BasketballPositionCalculator";
import CallToAction from "@/components/CallToAction";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, Activity, Clock, Ruler, Users, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Calculators = () => {
  const faqData = [
    {
      question: "Which basketball calculator should I use first?",
      answer: "Start with the Dunk Calculator to see if you can dunk, then use the Vertical Jump Test to measure your exact jumping ability. The other calculators help with specific training goals and position analysis."
    },
    {
      question: "How accurate are these basketball calculators?",
      answer: "Our calculators use scientifically-based formulas and NBA/college basketball standards. They provide accurate estimates, but real-world performance also depends on technique, training, and experience."
    },
    {
      question: "Can I improve my results with training?",
      answer: "Absolutely! Most athletes can improve their vertical jump by 4-12 inches with proper training. Check our training guides and exercise recommendations to enhance your performance."
    }
  ];

  return (
    <>
      <SEOManager
        title="Free Basketball Calculators | Dunk, Vertical Jump, BMI & More Tools"
        description="Complete collection of free basketball calculators: dunk test, vertical jump measurement, BMI analysis, hangtime calculator, reach calculator, and position finder. Try all tools now!"
        keywords="basketball calculators, dunk calculator, vertical jump test, basketball BMI calculator, hangtime calculator, basketball tools, free basketball tests"
        canonicalUrl="https://dunkcalculator.com/calculators"
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
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Free Basketball Calculators
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Complete collection of basketball performance calculators and testing tools. Measure your abilities, track progress, and optimize your training with our scientifically-accurate calculators.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ 100% Free</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ No Signup Required</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Scientifically Accurate</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Mobile Friendly</span>
              </div>
            </div>
          </section>

          {/* Calculator Grid */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Dunk Calculator */}
                <div id="dunk-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Dunk Calculator</h2>
                    <p className="text-gray-600 mb-6">Find out if you can dunk a basketball on a regulation 10-foot rim</p>
                  </div>
                  <DunkCalculator />
                  <div className="text-center">
                    <Link to="/basketball-dunk-tips" className="text-orange-600 hover:underline font-medium">
                      Learn dunking techniques →
                    </Link>
                  </div>
                </div>

                {/* Vertical Jump Test Calculator */}
                <div id="vertical-jump-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Vertical Jump Test</h2>
                    <p className="text-gray-600 mb-6">Measure your exact vertical jump height and compare to standards</p>
                  </div>
                  <VerticalJumpTestCalculator />
                  <div className="text-center">
                    <Link to="/vertical-jump-training" className="text-blue-600 hover:underline font-medium">
                      Improve your vertical jump →
                    </Link>
                  </div>
                </div>

                {/* Basketball BMI Calculator */}
                <div id="bmi-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Basketball BMI Calculator</h2>
                    <p className="text-gray-600 mb-6">Calculate BMI with basketball-specific insights and position analysis</p>
                  </div>
                  <BasketballBMICalculator />
                  <div className="text-center">
                    <Link to="/blog/nutrition-vertical-jump" className="text-green-600 hover:underline font-medium">
                      Basketball nutrition guide →
                    </Link>
                  </div>
                </div>

                {/* Hangtime Calculator */}
                <div id="hangtime-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Basketball Hangtime Calculator</h2>
                    <p className="text-gray-600 mb-6">Calculate how long you stay in the air during your jump</p>
                  </div>
                  <HangtimeCalculator />
                  <div className="text-center">
                    <Link to="/blog/basketball-jump-technique" className="text-purple-600 hover:underline font-medium">
                      Perfect your jump technique →
                    </Link>
                  </div>
                </div>

                {/* Reach Calculator */}
                <div id="reach-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Basketball Reach Calculator</h2>
                    <p className="text-gray-600 mb-6">Calculate your standing reach and wingspan advantage</p>
                  </div>
                  <ReachCalculator />
                  <div className="text-center">
                    <Link to="/blog/how-to-measure-vertical-jump" className="text-green-600 hover:underline font-medium">
                      Learn proper measurement techniques →
                    </Link>
                  </div>
                </div>

                {/* Position Calculator */}
                <div id="position-calculator" className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Basketball Position Calculator</h2>
                    <p className="text-gray-600 mb-6">Find your ideal position based on physical attributes</p>
                  </div>
                  <BasketballPositionCalculator />
                  <div className="text-center">
                    <Link to="/blog/increase-vertical-jump-exercises" className="text-orange-600 hover:underline font-medium">
                      Position-specific training →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">How to Use Our Basketball Calculators</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Get the most accurate results by following these simple steps for each calculator.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1. Measure Accurately</h3>
                    <p className="text-gray-600">Use proper measurement techniques. Height without shoes, vertical jump from two-foot takeoff, and accurate weight measurements give best results.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2. Input Your Data</h3>
                    <p className="text-gray-600">Enter your measurements in the calculator fields. All calculators use inches and pounds for consistency and accuracy.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3. Analyze & Improve</h3>
                    <p className="text-gray-600">Review your results and use our training guides to improve. Track progress by retesting monthly.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Calculator Features */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Basketball Calculators?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Scientifically Accurate</h3>
                  <p className="text-gray-600">Based on physics formulas and NBA/college basketball standards for reliable results.</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-gray-600">Monitor improvements in your vertical jump, reach, and overall basketball performance.</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Training Guidance</h3>
                  <p className="text-gray-600">Get personalized recommendations and training tips based on your results.</p>
                </div>
                <div className="text-center">
                  <Activity className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Multiple Metrics</h3>
                  <p className="text-gray-600">Comprehensive testing including dunk ability, vertical jump, BMI, and position analysis.</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                  <p className="text-gray-600">Get immediate feedback with detailed explanations and improvement suggestions.</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Compare Standards</h3>
                  <p className="text-gray-600">See how you rank against high school, college, and professional basketball players.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Common questions about our basketball calculators and how to use them effectively.
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
                  View All FAQ →
                </Link>
              </div>
            </div>
          </section>

          {/* Training Resources */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Improve Your Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-orange-600">
                        Vertical Jump Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Complete training programs to increase your vertical jump and dunking ability.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 hover:underline text-sm font-medium">
                      Start Training →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-dunk-tips" className="hover:text-blue-600">
                        Dunking Techniques
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Master proper dunking form, approach techniques, and avoid common mistakes.</p>
                    <Link to="/basketball-dunk-tips" className="text-blue-600 hover:underline text-sm font-medium">
                      Learn Techniques →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Activity className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/blog" className="hover:text-green-600">
                        Training Blog
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Read detailed guides on exercises, nutrition, and basketball performance optimization.</p>
                    <Link to="/blog" className="text-green-600 hover:underline text-sm font-medium">
                      Read Articles →
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
                title="Ready to Test Your Basketball Skills?"
                description="Use our free calculators to measure your current abilities and get personalized training recommendations to reach your goals."
                buttonText="Try All Calculators"
                buttonLink="#dunk-calculator"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Calculators;
