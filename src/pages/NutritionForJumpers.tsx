
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Apple, Droplets, Clock, Calendar, AlertCircle, TrendingUp } from "lucide-react";

const NutritionForJumpers = () => {
  return (
    <>
      <Helmet>
        <title>Nutrition for Vertical Jump: What to Eat to Jump Higher & Recover Faster</title>
        <meta name="description" content="Discover the best foods & nutrition strategies to fuel your vertical jump. Macronutrients, hydration, supplements & meal ideas for explosive athletes." />
        <meta name="keywords" content="nutrition for vertical jump, athlete nutrition, sports nutrition, basketball nutrition, foods for jumping higher" />
        <link rel="canonical" href="https://dunkcalculator.com/vertical-jump-training/nutrition/" />
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
              Nutrition for Jumpers: Eating Your Way to a Higher Vertical & Faster Recovery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the nutritional strategies that will fuel your training, enhance your recovery, 
              and optimize your body composition for maximum jumping performance.
            </p>
          </div>

          {/* Critical Role */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Apple className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">The Critical Role of Nutrition in Athletic Performance, Recovery, and Jumping Higher</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Many athletes focus intensely on their training but neglect the fuel that powers their efforts. 
                  Nutrition isn't just about maintaining weight—it's about optimizing every aspect of athletic performance.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How Nutrition Impacts Jumping Performance:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Energy levels:</strong> Sustained power throughout training sessions</li>
                  <li>• <strong>Muscle repair & growth:</strong> Building stronger, more powerful muscles</li>
                  <li>• <strong>Reducing inflammation:</strong> Faster recovery between sessions</li>
                  <li>• <strong>Injury prevention:</strong> Stronger bones, tendons, and ligaments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Adaptation Benefits:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Improved glycogen storage:</strong> More available energy for explosive movements</li>
                  <li>• <strong>Enhanced protein synthesis:</strong> Better adaptation to strength training</li>
                  <li>• <strong>Optimal hormone production:</strong> Testosterone, growth hormone, insulin</li>
                  <li>• <strong>Better body composition:</strong> Ideal muscle-to-fat ratio for jumping</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 font-medium text-sm">
                    Research shows that proper nutrition can improve training adaptations by 15-25% 
                    compared to athletes with poor dietary habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Macronutrients */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Macronutrients Decoded for Explosive Athletes: Power Your Jumps</h2>
            
            <div className="space-y-8">
              {/* Protein */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protein: The Building Block for Muscle Repair, Growth, and Strength</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Protein provides the amino acids necessary for muscle protein synthesis—the process by which your muscles 
                      repair and grow stronger after training. For jumping athletes, adequate protein is non-negotiable.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Daily Protein Requirements:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• <strong>Recreational athletes:</strong> 1.2-1.4g per kg bodyweight</li>
                      <li>• <strong>Serious athletes:</strong> 1.6-2.2g per kg bodyweight</li>
                      <li>• <strong>During intense training:</strong> Up to 2.5g per kg bodyweight</li>
                      <li>• <strong>Example:</strong> 180lb athlete = 130-180g protein daily</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Best Protein Sources:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded">
                        <h5 className="font-semibold text-blue-800 text-sm mb-1">Animal Sources</h5>
                        <ul className="text-blue-700 text-xs space-y-1">
                          <li>• Chicken breast</li>
                          <li>• Lean beef</li>
                          <li>• Fish (salmon, tuna)</li>
                          <li>• Eggs</li>
                          <li>• Greek yogurt</li>
                          <li>• Cottage cheese</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <h5 className="font-semibold text-green-800 text-sm mb-1">Plant Sources</h5>
                        <ul className="text-green-700 text-xs space-y-1">
                          <li>• Beans & lentils</li>
                          <li>• Quinoa</li>
                          <li>• Tofu & tempeh</li>
                          <li>• Nuts & seeds</li>
                          <li>• Plant protein powder</li>
                          <li>• Hemp hearts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carbohydrates */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Carbohydrates: Your Primary Fuel for High-Intensity Training & Explosive Jumps</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Carbohydrates are stored as glycogen in your muscles and liver, providing immediate energy for explosive movements. 
                      Without adequate carbs, your power output and training quality will suffer significantly.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Types of Carbohydrates:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded">
                        <h5 className="font-semibold text-green-800 mb-1">Complex Carbs (Sustained Energy)</h5>
                        <p className="text-green-700 text-sm">Provide steady energy for training and daily activities</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded">
                        <h5 className="font-semibold text-yellow-800 mb-1">Simple Carbs (Quick Energy)</h5>
                        <p className="text-yellow-700 text-sm">Rapid fuel for immediate energy needs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Best Carbohydrate Sources:</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <h5 className="font-semibold text-blue-800 text-sm mb-2">Complex Carbs</h5>
                        <ul className="text-blue-700 text-xs space-y-1">
                          <li>• Oats & whole grain cereals</li>
                          <li>• Brown rice & quinoa</li>
                          <li>• Sweet potatoes</li>
                          <li>• Whole grain bread & pasta</li>
                          <li>• Vegetables</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <h5 className="font-semibold text-orange-800 text-sm mb-2">Simple Carbs (Around Workouts)</h5>
                        <ul className="text-orange-700 text-xs space-y-1">
                          <li>• Bananas</li>
                          <li>• Berries</li>
                          <li>• Honey</li>
                          <li>• Sports drinks</li>
                          <li>• White rice (post-workout)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthy Fats */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Healthy Fats: Essential for Hormonal Balance, Recovery, and Overall Well-being</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Healthy fats support hormone production (including testosterone and growth hormone), reduce inflammation, 
                      and aid in the absorption of fat-soluble vitamins crucial for bone health and recovery.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits for Athletes:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• <strong>Hormone optimization:</strong> Support natural testosterone production</li>
                      <li>• <strong>Anti-inflammatory:</strong> Reduce exercise-induced inflammation</li>
                      <li>• <strong>Vitamin absorption:</strong> Aid uptake of vitamins A, D, E, K</li>
                      <li>• <strong>Cell membrane health:</strong> Improve nutrient transport</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Best Healthy Fat Sources:</h4>
                    <div className="bg-purple-50 p-4 rounded">
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• <strong>Avocados:</strong> Monounsaturated fats, potassium</li>
                        <li>• <strong>Nuts & seeds:</strong> Almonds, walnuts, chia, flax</li>
                        <li>• <strong>Olive oil:</strong> Extra virgin for cooking/dressing</li>
                        <li>• <strong>Fatty fish:</strong> Salmon, mackerel, sardines</li>
                        <li>• <strong>Coconut oil:</strong> Medium-chain triglycerides</li>
                        <li>• <strong>Egg yolks:</strong> Complete nutrition profile</li>
                      </ul>
                    </div>
                    <p className="text-gray-500 text-xs mt-3">
                      Aim for 20-30% of total calories from healthy fats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micronutrients */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Micronutrients That Matter: Vitamins and Minerals for Optimal Jumper Health</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Calcium & Vitamin D</h3>
                <p className="text-blue-700 text-sm mb-2"><strong>Why important:</strong> Bone health and strength</p>
                <p className="text-blue-600 text-xs"><strong>Sources:</strong> Dairy, leafy greens, salmon, sunlight/supplements</p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Iron</h3>
                <p className="text-red-700 text-sm mb-2"><strong>Why important:</strong> Oxygen transport, preventing fatigue</p>
                <p className="text-red-600 text-xs"><strong>Sources:</strong> Red meat, spinach, beans, fortified cereals</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Magnesium</h3>
                <p className="text-green-700 text-sm mb-2"><strong>Why important:</strong> Muscle function, energy production</p>
                <p className="text-green-600 text-xs"><strong>Sources:</strong> Nuts, seeds, whole grains, dark chocolate</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Zinc</h3>
                <p className="text-purple-700 text-sm mb-2"><strong>Why important:</strong> Immune function, recovery</p>
                <p className="text-purple-600 text-xs"><strong>Sources:</strong> Oysters, beef, pumpkin seeds, chickpeas</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Antioxidants</h3>
                <p className="text-orange-700 text-sm mb-2"><strong>Why important:</strong> Combat oxidative stress</p>
                <p className="text-orange-600 text-xs"><strong>Sources:</strong> Colorful fruits and vegetables, berries</p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">B-Vitamins</h3>
                <p className="text-yellow-700 text-sm mb-2"><strong>Why important:</strong> Energy metabolism</p>
                <p className="text-yellow-600 text-xs"><strong>Sources:</strong> Whole grains, meat, eggs, legumes</p>
              </div>
            </div>
          </div>

          {/* Hydration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Droplets className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Hydration: The Unsung Hero of Peak Athletic Performance and Injury Prevention</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Even mild dehydration (as little as 2% body weight loss) can significantly impair power output, 
                  increase perceived exertion, and elevate injury risk. For explosive athletes, optimal hydration is crucial.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hydration Guidelines:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Daily baseline:</strong> Half your bodyweight in ounces (minimum 2-3 liters)</li>
                  <li>• <strong>Pre-exercise:</strong> 16-20oz, 2-3 hours before training</li>
                  <li>• <strong>During exercise:</strong> 6-8oz every 15-20 minutes if >90 minutes</li>
                  <li>• <strong>Post-exercise:</strong> 150% of fluid lost through sweat</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrolyte Considerations:</h3>
                <p className="text-gray-600 mb-4">
                  During intense or prolonged training sessions, especially in heat, you lose more than just water—you lose 
                  critical electrolytes that affect muscle function and performance.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Key Electrolytes:</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• <strong>Sodium:</strong> Fluid balance, muscle contractions</li>
                    <li>• <strong>Potassium:</strong> Muscle function, heart rhythm</li>
                    <li>• <strong>Magnesium:</strong> Energy production, muscle relaxation</li>
                    <li>• <strong>Calcium:</strong> Muscle contractions, bone health</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Signs of Dehydration & Top Hydration Tips:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Warning Signs:</h5>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Dark yellow urine</li>
                    <li>• Decreased performance</li>
                    <li>• Headache or dizziness</li>
                    <li>• Increased heart rate</li>
                    <li>• Muscle cramps</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Hydration Tips:</h5>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Carry water bottle always</li>
                    <li>• Monitor urine color</li>
                    <li>• Weigh yourself pre/post exercise</li>
                    <li>• Add electrolytes to long sessions</li>
                    <li>• Start hydrating early</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrient Timing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Nutrient Timing: Strategic Eating Before and After Your Jump Workouts</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Pre-Workout Fuel (1-3 hours before)</h3>
                <p className="text-green-700 text-sm mb-3">Focus on easily digestible carbohydrates with moderate protein</p>
                <h4 className="font-semibold text-green-800 mb-2">Goals:</h4>
                <ul className="space-y-1 text-green-700 text-sm mb-3">
                  <li>• Top off glycogen stores</li>
                  <li>• Provide sustained energy</li>
                  <li>• Prevent hunger during training</li>
                  <li>• Optimize hydration</li>
                </ul>
                <h4 className="font-semibold text-green-800 mb-2">Examples:</h4>
                <ul className="space-y-1 text-green-600 text-xs">
                  <li>• Oatmeal with banana and protein powder</li>
                  <li>• Greek yogurt with berries and granola</li>
                  <li>• Whole grain toast with almond butter</li>
                  <li>• Smoothie with fruit and protein</li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">During Workout (if >90 mins)</h3>
                <p className="text-blue-700 text-sm mb-3">Maintain energy and electrolyte balance</p>
                <h4 className="font-semibold text-blue-800 mb-2">What to consume:</h4>
                <ul className="space-y-1 text-blue-700 text-sm mb-3">
                  <li>• 30-60g carbs per hour</li>
                  <li>• 6-8oz fluid every 15-20 mins</li>
                  <li>• Electrolyte replacement</li>
                  <li>• Easy to digest options</li>
                </ul>
                <h4 className="font-semibold text-blue-800 mb-2">Examples:</h4>
                <ul className="space-y-1 text-blue-600 text-xs">
                  <li>• Sports drinks</li>
                  <li>• Banana</li>
                  <li>• Energy gels/chews</li>
                  <li>• Diluted fruit juice</li>
                </ul>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Post-Workout Recovery (within 30-90 mins)</h3>
                <p className="text-purple-700 text-sm mb-3">Optimize muscle repair and glycogen replenishment</p>
                <h4 className="font-semibold text-purple-800 mb-2">Goals:</h4>
                <ul className="space-y-1 text-purple-700 text-sm mb-3">
                  <li>• Muscle protein synthesis</li>
                  <li>• Glycogen replenishment</li>
                  <li>• Reduce inflammation</li>
                  <li>• Rehydrate</li>
                </ul>
                <h4 className="font-semibold text-purple-800 mb-2">Examples:</h4>
                <ul className="space-y-1 text-purple-600 text-xs">
                  <li>• Protein shake with banana</li>
                  <li>• Chocolate milk</li>
                  <li>• Chicken and rice bowl</li>
                  <li>• Greek yogurt with fruit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Supplements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Supplements for Vertical Jump: What Might Help (and What's Likely Hype)?</h2>
            
            <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                <h4 className="font-semibold text-red-800">Important Disclaimer</h4>
              </div>
              <p className="text-red-700 text-sm">
                Always consult with a doctor, registered dietitian, or sports nutritionist before taking any supplements. 
                Supplements do not replace a balanced, whole-food diet. Focus on nutrition first, supplements second.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Creatine Monohydrate</h3>
                  <p className="text-green-700 text-sm mb-2">
                    <strong>Evidence:</strong> Strong research support for improving strength, power, and high-intensity performance.
                  </p>
                  <p className="text-green-600 text-xs">
                    <strong>Dosage:</strong> 3-5g daily. Loading phase (20g/day for 5 days) optional but not necessary.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">✅ Caffeine</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Evidence:</strong> Well-documented performance enhancer for focus, power output, and training intensity.
                  </p>
                  <p className="text-blue-600 text-xs">
                    <strong>Dosage:</strong> 3-6mg per kg bodyweight, 30-45 minutes before training. Cycle usage to prevent tolerance.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">✅ Omega-3 Fish Oil</h3>
                  <p className="text-purple-700 text-sm mb-2">
                    <strong>Evidence:</strong> Strong anti-inflammatory benefits, may improve recovery and joint health.
                  </p>
                  <p className="text-purple-600 text-xs">
                    <strong>Dosage:</strong> 1-3g combined EPA/DHA daily. Higher doses during intense training phases.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Beta-Alanine</h3>
                  <p className="text-yellow-700 text-sm mb-2">
                    <strong>Evidence:</strong> May help buffer lactic acid during repeated high-intensity efforts.
                  </p>
                  <p className="text-yellow-600 text-xs">
                    <strong>Note:</strong> Most beneficial for longer duration, high-intensity work. May cause harmless tingling sensation.
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">✅ Vitamin D</h3>
                  <p className="text-orange-700 text-sm mb-2">
                    <strong>Evidence:</strong> Critical if deficient (common). Important for bone health, muscle function, hormone production.
                  </p>
                  <p className="text-orange-600 text-xs">
                    <strong>Recommendation:</strong> Get blood tested first. Supplement if levels are below optimal range.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">⚠️ Protein Powders</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Reality check:</strong> Convenient for meeting protein targets, but not magic. Whole food is primary.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Types:</strong> Whey (fast absorption), casein (slow release), plant-based (dairy-free options).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Meals */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Meal Ideas for a High-Jumping Athlete</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">🌅 Breakfast Options</h3>
                  <div className="space-y-2 text-yellow-700 text-sm">
                    <div>
                      <strong>Power Oatmeal:</strong> Steel-cut oats with protein powder, banana, almond butter, berries
                    </div>
                    <div>
                      <strong>Athletic Scramble:</strong> 3 eggs with spinach, bell peppers, avocado, whole grain toast
                    </div>
                    <div>
                      <strong>Recovery Smoothie:</strong> Greek yogurt, berries, spinach, protein powder, chia seeds
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🥗 Lunch Options</h3>
                  <div className="space-y-2 text-green-700 text-sm">
                    <div>
                      <strong>Power Bowl:</strong> Quinoa, grilled chicken, roasted vegetables, avocado, tahini dressing
                    </div>
                    <div>
                      <strong>Athlete's Wrap:</strong> Whole grain tortilla, turkey, hummus, vegetables, sweet potato
                    </div>
                    <div>
                      <strong>Performance Salad:</strong> Mixed greens, salmon, nuts, seeds, olive oil vinaigrette
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🍽️ Dinner Options</h3>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <div>
                      <strong>Recovery Plate:</strong> Lean beef, sweet potato, steamed broccoli, brown rice
                    </div>
                    <div>
                      <strong>Athlete's Pasta:</strong> Whole grain pasta, grilled chicken, marinara, side salad
                    </div>
                    <div>
                      <strong>Power Fish:</strong> Baked salmon, quinoa, roasted asparagus, lemon herb seasoning
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🥜 Snack Options</h3>
                  <div className="space-y-2 text-purple-700 text-sm">
                    <div>
                      <strong>Pre-workout:</strong> Banana with almond butter, handful of dates
                    </div>
                    <div>
                      <strong>Post-workout:</strong> Chocolate milk, protein shake with fruit
                    </div>
                    <div>
                      <strong>General:</strong> Greek yogurt with nuts, apple with peanut butter, trail mix
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Fuel Your Jump Training for Maximum Results!</h2>
            <p className="text-xl mb-6">
              Combine optimal nutrition with our proven training programs to unlock your jumping potential!
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Discover Training Programs that Complement Your Nutrition Plan
              </Link>
              <Link 
                to="/vertical-jump-training/flexibility-injury-prevention"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Learn about Flexibility & Mobility →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionForJumpers;
