
import StructuredData from "./StructuredData";

interface ProductSchemaProps {
  name: string;
  description: string;
  category?: string;
  brand?: string;
  url?: string;
}

const ProductSchema = ({ 
  name, 
  description, 
  category = "Sports Application",
  brand = "Dunk Calculator",
  url = "https://dunkcalculator.com"
}: ProductSchemaProps) => {
  const productData = {
    name,
    description,
    category,
    brand: {
      "@type": "Brand",
      name: brand
    },
    url,
    manufacturer: {
      "@type": "Organization",
      name: "Dunk Calculator"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: url
    },
    applicationCategory: "SportsApplication",
    operatingSystem: "All",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return <StructuredData type="WebPage" data={{ mainEntity: { "@type": "SoftwareApplication", ...productData } }} />;
};

export default ProductSchema;
