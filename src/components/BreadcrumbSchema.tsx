
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const breadcrumbData = {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: {
        "@type": "WebPage",
        "@id": item.url,
        url: item.url,
        name: item.name
      }
    }))
  };

  return <StructuredData type="BreadcrumbList" data={breadcrumbData} />;
};

export default BreadcrumbSchema;
