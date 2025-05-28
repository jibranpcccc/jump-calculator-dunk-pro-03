
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Clock, TrendingUp, Calendar, Calculator } from "lucide-react";

const FlexibilityInjuryPrevention = () => {
  return (
    <>
      <Helmet>
        <title>Jump Higher & Stay Healthy: Flexibility, Mobility & Injury Prevention 2025</title>
        <meta name="description" content="Learn essential stretches, mobility drills, & injury prevention strategies for jumpers. Protect your knees, ankles, & back while increasing your vertical." />
        <meta name="keywords" content="flexibility for jumpers, mobility exercises, injury prevention basketball, stretches for vertical jump, ankle mobility" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/flexibility-injury-prevention/" />
      </Helmet>

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
              Stay Healthy, Jump Higher: The Essential Guide to Flexibility, Mobility & Injury Prevention for Aspiring Dunkers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the mobility work, stretches, and injury prevention strategies that will keep you training consistently 
              and performing at your peak throughout your vertical jump journey.
            </p>
          </div>

          {/* Why Flexibility Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Flexibility and Mobility are Non-Negotiable for Serious Jumpers & Dunkers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexibility vs. Mobility: Understanding the Difference</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Flexibility</h4>
                    <p className="text-blue-700 text-sm">
                      The passive range of motion available at a joint. Think of how far you can stretch your hamstring 
                      when someone else moves your leg for you.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Mobility</h4>
                    <p className="text-green-700 text-sm">
                      The active, controlled range of motion through which you can apply force. This includes flexibility 
                      plus strength and motor control through that range.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  <strong>For jumping:</strong> You need both! Flexibility to achieve optimal positions, 
                  and mobility to generate force from those positions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Benefits for Jumpers:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Optimal jump technique:</strong> Achieve deeper squat positions and better takeoff mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Power transfer efficiency:</strong> Better kinetic chain function from ankles to fingertips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Injury risk reduction:</strong> Up to 50% lower injury rates with proper mobility programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Training longevity:</strong> Stay healthy and consistent over months and years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Areas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Anatomical Areas to Focus On for Optimal Jumping Mechanics & Injury Prevention</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Ankles</h3>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Dorsiflexion:</strong> Essential for deep knee bend and force absorption
                </p>
                <ul className="text-blue-600 text-xs space-y-1">
                  <li>• Deeper squat positions</li>
                  <li>• Better landing mechanics</li>
                  <li>• Reduced knee stress</li>
                  <li>• Improved balance</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Hips</h3>
                <p className="text-green-700 text-sm mb-2">
                  <strong>Extension & Flexion:</strong> Power generation and optimal positioning
                </p>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• Full hip extension for power</li>
                  <li>• Deep hip flexion for loading</li>
                  <li>• Reduced lower back stress</li>
                  <li>• Better glute activation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Hamstrings & Hip Flexors</h3>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>Often tight:</strong> Restrict movement and alter biomechanics
                </p>
                <ul className="text-purple-600 text-xs space-y-1">
                  <li>• Proper hip hinge patterns</li>
                  <li>• Reduced anterior pelvic tilt</li>
                  <li>• Better squat depth</li>
                  <li>• Decreased injury risk</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Thoracic Spine</h3>
                <p className="text-orange-700 text-sm mb-2">
                  <strong>Rotation & Extension:</strong> Better arm swing and body alignment
                </p>
                <ul className="text-orange-600 text-xs space-y-1">
                  <li>• Improved arm swing mechanics</li>
                  <li>• Better overhead reach</li>
                  <li>• Reduced neck tension</li>
                  <li>• Enhanced breathing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Essential Stretches */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Stretches for Jumpers</h2>
            
            <div className="space-y-8">
              {/* Dynamic Stretches */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dynamic Stretches (Ideal for Warm-ups)</h3>
                <p className="text-gray-600 mb-4">
                  Dynamic stretching involves controlled movements that take your joints through their full range of motion. 
                  These are perfect for warming up because they increase blood flow, core temperature, and neural activation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Dynamic Warm-up Routine (8-10 minutes):</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded">
                        <strong className="text-yellow-800">Leg Swings:</strong>
                        <p className="text-yellow-700 text-sm">Forward/backward and side-to-side, 10-15 each direction</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded">
                        <strong className="text-blue-800">Arm Circles:</strong>
                        <p className="text-blue-700 text-sm">Small to large circles, forward and backward, 10 each</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <strong className="text-green-800">Torso Twists:</strong>
                        <p className="text-green-700 text-sm">Standing rotation, arms extended, 10-15 each direction</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded">
                        <strong className="text-purple-800">Walking Lunges with Twist:</strong>
                        <p className="text-purple-700 text-sm">Lunge forward, rotate toward front leg, 8-10 each side</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Dynamic Movements:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded">
                        <strong className="text-red-800">High Knees:</strong>
                        <p className="text-red-700 text-sm">Bring knees to chest height, 20-30 steps</p>
                      </div>
                      <div className="p-3 bg-indigo-50 rounded">
                        <strong className="text-indigo-800">Butt Kicks:</strong>
                        <p className="text-indigo-700 text-sm">Heel to glute, emphasize quick turnover, 20-30 steps</p>
                      </div>
                      <div className="p-3 bg-pink-50 rounded">
                        <strong className="text-pink-800">Inchworms:</strong>
                        <p className="text-pink-700 text-sm">Walk hands out to plank, walk feet to hands, 5-8 reps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Stretches */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Static Stretches (Best for Cool-downs)</h3>
                <p className="text-gray-600 mb-4">
                  Static stretching involves holding a stretch position for 20-30 seconds. These are most effective when your muscles 
                  are already warm, making them ideal for post-workout or dedicated flexibility sessions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Standing Hamstring Stretch</h4>
                      <p className="text-green-700 text-sm mb-2">Place heel on elevated surface, keep leg straight, lean forward</p>
                      <p className="text-green-600 text-xs">Hold: 20-30 seconds each leg</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Standing Quad Stretch</h4>
                      <p className="text-blue-700 text-sm mb-2">Pull heel toward glute, keep knees close together</p>
                      <p className="text-blue-600 text-xs">Hold: 20-30 seconds each leg</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Kneeling Hip Flexor Stretch</h4>
                      <p className="text-purple-700 text-sm mb-2">Lunge position, push hips forward, feel stretch in front of back leg</p>
                      <p className="text-purple-600 text-xs">Hold: 30 seconds each side</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Calf Stretch (Wall)</h4>
                      <p className="text-orange-700 text-sm mb-2">Hands on wall, step back leg straight, push heel down</p>
                      <p className="text-orange-600 text-xs">Hold: 20-30 seconds each leg</p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Figure-4 Glute Stretch</h4>
                      <p className="text-yellow-700 text-sm mb-2">Lying on back, ankle on opposite knee, pull thigh toward chest</p>
                      <p className="text-yellow-600 text-xs">Hold: 30 seconds each side</p>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Chest Stretch (Doorway)</h4>
                      <p className="text-red-700 text-sm mb-2">Arm on doorframe, step forward, feel stretch across chest</p>
                      <p className="text-red-600 text-xs">Hold: 20-30 seconds each arm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobility Drills */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Crucial Mobility Drills for Unlocking Your Jumping Potential</h2>
            <p className="text-gray-600 mb-6">
              Mobility drills focus on improving active range of motion and control. These exercises teach your body to 
              move efficiently through the ranges of motion required for optimal jumping performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Ankle Mobility Drills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Wall Ankle Dorsiflexion</h4>
                    <p className="text-blue-700 text-xs">Face wall, place toe 4-5 inches away, drive knee to wall</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Ankle Circles</h4>
                    <p className="text-blue-700 text-xs">Seated or standing, rotate ankle through full range, both directions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Calf Raises</h4>
                    <p className="text-blue-700 text-xs">Rise onto toes, hold briefly, lower slowly for control</p>
                  </div>
                </div>
                <p className="text-blue-600 text-xs mt-3">Perform: 10-15 reps, 2-3 sets</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Hip Mobility Drills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Hip Circles</h4>
                    <p className="text-green-700 text-xs">Standing, hands on hips, make large circles with pelvis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Fire Hydrants</h4>
                    <p className="text-green-700 text-xs">On hands and knees, lift knee out to side, control the movement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Spiderman Lunge</h4>
                    <p className="text-green-700 text-xs">Lunge position, place hand inside front foot, reach opposite arm up</p>
                  </div>
                </div>
                <p className="text-green-600 text-xs mt-3">Perform: 8-12 reps each direction</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Thoracic Spine Mobility</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Cat-Cow</h4>
                    <p className="text-purple-700 text-xs">Hands and knees, alternate between arching and rounding spine</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Thread the Needle</h4>
                    <p className="text-purple-700 text-xs">Side plank position, reach top arm under body and through</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Foam Roller T-Spine</h4>
                    <p className="text-purple-700 text-xs">Upper back on foam roller, hands behind head, extend backwards</p>
                  </div>
                </div>
                <p className="text-purple-600 text-xs mt-3">Perform: 8-10 reps, slow and controlled</p>
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
              <div className="space-y-6">
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Patellar Tendinopathy ("Jumper's Knee")</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Causes:</h4>
                      <ul className="text-red-700 text-xs space-y-1">
                        <li>• Overuse and repetitive jumping</li>
                        <li>• Poor landing biomechanics</li>
                        <li>• Muscle imbalances (weak glutes/hamstrings)</li>
                        <li>• Rapid increase in training volume</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 text-sm mb-1">Prevention Strategies:</h4>
                      <ul className="text-red-700 text-xs space-y-1">
                        <li>• Gradual load progression</li>
                        <li>• Strengthen quads, glutes, hamstrings</li>
                        <li>• Practice proper landing technique</li>
                        <li>• Adequate recovery between sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Ankle Sprains</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-800 text-sm mb-1">Causes:</h4>
                      <ul className="text-blue-700 text-xs space-y-1">
                        <li>• Awkward landings</li>
                        <li>• Landing on another player's foot</li>
                        <li>• Poor ankle stability</li>
                        <li>• Fatigue affecting balance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 text-sm mb-1">Prevention Strategies:</h4>
                      <ul className="text-blue-700 text-xs space-y-1">
                        <li>• Ankle strengthening exercises</li>
                        <li>• Balance and proprioceptive training</li>
                        <li>• Appropriate footwear</li>
                        <li>• Consider ankle taping/bracing if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Shin Splints (Medial Tibial Stress Syndrome)</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-yellow-800 text-sm mb-1">Causes:</h4>
                      <ul className="text-yellow-700 text-xs space-y-1">
                        <li>• Overuse and rapid training increases</li>
                        <li>• Hard training surfaces</li>
                        <li>• Improper footwear</li>
                        <li>• Poor running/jumping mechanics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 text-sm mb-1">Prevention Strategies:</h4>
                      <ul className="text-yellow-700 text-xs space-y-1">
                        <li>• Gradual increase in training volume</li>
                        <li>• Proper athletic footwear</li>
                        <li>• Calf strengthening and stretching</li>
                        <li>• Train on appropriate surfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Lower Back Pain</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Causes:</h4>
                      <ul className="text-green-700 text-xs space-y-1">
                        <li>• Poor core stability</li>
                        <li>• Improper lifting/landing mechanics</li>
                        <li>• Muscle imbalances</li>
                        <li>• Tight hip flexors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm mb-1">Prevention Strategies:</h4>
                      <ul className="text-green-700 text-xs space-y-1">
                        <li>• Core strengthening exercises</li>
                        <li>• Proper technique in all lifts</li>
                        <li>• Hip flexor stretching</li>
                        <li>• Glute activation work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warm-up & Cool-down */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Proper Warm-Ups Before Training</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  A thorough warm-up prepares your body for the demands of explosive training, reducing injury risk 
                  and improving performance quality.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">5-10 Minute Warm-up Routine:</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded flex justify-between items-center">
                    <span className="text-green-800 font-medium text-sm">Light Cardio</span>
                    <span className="text-green-600 text-xs">2-3 minutes</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded flex justify-between items-center">
                    <span className="text-blue-800 font-medium text-sm">Dynamic Stretching</span>
                    <span className="text-blue-600 text-xs">3-4 minutes</span>
                  </div>
                  <div className="p-3 bg-purple-50 rounded flex justify-between items-center">
                    <span className="text-purple-800 font-medium text-sm">Activation Exercises</span>
                    <span className="text-purple-600 text-xs">2-3 minutes</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Cool-Down for Recovery</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Proper cool-down helps your body transition from high-intensity work back to resting state, 
                  promoting recovery and reducing muscle soreness.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">10-15 Minute Cool-down Routine:</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-yellow-50 rounded flex justify-between items-center">
                    <span className="text-yellow-800 font-medium text-sm">Light Walking</span>
                    <span className="text-yellow-600 text-xs">3-5 minutes</span>
                  </div>
                  <div className="p-3 bg-orange-50 rounded flex justify-between items-center">
                    <span className="text-orange-800 font-medium text-sm">Static Stretching</span>
                    <span className="text-orange-600 text-xs">5-8 minutes</span>
                  </div>
                  <div className="p-3 bg-red-50 rounded flex justify-between items-center">
                    <span className="text-red-800 font-medium text-sm">Foam Rolling</span>
                    <span className="text-red-600 text-xs">2-5 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Listen to Your Body: Recognizing Early Signs of Overtraining or Impending Injury</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-red-50 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-4">🚨 Stop Training Signs</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Sharp, shooting pain</li>
                  <li>• Pain that worsens with activity</li>
                  <li>• Swelling or significant stiffness</li>
                  <li>• Pain that doesn't improve with rest</li>
                  <li>• Loss of function or range of motion</li>
                </ul>
                <p className="text-red-600 text-xs mt-3 font-medium">
                  Seek medical attention if these symptoms persist
                </p>
              </div>
              
              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Modify Training Signs</h3>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• Persistent muscle soreness (>72 hours)</li>
                  <li>• Decreased performance output</li>
                  <li>• Elevated resting heart rate</li>
                  <li>• Disrupted sleep patterns</li>
                  <li>• Reduced motivation or mood</li>
                </ul>
                <p className="text-yellow-600 text-xs mt-3 font-medium">
                  Consider deload week or reduced intensity
                </p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Normal Training Response</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Mild muscle soreness (24-48 hours)</li>
                  <li>• Temporary fatigue after training</li>
                  <li>• Gradual performance improvements</li>
                  <li>• Good sleep quality</li>
                  <li>• Maintained enthusiasm</li>
                </ul>
                <p className="text-green-600 text-xs mt-3 font-medium">
                  Continue with planned progression
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">A Healthy Body Jumps Higher!</h2>
            <p className="text-xl mb-6">
              Integrate these flexibility and injury prevention strategies into your complete jump training program!
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Integrate Into Jump Training Programs
              </Link>
              <Link 
                to="/"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Check Your Dunk Potential →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexibilityInjuryPrevention;
