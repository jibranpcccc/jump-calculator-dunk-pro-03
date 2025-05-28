
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Ruler, AlertCircle, CheckCircle, Calculator } from "lucide-react";

const StandingReachGuide = () => {
  return (
    <>
      <Helmet>
        <title>How to Measure Standing Reach Accurately for Dunking | Step-by-Step Guide</title>
        <meta name="description" content="Learn the precise method to measure your standing reach. This crucial measurement is key to understanding your dunk potential. Complete step-by-step guide with diagrams." />
        <meta name="keywords" content="standing reach measurement, how to measure standing reach, basketball reach, dunk calculator measurement, arm span measurement" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/standing-reach/" />
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
              How to Accurately Measure Your Standing Reach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of your dunk calculation - learn the precise method professionals use
            </p>
          </div>

          {/* Why Standing Reach Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Ruler className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Standing Reach is More Important Than Height for Dunking</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Standing reach is the distance from the floor to your fingertips when standing flat-footed with your arm fully extended overhead. 
                  This measurement is crucial because it directly determines how close you naturally are to the basketball rim.
                </p>
                <p className="text-gray-600 mb-4">
                  Two players of the same height can have vastly different standing reaches due to arm length, shoulder width, and hand size. 
                  A player who is 6'0" with long arms might have the same standing reach as a 6'2" player with shorter arms.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Example:</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Player A:</strong> 6'0" height, 8'0" standing reach
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Player B:</strong> 6'2" height, 7'10" standing reach
                </p>
                <p className="text-gray-600 font-semibold">
                  Player A has a 2-inch advantage despite being 2 inches shorter!
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Need */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Need for an Accurate Measurement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Items:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    A flat wall (smooth, vertical surface)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Measuring tape or ruler (at least 9 feet long)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Pencil or removable marker
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Hard, flat surface to stand on
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Helpful (Optional):</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    A friend to help mark and measure
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Step stool or ladder for measurement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Phone camera to verify positioning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Guide: The Wall Method</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 1: Preparation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Remove your shoes and stand in bare feet or socks</li>
                  <li>• Stand with your back against a flat wall</li>
                  <li>• Keep your feet flat on the ground, heels touching the wall</li>
                  <li>• Stand as tall as possible with good posture</li>
                  <li>• Look straight ahead, not up at your hand</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 2: Reaching Technique</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Raise your dominant arm straight up against the wall</li>
                  <li>• Keep your arm fully extended but don't strain</li>
                  <li>• Press your fingers together and reach as high as possible</li>
                  <li>• Don't lift your heels or go on your tiptoes</li>
                  <li>• Keep your shoulder pressed against the wall</li>
                  <li>• Reach with your fingertips, not your palm</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 3: Marking Your Reach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Have a friend mark the highest point of your fingertips</li>
                  <li>• If alone, carefully mark with your other hand or a pencil</li>
                  <li>• Make a small, precise mark - don't draw a line</li>
                  <li>• Double-check the mark is at your absolute highest reach</li>
                  <li>• Take the measurement 2-3 times for accuracy</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 4: Measuring the Mark</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Measure from the floor to your mark using a measuring tape</li>
                  <li>• Record the measurement in both inches and centimeters</li>
                  <li>• Round to the nearest half-inch for practical use</li>
                  <li>• Verify your measurement by taking it twice</li>
                  <li>• Write down your standing reach immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Common Mistakes to Avoid</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Rising on Tiptoes</h4>
                  <p className="text-red-700">Keep your feet flat and heels on the ground for accurate results.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Measuring to Palm</h4>
                  <p className="text-red-700">Always measure to your fingertips, not your palm or wrist.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Arching Your Back</h4>
                  <p className="text-red-700">Keep your back and shoulders against the wall naturally.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Over-stretching Shoulder</h4>
                  <p className="text-red-700">Don't dislocate your shoulder or strain unnaturally.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Inconsistent Measurements</h4>
                  <p className="text-red-700">Take measurements the same way each time for progress tracking.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Wearing Shoes</h4>
                  <p className="text-red-700">Always measure barefoot for consistent, accurate results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Height Estimation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Can I Estimate My Standing Reach From My Height?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  There are common estimation formulas (like Standing Reach = Height × 1.33), but these are 
                  <strong> significantly less accurate</strong> than direct measurement.
                </p>
                <p className="text-gray-600 mb-4">
                  These estimates can be off by 3-6 inches in either direction due to individual body proportions, 
                  which makes a huge difference for dunk calculations.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-semibold">
                    ⚠️ Always prefer direct measurement for the most accurate dunk calculator results!
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Estimation Errors:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Assumes average arm-to-height ratio</li>
                  <li>• Doesn't account for shoulder width</li>
                  <li>• Ignores hand and finger length</li>
                  <li>• Varies significantly between individuals</li>
                  <li>• Can mislead training goals by inches</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Now You Know Your Reach - What's Next?</h2>
            <p className="text-xl mb-6">
              Use your standing reach measurement in our dunk calculator to see your potential!
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Use Dunk Calculator
              </Link>
              <Link 
                to="/measurements/vertical-jump"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Measure Vertical Jump →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandingReachGuide;
