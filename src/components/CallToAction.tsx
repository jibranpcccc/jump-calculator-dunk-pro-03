
import { Calculator, ArrowRight, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "orange" | "blue";
  showStats?: boolean;
  showTrustSignals?: boolean;
}

const CallToAction = ({ 
  title = "Ready to Test Your Dunk?",
  description = "Use our free calculator to find out if you can dunk a basketball right now!",
  buttonText = "Try Dunk Calculator",
  buttonLink = "#calculator",
  variant = "orange",
  showStats = true,
  showTrustSignals = true
}: CallToActionProps) => {
  const variantStyles = {
    default: "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200",
    orange: "bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200",
    blue: "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
  };

  const buttonStyles = {
    default: "bg-gray-600 hover:bg-gray-700",
    orange: "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
    blue: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (buttonLink.startsWith('#')) {
      e.preventDefault();
      const targetId = buttonLink.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <Card className={`border-2 ${variantStyles[variant]} shadow-lg`}>
      <CardContent className="p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <Calculator className="h-10 w-10 text-orange-600" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {showStats && (
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">75K+</div>
                <div className="text-xs text-gray-600">Users Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-xs text-gray-600">Forever</div>
              </div>
            </div>
          )}
          
          {buttonLink.startsWith('#') ? (
            <button
              onClick={handleClick}
              className={`${buttonStyles[variant]} text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 rounded-lg inline-flex items-center shadow-lg hover:shadow-xl`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          ) : (
            <Link to={buttonLink}>
              <Button 
                size="lg"
                className={`${buttonStyles[variant]} text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
          
          {showTrustSignals && (
            <div className="mt-6 flex justify-center items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>No Signup Required</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>Expert Approved</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToAction;
