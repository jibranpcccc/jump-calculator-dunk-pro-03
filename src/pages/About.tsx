
import { Helmet } from "react-helmet";
import { Target, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Dunk Calculator | Our Mission to Help Basketball Players</title>
        <meta name="description" content="Learn about Dunk Calculator's mission to help basketball players improve their vertical jump, calculate dunk potential, and achieve their dunking goals through science-backed training." />
        <meta name="keywords" content="about dunk calculator, basketball training mission, vertical jump experts, dunking potential team" />
        <link rel="canonical" href="https://dunkcalculator.com/about/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dunk Calculator: Helping You Reach New Heights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping basketball players of all levels understand and achieve their dunking potential through accurate calculations, expert guidance, and comprehensive training resources.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              To become the leading online destination where basketball players can accurately calculate their dunking potential, 
              receive detailed actionable guidance on vertical jump improvement, and access comprehensive education on dunking 
              techniques through scientifically-backed, engaging content.
            </p>
            <p className="text-lg text-gray-600">
              We believe that with the right knowledge, training, and determination, any basketball player can significantly 
              improve their jumping ability and work toward their dunking goals.
            </p>
          </div>

          {/* What We Offer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Accurate Calculator</h3>
              </div>
              <p className="text-gray-600">
                Our dunk calculator uses scientifically-based physics principles with 98% accuracy for determining 
                if your standing reach plus vertical jump can reach the rim height.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Training Guides</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive vertical jump training programs, plyometric exercises, strength training routines, 
                and nutrition guidance designed by professional trainers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Expert Resources</h3>
              </div>
              <p className="text-gray-600">
                Detailed measurement guides, dunking technique tutorials, and educational content to help you 
                understand every aspect of vertical jumping and dunking.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  We are a team of basketball enthusiasts, former players, sports scientists, and certified trainers 
                  who share a passion for helping athletes achieve their potential. Our diverse backgrounds in 
                  basketball, exercise physiology, and sports performance allow us to provide comprehensive, 
                  evidence-based guidance.
                </p>
                <p className="text-gray-600">
                  Our team includes former college basketball players, certified strength and conditioning specialists, 
                  sports scientists with expertise in biomechanics, and experienced coaches who have helped thousands 
                  of athletes improve their vertical jump and achieve their first dunks.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sports Science & Exercise Physiology</li>
                  <li>• Basketball Performance Training</li>
                  <li>• Biomechanics & Jump Analysis</li>
                  <li>• Strength & Conditioning</li>
                  <li>• Plyometric Training Specialization</li>
                  <li>• Injury Prevention & Recovery</li>
                  <li>• Sports Nutrition</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Commitment to You</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate & Reliable Information</h3>
                <p className="text-gray-600 mb-4">
                  All our content is thoroughly researched and based on current sports science. We cite our sources 
                  and ensure our calculations and training advice are backed by evidence.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessible to Everyone</h3>
                <p className="text-gray-600 mb-4">
                  We believe that quality basketball training information should be free and accessible. Our core 
                  calculator and educational content will always remain free to use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
                <p className="text-gray-600 mb-4">
                  We regularly update our content based on the latest research, user feedback, and new developments 
                  in sports training and performance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focused</h3>
                <p className="text-gray-600">
                  We're building a supportive community of basketball players working toward their dunking goals. 
                  Your success stories and feedback help us improve and inspire others.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-sm text-gray-600">
                  Precise calculations and evidence-based training advice you can trust.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-sm text-gray-600">
                  Making quality basketball training knowledge available to everyone.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress</h3>
                <p className="text-sm text-gray-600">
                  Helping every player make measurable improvements toward their goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">
                  Genuine enthusiasm for basketball and helping athletes succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6">
              Join thousands of basketball players who have used our calculator to understand their dunking potential!
            </p>
            <div className="space-x-4">
              <a 
                href="/"
                className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Try the Calculator
              </a>
              <a 
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
