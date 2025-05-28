
import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Target, Users, ArrowRight, Play, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnhancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    { number: "75,000+", label: "Tests Completed", icon: Target, color: "text-orange-600" },
    { number: "98%", label: "Accuracy Rate", icon: TrendingUp, color: "text-green-600" },
    { number: "Free", label: "Always", icon: Calculator, color: "text-blue-600" },
    { number: "Instant", label: "Results", icon: CheckCircle, color: "text-purple-600" }
  ];

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-15 animate-bounce"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full text-orange-700 text-sm font-medium border border-orange-200">
                <Star className="w-4 h-4 mr-2 text-orange-600" />
                #1 Free Basketball Dunk Calculator
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  98% Accurate
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Can You 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 animate-pulse">
                  {" "}Dunk?
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover your dunking potential instantly with our scientifically-accurate calculator. 
                <strong className="text-orange-600"> No signup required</strong> - get personalized results in seconds!
              </p>

              {/* Key Benefits */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Based on NBA standards & physics</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Get personalized training tips</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Track your progress over time</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Test My Dunk Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Link to="/blog/how-to-dunk-beginners">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-orange-500 px-8 py-6 text-lg font-medium rounded-xl group hover:bg-orange-50 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Learn to Dunk
                </Button>
              </Link>
            </div>

            {/* Enhanced Animated Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className={`text-center transition-all duration-500 transform hover:scale-105 ${
                    currentStat === index ? 'ring-2 ring-orange-400 shadow-lg scale-105 bg-white' : 'hover:shadow-md bg-white/80'
                  }`}>
                    <CardContent className="p-4">
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
              </div>
              <span>Trusted by 75,000+ basketball players worldwide</span>
            </div>
          </div>

          {/* Right Visual - Enhanced */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10">
              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <Calculator className="w-10 h-10 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Calculator Preview</h3>
                      <p className="text-gray-600">See how our calculator works</p>
                    </div>
                    
                    {/* Enhanced Mini Calculator Preview */}
                    <div className="space-y-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Height</div>
                          <div className="bg-white px-3 py-2 rounded border shadow-sm font-semibold text-gray-800">72"</div>
                          <div className="text-xs text-gray-400 mt-1">6 feet</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Reach</div>
                          <div className="bg-white px-3 py-2 rounded border shadow-sm font-semibold text-gray-800">96"</div>
                          <div className="text-xs text-gray-400 mt-1">8 feet</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Jump</div>
                          <div className="bg-white px-3 py-2 rounded border shadow-sm font-semibold text-gray-800">28"</div>
                          <div className="text-xs text-gray-400 mt-1">Above avg</div>
                        </div>
                      </div>
                      
                      <div className="text-center p-4 bg-green-100 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-700 mb-1">🏀 YES! You can dunk!</div>
                        <div className="text-sm text-green-600">You can reach 4" above the rim</div>
                        <div className="text-xs text-gray-500 mt-1">Max reach: 124 inches</div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={scrollToCalculator}
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Try Full Calculator Below
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="text-xs text-gray-500 flex justify-center items-center space-x-4">
                      <span>✓ Instant Results</span>
                      <span>✓ No Login</span>
                      <span>✓ 100% Free</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Enhanced Background Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl -z-10 transform rotate-1"></div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-orange-200 to-blue-200 rounded-3xl -z-20 transform rotate-2 opacity-50"></div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Used by 75K+ players</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">98% accuracy rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Expert approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
