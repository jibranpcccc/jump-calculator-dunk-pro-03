
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
  Lightbulb,
  Trophy,
  Zap,
  Brain
} from "lucide-react";

const BasketballDunkTips = () => {
  const faqData = [
    {
      question: "What's the most important factor for dunking success?",
      answer: "Timing and technique are equally important as jumping ability. Many players with modest verticals can dunk through proper approach, timing, and ball control."
    },
    {
      question: "How do I overcome fear when attempting my first dunk?",
      answer: "Start with lower rims (8-9 feet) and gradually work up. Practice the motion without the ball first, then with a tennis ball, before using a basketball."
    },
    {
      question: "Should I focus on one-foot or two-foot takeoffs?",
      answer: "Two-foot takeoffs generate more power but one-foot offers better momentum. Practice both, but focus on your natural jumping style first."
    },
    {
      question: "What's the best grip for dunking?",
      answer: "Palm the ball or use a firm two-handed grip. For smaller hands, practice ball control drills and consider using slightly deflated balls during practice."
    }
  ];

  const dunkTips = [
    {
      category: "Approach & Timing",
      icon: <Target className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-800",
      tips: [
        "Take 3-4 quick steps for optimal momentum",
        "Plant your takeoff foot 2-3 feet from the rim",
        "Keep your eyes on the rim, not the ball",
        "Use your non-jumping leg to drive knee up explosively"
      ]
    },
    {
      category: "Ball Control",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-800", 
      tips: [
        "Practice palming the ball with proper grip",
        "Keep the ball close to your body during approach",
        "Use two hands for better control on difficult dunks",
        "Master ball handling at various speeds"
      ]
    },
    {
      category: "Mental Game",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-800",
      tips: [
        "Visualize successful dunks before attempting",
        "Start with easier dunks to build confidence", 
        "Don't overthink - trust your training",
        "Learn from failed attempts without fear"
      ]
    },
    {
      category: "Safety & Progression",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-green-100 text-green-800",
      tips: [
        "Always warm up thoroughly before dunking",
        "Use proper landing technique to prevent injury",
        "Progress gradually from lower to higher rims",
        "Know when to attempt and when to lay it up"
      ]
    }
  ];

  const dunkTypes = [
    {
      name: "Two-Handed Power Dunk",
      difficulty: "Beginner",
      description: "The safest and most reliable dunk for beginners. Uses both hands for maximum control.",
      keyPoints: ["High success rate", "Good for shorter players", "Easiest to learn"],
      color: "bg-green-100 border-green-200"
    },
    {
      name: "One-Handed Slam",
      difficulty: "Intermediate", 
      description: "Classic dunk requiring good hand size and jumping ability. More style than two-handed.",
      keyPoints: ["Requires ball palming", "Better for taller players", "Impressive looking"],
      color: "bg-blue-100 border-blue-200"
    },
    {
      name: "Windmill Dunk",
      difficulty: "Advanced",
      description: "Spectacular dunk requiring excellent timing, flexibility, and jumping ability.",
      keyPoints: ["High coordination needed", "Crowd favorite", "Risk of injury if mistimed"],
      color: "bg-purple-100 border-purple-200"
    },
    {
      name: "360 Dunk",
      difficulty: "Expert",
      description: "The ultimate show-stopper requiring exceptional athleticism and spatial awareness.",
      keyPoints: ["Extreme difficulty", "Perfect for competitions", "Requires extensive practice"],
      color: "bg-red-100 border-red-200"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Jumping too early or late",
      solution: "Practice timing with tennis balls first",
      impact: "High"
    },
    {
      mistake: "Not getting enough momentum",
      solution: "Take 3-4 quick approach steps",
      impact: "High"
    },
    {
      mistake: "Poor ball control",
      solution: "Practice palming and grip strength daily",
      impact: "Medium"
    },
    {
      mistake: "Looking at the ball instead of rim",
      solution: "Keep eyes focused on target rim",
      impact: "Medium"
    },
    {
      mistake: "Hesitating at takeoff",
      solution: "Build confidence with easier dunks first",
      impact: "High"
    },
    {
      mistake: "Poor landing technique",
      solution: "Practice soft landings and proper form",
      impact: "High"
    }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="Basketball Dunk Tips: Master Your First Dunk - Expert Guide 2024"
        description="Learn pro basketball dunking techniques with our expert guide. Master timing, approach, ball control, and mental game. From first dunk to advanced techniques - complete dunking guide!"
        keywords="basketball dunk tips, how to dunk, dunking technique, basketball dunking guide, first dunk tips, dunk training, basketball skills"
        canonicalUrl="https://dunkcalculator.com/basketball-dunk-tips"
        pageType="article"
        author="Basketball Training Experts"
        publishedTime="2024-02-01T09:00:00Z"
        modifiedTime="2024-05-28T16:15:00Z"
        wordCount={2400}
        readingTime="10 min read"
        article={{
          headline: "Basketball Dunk Tips: Master Your First Dunk - Expert Guide 2024",
          description: "Learn professional dunking techniques with our comprehensive guide covering timing, approach, ball control, and mental strategies.",
          author: "Basketball Training Experts", 
          datePublished: "2024-02-01T09:00:00Z",
          dateModified: "2024-05-28T16:15:00Z",
          keywords: ["dunking", "basketball skills", "athletic performance", "basketball training"]
        }}
        faqData={faqData}
        breadcrumbs={[
          { name: "Home", url: "https://dunkcalculator.com/" },
          { name: "Basketball Tips", url: "https://dunkcalculator.com/blog" },
          { name: "Dunk Tips", url: "https://dunkcalculator.com/basketball-dunk-tips" }
        ]}
        enableAll={true}
      />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-orange-100 text-orange-800">Expert Dunking Guide</Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Master Basketball Dunking
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Learn professional dunking techniques from expert coaches. Master timing, approach, 
                  ball control, and mental strategies to execute your first dunk and progress to advanced techniques.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Trophy className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium">Pro Techniques</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium">Safety First</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Progressive Learning</span>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Watch Video Guide
                </Button>
              </div>
            </div>
          </section>

          {/* Essential Tips Categories */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Essential Dunking Techniques</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Master these four fundamental areas to become a consistent and safe dunker.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dunkTips.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${category.color}`}>
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Dunk Types */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Types of Dunks</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Progress from basic to advanced dunks with proper technique and safety considerations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dunkTypes.map((dunk, index) => (
                  <Card key={index} className={`${dunk.color} hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{dunk.name}</CardTitle>
                        <Badge variant={
                          dunk.difficulty === "Beginner" ? "secondary" :
                          dunk.difficulty === "Intermediate" ? "default" :
                          dunk.difficulty === "Advanced" ? "destructive" : "destructive"
                        }>
                          {dunk.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{dunk.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Points:</h4>
                        {dunk.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-600" />
                            <span className="text-sm text-gray-700">{point}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Learn Technique
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Common Mistakes to Avoid</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Learn from these common dunking mistakes to accelerate your progress and stay safe.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {commonMistakes.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">❌ {item.mistake}</h3>
                            <Badge variant={item.impact === "High" ? "destructive" : "secondary"} className="text-xs">
                              {item.impact} Impact
                            </Badge>
                          </div>
                          <div className="md:col-span-2">
                            <h4 className="font-medium text-green-700 mb-1">✅ Solution:</h4>
                            <p className="text-gray-700">{item.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Practice Progression */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Progressive Practice Plan</h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        Foundation Phase (Weeks 1-2)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Focus Areas:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• Vertical jump improvement</li>
                            <li>• Ball handling at speed</li>
                            <li>• Approach timing</li>
                            <li>• Landing technique</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Practice Routine:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• 8-foot rim attempts</li>
                            <li>• Tennis ball dunks</li>
                            <li>• Approach without jumping</li>
                            <li>• Grip strength exercises</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        Development Phase (Weeks 3-4)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Focus Areas:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• 9-foot rim progression</li>
                            <li>• Two-handed dunks</li>
                            <li>• Confidence building</li>
                            <li>• Consistency improvement</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Practice Routine:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• Mini basketball dunks</li>
                            <li>• Multiple approach angles</li>
                            <li>• Video analysis</li>
                            <li>• Mental visualization</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="bg-orange-100 text-orange-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        Mastery Phase (Weeks 5-6)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Focus Areas:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• 10-foot rim attempts</li>
                            <li>• One-handed dunks</li>
                            <li>• Style development</li>
                            <li>• Game situation practice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Practice Routine:</h4>
                          <ul className="space-y-1 text-gray-700">
                            <li>• Full basketball dunks</li>
                            <li>• Fast break scenarios</li>
                            <li>• Crowd pressure simulation</li>
                            <li>• Advanced techniques</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">Dunking FAQ</h2>
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
          <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Dunk?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Test your current dunking ability and get a personalized training plan to achieve your first dunk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary">
                  Test Your Dunk Ability
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                  Start Training Program
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

export default BasketballDunkTips;
