
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Clock, Apple, Zap, Droplets } from "lucide-react";

const NutritionVerticalJump = () => {
  return (
    <>
      <Helmet>
        <title>Nutrition Tips to Increase Your Vertical Jump - Fuel Your Performance</title>
        <meta name="description" content="Discover the best nutrition strategies and foods to boost your vertical jump performance. Learn what to eat for maximum jumping power and recovery." />
        <meta name="keywords" content="nutrition for vertical jump, foods to increase jump height, basketball nutrition, sports nutrition for jumping" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/nutrition-vertical-jump" />
        
        <meta property="og:title" content="Nutrition Tips to Increase Your Vertical Jump - Fuel Your Performance" />
        <meta property="og:description" content="Discover the best nutrition strategies and foods to boost your vertical jump performance. Learn what to eat for maximum jumping power and recovery." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/nutrition-vertical-jump" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nutrition Tips to Increase Your Vertical Jump - Fuel Your Performance",
            "description": "Discover the best nutrition strategies and foods to boost your vertical jump performance. Learn what to eat for maximum jumping power and recovery.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "datePublished": "2025-05-28",
            "dateModified": "2025-05-28"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 text-orange-600 mb-2">
                  <Apple className="h-5 w-5" />
                  <span className="text-sm font-medium">Nutrition Guide</span>
                </div>
                <CardTitle className="text-3xl mb-4">Nutrition Tips to Increase Your Vertical Jump</CardTitle>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Performance Nutrition</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Proper nutrition is crucial for maximizing your vertical jump potential. Combined with training, the right foods can fuel explosive power and improve recovery. Test your current jumping ability with our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> to track your progress.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">The Foundation: Macronutrients for Jumping Power</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Protein (25-30%)</h3>
                      <p className="mb-3 text-gray-700">Essential for muscle building and repair. Aim for 1.6-2.2g per kg of body weight.</p>
                      <p className="text-sm font-semibold">Best Sources:</p>
                      <ul className="list-disc pl-4 text-sm mt-1">
                        <li>Lean meats, fish</li>
                        <li>Eggs, dairy</li>
                        <li>Legumes, quinoa</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Carbohydrates (45-55%)</h3>
                      <p className="mb-3 text-gray-700">Primary fuel for explosive movements. Focus on complex carbs for sustained energy.</p>
                      <p className="text-sm font-semibold">Best Sources:</p>
                      <ul className="list-disc pl-4 text-sm mt-1">
                        <li>Oats, brown rice</li>
                        <li>Sweet potatoes</li>
                        <li>Fruits, vegetables</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Fats (20-25%)</h3>
                      <p className="mb-3 text-gray-700">Support hormone production and reduce inflammation for better recovery.</p>
                      <p className="text-sm font-semibold">Best Sources:</p>
                      <ul className="list-disc pl-4 text-sm mt-1">
                        <li>Avocados, nuts</li>
                        <li>Olive oil, fish</li>
                        <li>Seeds, nut butters</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Pre-Workout Nutrition for Maximum Power</h2>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">2-3 Hours Before Training:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Ideal Meal Components:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Complex carbohydrates (60-70% of meal)</li>
                          <li>Lean protein (20-25% of meal)</li>
                          <li>Small amount of healthy fats</li>
                          <li>Plenty of water</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sample Pre-Workout Meals:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Oatmeal with banana and almonds</li>
                          <li>Brown rice with chicken and vegetables</li>
                          <li>Whole grain toast with peanut butter</li>
                          <li>Greek yogurt with berries and granola</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg mt-4">
                    <h3 className="text-xl font-semibold mb-4">30-60 Minutes Before Training:</h3>
                    <p className="mb-3">Quick energy sources that won't cause digestive issues:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Banana with a small amount of honey</li>
                      <li>Sports drink or diluted fruit juice</li>
                      <li>Rice cakes with jam</li>
                      <li>Dates or other dried fruits</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Post-Workout Recovery Nutrition</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">The 30-Minute Window:</h3>
                    <p className="mb-4">
                      Consume protein and carbohydrates within 30 minutes after training for optimal recovery and muscle protein synthesis.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Recovery Ratio:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>3:1 or 4:1 carb to protein ratio</li>
                          <li>20-30g of high-quality protein</li>
                          <li>60-120g of carbohydrates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quick Recovery Options:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Chocolate milk</li>
                          <li>Protein smoothie with fruit</li>
                          <li>Greek yogurt with berries</li>
                          <li>Tuna sandwich on whole grain bread</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Power Foods for Explosive Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Beetroot Juice
                        </h4>
                        <p className="text-sm text-gray-700">Rich in nitrates, improves blood flow and oxygen delivery to muscles. Drink 2-3 hours before training.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Caffeine
                        </h4>
                        <p className="text-sm text-gray-700">Enhances power output and reduces perceived exertion. 3-6mg per kg of body weight, 30-45 minutes before training.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Creatine Monohydrate
                        </h4>
                        <p className="text-sm text-gray-700">Improves power and strength. Take 3-5g daily, timing doesn't matter for this supplement.</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Tart Cherry Juice
                        </h4>
                        <p className="text-sm text-gray-700">Natural anti-inflammatory properties, improves sleep quality and recovery. Drink before bed.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Dark Leafy Greens
                        </h4>
                        <p className="text-sm text-gray-700">High in nitrates and antioxidants. Include spinach, kale, and arugula in daily meals.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Lean Red Meat
                        </h4>
                        <p className="text-sm text-gray-700">Rich in creatine, iron, and B-vitamins. Include 2-3 times per week for optimal power production.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Hydration for Peak Performance</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Droplets className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Hydration Guidelines</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Daily Hydration:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>35-40ml per kg of body weight</li>
                          <li>Additional 500-750ml per hour of training</li>
                          <li>Monitor urine color (pale yellow is ideal)</li>
                          <li>Increase intake in hot weather</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Training Day Protocol:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>2-3 hours before: 500-600ml</li>
                          <li>15-20 minutes before: 200-300ml</li>
                          <li>During training: 150-250ml every 15-20 min</li>
                          <li>After training: 150% of fluid lost</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Foods to Avoid or Limit</h2>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Before Training:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>High-fat foods (slow digestion)</li>
                          <li>High-fiber foods (digestive issues)</li>
                          <li>Excessive amounts of protein</li>
                          <li>New or unfamiliar foods</li>
                          <li>Carbonated drinks</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">In General:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Processed foods and refined sugars</li>
                          <li>Excessive alcohol consumption</li>
                          <li>Trans fats and fried foods</li>
                          <li>Too much caffeine (>6mg/kg body weight)</li>
                          <li>Inflammatory foods during recovery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Sample Daily Meal Plan</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Training Day</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold">Breakfast (7 AM):</h4>
                            <p className="text-sm">Oatmeal with banana, berries, and almond butter</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Pre-Workout (10 AM):</h4>
                            <p className="text-sm">Banana with honey, coffee</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Post-Workout (12 PM):</h4>
                            <p className="text-sm">Chocolate milk or protein smoothie</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Lunch (1 PM):</h4>
                            <p className="text-sm">Grilled chicken, sweet potato, vegetables</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Dinner (7 PM):</h4>
                            <p className="text-sm">Salmon, quinoa, steamed broccoli</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Rest Day</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold">Breakfast:</h4>
                            <p className="text-sm">Greek yogurt with berries and granola</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Mid-Morning:</h4>
                            <p className="text-sm">Apple with almond butter</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Lunch:</h4>
                            <p className="text-sm">Turkey and avocado wrap with vegetables</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Snack:</h4>
                            <p className="text-sm">Handful of nuts and dried fruit</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Dinner:</h4>
                            <p className="text-sm">Lean beef, brown rice, mixed vegetables</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Ready to Fuel Your Jump Training?</h3>
                  <p className="mb-4">
                    Combine proper nutrition with effective training to maximize your vertical jump potential and see how close you are to dunking!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Test Your Dunk Ability
                    </Link>
                    <Link to="/blog/increase-vertical-jump-exercises" className="bg-white text-orange-600 px-6 py-2 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors">
                      Jump Training Guide
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NutritionVerticalJump;
