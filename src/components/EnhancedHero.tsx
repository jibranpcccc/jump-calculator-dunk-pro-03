
import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Target, Users, ArrowRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnhancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: "50,000+", label: "Tests Completed", icon: Target },
    { number: "10,000+", label: "Users Helped", icon: Users },
    { number: "95%", label: "Accuracy Rate", icon: TrendingUp },
    { number: "Free", label: "Always", icon: Calculator }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
                <Calculator className="w-4 h-4 mr-2" />
                #1 Free Basketball Dunk Calculator
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Can You 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                  {" "}Dunk?
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover your dunking potential instantly with our scientifically-accurate calculator. 
                <strong> No signup required</strong> - get results in seconds!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="#calculator">
                <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Calculator className="w-5 h-5 mr-2" />
                  Test My Dunk Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/blog/how-to-dunk-beginners">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-orange-500 px-8 py-6 text-lg font-medium rounded-xl group">
                  <Play className="w-5 h-5 mr-2" />
                  Learn to Dunk
                </Button>
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className={`text-center transition-all duration-500 ${
                    currentStat === index ? 'ring-2 ring-orange-400 shadow-lg scale-105' : 'hover:shadow-md'
                  }`}>
                    <CardContent className="p-4">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                      <Calculator className="w-10 h-10 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Preview</h3>
                      <p className="text-gray-600">See how our calculator works</p>
                    </div>
                    
                    {/* Mini Calculator Preview */}
                    <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">Height</div>
                          <div className="bg-white px-3 py-2 rounded border">72"</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">Reach</div>
                          <div className="bg-white px-3 py-2 rounded border">96"</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">Jump</div>
                          <div className="bg-white px-3 py-2 rounded border">28"</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">🏀 YES! You can dunk!</div>
                        <div className="text-sm text-gray-600">You can reach 76" above the rim</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                      Try Full Calculator Below
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
