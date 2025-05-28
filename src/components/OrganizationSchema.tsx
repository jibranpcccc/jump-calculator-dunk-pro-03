
import StructuredData from "./StructuredData";

const OrganizationSchema = () => {
  const organizationData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and vertical jump training resources",
    url: "https://dunkcalculator.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dunkcalculator.com/logo.png",
      width: 200,
      height: 200
    },
    image: "https://dunkcalculator.com/og-image.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-DUNK-CALC",
      contactType: "customer service",
      email: "contact@dunkcalculator.com"
    },
    foundingDate: "2024",
    foundingLocation: "United States",
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips"
    ],
    areaServed: {
      "@type": "Country",
      name: "Global"
    },
    knowsAbout: [
      "Basketball Training",
      "Vertical Jump Training",
      "Dunking Techniques",
      "Sports Performance",
      "Athletic Training"
    ]
  };

  return <StructuredData type="WebSite" data={organizationData} />;
};

export default OrganizationSchema;
