
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Dunk-Calculator.info | Our Mission to Help You Dunk</title>
        <meta name="description" content="Learn more about Dunk-Calculator.info, our mission to help basketball players improve their vertical jump, accurately calculate dunk potential, and learn from the best resources." />
        <meta name="keywords" content="about dunk calculator, basketball training mission, vertical jump resources, dunk calculator team" />
        <link rel="canonical" href="https://dunkcalculator.com/about/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dunk-Calculator.info: Helping You Reach New Heights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about empowering basketball players and athletes of all levels to achieve their dunking dreams 
              through science-backed training, accurate assessment tools, and comprehensive educational resources.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our mission is simple yet powerful: to provide the most accurate, comprehensive, and accessible resources 
                  for athletes looking to improve their vertical jump and achieve their dunking goals.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  We believe that with the right tools, knowledge, and dedication, anyone can dramatically improve their 
                  jumping ability and unlock their athletic potential. Whether you're a beginner dreaming of your first dunk 
                  or an advanced athlete looking to add inches to your vertical, we're here to guide your journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Accuracy:</strong>
                      <span className="text-gray-600"> Evidence-based information and precise calculation tools</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Accessibility:</strong>
                      <span className="text-gray-600"> Free resources available to athletes worldwide</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Empowerment:</strong>
                      <span className="text-gray-600"> Giving athletes the knowledge to reach their potential</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Excellence:</strong>
                      <span className="text-gray-600"> Continuously improving our resources and tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                We are a passionate team of basketball enthusiasts, former players, sports science students, and data analysts 
                dedicated to providing the most accurate and helpful resources for athletes looking to improve their vertical leap 
                and achieve their dunking dreams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Basketball Experts</h3>
                <p className="text-gray-600 text-sm">
                  Former players and coaches who understand the practical applications of vertical jump training 
                  and dunking techniques from real-world experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Scientists</h3>
                <p className="text-gray-600 text-sm">
                  Biomechanics and exercise physiology specialists who ensure our training recommendations 
                  are grounded in scientific research and proven methodologies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passionate Athletes</h3>
                <p className="text-gray-600 text-sm">
                  Current and former athletes who have personally experienced the journey from dreaming of dunking 
                  to actually achieving it through dedicated training and proper guidance.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer on Dunk-Calculator.info</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Key Features:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Advanced Dunk Calculator Tool</h4>
                    <p className="text-orange-700 text-sm">
                      Our scientifically-designed calculator accurately predicts your dunking potential based on your physical measurements, 
                      helping you set realistic goals and track progress.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Comprehensive Training Guides</h4>
                    <p className="text-blue-700 text-sm">
                      Science-backed vertical jump training programs, plyometric exercises, strength training routines, 
                      and nutrition guidance designed by experts for athletes of all levels.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Detailed Educational Content</h4>
                    <p className="text-green-700 text-sm">
                      In-depth articles on dunking techniques, measurement methods, famous dunkers, and basketball culture 
                      to inspire and educate aspiring athletes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Resources:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">100% Free Access</h4>
                    <p className="text-purple-700 text-sm">
                      All our tools and resources are completely free. We believe that financial barriers should never 
                      prevent athletes from accessing quality training information.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Evidence-Based Approach</h4>
                    <p className="text-yellow-700 text-sm">
                      Every training recommendation and technique we share is backed by sports science research 
                      and real-world testing by experienced athletes and coaches.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">For All Levels</h4>
                    <p className="text-pink-700 text-sm">
                      Whether you're a complete beginner or an advanced athlete, our resources are designed to meet you 
                      where you are and help you progress to the next level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Promise:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Accurate Information:</strong> All content is fact-checked and reviewed by experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Regular Updates:</strong> We continuously improve our tools and add new content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>User-Focused:</strong> Your success and safety are our top priorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Reliable Resources:</strong> Content you can trust for your athletic development</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Easy to Use</h4>
                    <p className="text-green-700 text-sm">
                      Our tools are designed to be intuitive and accessible, regardless of your technical background 
                      or experience level.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Mobile Friendly</h4>
                    <p className="text-blue-700 text-sm">
                      Access our calculator and resources from any device, anywhere - perfect for use at the gym 
                      or on the court.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Privacy Focused</h4>
                    <p className="text-purple-700 text-sm">
                      We respect your privacy and don't require personal information to use our tools. 
                      Your data stays secure and private.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our Journey */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join Our Journey</h2>
            
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We're just getting started on this mission to help athletes reach new heights. As we continue to grow and improve, 
                we invite you to be part of our community of dedicated athletes working toward their dunking goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Our Tools</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Start with our dunk calculator to assess your current potential and set goals.
                </p>
                <Link 
                  to="/"
                  className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
                >
                  Try Calculator
                </Link>
              </div>
              
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn & Train</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Dive into our comprehensive training guides and educational resources.
                </p>
                <Link 
                  to="/vertical-jump-training"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Start Training
                </Link>
              </div>
              
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Inspired</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read about famous dunkers and discover what's possible with dedication.
                </p>
                <Link 
                  to="/dunking-skills/famous-dunkers"
                  className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  Meet Legends
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6">
              Join thousands of athletes who are already using our tools and resources to improve their vertical jump and achieve their dunking goals.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Calculate Your Potential
              </Link>
              <Link 
                to="/contact"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
