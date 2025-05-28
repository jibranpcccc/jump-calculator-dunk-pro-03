
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Check, AlertTriangle, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BasketballDunkTips = () => {
  const dunkTypes = [
    {
      name: "Two-Handed Dunk",
      difficulty: "Beginner",
      description: "The safest and most reliable dunk for beginners. Use both hands for maximum control and security.",
      tips: ["Approach at moderate speed", "Jump off both feet for stability", "Use both hands for ball security", "Focus on getting ball clearly over rim"],
      verticalNeeded: "24-28 inches (average height)"
    },
    {
      name: "One-Handed Dunk",
      difficulty: "Intermediate", 
      description: "More athletic looking but requires better timing, hand strength, and ball control.",
      tips: ["Palm the ball securely", "Perfect your timing and approach", "Drive with your off-hand for momentum", "Follow through forcefully"],
      verticalNeeded: "26-30 inches (average height)"
    },
    {
      name: "Windmill Dunk",
      difficulty: "Advanced",
      description: "Flashy dunk that requires exceptional athleticism, timing, and shoulder flexibility.",
      tips: ["Master basic dunks first", "Build shoulder and core flexibility", "Practice the motion slowly", "Requires significant hang time"],
      verticalNeeded: "32+ inches (exceptional athleticism)"
    }
  ];

  const techniques = [
    {
      title: "Approach Technique",
      icon: <Target className="h-6 w-6 text-orange-600" />,
      points: [
        "Take 2-3 controlled steps for optimal momentum",
        "Plant your takeoff foot firmly and decisively", 
        "Keep your eyes focused on the back of the rim",
        "Use your arms for upward momentum (swing up, not out)"
      ]
    },
    {
      title: "Takeoff Mechanics", 
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      points: [
        "Jump off one or both feet (practice both styles)",
        "Drive your knee upward explosively for maximum height",
        "Keep your core tight throughout the entire movement",
        "Time your jump to peak exactly at rim level"
      ]
    },
    {
      title: "Ball Control",
      icon: <Users className="h-6 w-6 text-orange-600" />,
      points: [
        "Secure grip with fingertips, not palm (if possible)",
        "Keep ball close to your body during approach",
        "Extend fully at the peak of your jump",
        "Follow through after releasing the ball downward"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Poor Timing",
      description: "Jumping too early or too late affects your ability to reach peak height at the rim.",
      solution: "Practice approach without a ball first. Count your steps and practice consistent timing."
    },
    {
      mistake: "Weak Grip",
      description: "Not securing the ball properly can lead to failed dunks and potential injury.",
      solution: "Strengthen your hands and wrists. Practice palming the ball or use two hands if you can't palm it."
    },
    {
      mistake: "Rushing the Approach",
      description: "Moving too fast can throw off your timing and jumping mechanics.",
      solution: "Focus on controlled acceleration. Speed isn't as important as proper timing and technique."
    },
    {
      mistake: "Neglecting Safety",
      description: "Not warming up properly or attempting dunks beyond your ability increases injury risk.",
      solution: "Always warm up thoroughly. Progress gradually and know your limits."
    },
    {
      mistake: "Wrong Takeoff",
      description: "Using the wrong foot or poor plant mechanics reduces your maximum jump height.",
      solution: "Practice takeoff mechanics regularly. Find your strongest jumping style (one or two feet)."
    },
    {
      mistake: "Lack of Practice",
      description: "Expecting to dunk without building the necessary strength and technique foundation.",
      solution: "Start with rim touching, then hanging, then dunking on lower rims before attempting 10-foot dunks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Basketball Dunk Tips – How to Improve Your Dunking</title>
        <meta name="description" content="Learn how to dunk and improve your dunking skills. Tips on technique, training, and overcoming common challenges (even for shorter players). Get better at dunking with expert advice and our dunk calculator tool." />
        <meta name="keywords" content="dunking tips, how to dunk a basketball, slam dunk tips, dunk technique, dunk for beginners, basketball dunk guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Basketball Dunk Tips – How to Improve Your Dunking" />
        <meta property="og:description" content="Master the art of dunking with proper technique, timing, and practice. Learn from beginner basics to advanced moves." />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
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
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-01"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
              <Link to="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-orange-600 font-medium">Dunk Tips</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Basketball Dunk Tips</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Basketball Dunk Tips & Techniques
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Master the art of dunking with proper technique, timing, and practice. Learn from beginner basics to advanced moves.
              </p>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1546615235-5b71c37b8bf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Step-by-step dunk technique illustration – approach, jump, and dunk execution"
                  className="rounded-lg shadow-lg mx-auto max-w-2xl w-full h-64 object-cover"
                  loading="eager"
                />
              </div>
              <Link to="/">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Check If You Can Dunk
                </Button>
              </Link>
            </div>

            {/* Dunk Types */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Dunks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dunkTypes.map((dunk, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{dunk.name}</CardTitle>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          dunk.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          dunk.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {dunk.difficulty}
                        </span>
                      </div>
                      <CardDescription className="text-sm font-medium text-orange-600">
                        {dunk.verticalNeeded}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-700 mb-4 flex-1">{dunk.description}</p>
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
              <div className="mb-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1587090951262-82494ba13159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Basketball player performing proper dunk approach and takeoff technique"
                  className="rounded-lg shadow-md mx-auto max-w-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {techniques.map((technique, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        {technique.icon}
                        <CardTitle className="text-xl">{technique.title}</CardTitle>
                      </div>
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
                    {commonMistakes.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="h-5 w-5 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-1">{item.mistake}</h3>
                            <p className="text-red-100 text-sm mb-2">{item.description}</p>
                            <p className="text-white text-sm font-medium">Solution: {item.solution}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Practice Progression */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Progression</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center bg-gradient-to-b from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                    <h3 className="font-semibold mb-2 text-green-900">Touch the Rim</h3>
                    <p className="text-sm text-green-700">Start by just touching the rim with your fingertips consistently</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-b from-yellow-50 to-yellow-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                    <h3 className="font-semibold mb-2 text-yellow-900">Grab the Rim</h3>
                    <p className="text-sm text-yellow-700">Progress to grabbing and hanging from the rim safely</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-b from-orange-50 to-orange-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                    <h3 className="font-semibold mb-2 text-orange-900">Ball Over Rim</h3>
                    <p className="text-sm text-orange-700">Practice getting the ball above rim level without dunking</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-b from-red-50 to-red-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                    <h3 className="font-semibold mb-2 text-red-900">Full Dunk</h3>
                    <p className="text-sm text-red-700">Complete the dunk with proper form and control</p>
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
                    Use our calculator to see if you're ready to start practicing these techniques, or find out how much vertical jump you need to develop.
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
        </main>
      </div>
    </>
  );
};

export default BasketballDunkTips;
