
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DunkCalculator from "@/components/DunkCalculator";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Free Dunk Calculator | Can You Dunk a Basketball? Test Now</title>
        <meta name="description" content="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!" />
        <meta name="keywords" content="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test" />
        <link rel="canonical" href="https://dunkcalculator.com/" />
        
        <meta property="og:title" content="Free Dunk Calculator | Can You Dunk a Basketball?" />
        <meta property="og:description" content="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!" />
        <meta property="og:url" content="https://dunkcalculator.com/" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Dunk Calculator",
            "description": "Free basketball dunk calculator to test if you can dunk",
            "url": "https://dunkcalculator.com",
            "applicationCategory": "Sports",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-12 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Can You Dunk?
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Find out instantly with our free dunk calculator. Enter your height, reach, and vertical jump to see if you can dunk a basketball!
              </p>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-8 px-4">
            <div className="container mx-auto">
              <DunkCalculator />
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How the Dunk Calculator Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Enter Your Measurements</h3>
                    <p className="text-gray-600">Input your height, standing reach, and vertical jump distance in inches.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">We Calculate Your Max Reach</h3>
                    <p className="text-gray-600">We add your height + standing reach + vertical jump to find your maximum reach.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Compare to NBA Rim</h3>
                    <p className="text-gray-600">Basketball rims are 10 feet (120 inches) high. If you can reach that high, you can dunk!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Quick Tips */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Dunking Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Improve Your Jump</h3>
                    <p className="text-sm text-gray-600">Focus on plyometric exercises like box jumps and squat jumps.</p>
                    <Link to="/vertical-jump-training" className="text-orange-600 text-sm hover:underline">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Perfect Your Technique</h3>
                    <p className="text-sm text-gray-600">Learn proper dunking form and approach techniques.</p>
                    <Link to="/basketball-dunk-tips" className="text-orange-600 text-sm hover:underline">
                      Read tips →
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Build Strength</h3>
                    <p className="text-sm text-gray-600">Develop leg and core strength for explosive jumping power.</p>
                    <Link to="/blog/increase-vertical-jump-exercises" className="text-orange-600 text-sm hover:underline">
                      View exercises →
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Start Small</h3>
                    <p className="text-sm text-gray-600">Practice on lower rims and gradually work your way up.</p>
                    <Link to="/blog/how-to-dunk-beginners" className="text-orange-600 text-sm hover:underline">
                      Beginner guide →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What height do you need to dunk?</h3>
                    <p className="text-gray-600">It depends on your arm span and vertical jump! Generally, players 6'0" and above have a better chance, but shorter players with exceptional jumping ability can also dunk.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">How accurate is this calculator?</h3>
                    <p className="text-gray-600">Our calculator gives you a good estimate based on basic physics. Real dunking also requires technique, timing, and ball handling skills.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Can I improve my vertical jump?</h3>
                    <p className="text-gray-600">Absolutely! With proper training, most people can add 4-12 inches to their vertical jump through exercises and technique improvement.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Link to="/faq" className="text-orange-600 hover:underline font-medium">
                  View all FAQs →
                </Link>
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
