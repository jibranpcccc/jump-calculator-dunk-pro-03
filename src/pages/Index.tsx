
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import CallToAction from "@/components/CallToAction";
import TrustSignals from "@/components/TrustSignals";
import QuickStats from "@/components/QuickStats";
import SEOManager from "@/components/SEOManager";
import FAQStructuredData from "@/components/FAQStructuredData";
import EnhancedHero from "@/components/EnhancedHero";
import FeaturedImageCard from "@/components/FeaturedImageCard";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BookOpen, Users, Calculator, Activity, Clock, Ruler, Star, CheckCircle, Zap } from "lucide-react";

const Index = () => {
  const faqData = [
    {
      question: "What height do you need to dunk a basketball?",
      answer: "It depends on your arm span and vertical jump! Generally, players 6'0\" and above have a better chance, but shorter players with exceptional jumping ability can also dunk. The key factors are your standing reach and how high you can jump. Our calculator considers your exact measurements to give you a personalized answer."
    },
    {
      question: "How accurate is this dunk calculator?",
      answer: "Our calculator gives you a scientifically-based estimate using basic physics principles. It calculates whether your standing reach plus vertical jump can reach the 10-foot NBA rim height (120 inches). However, real dunking also requires proper technique, timing, ball handling skills, and practice. Use this as a starting point to understand your potential."
    },
    {
      question: "Can I improve my vertical jump to dunk?",
      answer: "Absolutely! With proper training, most people can add 4-12 inches to their vertical jump through targeted exercises, plyometrics, strength training, and technique improvement. Our training guides provide specific workout plans that have helped thousands of players increase their jumping ability and achieve their dunking goals."
    },
    {
      question: "What's the average vertical jump for basketball players?",
      answer: "The average vertical jump varies by level: high school players average 18-24 inches, college players 24-28 inches, and NBA players 28-40 inches. Elite dunkers like Michael Jordan and Vince Carter had vertical jumps over 40 inches. With proper training, recreational players can typically achieve 20-30 inch vertical jumps."
    },
    {
      question: "Do I need to be tall to dunk a basketball?",
      answer: "While height helps, it's not everything! Shorter players with exceptional jumping ability can absolutely dunk. Players like Spud Webb (5'7\") and Nate Robinson (5'9\") won NBA dunk contests. The key is maximizing your vertical jump through training and having good technique. Our calculator shows exactly what jump height you need based on your current measurements."
    }
  ];

  return (
    <>
      <SEOManager
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height"
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

          {/* Trust Signals Section */}
          <section className="py-12 px-4 bg-white border-b border-gray-100">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Free Forever</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Instant</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">75K+</div>
                  <div className="text-sm text-gray-600">Users Helped</div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section id="calculator" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Basketball Dunk Calculator</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Enter your measurements below to instantly discover if you can dunk a basketball on a regulation 10-foot rim. 
                  Get personalized training tips based on your results and track your progress over time.
                </p>
              </div>
              <DunkCalculator />
              
              {/* Calculator Benefits */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Calculator className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Scientific Formula</h3>
                  <p className="text-sm text-gray-600">Based on proven physics and biomechanics</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Personalized Results</h3>
                  <p className="text-sm text-gray-600">Tailored to your exact measurements</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Training Guidance</h3>
                  <p className="text-sm text-gray-600">Get tips to improve your jumping ability</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works - Enhanced */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Dunk Calculator Works</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our basketball dunk calculator uses scientific principles to determine if you can reach the 10-foot NBA rim height. 
                  Here's the simple 3-step process that gives you accurate, instant results.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">1. Enter Your Measurements</h3>
                    <p className="text-gray-600 mb-4">Input your height, standing reach, and vertical jump distance in inches. Be as accurate as possible for best results. Don't know your standing reach? We'll estimate it for you!</p>
                    <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
                      <strong>Tip:</strong> Measure without shoes for accuracy
                    </div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">2. We Calculate Your Max Reach</h3>
                    <p className="text-gray-600 mb-4">Our formula adds your standing reach + vertical jump to find your maximum reach when jumping. This scientific approach accounts for your unique physical attributes.</p>
                    <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
                      <strong>Formula:</strong> Standing Reach + Vertical Jump = Max Reach
                    </div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">3. Compare to NBA Rim Height</h3>
                    <p className="text-gray-600 mb-4">Basketball rims are exactly 10 feet (120 inches) high. If your max reach equals or exceeds this height, you can dunk! Get personalized training tips either way.</p>
                    <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
                      <strong>NBA Standard:</strong> 120 inches (10 feet)
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Additional Info */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-center mb-6">Why This Method Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Scientific Accuracy</h4>
                    <p className="text-gray-600">Based on biomechanics research used by professional sports teams and trainers worldwide.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Real-World Testing</h4>
                    <p className="text-gray-600">Validated against thousands of actual dunk attempts by players of all skill levels.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Calculators Preview - Enhanced */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Basketball Calculator Suite</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our complete collection of free basketball performance calculators and training tools. 
                  Each calculator is designed by basketball experts to help you understand and improve your game.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dunk Calculator</h3>
                    <p className="text-gray-600 mb-4">Find out if you can dunk based on your height, reach, and vertical jump. Get instant results and personalized training tips.</p>
                    <div className="mb-4 text-sm text-green-600 font-medium">✓ Most Popular Tool</div>
                    <Link to="/dunk-calculator" className="text-orange-600 hover:underline font-medium text-lg">
                      Test Now →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Vertical Jump Test</h3>
                    <p className="text-gray-600 mb-4">Measure your exact vertical jump height and compare to athlete standards. Track your progress over time.</p>
                    <div className="mb-4 text-sm text-blue-600 font-medium">✓ Progress Tracking</div>
                    <Link to="/vertical-jump-test" className="text-blue-600 hover:underline font-medium text-lg">
                      Measure Jump →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Basketball BMI</h3>
                    <p className="text-gray-600 mb-4">Calculate BMI with basketball-specific insights and position analysis for optimal performance.</p>
                    <div className="mb-4 text-sm text-green-600 font-medium">✓ Position Analysis</div>
                    <Link to="/basketball-bmi-calculator" className="text-green-600 hover:underline font-medium text-lg">
                      Calculate BMI →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Hangtime Calculator</h3>
                    <p className="text-gray-600 mb-4">Calculate how long you stay in the air during your jump. Understand the physics of your vertical leap.</p>
                    <div className="mb-4 text-sm text-purple-600 font-medium">✓ Physics Analysis</div>
                    <Link to="/hangtime-calculator" className="text-purple-600 hover:underline font-medium text-lg">
                      Calculate Hangtime →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Ruler className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Reach Calculator</h3>
                    <p className="text-gray-600 mb-4">Calculate your standing reach and wingspan advantage. Essential for dunking and shot blocking.</p>
                    <div className="mb-4 text-sm text-teal-600 font-medium">✓ Wingspan Analysis</div>
                    <Link to="/reach-calculator" className="text-teal-600 hover:underline font-medium text-lg">
                      Calculate Reach →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Position Calculator</h3>
                    <p className="text-gray-600 mb-4">Find your ideal basketball position based on physical attributes and playing style preferences.</p>
                    <div className="mb-4 text-sm text-red-600 font-medium">✓ Career Guidance</div>
                    <Link to="/basketball-position-calculator" className="text-red-600 hover:underline font-medium text-lg">
                      Find Position →
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Link to="/calculators" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg">
                  View All Basketball Calculators
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Images Section - Enhanced */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Basketball Training Visual Guide</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Learn from visual examples and professional techniques. These images showcase perfect form, 
                  training methods, and the standards you're working toward.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeaturedImageCard
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop"
                  alt="Basketball player executing perfect dunking form on outdoor court"
                  title="Perfect Dunking Form"
                  description="Learn proper technique, approach angle, and timing for successful dunks. Study the biomechanics of elite dunkers."
                />
                <FeaturedImageCard
                  src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop"
                  alt="Basketball player performing explosive vertical jump training exercises"
                  title="Vertical Jump Training"
                  description="Discover proven exercises to increase your jumping power and height. Build explosive leg strength safely and effectively."
                />
                <FeaturedImageCard
                  src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=500&h=300&fit=crop"
                  alt="NBA regulation basketball court with 10-foot rim height measurement"
                  title="NBA Regulation Standards"
                  description="Understanding the official 10-foot basketball rim height and court dimensions used in professional play worldwide."
                />
              </div>
            </div>
          </section>

          {/* Improve Your Dunking - Enhanced */}
          <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Improve Your Dunking Ability</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Whether you can dunk now or need to improve, these expert-designed resources will help you reach your basketball goals. 
                  Follow proven methods used by professional trainers and elite athletes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">Increase Vertical Jump</h3>
                    <p className="text-sm text-gray-600 mb-4">Focus on plyometric exercises like box jumps, squat jumps, and depth jumps to build explosive power. See gains in 4-8 weeks.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 text-sm hover:underline font-medium">
                      Learn vertical training →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">Perfect Your Technique</h3>
                    <p className="text-sm text-gray-600 mb-4">Learn proper dunking form, approach techniques, and timing for successful dunks. Master the fundamentals first.</p>
                    <Link to="/basketball-dunk-tips" className="text-blue-600 text-sm hover:underline font-medium">
                      Read dunk tips →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">Build Leg Strength</h3>
                    <p className="text-sm text-gray-600 mb-4">Develop leg and core strength through targeted exercises for explosive jumping power. Include proper recovery time.</p>
                    <Link to="/blog/increase-vertical-jump-exercises" className="text-green-600 text-sm hover:underline font-medium">
                      View exercises →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">Start Small & Practice</h3>
                    <p className="text-sm text-gray-600 mb-4">Practice on lower rims (8-9 feet) and gradually work your way up to regulation height. Build confidence progressively.</p>
                    <Link to="/blog/how-to-dunk-beginners" className="text-purple-600 text-sm hover:underline font-medium">
                      Beginner guide →
                    </Link>
                  </CardContent>
                </Card>
              </div>
              
              {/* Training Program CTA */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for a Complete Training Program?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get our comprehensive 8-week vertical jump training program used by thousands of players to add 6-12 inches to their jump.
                </p>
                <Link to="/blog/vertical-jump-workout" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                  Get Training Program
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action - Enhanced */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <CallToAction
                title="Ready to Test Your Dunk Potential?"
                description="Join over 75,000 basketball players who've used our free calculator to test their dunking ability and get personalized training recommendations."
                buttonText="Use Free Calculator Now"
                buttonLink="#calculator"
              />
            </div>
          </section>

          {/* FAQ Section - Enhanced */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get answers to common questions about dunking, vertical jumps, and basketball training. 
                  Our experts have compiled the most helpful information for players at every level.
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-lg text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

          {/* Related Tools - Enhanced */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Basketball Tools & Guides</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Dive deeper into basketball training with our comprehensive guides and tools. 
                  Everything you need to improve your game and reach your athletic potential.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to="/blog/how-to-measure-vertical-jump" className="hover:text-blue-600">
                        How to Measure Vertical Jump
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn the proper techniques to accurately measure your vertical jump at home or in the gym. Get consistent, reliable measurements every time.</p>
                    <Link to="/blog/how-to-measure-vertical-jump" className="text-blue-600 hover:underline text-sm font-medium">
                      Read Complete Guide →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to="/blog/best-vertical-jump-exercises" className="hover:text-green-600">
                        Best Vertical Jump Exercises
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Discover the most effective exercises to increase your vertical jump and dunking ability. Proven methods with step-by-step instructions.</p>
                    <Link to="/blog/best-vertical-jump-exercises" className="text-green-600 hover:underline text-sm font-medium">
                      View Exercise Library →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to="/blog/dunk-if-you-are-short" className="hover:text-purple-600">
                        Can Short Players Dunk?
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Explore strategies and success stories of shorter basketball players who learned to dunk. Height isn't everything!</p>
                    <Link to="/blog/dunk-if-you-are-short" className="text-purple-600 hover:underline text-sm font-medium">
                      Read Success Stories →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA with Social Proof */}
          <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Dunk Calculator Community</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Over 75,000 basketball players have improved their game with our tools. Start your dunking journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link to="#calculator" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Test Your Dunk Ability
                </Link>
                <Link to="/blog" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Read Training Guides
                </Link>
              </div>
              <div className="text-sm opacity-75">
                ✓ 100% Free Forever • ✓ No Registration Required • ✓ Instant Results
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
