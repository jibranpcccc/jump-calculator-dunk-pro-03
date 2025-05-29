
import { useState, useEffect } from "react";
import { Calculator, Target, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MobileOptimizedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  }, []);

  return (
    <section className="relative py-8 md:py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`text-center space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Mobile-optimized badge */}
          <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full text-orange-700 text-xs md:text-sm font-medium border border-orange-200">
            <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 text-orange-600" />
            <span className="hidden xs:inline">#1 Free Basketball Dunk Calculator</span>
            <span className="xs:hidden">Free Dunk Calculator</span>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              98% Accurate
            </span>
          </div>
          
          {/* Mobile-optimized heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight px-2">
            Can You 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 block xs:inline">
              {" "}Dunk?
            </span>
          </h1>
          
          {/* Mobile-optimized description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            Discover your dunking potential instantly with our scientifically-accurate calculator. 
            <strong className="text-orange-600"> No signup required</strong> - get personalized results in seconds!
          </p>

          {/* Mobile-optimized benefits */}
          <div className="space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-center text-sm md:text-base text-gray-700">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Based on NBA standards & physics</span>
            </div>
            <div className="flex items-center justify-center text-sm md:text-base text-gray-700">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Get personalized training tips</span>
            </div>
            <div className="flex items-center justify-center text-sm md:text-base text-gray-700">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Track your progress over time</span>
            </div>
          </div>

          {/* Mobile-optimized CTA buttons */}
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <Button 
              onClick={scrollToCalculator}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Test My Dunk Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile-optimized stats */}
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto pt-6">
            <Card className="text-center bg-white/90 hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <Target className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                <div className="text-lg font-bold text-gray-900">75,000+</div>
                <div className="text-xs text-gray-600">Tests Done</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/90 hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <div className="text-lg font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile social proof */}
          <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600 px-4">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-center">Trusted by 75,000+ players worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOptimizedHero;
