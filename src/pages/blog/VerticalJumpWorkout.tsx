
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Clock, Target, TrendingUp, Users } from "lucide-react";

const VerticalJumpWorkout = () => {
  return (
    <>
      <Helmet>
        <title>Complete Vertical Jump Workout Plan | 8-Week Training Program</title>
        <meta name="description" content="Follow our complete 8-week vertical jump workout plan. Includes plyometric exercises, strength training, and recovery tips to maximize your jumping ability." />
        <meta name="keywords" content="vertical jump workout, plyometric training, jump higher workout, basketball training program, vertical leap exercises" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/vertical-jump-workout" />
        
        <meta property="og:title" content="Complete Vertical Jump Workout Plan | 8-Week Training Program" />
        <meta property="og:description" content="Follow our complete 8-week vertical jump workout plan. Includes plyometric exercises, strength training, and recovery tips to maximize your jumping ability." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/vertical-jump-workout" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Vertical Jump Workout Plan | 8-Week Training Program",
            "description": "Follow our complete 8-week vertical jump workout plan. Includes plyometric exercises, strength training, and recovery tips to maximize your jumping ability.",
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
                  <span className="text-sm font-medium">Training Guide</span>
                </div>
                <CardTitle className="text-3xl mb-4">Complete Vertical Jump Workout Plan</CardTitle>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>8-week program</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>All skill levels</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  This comprehensive 8-week vertical jump workout plan is designed to help basketball players increase their jumping ability through proven training methods. Test your current ability with our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> before starting.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Week 1-2: Foundation Building</h2>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-3">Monday & Thursday - Plyometrics</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Box jumps: 3 sets of 8 reps</li>
                      <li>Jump squats: 3 sets of 12 reps</li>
                      <li>Broad jumps: 3 sets of 6 reps</li>
                      <li>Single-leg hops: 3 sets of 10 each leg</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Tuesday & Friday - Strength Training</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Squats: 4 sets of 8-10 reps</li>
                      <li>Deadlifts: 3 sets of 6-8 reps</li>
                      <li>Calf raises: 4 sets of 15 reps</li>
                      <li>Lunges: 3 sets of 10 each leg</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Week 3-4: Intensity Increase</h2>
                  <p className="mb-4">
                    Build on the foundation by increasing intensity and adding more complex movements. Focus on explosive power development.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">New Exercises Added:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Depth jumps: 3 sets of 5 reps</li>
                      <li>Tuck jumps: 3 sets of 8 reps</li>
                      <li>Bulgarian split squats: 3 sets of 8 each leg</li>
                      <li>Single-leg box jumps: 3 sets of 5 each leg</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Week 5-6: Power Development</h2>
                  <p className="mb-4">
                    Focus on maximum power output and sport-specific movements. This phase prepares you for peak performance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Advanced Plyometrics</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reactive box jumps</li>
                        <li>• Lateral bounds</li>
                        <li>• Medicine ball slams</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Power Lifting</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Power cleans</li>
                        <li>• Jump squats with weight</li>
                        <li>• Explosive deadlifts</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Week 7-8: Peak Performance</h2>
                  <p className="mb-4">
                    Maximum intensity training to reach your peak jumping ability. Test your progress regularly.
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Peak Week Protocol</h3>
                    <p className="mb-3">Focus on maximum effort jumps with full recovery between sets.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maximum height box jumps: 5 sets of 3 reps</li>
                      <li>Weighted jump squats: 4 sets of 5 reps</li>
                      <li>Depth jumps to max height: 4 sets of 3 reps</li>
                      <li>Basketball-specific jumping drills</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Recovery and Nutrition</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Recovery Tips</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Get 7-9 hours of sleep daily</li>
                        <li>Take rest days seriously</li>
                        <li>Use foam rolling and stretching</li>
                        <li>Ice baths for recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Nutrition Guidelines</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Eat protein within 30 minutes post-workout</li>
                        <li>Stay hydrated throughout the day</li>
                        <li>Include complex carbohydrates</li>
                        <li>Take appropriate supplements</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Tracking Your Progress</h2>
                  <p className="mb-4">
                    Use our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> to track your vertical jump improvements throughout the program. Test every 2 weeks and adjust training intensity accordingly.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Progress Milestones</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Week 2: 2-4 inch improvement expected</li>
                      <li>Week 4: 4-6 inch improvement expected</li>
                      <li>Week 6: 6-8 inch improvement expected</li>
                      <li>Week 8: 8-12 inch improvement possible</li>
                    </ul>
                  </div>
                </section>

                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
                  <p className="mb-4">
                    Before beginning this workout plan, test your current jumping ability and see if you can already dunk.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Test Your Dunk Ability
                    </Link>
                    <Link to="/vertical-jump-training" className="bg-white text-orange-600 px-6 py-2 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors">
                      More Training Tips
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

export default VerticalJumpWorkout;
