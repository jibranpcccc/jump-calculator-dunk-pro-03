
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import StructuredData from "./StructuredData";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbItems = [
    { name: "Home", url: "https://dunkcalculator.com/" }
  ];

  let currentPath = "";
  pathnames.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    breadcrumbItems.push({
      name,
      url: `https://dunkcalculator.com${currentPath}`
    });
  });

  const breadcrumbSchema = {
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  if (breadcrumbItems.length <= 1) return null;

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
              {index === 0 ? (
                <Link to="/" className="flex items-center hover:text-orange-600">
                  <Home className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link 
                  to={item.url.replace('https://dunkcalculator.com', '')} 
                  className="hover:text-orange-600"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNavigation;
