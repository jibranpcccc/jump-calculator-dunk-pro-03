
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Book, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BasketballDunkTips = () => {
  const dunkTypes = [
    {
      name: "Two-Handed Dunk",
      difficulty: "Beginner",
      description: "The safest and most reliable dunk for beginners. Use both hands for maximum control.",
      tips: ["Approach at moderate speed", "Jump off both feet", "Use both hands for security"]
    },
    {
      name: "One-Handed Dunk",
      difficulty: "Intermediate", 
      description: "More athletic looking but requires better timing and hand strength.",
      tips: ["Palm the ball securely", "Time your approach", "Follow through forcefully"]
    },
    {
      name: "Windmill Dunk",
      difficulty: "Advanced",
      description: "Flashy dunk that requires exceptional athleticism and timing.",
      tips: ["Master basic dunks first", "Practice the motion slowly", "Build shoulder flexibility"]
    }
  ];

  const techniques = [
    {
      title: "Approach Technique",
      points: [
        "Take 2-3 steps for maximum momentum",
        "Plant your takeoff foot firmly", 
        "Keep your eyes on the rim",
        "Use your arms for upward momentum"
      ]
    },
    {
      title: "Takeoff Mechanics", 
      points: [
        "Jump off one or both feet depending on style",
        "Drive your knee upward explosively",
        "Keep your core tight throughout",
        "Time your jump to peak at the rim"
      ]
    },
    {
      title: "Ball Control",
      points: [
        "Secure grip with fingertips, not palm",
        "Keep ball close to your body on approach",
        "Extend fully at the peak of your jump",
        "Follow through after releasing the ball"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-orange-600" />
              <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
              <Link to="/basketball-dunk-tips" className="text-orange-600 font-medium">Dunk Tips</Link>
              <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
              <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Basketball Dunk Tips & Techniques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the art of dunking with proper technique, timing, and practice. Learn from beginner basics to advanced moves.
            </p>
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Check If You Can Dunk
              </Button>
            </Link>
          </div>

          {/* Dunk Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Dunks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dunkTypes.map((dunk, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{dunk.name}</CardTitle>
                    <CardDescription>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        dunk.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        dunk.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {dunk.difficulty}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700 mb-4">{dunk.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Tips:</h4>
                      <ul className="space-y-1">
                        {dunk.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technique Breakdown */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dunking Technique Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{technique.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {technique.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-500 to-pink-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Common Dunking Mistakes to Avoid</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">❌ Poor Timing</h3>
                      <p className="text-red-100">Jumping too early or too late affects your ability to reach peak height at the rim.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">❌ Weak Grip</h3>
                      <p className="text-red-100">Not securing the ball properly can lead to failed dunks and potential injury.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">❌ Rushing the Approach</h3>
                      <p className="text-red-100">Moving too fast can throw off your timing and jumping mechanics.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">❌ Neglecting Safety</h3>
                      <p className="text-red-100">Not warming up properly or attempting dunks beyond your ability increases injury risk.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">❌ Wrong Takeoff</h3>
                      <p className="text-red-100">Using the wrong foot or poor plant mechanics reduces your maximum jump height.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">❌ Lack of Practice</h3>
                      <p className="text-red-100">Expecting to dunk without building the necessary strength and technique foundation.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Practice Progression */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Progression</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">1</div>
                  <h3 className="font-semibold mb-2">Touch the Rim</h3>
                  <p className="text-sm text-gray-600">Start by just touching the rim with your fingertips</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">2</div>
                  <h3 className="font-semibold mb-2">Grab the Rim</h3>
                  <p className="text-sm text-gray-600">Progress to grabbing and hanging from the rim</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">3</div>
                  <h3 className="font-semibold mb-2">Ball Over Rim</h3>
                  <p className="text-sm text-gray-600">Practice getting the ball above rim level</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">4</div>
                  <h3 className="font-semibold mb-2">Full Dunk</h3>
                  <p className="text-sm text-gray-600">Complete the dunk with proper form and control</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Test Your Dunking Ability?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Use our calculator to see if you're ready to start practicing these techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Use Dunk Calculator
                    </Button>
                  </Link>
                  <Link to="/vertical-jump-training">
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                      Improve Your Vertical
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Basketball Dunk Tips & Techniques - Complete Guide",
          "description": "Learn proper dunking technique, avoid common mistakes, and progress safely from beginner to advanced dunking skills.",
          "author": {
            "@type": "Organization",
            "name": "Dunk Calculator"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dunk Calculator"
          }
        })}
      </script>
    </div>
  );
};

export default BasketballDunkTips;
