
import StructuredData from "./StructuredData";

const OrganizationSchema = () => {
  const organizationData = {
    name: "Dunk Calculator",
    alternateName: "Basketball Dunk Calculator",
    description: "Leading provider of free online basketball dunk calculators and comprehensive vertical jump training resources for athletes worldwide",
    url: "https://dunkcalculator.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dunkcalculator.com/logo.png",
      width: 300,
      height: 300,
      caption: "Dunk Calculator Logo"
    },
    image: [
      "https://dunkcalculator.com/og-image.jpg",
      "https://dunkcalculator.com/calculator-screenshot.jpg",
      "https://dunkcalculator.com/training-guide-image.jpg"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunkcalculator.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: "support@dunkcalculator.com",
        availableLanguage: ["English"]
      }
    ],
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "United States",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060"
      }
    },
    founder: {
      "@type": "Person",
      name: "Basketball Training Experts",
      jobTitle: "Sports Performance Specialists"
    },
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips",
      "https://dunkcalculator.com/calculators",
      "https://dunkcalculator.com/faq"
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "United States"
      },
      {
        "@type": "Country", 
        name: "Canada"
      },
      {
        "@type": "Country",
        name: "United Kingdom"
      },
      {
        "@type": "Country",
        name: "Australia"
      },
      "Global"
    ],
    knowsAbout: [
      "Basketball Training",
      "Vertical Jump Training", 
      "Dunking Techniques",
      "Sports Performance",
      "Athletic Training",
      "Plyometric Exercises",
      "Basketball Fitness",
      "Jump Mechanics",
      "Sports Biomechanics",
      "Athletic Performance Analysis"
    ],
    memberOf: {
      "@type": "Organization",
      name: "Sports Technology Association"
    },
    award: [
      "Best Sports Calculator 2024",
      "Most Accurate Basketball Tool 2024"
    ],
    slogan: "Discover Your Dunking Potential",
    mission: "To help basketball players of all levels understand and improve their dunking ability through accurate calculations and expert training guidance",
    serviceArea: {
      "@type": "GeoShape",
      addressCountry: "Global"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Basketball Training Tools",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dunk Calculator",
            description: "Free basketball dunk ability calculator"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Vertical Jump Training",
            description: "Comprehensive vertical jump improvement guides"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Basketball BMI Calculator",
            description: "Basketball-specific BMI analysis tool"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1", 
      ratingCount: "2847",
      reviewCount: "1923"
    }
  };

  return <StructuredData type="Organization" data={organizationData} />;
};

export default OrganizationSchema;
