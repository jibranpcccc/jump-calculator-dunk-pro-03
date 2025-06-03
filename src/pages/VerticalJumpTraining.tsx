import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Zap, Users, TrendingUp, BookOpen, Dumbbell, Apple, Shield, Calendar } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VerticalJumpTraining = () => {
  return (
    <>
      <Helmet>
        <title>Complete Vertical Jump Training Guide: Science-Based Methods to Jump Higher 2025</title>
        <meta name="description" content="Master vertical jump training with our comprehensive guide. Science-backed exercises, programs, nutrition & injury prevention to maximize your jump height." />
        <meta name="keywords" content="vertical jump training, how to jump higher, basketball training, plyometrics, strength training for jumping" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculator
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Ultimate Vertical Jump Training Guide: Science-Based Methods to Jump Higher
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the science of vertical jump training with our comprehensive guide. Learn proven exercises, 
              effective programs, and essential strategies to maximize your jump height.
            </p>
          </div>

          {/* Why Vertical Jump Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Vertical Jump Training is Essential for Basketball (and Beyond)</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  The vertical jump is a key athletic indicator, especially in basketball. It measures explosive leg power, 
                  coordination, and overall athleticism. Improving your vertical jump translates to better performance on the court, 
                  increased confidence, and a competitive edge.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of a Higher Vertical:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Increased Rebounding:</strong> Secure more rebounds and control possession.</li>
                  <li>• <strong>Improved Shooting:</strong> Elevate over defenders for cleaner shots.</li>
                  <li>• <strong>Enhanced Dunking Ability:</strong> Unleash impressive dunks and intimidate opponents.</li>
                  <li>• <strong>Faster Court Movement:</strong> Explode quicker for drives, cuts, and defensive plays.</li>
                  <li>• <strong>Reduced Injury Risk:</strong> Stronger muscles and better mechanics protect joints.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beyond Basketball:</h3>
                <p className="text-gray-600 mb-4">
                  Vertical jump training isn't just for basketball players. Athletes in volleyball, track and field, 
                  football, and many other sports can benefit from increased explosive power and athleticism.
                </p>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Key Insight:</strong> Vertical jump is a reflection of overall athleticism. Training to jump higher 
                    improves your athletic capabilities across the board.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">The 5 Key Components of Effective Vertical Jump Training</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Plyometrics:</h3>
                <p className="text-gray-600 mb-4">
                  Explosive exercises that utilize the stretch-shortening cycle to develop power and reactive strength. 
                  Examples include box jumps, depth jumps, and jump rope variations.
                </p>
                <Link 
                  to="/vertical-jump-training/plyometrics"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Learn More About Plyometrics <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Strength Training:</h3>
                <p className="text-gray-600 mb-4">
                  Building a strong foundation with compound exercises like squats, deadlifts, and lunges. 
                  Focus on both maximal strength and explosive power development.
                </p>
                <Link 
                  to="/vertical-jump-training/strength-training"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Explore Strength Training <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Technique Refinement:</h3>
                <p className="text-gray-600 mb-4">
                  Optimizing your jumping mechanics for maximum efficiency and power output. 
                  This includes approach run, takeoff angle, arm swing, and body positioning.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4. Nutrition & Recovery:</h3>
                <p className="text-gray-600 mb-4">
                  Fueling your body with the right nutrients and prioritizing recovery to support muscle growth, 
                  reduce inflammation, and prevent injuries.
                </p>
                <Link 
                  to="/vertical-jump-training/nutrition"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Optimize Your Nutrition <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5. Flexibility & Injury Prevention:</h3>
                <p className="text-gray-600 mb-4">
                  Maintaining optimal flexibility and mobility to prevent injuries and improve overall movement quality. 
                  This includes stretching, mobility drills, and prehab exercises.
                </p>
                <Link 
                  to="/vertical-jump-training/flexibility-injury-prevention"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Prevent Injuries & Improve Flexibility <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sample Program */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Sample 8-Week Vertical Jump Training Program</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              This is a general template. Adjust volume, intensity, and exercise selection based on your individual needs and experience level.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Weekly Schedule */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Monday:</strong>
                    <p className="text-gray-700 text-sm">Strength Training (Lower Body Focus)</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Tuesday:</strong>
                    <p className="text-gray-700 text-sm">Plyometrics (Low Intensity)</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Wednesday:</strong>
                    <p className="text-gray-700 text-sm">Active Recovery / Mobility Work</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Thursday:</strong>
                    <p className="text-gray-700 text-sm">Strength Training (Upper Body & Core)</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Friday:</strong>
                    <p className="text-gray-700 text-sm">Plyometrics (High Intensity)</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Saturday:</strong>
                    <p className="text-gray-700 text-sm">Optional: Skill Work / Light Conditioning</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong className="text-gray-800">Sunday:</strong>
                    <p className="text-gray-700 text-sm">Complete Rest</p>
                  </div>
                </div>
              </div>

              {/* Sample Exercises */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Exercises:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <strong className="text-blue-800">Strength Training:</strong>
                    <ul className="text-blue-700 text-sm list-disc pl-5">
                      <li>Back Squats (3-5 sets of 3-5 reps)</li>
                      <li>Romanian Deadlifts (3 sets of 8-12 reps)</li>
                      <li>Walking Lunges (3 sets of 10-12 reps per leg)</li>
                      <li>Calf Raises (3 sets of 15-20 reps)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="text-green-800">Plyometrics:</strong>
                    <ul className="text-green-700 text-sm list-disc pl-5">
                      <li>Box Jumps (3 sets of 3-5 reps)</li>
                      <li>Depth Jumps (2-3 sets of 3-5 reps)</li>
                      <li>Jump Rope (3 sets of 60 seconds)</li>
                      <li>Ankle Hops (3 sets of 15-20 reps)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-700 text-sm">
                <strong>Important:</strong> Always prioritize proper form and technique over weight or intensity. 
                Progress gradually and listen to your body to avoid injuries.
              </p>
            </div>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Apple className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Fueling Your Jumps: Essential Nutrition Strategies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Nutrients for Jumpers:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Protein:</strong> Essential for muscle repair and growth. Aim for 1.6-2.2 grams per kg of bodyweight.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Carbohydrates:</strong> Primary energy source for high-intensity training. Choose complex carbs like whole grains and vegetables.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Healthy Fats:</strong> Important for hormone production and overall health. Include sources like avocados, nuts, and olive oil.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Micronutrients:</strong> Vitamins and minerals play crucial roles in energy production, muscle function, and recovery.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Meal Plan:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Breakfast</h4>
                    <p className="text-blue-700 text-sm">Oatmeal with berries and nuts, protein shake</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Lunch</h4>
                    <p className="text-green-700 text-sm">Grilled chicken salad with mixed greens and avocado</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Dinner</h4>
                    <p className="text-purple-700 text-sm">Baked salmon with quinoa and roasted vegetables</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Snacks</h4>
                    <p className="text-yellow-700 text-sm">Greek yogurt, fruit, protein bar</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Hydration Tip:</strong> Drink plenty of water throughout the day, especially before, during, and after training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Injury Prevention */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Staying Healthy: Injury Prevention Strategies for Jumpers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Jumping-Related Injuries:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Patellar Tendinitis:</strong> Inflammation of the tendon connecting the kneecap to the shinbone.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Ankle Sprains:</strong> Injuries to the ligaments supporting the ankle joint.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>ACL Tears:</strong> Tears in the anterior cruciate ligament, a major knee stabilizer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Shin Splints:</strong> Pain along the shinbone caused by overuse and inflammation.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevention Strategies:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Proper Warm-up:</strong> Prepare your muscles and joints for activity with dynamic stretching and light cardio.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Strength Training:</strong> Strengthen the muscles surrounding your knees, ankles, and hips to provide support and stability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Flexibility Training:</strong> Improve your range of motion with static stretching and mobility drills.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Proper Landing Technique:</strong> Practice landing softly with bent knees and controlled movements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Progressive Overload:</strong> Gradually increase the intensity and volume of your training to avoid overuse injuries.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Your Vertical Jump to the Next Level?</h2>
            <p className="text-xl mb-6">
              Explore our training programs and resources to unlock your full jumping potential!
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                See Training Programs
              </Link>
              <Link 
                to="/calculators/vertical-jump-test"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Measure Your Vertical Jump →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerticalJumpTraining;
