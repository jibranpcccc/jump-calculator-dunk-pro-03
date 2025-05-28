
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Smartphone, Ruler, Timer, Calculator } from "lucide-react";

const VerticalJumpGuide = () => {
  return (
    <>
      <Helmet>
        <title>How to Measure Vertical Jump: 4 Accurate Methods & Techniques</title>
        <meta name="description" content="Discover different methods to measure your vertical jump accurately - wall test, Vertec, jump mats, and smartphone apps. Track your progress and improve your jumping ability!" />
        <meta name="keywords" content="vertical jump measurement, how to measure vertical jump, vertical jump test, wall test vertical, vertec measurement, jump mat test" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/vertical-jump/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/measurements" className="text-orange-600 hover:text-orange-700 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Measurement Guides
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unlock Your True Vertical: A Comprehensive Guide to Measuring Your Jump
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn professional methods to accurately measure and track your vertical jump progress
            </p>
          </div>

          {/* Why Accurate Measurement Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Consistent and Accurate Vertical Jump Measurement is Key to Improvement</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Real Progress</h3>
                <p className="text-gray-600">
                  Consistent measurement methods allow you to see genuine improvements and adjust training accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Realistic Goals</h3>
                <p className="text-gray-600">
                  Know exactly where you stand and what vertical jump height you need to achieve your dunking goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimize Training</h3>
                <p className="text-gray-600">
                  Identify plateaus early and modify your training program to continue making gains.
                </p>
              </div>
            </div>
          </div>

          {/* Jump Types */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Different Types of Vertical Jumps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standing Vertical Jump</h3>
                <p className="text-gray-600 mb-3">
                  No step or approach - jump straight up from a standing position with feet together.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Most standardized measurement</li>
                  <li>• Used in many athletic combines</li>
                  <li>• Pure leg power assessment</li>
                </ul>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Running Jump (One-Foot)</h3>
                <p className="text-gray-600 mb-3">
                  Short approach with takeoff from one foot - mimics many game situations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Typically 2-4 inches higher</li>
                  <li>• More game-realistic</li>
                  <li>• Speed and coordination factor</li>
                </ul>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Running Jump (Two-Foot)</h3>
                <p className="text-gray-600 mb-3">
                  Approach with two-foot takeoff - maximum power and height potential.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Typically 4-8 inches higher</li>
                  <li>• Best for dunking assessment</li>
                  <li>• Our calculator primarily uses this</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Method 1: Wall Test */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 1: The Wall Test (No Equipment Needed)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Instructions:</h3>
                <ol className="space-y-3 text-gray-600">
                  <li><strong>1. Measure Your Standing Reach</strong> - Follow our <Link to="/measurements/standing-reach" className="text-orange-600 underline">standing reach guide</Link></li>
                  <li><strong>2. Prepare for Jump</strong> - Put chalk or tape on your fingertips</li>
                  <li><strong>3. Jump and Mark</strong> - Jump as high as possible and touch the wall at peak height</li>
                  <li><strong>4. Measure Jump Reach</strong> - Measure from floor to your jump mark</li>
                  <li><strong>5. Calculate Vertical</strong> - Subtract standing reach from jump reach</li>
                </ol>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Wall Test Pros & Cons:</h4>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-2">✅ Pros:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free and accessible anywhere</li>
                    <li>• Simple and straightforward</li>
                    <li>• Good for tracking progress</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">❌ Cons:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Marks can be subjective</li>
                    <li>• Requires clean wall space</li>
                    <li>• May mark the wall permanently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2: Vertec */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 2: Using a Vertec or Jump Measurement Pole</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  The Vertec is a professional-grade vertical jump measurement device used in NBA combines and college athletics. 
                  It consists of a vertical pole with plastic vanes that you knock down at your peak jump height.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">How It Works:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Adjustable height markings in ½-inch increments</li>
                  <li>• Plastic vanes indicate exact jump height</li>
                  <li>• Professional accuracy and consistency</li>
                  <li>• Used in official athletic testing</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Vertec Pros & Cons:</h4>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-2">✅ Pros:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extremely accurate and consistent</li>
                    <li>• Professional standard</li>
                    <li>• Easy to read results</li>
                    <li>• No wall marking needed</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">❌ Cons:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Expensive ($300-600)</li>
                    <li>• Requires storage space</li>
                    <li>• Not portable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3: Jump Mats */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 3: Jump Mats (Flight Time Calculation)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Jump mats like the Just Jump Mat calculate your vertical jump by measuring how long you're in the air (flight time). 
                  Using physics formulas, they convert this time into jump height.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">How They Work:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pressure-sensitive mat detects takeoff and landing</li>
                  <li>• Calculates jump height from flight time</li>
                  <li>• Digital display shows results instantly</li>
                  <li>• Can measure multiple jump types</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Jump Mat Pros & Cons:</h4>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-2">✅ Pros:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accurate and objective</li>
                    <li>• Portable and easy to use</li>
                    <li>• Instant digital results</li>
                    <li>• No wall or ceiling needed</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">❌ Cons:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Expensive ($150-400)</li>
                    <li>• Requires batteries/power</li>
                    <li>• Technique affects accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Method 4: Smartphone Apps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Method 4: Smartphone Apps for Vertical Jump Analysis</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Modern smartphone apps use slow-motion video analysis to calculate vertical jump height. 
                  Apps like "My Jump 2" and "What's My Vertical" analyze your jump mechanics frame by frame.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">How They Work:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Record jump in slow-motion video</li>
                  <li>• Mark takeoff and landing frames</li>
                  <li>• Calculate flight time automatically</li>
                  <li>• Convert to jump height using physics</li>
                  <li>• Some apps track progress over time</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">App-Based Pros & Cons:</h4>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-2">✅ Pros:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Very affordable ($5-20)</li>
                    <li>• Always available on your phone</li>
                    <li>• Video analysis capabilities</li>
                    <li>• Progress tracking features</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">❌ Cons:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accuracy depends on technique</li>
                    <li>• Requires good camera angle</li>
                    <li>• Lighting conditions matter</li>
                    <li>• User error in frame selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Best Results */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Timer className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Tips for Getting Your Best (and Most Accurate) Jump Measurement</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before You Jump:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Proper Warm-up:</strong> 10-15 minutes of light cardio and dynamic stretching</li>
                  <li>• <strong>Progressive Jumps:</strong> Start with 50%, 75%, then maximum effort</li>
                  <li>• <strong>Rest Between Attempts:</strong> 2-3 minutes for full recovery</li>
                  <li>• <strong>Optimal Timing:</strong> Measure when you're fresh, not fatigued</li>
                  <li>• <strong>Consistent Conditions:</strong> Same time of day, similar energy levels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">During the Jump:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Arm Swing:</strong> Use full, explosive arm swing for maximum height</li>
                  <li>• <strong>Multiple Attempts:</strong> Take 3-5 jumps, record the best</li>
                  <li>• <strong>Focus on Form:</strong> Consistent technique for comparable results</li>
                  <li>• <strong>Full Effort:</strong> Give maximum effort on measurement days</li>
                  <li>• <strong>Landing Safety:</strong> Always land safely with bent knees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tracking Progress */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Often Should You Measure Your Vertical Jump?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">During Training</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Every 2-3 weeks</strong> during active training phases
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Track steady improvements</li>
                  <li>• Adjust training as needed</li>
                  <li>• Identify plateaus early</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Phase</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Monthly</strong> when maintaining fitness
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ensure no regression</li>
                  <li>• Motivation and goal setting</li>
                  <li>• Long-term progress tracking</li>
                </ul>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing Days</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Before major events</strong> or program changes
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Baseline for new programs</li>
                  <li>• Pre-season assessments</li>
                  <li>• Competition preparation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to See What Your Vertical Means for Dunking?</h2>
            <p className="text-xl mb-6">
              Now that you know how to measure accurately, discover your dunking potential!
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Dunk Potential
              </Link>
              <Link 
                to="/vertical-jump-training"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore Training Programs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalJumpGuide;
