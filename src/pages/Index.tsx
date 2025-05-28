
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Users, Book, Check, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        <meta property="og:url" content="https://lovable.dev/" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Dunk Calculator",
            "url": "https://lovable.dev/",
            "applicationCategory": "Sports",
            "operatingSystem": "All",
            "description": "An interactive tool to calculate the vertical jump height you need to dunk a basketball on a 10-foot rim.",
            "author": {
              "@type": "Organization",
              "name": "LovableDev"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free to use dunk calculation tool"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
              <div className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Dunk Calculator – Find Out If You Can Dunk
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Use our free dunk calculator to instantly determine if your vertical jump is high enough to dunk a basketball. 
                Enter your height and standing reach to get personalized results and training recommendations.
              </p>
              <div className="flex justify-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Basketball player attempting a slam dunk during vertical jump practice"
                  className="rounded-lg shadow-lg max-w-md w-full h-64 object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Enhanced Calculator Tool */}
            <Card className="max-w-2xl mx-auto mb-16 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Can You Dunk? Use This Dunk Calculator</CardTitle>
                <CardDescription>
                  Enter your measurements below to find out if you can dunk a basketball on a standard 10-foot rim
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="72 (6 feet)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      aria-describedby="height-help"
                    />
                    <small id="height-help" className="text-xs text-gray-500">Example: 72 inches = 6 feet</small>
                  </div>
                  <div>
                    <Label htmlFor="reach">Standing Reach (inches)</Label>
                    <div className="flex gap-2">
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
                        Estimate
                      </Button>
                    </div>
                    <small id="reach-help" className="text-xs text-gray-500">Click "Estimate" if you don't know your reach</small>
                  </div>
                  <div>
                    <Label htmlFor="vertical">Vertical Jump (inches)</Label>
                    <Input
                      id="vertical"
                      type="number"
                      placeholder="24"
                      value={vertical}
                      onChange={(e) => setVertical(e.target.value)}
                      aria-describedby="vertical-help"
                    />
                    <small id="vertical-help" className="text-xs text-gray-500">How high you can jump from standing</small>
                  </div>
                </div>
                
                <Button onClick={calculateDunk} className="w-full bg-orange-600 hover:bg-orange-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate If You Can Dunk
                </Button>
                
                {(result || touchRimResult || windmillResult) && (
                  <div className="space-y-3" aria-live="polite">
                    {result && (
                      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <h3 className="font-semibold text-blue-900 mb-2">Dunk Result:</h3>
                        <p className="text-sm text-blue-800">{result}</p>
                      </div>
                    )}
                    {touchRimResult && (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">{touchRimResult}</p>
                      </div>
                    )}
                    {windmillResult && (
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-700">{windmillResult}</p>
                      </div>
                    )}
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Want to improve your vertical jump? Check out our training guides:
                      </p>
                      <div className="flex gap-2 justify-center">
                        <Link to="/vertical-jump-training">
                          <Button size="sm" variant="outline">Training Exercises</Button>
                        </Link>
                        <Link to="/basketball-dunk-tips">
                          <Button size="sm" variant="outline">Dunk Techniques</Button>
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

            {/* FAQ Preview Section */}
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

            {/* CTA Section */}
            <section className="text-center bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Improve Your Vertical Jump?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Explore our comprehensive training guides and dunk tips to take your game to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vertical-jump-training">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    View Training Programs
                  </Button>
                </Link>
                <Link to="/basketball-dunk-tips">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Learn Dunk Techniques
                  </Button>
                </Link>
              </div>
            </section>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Calculator className="h-6 w-6 text-orange-400" aria-hidden="true" />
                  <span className="font-bold">Dunk Calculator</span>
                </div>
                <p className="text-gray-400">
                  The ultimate tool for basketball players to test their dunking ability and improve their vertical jump.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Calculator</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white transition-colors">Dunk Calculator</Link></li>
                  <li><Link to="/faq" className="hover:text-white transition-colors">How It Works</Link></li>
                  <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Training</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/vertical-jump-training" className="hover:text-white transition-colors">Vertical Jump Training</Link></li>
                  <li><Link to="/basketball-dunk-tips" className="hover:text-white transition-colors">Dunk Tips & Techniques</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><a href="mailto:support@lovable.dev" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Dunk Calculator. All rights reserved. | 
                <Link to="/privacy-policy" className="hover:text-white ml-2">Privacy</Link> | 
                <Link to="/terms-of-use" className="hover:text-white ml-2">Terms</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
