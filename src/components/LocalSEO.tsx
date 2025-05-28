
import StructuredData from "./StructuredData";

interface LocalSEOProps {
  businessName?: string;
  businessType?: string;
  address?: {
    streetAddress?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
  priceRange?: string;
}

const LocalSEO = ({
  businessName = "Dunk Calculator",
  businessType = "SportsApplication",
  address = {
    country: "US"
  },
  phone = "+1-555-DUNK-CALC",
  email = "contact@dunkcalculator.com", 
  website = "https://dunkcalculator.com",
  hours = "Mo-Su 00:00-23:59",
  geo = {
    latitude: "40.7128",
    longitude: "-74.0060"
  },
  priceRange = "Free"
}: LocalSEOProps) => {
  const localBusinessData = {
    name: businessName,
    "@type": "LocalBusiness",
    additionalType: businessType,
    url: website,
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHours: hours,
    priceRange: priceRange,
    hasMap: `https://maps.google.com/?q=${geo.latitude},${geo.longitude}`,
    sameAs: [
      `${website}/blog`,
      `${website}/vertical-jump-training`,
      `${website}/basketball-dunk-tips`
    ],
    potentialAction: {
      "@type": "UseAction",
      object: {
        "@type": "WebApplication",
        name: "Basketball Dunk Calculator"
      }
    },
    areaServed: {
      "@type": "Country",
      name: "Global"
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude
      },
      geoRadius: "10000"
    }
  };

  return <StructuredData type="LocalBusiness" data={localBusinessData} />;
};

export default LocalSEO;
