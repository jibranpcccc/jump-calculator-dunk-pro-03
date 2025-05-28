
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Ruler, Target, Calculator, Users } from "lucide-react";

const MeasurementGuides = () => {
  return (
    <>
      <Helmet>
        <title>Basketball Measurement Guides | Standing Reach, Vertical Jump & More</title>
        <meta name="description" content="Master basketball measurements for dunking success. Learn to accurately measure standing reach, vertical jump, wingspan, and hand size with our step-by-step guides." />
        <meta name="keywords" content="basketball measurements, standing reach measurement, vertical jump test, wingspan measurement, hand size basketball, dunk calculator measurements" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Master Your Basketball Measurements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accurate measurements are the foundation of understanding your dunking potential. 
              Follow our expert guides to get precise results every time.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Try the Dunk Calculator
            </Link>
          </div>

          {/* Guide Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Ruler className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Standing Reach Measurement</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Learn the precise method to measure your standing reach - the most crucial measurement 
                for calculating your dunk potential. More important than height alone!
              </p>
              <Link 
                to="/measurements/standing-reach"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Complete Guide →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Vertical Jump Testing</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Discover multiple methods to accurately measure your vertical jump, from simple wall tests 
                to advanced equipment. Track your progress like a pro.
              </p>
              <Link 
                to="/measurements/vertical-jump"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn Methods →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Basketball Hoop Heights</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Understand official basketball rim heights across all levels and how adjusting height 
                can help your dunk training progression.
              </p>
              <Link 
                to="/measurements/hoop-heights"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                View Standards →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Other Key Measurements</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Explore how wingspan, hand size, body weight, and age impact your dunking ability 
                beyond just vertical jump height.
              </p>
              <Link 
                to="/measurements/other-measurements"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Explore More →
              </Link>
            </div>
          </div>

          {/* Why Accurate Measurements Matter */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Accurate Measurements Are Critical</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Goal Setting</h3>
                <p className="text-gray-600">
                  Know exactly how many inches you need to add to your vertical jump to reach your dunking goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Real Progress</h3>
                <p className="text-gray-600">
                  Monitor improvements accurately and adjust your training program based on measurable results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimize Training</h3>
                <p className="text-gray-600">
                  Target specific weaknesses and maximize your training efficiency with baseline measurements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Measure Your Potential?</h2>
            <p className="text-xl mb-6">
              Start with our comprehensive measurement guides, then use our calculator to see your dunking potential!
            </p>
            <div className="space-x-4">
              <Link 
                to="/measurements/standing-reach"
                className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Measuring
              </Link>
              <Link 
                to="/vertical-jump-training"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeasurementGuides;
