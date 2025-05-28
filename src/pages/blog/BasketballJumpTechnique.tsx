
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Clock, Target, TrendingUp, CheckCircle } from "lucide-react";

const BasketballJumpTechnique = () => {
  return (
    <>
      <Helmet>
        <title>Basketball Jump Technique | Perfect Your Jumping Form for Dunking</title>
        <meta name="description" content="Master the perfect basketball jumping technique. Learn proper form, timing, and approach methods to maximize your vertical jump and dunking ability." />
        <meta name="keywords" content="basketball jump technique, proper jumping form, dunk approach, vertical jump mechanics, basketball jumping tips" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/basketball-jump-technique" />
        
        <meta property="og:title" content="Basketball Jump Technique | Perfect Your Jumping Form for Dunking" />
        <meta property="og:description" content="Master the perfect basketball jumping technique. Learn proper form, timing, and approach methods to maximize your vertical jump and dunking ability." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/basketball-jump-technique" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Basketball Jump Technique | Perfect Your Jumping Form for Dunking",
            "description": "Master the perfect basketball jumping technique. Learn proper form, timing, and approach methods to maximize your vertical jump and dunking ability.",
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
                  <Target className="h-5 w-5" />
                  <span className="text-sm font-medium">Technique Guide</span>
                </div>
                <CardTitle className="text-3xl mb-4">Basketball Jump Technique</CardTitle>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>Skill improvement</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Perfect jumping technique can add 4-8 inches to your vertical jump instantly. Before working on strength, master these fundamental techniques. Test your current ability with our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> to see your starting point.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">The Perfect Jump Approach</h2>
                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-3">Step-by-Step Approach</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Step 1: The Run-Up</h4>
                          <p className="text-gray-600">Take 3-5 controlled steps, gradually increasing speed</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Step 2: Plant Phase</h4>
                          <p className="text-gray-600">Plant your takeoff foot firmly, slightly ahead of your body</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Step 3: Load and Explode</h4>
                          <p className="text-gray-600">Quickly load your muscles and explode upward</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Proper Body Mechanics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Upper Body Position</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Keep chest up and shoulders back</li>
                        <li>Drive arms up explosively</li>
                        <li>Maintain core tension</li>
                        <li>Look at your target</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Lower Body Position</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Land on balls of feet</li>
                        <li>Keep knees behind toes</li>
                        <li>Maintain hip hinge position</li>
                        <li>Push through entire foot</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">One-Foot vs Two-Foot Takeoff</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">One-Foot Takeoff</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Natural running motion</li>
                            <li>Good for fast breaks</li>
                            <li>Easier to time</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Disadvantages:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Less overall power</li>
                            <li>Harder on knees</li>
                            <li>Requires more speed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Two-Foot Takeoff</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Maximum power generation</li>
                            <li>Better control</li>
                            <li>Safer for joints</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Disadvantages:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Requires more practice</li>
                            <li>Slower approach</li>
                            <li>Less natural feeling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Common Technique Mistakes</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50">
                      <h3 className="text-xl font-semibold mb-2">❌ Overstriding</h3>
                      <p className="text-gray-700">Planting your foot too far ahead creates a braking effect and reduces jumping power.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50">
                      <h3 className="text-xl font-semibold mb-2">❌ Not Using Arms</h3>
                      <p className="text-gray-700">Arms can add 10-15% to your jump height when used properly.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50">
                      <h3 className="text-xl font-semibold mb-2">❌ Slow Countermovement</h3>
                      <p className="text-gray-700">Taking too long in the loading phase reduces elastic energy storage.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50">
                      <h3 className="text-xl font-semibold mb-2">❌ Poor Timing</h3>
                      <p className="text-gray-700">Mistiming your approach and takeoff wastes momentum and reduces height.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Technique Drills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Basic Drills</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wall touches (practice arm swing)</li>
                        <li>Approach without jumping</li>
                        <li>Single-step jumps</li>
                        <li>Mirror practice</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Advanced Drills</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Variable distance approaches</li>
                        <li>Rim touching progressions</li>
                        <li>Ball handling while jumping</li>
                        <li>Game situation practice</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Mental Aspects of Jumping</h2>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Confidence and Visualization</h3>
                    <p className="mb-4">
                      Mental preparation is crucial for maximizing your jumping ability. Visualize successful dunks and approaches.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Practice positive self-talk</li>
                      <li>Visualize perfect technique daily</li>
                      <li>Set progressive goals</li>
                      <li>Stay confident during attempts</li>
                    </ul>
                  </div>
                </section>

                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Ready to Test Your Technique?</h3>
                  <p className="mb-4">
                    Now that you understand proper jumping technique, test your current ability and track your improvements.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Calculate Your Dunk Ability
                    </Link>
                    <Link to="/blog/vertical-jump-workout" className="bg-white text-orange-600 px-6 py-2 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors">
                      Complete Workout Plan
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

export default BasketballJumpTechnique;
