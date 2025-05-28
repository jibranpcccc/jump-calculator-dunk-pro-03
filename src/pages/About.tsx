
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Target, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Accuracy",
      description: "Our dunk calculator uses proven biomechanical principles to provide accurate estimates based on your measurements."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Accessibility",
      description: "Free, easy-to-use tools and content that help basketball players of all levels improve their game."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Quality",
      description: "Expert-reviewed content and training advice based on sports science and real-world basketball experience."
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: "Passion",
      description: "Created by basketball enthusiasts who understand the dream of dunking and want to help others achieve it."
    }
  ];

  const features = [
    "Free interactive dunk calculator",
    "Comprehensive training guides",
    "Expert technique tutorials",
    "Progress tracking tools",
    "Mobile-friendly design",
    "No registration required"
  ];

  return (
    <>
      <Helmet>
        <title>About Dunk Calculator – Your Basketball Training Resource</title>
        <meta name="description" content="Learn about Dunk Calculator, the free online tool helping basketball players achieve their dunking goals. Discover our mission, features, and commitment to helping you jump higher." />
        <meta name="keywords" content="about dunk calculator, basketball training tools, vertical jump resources, dunking help" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Dunk Calculator – Your Basketball Training Resource" />
        <meta property="og:description" content="Learn about our mission to help basketball players achieve their dunking dreams through accurate calculations and expert training advice." />
        <meta property="og:type" content="website" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dunk Calculator",
            "description": "Free online dunk calculator and basketball training resources",
            "url": "https://lovable.dev",
            "logo": "https://lovable.dev/logo.png",
            "foundingDate": "2024",
            "mission": "To help basketball players of all levels achieve their dunking goals through accurate tools and expert training guidance."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
              <Link to="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
                <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">About</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Dunk Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about helping basketball players achieve their dunking dreams through accurate tools, expert guidance, and comprehensive training resources.
              </p>
            </div>

            {/* Mission Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                  <p className="text-lg text-center mb-6">
                    To democratize basketball training by providing free, accurate tools and expert guidance that help players of all levels improve their vertical jump and achieve their dunking goals.
                  </p>
                  <div className="text-center">
                    <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Try Our Calculator
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Story Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    Dunk Calculator was born from a simple question: "How high do I need to jump to dunk?" We realized that while this question is fundamental to basketball training, there wasn't a reliable, free tool to answer it accurately.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our team of basketball enthusiasts and sports science experts came together to create a comprehensive resource that goes beyond just calculating numbers. We provide the tools, training guidance, and motivation needed to turn dunking dreams into reality.
                  </p>
                  <p className="text-lg text-gray-700">
                    Since launching, we've helped thousands of players understand their dunking potential and provided them with scientifically-backed training methods to reach their goals. Whether you're 5'5" or 6'5", we believe everyone can improve their vertical jump with the right approach.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Values Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        {value.icon}
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                          <Calculator className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Commitment Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-orange-600">Always Free</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">
                      Our core tools will always be free. We believe financial barriers shouldn't prevent anyone from pursuing their basketball dreams.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-orange-600">Evidence-Based</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">
                      All our recommendations are based on sports science research and proven training methods used by professional athletes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-orange-600">Continuously Improving</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">
                      We regularly update our content and tools based on user feedback and the latest developments in basketball training.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Behind the Scenes</h2>
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-gray-700 mb-6">
                    Our team includes former college basketball players, certified trainers, sports science researchers, and passionate fans who understand the dedication required to improve your game.
                  </p>
                  <p className="text-lg text-gray-700">
                    We're committed to providing accurate, helpful, and motivating content because we've all been where you are – dreaming of that first dunk and working hard to make it happen.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section>
              <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-lg mb-6">
                    Join thousands of players who've used our tools to understand their potential and achieve their dunking goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Try Dunk Calculator
                    </Link>
                    <Link to="/vertical-jump-training" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                      Start Training
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
