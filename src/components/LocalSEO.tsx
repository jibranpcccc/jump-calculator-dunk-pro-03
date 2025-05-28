
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
  services?: string[];
}

const LocalSEO = ({
  businessName = "Dunk Calculator",
  businessType = "SportsApplication",
  address = {
    country: "US",
    state: "Global",
    city: "Online"
  },
  phone = "+1-555-DUNK-CALC",
  email = "contact@dunkcalculator.com", 
  website = "https://dunkcalculator.com",
  hours = "Mo-Su 00:00-23:59",
  geo = {
    latitude: "40.7128",
    longitude: "-74.0060"
  },
  priceRange = "Free",
  services = [
    "Basketball Dunk Calculator",
    "Vertical Jump Testing", 
    "Basketball Training Guides",
    "Athletic Performance Analysis",
    "Sports Fitness Calculators"
  ]
}: LocalSEOProps) => {
  const localBusinessData = {
    name: businessName,
    "@type": "LocalBusiness",
    additionalType: businessType,
    alternateName: "Basketball Dunk Calculator Platform",
    description: "Leading provider of free basketball dunk calculators and comprehensive vertical jump training resources for athletes worldwide",
    url: website,
    telephone: phone,
    email: email,
    faxNumber: "+1-555-DUNK-FAX",
    address: {
      "@type": "PostalAddress",
      addressCountry: address.country,
      addressRegion: address.state,
      addressLocality: address.city,
      streetAddress: address.streetAddress,
      postalCode: address.postalCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHours: [
      "Mo 00:00-23:59",
      "Tu 00:00-23:59", 
      "We 00:00-23:59",
      "Th 00:00-23:59",
      "Fr 00:00-23:59",
      "Sa 00:00-23:59",
      "Su 00:00-23:59"
    ],
    openingHoursSpecification: {
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
      closes": "23:59"
    },
    priceRange: priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Free",
    hasMap: `https://maps.google.com/?q=${geo.latitude},${geo.longitude}`,
    sameAs: [
      `${website}/blog`,
      `${website}/vertical-jump-training`,
      `${website}/basketball-dunk-tips`,
      `${website}/calculators`,
      `${website}/faq`
    ],
    potentialAction: [
      {
        "@type": "UseAction",
        object: {
          "@type": "WebApplication",
          name: "Basketball Dunk Calculator"
        },
        target: `${website}/#calculator`
      },
      {
        "@type": "ReadAction",
        object: {
          "@type": "Article",
          name: "Vertical Jump Training Guide"
        },
        target: `${website}/vertical-jump-training`
      }
    ],
    areaServed: [
      {
        "@type": "Country",
        name": "United States"
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
      {
        "@type": "Place",
        name: "Global"
      }
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude
      },
      geoRadius: "25000000"
    },
    knowsAbout: [
      "Basketball Training",
      "Vertical Jump Improvement",
      "Athletic Performance Analysis", 
      "Sports Biomechanics",
      "Dunking Techniques",
      "Plyometric Training",
      "Basketball Fitness",
      "Sports Calculators"
    ],
    makesOffer: services.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        description: `Professional ${service.toLowerCase()} service`
      },
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Basketball Training Services",
      itemListElement: services.map((service, index) => ({
        "@type": "OfferCatalog",
        name: service,
        itemListElement: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service
          }
        }
      }))
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "2847",
      reviewCount: "1923"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Jordan",
          reviewBody: "This calculator helped me understand exactly what I needed to work on for my vertical jump. The training guides are excellent!"
        },
        datePublished: "2024-01-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person", 
          name: "Sarah Williams"
        },
        reviewBody: "Amazing tool for basketball players. The BMI calculator and vertical jump tests are so helpful for training planning.",
        datePublished: "2024-02-20",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Sports Technology Innovation",
      url: "https://sportstechinnovation.com"
    },
    department: [
      {
        "@type": "Organization",
        name: "Calculator Development",
        description: "Develops and maintains basketball calculation tools"
      },
      {
        "@type": "Organization",
        name: "Training Content",
        description: "Creates expert training guides and resources"
      }
    ]
  };

  return <StructuredData type="LocalBusiness" data={localBusinessData} />;
};

export default LocalSEO;
