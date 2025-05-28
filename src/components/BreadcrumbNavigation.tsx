
import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    'calculators': 'Calculators',
    'vertical-jump-training': 'Vertical Jump Training',
    'basketball-dunk-tips': 'Basketball Dunk Tips',
    'blog': 'Blog',
    'faq': 'FAQ',
    'about': 'About',
    'contact': 'Contact',
    'basketball-bmi-calculator': 'Basketball BMI Calculator',
    'hangtime-calculator': 'Hangtime Calculator',
    'reach-calculator': 'Reach Calculator',
    'basketball-position-calculator': 'Position Calculator',
    'vertical-jump-test': 'Vertical Jump Test',
    'dunk-calculator': 'Dunk Calculator'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4 px-4">
      <Link 
        to="/" 
        className="flex items-center hover:text-orange-600 transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
        
        return (
          <div key={pathname} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            {isLast ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-orange-600 transition-colors"
              >
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadcrumbNavigation;
