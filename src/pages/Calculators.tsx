import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calculator, Target, Clock, Activity, Users, TrendingUp, ArrowRight, Timer } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const Calculators = () => {
  const calculators = [
    {
      id: 1,
      title: "Dunk Calculator",
      description: "Calculate whether you can dunk a basketball based on your height, standing reach, and vertical jump. Get personalized training recommendations.",
      url: "/",
      icon: Target,
      difficulty: "Easy",
      time: "1 min",
      featured: true,
      category: "Core Tools",
      benefits: ["Instant dunk assessment", "Training recommendations", "Progress tracking"],
      relatedPages: ["/measurements/standing-reach", "/measurements/vertical-jump"]
    },
    {
      id: 2,
      title: "Vertical Jump Test Calculator",
      description: "Measure and track your vertical jump performance with multiple testing methods. Compare your results to NBA and college standards.",
      url: "/calculators/vertical-jump-test",
      icon: TrendingUp,
      difficulty: "Easy",
      time: "2 min",
      featured: true,
      category: "Performance Testing",
      benefits: ["Multiple test methods", "Performance benchmarking", "Progress tracking"],
      relatedPages: ["/measurements/vertical-jump", "/vertical-jump-training"]
    },
    {
      id: 3,
      title: "Max Hangtime Calculator",
      description: "Calculate how long you stay in the air during your jump. Uses physics principles to determine your airtime based on vertical jump height.",
      url: "/calculators/max-hangtime",
      icon: Timer,
      difficulty: "Easy",
      time: "1 min",
      featured: true,
      category: "Physics & Analysis",
      benefits: ["Air time calculation", "Physics insights", "Professional comparisons"],
      relatedPages: ["/measurements/vertical-jump", "/dunking-skills/famous-dunkers"]
    },
    {
      id: 4,
      title: "Vertical Jump Improvement Calculator",
      description: "Plan your vertical jump training goals. Get realistic improvement timelines and personalized training recommendations based on your targets.",
      url: "/calculators/vertical-jump-improvement",
      icon: TrendingUp,
      difficulty: "Easy",
      time: "2 min",
      featured: true,
      category: "Training Planning",
      benefits: ["Goal setting", "Training recommendations", "Realistic timelines"],
      relatedPages: ["/vertical-jump-training", "/vertical-jump-training/programs"]
    },
    {
      id: 5,
      title: "Hangtime Calculator",
      description: "Calculate how long you stay in the air during your jump. Compare your hangtime to professional athletes and understand the physics behind it.",
      url: "/calculators/hangtime",
      icon: Clock,
      difficulty: "Easy",
      time: "1 min",
      featured: false,
      category: "Physics & Analysis",
      benefits: ["Air time calculation", "Physics insights", "Professional comparisons"],
      relatedPages: ["/measurements/vertical-jump", "/dunking-skills/famous-dunkers"]
    },
    {
      id: 6,
      title: "Standing Reach Calculator",
      description: "Accurately measure your standing reach - the foundation of all basketball calculations. Learn proper measurement techniques.",
      url: "/calculators/reach",
      icon: Users,
      difficulty: "Easy",
      time: "3 min",
      featured: false,
      category: "Measurement Tools",
      benefits: ["Accurate measurements", "Proper technique", "Calculation foundation"],
      relatedPages: ["/measurements/standing-reach", "/measurements/other-measurements"]
    },
    {
      id: 7,
      title: "Basketball BMI Calculator",
      description: "Calculate your BMI and see how it relates to basketball performance and different playing positions. Get position-specific insights.",
      url: "/calculators/bmi",
      icon: Activity,
      difficulty: "Easy",
      time: "2 min",
      featured: false,
      category: "Health & Fitness",
      benefits: ["Health assessment", "Position analysis", "Performance insights"],
      relatedPages: ["/measurements/other-measurements", "/dunking-skills/average-vertical-jumps"]
    },
    {
      id: 8,
      title: "Basketball Position Calculator",
      description: "Find your ideal basketball position based on height, weight, and athletic ability. Get personalized position recommendations.",
      url: "/calculators/position",
      icon: Users,
      difficulty: "Easy",
      time: "3 min",
      featured: false,
      category: "Position Analysis",
      benefits: ["Position recommendations", "Skill development", "Career guidance"],
      relatedPages: ["/measurements/other-measurements", "/dunking-skills/average-vertical-jumps"]
    }
  ];

  const categories = ["All Tools", "Core Tools", "Performance Testing", "Physics & Analysis", "Training Planning", "Measurement Tools", "Health & Fitness", "Position Analysis"];

  return (
    <>
      <Helmet>
        <title>Free Basketball Calculators | Dunk Calculator & More Tools</title>
        <meta name="description" content="Free basketball calculators including dunk calculator, vertical jump test, hangtime calculator, BMI calculator, and position analyzer. Get instant results and training insights." />
        <meta name="keywords" content="basketball calculator, dunk calculator, vertical jump calculator, basketball tools, free basketball calculators" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Basketball Calculators & Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of basketball calculators to analyze your performance, 
              track progress, and optimize your training. All tools are free and provide instant results.
            </p>
          </div>

          {/* Featured Calculators */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {calculators.filter(calc => calc.featured).map((calculator) => {
                const IconComponent = calculator.icon;
                return (
                  <div 
                    key={calculator.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-blue-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{calculator.title}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {calculator.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {calculator.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {calculator.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span>Difficulty: <strong className="text-gray-700">{calculator.difficulty}</strong></span>
                        <span>Time: <strong className="text-gray-700">{calculator.time}</strong></span>
                      </div>
                    </div>
                    
                    <Link 
                      to={calculator.url}
                      className="inline-flex items-center w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      <IconComponent className="w-5 h-5 mr-2" />
                      Use This Calculator
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* All Calculators */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Basketball Tools</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calculator) => {
                const IconComponent = calculator.icon;
                return (
                  <div 
                    key={calculator.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{calculator.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {calculator.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {calculator.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      <span>{calculator.difficulty}</span>
                      <span>{calculator.time}</span>
                    </div>
                    
                    <Link 
                      to={calculator.url}
                      className="inline-flex items-center w-full justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Try Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    
                    {/* Related Pages */}
                    {calculator.relatedPages && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-1">Related:</p>
                        <div className="flex flex-wrap gap-1">
                          {calculator.relatedPages.slice(0, 2).map((page, index) => (
                            <Link 
                              key={index}
                              to={page}
                              className="text-xs text-blue-600 hover:text-blue-700 underline"
                            >
                              {page.includes('measurements') ? 'Measurement Guide' : 'Training Guide'}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Integration with Training */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Our Calculators Work Together</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Assess Your Current Ability</h3>
                <p className="text-gray-600">Use our dunk calculator and vertical jump test to establish your baseline performance and identify areas for improvement.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Track Your Progress</h3>
                <p className="text-gray-600">Regular testing with our calculators helps you monitor improvements and adjust your training program for optimal results.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Optimize Your Training</h3>
                <p className="text-gray-600">Use insights from all our tools to customize your training approach and focus on the most effective exercises for your goals.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Analyze Your Basketball Performance?</h2>
            <p className="text-xl mb-8">
              Start with our most popular tool and discover your dunking potential in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Try Dunk Calculator
              </Link>
              <Link 
                to="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Read Training Guides
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Calculators;
