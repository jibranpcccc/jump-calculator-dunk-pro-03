
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Book, Check, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const VerticalJumpTraining = () => {
  const exercises = [
    {
      name: "Box Jumps",
      description: "Jump onto progressively higher boxes to build explosive power and landing mechanics",
      difficulty: "Beginner",
      sets: "3 sets x 8-10 reps",
      focus: "Explosive Power"
    },
    {
      name: "Depth Jumps", 
      description: "Step off a box and immediately jump as high as possible upon landing",
      difficulty: "Advanced",
      sets: "3 sets x 5-6 reps",
      focus: "Reactive Strength"
    },
    {
      name: "Bulgarian Split Squats",
      description: "Single-leg strength exercise that builds unilateral power and stability",
      difficulty: "Intermediate",
      sets: "3 sets x 12 each leg",
      focus: "Leg Strength"
    },
    {
      name: "Jump Squats",
      description: "Explosive squat variations that directly target jumping muscles",
      difficulty: "Beginner", 
      sets: "4 sets x 10-12 reps",
      focus: "Power Development"
    },
    {
      name: "Calf Raises",
      description: "Build the foundational strength in your lower legs for powerful takeoff",
      difficulty: "Beginner",
      sets: "3 sets x 15-20 reps",
      focus: "Ankle Power"
    },
    {
      name: "Plyometric Push-ups",
      description: "Upper body explosive training that translates to full-body coordination",
      difficulty: "Intermediate",
      sets: "3 sets x 8-10 reps", 
      focus: "Upper Body Power"
    }
  ];

  const programs = [
    {
      title: "Beginner Program",
      subtitle: "0-6 months experience",
      duration: "12 weeks",
      goal: "4-6 inch improvement",
      description: "Foundation building with basic plyometrics and bodyweight strength training. Perfect for athletes new to jump training.",
      features: ["Bodyweight exercises", "Basic plyometrics", "Injury prevention focus", "2-3 workouts per week"]
    },
    {
      title: "Intermediate Program", 
      subtitle: "6-18 months experience",
      duration: "16 weeks",
      goal: "6-10 inch improvement",
      description: "Advanced plyometrics combined with weighted exercises for serious vertical gains.",
      features: ["Weighted exercises", "Advanced plyos", "Progressive overload", "3-4 workouts per week"]
    },
    {
      title: "Advanced Program",
      subtitle: "18+ months experience", 
      duration: "20 weeks",
      goal: "8-12 inch improvement",
      description: "Elite training protocols with periodization, recovery optimization, and sport-specific movements.",
      features: ["Periodization", "Recovery optimization", "Sport-specific training", "4-5 workouts per week"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vertical Jump Training Guide – Jump Higher to Dunk</title>
        <meta name="description" content="The ultimate guide to vertical jump training. Discover workouts, exercises, and programs to increase your vertical leap and improve your dunking ability. Elevate your game with our jump training tips." />
        <meta name="keywords" content="vertical jump training, increase vertical jump, jump higher for basketball, vertical leap program, improve jumping ability, plyometric exercises" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vertical Jump Training Guide – Jump Higher to Dunk" />
        <meta property="og:description" content="Comprehensive vertical jump training programs and exercises designed to maximize your vertical jump and help you achieve your dunking goals." />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Improve Your Vertical Jump - Complete Training Guide",
            "description": "Comprehensive vertical jump training programs and exercises to help basketball players increase their jumping ability and learn to dunk.",
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
                <Link to="/vertical-jump-training" className="text-orange-600 font-medium">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
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
                <li className="text-gray-900 font-medium">Vertical Jump Training</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Improve Your Vertical Jump
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive training programs and exercises designed to maximize your vertical jump and help you achieve your dunking goals.
              </p>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Athletes performing plyometric box jump exercises to improve vertical leap"
                  className="rounded-lg shadow-lg mx-auto max-w-2xl w-full h-64 object-cover"
                  loading="eager"
                />
              </div>
              <Link to="/">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Test Your Current Vertical
                </Button>
              </Link>
            </div>

            {/* Training Programs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                  <Card key={index} className="relative h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Target className={`h-6 w-6 ${index === 0 ? 'text-green-600' : index === 1 ? 'text-yellow-600' : 'text-red-600'}`} />
                        <span className={`text-xs px-2 py-1 rounded ${index === 0 ? 'bg-green-100 text-green-800' : index === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {program.subtitle}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-orange-600">
                        {program.goal}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <p className="text-gray-700">{program.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Program Features:</h4>
                          <ul className="space-y-1">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="pt-4 mt-auto">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          View Program Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Exercise Library */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Exercises</h2>
              <div className="mb-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Athlete performing barbell squats for leg strength to increase jump height"
                  className="rounded-lg shadow-md mx-auto max-w-lg w-full h-48 object-cover mb-4"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{exercise.name}</CardTitle>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                      <CardDescription className="text-sm font-medium text-orange-600">
                        {exercise.focus} • {exercise.sets}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{exercise.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">Training Tips for Success</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Consistency is Key</h3>
                        <p className="text-blue-100">Train 3-4 times per week with proper rest between sessions. Consistent training over months yields the best results.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Progressive Overload</h3>
                        <p className="text-blue-100">Gradually increase intensity and volume over time. Add weight, height, or reps weekly to continue improving.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Perfect Your Form</h3>
                        <p className="text-blue-100">Technique prevents injury and maximizes gains. Quality over quantity in every rep and set.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Recovery Matters</h3>
                        <p className="text-blue-100">Allow adequate rest and prioritize sleep (7-9 hours) and nutrition for muscle growth and power development.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Progress Tracking */}
            <section className="mb-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Track Your Progress</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Test Weekly</h3>
                      <p className="text-gray-600 text-sm">Measure your vertical jump weekly using our <Link to="/" className="text-orange-600 hover:underline">dunk calculator</Link> to track improvements</p>
                    </div>
                    <div className="text-center">
                      <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Set Goals</h3>
                      <p className="text-gray-600 text-sm">Break down your dunk goal into smaller milestones. Aim for 1-2 inch improvements every 4-6 weeks</p>
                    </div>
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Stay Motivated</h3>
                      <p className="text-gray-600 text-sm">Celebrate small wins and document your journey. Progress photos and videos help maintain motivation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Test your current ability and get personalized training recommendations based on your results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Use Dunk Calculator
                      </Button>
                    </Link>
                    <Link to="/basketball-dunk-tips">
                      <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                        Learn Dunk Techniques
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

export default VerticalJumpTraining;
