
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, BarChart3, Target, Zap, TrendingUp, Users, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [height, setHeight] = useState("");
  const [reach, setReach] = useState("");
  const [vertical, setVertical] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [touchRimResult, setTouchRimResult] = useState<string | null>(null);
  const [windmillResult, setWindmillResult] = useState<string | null>(null);

  const calculateDunk = () => {
    const heightInches = parseFloat(height);
    const reachInches = parseFloat(reach);
    const verticalInches = parseFloat(vertical);

    if (!heightInches || !reachInches || !verticalInches) {
      setResult("Please fill in all fields with valid numbers.");
      setTouchRimResult(null);
      setWindmillResult(null);
      return;
    }

    const totalReach = reachInches + verticalInches;
    const rimHeight = 120; // 10 feet = 120 inches
    const dunkClearance = 6; // Extra inches needed to comfortably dunk
    const windmillClearance = 12; // Extra inches for advanced dunks

    // Calculate required verticals
    const dunkRequired = (rimHeight + dunkClearance) - reachInches;
    const touchRequired = rimHeight - reachInches;
    const windmillRequired = (rimHeight + windmillClearance) - reachInches;

    // Dunk result
    if (totalReach >= rimHeight + dunkClearance) {
      setResult(`🏀 YES! You can dunk! With a ${verticalInches}" vertical and ${reachInches}" reach, your total reach is ${totalReach}" which exceeds the ${rimHeight + dunkClearance}" needed to dunk comfortably.`);
    } else {
      const needed = dunkRequired - verticalInches;
      setResult(`Not quite yet. You need ${needed.toFixed(1)}" more vertical jump to dunk comfortably. Your current total reach is ${totalReach}", but you need ${rimHeight + dunkClearance}".`);
    }

    // Touch rim result
    if (reachInches + verticalInches >= rimHeight) {
      setTouchRimResult(`✋ You can touch the rim! (Need ${touchRequired}" vertical, you have ${verticalInches}")`);
    } else {
      const touchNeeded = touchRequired - verticalInches;
      setTouchRimResult(`You need ${touchNeeded.toFixed(1)}" more to touch the rim.`);
    }

    // Windmill dunk result
    if (reachInches + verticalInches >= rimHeight + windmillClearance) {
      setWindmillResult(`🌪️ You could even do windmill dunks! (Need ${windmillRequired}" vertical, you have ${verticalInches}")`);
    } else {
      const windmillNeeded = windmillRequired - verticalInches;
      setWindmillResult(`For windmill dunks, you'd need ${windmillNeeded.toFixed(1)}" more vertical.`);
    }
  };

  const estimateReach = () => {
    const heightInches = parseFloat(height);
    if (heightInches) {
      const estimatedReach = Math.round(heightInches * 1.33);
      setReach(estimatedReach.toString());
    }
  };

  return (
    <>
      <Helmet>
        <title>Dunk Calculator – Calculate Your Vertical Jump to Dunk a Basketball</title>
        <meta name="description" content="Try our free dunk calculator to find out how high you need to jump to slam dunk. Enter your height & reach to calculate your required vertical leap, and get tips to improve your jump." />
        <meta name="keywords" content="dunk calculator, basketball dunk calculator, vertical jump calculator, slam dunk tool, calculate jump height, can you dunk test" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dunk Calculator – Calculate Your Vertical Jump to Dunk a Basketball" />
        <meta property="og:description" content="Try our free dunk calculator to find out how high you need to jump to slam dunk. Enter your height & reach to calculate your required vertical leap." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com/" />
        
        <link rel="canonical" href="https://dunkcalculator.com/" />
        
        {/* Enhanced Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Dunk Calculator",
            "url": "https://dunkcalculator.com/",
            "applicationCategory": "Sports",
            "operatingSystem": "All",
            "description": "Free interactive basketball dunk calculator that determines if you can dunk based on your height, standing reach, and vertical jump measurements.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator",
              "url": "https://dunkcalculator.com/"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free to use dunk calculation tool"
            },
            "featureList": [
              "Calculate dunk ability",
              "Vertical jump analysis", 
              "Basketball training tips",
              "Reach estimation tool"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header />

        <main>
          {/* Enhanced Hero Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free Dunk Calculator – Can You Dunk a Basketball?
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Use our free basketball dunk calculator to instantly determine if your vertical jump is high enough to slam dunk on a 10-foot rim. 
                Enter your height, standing reach, and vertical jump to get personalized results, training recommendations, and tips to improve your dunking ability.
              </p>
              
              <div className="flex justify-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Basketball player performing slam dunk during vertical jump training session"
                  className="rounded-lg shadow-lg max-w-md w-full h-64 object-cover"
                  loading="eager"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10ft</div>
                  <div className="text-sm text-gray-600">Standard Rim Height</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">30"</div>
                  <div className="text-sm text-gray-600">Average Dunk Vertical</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Free</div>
                  <div className="text-sm text-gray-600">No Registration</div>
                </div>
              </div>
            </div>

            {/* Enhanced Calculator Tool */}
            <Card id="calculator" className="max-w-2xl mx-auto mb-16 shadow-lg border-2 border-orange-100">
              <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Basketball Dunk Calculator
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Find out if you can dunk on a standard 10-foot basketball rim
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="height" className="text-base font-semibold">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="72 (6 feet)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      aria-describedby="height-help"
                      className="mt-2"
                    />
                    <small id="height-help" className="text-xs text-gray-500 mt-1 block">Example: 72 inches = 6 feet tall</small>
                  </div>
                  <div>
                    <Label htmlFor="reach" className="text-base font-semibold">Standing Reach (inches)</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="reach"
                        type="number"
                        placeholder="96"
                        value={reach}
                        onChange={(e) => setReach(e.target.value)}
                        aria-describedby="reach-help"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={estimateReach}
                        className="whitespace-nowrap"
                      >
                        Auto-Estimate
                      </Button>
                    </div>
                    <small id="reach-help" className="text-xs text-gray-500 mt-1 block">How high you can reach standing flat-footed</small>
                  </div>
                  <div>
                    <Label htmlFor="vertical" className="text-base font-semibold">Vertical Jump (inches)</Label>
                    <Input
                      id="vertical"
                      type="number"
                      placeholder="24"
                      value={vertical}
                      onChange={(e) => setVertical(e.target.value)}
                      aria-describedby="vertical-help"
                      className="mt-2"
                    />
                    <small id="vertical-help" className="text-xs text-gray-500 mt-1 block">How high you can jump from standing position</small>
                  </div>
                </div>
                
                <Button onClick={calculateDunk} className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Dunking Ability
                </Button>
                
                {/* Results Section */}
                {(result || touchRimResult || windmillResult) && (
                  <div className="space-y-4 mt-6" aria-live="polite">
                    {result && (
                      <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-semibold text-blue-900 mb-2 text-lg">🏀 Dunk Test Result:</h3>
                        <p className="text-blue-800">{result}</p>
                      </div>
                    )}
                    {touchRimResult && (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><strong>Rim Touch:</strong> {touchRimResult}</p>
                      </div>
                    )}
                    {windmillResult && (
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-purple-700"><strong>Advanced Dunks:</strong> {windmillResult}</p>
                      </div>
                    )}
                    
                    {/* Call to Action */}
                    <div className="text-center pt-6 border-t">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Want to improve your vertical jump and dunking ability?
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/vertical-jump-training">
                          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Training Exercises
                          </Button>
                        </Link>
                        <Link to="/basketball-dunk-tips">
                          <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                            <Target className="mr-2 h-4 w-4" />
                            Dunk Techniques
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Enhanced Benefits Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center h-full">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle>Instant Accurate Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get immediate feedback on your dunking ability with our scientifically-based calculator. 
                    Accounts for height, reach, and vertical jump with rim clearance calculations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader>
                  <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle>Personalized Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get customized recommendations based on your results. Whether you need 2 inches or 12 inches more, 
                    we'll guide you to the right <Link to="/vertical-jump-training" className="text-orange-600 hover:underline">training program</Link>.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardHeader>
                  <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle>Track Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Return regularly to test your improving vertical jump. See how your training is paying off 
                    as you get closer to that first dunk with our progress tracking features.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* How It Works Section */}
            <section className="mb-16">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How the Dunk Calculator Works</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <h3 className="font-semibold">Standing Reach Calculation</h3>
                            <p className="text-gray-600 text-sm">We use your height and estimate your standing reach (how high you can reach without jumping)</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <h3 className="font-semibold">Rim Height + Clearance</h3>
                            <p className="text-gray-600 text-sm">Standard rim is 120" (10 feet). We add 6" clearance so you can actually dunk, not just touch</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <h3 className="font-semibold">Simple Math</h3>
                            <p className="text-gray-600 text-sm">Required Vertical = (126" total height needed) - (your standing reach)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Diagram showing required jump height to dunk on a 10-ft basketball rim"
                        className="rounded-lg shadow-md max-w-full h-64 object-cover mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Dunking Questions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Can you dunk with a 30-inch vertical?</h3>
                      <p className="text-gray-600 text-sm mb-4">It depends on your height and standing reach. Generally, players 6'0" or taller with a 30-inch vertical can dunk.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">How tall do you need to be to dunk?</h3>
                      <p className="text-gray-600 text-sm mb-4">There's no minimum height. Players as short as 5'3" have dunked, though they needed exceptional verticals (40+ inches).</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">What's a good vertical jump for dunking?</h3>
                      <p className="text-gray-600 text-sm mb-4">A 30+ inch vertical is generally the benchmark for dunking on a 10-ft hoop for average heights.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">How do I measure my standing reach?</h3>
                      <p className="text-gray-600 text-sm mb-4">Stand flat against a wall and reach up as high as possible. Measure from floor to fingertips.</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <Link to="/faq">
                      <Button variant="outline">View All FAQ</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Enhanced CTA Section */}
            <section className="text-center bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg p-8 shadow-lg text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Improve Your Vertical Jump and Start Dunking?
              </h2>
              <p className="text-lg mb-6 text-orange-100">
                Join thousands of basketball players who have improved their vertical jump using our comprehensive training guides and dunk tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vertical-jump-training">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    View Training Programs
                  </Button>
                </Link>
                <Link to="/basketball-dunk-tips">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                    <Target className="mr-2 h-5 w-5" />
                    Learn Dunk Techniques
                  </Button>
                </Link>
              </div>
            </section>

            {/* Internal Linking Section */}
            <section className="mb-16">
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">More Basketball Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/blog" className="group">
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <Book className="h-12 w-12 text-orange-600 mb-4" />
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Training Blog</h3>
                        <p className="text-gray-600 text-sm mt-2">Read our latest articles on basketball training and vertical jump improvement</p>
                      </div>
                    </Link>
                    
                    <Link to="/blog/increase-vertical-jump-exercises" className="group">
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Jump Exercises</h3>
                        <p className="text-gray-600 text-sm mt-2">Specific exercises designed to increase your vertical jump height</p>
                      </div>
                    </Link>
                    
                    <Link to="/blog/how-to-dunk-beginners" className="group">
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <Users className="h-12 w-12 text-orange-600 mb-4" />
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Beginner's Guide</h3>
                        <p className="text-gray-600 text-sm mt-2">Complete guide for beginners learning how to dunk a basketball</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
