
import StructuredData from "./StructuredData";

interface ProductSchemaProps {
  name: string;
  description: string;
  brand?: string;
  category?: string;
  price?: string;
  currency?: string;
  availability?: string;
  condition?: string;
  image?: string;
  url?: string;
  sku?: string;
  rating?: {
    value: string;
    count: string;
    bestRating?: string;
    worstRating?: string;
  };
  features?: string[];
}

const ProductSchema = ({
  name,
  description,
  brand = "Dunk Calculator",
  category = "Sports Application",
  price = "0",
  currency = "USD",
  availability = "InStock",
  condition = "NewCondition",
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  sku,
  rating,
  features = []
}: ProductSchemaProps) => {
  const productData = {
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand
    },
    category,
    image: [image],
    url: url || "https://dunkcalculator.com/",
    ...(sku && { sku }),
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      itemCondition: `https://schema.org/${condition}`,
      seller: {
        "@type": "Organization",
        name: brand
      }
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.value,
        ratingCount: rating.count,
        bestRating: rating.bestRating || "5",
        worstRating: rating.worstRating || "1"
      }
    }),
    ...(features.length > 0 && {
      additionalProperty: features.map(feature => ({
        "@type": "PropertyValue",
        name: "Feature",
        value: feature
      }))
    }),
    manufacturer: {
      "@type": "Organization",
      name: brand,
      url: "https://dunkcalculator.com/"
    }
  };

  return <StructuredData type="Product" data={productData} />;
};

export default ProductSchema;
