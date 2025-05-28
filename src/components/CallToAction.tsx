
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "orange" | "blue";
}

const CallToAction = ({ 
  title = "Ready to Test Your Dunk?",
  description = "Use our free calculator to find out if you can dunk a basketball right now!",
  buttonText = "Try Dunk Calculator",
  buttonLink = "#calculator",
  variant = "orange"
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
    <Card className={`border-2 ${variantStyles[variant]}`}>
      <CardContent className="p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Calculator className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {description}
          </p>
          
          {buttonLink.startsWith('#') ? (
            <button
              onClick={handleClick}
              className={`${buttonStyles[variant]} text-white px-8 py-3 text-lg font-semibold transition-all transform hover:scale-105 rounded-lg inline-flex items-center`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          ) : (
            <Link to={buttonLink}>
              <Button 
                size="lg"
                className={`${buttonStyles[variant]} text-white px-8 py-3 text-lg font-semibold transition-all transform hover:scale-105`}
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
          
          <div className="mt-4 text-sm text-gray-500">
            <p>✓ 100% Free • ✓ No Signup Required • ✓ Instant Results</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToAction;
