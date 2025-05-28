
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation";

const VerticalJumpWorkout = () => {
  return (
    <>
      <Helmet>
        <title>30-Day Vertical Jump Workout Challenge | Increase Your Jump | Dunk Calculator</title>
        <meta name="description" content="Follow our proven 30-day vertical jump workout program. Detailed daily exercises, progression tracking, and recovery protocols to maximize your jumping ability." />
        <meta name="keywords" content="vertical jump workout, 30 day challenge, jump training program, plyometric workout, basketball training" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/vertical-jump-workout/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                30-Day Vertical Jump Workout Challenge
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <span>By Strength & Conditioning Coach</span>
                <span className="mx-2">•</span>
                <span>December 18, 2024</span>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=400&fit=crop" 
                alt="Athlete doing box jumps" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-6">
                Ready to add serious inches to your vertical jump in just 30 days? This scientifically-designed 
                workout program combines plyometrics, strength training, and recovery protocols to maximize 
                your jumping potential safely and effectively.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <p className="text-orange-800">
                  <strong>Important:</strong> This is an intensive program. Ensure you have no injuries and 
                  consider consulting a fitness professional before starting.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Program Overview</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Week 1: Foundation</h3>
                  <p className="text-blue-800 text-sm">Build base strength and introduce plyometric movements</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Week 2-3: Intensity</h3>
                  <p className="text-green-800 text-sm">Increase explosive power and training volume</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Week 4: Peak & Test</h3>
                  <p className="text-purple-800 text-sm">Peak performance and final testing</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Week 1: Foundation Building (Days 1-7)</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Day 1 & 4: Lower Body Strength</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Bodyweight Squats: 3 sets x 15 reps</li>
                  <li>• Lunges: 3 sets x 10 each leg</li>
                  <li>• Calf Raises: 3 sets x 20 reps</li>
                  <li>• Wall Sits: 3 sets x 30 seconds</li>
                  <li>• Single-leg Glute Bridges: 3 sets x 8 each leg</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Day 2 & 5: Plyometric Introduction</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Jump Squats: 3 sets x 8 reps</li>
                  <li>• Standing Broad Jumps: 3 sets x 5 reps</li>
                  <li>• Box Steps (12-16"): 3 sets x 10 each leg</li>
                  <li>• Lateral Hops: 3 sets x 8 each direction</li>
                  <li>• Ankle Bounces: 3 sets x 15 reps</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Day 3 & 6: Active Recovery</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Light stretching routine (20 minutes)</li>
                  <li>• Foam rolling</li>
                  <li>• Walking or light jogging</li>
                  <li>• Hip mobility exercises</li>
                </ul>
              </div>

              <p><strong>Day 7:</strong> Complete rest</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Week 2-3: Intensity Phase</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Strength Days (Mon, Wed, Fri)</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Jump Squats: 4 sets x 6 reps (explosive)</li>
                  <li>• Single-leg Squats: 3 sets x 5 each leg</li>
                  <li>• Bulgarian Split Squats: 3 sets x 8 each leg</li>
                  <li>• Single-leg Calf Raises: 3 sets x 12 each leg</li>
                  <li>• Pistol Squat Progressions: 3 sets x 3-5 each leg</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plyometric Days (Tue, Thu, Sat)</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Depth Jumps (16-20" box): 4 sets x 4 reps</li>
                  <li>• Box Jumps (progressive height): 4 sets x 5 reps</li>
                  <li>• Broad Jumps: 4 sets x 3 reps (max distance)</li>
                  <li>• Single-leg Bounds: 3 sets x 6 each leg</li>
                  <li>• Reactive Jumps: 3 sets x 8 reps</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Week 4: Peak Performance</h2>
              
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <p className="text-red-800">
                  <strong>Focus:</strong> Reduce volume, increase intensity, and prepare for testing.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Days 1, 3, 5: Max Power</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Depth Jumps: 3 sets x 3 reps (max effort)</li>
                  <li>• Box Jumps: 3 sets x 3 reps (highest box possible)</li>
                  <li>• Approach Jumps: 3 sets x 3 attempts</li>
                  <li>• Single-leg Max Jumps: 2 sets x 3 each leg</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Days 2, 4, 6: Recovery & Mobility</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li>• Dynamic stretching</li>
                  <li>• Light movement patterns</li>
                  <li>• Massage or foam rolling</li>
                  <li>• Visualization and mental preparation</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nutrition Guidelines</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Eat adequate protein (0.8-1g per lb bodyweight)</li>
                <li>Stay hydrated (half your bodyweight in ounces of water)</li>
                <li>Time carbohydrates around workouts</li>
                <li>Get quality sleep (7-9 hours nightly)</li>
                <li>Consider anti-inflammatory foods</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Recovery Protocols</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Daily Recovery</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• 10-minute post-workout stretch</li>
                    <li>• Ice baths (optional)</li>
                    <li>• Proper sleep schedule</li>
                    <li>• Stress management</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Weekly Recovery</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• One complete rest day</li>
                    <li>• Massage or self-massage</li>
                    <li>• Flexibility assessment</li>
                    <li>• Progress evaluation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing & Measurement</h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Testing Schedule:</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li><strong>Day 0:</strong> Baseline vertical jump measurement</li>
                  <li><strong>Day 15:</strong> Mid-program assessment</li>
                  <li><strong>Day 30:</strong> Final test and celebration!</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Expected Results</h2>
              <p>Realistic expectations for a 30-day program:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Beginners:</strong> 2-4 inch improvement</li>
                <li><strong>Intermediate:</strong> 1-3 inch improvement</li>
                <li><strong>Advanced:</strong> 0.5-2 inch improvement</li>
              </ul>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold mb-3">Ready to Start Your 30-Day Challenge?</h3>
                <p className="mb-4">
                  Track your progress with our tools and get personalized recommendations based on your results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/calculators/vertical-jump-improvement" className="bg-white text-orange-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    Progress Tracker
                  </a>
                  <a href="/tools/progress-tracker" className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800 transition-colors">
                    Training Log
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerticalJumpWorkout;
