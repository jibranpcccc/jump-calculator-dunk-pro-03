
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Zap, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FirstDunkGuide = () => {
  return (
    <>
      <Helmet>
        <title>How to Dunk a Basketball for the First Time: A Beginner's Step-by-Step Guide</title>
        <meta name="description" content="Learn how to dunk a basketball! Step-by-step guide for beginners covering approach, takeoff, ball control, common mistakes, & drills to get your first slam." />
        <meta name="keywords" content="how to dunk basketball, first dunk guide, dunking for beginners, basketball dunk technique, slam dunk tutorial" />
        <link rel="canonical" href="https://dunkcalculator.com/dunking-skills/first-dunk-guide/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculator
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Dunk a Basketball for the First Time: Your Step-by-Step Blueprint to Slamming
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the fundamentals of dunking with our comprehensive beginner guide. Learn proper technique, 
              build confidence, and achieve your first slam dunk safely and effectively.
            </p>
          </div>

          {/* Physical Readiness */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Are You Physically Ready? Minimum Benchmarks to Aim For</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Prerequisites:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Rim Access:</strong> Consistently touch or grab the rim with ease (standing or with run-up)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Vertical Jump:</strong> At least 24+ inches for most players (varies by height)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Body Control:</strong> Good coordination and balance during athletic movements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Core Strength:</strong> Ability to control your body in mid-air</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    <strong>Not quite there yet?</strong> Focus on vertical jump training first. 
                    Most beginners need 2-6 months of dedicated training before attempting their first dunk.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Assessment Test:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Step 1: Rim Touch Test</h4>
                    <p className="text-orange-700 text-sm">
                      Can you touch the rim consistently with a 2-3 step approach? 
                      If yes, you're likely ready to start dunk training.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Step 2: Ball Control Test</h4>
                    <p className="text-green-700 text-sm">
                      Practice jumping with a basketball and extending it above the rim level. 
                      Good control indicates readiness.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link 
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Check Your Dunk Potential
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Jumping Style */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Choosing Your Dominant Jumping Style: One-Foot vs. Two-Foot Takeoff</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">One-Foot Takeoff</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Characteristics & Advantages:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Better for speed and momentum conversion</li>
                    <li>• Can take off from further out (8-12 feet from basket)</li>
                    <li>• More common for guards and wing players</li>
                    <li>• Allows for more creative approach angles</li>
                    <li>• Better for alley-oops and fast breaks</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="text-blue-700 text-sm">
                    <strong>Best for:</strong> Players who are naturally fast, have good single-leg strength, 
                    and prefer momentum-based movements.
                  </p>
                </div>
              </div>
              
              <div className="p-6 border-2 border-green-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Two-Foot Takeoff</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Characteristics & Advantages:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Better for pure power and control</li>
                    <li>• More stable takeoff closer to basket (4-6 feet)</li>
                    <li>• Common for bigger players and power jumpers</li>
                    <li>• Easier to time and more predictable</li>
                    <li>• Better for two-handed dunks and power moves</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="text-green-700 text-sm">
                    <strong>Best for:</strong> Players with strong legs, good bilateral strength, 
                    and those who prefer controlled, powerful movements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple Drills to Determine Your Natural Preference:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Layup Test</h4>
                  <p className="text-yellow-700 text-sm">
                    Practice layups using both one-foot and two-foot takeoffs. 
                    Which feels more natural and powerful?
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Rim Touch Comparison</h4>
                  <p className="text-purple-700 text-sm">
                    Try touching the rim with both styles. 
                    Which allows you to reach higher consistently?
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Comfort Assessment</h4>
                  <p className="text-indigo-700 text-sm">
                    Which takeoff style feels more comfortable and controllable during explosive movements?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Run */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Mastering the Approach Run: Building Speed and Power</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Principles for Your Approach:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Ideal Number of Steps</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>One-Foot:</strong> 3-5 controlled, accelerating steps</li>
                      <li>• <strong>Two-Foot:</strong> 2-4 powerful, controlled steps</li>
                      <li>• Start with fewer steps and build up</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Speed Control</h4>
                    <p className="text-green-700 text-sm">
                      Build controlled speed - not too fast to lose control, 
                      not too slow to lose power. About 75-85% of your maximum sprint speed.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Approach Angle</h4>
                    <p className="text-purple-700 text-sm">
                      A slight angle (15-30 degrees) is often better than straight on. 
                      This allows for better momentum conversion and body positioning.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Approach Technique:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-3 mt-1">1</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Start Position</h5>
                      <p className="text-gray-600 text-sm">Begin 10-15 feet from the basket in athletic stance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-3 mt-1">2</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">First Steps</h5>
                      <p className="text-gray-600 text-sm">Take controlled steps, gradually building speed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-3 mt-1">3</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Penultimate Step</h5>
                      <p className="text-gray-600 text-sm">Second-to-last step is crucial for gathering momentum</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-3 mt-1">4</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Plant & Explode</h5>
                      <p className="text-gray-600 text-sm">Final step plants firmly for explosive takeoff</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Practice Tip:</strong> Start by practicing your approach without a ball, 
                    focusing on consistent footwork and rhythm. Add the ball once your approach feels natural.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Common Mistakes Beginners Make When Trying to Dunk</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Approach & Timing Mistakes:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Running Too Fast</h4>
                    <p className="text-red-700 text-sm">Loses control and proper body positioning for takeoff</p>
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Mistiming the Jump</h4>
                    <p className="text-red-700 text-sm">Taking off too early (too far) or too late (too close)</p>
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Inconsistent Steps</h4>
                    <p className="text-red-700 text-sm">Varying approach rhythm disrupts timing and power</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical & Mental Mistakes:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Poor Ball Control</h4>
                    <p className="text-red-700 text-sm">Not extending ball high enough or losing control during jump</p>
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Inefficient Arm Swing</h4>
                    <p className="text-red-700 text-sm">Not using arms to generate upward momentum</p>
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Fear of Contact</h4>
                    <p className="text-red-700 text-sm">Hesitation or pulling back due to fear of hitting rim</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">How to Fix These Mistakes:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Practice approach without ball until rhythm is automatic</li>
                  <li>• Use video analysis to check your takeoff timing</li>
                  <li>• Start with smaller balls to build confidence</li>
                  <li>• Practice on lower rims when possible</li>
                </ul>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Focus on aggressive upward arm swing</li>
                  <li>• Visualize successful dunks before attempting</li>
                  <li>• Build up intensity gradually over time</li>
                  <li>• Get feedback from experienced dunkers or coaches</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dunking Journey?</h2>
            <p className="text-xl mb-6">
              Use our tools and training guides to build the athleticism and technique needed for your first dunk.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Check Your Dunk Potential
              </Link>
              <Link 
                to="/vertical-jump-training"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Start Training Program →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FirstDunkGuide;
