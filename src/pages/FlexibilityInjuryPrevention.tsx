import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Zap, AlertTriangle, Clock, Target } from "lucide-react";

const FlexibilityInjuryPrevention = () => {
  return (
    <>
      <Helmet>
        <title>Jump Higher & Stay Healthy: Flexibility, Mobility & Injury Prevention 2025</title>
        <meta name="description" content="Learn essential stretches, mobility drills, & injury prevention strategies for jumpers. Protect your knees, ankles, & back while increasing your vertical." />
        <meta name="keywords" content="flexibility for jumping, mobility exercises, injury prevention basketball, stretches for vertical jump, jumping injuries" />
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
              Learn how proper flexibility, mobility, and injury prevention strategies can enhance your jumping performance 
              while keeping you healthy for years of training.
            </p>
          </div>

          {/* Why Flexibility and Mobility are Non-Negotiable */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Flexibility and Mobility are Non-Negotiable for Serious Jumpers & Dunkers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding the Difference:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Flexibility:</h4>
                    <p className="text-blue-700 text-sm">
                      The passive range of motion available at a joint. This is how far you can move or be moved 
                      without actively using your muscles.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Mobility:</h4>
                    <p className="text-green-700 text-sm">
                      The active, controlled range of motion through which you can apply force. This combines 
                      flexibility with strength and motor control.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>For jumpers:</strong> You need both! Flexibility allows you to get into optimal positions, 
                    while mobility lets you generate power from those positions.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact on Jumping Performance:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>Optimal Joint Positions:</strong> Better ankle, hip, and spine mobility allows deeper squat positions 
                    for greater force production
                  </li>
                  <li>
                    <strong>Power Transfer Efficiency:</strong> Improved mobility ensures energy flows smoothly through 
                    the kinetic chain from legs to arms
                  </li>
                  <li>
                    <strong>Technique Enhancement:</strong> Greater range of motion enables better jumping mechanics 
                    and more explosive takeoffs
                  </li>
                  <li>
                    <strong>Injury Risk Reduction:</strong> Adequate flexibility and mobility significantly reduce the risk 
                    of strains, sprains, and overuse injuries
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Anatomical Areas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Key Anatomical Areas to Focus On for Optimal Jumping Mechanics & Injury Prevention</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Ankles</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Key Movement:</strong> Dorsiflexion (bringing toes toward shin)
                  </p>
                  <p className="text-blue-600 text-xs">
                    Essential for deep knee bending, proper landing mechanics, and force absorption. 
                    Limited ankle mobility forces compensation patterns that reduce jumping efficiency.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Hips</h3>
                  <p className="text-green-700 text-sm mb-2">
                    <strong>Key Movements:</strong> Flexion (knee to chest) and Extension (leg behind body)
                  </p>
                  <p className="text-green-600 text-xs">
                    Hip mobility is crucial for achieving optimal squat depth and generating maximum power 
                    through the powerful glute muscles during takeoff.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Hamstrings & Hip Flexors</h3>
                  <p className="text-purple-700 text-sm mb-2">
                    <strong>Common Issue:</strong> Tightness from sitting and sports activities
                  </p>
                  <p className="text-purple-600 text-xs">
                    Tight hamstrings limit hip flexion and forward bending. Tight hip flexors restrict 
                    hip extension and can cause lower back compensation patterns.
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Thoracic Spine</h3>
                  <p className="text-orange-700 text-sm mb-2">
                    <strong>Key Movements:</strong> Extension and Rotation
                  </p>
                  <p className="text-orange-600 text-xs">
                    Proper thoracic mobility enables effective arm swing during jumping and prevents 
                    excessive stress on the lower back during explosive movements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Stretches */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Stretches for Jumpers</h2>
            
            <div className="space-y-8">
              {/* Dynamic Stretches */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Dynamic Stretches (Ideal for Warm-ups – Focus on Movement)</h3>
                <p className="text-gray-600 mb-6">
                  Dynamic stretches involve controlled movements that gradually increase range of motion and prepare 
                  your muscles for explosive activity. They&apos;re perfect for warming up before training or games.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Lower Body Dynamic Stretches:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded">
                        <strong className="text-blue-800">Leg Swings:</strong>
                        <p className="text-blue-700 text-sm">
                          Forward/backward and side-to-side. 10-15 swings each direction, each leg. 
                          Hold onto a wall for balance.
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <strong className="text-green-800">Walking Lunges with Twist:</strong>
                        <p className="text-green-700 text-sm">
                          Step into lunge, rotate torso toward front leg. 8-10 lunges each side. 
                          Combines hip mobility with spinal rotation.
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded">
                        <strong className="text-purple-800">High Knees & Butt Kicks:</strong>
                        <p className="text-purple-700 text-sm">
                          20-30 steps each. Focus on controlled movement and full range of motion 
                          at hip and knee joints.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Full Body Dynamic Movements:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded">
                        <strong className="text-yellow-800">Arm Circles:</strong>
                        <p className="text-yellow-700 text-sm">
                          Forward and backward, gradually increasing size. 10-15 circles each direction. 
                          Prepares shoulders for arm swing during jumping.
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded">
                        <strong className="text-orange-800">Torso Twists:</strong>
                        <p className="text-orange-700 text-sm">
                          Standing with arms across chest, rotate left and right. 10-15 each direction. 
                          Mobilizes the spine for athletic movement.
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded">
                        <strong className="text-red-800">Inchworms:</strong>
                        <p className="text-red-700 text-sm">
                          Walk hands out to plank, walk feet toward hands. 5-8 repetitions. 
                          Combines hamstring flexibility with core activation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Stretches */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Static Stretches (Best for Cool-downs – Hold for 20-30 seconds)</h3>
                <p className="text-gray-600 mb-6">
                  Static stretches involve holding a position to lengthen muscles and improve flexibility. 
                  They&apos;re most effective when muscles are warm, making them ideal for post-workout routines.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Standing Hamstring Stretch</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Place heel on elevated surface, lean forward with straight back until you feel stretch 
                        in the back of your leg.
                      </p>
                      <p className="text-green-600 text-xs">Target: Hamstrings, calf muscles</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Standing Quad Stretch</h4>
                      <p className="text-blue-700 text-sm mb-2">
                        Pull heel toward glute, keep knees together and hips pushed forward. 
                        Use wall for balance if needed.
                      </p>
                      <p className="text-blue-600 text-xs">Target: Quadriceps, hip flexors</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Kneeling Hip Flexor Stretch</h4>
                      <p className="text-purple-700 text-sm mb-2">
                        Kneel with one foot forward, push hips forward while keeping torso upright. 
                        Feel stretch in front of rear leg&apos;s hip.
                      </p>
                      <p className="text-purple-600 text-xs">Target: Hip flexors, quadriceps</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Calf Stretch (Wall Stretch)</h4>
                      <p className="text-orange-700 text-sm mb-2">
                        Place hands on wall, step back foot 2-3 feet, keep heel down and leg straight. 
                        Lean into wall to feel stretch.
                      </p>
                      <p className="text-orange-600 text-xs">Target: Gastrocnemius, soleus muscles</p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Figure-4 Glute Stretch</h4>
                      <p className="text-yellow-700 text-sm mb-2">
                        Lying or sitting, place ankle on opposite knee, gently pull thigh toward chest. 
                        Feel stretch in glute and hip.
                      </p>
                      <p className="text-yellow-600 text-xs">Target: Glutes, piriformis, hip external rotators</p>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Doorway Chest Stretch</h4>
                      <p className="text-red-700 text-sm mb-2">
                        Place forearm on doorframe, step forward until you feel stretch across chest and front shoulder. 
                        Vary arm height for different angles.
                      </p>
                      <p className="text-red-600 text-xs">Target: Pectorals, anterior deltoids</p>
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
