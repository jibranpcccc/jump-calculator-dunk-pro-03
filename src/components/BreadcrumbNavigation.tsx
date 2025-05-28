
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Create breadcrumb items with proper labels
  const getBreadcrumbLabel = (path: string, index: number, pathArray: string[]) => {
    const fullPath = '/' + pathArray.slice(0, index + 1).join('/');
    
    const breadcrumbMap: { [key: string]: string } = {
      '/measurements': 'Measurements',
      '/measurements/standing-reach': 'Standing Reach Guide',
      '/measurements/vertical-jump': 'Vertical Jump Guide',
      '/measurements/hoop-heights': 'Hoop Heights Guide',
      '/measurements/other-measurements': 'Other Measurements',
      '/vertical-jump-training': 'Vertical Jump Training',
      '/vertical-jump-training/plyometrics': 'Plyometric Exercises',
      '/vertical-jump-training/strength-training': 'Strength Training',
      '/vertical-jump-training/nutrition': 'Nutrition for Jumpers',
      '/vertical-jump-training/flexibility-injury-prevention': 'Flexibility & Injury Prevention',
      '/vertical-jump-training/programs': 'Training Programs',
      '/dunking-skills/first-dunk-guide': 'First Dunk Guide',
      '/dunking-skills/how-to-palm-basketball': 'How to Palm Basketball',
      '/dunking-skills/types-of-dunks': 'Types of Dunks',
      '/dunking-skills/average-vertical-jumps': 'Average Vertical Jumps',
      '/dunking-skills/famous-dunkers': 'Famous Dunkers',
      '/about': 'About Us',
      '/contact': 'Contact Us',
      '/blog': 'Blog',
      '/faq': 'FAQ',
      '/glossary': 'Glossary',
      '/privacy-policy': 'Privacy Policy',
      '/terms-of-service': 'Terms of Service'
    };

    return breadcrumbMap[fullPath] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = getBreadcrumbLabel(name, index, pathnames);

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {label}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default BreadcrumbNavigation;
