
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import StructuredData from "./StructuredData";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbItems = [
    { name: "Home", url: "https://dunkcalculator.com/" }
  ];

  pathnames.forEach((name, index) => {
    const url = `https://dunkcalculator.com/${pathnames.slice(0, index + 1).join('/')}`;
    const displayName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbItems.push({
      name: displayName,
      url: url
    });
  });

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="flex items-center hover:text-orange-600 transition-colors">
          <Home className="h-4 w-4" />
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <div key={name} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="text-gray-800 font-medium">{displayName}</span>
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
    </>
  );
};

export default BreadcrumbNavigation;
