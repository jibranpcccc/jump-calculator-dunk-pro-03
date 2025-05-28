
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, AlertTriangle, Play, Clock, Target, TrendingUp } from "lucide-react";

const PlyometricExercises = () => {
  return (
    <>
      <Helmet>
        <title>Top 10 Plyometric Exercises for Vertical Jump | Explode Higher in 2025</title>
        <meta name="description" content="Boost your vertical leap with these essential plyometric exercises for basketball. Detailed instructions, video demos, & sample workouts to jump higher." />
        <meta name="keywords" content="plyometric exercises, vertical jump training, explosive exercises, basketball plyometrics, jump training exercises" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/plyometrics/" />
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
              Plyometrics for Vertical Jump: Your Secret Weapon for Explosive Hops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these essential plyometric exercises to develop explosive power, improve your rate of force development, 
              and unlock your maximum jumping potential.
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
                  Plyometric training, often called "jump training," focuses on exercises that enable muscles to exert maximum force 
                  in the shortest possible time. This type of training specifically targets the stretch-shortening cycle (SSC) 
                  that we discussed in the main guide.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Improved Rate of Force Development (RFD):</strong> Generate force faster</li>
                  <li>• <strong>Enhanced Reactive Strength:</strong> Better response to quick stretch-reflex</li>
                  <li>• <strong>Minimal Ground Contact Time:</strong> Spend less time on the ground, more time in the air</li>
                  <li>• <strong>Neural Adaptations:</strong> More efficient muscle fiber recruitment</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">The Science Behind Plyometrics:</h4>
                <p className="text-blue-700 text-sm mb-3">
                  When you land from a jump and immediately explode back up, you're utilizing stored elastic energy 
                  from your muscles and tendons, plus the stretch reflex from your nervous system.
                </p>
                <p className="text-blue-700 text-sm">
                  This combination can produce significantly more force than a muscle contraction alone—up to 20-30% more power!
                </p>
              </div>
            </div>
          </div>

          {/* Safety First */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Safety First! Are You Ready for Plyometrics?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites Check:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Strength Requirements:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Ability to squat 1.5x bodyweight (advanced plyos)</li>
                      <li>• 20+ bodyweight squats with perfect form (beginners)</li>
                      <li>• Single-leg squat ability</li>
                      <li>• No current injuries or pain</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Landing Mechanics Mastery:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Soft, controlled landings</li>
                      <li>• Knees tracking over toes</li>
                      <li>• Absorbing force through legs, not back</li>
                      <li>• Stable core and upright posture</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Safety Guidelines:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Age considerations:</strong> Younger athletes need modified, lower-impact versions</li>
                  <li>• <strong>Always warm up thoroughly:</strong> 10-15 minutes of dynamic movement</li>
                  <li>• <strong>Start with lower intensity:</strong> Master technique before adding height/complexity</li>
                  <li>• <strong>Quality over quantity:</strong> Perfect reps are better than sloppy high volume</li>
                  <li>• <strong>Listen to your body:</strong> Stop if you feel sharp pain or excessive fatigue</li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-700 font-medium text-sm">
                    If you're new to jumping or have any injury history, consider working with a qualified trainer initially.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercise List */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 12 Plyometric Exercises for Basketball Players</h2>
            
            <div className="space-y-8">
              {/* Ankle Hops */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Ankle Hops / Pogo Jumps</h3>
                <p className="text-gray-600 mb-4">
                  These develop ankle stiffness and reactive strength in your calves—critical for the final push-off phase of jumping 
                  and for absorbing/redirecting force quickly.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Perform:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Stand tall with feet hip-width apart</li>
                      <li>• Keep legs relatively straight (slight knee bend)</li>
                      <li>• Bounce rapidly using only ankle movement</li>
                      <li>• Minimize ground contact time</li>
                      <li>• Focus on quick, sharp bounces</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-4">Common Mistakes:</h4>
                    <ul className="space-y-1 text-red-600 text-sm">
                      <li>• Bending knees too much (turns into mini-jumps)</li>
                      <li>• Spending too much time on ground</li>
                      <li>• Using arms for momentum</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Recommended Sets/Reps:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Beginner:</strong> 3 sets × 10-15 bounces</li>
                      <li><strong>Intermediate:</strong> 3 sets × 20-30 bounces</li>
                      <li><strong>Advanced:</strong> 3 sets × 30-45 bounces</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-3">Rest: 60-90 seconds between sets</p>
                  </div>
                </div>
              </div>

              {/* Tuck Jumps */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Tuck Jumps</h3>
                <p className="text-gray-600 mb-4">
                  Excellent for developing explosive hip and knee flexion power while teaching rapid muscle contraction and body control in the air.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Perform:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Start in athletic stance</li>
                      <li>• Jump up explosively</li>
                      <li>• Bring knees toward chest at peak height</li>
                      <li>• Extend legs for landing</li>
                      <li>• Land softly and immediately repeat</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-4">Common Mistakes:</h4>
                    <ul className="space-y-1 text-red-600 text-sm">
                      <li>• Not bringing knees high enough</li>
                      <li>• Landing hard on heels</li>
                      <li>• Pausing between reps</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Recommended Sets/Reps:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Beginner:</strong> 3 sets × 5-8 jumps</li>
                      <li><strong>Intermediate:</strong> 3 sets × 8-12 jumps</li>
                      <li><strong>Advanced:</strong> 3 sets × 10-15 jumps</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-3">Rest: 90-120 seconds between sets</p>
                  </div>
                </div>
              </div>

              {/* Box Jumps */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Box Jumps</h3>
                <p className="text-gray-600 mb-4">
                  The classic plyometric exercise for developing explosive concentric power and confidence. Teaches you to generate maximum force rapidly.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Perform:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Stand arm's length from box</li>
                      <li>• Swing arms back and dip into quarter squat</li>
                      <li>• Explode up with powerful arm swing</li>
                      <li>• Land softly on box with both feet</li>
                      <li>• Step down (don't jump down)</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-4">Common Mistakes:</h4>
                    <ul className="space-y-1 text-red-600 text-sm">
                      <li>• Using box height as measure of success</li>
                      <li>• Jumping down from box (increases injury risk)</li>
                      <li>• Landing in deep squat position</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Box Height Guidelines:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Beginner:</strong> 12-18 inches, 3×3-5 jumps</li>
                      <li><strong>Intermediate:</strong> 18-24 inches, 3×3-6 jumps</li>
                      <li><strong>Advanced:</strong> 24-30+ inches, 3×3-5 jumps</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-3">Rest: 2-3 minutes between sets</p>
                  </div>
                </div>
              </div>

              {/* Depth Jumps */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Depth Jumps (Advanced)</h3>
                <p className="text-gray-600 mb-4">
                  The most advanced plyometric exercise. Develops maximum reactive strength by utilizing the stretch-shortening cycle optimally. 
                  <strong className="text-red-600"> Advanced athletes only.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Perform:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Step off box (don't jump off)</li>
                      <li>• Land on balls of feet</li>
                      <li>• Immediately explode into maximum vertical jump</li>
                      <li>• Minimize ground contact time (<0.2 seconds)</li>
                      <li>• Focus on reactive bounce</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-4">Common Mistakes:</h4>
                    <ul className="space-y-1 text-red-600 text-sm">
                      <li>• Using too high a drop height</li>
                      <li>• Pausing after landing</li>
                      <li>• Landing flat-footed</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">Safety Requirements:</h4>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li><strong>Prerequisites:</strong> 18+ months plyometric experience</li>
                      <li><strong>Drop Height:</strong> Start at 12 inches, max 30 inches</li>
                      <li><strong>Volume:</strong> Maximum 2×3-5 reps per session</li>
                      <li><strong>Frequency:</strong> Once per week maximum</li>
                    </ul>
                    <p className="text-red-600 text-xs mt-3">Stop if ground contact time increases</p>
                  </div>
                </div>
              </div>

              {/* Bounding */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Bounding (Single & Double Leg)</h3>
                <p className="text-gray-600 mb-4">
                  Develops horizontal and vertical power simultaneously, improving coordination and unilateral strength essential for basketball movements.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Single Leg Bounds:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Take off and land on same leg</li>
                      <li>• Drive knee up high with each bound</li>
                      <li>• Cover maximum distance per bound</li>
                      <li>• Switch legs after completing set</li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-3">Double Leg Bounds:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Take off and land on both feet</li>
                      <li>• Focus on distance and height</li>
                      <li>• Use powerful arm swing</li>
                      <li>• Stick each landing briefly</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Recommended Protocol:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>Single Leg:</strong> 3 sets × 5-8 bounds each leg</li>
                      <li><strong>Double Leg:</strong> 3 sets × 4-6 bounds</li>
                      <li><strong>Distance:</strong> 20-30 meters total</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-3">Rest: 2-3 minutes between sets</p>
                  </div>
                </div>
              </div>

              {/* More exercises condensed for brevity */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Essential Plyometric Exercises:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">6. Seated Box Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Removes eccentric loading, focuses purely on concentric power development.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">7. Vertical Medicine Ball Throws</h4>
                    <p className="text-blue-700 text-sm mb-3">Develops upper body and core contribution to jumping while training full-body coordination.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">8. Hurdle Hops</h4>
                    <p className="text-blue-700 text-sm mb-3">Consecutive jumps over obstacles, developing reactive strength and rhythm.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">9. Lateral Box Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Builds lateral power and stability, important for multi-directional athleticism.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">10. Single Leg Box Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Advanced unilateral power development and balance challenge.</p>
                    
                    <h4 className="font-semibold text-blue-800 mb-2">11. Reactive Box Jumps</h4>
                    <p className="text-blue-700 text-sm mb-3">Quick ground contact before exploding onto box, emphasizing reactive strength.</p>
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

          {/* Integration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Integrate Plyometrics Into Your Overall Training Schedule
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequency Guidelines:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Beginners:</strong> 1-2 sessions per week</li>
                  <li>• <strong>Intermediate:</strong> 2-3 sessions per week</li>
                  <li>• <strong>Advanced:</strong> 2-3 intense sessions per week</li>
                  <li>• <strong>Minimum rest:</strong> 48-72 hours between intense sessions</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Optimal Timing:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• When fresh (beginning of workout)</li>
                  <li>• Before heavy strength training</li>
                  <li>• On separate days from leg strength work</li>
                  <li>• Not immediately before games</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Training Method:</h3>
                <p className="text-gray-600 mb-4">
                  Pair a strength exercise with a similar-movement plyometric exercise for enhanced power development.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Example Complex Pairs:</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Back Squat → Box Jumps</li>
                    <li>• Bulgarian Split Squat → Single Leg Bounds</li>
                    <li>• Deadlift → Tuck Jumps</li>
                    <li>• Calf Raise → Ankle Hops</li>
                  </ul>
                  <p className="text-orange-600 text-xs mt-2">
                    Perform strength exercise, rest 10-30 seconds, then plyometric exercise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Warning */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Listen to Your Body: Avoiding Overtraining and Injury</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Signs of Overtraining:</h3>
                <ul className="space-y-2 text-red-600">
                  <li>• Decreased jump performance</li>
                  <li>• Increased ground contact time</li>
                  <li>• Persistent muscle soreness</li>
                  <li>• Joint pain or stiffness</li>
                  <li>• Reduced motivation or energy</li>
                  <li>• Sleep disturbances</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Strategies:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Adequate rest:</strong> 48-72 hours between intense sessions</li>
                  <li>• <strong>Quality sleep:</strong> 8-9 hours per night</li>
                  <li>• <strong>Proper nutrition:</strong> Support recovery and adaptation</li>
                  <li>• <strong>Active recovery:</strong> Light movement, stretching, foam rolling</li>
                  <li>• <strong>Deload weeks:</strong> Reduce volume every 4-6 weeks</li>
                </ul>
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
    </>
  );
};

export default PlyometricExercises;
