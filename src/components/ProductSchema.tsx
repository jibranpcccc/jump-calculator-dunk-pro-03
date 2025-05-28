
import StructuredData from "./StructuredData";

interface ProductSchemaProps {
  name: string;
  description: string;
  brand?: string;
  price?: string;
  availability?: string;
  url?: string;
  rating?: {
    value: string;
    count: string;
  };
}

const ProductSchema = ({
  name,
  description,
  brand = "Dunk Calculator",
  price = "0",
  availability = "InStock",
  url,
  rating
}: ProductSchemaProps) => {
  const productData = {
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": `https://schema.org/${availability}`,
      "url": url || "https://dunkcalculator.com"
    },
    "applicationCategory": "SportsApplication",
    "operatingSystem": "All",
    "downloadUrl": url || "https://dunkcalculator.com",
    ...(rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.value,
        "ratingCount": rating.count,
        "bestRating": "5",
        "worstRating": "1"
      }
    })
  };

  return <StructuredData type="SoftwareApplication" data={productData} />;
};

export default ProductSchema;
