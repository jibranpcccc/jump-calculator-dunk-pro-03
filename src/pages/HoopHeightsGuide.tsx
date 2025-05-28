
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Ruler, Target, TrendingUp, Users, ArrowLeft } from "lucide-react";

const HoopHeightsGuide = () => {
  return (
    <>
      <Helmet>
        <title>Basketball Hoop Heights Guide: Official Standards & Training Tips</title>
        <meta name="description" content="Complete guide to basketball hoop heights from NBA regulation (10 feet) to youth leagues. Learn how adjusting rim height helps dunk training progression and skill development." />
        <meta name="keywords" content="basketball hoop height, NBA rim height, youth basketball hoop, adjustable basketball hoop, dunk training rim height, basketball court specifications" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/hoop-heights/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Basketball Hoop Heights Guide: Official Standards & Training Tips" />
        <meta property="og:description" content="Complete guide to basketball hoop heights from NBA regulation to youth leagues. Perfect for players and coaches." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dunkcalculator.com/measurements/hoop-heights/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Basketball Hoop Heights Guide: Official Standards & Training Tips",
            "description": "Complete guide to basketball hoop heights from NBA regulation (10 feet) to youth leagues. Learn how adjusting rim height helps dunk training progression and skill development.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dunkcalculator.com/logo.png"
              }
            },
            "datePublished": "2024-05-28",
            "dateModified": "2024-05-28",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://dunkcalculator.com/measurements/hoop-heights/"
            }
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
              <span className="text-gray-900">Hoop Heights</span>
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
              Basketball Hoop Heights: From NBA Regulation to Your Driveway
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding official basketball rim heights and how adjusting height can accelerate your dunk training progression.
            </p>
          </div>

          {/* The Standard Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">The Standard: 10 Feet (3.05 Meters)</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              The 10-foot basketball rim height was established in 1891 by Dr. James Naismith, the inventor of basketball. 
              This height was chosen because it was the height of the running track balcony where he first hung the peach baskets.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why 10 Feet Became the Magic Number:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Historical precedent:</strong> The original gymnasium balcony height</li>
                <li>• <strong>Perfect challenge:</strong> Achievable for skilled players, challenging for most</li>
                <li>• <strong>Global standardization:</strong> Adopted worldwide for consistency</li>
                <li>• <strong>Equipment compatibility:</strong> Standard for all professional courts</li>
              </ul>
            </div>
          </div>

          {/* Official Heights Table */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Official Hoop Heights by League & Level</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">League/Level</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rim Height (Feet)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rim Height (Meters)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">NBA</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Professional standard</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">WNBA</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Same as men's professional</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FIBA International</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Olympics & World Cup</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">NCAA Men's</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">College basketball</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">NCAA Women's</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Same as men's college</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">High School</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Grades 9-12</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Middle School (Grades 7-8)</td>
                    <td className="border border-gray-300 px-4 py-3">10 feet</td>
                    <td className="border border-gray-300 px-4 py-3">3.05 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Some leagues use 9 feet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Youth (Ages 11-12)</td>
                    <td className="border border-gray-300 px-4 py-3">9 feet</td>
                    <td className="border border-gray-300 px-4 py-3">2.74 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Recommended by most leagues</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Youth (Ages 9-10)</td>
                    <td className="border border-gray-300 px-4 py-3">8.5 feet</td>
                    <td className="border border-gray-300 px-4 py-3">2.59 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Developmental focus</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Youth (Ages 7-8)</td>
                    <td className="border border-gray-300 px-4 py-3">8 feet</td>
                    <td className="border border-gray-300 px-4 py-3">2.44 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Skill building</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Youth (Ages 5-6)</td>
                    <td className="border border-gray-300 px-4 py-3">6-7 feet</td>
                    <td className="border border-gray-300 px-4 py-3">1.83-2.13 meters</td>
                    <td className="border border-gray-300 px-4 py-3">Introduction to basketball</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Dunking Difficulty Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How Rim Height Affects Dunking Difficulty</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Mathematics of Dunking</h3>
                <p className="text-gray-600 mb-4">
                  Every inch of rim height dramatically impacts dunking requirements:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>9-foot rim:</strong> Requires 12 inches less vertical jump</li>
                  <li>• <strong>8-foot rim:</strong> Requires 24 inches less vertical jump</li>
                  <li>• <strong>7-foot rim:</strong> Requires 36 inches less vertical jump</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Calculation:</h3>
                <p className="text-gray-600 mb-2">
                  Player with 7'6" standing reach needs:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>10-foot rim:</strong> 36" vertical to dunk</li>
                  <li>• <strong>9-foot rim:</strong> 24" vertical to dunk</li>
                  <li>• <strong>8-foot rim:</strong> 12" vertical to dunk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training Strategy Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Training Strategy: Progressive Rim Heights</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Phase 1: Build Confidence (Weeks 1-4)</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Start at a height where you can dunk comfortably</li>
                  <li>• Focus on proper technique and form</li>
                  <li>• Build muscle memory for approach and takeoff</li>
                  <li>• Typical starting height: 7-8 feet for beginners</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Phase 2: Progressive Increase (Weeks 5-12)</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Raise rim height by 3-6 inches every 2-3 weeks</li>
                  <li>• Continue technique refinement at each height</li>
                  <li>• Maintain consistent dunking success rate (80%+)</li>
                  <li>• Combine with vertical jump training program</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Phase 3: Regulation Height (Weeks 13+)</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Attempt dunks at full 10-foot regulation height</li>
                  <li>• Focus on consistency and different dunk types</li>
                  <li>• Work on in-game dunking scenarios</li>
                  <li>• Master both one-handed and two-handed dunks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calculator Integration */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Does Our Dunk Calculator Account for Different Rim Heights?</h2>
            <p className="text-xl mb-6">
              Absolutely! Our calculator allows you to input any rim height to see your dunking potential. 
              Whether you're training on a 8-foot rim or aiming for regulation 10 feet, get your personalized analysis.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your Dunk Potential on Any Rim Height!
              </Link>
              <Link 
                to="/measurements/standing-reach"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Learn Proper Measurements
              </Link>
            </div>
          </div>

          {/* Equipment Recommendations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Adjustable Hoop Recommendations for Training</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Portable Systems</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Spalding NBA Hybrid:</strong> Adjusts 7.5' to 10'</li>
                  <li>• <strong>Lifetime Height Adjustable:</strong> Telescoping pole system</li>
                  <li>• <strong>Silverback NXT:</strong> Quick height adjustment mechanism</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">In-Ground Systems</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Goalrilla CV Series:</strong> Professional-grade adjustability</li>
                  <li>• <strong>Mammoth Basketball Hoops:</strong> Heavy-duty construction</li>
                  <li>• <strong>Pro Dunk Hoops:</strong> Custom height configurations</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">
                <strong>Pro Tip:</strong> Look for systems with 6-inch increment adjustments and secure locking mechanisms 
                to ensure consistent rim height during training sessions.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Continue Your Measurement Journey</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/measurements/standing-reach"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <Ruler className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Standing Reach Guide</h3>
                <p className="text-gray-600">Learn to measure your most important dunking metric accurately.</p>
              </Link>
              
              <Link 
                to="/measurements/vertical-jump"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vertical Jump Testing</h3>
                <p className="text-gray-600">Master different methods to track your jumping progress.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoopHeightsGuide;
