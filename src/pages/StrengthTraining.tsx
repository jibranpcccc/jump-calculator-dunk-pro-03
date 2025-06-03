import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Dumbbell, Target, TrendingUp, AlertTriangle, Clock, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StrengthTraining = () => {
  return (
    <>
      <Helmet>
        <title>Strength Training for Vertical Jump: Build Power & Explosiveness | 2025 Guide</title>
        <meta name="description" content="Master strength training for jumping higher. Learn key exercises, periodization, and programming to build explosive power for maximum vertical jump gains." />
        <meta name="keywords" content="strength training for vertical jump, power exercises, squat for jumping, explosive strength training, vertical jump strength" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/strength-training/" />
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
              Strength Training for Vertical Jump: Lifting Your Way to New Heights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build the foundation of explosive power with these essential strength exercises designed specifically 
              for vertical jump development and basketball performance.
            </p>
          </div>

          {/* Why Strength Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Dumbbell className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Maximum Strength is the Undeniable Bedrock of an Explosive Vertical Jump</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  While plyometrics teach you to apply force quickly, strength training increases the total amount of force 
                  your muscles can produce. Think of it this way: if you can squat 400 pounds, moving your 180-pound bodyweight 
                  becomes relatively easy and explosive.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Strength-Power Connection:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Higher force ceiling:</strong> More strength = more potential force to apply quickly</li>
                  <li>• <strong>Rate of Force Development:</strong> Stronger muscles can reach peak force faster</li>
                  <li>• <strong>Mechanical advantage:</strong> Better leverage and movement efficiency</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Benefits:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Injury resilience:</strong> Stronger muscles, tendons, and bones</li>
                  <li>• <strong>Training tolerance:</strong> Handle higher plyometric volumes safely</li>
                  <li>• <strong>Athletic confidence:</strong> Physical strength builds mental toughness</li>
                  <li>• <strong>Body composition:</strong> More muscle mass, better power-to-weight ratio</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-700 font-medium text-sm">
                    Research shows that relative strength (strength per body weight) is one of the strongest predictors 
                    of vertical jump performance across all athlete populations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Exercises */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Strength Exercises for Vertical Dominance</h2>
            
            <div className="space-y-10">
              {/* Barbell Back Squats */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Barbell Back Squats (The King)</h3>
                <p className="text-gray-600 mb-4">
                  The gold standard for building lower body strength. Works your quads, glutes, hamstrings, and core simultaneously, 
                  directly translating to improved jumping power and overall athletic performance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Proper Form & Execution:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Set bar on upper traps (high bar) or rear delts (low bar)</li>
                      <li>• Feet shoulder-width apart, toes slightly out</li>
                      <li>• Descend by pushing hips back and bending knees</li>
                      <li>• Keep chest up, knees tracking over toes</li>
                      <li>• Descend to parallel or below</li>
                      <li>• Drive through heels to return to standing</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-4">Common Mistakes & Safety:</h4>
                    <ul className="space-y-1 text-red-600 text-sm">
                      <li>• Knees caving inward</li>
                      <li>• Forward lean/chest dropping</li>
                      <li>• Not reaching parallel depth</li>
                      <li>• Bouncing at bottom</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Training Recommendations:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Hypertrophy Phase:</strong> 3-4 sets × 8-12 reps @ 65-75% 1RM</li>
                      <li><strong>Strength Phase:</strong> 3-5 sets × 3-6 reps @ 80-90% 1RM</li>
                      <li><strong>Power Phase:</strong> 3-5 sets × 3-5 reps @ 60-80% 1RM (explosive intent)</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-3">Rest: 2-5 minutes between sets depending on intensity</p>
                  </div>
                </div>
              </div>

              {/* Front Squats */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Front Squats</h3>
                <p className="text-gray-600 mb-4">
                  More quad-dominant than back squats, front squats better mimic the jumping position and require excellent core stability. 
                  Builds strength in the exact position your body adopts during takeoff.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Perform:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Rest bar on front delts/clavicles</li>
                      <li>• Elbows up high, creating shelf for bar</li>
                      <li>• Maintain upright torso throughout</li>
                      <li>• Descend straight down</li>
                      <li>• Drive up through heels and quads</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Programming:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Strength:</strong> 3-4 sets × 4-6 reps</li>
                      <li><strong>Hypertrophy:</strong> 3-4 sets × 6-10 reps</li>
                      <li><strong>Power:</strong> 3-4 sets × 3-5 reps (explosive)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deadlifts */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Deadlifts (Conventional or Sumo)</h3>
                <p className="text-gray-600 mb-4">
                  Develops total posterior chain strength—glutes, hamstrings, and lower back. Essential for hip extension power, 
                  which is crucial during the drive phase of jumping.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Conventional Deadlift Setup:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Feet hip-width apart, bar over mid-foot</li>
                      <li>• Bend at hips and knees to grip bar</li>
                      <li>• Neutral spine, chest up, shoulders back</li>
                      <li>• Drive through heels and extend hips</li>
                      <li>• Stand tall, squeeze glutes at top</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Training Guidelines:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Strength:</strong> 3-5 sets × 1-5 reps @ 85-95% 1RM</li>
                      <li><strong>Power:</strong> 3-4 sets × 3-5 reps @ 70-80% 1RM</li>
                      <li><strong>Hypertrophy:</strong> 3-4 sets × 6-8 reps @ 70-80% 1RM</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Romanian Deadlifts */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Romanian Deadlifts (RDLs)</h3>
                <p className="text-gray-600 mb-4">
                  Targets hamstrings and glutes with emphasis on the eccentric (lowering) phase. Builds strength in the stretched position, 
                  improving your ability to generate force from deep hip flexion positions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Execution:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Start standing with bar at hip level</li>
                      <li>• Push hips back, keep knees slightly bent</li>
                      <li>• Lower bar along legs, feeling hamstring stretch</li>
                      <li>• Drive hips forward to return to start</li>
                      <li>• Focus on hip hinge movement</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Programming:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Strength:</strong> 3-4 sets × 5-8 reps</li>
                      <li><strong>Hypertrophy:</strong> 3-4 sets × 8-12 reps</li>
                      <li><strong>Eccentric Focus:</strong> 3-4 sets × 6-8 reps (3-5 sec negative)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Power Cleans */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Hang Cleans / Power Cleans (Advanced)</h3>
                <p className="text-gray-600 mb-4">
                  Olympic lift variations that develop explosive triple extension (ankle, knee, hip). Teaches rapid force production 
                  and coordination under load. <strong className="text-orange-600">Requires proper coaching and technique mastery.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Hang Clean Technique:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Start with bar at mid-thigh</li>
                      <li>• Explosive hip extension and shrug</li>
                      <li>• Pull body under bar</li>
                      <li>• Catch in front squat position</li>
                      <li>• Stand up to complete lift</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">Advanced Exercise Notes:</h4>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li><strong>Prerequisites:</strong> Excellent front squat and deadlift technique</li>
                      <li><strong>Learning curve:</strong> 3-6 months to master basics</li>
                      <li><strong>Programming:</strong> 3-5 sets × 1-3 reps @ 70-85% 1RM</li>
                      <li><strong>Alternative:</strong> Jump squats or medicine ball throws</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Exercises Summary */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Essential Strength Exercises:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">6. Bulgarian Split Squats</h4>
                    <p className="text-blue-700 text-sm mb-3">Unilateral strength, balance, hip mobility. Addresses strength imbalances between legs.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">7. Goblet Squats</h4>
                    <p className="text-blue-700 text-sm mb-3">Perfect for beginners to learn squat pattern. Builds quad strength and core stability.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">8. Step-Ups (Weighted)</h4>
                    <p className="text-blue-700 text-sm mb-3">Unilateral power development, glute activation, and functional movement pattern.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">9. Calf Raises (Standing & Seated)</h4>
                    <p className="text-blue-700 text-sm mb-3">Ankle plantarflexion strength for final push-off phase of jumping.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">10. Core Stability Complex</h4>
                    <p className="text-blue-700 text-sm mb-3">Planks, side planks, Pallof press, anti-rotation exercises for force transfer.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">11. Overhead Press / Push Press</h4>
                    <p className="text-blue-700 text-sm mb-3">Upper body contribution to jump, total body power, core stability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workout Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Structuring Your Strength Workouts for Maximum Jump Gains</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Choosing the Right Weight</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• <strong>1RM Method:</strong> Base percentages on max lift</li>
                  <li>• <strong>RPE Method:</strong> Rate of Perceived Exertion (1-10 scale)</li>
                  <li>• <strong>Autoregulation:</strong> Adjust based on daily readiness</li>
                  <li>• <strong>Progressive Overload:</strong> Gradually increase load/volume</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Sets, Reps & Rest</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• <strong>Strength:</strong> 3-5 sets × 3-6 reps, 3-5 min rest</li>
                  <li>• <strong>Power:</strong> 3-5 sets × 1-3 reps, 3-5 min rest</li>
                  <li>• <strong>Hypertrophy:</strong> 3-4 sets × 6-12 reps, 2-3 min rest</li>
                  <li>• <strong>Quality focus:</strong> Perfect reps over high volume</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Workout Frequency</h3>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• <strong>Beginners:</strong> 2-3 full-body sessions/week</li>
                  <li>• <strong>Intermediate:</strong> 3-4 sessions/week (upper/lower split)</li>
                  <li>• <strong>Advanced:</strong> 4-5 sessions/week (specialized split)</li>
                  <li>• <strong>Recovery:</strong> 48-72 hours between intense leg sessions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Periodization */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Basic Periodization for Jumpers: Planning Your Strength Training Cycles</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-green-200 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Phase 1: Anatomical Adaptation / Hypertrophy</h3>
                <p className="text-green-700 text-sm mb-3">Duration: 4-6 weeks</p>
                <h4 className="font-semibold text-green-800 mb-2">Goals:</h4>
                <ul className="space-y-1 text-green-700 text-sm mb-3">
                  <li>• Build muscle mass</li>
                  <li>• Strengthen connective tissues</li>
                  <li>• Learn movement patterns</li>
                  <li>• Prepare for heavier loads</li>
                </ul>
                <h4 className="font-semibold text-green-800 mb-2">Programming:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• 8-12 reps per set</li>
                  <li>• 65-75% 1RM intensity</li>
                  <li>• 3-4 sets per exercise</li>
                  <li>• 2-3 minutes rest</li>
                </ul>
              </div>
              
              <div className="p-6 border border-blue-200 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Phase 2: Maximal Strength</h3>
                <p className="text-blue-700 text-sm mb-3">Duration: 4-6 weeks</p>
                <h4 className="font-semibold text-blue-800 mb-2">Goals:</h4>
                <ul className="space-y-1 text-blue-700 text-sm mb-3">
                  <li>• Increase maximum force production</li>
                  <li>• Improve neural efficiency</li>
                  <li>• Build strength foundation</li>
                  <li>• Prepare for power conversion</li>
                </ul>
                <h4 className="font-semibold text-blue-800 mb-2">Programming:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• 3-6 reps per set</li>
                  <li>• 80-90% 1RM intensity</li>
                  <li>• 3-5 sets per exercise</li>
                  <li>• 3-5 minutes rest</li>
                </ul>
              </div>
              
              <div className="p-6 border border-purple-200 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Phase 3: Conversion to Power</h3>
                <p className="text-purple-700 text-sm mb-3">Duration: 3-4 weeks</p>
                <h4 className="font-semibold text-purple-800 mb-2">Goals:</h4>
                <ul className="space-y-1 text-purple-700 text-sm mb-3">
                  <li>• Convert strength to explosive power</li>
                  <li>• Improve rate of force development</li>
                  <li>• Peak for competition/testing</li>
                  <li>• Integrate with plyometrics</li>
                </ul>
                <h4 className="font-semibold text-purple-800 mb-2">Programming:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• 1-5 reps per set</li>
                  <li>• 60-80% 1RM intensity</li>
                  <li>• Explosive intent/speed</li>
                  <li>• 3-5 minutes rest</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Combining Strength Workouts with Plyometrics and On-Court Skill Training
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule Example:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Monday:</strong> <span className="text-green-700">Lower Body Strength</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">Tuesday:</strong> <span className="text-blue-700">Basketball Skills + Light Upper Body</span>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <strong className="text-yellow-800">Wednesday:</strong> <span className="text-yellow-700">Plyometrics + Core</span>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <strong className="text-purple-800">Thursday:</strong> <span className="text-purple-700">Upper Body Strength + Basketball</span>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <strong className="text-orange-800">Friday:</strong> <span className="text-orange-700">Lower Body Power + Skills</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Weekend:</strong> <span className="text-gray-700">Active Recovery or Games</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Scheduling Principles:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Prioritize quality:</strong> Do most important work when fresh</li>
                  <li>• <strong>Separate conflicting demands:</strong> Heavy strength and plyometrics on different days</li>
                  <li>• <strong>Allow recovery:</strong> 48+ hours between intense lower body sessions</li>
                  <li>• <strong>Peak for competition:</strong> Reduce volume before important games</li>
                  <li>• <strong>Monitor fatigue:</strong> Adjust based on sleep, stress, and performance</li>
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">⚠️ Overtraining Warning Signs:</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Decreased strength or power output</li>
                    <li>• Persistent muscle soreness</li>
                    <li>• Disrupted sleep patterns</li>
                    <li>• Reduced motivation or mood</li>
                    <li>• Increased injury susceptibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Strength Foundation?</h2>
            <p className="text-xl mb-6">
              Integrate these strength exercises into a complete training program designed for vertical jump gains!
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Integrate Into Expert-Designed Jump Training Programs
              </Link>
              <Link 
                to="/vertical-jump-training/nutrition"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Fuel Your Strength Gains with Proper Nutrition →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StrengthTraining;
