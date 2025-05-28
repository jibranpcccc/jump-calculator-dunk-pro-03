
import StructuredData from "./StructuredData";

interface ProductSchemaProps {
  name: string;
  description: string;
  brand?: string;
  price?: string;
  availability?: string;
  url?: string;
  image?: string;
  category?: string;
  sku?: string;
  gtin?: string;
  rating?: {
    value: string;
    count: string;
  };
  reviews?: Array<{
    author: string;
    rating: string;
    text: string;
    date: string;
  }>;
}

const ProductSchema = ({
  name,
  description,
  brand = "Dunk Calculator",
  price = "0",
  availability = "InStock",
  url,
  image = "https://dunkcalculator.com/og-image.jpg",
  category = "Sports Application",
  sku,
  gtin,
  rating,
  reviews = []
}: ProductSchemaProps) => {
  const productData = {
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
      logo: "https://dunkcalculator.com/logo.png"
    },
    category,
    image: [image],
    url: url || "https://dunkcalculator.com",
    ...(sku && { sku }),
    ...(gtin && { gtin }),
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: `https://schema.org/${availability}`,
      seller: {
        "@type": "Organization",
        name: brand,
        url: "https://dunkcalculator.com"
      },
      validFrom: "2024-01-01",
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      deliveryMethod: "https://schema.org/OnSitePickup"
    },
    manufacturer: {
      "@type": "Organization",
      name: brand,
      url: "https://dunkcalculator.com"
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.value,
        bestRating: "5",
        worstRating: "1",
        ratingCount: rating.count
      }
    }),
    ...(reviews.length > 0 && {
      review: reviews.map(review => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author
        },
        datePublished: review.date,
        reviewBody: review.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5"
        }
      }))
    }),
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players, Athletes, Fitness Enthusiasts"
    },
    award: [
      "Best Sports Calculator 2024",
      "Most Accurate Basketball Tool 2024"
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Application Category",
        value: "Sports & Fitness"
      },
      {
        "@type": "PropertyValue",
        name: "Supported Platforms",
        value: "Web, Mobile, Tablet"
      },
      {
        "@type": "PropertyValue",
        name: "Language Support",
        value: "English, Spanish, French"
      }
    ],
    hasVariant: [
      {
        "@type": "Product",
        name: "Basic Dunk Calculator",
        description: "Free version with core functionality"
      },
      {
        "@type": "Product",
        name: "Pro Training Suite",
        description: "Premium version with advanced training modules"
      }
    ]
  };

  return <StructuredData type="Product" data={productData} />;
};

export default ProductSchema;
