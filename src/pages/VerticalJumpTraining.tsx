
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComprehensiveSEO from "@/components/ComprehensiveSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Star,
  PlayCircle,
  Download,
  Users,
  Award,
  BarChart3
} from "lucide-react";

const VerticalJumpTraining = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const faqData = [
    {
      question: "How much can I improve my vertical jump in 8 weeks?",
      answer: "Most athletes can improve their vertical jump by 4-12 inches in 8 weeks with consistent training. Beginners often see faster gains, while advanced athletes may see 3-6 inch improvements."
    },
    {
      question: "How often should I do vertical jump training?",
      answer: "Train 3-4 times per week with at least one rest day between sessions. Your muscles need time to recover and adapt to build explosive power."
    },
    {
      question: "Do I need equipment for vertical jump training?",
      answer: "While bodyweight exercises are effective, adding resistance bands, weights, and plyometric boxes can accelerate your progress. Start with bodyweight and gradually add equipment."
    },
    {
      question: "Can older athletes still improve their vertical jump?",
      answer: "Yes! While peak athletic performance typically occurs in your 20s, proper training can improve vertical jump at any age. Focus on mobility, strength, and progressive overload."
    }
  ];

  const trainingPrograms = [
    {
      level: "Beginner",
      duration: "4 weeks",
      sessions: "3x per week",
      expected: "4-8 inches",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Intermediate", 
      duration: "6 weeks",
      sessions: "4x per week",
      expected: "6-10 inches",
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "Advanced",
      duration: "8 weeks", 
      sessions: "4-5x per week",
      expected: "8-12 inches",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const exercises = [
    {
      name: "Jump Squats",
      sets: "3-4",
      reps: "8-12",
      focus: "Explosive power",
      difficulty: "Beginner"
    },
    {
      name: "Box Jumps",
      sets: "3-4", 
      reps: "6-10",
      focus: "Plyometric power",
      difficulty: "Intermediate"
    },
    {
      name: "Depth Jumps",
      sets: "3-5",
      reps: "5-8", 
      focus: "Reactive strength",
      difficulty: "Advanced"
    },
    {
      name: "Single Leg Bounds",
      sets: "3-4",
      reps: "8-12 each leg",
      focus: "Unilateral power",
      difficulty: "Intermediate"
    },
    {
      name: "Tuck Jumps",
      sets: "3-4",
      reps: "8-15",
      focus: "Hip flexor power",
      difficulty: "Beginner"
    },
    {
      name: "Bulgarian Split Squats",
      sets: "3-4",
      reps: "10-15 each leg",
      focus: "Single leg strength",
      difficulty: "Intermediate"
    }
  ];

  const weeklyProgression = [
    { week: 1, focus: "Movement Foundation", intensity: "Low", volume: "High" },
    { week: 2, focus: "Strength Building", intensity: "Medium", volume: "High" },
    { week: 3, focus: "Power Development", intensity: "Medium-High", volume: "Medium" },
    { week: 4, focus: "Explosive Training", intensity: "High", volume: "Medium" },
    { week: 5, focus: "Peak Power", intensity: "Very High", volume: "Low" },
    { week: 6, focus: "Competition Prep", intensity: "High", volume: "Low" },
    { week: 7, focus: "Peak Performance", intensity: "Max", volume: "Low" },
    { week: 8, focus: "Testing & Recovery", intensity: "Low", volume: "Low" }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="Complete Vertical Jump Training Guide - Increase Your Jump by 8+ Inches"
        description="Master vertical jump training with our comprehensive 8-week program. Learn expert techniques, exercises, and nutrition tips to increase your vertical jump by 8+ inches. Free training plans included!"
        keywords="vertical jump training, how to jump higher, increase vertical jump, plyometric exercises, basketball training, jump training program, vertical leap improvement"
        canonicalUrl="https://dunkcalculator.com/vertical-jump-training"
        pageType="article"
        author="Basketball Training Experts"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-05-28T15:30:00Z"
        wordCount={2800}
        readingTime="12 min read"
        article={{
          headline: "Complete Vertical Jump Training Guide - Increase Your Jump by 8+ Inches",
          description: "Master vertical jump training with our comprehensive 8-week program featuring expert techniques and proven exercises.",
          author: "Basketball Training Experts",
          datePublished: "2024-01-15T10:00:00Z",
          dateModified: "2024-05-28T15:30:00Z",
          keywords: ["vertical jump", "basketball training", "plyometrics", "athletic performance"]
        }}
        faqData={faqData}
        breadcrumbs={[
          { name: "Home", url: "https://dunkcalculator.com/" },
          { name: "Training", url: "https://dunkcalculator.com/blog" },
          { name: "Vertical Jump Training", url: "https://dunkcalculator.com/vertical-jump-training" }
        ]}
        enableAll={true}
      />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Expert Training Guide</Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Complete Vertical Jump Training Guide
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Master the science of vertical jump training with our comprehensive 8-week program. 
                  Learn expert techniques, proven exercises, and nutrition strategies to increase your 
                  vertical jump by 8+ inches and transform your basketball game.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">75,000+ Athletes Trained</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Award className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium">8+ Inch Average Gain</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium">4.8/5 Success Rate</span>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
                  <Download className="h-5 w-5 mr-2" />
                  Download Free Training Plan
                </Button>
              </div>
            </div>
          </section>

          {/* Training Programs Overview */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Choose Your Training Level</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Select the program that matches your current fitness level and jumping ability for optimal results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trainingPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <Badge className={`w-fit mx-auto mb-2 ${program.color}`}>
                        {program.level}
                      </Badge>
                      <CardTitle className="text-2xl">{program.duration} Program</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-1">{program.expected}</div>
                        <div className="text-sm text-gray-600">Expected Improvement</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Training Sessions:</span>
                          <span className="font-medium">{program.sessions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        Start {program.level} Program
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Exercise Library */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Essential Exercises</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Master these fundamental exercises to build explosive jumping power and improve your vertical leap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{exercise.name}</CardTitle>
                        <Badge variant={exercise.difficulty === "Beginner" ? "secondary" : 
                                     exercise.difficulty === "Intermediate" ? "default" : "destructive"}>
                          {exercise.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sets:</span>
                        <span className="font-medium">{exercise.sets}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reps:</span>
                        <span className="font-medium">{exercise.reps}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Focus:</span>
                        <span className="font-medium">{exercise.focus}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Watch Demo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* 8-Week Progression */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">8-Week Training Progression</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Follow our scientifically designed progression to maximize your vertical jump gains safely and effectively.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {weeklyProgression.map((week) => (
                  <Button
                    key={week.week}
                    variant={activeWeek === week.week ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveWeek(week.week)}
                  >
                    Week {week.week}
                  </Button>
                ))}
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle>Week {activeWeek}: {weeklyProgression[activeWeek - 1]?.focus}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {weeklyProgression[activeWeek - 1]?.intensity}
                      </div>
                      <div className="text-sm text-gray-600">Intensity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {weeklyProgression[activeWeek - 1]?.volume}
                      </div>
                      <div className="text-sm text-gray-600">Volume</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Week {activeWeek} Focus:</h4>
                    <p className="text-gray-600">
                      {activeWeek === 1 && "Establish proper movement patterns and build foundational strength. Focus on form over intensity."}
                      {activeWeek === 2 && "Increase training volume and introduce weighted exercises. Build the strength base for explosive movements."}
                      {activeWeek === 3 && "Begin plyometric training with moderate intensity. Develop reactive strength and power."}
                      {activeWeek === 4 && "Increase plyometric intensity and complexity. Focus on explosive triple extension movements."}
                      {activeWeek === 5 && "Peak power development with maximum intensity training. Reduce volume to prevent overtraining."}
                      {activeWeek === 6 && "Competition preparation with sport-specific movements. Maintain power while reducing fatigue."}
                      {activeWeek === 7 && "Peak performance week with maximum intensity, minimal volume. Prepare for testing."}
                      {activeWeek === 8 && "Testing week with active recovery. Measure improvements and plan next training cycle."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Science Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">The Science Behind Vertical Jump Training</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Force Production</h3>
                  <p className="text-gray-600 text-sm">Increase the amount of force your muscles can generate through strength training and plyometrics.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Rate of Force Development</h3>
                  <p className="text-gray-600 text-sm">Train your nervous system to produce force quickly through explosive movements and reactive training.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Movement Efficiency</h3>
                  <p className="text-gray-600 text-sm">Optimize your jumping technique and eliminate energy leaks through proper biomechanics.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Progressive Overload</h3>
                  <p className="text-gray-600 text-sm">Gradually increase training demands to force continuous adaptations and improvements.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Real athletes, real results. See how our training program has helped players achieve their dunking goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">+11"</div>
                    <div className="text-lg font-semibold mb-2">Marcus J.</div>
                    <div className="text-sm text-gray-600 mb-4">High School Basketball Player</div>
                    <p className="text-gray-600 italic">"Went from barely touching rim to dunking in 8 weeks. The progression was perfect for my level."</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">+8"</div>
                    <div className="text-lg font-semibold mb-2">Sarah L.</div>
                    <div className="text-sm text-gray-600 mb-4">College Volleyball Player</div>
                    <p className="text-gray-600 italic">"Improved my spike reach significantly. The plyometric training made a huge difference."</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">+14"</div>
                    <div className="text-lg font-semibold mb-2">Alex T.</div>
                    <div className="text-sm text-gray-600 mb-4">Recreational Player</div>
                    <p className="text-gray-600 italic">"At 5'8", I never thought I'd dunk. Now I'm throwing down regularly!"</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Jump?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of athletes who have increased their vertical jump by 8+ inches with our proven training system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary">
                  <Download className="h-5 w-5 mr-2" />
                  Download Training Guide
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Test Your Current Jump
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VerticalJumpTraining;
