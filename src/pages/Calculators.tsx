
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import VerticalJumpTestCalculator from "@/components/VerticalJumpTestCalculator";
import BasketballBMICalculator from "@/components/BasketballBMICalculator";
import SEOManager from "@/components/SEOManager";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Calculators = () => {
  const faqData = [
    {
      question: "Which basketball calculator should I use?",
      answer: "Use the Dunk Calculator to see if you can dunk, the Vertical Jump Test to measure your jumping ability, and the BMI Calculator to understand your body composition for basketball."
    },
    {
      question: "Are these basketball calculators accurate?",
      answer: "Our calculators provide scientifically-based estimates using established formulas. However, actual performance depends on technique, training, and individual factors."
    }
  ];

  return (
    <>
      <SEOManager
        title="Free Basketball Calculators | Dunk, Vertical Jump & BMI Tools"
        description="Access our complete collection of free basketball calculators. Test your dunking ability, measure vertical jump, calculate BMI for basketball performance."
        keywords="basketball calculators, dunk calculator, vertical jump test, basketball BMI calculator, free basketball tools"
        canonicalUrl="https://dunkcalculator.com/calculators"
        pageType="website"
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free Basketball 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                  {" "}Calculators
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive collection of basketball performance calculators. Test your dunking ability, 
                measure vertical jump, analyze BMI, and more - all completely free!
              </p>
            </div>
          </section>

          {/* Calculator Navigation */}
          <section className="py-8 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => document.getElementById('dunk-calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                  <CardContent className="p-6 text-center">
                    <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Dunk Calculator</h3>
                    <p className="text-gray-600">Find out if you can dunk a basketball on a regulation rim</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => document.getElementById('vertical-jump-calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Vertical Jump Test</h3>
                    <p className="text-gray-600">Measure your exact vertical jump height and compare to standards</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => document.getElementById('bmi-calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                  <CardContent className="p-6 text-center">
                    <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Basketball BMI</h3>
                    <p className="text-gray-600">Calculate BMI with basketball-specific insights and position analysis</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Dunk Calculator Section */}
          <section id="dunk-calculator" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dunk Calculator</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Enter your measurements to instantly discover if you can dunk a basketball on a regulation 10-foot rim.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <DunkCalculator />
              </div>
            </div>
          </section>

          {/* Vertical Jump Calculator Section */}
          <section id="vertical-jump-calculator" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vertical Jump Test Calculator</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Accurately measure your vertical jump height and see how you compare to different skill levels.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <VerticalJumpTestCalculator />
              </div>
            </div>
          </section>

          {/* BMI Calculator Section */}
          <section id="bmi-calculator" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Basketball BMI Calculator</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Calculate your BMI with insights specifically designed for basketball players and different positions.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <BasketballBMICalculator />
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Basketball Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/vertical-jump-training" className="hover:text-orange-600">
                        Vertical Jump Training
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Complete guide to improving your vertical jump with proven exercises and techniques.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 hover:underline text-sm font-medium">
                      Start Training →
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calculator className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="/basketball-dunk-tips" className="hover:text-blue-600">
                        Dunk Tips & Techniques
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn proper dunking form, approach techniques, and practice methods.</p>
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
                        Basketball Training Blog
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">In-depth articles on basketball training, nutrition, and performance optimization.</p>
                    <Link to="/blog" className="text-green-600 hover:underline text-sm font-medium">
                      Read Articles →
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

export default Calculators;
