
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Clock, Target, TrendingUp, Zap } from "lucide-react";

const BestVerticalJumpExercises = () => {
  return (
    <>
      <Helmet>
        <title>7 Best Exercises to Increase Vertical Jump | Proven Training Methods</title>
        <meta name="description" content="Discover the 7 most effective exercises to increase your vertical jump. Proven plyometric and strength training methods used by professional athletes." />
        <meta name="keywords" content="best vertical jump exercises, plyometric training, jump higher exercises, vertical leap training, basketball jump exercises" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/best-vertical-jump-exercises" />
        
        <meta property="og:title" content="7 Best Exercises to Increase Vertical Jump | Proven Training Methods" />
        <meta property="og:description" content="Discover the 7 most effective exercises to increase your vertical jump. Proven plyometric and strength training methods used by professional athletes." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/best-vertical-jump-exercises" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "7 Best Exercises to Increase Vertical Jump | Proven Training Methods",
            "description": "Discover the 7 most effective exercises to increase your vertical jump. Proven plyometric and strength training methods used by professional athletes.",
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
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-medium">Vertical Training</span>
                </div>
                <CardTitle className="text-3xl mb-4">7 Best Exercises to Increase Vertical Jump</CardTitle>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>Proven methods</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  These 7 exercises are scientifically proven to increase vertical jump height. Used by professional athletes and trainers worldwide. Test your progress with our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> after implementing these exercises.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Box Jumps</h2>
                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">How to Perform</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Start with 12-18 inch box</li>
                          <li>Jump explosively onto box</li>
                          <li>Land softly with bent knees</li>
                          <li>Step down (don't jump down)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Training Protocol</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>3-4 sets of 5-8 reps</li>
                          <li>2-3 minutes rest between sets</li>
                          <li>Focus on height, not speed</li>
                          <li>Progress box height gradually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Depth Jumps</h2>
                  <div className="bg-green-50 p-6 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">How to Perform</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Drop from 12-24 inch box</li>
                          <li>Land and immediately jump up</li>
                          <li>Minimize ground contact time</li>
                          <li>Jump as high as possible</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Develops reactive strength</li>
                          <li>Improves stretch-shortening cycle</li>
                          <li>Enhances explosive power</li>
                          <li>Sport-specific movement pattern</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Jump Squats</h2>
                  <div className="bg-orange-50 p-6 rounded-lg mb-4">
                    <p className="mb-4">The foundation exercise for vertical jump development. Builds explosive leg strength and power.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bodyweight</h4>
                        <p className="text-sm">3 sets of 10-15 reps<br/>Perfect for beginners</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Weighted</h4>
                        <p className="text-sm">3 sets of 6-8 reps<br/>10-20% bodyweight</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Single-Leg</h4>
                        <p className="text-sm">3 sets of 5-8 each leg<br/>Advanced variation</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Broad Jumps</h2>
                  <div className="bg-purple-50 p-6 rounded-lg mb-4">
                    <p className="mb-4">Develops horizontal power that translates to vertical jumping ability.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Technique</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Start in athletic position</li>
                          <li>Swing arms back, then forward</li>
                          <li>Drive with legs explosively</li>
                          <li>Land softly on both feet</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Progressions</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Single broad jump</li>
                          <li>Double broad jump</li>
                          <li>Triple broad jump</li>
                          <li>Standing to running start</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Bulgarian Split Squats</h2>
                  <div className="bg-red-50 p-6 rounded-lg mb-4">
                    <p className="mb-4">Unilateral strength exercise that addresses muscle imbalances and builds single-leg power.</p>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <strong>Setup:</strong> Rear foot elevated on bench, front foot planted firmly
                      </div>
                      <div className="bg-white p-3 rounded">
                        <strong>Execution:</strong> Lower until front thigh is parallel, drive up explosively
                      </div>
                      <div className="bg-white p-3 rounded">
                        <strong>Programming:</strong> 3 sets of 8-12 reps each leg
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Tuck Jumps</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                    <p className="mb-4">High-intensity plyometric exercise that develops explosive hip flexor strength and coordination.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Form Cues</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Jump straight up</li>
                          <li>Bring knees to chest</li>
                          <li>Land on balls of feet</li>
                          <li>Immediate next jump</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Common Mistakes</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Landing too hard</li>
                          <li>Leaning forward</li>
                          <li>Not bringing knees high enough</li>
                          <li>Pausing between jumps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Single-Leg Bounds</h2>
                  <div className="bg-indigo-50 p-6 rounded-lg mb-4">
                    <p className="mb-4">Advanced exercise that mimics the single-leg takeoff used in basketball dunking.</p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Lateral Bounds</h4>
                        <p className="text-sm">Side-to-side jumping for lateral power and stability</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Forward Bounds</h4>
                        <p className="text-sm">Sequential single-leg jumps for distance and height</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Alternating Bounds</h4>
                        <p className="text-sm">Left-right-left pattern for coordination and power</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Training Schedule</h2>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Beginner (Weeks 1-4)</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Box jumps: 3x6</li>
                          <li>Jump squats: 3x10</li>
                          <li>Broad jumps: 3x5</li>
                          <li>2-3 times per week</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Advanced (Weeks 5-8)</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Add depth jumps: 3x5</li>
                          <li>Include tuck jumps: 3x8</li>
                          <li>Add single-leg bounds: 3x6</li>
                          <li>3-4 times per week</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
                  <p className="mb-4">
                    Use these exercises consistently for 4-6 weeks and test your vertical jump improvement.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Test Your Jump Height
                    </Link>
                    <Link to="/blog/vertical-jump-workout" className="bg-white text-orange-600 px-6 py-2 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors">
                      Full Workout Plan
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

export default BestVerticalJumpExercises;
