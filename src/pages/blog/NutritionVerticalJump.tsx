
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Target, TrendingUp, Apple, Droplets, Clock } from "lucide-react";

const NutritionVerticalJump = () => {
  return (
    <>
      <Helmet>
        <title>Nutrition Tips to Increase Your Vertical Jump | Dunk Calculator</title>
        <meta name="description" content="Learn how proper nutrition can boost your vertical jump performance. Essential foods, hydration tips, and meal timing for basketball players." />
        <meta name="keywords" content="nutrition vertical jump, basketball nutrition, jump higher diet, sports nutrition basketball, vertical leap nutrition" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/nutrition-vertical-jump" />
        
        <meta property="og:title" content="Nutrition Tips to Increase Your Vertical Jump" />
        <meta property="og:description" content="Learn how proper nutrition can boost your vertical jump performance. Essential foods, hydration tips, and meal timing for basketball players." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/nutrition-vertical-jump" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nutrition Tips to Increase Your Vertical Jump",
            "description": "Learn how proper nutrition can boost your vertical jump performance. Essential foods, hydration tips, and meal timing for basketball players.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "datePublished": "2024-11-12",
            "dateModified": "2024-11-12",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://dunkcalculator.com/blog/nutrition-vertical-jump"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: "Blog", href: "/blog" },
                { label: "Nutrition Tips to Increase Your Vertical Jump" }
              ]} 
            />

            <article>
              {/* Back to Blog */}
              <Link to="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Training</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>November 12, 2024</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nutrition Tips to Increase Your Vertical Jump
                </h1>
                <p className="text-xl text-gray-600">
                  Fuel your body properly for maximum jumping performance with these nutrition strategies.
                </p>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  While training and technique are crucial for improving your vertical jump, nutrition plays an equally important role in maximizing your athletic performance. The right foods can provide the energy, nutrients, and recovery support your muscles need to jump higher and stronger.
                </p>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-orange-600 mr-2" />
                      <h2 className="text-2xl font-semibold">Why Nutrition Matters for Jumping</h2>
                    </div>
                    <p className="text-gray-700">
                      Your vertical jump depends on explosive power, muscle strength, and quick energy systems. Proper nutrition supports muscle protein synthesis, provides readily available energy, and aids in recovery between training sessions.
                    </p>
                  </CardContent>
                </Card>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Nutrients for Vertical Jump Performance</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                          Protein
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          Essential for muscle building and repair. Aim for 1.6-2.2g per kg of body weight daily.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Lean meats (chicken, turkey, lean beef)</li>
                          <li>• Fish and seafood</li>
                          <li>• Eggs and dairy products</li>
                          <li>• Plant proteins (beans, quinoa, tofu)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Apple className="h-5 w-5 text-orange-600 mr-2" />
                          Carbohydrates
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          Primary fuel source for explosive movements. Focus on complex carbs for sustained energy.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Whole grains (oats, brown rice, quinoa)</li>
                          <li>• Sweet potatoes and regular potatoes</li>
                          <li>• Fruits (bananas, berries, dates)</li>
                          <li>• Vegetables (especially starchy ones)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Healthy Fats for Hormone Production</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Support testosterone and growth hormone production, crucial for muscle development and power.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Omega-3 Sources:</strong>
                          <ul className="text-gray-600 mt-1">
                            <li>• Salmon, mackerel, sardines</li>
                            <li>• Walnuts and flaxseeds</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Monounsaturated:</strong>
                          <ul className="text-gray-600 mt-1">
                            <li>• Avocados and olive oil</li>
                            <li>• Nuts and seeds</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Saturated (in moderation):</strong>
                          <ul className="text-gray-600 mt-1">
                            <li>• Coconut oil</li>
                            <li>• Grass-fed butter</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Workout Nutrition for Maximum Power</h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        Timing Your Pre-Workout Meals
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-orange-500 pl-4">
                          <h4 className="font-semibold">2-3 Hours Before:</h4>
                          <p className="text-gray-700 text-sm">
                            Complete meal with carbs, protein, and minimal fat. Example: Grilled chicken with sweet potato and vegetables.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold">30-60 Minutes Before:</h4>
                          <p className="text-gray-700 text-sm">
                            Light snack focusing on easily digestible carbs. Example: Banana with a small amount of honey.
                          </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold">15-30 Minutes Before:</h4>
                          <p className="text-gray-700 text-sm">
                            Quick energy source if needed. Example: Sports drink or glucose tablets for intense sessions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Hydration for Optimal Performance</h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                        Water and Electrolyte Balance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Even mild dehydration can significantly impact your jumping performance. Maintain proper hydration throughout the day, not just during workouts.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Daily Hydration Goals:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 35-40ml per kg of body weight</li>
                            <li>• Additional 500-750ml per hour of training</li>
                            <li>• Monitor urine color (pale yellow is ideal)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Electrolyte Sources:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Natural coconut water</li>
                            <li>• Pinch of sea salt in water</li>
                            <li>• Electrolyte tablets for intense sessions</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Workout Recovery Nutrition</h2>
                  
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">The Recovery Window</h3>
                      <p className="text-gray-700 mb-4">
                        The 30-60 minutes after your vertical jump training is crucial for recovery and adaptation. Focus on replenishing glycogen stores and providing protein for muscle repair.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Ideal Post-Workout Ratio:</h4>
                        <p className="text-sm text-gray-700">
                          3:1 or 4:1 ratio of carbohydrates to protein. Example: Chocolate milk, Greek yogurt with berries, or a banana with protein powder.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods to Limit or Avoid</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Before Training</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• High-fat foods (slow digestion)</li>
                          <li>• High-fiber foods (may cause GI distress)</li>
                          <li>• Large amounts of protein</li>
                          <li>• Carbonated drinks</li>
                          <li>• Alcohol (impacts coordination and power)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Generally Limit</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• Processed foods high in sugar</li>
                          <li>• Trans fats and excessive saturated fats</li>
                          <li>• Excessive caffeine (more than 400mg/day)</li>
                          <li>• Foods you have intolerances to</li>
                          <li>• Very restrictive dieting during training</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Daily Meal Plan</h2>
                  
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>For a 180lb (82kg) Basketball Player</CardTitle>
                        <CardDescription>Training at 4 PM</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Breakfast (7 AM):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 3 whole eggs + 2 egg whites</li>
                              <li>• 1 cup oatmeal with berries</li>
                              <li>• 1 slice avocado toast</li>
                            </ul>

                            <h4 className="font-semibold mb-2 mt-4">Lunch (12 PM):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 6oz grilled chicken breast</li>
                              <li>• 1.5 cups brown rice</li>
                              <li>• Mixed vegetables</li>
                              <li>• Small side salad with olive oil</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Pre-Workout (2:30 PM):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Large banana</li>
                              <li>• 1 tbsp honey</li>
                              <li>• 16oz water</li>
                            </ul>

                            <h4 className="font-semibold mb-2 mt-4">Post-Workout (5:30 PM):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Protein shake with banana</li>
                              <li>• 1 cup chocolate milk</li>
                            </ul>

                            <h4 className="font-semibold mb-2 mt-4">Dinner (7 PM):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 6oz salmon</li>
                              <li>• Large sweet potato</li>
                              <li>• Steamed broccoli</li>
                              <li>• Mixed nuts (small handful)</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="mt-12">
                  <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                    <CardContent className="p-8 text-center">
                      <h2 className="text-3xl font-bold mb-4">Test Your Current Jumping Ability</h2>
                      <p className="text-lg mb-6">
                        Combine proper nutrition with our dunk calculator to track your vertical jump progress!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                          <Button className="bg-white text-orange-600 hover:bg-gray-100">
                            <Calculator className="mr-2 h-5 w-5" />
                            Try Dunk Calculator
                          </Button>
                        </Link>
                        <Link to="/vertical-jump-training">
                          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                            View Training Plans
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NutritionVerticalJump;
