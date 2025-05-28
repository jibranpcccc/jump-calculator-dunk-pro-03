
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Check, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const IncreaseVerticalJumpExercises = () => {
  const exercises = [
    {
      name: "Box Jumps",
      type: "Plyometric",
      difficulty: "Beginner",
      description: "Jump onto a box or platform, focusing on explosive upward movement and soft landing.",
      benefits: ["Explosive power", "Landing mechanics", "Confidence building"],
      instructions: [
        "Start with a 12-18 inch box",
        "Jump up explosively, land softly",
        "Step down, don't jump down",
        "Focus on quality over quantity"
      ]
    },
    {
      name: "Depth Jumps",
      type: "Plyometric",
      difficulty: "Advanced",
      description: "Drop from a box and immediately jump as high as possible upon landing.",
      benefits: ["Reactive strength", "Stretch-shortening cycle", "Power development"],
      instructions: [
        "Drop from 12-24 inch box",
        "Land and immediately jump up",
        "Minimize ground contact time",
        "Use proper landing mechanics"
      ]
    },
    {
      name: "Jump Squats",
      type: "Plyometric",
      difficulty: "Beginner",
      description: "Explosive squat movement with maximum vertical jump at the top.",
      benefits: ["Full-body power", "Leg strength", "Jumping mechanics"],
      instructions: [
        "Start in squat position",
        "Jump up explosively",
        "Land softly in squat position",
        "Can add weight for progression"
      ]
    },
    {
      name: "Barbell Squats",
      type: "Strength",
      difficulty: "Intermediate",
      description: "Fundamental strength exercise for building leg power and muscle mass.",
      benefits: ["Leg strength", "Muscle mass", "Power foundation"],
      instructions: [
        "Keep feet shoulder-width apart",
        "Descend until thighs parallel",
        "Drive through heels to stand",
        "Maintain proper back alignment"
      ]
    },
    {
      name: "Single-Leg Bounds",
      type: "Plyometric",
      difficulty: "Intermediate",
      description: "Explosive single-leg jumping exercise for unilateral power development.",
      benefits: ["Single-leg power", "Balance", "Coordination"],
      instructions: [
        "Bound forward on one leg",
        "Focus on distance and height",
        "Maintain balance throughout",
        "Alternate legs each set"
      ]
    },
    {
      name: "Calf Raises",
      type: "Strength",
      difficulty: "Beginner",
      description: "Isolated calf exercise for ankle power and push-off strength.",
      benefits: ["Ankle power", "Push-off strength", "Injury prevention"],
      instructions: [
        "Rise up onto toes explosively",
        "Pause at top briefly",
        "Lower slowly under control",
        "Can add weight for progression"
      ]
    }
  ];

  const trainingTips = [
    {
      title: "Progressive Overload",
      description: "Gradually increase intensity, volume, or difficulty over time to continue making gains."
    },
    {
      title: "Recovery & Rest",
      description: "Allow 48-72 hours between intense jumping sessions for muscle recovery and adaptation."
    },
    {
      title: "Proper Form",
      description: "Focus on quality movement patterns rather than just intensity to prevent injury."
    },
    {
      title: "Consistency",
      description: "Train 2-3 times per week consistently rather than sporadic intense sessions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Increase Vertical Jump – 6 Best Exercises for Dunking</title>
        <meta name="description" content="Learn the most effective exercises to increase your vertical jump for dunking. Plyometric and strength training exercises with proper form instructions and progression tips." />
        <meta name="keywords" content="increase vertical jump, vertical jump exercises, jump higher exercises, plyometrics for vertical, dunk training exercises" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Increase Vertical Jump – 6 Best Exercises for Dunking" />
        <meta property="og:description" content="Master these proven exercises to dramatically increase your vertical jump and achieve your dunking goals." />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Increase Your Vertical Jump for Dunking – Best Exercises",
            "description": "Complete guide to the most effective exercises for increasing vertical jump, including plyometrics and strength training.",
            "author": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01"
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
                "name": "How long does it take to increase your vertical jump?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most people see noticeable gains in 8-12 weeks with consistent training, though it varies by individual fitness level and genetics."
                }
              },
              {
                "@type": "Question",
                "name": "Can everyone improve their vertical jump?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, virtually anyone can improve with proper training, though genetics set an upper limit. Most people can gain 4-8 inches with dedicated training."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I do vertical jump exercises?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plyometric exercises should be done 2-3 times per week with rest days in between for recovery. Strength training can be integrated into your regular workout routine."
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
                <Link to="/vertical-jump-training" className="text-orange-600 font-medium">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
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
                <li className="text-gray-900 font-medium">Increase Vertical Jump Exercises</li>
              </ol>
            </nav>

            <article>
              <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to Increase Your Vertical Jump for Dunking
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Master these proven exercises to dramatically increase your vertical jump and achieve your dunking goals. From plyometrics to strength training, here's your complete guide.
                </p>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0c6cb4fe73d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Basketball player performing vertical jump training exercises for increased leap height"
                    className="rounded-lg shadow-lg mx-auto max-w-2xl w-full h-64 object-cover"
                    loading="eager"
                  />
                </div>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vertical Jump Matters for Dunking</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">The Physics of Dunking</h3>
                    <p className="text-gray-700 mb-4">
                      To successfully dunk a basketball, you need to get the ball approximately 6 inches above the rim. This means your hand must reach 10 feet 6 inches from the ground. The higher your vertical jump, the easier this becomes.
                    </p>
                    <p className="text-gray-700">
                      For most players, a 30-inch vertical jump is the benchmark for dunking on a 10-foot rim, though this varies based on height and standing reach.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits Beyond Dunking</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Improved rebounding ability</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Better shot blocking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Enhanced overall athleticism</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Increased leg strength and power</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calculator className="h-6 w-6 text-orange-600" />
                      <h3 className="text-lg font-semibold text-orange-900">Test Your Current Ability</h3>
                    </div>
                    <p className="text-orange-800 mb-4">
                      Before starting your training program, use our dunk calculator to see how much vertical jump you currently need to dunk. This gives you a clear goal to work toward.
                    </p>
                    <Link to="/" className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Try Dunk Calculator
                    </Link>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Exercises to Boost Your Vertical Leap</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {exercises.map((exercise, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{exercise.name}</CardTitle>
                          <div className="flex space-x-2">
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              exercise.type === 'Plyometric' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {exercise.type}
                            </span>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {exercise.difficulty}
                            </span>
                          </div>
                        </div>
                        <CardDescription>{exercise.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {exercise.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center space-x-2">
                                <Check className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                          <ol className="space-y-1">
                            {exercise.instructions.map((instruction, instructionIndex) => (
                              <li key={instructionIndex} className="text-sm text-gray-600">
                                {instructionIndex + 1}. {instruction}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Training Tips for Maximum Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trainingTips.map((tip, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-700">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Weekly Training Schedule</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Monday - Plyometrics</h3>
                        <p className="text-gray-700">Box jumps (3x8), Jump squats (3x10), Single-leg bounds (2x6 each leg)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Tuesday - Rest or Light Activity</h3>
                        <p className="text-gray-700">Walking, stretching, or light shooting practice</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Wednesday - Strength Training</h3>
                        <p className="text-gray-700">Barbell squats (4x6), Calf raises (3x15), Core work</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Thursday - Rest</h3>
                        <p className="text-gray-700">Complete rest or gentle stretching</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Friday - Plyometrics</h3>
                        <p className="text-gray-700">Depth jumps (3x5), Box jumps (3x6), Jump squats (3x8)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Weekend</h3>
                        <p className="text-gray-700">Game play or skill practice with some jumping drills</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">How long does it take to increase your vertical jump?</h3>
                      <p className="text-gray-700">Most people see noticeable gains in 8-12 weeks with consistent training, though it varies by individual fitness level and genetics. Some athletes have gained 6-10 inches in a training cycle.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Can everyone improve their vertical jump?</h3>
                      <p className="text-gray-700">Yes, virtually anyone can improve with proper training, though genetics set an upper limit. Most people can gain 4-8 inches with dedicated training.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">How often should I do vertical jump exercises?</h3>
                      <p className="text-gray-700">Plyometric exercises should be done 2-3 times per week with rest days in between for recovery. Strength training can be integrated into your regular workout routine.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
                    <p className="text-lg mb-6">
                      As you work through these exercises, regularly test your vertical jump improvement using our calculator. Set goals and celebrate your progress!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Test Your Progress
                      </Link>
                      <Link to="/vertical-jump-training" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                        More Training Tips
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

export default IncreaseVerticalJumpExercises;
