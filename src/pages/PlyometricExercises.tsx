
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, AlertTriangle, Target, Clock, TrendingUp, Calendar } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlyometricExercises = () => {
  return (
    <>
      <Helmet>
        <title>Top 10 Plyometric Exercises for Vertical Jump | Explode Higher in 2025</title>
        <meta name="description" content="Boost your vertical leap with these essential plyometric exercises for basketball. Detailed instructions, video demos, & sample workouts to jump higher." />
        <meta name="keywords" content="plyometric exercises, vertical jump training, explosive exercises, basketball plyometrics, jump training" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/plyometrics/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/vertical-jump-training"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Vertical Jump Training Guide
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plyometrics for Vertical Jump: Your Secret Weapon for Explosive Hops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the most effective plyometric exercises to develop explosive power, improve your rate of force development, 
              and dramatically increase your vertical jump.
            </p>
          </div>

          {/* What is Plyometric Training */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">What is Plyometric Training and How Does It Supercharge Your Jump?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Plyometric training, often called "jump training," focuses on explosive movements that train your muscles 
                  to produce maximum force in minimal time. This type of training specifically targets the stretch-shortening cycle (SSC), 
                  which is the foundation of explosive athletic movements.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Stretch-Shortening Cycle Explained:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">1. Eccentric Phase:</strong>
                    <p className="text-blue-700 text-sm">Muscle lengthens under tension (like squatting down)</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <strong className="text-yellow-800">2. Amortization Phase:</strong>
                    <p className="text-yellow-700 text-sm">Brief transition between lowering and jumping (minimal ground contact)</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">3. Concentric Phase:</strong>
                    <p className="text-green-700 text-sm">Explosive muscle contraction (the actual jump)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits for Jumpers:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Rate of Force Development (RFD):</strong> How quickly you can generate maximum force</li>
                  <li>• <strong>Reactive Strength:</strong> Ability to quickly switch from lowering to jumping</li>
                  <li>• <strong>Power Output:</strong> Maximum force × speed of movement</li>
                  <li>• <strong>Neuromuscular Coordination:</strong> Better muscle firing patterns</li>
                  <li>• <strong>Elastic Energy Utilization:</strong> Using stored energy like a spring</li>
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Think of it like this:</strong> Your muscles act like a rubber band. The faster you can stretch and release, 
                    the more explosive power you can generate!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety First Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Safety First! Are You Ready for Plyometrics?</h2>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Critical Prerequisites Before Starting:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Strength Requirements:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Can perform 50+ bodyweight squats with perfect form</li>
                    <li>• Can hold a single-leg squat for 30+ seconds</li>
                    <li>• For advanced plyos: Can squat 1.5x bodyweight</li>
                    <li>• No pain or dysfunction in knees, ankles, or hips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Movement Quality:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Proper landing mechanics (soft knees, controlled descent)</li>
                    <li>• Good ankle mobility for deep squatting</li>
                    <li>• Ability to absorb force without knee valgus (knees caving in)</li>
                    <li>• Balance and coordination for single-leg movements</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Age Considerations:</h4>
                <p className="text-yellow-700 text-sm">
                  Young athletes (under 16) should focus on lower-intensity, technique-based movements. 
                  High-impact plyometrics should be introduced gradually.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Warm-Up is Non-Negotiable:</h4>
                <p className="text-blue-700 text-sm">
                  Always perform a thorough 10-15 minute warm-up including dynamic stretching, 
                  activation exercises, and progressive movement preparation.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Listen to Your Body:</h4>
                <p className="text-green-700 text-sm">
                  Stop immediately if you experience pain, excessive fatigue, or form breakdown. 
                  Quality always trumps quantity.
                </p>
              </div>
            </div>
          </div>

          {/* Top Plyometric Exercises */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Top 12 Plyometric Exercises for Basketball Players</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              These exercises are arranged roughly from beginner-friendly to advanced. Master the basics before progressing 
              to higher-intensity movements.
            </p>

            <div className="space-y-8">
              {/* Ankle Hops */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Ankle Hops / Pogo Jumps</h3>
                <p className="text-gray-600 mb-4">
                  These foundational exercises develop ankle stiffness and reactive strength in the calves. They are perfect for 
                  beginners and serve as an excellent warm-up for more advanced athletes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Step-by-Step Instructions:</h4>
                    <ol className="space-y-2 text-gray-600 text-sm">
                      <li>1. Stand tall with feet hip-width apart</li>
                      <li>2. Keep legs relatively straight (slight knee bend only)</li>
                      <li>3. Jump using only your ankles and calves</li>
                      <li>4. Land on the balls of your feet</li>
                      <li>5. Minimize ground contact time</li>
                      <li>6. Focus on quick, repetitive bounces</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Common Mistakes to Avoid:</h4>
                    <ul className="space-y-2 text-red-600 text-sm">
                      <li>• Using too much knee bend (this becomes a different exercise)</li>
                      <li>• Landing on flat feet instead of balls of feet</li>
                      <li>• Spending too much time on the ground between hops</li>
                      <li>• Leaning forward or losing upright posture</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">Recommended Sets/Reps:</h5>
                      <p className="text-green-700 text-sm">Beginners: 3 sets of 10-15 hops</p>
                      <p className="text-green-700 text-sm">Advanced: 3-4 sets of 20-30 hops</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional exercises would continue here with similar structure */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Essential Plyometric Exercises:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">2. Tuck Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Explosive hip and knee flexion power development.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">3. Box Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Classic exercise for explosive concentric power.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">4. Depth Jumps (Advanced)</h4>
                    <p className="text-blue-700 text-sm mb-3">Maximum reactive strength development.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">5. Bounding</h4>
                    <p className="text-blue-700 text-sm mb-3">Horizontal and vertical power development.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">6. Medicine Ball Throws</h4>
                    <p className="text-blue-700 text-sm mb-3">Upper body and core contribution to jumping.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">7. Hurdle Hops</h4>
                    <p className="text-blue-700 text-sm mb-3">Consecutive jumps for reactive strength.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Workouts */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Sample Plyometric Workouts</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Beginner Plyometric Workout</h3>
                <p className="text-green-700 text-sm mb-4">Focus: Technique, lower volume, lower impact</p>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Ankle Hops: 3×10-15</li>
                  <li>• Box Jumps (12-18"): 3×3-5</li>
                  <li>• Tuck Jumps: 3×5-8</li>
                  <li>• Double Leg Bounds: 3×4-6</li>
                </ul>
                <p className="text-green-600 text-xs mt-3">Total time: 20-25 minutes</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Intermediate Plyometric Workout</h3>
                <p className="text-blue-700 text-sm mb-4">Increased intensity, volume, moderate impact</p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Ankle Hops: 3×20-30</li>
                  <li>• Box Jumps (18-24"): 3×4-6</li>
                  <li>• Tuck Jumps: 3×8-12</li>
                  <li>• Single Leg Bounds: 3×6-8 each</li>
                  <li>• Hurdle Hops: 3×5-8</li>
                </ul>
                <p className="text-blue-600 text-xs mt-3">Total time: 30-35 minutes</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Advanced Plyometric Workout</h3>
                <p className="text-purple-700 text-sm mb-4">High intensity, complex movements</p>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Ankle Hops: 3×30-45</li>
                  <li>• Depth Jumps (18-24"): 2×3-5</li>
                  <li>• Reactive Box Jumps: 3×3-5</li>
                  <li>• Single Leg Box Jumps: 3×3-5 each</li>
                  <li>• Med Ball Throws: 3×5-8</li>
                </ul>
                <p className="text-purple-600 text-xs mt-3">Total time: 25-30 minutes</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explode Higher?</h2>
            <p className="text-xl mb-6">
              Integrate these plyometric exercises into a complete training program for maximum results!
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                See Full Jump Training Programs
              </Link>
              <Link 
                to="/vertical-jump-training/strength-training"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore Strength Training for Jumpers →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlyometricExercises;
