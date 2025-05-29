
import { CheckCircle, Dumbbell, Ruler, Calculator, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ResponsiveSections = () => {
  return (
    <>
      {/* Mobile-optimized How It Works */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          How Our Calculator Works
        </h2>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-lg md:text-2xl font-bold text-orange-600">1</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Enter Measurements</h3>
            <p className="text-sm md:text-base text-gray-600 px-2">Input your height, standing reach, and current vertical jump. Don't know your standing reach? We'll estimate it accurately.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-lg md:text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Get Analysis</h3>
            <p className="text-sm md:text-base text-gray-600 px-2">Our algorithm calculates if you can dunk using physics principles validated by thousands of measurements.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-lg md:text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Training Plan</h3>
            <p className="text-sm md:text-base text-gray-600 px-2">Get personalized recommendations and access proven training programs designed by professional coaches.</p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized Why Choose Us */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          Why Choose Our Calculator?
        </h2>
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">98% Accuracy Rate</h3>
              <p className="text-xs md:text-sm text-gray-600">Based on biomechanical research and validated against real-world data</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Personal Recommendations</h3>
              <p className="text-xs md:text-sm text-gray-600">Custom training plans based on your specific measurements and goals</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Expert-Designed Programs</h3>
              <p className="text-xs md:text-sm text-gray-600">Training methods developed by professional basketball coaches</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Progress Tracking</h3>
              <p className="text-xs md:text-sm text-gray-600">Monitor your improvement with detailed analytics and milestones</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">No Hidden Costs</h3>
              <p className="text-xs md:text-sm text-gray-600">Completely free to use with no registration or payment required</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Mobile Optimized</h3>
              <p className="text-xs md:text-sm text-gray-600">Works perfectly on all devices - calculate anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-optimized Resources */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          Training Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Link to="/vertical-jump-training" className="group hover:shadow-lg transition-shadow p-4 md:p-6 border border-gray-200 rounded-lg">
            <Dumbbell className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Training Programs</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Proven workout plans for all skill levels</p>
            <span className="text-orange-600 font-semibold text-sm md:text-base">Start Training →</span>
          </Link>
          
          <Link to="/measurements" className="group hover:shadow-lg transition-shadow p-4 md:p-6 border border-gray-200 rounded-lg">
            <Ruler className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Measurement Guides</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Learn to measure accurately for best results</p>
            <span className="text-blue-600 font-semibold text-sm md:text-base">Learn How →</span>
          </Link>
          
          <Link to="/calculators" className="group hover:shadow-lg transition-shadow p-4 md:p-6 border border-gray-200 rounded-lg">
            <Calculator className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">More Calculators</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">BMI, hangtime, and reach calculators</p>
            <span className="text-green-600 font-semibold text-sm md:text-base">Explore Tools →</span>
          </Link>
          
          <Link to="/blog" className="group hover:shadow-lg transition-shadow p-4 md:p-6 border border-gray-200 rounded-lg">
            <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Expert Tips</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Latest techniques from pro trainers</p>
            <span className="text-purple-600 font-semibold text-sm md:text-base">Read Articles →</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSections;
