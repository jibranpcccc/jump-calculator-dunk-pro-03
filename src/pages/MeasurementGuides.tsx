import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Ruler, Target, Calculator, Users, TrendingUp, BookOpen } from "lucide-react";

const MeasurementGuides = () => {
  return (
    <>
      <Helmet>
        <title>Basketball Measurement Guides | Standing Reach, Vertical Jump & More</title>
        <meta name="description" content="Master basketball measurements for dunking success. Learn to accurately measure standing reach, vertical jump, wingspan, hand size and rim heights with our expert step-by-step guides." />
        <meta name="keywords" content="basketball measurements, standing reach measurement, vertical jump test, wingspan measurement, hand size basketball, dunk calculator measurements, rim height standards" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Complete Basketball Measurement Guides for Dunking Success" />
        <meta property="og:description" content="Master every basketball measurement that matters for dunking. Expert guides for standing reach, vertical jump, wingspan, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com/measurements/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Basketball Measurement Guides",
            "description": "Comprehensive guides for measuring basketball performance metrics including standing reach, vertical jump, wingspan, and rim heights.",
            "url": "https://dunkcalculator.com/measurements/",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "HowTo",
                  "position": 1,
                  "name": "How to Measure Standing Reach",
                  "url": "https://dunkcalculator.com/measurements/standing-reach/"
                },
                {
                  "@type": "HowTo", 
                  "position": 2,
                  "name": "How to Measure Vertical Jump",
                  "url": "https://dunkcalculator.com/measurements/vertical-jump/"
                },
                {
                  "@type": "Article",
                  "position": 3,
                  "name": "Basketball Hoop Heights Guide",
                  "url": "https://dunkcalculator.com/measurements/hoop-heights/"
                },
                {
                  "@type": "Article",
                  "position": 4,
                  "name": "Other Key Basketball Measurements",
                  "url": "https://dunkcalculator.com/measurements/other-measurements/"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://dunkcalculator.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Measurements",
                  "item": "https://dunkcalculator.com/measurements/"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>›</span>
              <span className="text-gray-900">Measurements</span>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Master Your Basketball Measurements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accurate measurements are the foundation of understanding your dunking potential. 
              Follow our expert guides to get precise results every time and track your progress like a pro.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Try the Dunk Calculator
            </Link>
          </div>

          {/* Main Guide Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Ruler className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Standing Reach Measurement</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Learn the precise method to measure your standing reach - the most crucial measurement 
                for calculating your dunk potential. Often more important than height alone for determining dunking ability!
              </p>
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Step-by-step measurement technique</li>
                  <li>• Common mistakes to avoid</li>
                  <li>• Why reach matters more than height</li>
                  <li>• Professional measuring standards</li>
                </ul>
              </div>
              <Link 
                to="/measurements/standing-reach"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Complete Guide →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Vertical Jump Testing</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Discover multiple methods to accurately measure your vertical jump, from simple wall tests 
                to advanced equipment. Track your progress and improvements like a professional athlete.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Testing Methods Covered:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wall test (no equipment needed)</li>
                  <li>• Vertec and jump measurement devices</li>
                  <li>• Smartphone app analysis</li>
                  <li>• Professional testing protocols</li>
                </ul>
              </div>
              <Link 
                to="/measurements/vertical-jump"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Learn Methods →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Basketball Hoop Heights</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Understand official basketball rim heights across all levels and how adjusting height 
                can help your dunk training progression from beginner to regulation.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Heights Covered:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NBA/FIBA regulation (10 feet)</li>
                  <li>• Youth league standards</li>
                  <li>• Training progression strategy</li>
                  <li>• Adjustable hoop recommendations</li>
                </ul>
              </div>
              <Link 
                to="/measurements/hoop-heights"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                View Standards →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Other Key Measurements</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Explore how wingspan, hand size, body weight, and age impact your dunking ability 
                beyond just vertical jump height. The complete measurement toolkit.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Additional Metrics:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wingspan and ape index</li>
                  <li>• Hand size for palming</li>
                  <li>• Body composition effects</li>
                  <li>• Age-related considerations</li>
                </ul>
              </div>
              <Link 
                to="/measurements/other-measurements"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Explore More →
              </Link>
            </div>
          </div>

          {/* Why Accurate Measurements Matter */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Accurate Measurements Are Critical for Dunking Success</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Goal Setting</h3>
                <p className="text-gray-600">
                  Know exactly how many inches you need to add to your vertical jump to reach your dunking goals. 
                  Set realistic, achievable milestones based on accurate baseline measurements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Real Progress</h3>
                <p className="text-gray-600">
                  Monitor improvements accurately and adjust your training program based on measurable results. 
                  Celebrate every inch gained toward your dunking dreams.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimize Training</h3>
                <p className="text-gray-600">
                  Target specific weaknesses and maximize your training efficiency with baseline measurements. 
                  Train smarter, not just harder, with data-driven approach.
                </p>
              </div>
            </div>
          </div>

          {/* Measurement Best Practices */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Measurement Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Equipment Needed</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Required</span>
                    <span><strong>Measuring tape:</strong> Metal or cloth, at least 10 feet long</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Required</span>
                    <span><strong>Wall space:</strong> Clear wall at least 12 feet high</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Helpful</span>
                    <span><strong>Assistant:</strong> Someone to help mark and measure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Helpful</span>
                    <span><strong>Chalk or tape:</strong> For marking jump height</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurement Timing Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Consistent timing:</strong> Measure at the same time of day</li>
                  <li>• <strong>Proper warm-up:</strong> 10-15 minutes of light activity before testing</li>
                  <li>• <strong>Well-rested:</strong> Avoid measuring when fatigued</li>
                  <li>• <strong>Multiple attempts:</strong> Take 3-5 measurements and use the best</li>
                  <li>• <strong>Recovery time:</strong> Rest 2-3 minutes between jump attempts</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-600">
                <strong>Pro Tip:</strong> Record all your measurements in a training journal or app. 
                This helps track progress over time and identify patterns in your performance improvements.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Measure Your Potential?</h2>
            <p className="text-xl mb-6">
              Start with our comprehensive measurement guides, then use our calculator to see your exact dunking potential!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/measurements/standing-reach"
                className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start with Standing Reach
              </Link>
              <Link 
                to="/measurements/vertical-jump"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Learn Vertical Jump Testing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeasurementGuides;
