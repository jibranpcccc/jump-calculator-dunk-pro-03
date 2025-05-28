
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Apple, Droplets, Zap, Clock, AlertTriangle, TrendingUp } from "lucide-react";

const NutritionForJumpers = () => {
  return (
    <>
      <Helmet>
        <title>Nutrition for Vertical Jump: What to Eat to Jump Higher & Recover Faster</title>
        <meta name="description" content="Discover the best foods & nutrition strategies to fuel your vertical jump. Macronutrients, hydration, supplements & meal ideas for explosive athletes." />
        <meta name="keywords" content="nutrition for vertical jump, basketball nutrition, athlete diet, sports nutrition, protein for athletes, carbohydrates for energy" />
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
              Discover the nutritional strategies that fuel explosive performance, accelerate recovery, 
              and help you reach your vertical jump potential.
            </p>
          </div>

          {/* Nutrition Role */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Apple className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">The Critical Role of Nutrition in Athletic Performance</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Proper nutrition is the foundation that supports every aspect of your vertical jump training. Without adequate fuel, 
              even the best training program will fall short of its potential.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How Nutrition Impacts Your Jump Training:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Energy levels:</strong> Sustained power throughout workouts</li>
                  <li>• <strong>Muscle repair & growth:</strong> Building stronger, more explosive muscles</li>
                  <li>• <strong>Recovery speed:</strong> Faster return to peak performance</li>
                  <li>• <strong>Injury prevention:</strong> Stronger tissues and better healing</li>
                  <li>• <strong>Training adaptation:</strong> Enhanced response to stimulus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Signs of Poor Nutrition in Athletes:</h3>
                <ul className="space-y-3 text-red-600">
                  <li>• Consistent fatigue during training</li>
                  <li>• Slow recovery between sessions</li>
                  <li>• Frequent illness or minor injuries</li>
                  <li>• Performance plateaus or declines</li>
                  <li>• Poor concentration and mood</li>
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700 text-sm">
                    <strong>Remember:</strong> You cannot out-train a poor diet. Nutrition and training work together synergistically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Macronutrients */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Macronutrients Decoded for Explosive Athletes</h2>
            </div>

            {/* Protein */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Protein: The Building Block for Muscle Repair, Growth, and Strength</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Why Protein Matters for Jumpers:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Repairs micro-tears from intense training</li>
                    <li>• Builds new muscle tissue for increased power</li>
                    <li>• Supports hormone production (testosterone, growth hormone)</li>
                    <li>• Maintains immune system function</li>
                    <li>• Provides satiety to support body composition goals</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">Daily Protein Target:</h5>
                    <p className="text-blue-700 text-sm">1.6-2.2 grams per kilogram of bodyweight</p>
                    <p className="text-blue-600 text-xs">(For a 70kg athlete: 112-154g protein daily)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Best Protein Sources for Athletes:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800 text-sm">Complete Proteins:</h5>
                      <p className="text-green-700 text-xs">Chicken, turkey, fish, eggs, dairy, quinoa</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded">
                      <h5 className="font-semibold text-yellow-800 text-sm">Plant-Based Options:</h5>
                      <p className="text-yellow-700 text-xs">Beans, lentils, tofu, tempeh, hemp seeds</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-semibold text-purple-800 text-sm">Convenience Options:</h5>
                      <p className="text-purple-700 text-xs">Whey protein, casein, plant protein powders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carbohydrates */}
            <div className="mb-8 border-t pt-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Carbohydrates: Your Primary Fuel for High-Intensity Training</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Why Carbs Are Essential for Jumpers:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Primary fuel source for explosive movements</li>
                    <li>• Replenishes muscle glycogen stores</li>
                    <li>• Supports high training intensity</li>
                    <li>• Facilitates protein synthesis</li>
                    <li>• Maintains cognitive function during training</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">Daily Carb Target:</h5>
                    <p className="text-green-700 text-sm">3-7 grams per kilogram bodyweight</p>
                    <p className="text-green-600 text-xs">(Higher on training days, lower on rest days)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Smart Carbohydrate Choices:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-semibold text-blue-800 text-sm">Complex Carbs (Steady Energy):</h5>
                      <p className="text-blue-700 text-xs">Oats, brown rice, quinoa, sweet potatoes</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded">
                      <h5 className="font-semibold text-orange-800 text-sm">Simple Carbs (Quick Energy):</h5>
                      <p className="text-orange-700 text-xs">Bananas, berries, dates, honey (around workouts)</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 rounded">
                    <h5 className="font-semibold text-yellow-800 text-sm">Timing Tip:</h5>
                    <p className="text-yellow-700 text-xs">
                      Consume complex carbs 2-3 hours before training, simple carbs 30-60 minutes before or immediately after.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fats */}
            <div className="border-t pt-6">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">Healthy Fats: Essential for Hormonal Balance & Recovery</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Why Athletes Need Healthy Fats:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Testosterone and growth hormone production</li>
                    <li>• Vitamin A, D, E, K absorption</li>
                    <li>• Anti-inflammatory effects</li>
                    <li>• Cell membrane health</li>
                    <li>• Sustained energy for longer activities</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <h5 className="font-semibold text-purple-800 mb-1">Daily Fat Target:</h5>
                    <p className="text-purple-700 text-sm">20-35% of total daily calories</p>
                    <p className="text-purple-600 text-xs">(Focus on unsaturated fats)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Best Fat Sources for Athletes:</h4>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Monounsaturated:</strong> Avocados, olive oil, nuts, seeds</li>
                    <li>• <strong>Omega-3:</strong> Fatty fish (salmon, mackerel), walnuts, chia seeds</li>
                    <li>• <strong>Saturated (moderate):</strong> Coconut oil, grass-fed butter</li>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 rounded">
                    <h5 className="font-semibold text-red-800 text-sm">Fats to Limit:</h5>
                    <p className="text-red-700 text-xs">Trans fats, excessive saturated fats, heavily processed oils</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hydration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Droplets className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Hydration: The Unsung Hero of Peak Athletic Performance</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Even mild dehydration (2% body weight loss) can significantly impair power output, reaction time, 
                  and increase injury risk. For explosive athletes, optimal hydration is non-negotiable.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact of Dehydration on Jumping:</h3>
                <ul className="space-y-2 text-red-600 text-sm">
                  <li>• 10-15% reduction in power output</li>
                  <li>• Decreased muscle coordination</li>
                  <li>• Increased perceived exertion</li>
                  <li>• Higher injury risk (especially muscle strains)</li>
                  <li>• Impaired recovery between sets</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hydration Guidelines for Athletes:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Daily Baseline:</h4>
                    <p className="text-blue-700 text-sm">35-40ml per kg bodyweight (2.5-3 liters for 70kg athlete)</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Training Days:</h4>
                    <p className="text-green-700 text-sm">Add 500-750ml per hour of training</p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Hydration Check:</h4>
                    <p className="text-yellow-700 text-sm">Urine should be pale yellow (like lemonade)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Electrolyte Considerations:</h4>
              <p className="text-orange-700 text-sm">
                During intense training sessions lasting greater than 60-90 minutes, or in hot conditions, 
                include electrolytes (sodium, potassium, magnesium) to maintain fluid balance and prevent cramping.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Fuel Your Jump Training Success!</h2>
            <p className="text-xl mb-6">
              Combine proper nutrition with our expert training programs for maximum vertical jump gains.
            </p>
            <div className="space-x-4">
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Training Programs
              </Link>
              <Link 
                to="/vertical-jump-training/flexibility-injury-prevention"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Learn About Recovery →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionForJumpers;
