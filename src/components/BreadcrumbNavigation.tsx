
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumbs on homepage
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...pathnames.map((path, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { name, url };
    })
  ];

  return (
    <nav className="bg-gray-50 py-3 px-4" aria-label="Breadcrumb">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
              {index === 0 && <Home className="h-4 w-4 text-gray-500 mr-2" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
