
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Target, TrendingUp, Star, Users, Trophy } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TypesOfDunks = () => {
  return (
    <>
      <Helmet>
        <title>Types of Basketball Dunks: Complete Guide from Basic to Advanced 2025</title>
        <meta name="description" content="Master every type of basketball dunk from basic two-handed slams to advanced windmills. Learn techniques, difficulty levels, and progression tips." />
        <meta name="keywords" content="types of basketball dunks, dunk variations, basketball dunk techniques, windmill dunk, tomahawk dunk, 360 dunk" />
        <link rel="canonical" href="https://dunkcalculator.com/dunking-skills/types-of-dunks/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/dunking-skills/first-dunk-guide"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to First Dunk Guide
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Dunker's Arsenal: An Encyclopedia of 20+ Basketball Dunks
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From beginner-friendly slams to contest-worthy masterpieces, explore the complete spectrum 
              of basketball dunks and find your signature move.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>From playground to professional level</span>
            </div>
          </div>

          {/* Foundational Dunks */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Foundational Dunks (Master These First!)</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              These are the building blocks of all dunking. Master these fundamentals before progressing to more advanced variations.
            </p>

            <div className="space-y-8">
              {/* Basic One-Handed Dunk */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Basic One-Handed Dunk</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">BEGINNER</span>
                </div>
                <p className="text-gray-600 mb-4">
                  The foundation of all one-handed dunks. A simple, controlled slam using your dominant hand with focus on proper form and ball security.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Secure ball control with strong grip or palm</li>
                      <li>• Explosive upward drive with dominant hand</li>
                      <li>• Extend ball well above rim before releasing</li>
                      <li>• Follow through with authority</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Best For:</h4>
                    <p className="text-green-700 text-sm">
                      First-time dunkers, building confidence, game situations requiring quick and reliable finishes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Basic Two-Handed Dunk */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Basic Two-Handed Dunk</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">BEGINNER</span>
                </div>
                <p className="text-gray-600 mb-4">
                  The most secure and powerful dunking method. Both hands provide maximum ball control and allow for aggressive, dominant finishes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Both hands firmly grip the ball</li>
                      <li>• Powerful downward motion through the rim</li>
                      <li>• Maximum security in traffic or contact</li>
                      <li>• Can be performed off one or two feet</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Best For:</h4>
                    <p className="text-blue-700 text-sm">
                      Power players, those with smaller hands, game-winning moments requiring maximum reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rim Grazer */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Rim Grazer</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">BEGINNER</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Often a player's first "official" dunk. The ball just clears the rim with minimal clearance. While not spectacular, it's a crucial confidence builder.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Focus on just getting ball over rim height</li>
                      <li>• Perfect timing is more important than power</li>
                      <li>• Build confidence before adding flair</li>
                      <li>• Often performed with both hands for security</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Milestone Moment:</h4>
                    <p className="text-yellow-700 text-sm">
                      Celebrate this achievement! Every great dunker started here. Use this success to build toward more aggressive dunks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate Dunks */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Intermediate Dunks (Adding Flair & Athleticism)</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              Once you've mastered the basics, these dunks add style, power, and excitement while still being achievable for dedicated athletes.
            </p>

            <div className="space-y-8">
              {/* Tomahawk Dunk */}
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Tomahawk Dunk</h3>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">INTERMEDIATE</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A powerful one-handed dunk where the ball is brought up and then slammed down with a chopping motion, like wielding a tomahawk.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Bring ball high above and slightly behind head</li>
                      <li>• Powerful downward chopping motion</li>
                      <li>• Requires excellent grip strength and timing</li>
                      <li>• Explosive hip extension for maximum power</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Impact Factor:</h4>
                    <p className="text-orange-700 text-sm">
                      One of the most intimidating dunks. The violent downward motion demonstrates pure athletic dominance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reverse Dunk */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Reverse Dunk</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">INTERMEDIATE</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A stylish dunk where the player faces away from the basket during takeoff or turns in mid-air to dunk from the back side of the rim.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Approach from baseline or turn mid-air</li>
                      <li>• Requires exceptional body control and awareness</li>
                      <li>• Can be one or two-handed</li>
                      <li>• Master spatial awareness and rim location</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Style Points:</h4>
                    <p className="text-purple-700 text-sm">
                      Adds tremendous flair and shows advanced body control. Popular in dunk contests for its visual appeal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alley-Oop */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Alley-Oop Finish</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">INTERMEDIATE</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Catching a pass in mid-air and dunking before landing. Requires perfect timing, coordination, and trust between passer and dunker.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Perfect timing with the passer</li>
                      <li>• Secure catch at peak of jump</li>
                      <li>• Immediate transition from catch to dunk</li>
                      <li>• Communication and practice with teammate</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Game Impact:</h4>
                    <p className="text-green-700 text-sm">
                      Electrifies crowds and teammates. Demonstrates teamwork and athleticism simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Dunks */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Advanced Dunks (Elite Athleticism Required)</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              These dunks require exceptional athleticism, body control, and practice. They separate good dunkers from great ones.
            </p>

            <div className="space-y-8">
              {/* Windmill Dunk */}
              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Windmill Dunk</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">ADVANCED</span>
                </div>
                <p className="text-gray-600 mb-4">
                  The signature spectacular dunk. The ball travels in a full circular motion (like a windmill) before being slammed through the hoop.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ball starts low, travels in full circle</li>
                      <li>• Requires exceptional hangtime and flexibility</li>
                      <li>• Can be performed one or two-handed</li>
                      <li>• Perfect timing of circular motion and dunk</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Legend Status:</h4>
                    <p className="text-red-700 text-sm">
                      Made famous by Dominique Wilkins. The windmill is often considered the most beautiful dunk in basketball.
                    </p>
                  </div>
                </div>
              </div>

              {/* 360 Dunk */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The 360 Dunk</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">ADVANCED</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A complete 360-degree spin in mid-air before dunking. Requires incredible body control, spatial awareness, and hangtime.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Initiate spin during takeoff</li>
                      <li>• Maintain ball control throughout rotation</li>
                      <li>• Complete full 360° before dunking</li>
                      <li>• Requires exceptional core strength and coordination</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Mastery Level:</h4>
                    <p className="text-blue-700 text-sm">
                      Only the most elite athletes can perform this consistently. A true showcase of complete body control.
                    </p>
                  </div>
                </div>
              </div>

              {/* Between the Legs */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Between-the-Legs Dunk</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">ELITE</span>
                </div>
                <p className="text-gray-600 mb-4">
                  The ball is passed under one leg while in mid-air before being dunked. Requires extreme flexibility, coordination, and fearlessness.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Technique Points:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ball passes cleanly under leg in mid-air</li>
                      <li>• Requires exceptional flexibility and timing</li>
                      <li>• Often combined with other movements</li>
                      <li>• Peak athletic expression and creativity</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Contest Favorite:</h4>
                    <p className="text-purple-700 text-sm">
                      A dunk contest staple that never fails to amaze. Represents the perfect blend of athleticism and artistry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progression Guide */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Progress: Building Your Repertoire from Basic to Advanced</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Pathway:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Phase 1: Foundation (Months 1-6)</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Master basic one and two-handed dunks</li>
                      <li>• Build consistency and confidence</li>
                      <li>• Focus on proper approach and timing</li>
                      <li>• Strengthen vertical jump and athleticism</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Phase 2: Style (Months 6-18)</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Add tomahawks, reverses, and alley-oops</li>
                      <li>• Develop signature moves and personal style</li>
                      <li>• Practice on adjustable hoops when possible</li>
                      <li>• Study video of great dunkers for inspiration</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Phase 3: Mastery (18+ Months)</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Attempt windmills, 360s, and creative dunks</li>
                      <li>• Push boundaries with original combinations</li>
                      <li>• Consider dunk contest participation</li>
                      <li>• Mentor others in fundamental techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Development Tips:</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-1">Practice Components Separately</h4>
                    <p className="text-orange-700 text-sm">
                      Break complex dunks into parts. Practice the spin for a 360 on the ground before attempting in air.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-1">Use Lower Rims</h4>
                    <p className="text-yellow-700 text-sm">
                      Start new dunks on 8-9 foot hoops if available. Build confidence and perfect technique before full height.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-1">Video Analysis</h4>
                    <p className="text-indigo-700 text-sm">
                      Record your attempts and compare to professional examples. Identify areas for improvement.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-1">Be Patient and Persistent</h4>
                    <p className="text-pink-700 text-sm">
                      Advanced dunks take years to master. Focus on continuous improvement rather than instant results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">What's Your Dream Dunk to Achieve?</h2>
            <p className="text-xl mb-6">
              Start with the basics and work your way up to the dunks that inspire you most. Every legend started with their first slam.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Check Your Dunk Potential
              </Link>
              <Link 
                to="/dunking-skills/famous-dunkers"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Study the Legends →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TypesOfDunks;
