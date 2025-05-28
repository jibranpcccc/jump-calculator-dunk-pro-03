
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Clock, Ruler, CheckCircle, AlertTriangle } from "lucide-react";

const HowToMeasureVerticalJump = () => {
  return (
    <>
      <Helmet>
        <title>How to Measure Your Vertical Jump at Home - DIY Methods</title>
        <meta name="description" content="Learn accurate DIY methods to measure your vertical jump at home using simple household items. Step-by-step guide with tips for precise measurements." />
        <meta name="keywords" content="measure vertical jump at home, vertical jump test DIY, how to measure vertical leap, vertical jump measurement" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/how-to-measure-vertical-jump" />
        
        <meta property="og:title" content="How to Measure Your Vertical Jump at Home - DIY Methods" />
        <meta property="og:description" content="Learn accurate DIY methods to measure your vertical jump at home using simple household items. Step-by-step guide with tips for precise measurements." />
        <meta property="og:url" content="https://dunkcalculator.com/blog/how-to-measure-vertical-jump" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Measure Your Vertical Jump at Home - DIY Methods",
            "description": "Learn accurate DIY methods to measure your vertical jump at home using simple household items. Step-by-step guide with tips for precise measurements.",
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
                  <Ruler className="h-5 w-5" />
                  <span className="text-sm font-medium">Testing Guide</span>
                </div>
                <CardTitle className="text-3xl mb-4">How to Measure Your Vertical Jump at Home</CardTitle>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>DIY Methods</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Measuring your vertical jump accurately is crucial for tracking progress. Once you know your current jump height, use our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> to see if you can dunk and set training goals.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Method 1: The Wall Test (Most Accurate)</h2>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">What You'll Need:</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>A wall with at least 12 feet of height</li>
                      <li>Measuring tape or ruler</li>
                      <li>Chalk or washable marker</li>
                      <li>Step stool or ladder</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-4">Step-by-Step Instructions:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold">Measure Standing Reach</h4>
                          <p className="text-gray-700">Stand flat-footed against the wall, reach up with your dominant hand, and mark the highest point you can touch.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold">Prepare for Jump</h4>
                          <p className="text-gray-700">Step back 6 inches from the wall. Chalk your fingertips for better marking.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold">Execute Jump</h4>
                          <p className="text-gray-700">Jump straight up and touch the wall at your highest point. Use a counter-movement (slight squat) for maximum height.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h4 className="font-semibold">Measure Difference</h4>
                          <p className="text-gray-700">Measure the distance between your standing reach mark and your jump mark. This is your vertical jump height.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Method 2: The Sticky Note Method</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">What You'll Need:</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Sticky notes or tape strips</li>
                      <li>A high wall or backboard</li>
                      <li>Measuring tape</li>
                    </ul>
                    
                    <p className="mb-4">
                      Place sticky notes on the wall at different heights. Jump and try to touch the highest note possible. This method is less precise but good for quick estimates.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Method 3: The Basketball Rim Method</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="mb-4">
                      If you have access to a basketball court, this is a practical measurement method:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Measure your standing reach to the rim (rim is 10 feet high)</li>
                      <li>Jump and see how high above the rim you can reach</li>
                      <li>Calculate: Your reach above rim + (10 feet - standing reach) = vertical jump</li>
                      <li>This method helps you understand your dunking potential</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Tips for Accurate Measurements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Do's</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Warm up before testing</li>
                        <li>Take multiple attempts (3-5 jumps)</li>
                        <li>Use your best attempt</li>
                        <li>Keep consistent form</li>
                        <li>Rest between attempts</li>
                        <li>Test at the same time of day</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Don'ts</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Don't test when tired</li>
                        <li>Don't rush measurements</li>
                        <li>Don't use running starts</li>
                        <li>Don't lean forward when jumping</li>
                        <li>Don't test on slippery surfaces</li>
                        <li>Don't ignore safety precautions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Common Measurement Mistakes</h2>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-red-800">Inaccurate Standing Reach</h4>
                        <p className="text-red-700 text-sm">Make sure you're truly flat-footed and reaching as high as possible without lifting your heels.</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-red-800">Using Running Start</h4>
                        <p className="text-red-700 text-sm">Vertical jump should be measured from a stationary position, not with momentum.</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-red-800">Poor Measurement Tool</h4>
                        <p className="text-red-700 text-sm">Use a proper measuring tape, not estimated measurements.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Understanding Your Results</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Vertical Jump Benchmarks:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Average Ranges:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Beginner: 15-20 inches</li>
                          <li>Average athlete: 20-24 inches</li>
                          <li>Good athlete: 24-28 inches</li>
                          <li>Excellent athlete: 28+ inches</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Dunking Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>6'0": ~30 inches needed</li>
                          <li>5'10": ~34 inches needed</li>
                          <li>5'8": ~38 inches needed</li>
                          <li>5'6": ~42 inches needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <p className="mb-4">
                      Keep a training log to track your vertical jump improvements:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Test every 2-4 weeks (not more frequently)</li>
                      <li>Record the date, time, and measurement</li>
                      <li>Note any training changes or factors affecting performance</li>
                      <li>Take photos/videos for form analysis</li>
                      <li>Celebrate small improvements - even 1 inch matters!</li>
                    </ul>
                  </div>
                </section>

                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Ready to Test Your Dunking Potential?</h3>
                  <p className="mb-4">
                    Now that you know how to measure your vertical jump, test your current ability and see how close you are to dunking!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Use Dunk Calculator
                    </Link>
                    <Link to="/blog/increase-vertical-jump-exercises" className="bg-white text-orange-600 px-6 py-2 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors">
                      Improve Your Jump
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

export default HowToMeasureVerticalJump;
