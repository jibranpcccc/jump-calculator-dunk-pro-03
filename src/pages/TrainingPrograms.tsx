import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Target, TrendingUp, Clock, Users, CheckCircle, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TrainingPrograms = () => {
  return (
    <>
      <Helmet>
        <title>Vertical Jump Training Programs: Beginner to Advanced Plans | 2025 Guide</title>
        <meta name="description" content="Complete vertical jump training programs for all levels. Structured 8-16 week plans with progressive overload to maximize your jumping potential." />
        <meta name="keywords" content="vertical jump training program, jump training plan, basketball training program, plyometric program, strength training program" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/programs/" />
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
              Vertical Jump Training Programs: Your Roadmap to Explosive Hops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our scientifically-designed training programs for beginner, intermediate, and advanced athletes. 
              Each program includes detailed weekly schedules, exercise instructions, and progression guidelines.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span>Programs used by 10,000+ athletes</span>
            </div>
          </div>

          {/* Program Selection */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How to Choose the Right Vertical Jump Program for Your Current Level</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Selecting the appropriate program is crucial for both safety and results. Answer these questions honestly 
              to determine your starting point:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">BEGINNER</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Choose if you have:</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• <strong>Training experience:</strong> New to structured jump training or &lt;6 months</li>
                  <li>• <strong>Vertical jump:</strong> Below 20 inches (estimated)</li>
                  <li>• <strong>Strength level:</strong> Cannot squat bodyweight with good form</li>
                  <li>• <strong>Plyometric experience:</strong> Limited or no experience with explosive exercises</li>
                  <li>• <strong>Injury history:</strong> Recent injuries or mobility limitations</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <p className="text-green-800 text-xs font-medium">Perfect for building a solid foundation safely</p>
                </div>
              </div>
              
              <div className="p-6 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition-colors">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">INTERMEDIATE</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Choose if you have:</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• <strong>Training experience:</strong> 6-18 months consistent training</li>
                  <li>• <strong>Vertical jump:</strong> 20-28 inches (estimated)</li>
                  <li>• <strong>Strength level:</strong> Can squat 1.25x bodyweight</li>
                  <li>• <strong>Plyometric experience:</strong> Comfortable with basic jumping exercises</li>
                  <li>• <strong>Movement quality:</strong> Good form on fundamental exercises</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-blue-800 text-xs font-medium">Ready to take your performance to the next level</p>
                </div>
              </div>
              
              <div className="p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">ADVANCED</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Choose if you have:</h3>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• <strong>Training experience:</strong> 18+ months dedicated training</li>
                  <li>• <strong>Vertical jump:</strong> 28+ inches (estimated)</li>
                  <li>• <strong>Strength level:</strong> Can squat 1.5x+ bodyweight</li>
                  <li>• <strong>Plyometric experience:</strong> Mastery of complex explosive movements</li>
                  <li>• <strong>Goal:</strong> Maximizing genetic potential</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <p className="text-purple-800 text-xs font-medium">For elite athletes seeking peak performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* General Principles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">General Program Principles Applied in These Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Structure:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Frequency:</strong> 2-3 jump-focused workouts per week</li>
                  <li>• <strong>Duration:</strong> 8-16 weeks per program cycle</li>
                  <li>• <strong>Periodization:</strong> Systematic progression from general to specific</li>
                  <li>• <strong>Recovery integration:</strong> Built-in rest days and deload weeks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Principles:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Progressive overload:</strong> Gradual increases in volume and intensity</li>
                  <li>• <strong>Specificity:</strong> Exercises directly transfer to jumping performance</li>
                  <li>• <strong>Individual adaptation:</strong> Programs allow for personal adjustments</li>
                  <li>• <strong>Consistency emphasis:</strong> Sustainable, long-term approach</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <p className="text-orange-700 font-medium">
                🎯 <strong>Success Tip:</strong> Consistency beats intensity. Following a structured program for 8-12 weeks 
                will produce better results than sporadic high-intensity training.
              </p>
            </div>
          </div>

          {/* Beginner Program */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-green-800">Beginner Vertical Jump Program</h2>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">8-12 WEEKS</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Goals:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Build foundational strength in key muscle groups</li>
                  <li>• Learn proper movement patterns and landing mechanics</li>
                  <li>• Introduce basic low-impact plyometrics safely</li>
                  <li>• Establish consistent training habits</li>
                  <li>• Improve overall athletic coordination</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Realistic Improvement Range:</h4>
                  <p className="text-green-700 text-sm mb-2">2-4 inches vertical jump increase</p>
                  <p className="text-green-600 text-xs">
                    Results vary based on starting fitness level, consistency, nutrition, and individual response to training.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule Example (3 days/week):</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Monday - Full Body Strength:</strong>
                    <p className="text-green-700 text-sm">Goblet Squats, Lunges, RDLs, Calf Raises, Planks</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Tuesday - Active Recovery:</strong>
                    <p className="text-gray-700 text-sm">Stretching, Mobility, Light walking</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">Wednesday - Plyometrics & Technique:</strong>
                    <p className="text-blue-700 text-sm">Ankle Hops, Box Jumps (low), Tuck Jumps, Jump form drills</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Thursday - Rest:</strong>
                    <p className="text-gray-700 text-sm">Complete rest or gentle stretching</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Friday - Full Body Strength:</strong>
                    <p className="text-green-700 text-sm">Similar to Monday with slight variations</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Weekend - Rest:</strong>
                    <p className="text-gray-700 text-sm">Recovery days, optional light activity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progressive Phase Structure:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Phase 1: Foundation (Weeks 1-4)</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Focus on movement quality over intensity</li>
                    <li>• Bodyweight and light resistance exercises</li>
                    <li>• Basic plyometrics with emphasis on landing</li>
                    <li>• 2-3 sets × 8-12 reps for strength exercises</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Phase 2: Progression (Weeks 5-8/12)</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Increase load and complexity gradually</li>
                    <li>• Add external resistance to exercises</li>
                    <li>• Introduce more dynamic plyometric movements</li>
                    <li>• 3-4 sets × 6-10 reps for strength exercises</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                <CheckCircle className="w-5 h-5 mr-2" />
                Download Beginner Program PDF
              </button>
            </div>
          </div>

          {/* Intermediate Program */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-blue-800">Intermediate Vertical Jump Program</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">12-16 WEEKS</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Goals:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Significantly increase strength and power output</li>
                  <li>• Introduce more complex and higher-impact plyometrics</li>
                  <li>• Refine jumping technique under increasing loads</li>
                  <li>• Develop sport-specific explosive movements</li>
                  <li>• Break through beginner plateaus</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Realistic Improvement Range:</h4>
                  <p className="text-blue-700 text-sm mb-2">3-6 inches vertical jump increase</p>
                  <p className="text-blue-600 text-xs">
                    May experience plateaus that require program adjustments and patient consistency to overcome.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule Example (3-4 days/week):</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">Monday - Lower Body Strength:</strong>
                    <p className="text-blue-700 text-sm">Squats, Deadlifts, Bulgarian Split Squats, Calf Raises</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <strong className="text-purple-800">Tuesday - Plyometrics & Upper Power:</strong>
                    <p className="text-purple-700 text-sm">Depth Jumps, Bounding, Med Ball Throws, Push Press</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Wednesday - Active Recovery:</strong>
                    <p className="text-gray-700 text-sm">Mobility work, light conditioning</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Thursday - Power & Speed:</strong>
                    <p className="text-green-700 text-sm">Jump Squats, Olympic lift variations, Reactive drills</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <strong className="text-yellow-800">Friday - Recovery/Skills:</strong>
                    <p className="text-yellow-700 text-sm">Core work, mobility, basketball skills (optional)</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Weekend - Rest:</strong>
                    <p className="text-gray-700 text-sm">Complete rest or light recreational activity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Intensity Guidelines:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Strength Phase (Weeks 1-6)</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• 3-5 sets × 4-6 reps</li>
                    <li>• 80-85% 1RM intensity</li>
                    <li>• Focus on load progression</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Power Phase (Weeks 7-12)</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• 3-5 sets × 3-5 reps</li>
                    <li>• 70-80% 1RM intensity</li>
                    <li>• Explosive intent emphasis</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Peak Phase (Weeks 13-16)</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 3-4 sets × 3-5 reps</li>
                    <li>• 60-75% 1RM intensity</li>
                    <li>• Competition preparation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <CheckCircle className="w-5 h-5 mr-2" />
                Download Intermediate Program PDF
              </button>
            </div>
          </div>

          {/* Advanced Program */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-purple-800">Advanced Vertical Jump Program</h2>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">12-16 WEEKS</span>
            </div>
            
            <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-red-600 mr-2" />
                <h4 className="font-semibold text-red-800">Advanced Athletes Only</h4>
              </div>
              <p className="text-red-700 text-sm">
                This program includes high-intensity methods and should only be used by athletes with extensive training experience 
                and excellent movement quality. Consider working with a qualified coach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Goals:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Maximize explosive power and rate of force development</li>
                  <li>• Fine-tune technique for peak performance</li>
                  <li>• Incorporate advanced training methods</li>
                  <li>• Reach near-genetic potential for jumping</li>
                  <li>• Peak for competition or testing</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Realistic Improvement Range:</h4>
                  <p className="text-purple-700 text-sm mb-2">1-3 inches vertical jump increase</p>
                  <p className="text-purple-600 text-xs">
                    Smaller gains than beginner/intermediate programs, but focus is on reaching maximum genetic potential.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Training Methods Include:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded">
                    <strong className="text-red-800">Contrast Training:</strong>
                    <p className="text-red-700 text-sm">Heavy strength exercise followed by explosive plyometric</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <strong className="text-orange-800">Shock Method Plyometrics:</strong>
                    <p className="text-orange-700 text-sm">High-intensity depth jumps with strict safety protocols</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <strong className="text-yellow-800">Velocity-Based Training:</strong>
                    <p className="text-yellow-700 text-sm">Monitoring bar speed for optimal power development</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Specialized Periodization:</strong>
                    <p className="text-green-700 text-sm">Complex block periodization with peaking phases</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Weekly Structure (Highly Specialized):</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Strength-Power Block:</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-800">Mon:</strong> <span className="text-blue-700">Max Strength Lower</span>
                    </div>
                    <div className="p-2 bg-purple-50 rounded text-sm">
                      <strong className="text-purple-800">Tue:</strong> <span className="text-purple-700">Reactive Strength/CNS</span>
                    </div>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <strong className="text-green-800">Thu:</strong> <span className="text-green-700">Power Development</span>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded text-sm">
                      <strong className="text-yellow-800">Fri:</strong> <span className="text-yellow-700">Speed-Strength</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Peaking Block:</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-orange-50 rounded text-sm">
                      <strong className="text-orange-800">Mon:</strong> <span className="text-orange-700">Neural Activation</span>
                    </div>
                    <div className="p-2 bg-red-50 rounded text-sm">
                      <strong className="text-red-800">Wed:</strong> <span className="text-red-700">Competition Simulation</span>
                    </div>
                    <div className="p-2 bg-gray-50 rounded text-sm">
                      <strong className="text-gray-800">Fri:</strong> <span className="text-gray-700">Peak Testing Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                <CheckCircle className="w-5 h-5 mr-2" />
                Download Advanced Program PDF
              </button>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Important Disclaimer: Customizing These Programs & Listening to Your Body</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">These Programs Are Templates</h3>
                <p className="text-gray-600 mb-4">
                  Every athlete is unique. Individual responses to training vary significantly based on genetics, lifestyle, 
                  recovery capacity, training history, and many other factors.
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">You May Need to Adjust:</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Training volume based on your recovery capacity</li>
                  <li>• Exercise selection based on your strengths/weaknesses</li>
                  <li>• Progression speed based on your adaptation rate</li>
                  <li>• Rest periods based on your energy levels</li>
                  <li>• Program duration based on your goals and timeline</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">When to Seek Professional Guidance</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded">
                    <h4 className="font-semibold text-red-800 text-sm mb-1">Definitely Consult a Coach If:</h4>
                    <ul className="text-red-700 text-xs space-y-1">
                      <li>• You have a history of significant injuries</li>
                      <li>• You're unsure about proper exercise technique</li>
                      <li>• You're not seeing progress after 6-8 weeks</li>
                      <li>• You're considering the advanced program</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Professional Benefits:</h4>
                    <ul className="text-blue-700 text-xs space-y-1">
                      <li>• Personalized program design</li>
                      <li>• Real-time technique correction</li>
                      <li>• Injury prevention strategies</li>
                      <li>• Motivation and accountability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">After Completing a Program: What Are Your Next Steps?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Post-Program Actions:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">1. Take a Deload Week:</strong>
                    <p className="text-green-700 text-sm">Reduce training volume by 50% to allow full recovery</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">2. Re-test Your Vertical Jump:</strong>
                    <p className="text-blue-700 text-sm">Use the same measurement method you used initially</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <strong className="text-purple-800">3. Assess Your Progress:</strong>
                    <p className="text-purple-700 text-sm">Compare against your initial baseline and goals</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Progression Options:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded">
                    <strong className="text-yellow-800">Continue to Next Level:</strong>
                    <p className="text-yellow-700 text-sm">If you've mastered your current program level</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <strong className="text-orange-800">Repeat with Variations:</strong>
                    <p className="text-orange-700 text-sm">Same level but with different exercises or methods</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <strong className="text-red-800">Maintenance Phase:</strong>
                    <p className="text-red-700 text-sm">Reduced volume program to maintain gains</p>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded">
                    <strong className="text-indigo-800">Sport-Specific Focus:</strong>
                    <p className="text-indigo-700 text-sm">Apply your improved jumping to basketball skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vertical Jump?</h2>
            <p className="text-xl mb-6">
              Choose your program level and start your journey to explosive hops today!
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Download Your Chosen Program and Start Training Today!
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <Link 
                  to="/"
                  className="inline-block px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Re-calculate Your Dunk Potential After Training →
                </Link>
                <Link 
                  to="/contact"
                  className="inline-block px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Got Questions? Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrainingPrograms;
