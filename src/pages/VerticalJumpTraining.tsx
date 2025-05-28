
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Book, Check } from "lucide-react";
import { Link } from "react-router-dom";

const VerticalJumpTraining = () => {
  const exercises = [
    {
      name: "Box Jumps",
      description: "Jump onto progressively higher boxes to build explosive power",
      difficulty: "Beginner"
    },
    {
      name: "Depth Jumps",
      description: "Step off a box and immediately jump as high as possible upon landing",
      difficulty: "Advanced"
    },
    {
      name: "Bulgarian Split Squats",
      description: "Single-leg strength exercise that builds unilateral power",
      difficulty: "Intermediate"
    },
    {
      name: "Jump Squats",
      description: "Explosive squat variations that directly target jumping muscles",
      difficulty: "Beginner"
    },
    {
      name: "Calf Raises",
      description: "Build the foundational strength in your lower legs for takeoff",
      difficulty: "Beginner"
    },
    {
      name: "Plyometric Push-ups",
      description: "Upper body explosive training that translates to full-body power",
      difficulty: "Intermediate"
    }
  ];

  const programs = [
    {
      title: "Beginner (0-6 months)",
      duration: "12 weeks",
      goal: "4-6 inch improvement",
      description: "Foundation building with basic plyometrics and strength training"
    },
    {
      title: "Intermediate (6-18 months)",
      duration: "16 weeks", 
      goal: "6-10 inch improvement",
      description: "Advanced plyometrics combined with heavy strength training"
    },
    {
      title: "Advanced (18+ months)",
      duration: "20 weeks",
      goal: "8-12 inch improvement", 
      description: "Elite training protocols with periodization and recovery focus"
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
              <Link to="/vertical-jump-training" className="text-orange-600 font-medium">Vertical Training</Link>
              <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
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
              Improve Your Vertical Jump
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive training programs and exercises designed to maximize your vertical jump and help you achieve your dunking goals.
            </p>
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Test Your Current Vertical
              </Button>
            </Link>
          </div>

          {/* Training Programs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-orange-600">
                      {program.goal}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <p className="text-gray-700">{program.description}</p>
                      <div className="pt-4">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          View Program Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Exercise Library */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Exercises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.map((exercise, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exercise.name}</CardTitle>
                    <CardDescription className="text-sm">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exercise.difficulty}
                      </span>
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
                      <p className="text-blue-100">Train 3-4 times per week with proper rest between sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Progressive Overload</h3>
                      <p className="text-blue-100">Gradually increase intensity and volume over time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Focus on Form</h3>
                      <p className="text-blue-100">Perfect technique prevents injury and maximizes gains</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Recovery Matters</h3>
                      <p className="text-blue-100">Allow adequate rest and prioritize sleep and nutrition</p>
                    </div>
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
                  Test your current ability and get personalized training recommendations.
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
      </div>

      {/* Schema Markup */}
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
          }
        })}
      </script>
    </div>
  );
};

export default VerticalJumpTraining;
