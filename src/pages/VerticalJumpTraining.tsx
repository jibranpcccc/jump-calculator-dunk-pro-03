
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Dumbbell, Apple, Shield, Calendar, TrendingUp, Calculator } from "lucide-react";

const VerticalJumpTraining = () => {
  return (
    <>
      <Helmet>
        <title>How to Increase Your Vertical Jump: The Ultimate Science-Backed Guide (2025)</title>
        <meta name="description" content="Your complete roadmap to a higher vertical jump! Discover science-backed training, exercises, nutrition tips, & programs to jump higher, dunk, and dominate." />
        <meta name="keywords" content="vertical jump training, how to increase vertical jump, jump higher, basketball training, plyometric exercises, strength training for jumping" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Increase Your Vertical Jump: The Ultimate Science-Backed Guide (2025)" />
        <meta property="og:description" content="Your complete roadmap to a higher vertical jump! Discover science-backed training, exercises, nutrition tips, & programs to jump higher, dunk, and dominate." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dunkcalculator.com/vertical-jump-training/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Ultimate Guide to Increasing Your Vertical Jump: Unlock Your Explosive Potential",
            "description": "Your complete roadmap to a higher vertical jump! Discover science-backed training, exercises, nutrition tips, & programs to jump higher, dunk, and dominate.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dunkcalculator.com/logo.png"
              }
            },
            "datePublished": "2024-05-28",
            "dateModified": "2024-05-28",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://dunkcalculator.com/vertical-jump-training/"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Ultimate Guide to Increasing Your Vertical Jump: Unlock Your Explosive Potential
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Your complete roadmap to a higher vertical jump! Discover science-backed training methods, 
              specific exercises, nutrition strategies, and structured programs designed to help you jump higher, 
              dunk with authority, and dominate on the court.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Get Training Programs
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Current Potential
              </Link>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction: Why Everyone Wants to Jump Higher (And How You Can Achieve It!)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  A higher vertical jump isn't just about dunking—though that's certainly a major motivation! 
                  An improved vertical leap transforms your entire basketball game and athletic performance.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits in Basketball:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Dunking ability:</strong> The ultimate expression of athletic dominance</li>
                  <li>• <strong>Rebounding superiority:</strong> Out-jump opponents for boards</li>
                  <li>• <strong>Shot blocking:</strong> Alter and reject shots at the rim</li>
                  <li>• <strong>Layup finishing:</strong> Rise above defenders for easy scores</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beyond Basketball:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Overall athleticism:</strong> Improved power and explosiveness</li>
                  <li>• <strong>Injury prevention:</strong> Stronger, more resilient muscles and joints</li>
                  <li>• <strong>Confidence boost:</strong> Physical achievement translates to mental strength</li>
                  <li>• <strong>Other sports:</strong> Benefits volleyball, football, track and field</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 font-medium">
                    The good news? With the right approach, virtually anyone can significantly improve their vertical jump!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Science Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Science of a Higher Jump: Understanding the Biomechanics
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  The Stretch-Shortening Cycle (SSC): Your Body's Spring Mechanism Explained
                </h3>
                <p className="text-gray-600 mb-4">
                  Think of your muscles and tendons like a rubber band. When you quickly stretch a rubber band and 
                  then release it, it snaps back with more force than if you had simply pushed it. Your body works 
                  the same way during jumping through the stretch-shortening cycle.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">1. Eccentric Phase</h4>
                    <p className="text-blue-700 text-sm">
                      Muscles lengthen under tension as you descend into your jumping position, storing elastic energy.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">2. Amortization Phase</h4>
                    <p className="text-yellow-700 text-sm">
                      Brief transition period between lengthening and shortening—the quicker, the more explosive.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">3. Concentric Phase</h4>
                    <p className="text-green-700 text-sm">
                      Muscles contract forcefully, releasing stored energy plus active muscle contraction for maximum power.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Key Muscle Groups Involved in Jumping
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Movers:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Quadriceps:</strong> Knee extension power</li>
                      <li>• <strong>Glutes:</strong> Hip extension and overall power</li>
                      <li>• <strong>Hamstrings:</strong> Hip extension and knee stability</li>
                      <li>• <strong>Calves:</strong> Ankle plantarflexion and final push-off</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Supporting Players:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Core:</strong> Energy transfer and stability</li>
                      <li>• <strong>Upper body:</strong> Arm swing momentum</li>
                      <li>• <strong>Hip flexors:</strong> Rapid knee drive</li>
                      <li>• <strong>Ankles:</strong> Stiffness for energy return</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Force, Velocity, and Power: The Physics of Achieving Maximum Flight
                </h3>
                <p className="text-gray-600 mb-4">
                  The fundamental equation for jumping success is simple yet profound: <strong>Power = Force × Velocity</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Force Component</h4>
                    <p className="text-red-700 text-sm mb-2">
                      How much strength you can generate against the ground
                    </p>
                    <p className="text-red-600 text-xs">
                      Developed through: Heavy strength training, building bigger, stronger muscles
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Velocity Component</h4>
                    <p className="text-purple-700 text-sm mb-2">
                      How quickly you can apply that force
                    </p>
                    <p className="text-purple-600 text-xs">
                      Developed through: Plyometric training, explosive movements, speed work
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>The Key Insight:</strong> You need both components! A powerlifter might have tremendous force 
                    but lack velocity. A sprinter might have great velocity but insufficient force. 
                    Elite jumpers optimize both through targeted training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Before You Start: Assessing Your Current Level & Setting SMART Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  You can't improve what you don't measure. Before beginning any training program, 
                  it's crucial to establish your baseline vertical jump measurement.
                </p>
                <Link 
                  to="/measurements/vertical-jump"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  First, How to Accurately Measure Your Vertical Jump
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Setting SMART Vertical Jump Goals:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Specific:</strong> "Increase vertical by 4 inches" vs. "jump higher"</li>
                  <li>• <strong>Measurable:</strong> Use precise measurements, not feelings</li>
                  <li>• <strong>Achievable:</strong> 2-6 inches improvement is realistic for most</li>
                  <li>• <strong>Relevant:</strong> Align with your basketball or athletic goals</li>
                  <li>• <strong>Time-bound:</strong> Set a 12-16 week target timeline</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Components */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Core Components of a World-Class Vertical Jump Program
            </h2>
            
            <div className="grid gap-8">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Component 1: Plyometric Training – For Explosive Power & Reactivity
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Plyometric exercises train your muscles to produce maximum force in minimum time—the essence of explosive jumping. 
                  These exercises improve your rate of force development (RFD) and teach your nervous system to activate 
                  muscles more efficiently and powerfully.
                </p>
                <Link 
                  to="/vertical-jump-training/plyometrics"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Deep Dive: Essential Plyometric Exercises for Vertical Jump
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center mb-4">
                  <Dumbbell className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Component 2: Strength Training – Building the Force Foundation
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Absolute strength forms the foundation of all explosive movements. The stronger your muscles can contract, 
                  the more force you can apply to the ground, and the higher you'll jump. Strength training also builds 
                  resilient muscles and joints that can handle the demands of explosive training.
                </p>
                <Link 
                  to="/vertical-jump-training/strength-training"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Deep Dive: Strength Training for a Monster Vertical
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Component 3: Jumping Technique – Maximizing Efficiency & Height
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect technique can add inches to your jump without increasing your physical capabilities. 
                  Proper approach angle, arm swing timing, takeoff mechanics, and body positioning during flight 
                  all contribute to maximizing your vertical output.
                </p>
                <Link 
                  to="/vertical-jump-training/programs"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Master Your Jumping Technique in our Training Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Component 4: Flexibility & Mobility – For Optimal Range of Motion and Injury Prevention
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Adequate mobility allows you to achieve optimal body positions for force production and ensures 
                  efficient energy transfer through your kinetic chain. Poor mobility limits your jumping potential 
                  and significantly increases injury risk during explosive training.
                </p>
                <Link 
                  to="/vertical-jump-training/flexibility-injury-prevention"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Deep Dive: Flexibility, Mobility & Injury Prevention for Jumpers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center mb-4">
                  <Apple className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Component 5: Nutrition – Fueling Your Flight for Peak Performance
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Proper nutrition provides the energy for intense training sessions, supports muscle recovery and growth, 
                  and maintains optimal body composition for jumping. What you eat directly impacts your training quality 
                  and adaptation to your vertical jump program.
                </p>
                <Link 
                  to="/vertical-jump-training/nutrition"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Deep Dive: Nutrition for Optimal Jumping Performance
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Program Building */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Building Your Personalized Jump Training Program: Key Principles to Follow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Principles:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>Periodization:</strong> Varying training focus over time (strength phase → power phase → peaking phase)
                  </li>
                  <li>
                    <strong>Progressive Overload:</strong> Gradually increasing training demands to force adaptation
                  </li>
                  <li>
                    <strong>Specificity:</strong> Training should mimic the demands and movement patterns of jumping
                  </li>
                  <li>
                    <strong>Individual Differences:</strong> Everyone responds differently—adjust based on your response
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Structure:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>Frequency:</strong> 2-3 jump-focused sessions per week for optimal adaptation
                  </li>
                  <li>
                    <strong>Duration:</strong> 8-16 week programs for significant gains
                  </li>
                  <li>
                    <strong>Integration:</strong> Balance jumping training with basketball skills and recovery
                  </li>
                  <li>
                    <strong>Monitoring:</strong> Track progress and adjust based on performance and recovery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Critical Role of Rest, Recovery, and Sleep in Maximizing Gains
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Sleep (8-9 hours)</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Muscle repair and growth</li>
                  <li>• Hormone optimization</li>
                  <li>• Nervous system recovery</li>
                  <li>• Memory consolidation</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Active Recovery</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Light movement and stretching</li>
                  <li>• Foam rolling and massage</li>
                  <li>• Low-intensity cardio</li>
                  <li>• Mobility work</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Rest Days</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Complete rest from training</li>
                  <li>• Stress management</li>
                  <li>• Hydration focus</li>
                  <li>• Mental recovery</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-red-700">
                <strong>Warning:</strong> Overtraining is counterproductive and can actually decrease your vertical jump. 
                More is not always better—quality and recovery matter more than quantity.
              </p>
            </div>
          </div>

          {/* Sample Programs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sample Vertical Jump Training Program Outlines
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-green-200 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Beginner Program Focus</h3>
                <ul className="space-y-2 text-green-700 text-sm mb-4">
                  <li>• Foundational strength building</li>
                  <li>• Learning basic movement patterns</li>
                  <li>• Low-impact plyometrics</li>
                  <li>• Proper landing mechanics</li>
                  <li>• Mobility and flexibility</li>
                </ul>
                <p className="text-green-600 text-xs">Expected gains: 2-4 inches in 8-12 weeks</p>
              </div>
              
              <div className="p-6 border border-blue-200 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Intermediate Program Focus</h3>
                <ul className="space-y-2 text-blue-700 text-sm mb-4">
                  <li>• Increasing strength and power</li>
                  <li>• More complex plyometrics</li>
                  <li>• Refining jumping technique</li>
                  <li>• Sport-specific movements</li>
                  <li>• Progressive overload</li>
                </ul>
                <p className="text-blue-600 text-xs">Expected gains: 3-6 inches in 12-16 weeks</p>
              </div>
              
              <div className="p-6 border border-purple-200 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Advanced Program Focus</h3>
                <ul className="space-y-2 text-purple-700 text-sm mb-4">
                  <li>• Maximizing explosive power</li>
                  <li>• Advanced plyometric methods</li>
                  <li>• Peaking strategies</li>
                  <li>• Competition preparation</li>
                  <li>• Fine-tuning technique</li>
                </ul>
                <p className="text-purple-600 text-xs">Expected gains: 1-3 inches in 12-16 weeks</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                See Full Details & Downloadable Schedules: Vertical Jump Training Programs (All Levels)
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Tracking Your Progress and Staying Motivated Throughout Your Journey
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Effective Progress Tracking:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Keep a training log:</strong> Record workouts, weights, reps, and how you felt</li>
                  <li>• <strong>Test vertical jump monthly:</strong> Consistent measurement conditions</li>
                  <li>• <strong>Take progress photos/videos:</strong> Visual documentation of improvements</li>
                  <li>• <strong>Track other metrics:</strong> Strength gains, plyometric performance</li>
                  <li>• <strong>Note subjective feelings:</strong> Energy levels, confidence, explosiveness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Staying Motivated:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Celebrate small wins:</strong> Every inch gained is progress</li>
                  <li>• <strong>Find a training partner:</strong> Accountability and competition</li>
                  <li>• <strong>Set mini-goals:</strong> Weekly and monthly targets</li>
                  <li>• <strong>Visualize success:</strong> Imagine yourself dunking</li>
                  <li>• <strong>Track non-scale victories:</strong> Feeling more explosive, jumping with ease</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion & CTA */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Your Journey to New Heights Starts Now!</h2>
            <p className="text-xl mb-6 opacity-90">
              You now have the knowledge foundation to dramatically improve your vertical jump. 
              The only thing left is to take action and remain consistent with your training.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Current Dunk Potential & Start Tracking!
              </Link>
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore Our Detailed Jump Training Programs & Start Today!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalJumpTraining;
