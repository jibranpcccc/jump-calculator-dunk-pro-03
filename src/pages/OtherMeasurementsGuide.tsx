
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Users, Target, TrendingUp, Scale, ArrowLeft, Calculator } from "lucide-react";

const OtherMeasurementsGuide = () => {
  return (
    <>
      <Helmet>
        <title>Basketball Measurements Beyond Height: Wingspan, Hand Size & More</title>
        <meta name="description" content="Discover how wingspan, hand size, body weight, and age impact dunking ability beyond vertical jump. Complete measurement guide with techniques and benchmarks." />
        <meta name="keywords" content="basketball wingspan, hand size measurement, palming basketball, basketball body measurements, ape index basketball, dunking measurements" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/other-measurements/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Basketball Measurements Beyond Height: Wingspan, Hand Size & More" />
        <meta property="og:description" content="Complete guide to wingspan, hand size, and other key measurements that impact your dunking ability." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dunkcalculator.com/measurements/other-measurements/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Measure Wingspan, Hand Size and Other Key Basketball Measurements",
            "description": "Learn to measure wingspan, hand size, body weight, and understand how age affects dunking ability beyond just vertical jump height.",
            "totalTime": "PT30M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Measuring tape"
              },
              {
                "@type": "HowToSupply", 
                "name": "Basketball"
              },
              {
                "@type": "HowToSupply",
                "name": "Scale"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Measure Wingspan",
                "text": "Stand with arms outstretched horizontally. Measure from fingertip to fingertip."
              },
              {
                "@type": "HowToStep",
                "name": "Measure Hand Size",
                "text": "Measure hand length from wrist to middle fingertip and hand span from thumb to pinky."
              },
              {
                "@type": "HowToStep",
                "name": "Test Palming Ability",
                "text": "Attempt to grip a regulation basketball with one hand, focusing on finger placement and control."
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>›</span>
              <Link to="/measurements" className="hover:text-orange-600">Measurements</Link>
              <span>›</span>
              <span className="text-gray-900">Other Measurements</span>
            </div>
          </nav>

          {/* Back Button */}
          <Link 
            to="/measurements"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Measurement Guides
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Dunker's Blueprint: Wingspan, Hand Size, Weight & Age
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the hidden measurements that can make or break your dunking dreams - beyond just height and vertical jump.
            </p>
          </div>

          {/* Wingspan Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Wingspan: Your Secret Weapon for Reach</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Wingspan?</h3>
                <p className="text-gray-600 mb-4">
                  Wingspan is the measurement from fingertip to fingertip when your arms are fully extended horizontally. 
                  This measurement directly impacts your standing reach - often more than your actual height.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Ape Index Advantage</h3>
                <p className="text-gray-600 mb-4">
                  Your "Ape Index" is wingspan minus height. A positive ape index means longer arms relative to height:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>+6 inches or more:</strong> Exceptional reach advantage</li>
                  <li>• <strong>+2 to +6 inches:</strong> Good reach advantage</li>
                  <li>• <strong>0 to +2 inches:</strong> Average proportions</li>
                  <li>• <strong>Negative:</strong> Shorter arms relative to height</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Measure Wingspan</h3>
                <ol className="space-y-3 text-gray-600">
                  <li><strong>1.</strong> Stand against a wall with arms fully extended horizontally</li>
                  <li><strong>2.</strong> Keep shoulders level and arms parallel to the floor</li>
                  <li><strong>3.</strong> Have someone mark fingertip positions on the wall</li>
                  <li><strong>4.</strong> Measure the distance between the two marks</li>
                  <li><strong>5.</strong> Record measurement to the nearest half-inch</li>
                </ol>
                
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-orange-400">
                  <p className="text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Measure wingspan multiple times and take the average. 
                    Ensure your shoulders aren't shrugged up during measurement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NBA Player Examples</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-semibold">Kevin Durant</p>
                  <p className="text-gray-600">Height: 6'10" | Wingspan: 7'4"</p>
                  <p className="text-orange-600">Ape Index: +6"</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Giannis Antetokounmpo</p>
                  <p className="text-gray-600">Height: 6'11" | Wingspan: 7'3"</p>
                  <p className="text-orange-600">Ape Index: +4"</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Anthony Davis</p>
                  <p className="text-gray-600">Height: 6'10" | Wingspan: 7'5"</p>
                  <p className="text-orange-600">Ape Index: +7"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hand Size Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Hand Size & Palming Ability</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Hand Size Matters for Dunking</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Ball Security:</strong> Better grip during approach and flight</li>
                  <li>• <strong>One-Handed Dunks:</strong> Essential for palming the basketball</li>
                  <li>• <strong>Advanced Dunks:</strong> Windmills, between-legs require excellent ball control</li>
                  <li>• <strong>Confidence:</strong> Secure grip reduces fear of dropping the ball</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Hand Size Benchmarks</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Hand Length (wrist to middle fingertip):</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• 8.5+ inches: Excellent for palming</li>
                    <li>• 7.5-8.5 inches: Good, may palm with practice</li>
                    <li>• 6.5-7.5 inches: Average, focus on two-handed dunks</li>
                    <li>• Under 6.5 inches: Use alternative techniques</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Measure Hand Size</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Hand Length:</h4>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li>1. Place hand flat on table, palm down</li>
                    <li>2. Measure from wrist crease to middle fingertip</li>
                    <li>3. Keep fingers straight and together</li>
                    <li>4. Record to nearest quarter-inch</li>
                  </ol>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Hand Span:</h4>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li>1. Spread fingers as wide as possible</li>
                    <li>2. Measure from thumb tip to pinky tip</li>
                    <li>3. Keep hand flat against surface</li>
                    <li>4. Take multiple measurements</li>
                  </ol>
                </div>
                
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <p className="text-sm text-gray-600">
                    <strong>Basketball Test:</strong> Try to palm a regulation basketball. 
                    If you can lift it off the ground and control it, you have functional palming ability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What If You Can't Palm a Basketball?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alternative Techniques:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Cradling:</strong> Secure ball with both hands</li>
                    <li>• <strong>Two-Handed Power:</strong> Focus on power dunks</li>
                    <li>• <strong>Finger Strengthening:</strong> Improve grip gradually</li>
                    <li>• <strong>Smaller Balls:</strong> Practice with youth basketballs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Famous Small-Handed Dunkers:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Isaiah Thomas:</strong> 5'9" with incredible power dunks</li>
                    <li>• <strong>Nate Robinson:</strong> 5'9" Slam Dunk Contest winner</li>
                    <li>• <strong>Spud Webb:</strong> 5'7" legendary dunker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Body Weight Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How Body Weight Influences Jump Height</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Physics of Jumping</h3>
                <p className="text-gray-600 mb-4">
                  Force = Mass × Acceleration. To jump higher with more body weight, you need proportionally more force. 
                  This is why body composition matters more than just total weight.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Principles:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Lean Muscle Mass:</strong> Generates explosive power</li>
                  <li>• <strong>Excess Body Fat:</strong> Dead weight that doesn't contribute to jumping</li>
                  <li>• <strong>Power-to-Weight Ratio:</strong> More important than absolute strength</li>
                  <li>• <strong>Optimal Weight:</strong> Individual sweet spot for each athlete</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Body Composition Guidelines</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Male Athletes:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Elite: 6-12% body fat</li>
                      <li>• Very Good: 12-15% body fat</li>
                      <li>• Good: 15-18% body fat</li>
                      <li>• Average: 18-25% body fat</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Female Athletes:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Elite: 12-16% body fat</li>
                      <li>• Very Good: 16-20% body fat</li>
                      <li>• Good: 20-24% body fat</li>
                      <li>• Average: 24-30% body fat</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-gray-600">
                    <strong>Remember:</strong> Focus on building lean muscle and reducing excess fat, 
                    not just losing weight. Muscle is your jumping engine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Age and Development Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Age & Athletic Development</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Youth (13-18 years)</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Rapid strength and power gains possible</li>
                    <li>• Natural growth spurts can boost reach</li>
                    <li>• Ideal time to learn proper jumping technique</li>
                    <li>• Recovery is fast, training adaptation quick</li>
                    <li>• Focus on movement quality over intensity</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Peak Years (19-28)</h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Maximum strength and power potential</li>
                    <li>• Optimal hormone levels for muscle building</li>
                    <li>• Best balance of power and recovery</li>
                    <li>• Can handle high-intensity training</li>
                    <li>• Prime time for achieving dunking goals</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Masters (29+ years)</h3>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Slower recovery, need more rest</li>
                    <li>• Gradual decline in explosive power</li>
                    <li>• Can still make significant improvements</li>
                    <li>• Experience and technique become crucial</li>
                    <li>• Focus on injury prevention</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Realistic Vertical Jump Improvements by Age</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6-Month Training Program:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>13-18 years:</strong> 6-12 inches possible</li>
                      <li>• <strong>19-25 years:</strong> 4-8 inches typical</li>
                      <li>• <strong>26-35 years:</strong> 2-6 inches realistic</li>
                      <li>• <strong>36+ years:</strong> 1-4 inches achievable</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Factors Affecting Improvement:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Previous training experience</li>
                      <li>• Current fitness level</li>
                      <li>• Genetic predisposition</li>
                      <li>• Training consistency</li>
                      <li>• Recovery and nutrition quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Integration */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white mb-8">
            <div className="flex items-center mb-4">
              <Calculator className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Get Your Most Comprehensive Dunk Analysis!</h2>
            </div>
            <p className="text-xl mb-6">
              Our dunk calculator considers all these measurements - wingspan for reach estimation, hand size for dunk type recommendations, 
              age for realistic expectations, and weight for performance context.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Use All Advanced Measurements in Calculator
              </Link>
              <Link 
                to="/measurements"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Complete All Measurement Guides
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Master All Your Measurements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/measurements/standing-reach"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Standing Reach</h3>
                <p className="text-gray-600 text-sm">Your most important dunking measurement</p>
              </Link>
              
              <Link 
                to="/measurements/vertical-jump"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vertical Jump</h3>
                <p className="text-gray-600 text-sm">Track your explosive power accurately</p>
              </Link>
              
              <Link 
                to="/measurements/hoop-heights"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoop Heights</h3>
                <p className="text-gray-600 text-sm">Understand official basketball standards</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherMeasurementsGuide;
