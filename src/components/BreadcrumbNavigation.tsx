
import { useLocation } from "react-router-dom";
import BreadcrumbSchema from "./BreadcrumbSchema";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: "Home", url: "https://dunkcalculator.com" }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert URL segments to readable names
      const segmentName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: segmentName,
        url: `https://dunkcalculator.com${currentPath}`
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return <BreadcrumbSchema items={breadcrumbs} />;
};

export default BreadcrumbNavigation;
