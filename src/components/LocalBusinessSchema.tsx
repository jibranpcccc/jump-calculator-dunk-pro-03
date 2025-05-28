
import StructuredData from "./StructuredData";

const LocalBusinessSchema = () => {
  const businessData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and vertical jump training resources",
    url: "https://dunkcalculator.com",
    logo: "https://dunkcalculator.com/logo.png",
    image: "https://dunkcalculator.com/og-image.jpg",
    telephone: "+1-555-DUNK-CALC",
    email: "contact@dunkcalculator.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Online"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060"
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "Free",
    serviceArea: {
      "@type": "Country",
      name: "United States"
    },
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training"
    ],
    potentialAction: {
      "@type": "UseAction",
      object: {
        "@type": "WebApplication",
        name: "Basketball Dunk Calculator"
      }
    }
  };

  return <StructuredData type="WebSite" data={businessData} />;
};

export default LocalBusinessSchema;
