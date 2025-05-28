
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Check, AlertTriangle, Target, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HowToDunkBeginners = () => {
  const steps = [
    {
      step: 1,
      title: "Assess Your Current Ability",
      description: "Measure your height, standing reach, and current vertical jump to understand where you stand.",
      details: [
        "Use our dunk calculator to see required vertical",
        "Test your current maximum vertical jump",
        "Measure your standing reach accurately",
        "Set realistic timeline based on gap"
      ]
    },
    {
      step: 2,
      title: "Build Your Foundation",
      description: "Develop the strength and conditioning needed for explosive jumping.",
      details: [
        "Focus on leg strength exercises",
        "Improve overall conditioning",
        "Work on flexibility and mobility",
        "Master basic jumping mechanics"
      ]
    },
    {
      step: 3,
      title: "Practice Approach Technique",
      description: "Learn the proper steps and timing for your dunking approach.",
      details: [
        "Start with 2-3 step approach",
        "Practice consistent footwork",
        "Time your jump at the right moment",
        "Use proper arm swing for momentum"
      ]
    },
    {
      step: 4,
      title: "Master Ball Control",
      description: "Learn how to securely handle the ball during your dunk attempt.",
      details: [
        "Practice palming if possible",
        "Use two-handed grip if needed",
        "Work on ball security during approach",
        "Practice with smaller balls first"
      ]
    },
    {
      step: 5,
      title: "Progress Gradually",
      description: "Start with lower rims and gradually work up to regulation height.",
      details: [
        "Begin with 8-9 foot rims if available",
        "Practice rim touching first",
        "Progress to rim hanging",
        "Finally attempt full dunks"
      ]
    }
  ];

  const dunkTypes = [
    {
      name: "Two-Handed Dunk",
      difficulty: "Easiest",
      description: "Most secure and beginner-friendly dunk style.",
      tips: ["Use both hands for control", "Approach with moderate speed", "Focus on getting ball clearly over rim"]
    },
    {
      name: "One-Handed Dunk",
      difficulty: "Moderate",
      description: "Classic slam dunk requiring good ball control.",
      tips: ["Palm the ball securely", "Perfect your timing", "Drive with opposite arm for momentum"]
    },
    {
      name: "Tomahawk Dunk",
      difficulty: "Advanced",
      description: "Powerful overhead dunk for experienced players.",
      tips: ["Requires excellent vertical", "Bring ball behind head", "Slam down with authority"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Dunk a Basketball – Step-by-Step Beginner's Guide</title>
        <meta name="description" content="Learn how to dunk a basketball with this complete beginner's guide. Step-by-step instructions, technique tips, and training progression to achieve your first slam dunk." />
        <meta name="keywords" content="how to dunk a basketball, dunk for beginners, slam dunk tutorial, learn to dunk, dunk technique guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Dunk a Basketball – Step-by-Step Beginner's Guide" />
        <meta property="og:description" content="Master the art of dunking with this comprehensive beginner's guide. From technique to training, learn everything you need for your first slam dunk." />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Dunk a Basketball: Step-by-Step Guide for Beginners",
            "description": "Complete beginner's guide to learning how to dunk a basketball, including technique, training, and progression steps.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "datePublished": "2024-11-28",
            "dateModified": "2024-11-28"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you have to palm the basketball to dunk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not necessarily. Many players use a two-handed dunk or control the ball on the way up without fully palming it. Two-handed dunks are often easier for beginners."
                }
              },
              {
                "@type": "Question",
                "name": "What is the easiest dunk to start with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A basic two-handed dunk is typically easiest for beginners. It provides the most control and security when learning proper technique."
                }
              },
              {
                "@type": "Question",
                "name": "How much vertical jump do I need to dunk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your height and reach, but most players need around 28-32 inches of vertical jump to dunk on a 10-foot rim. Use our dunk calculator for your specific requirements."
                }
              }
            ]
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
                <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link to="/blog" className="hover:text-orange-600">Blog</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">How to Dunk for Beginners</li>
              </ol>
            </nav>

            <article>
              <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to Dunk a Basketball: Beginner's Guide
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Learn how to dunk a basketball with this comprehensive step-by-step guide. From building the required vertical jump to mastering proper technique, here's everything you need for your first slam dunk.
                </p>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1546615235-5b71c37b8bf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Basketball player demonstrating proper dunking technique step by step"
                    className="rounded-lg shadow-lg mx-auto max-w-2xl w-full h-64 object-cover"
                    loading="eager"
                  />
                </div>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding the Requirements to Dunk</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="h-6 w-6 text-orange-600" />
                        <span>Physical Prerequisites</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">Sufficient vertical jump height (typically 28-32 inches for average height)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">Good leg strength and explosive power</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">Proper coordination and timing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">Hand size or grip strength for ball control</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-900">Calculate Your Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-800 mb-4">
                        Every player has different requirements based on their height and reach. Use our dunk calculator to find out exactly how much vertical jump you need.
                      </p>
                      <Link to="/" className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                        <Calculator className="inline h-4 w-4 mr-2" />
                        Check Your Requirements
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">5-Step Process to Learn Dunking</h2>
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <CardDescription className="text-gray-600">{step.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Dunking Technique Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Play className="h-6 w-6 text-orange-600" />
                        <span>Approach</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Take 2-3 controlled steps</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Build momentum gradually</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Keep eyes on back of rim</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Control the basketball securely</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="h-6 w-6 text-orange-600" />
                        <span>Takeoff</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Plant takeoff foot firmly</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Drive knee upward explosively</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Swing arms upward for momentum</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Time jump to peak at rim level</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Check className="h-6 w-6 text-orange-600" />
                        <span>Execution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Extend fully at peak height</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Get ball 6+ inches over rim</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Follow through downward</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">Land safely and controlled</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Dunks for Beginners</h2>
                <div className="space-y-6">
                  {dunkTypes.map((dunk, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{dunk.name}</CardTitle>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            dunk.difficulty === 'Easiest' ? 'bg-green-100 text-green-800' :
                            dunk.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {dunk.difficulty}
                          </span>
                        </div>
                        <CardDescription>{dunk.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {dunk.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-2">
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-yellow-900">
                      <AlertTriangle className="h-6 w-6" />
                      <span>Common Beginner Mistakes to Avoid</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Poor Timing</h4>
                        <p className="text-yellow-800 text-sm mb-3">Jumping too early or too late reduces your effective height at the rim.</p>
                        <p className="text-yellow-900 text-sm font-medium">Solution: Practice approach without ball first to master timing.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Inadequate Ball Control</h4>
                        <p className="text-yellow-800 text-sm mb-3">Losing the ball during approach or jump ruins the dunk attempt.</p>
                        <p className="text-yellow-900 text-sm font-medium">Solution: Practice with two hands or improve grip strength.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Rushing the Approach</h4>
                        <p className="text-yellow-800 text-sm mb-3">Going too fast can throw off timing and reduce jump effectiveness.</p>
                        <p className="text-yellow-900 text-sm font-medium">Solution: Focus on controlled acceleration and consistent steps.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Neglecting Safety</h4>
                        <p className="text-yellow-800 text-sm mb-3">Not warming up or attempting beyond ability increases injury risk.</p>
                        <p className="text-yellow-900 text-sm font-medium">Solution: Always warm up and progress gradually.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Progression Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="text-center bg-gradient-to-b from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">Week 1-2</div>
                      <h3 className="font-semibold mb-2 text-green-900">Touch the Rim</h3>
                      <p className="text-sm text-green-700">Focus on consistently touching the rim with your fingertips</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-gradient-to-b from-yellow-50 to-yellow-100">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">Week 3-4</div>
                      <h3 className="font-semibold mb-2 text-yellow-900">Grab the Rim</h3>
                      <p className="text-sm text-yellow-700">Progress to grabbing and briefly hanging from the rim</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-gradient-to-b from-orange-50 to-orange-100">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-orange-600 mb-2">Week 5-6</div>
                      <h3 className="font-semibold mb-2 text-orange-900">Ball Over Rim</h3>
                      <p className="text-sm text-orange-700">Practice getting the ball above rim level without dunking</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-gradient-to-b from-red-50 to-red-100">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">Week 7+</div>
                      <h3 className="font-semibold mb-2 text-red-900">Full Dunk</h3>
                      <p className="text-sm text-red-700">Complete your first dunk with proper form and control</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Do you have to palm the basketball to dunk?</h3>
                      <p className="text-gray-700">Not necessarily. Many players use a two-handed dunk or control the ball on the way up without fully palming it. Two-handed dunks are often easier for beginners and provide more security.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What is the easiest dunk to start with?</h3>
                      <p className="text-gray-700">A basic two-handed dunk is typically easiest for beginners. It provides the most control and security when learning proper technique. Practice on lower rims first if possible.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">How much vertical jump do I need to dunk?</h3>
                      <p className="text-gray-700">It depends on your height and reach, but most players need around 28-32 inches of vertical jump to dunk on a 10-foot rim. Use our dunk calculator for your specific requirements.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dunking Journey?</h2>
                    <p className="text-lg mb-6">
                      Follow this guide step by step, be patient with your progress, and remember that consistency is key. Your first dunk is closer than you think!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Calculate Your Goal
                      </Link>
                      <Link to="/blog/increase-vertical-jump-exercises" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                        Training Exercises
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default HowToDunkBeginners;
