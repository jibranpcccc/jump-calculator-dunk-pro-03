
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbMap: { [key: string]: string } = {
    'measurements': 'Measurements',
    'standing-reach': 'Standing Reach',
    'vertical-jump': 'Vertical Jump', 
    'hoop-heights': 'Hoop Heights',
    'other-measurements': 'Other Measurements',
    'blog': 'Blog',
    'faq': 'FAQ',
    'about': 'About',
    'contact': 'Contact'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="flex items-center hover:text-orange-600 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

          return (
            <li key={pathname} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-gray-900 font-medium">{displayName}</span>
              ) : (
                <Link to={routeTo} className="hover:text-orange-600 transition-colors">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;
