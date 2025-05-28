
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Define breadcrumb mapping for better UX
  const breadcrumbNameMap: { [key: string]: string } = {
    '': 'Home',
    'measurements': 'Measurement Guides',
    'standing-reach': 'Standing Reach Guide',
    'vertical-jump': 'Vertical Jump Guide',
    'hoop-heights': 'Hoop Heights Guide',
    'other-measurements': 'Other Measurements',
    'blog': 'Training Blog',
    'faq': 'Frequently Asked Questions',
    'about': 'About Us',
    'contact': 'Contact Us'
  };

  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      {
        name: 'Home',
        url: '/',
        isLast: pathnames.length === 0
      }
    ];

    let currentPath = '';
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      const isLast = index === pathnames.length - 1;
      
      breadcrumbs.push({
        name: breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1),
        url: currentPath,
        isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            )}
            
            {breadcrumb.isLast ? (
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {index === 0 && <Home className="w-4 h-4 mr-1 inline" />}
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                to={breadcrumb.url}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;
