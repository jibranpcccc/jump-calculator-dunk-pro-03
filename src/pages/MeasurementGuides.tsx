
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Target, Ruler, Building, Hand } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import MeasurementHero from "../components/measurements/MeasurementHero";
import WhyMeasurementsMatter from "../components/measurements/WhyMeasurementsMatter";
import MeasurementGuideCard from "../components/measurements/MeasurementGuideCard";

const MeasurementGuides = () => {
  const measurementGuides = [
    {
      title: "How to Measure Standing Reach",
      description: "Learn the definitive method for measuring your standing reach - the foundation of accurate dunk calculations.",
      url: "/measurements/standing-reach",
      icon: Ruler,
      difficulty: "Easy",
      time: "5 minutes",
      featured: true
    },
    {
      title: "How to Measure Vertical Jump",
      description: "Master 4 accurate techniques including the wall test and Vertec method for consistent vertical jump measurement.",
      url: "/measurements/vertical-jump", 
      icon: Target,
      difficulty: "Easy",
      time: "10 minutes",
      featured: true
    },
    {
      title: "Basketball Hoop Heights Guide",
      description: "Official hoop heights for NBA, FIBA, college and youth basketball plus training tips for adjustable rims.",
      url: "/measurements/hoop-heights",
      icon: Building,
      difficulty: "Reference",
      time: "3 minutes",
      featured: false
    },
    {
      title: "Other Key Measurements",
      description: "Understand wingspan, hand size, weight and age measurements that enhance your dunk analysis.",
      url: "/measurements/other-measurements",
      icon: Hand,
      difficulty: "Easy", 
      time: "7 minutes",
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Basketball Measurement Guides | Accurate Testing for Dunk Calculator</title>
        <meta name="description" content="Learn how to accurately measure standing reach, vertical jump, hoop heights and more for precise dunk calculator results. Step-by-step guides with videos." />
        <meta name="keywords" content="basketball measurements, standing reach measurement, vertical jump test, basketball hoop heights, wingspan measurement" />
        <link rel="canonical" href="https://dunkcalculator.com/measurements/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          <MeasurementHero />
          <WhyMeasurementsMatter />

          {/* Measurement Guides Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {measurementGuides.map((guide, index) => (
              <MeasurementGuideCard key={index} guide={guide} />
            ))}
          </div>

          {/* Measurement Order Recommendation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Measurement Order</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Standing Reach</h3>
                  <p className="text-gray-600">Your natural advantage - this doesn't change much and forms the base of all calculations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Current Vertical Jump</h3>
                  <p className="text-gray-600">Your current explosive power - this is what you'll be working to improve.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Target Rim Height</h3>
                  <p className="text-gray-600">Know what you're aiming for - standard 10ft or adjustable training heights.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Optional: Wingspan & Hand Size</h3>
                  <p className="text-gray-600">For more detailed analysis and training recommendations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Accurate Measurements?</h2>
            <p className="text-xl mb-8">
              Start with the essentials and work your way through our complete measurement system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/measurements/standing-reach"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Ruler className="w-5 h-5 mr-2" />
                Start: Standing Reach Guide
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Use Dunk Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MeasurementGuides;
