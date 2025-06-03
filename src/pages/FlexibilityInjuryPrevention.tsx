
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Zap, AlertTriangle, Target, TrendingUp, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FlexibilityInjuryPrevention = () => {
  return (
    <>
      <Helmet>
        <title>Jump Higher & Stay Healthy: Flexibility, Mobility & Injury Prevention 2025</title>
        <meta name="description" content="Learn essential stretches, mobility drills, & injury prevention strategies for jumpers. Protect your knees, ankles, & back while increasing your vertical." />
        <meta name="keywords" content="flexibility for jumpers, mobility exercises, injury prevention basketball, stretches for vertical jump, knee injury prevention" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/flexibility-injury-prevention/" />
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
              Stay Healthy, Jump Higher: The Essential Guide to Flexibility, Mobility & Injury Prevention
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the essential stretches, mobility drills, and injury prevention strategies that keep you jumping higher 
              and training consistently for years to come.
            </p>
          </div>

          {/* Why Flexibility Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Flexibility and Mobility are Non-Negotiable for Serious Jumpers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding the Difference:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Flexibility</h4>
                    <p className="text-blue-700 text-sm">
                      Passive range of motion - how far a joint can move when external force is applied. 
                      Think of touching your toes with assistance.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Mobility</h4>
                    <p className="text-green-700 text-sm">
                      Active range of motion with control - your ability to move a joint through its range 
                      while maintaining strength and stability throughout the movement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact on Jumping Performance:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Optimal positioning:</strong> Achieve deeper squats and better takeoff angles</li>
                  <li>• <strong>Power transfer:</strong> Efficient energy flow through kinetic chain</li>
                  <li>• <strong>Injury prevention:</strong> Reduced stress on joints and connective tissues</li>
                  <li>• <strong>Recovery enhancement:</strong> Better blood flow and waste removal</li>
                  <li>• <strong>Movement quality:</strong> Smoother, more coordinated jumping mechanics</li>
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Key Insight:</strong> A stiff athlete with great strength may jump high, but a mobile athlete 
                    with great strength will jump higher and stay healthy longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Areas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Key Anatomical Areas to Focus On for Optimal Jumping</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Areas of Focus:</h3>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2">Ankles</h4>
                    <p className="text-blue-700 text-sm">
                      Dorsiflexion (toes toward shins) is crucial for deep squatting and shock absorption during landing. 
                      Limited ankle mobility forces compensation at knees and hips.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-2">Hips</h4>
                    <p className="text-green-700 text-sm">
                      Hip flexion allows for proper squatting depth, while hip extension generates the primary power 
                      for jumping. Hip mobility directly affects jump height potential.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-800 mb-2">Hamstrings & Hip Flexors</h4>
                    <p className="text-purple-700 text-sm">
                      Often tight from sitting and training, these opposing muscle groups must have balanced 
                      flexibility to allow optimal hip function during jumping movements.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                    <h4 className="font-semibold text-orange-800 mb-2">Thoracic Spine</h4>
                    <p className="text-orange-700 text-sm">
                      Upper back mobility enables proper arm swing mechanics and prevents compensatory 
                      movements that can reduce jumping efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Stretches */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Essential Stretches for Jumpers</h2>
            </div>

            {/* Dynamic Stretches */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Dynamic Stretches (Ideal for Warm-ups)</h3>
              <p className="text-gray-600 mb-6">
                Dynamic stretching involves controlled movements that take joints through their range of motion. 
                Perfect for preparing your body for explosive training.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Essential Dynamic Movements:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Leg Swings:</strong> Forward/backward and side-to-side (10-15 each leg)</li>
                    <li>• <strong>Arm Circles:</strong> Forward and backward (10-15 each direction)</li>
                    <li>• <strong>Torso Twists:</strong> Gentle rotation with arms extended (10-15 each side)</li>
                    <li>• <strong>Walking Lunges:</strong> With torso twist (10-12 steps)</li>
                    <li>• <strong>High Knees:</strong> Moderate pace (20-30 steps)</li>
                    <li>• <strong>Butt Kicks:</strong> Controlled tempo (20-30 steps)</li>
                    <li>• <strong>Inchworms:</strong> Full body movement (5-8 reps)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Dynamic Warm-up Routine (8-10 minutes):</h4>
                  <ol className="space-y-2 text-blue-700 text-sm">
                    <li>1. Light jogging or marching in place (2 minutes)</li>
                    <li>2. Arm circles and shoulder rolls (1 minute)</li>
                    <li>3. Leg swings - all directions (2 minutes)</li>
                    <li>4. Walking lunges with twist (2 minutes)</li>
                    <li>5. High knees and butt kicks (1-2 minutes)</li>
                    <li>6. Inchworms and torso twists (1 minute)</li>
                  </ol>
                  
                  <div className="mt-3 p-2 bg-blue-100 rounded">
                    <p className="text-blue-800 text-xs">
                      <strong>Tip:</strong> Start slowly and gradually increase range of motion and tempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Stretches */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Static Stretches (Best for Cool-downs)</h3>
              <p className="text-gray-600 mb-6">
                Static stretching involves holding positions for 20-30 seconds to improve flexibility. 
                Most effective when muscles are warm after training.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Static Stretches:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800 text-sm">Standing Hamstring Stretch</h5>
                      <p className="text-green-700 text-xs">Foot elevated, lean forward from hips</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-semibold text-blue-800 text-sm">Kneeling Hip Flexor Stretch</h5>
                      <p className="text-blue-700 text-xs">Back leg extended, gentle forward pressure</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-semibold text-purple-800 text-sm">Standing Quad Stretch</h5>
                      <p className="text-purple-700 text-xs">Pull heel to glutes, maintain balance</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded">
                      <h5 className="font-semibold text-yellow-800 text-sm">Calf Stretch (Wall)</h5>
                      <p className="text-yellow-700 text-xs">Hands on wall, step back with straight leg</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Stretching Guidelines:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm mb-4">
                    <li>• Hold each stretch for 20-30 seconds</li>
                    <li>• Breathe deeply and relax into the stretch</li>
                    <li>• Never stretch to the point of pain</li>
                    <li>• Perform 2-3 sets of each stretch</li>
                    <li>• Focus on tight areas identified during training</li>
                  </ul>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">When to Static Stretch:</h5>
                    <ul className="text-yellow-700 text-xs space-y-1">
                      <li>• After training when muscles are warm</li>
                      <li>• During separate flexibility sessions</li>
                      <li>• Before bed for relaxation and recovery</li>
                      <li>• NOT as a warm-up before explosive training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Injuries */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Understanding and Preventing Common Jumping-Related Injuries</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Patellar Tendinopathy ("Jumpers Knee")</h3>
                <p className="text-gray-600 mb-4">
                  The most common jumping-related injury, affecting the tendon just below the kneecap. 
                  Often develops gradually from repetitive stress.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Common Causes:</h4>
                <ul className="space-y-1 text-gray-600 text-sm mb-4">
                  <li>• Sudden increases in training volume or intensity</li>
                  <li>• Poor landing mechanics (straight-leg landings)</li>
                  <li>• Muscle imbalances (weak glutes, tight quads)</li>
                  <li>• Training on hard surfaces exclusively</li>
                </ul>
                
                <h4 className="font-semibold text-green-800 mb-2">Prevention Strategies:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Progressive loading - gradually increase training stress</li>
                  <li>• Eccentric strengthening exercises</li>
                  <li>• Proper landing technique (soft knees, hip hinge)</li>
                  <li>• Adequate recovery between intense sessions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Ankle Sprains</h3>
                <p className="text-gray-600 mb-4">
                  Sudden inversion (rolling inward) of the ankle, often occurring during landing or direction changes.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Common Causes:</h4>
                <ul className="space-y-1 text-gray-600 text-sm mb-4">
                  <li>• Awkward landings from jumps</li>
                  <li>• Poor proprioception (body awareness)</li>
                  <li>• Weak ankle stabilizers</li>
                  <li>• Inappropriate footwear</li>
                </ul>
                
                <h4 className="font-semibold text-green-800 mb-2">Prevention Strategies:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Single-leg balance exercises</li>
                  <li>• Ankle strengthening in all directions</li>
                  <li>• Proper basketball shoes with ankle support</li>
                  <li>• Landing technique practice</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4">When to Seek Professional Help:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">See a Healthcare Provider if you experience:</h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Pain that persists greater than 3-5 days</li>
                    <li>• Pain that worsens during activity</li>
                    <li>• Swelling that does not respond to rest and ice</li>
                    <li>• Inability to bear weight normally</li>
                    <li>• Any sharp, shooting pains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Types of Professionals to Consider:</h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Sports medicine physician</li>
                    <li>• Physical therapist</li>
                    <li>• Athletic trainer</li>
                    <li>• Certified strength and conditioning specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Healthy, Jump Higher!</h2>
            <p className="text-xl mb-6">
              Integrate these flexibility and injury prevention strategies into your complete training program.
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                See Complete Training Programs
              </Link>
              <Link 
                to="/vertical-jump-training/nutrition"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Learn About Nutrition for Recovery →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FlexibilityInjuryPrevention;
