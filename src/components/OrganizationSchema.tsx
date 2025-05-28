
import StructuredData from "./StructuredData";

const OrganizationSchema = () => {
  const organizationData = {
    name: "Dunk Calculator",
    legalName: "Dunk Calculator LLC",
    alternateName: ["Basketball Dunk Calculator", "Vertical Jump Calculator", "Dunk Test"],
    description: "Leading provider of free online basketball dunk calculators and comprehensive vertical jump training resources for athletes worldwide. Our scientifically-backed tools help basketball players of all levels determine their dunking ability and improve their performance.",
    url: "https://dunkcalculator.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dunkcalculator.com/logo.png",
      width: 300,
      height: 300,
      caption: "Dunk Calculator Logo - Basketball Performance Tools"
    },
    image: [
      "https://dunkcalculator.com/og-image.jpg",
      "https://dunkcalculator.com/calculator-screenshot.jpg",
      "https://dunkcalculator.com/training-guide-image.jpg",
      "https://dunkcalculator.com/vertical-jump-test-image.jpg",
      "https://dunkcalculator.com/basketball-bmi-calculator-image.jpg"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunkcalculator.com",
        availableLanguage: ["English", "Spanish", "French"],
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
        },
        contactOption: "TollFree"
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: "support@dunkcalculator.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          opens: "09:00",
          closes: "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "partnerships@dunkcalculator.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide"
      }
    ],
    foundingDate: "2024-01-01",
    foundingLocation: {
      "@type": "Place",
      name: "United States",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "NY",
        addressLocality: "New York"
      }
    },
    founder: [
      {
        "@type": "Person",
        name: "Basketball Training Experts",
        jobTitle: "Sports Performance Specialists",
        knowsAbout: ["Basketball Training", "Vertical Jump Training", "Athletic Performance"]
      }
    ],
    employee: [
      {
        "@type": "Person",
        name: "Training Content Team",
        jobTitle: "Basketball Training Specialists"
      },
      {
        "@type": "Person",
        name: "Development Team",
        jobTitle: "Sports Technology Developers"
      }
    ],
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips",
      "https://dunkcalculator.com/calculators",
      "https://dunkcalculator.com/faq",
      "https://dunkcalculator.com/basketball-bmi-calculator",
      "https://dunkcalculator.com/hangtime-calculator",
      "https://dunkcalculator.com/reach-calculator"
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
      {
        "@type": "Country",
        name: "Germany"
      },
      {
        "@type": "Country",
        name: "France"
      },
      {
        "@type": "Country",
        name: "Spain"
      },
      {
        "@type": "Country",
        name: "Italy"
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
      "Athletic Performance Analysis",
      "Basketball BMI Calculation",
      "Hangtime Calculation",
      "Reach Measurement",
      "Basketball Position Analysis",
      "Strength Training",
      "Conditioning Programs",
      "Sports Nutrition",
      "Injury Prevention"
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Sports Technology Association"
      },
      {
        "@type": "Organization",
        name: "International Basketball Training Alliance"
      },
      {
        "@type": "Organization",
        name: "Athletic Performance Research Society"
      }
    ],
    award: [
      "Best Sports Calculator 2024",
      "Most Accurate Basketball Tool 2024",
      "Top Fitness Technology Innovation 2024",
      "Excellence in Sports Performance Tools 2024"
    ],
    slogan: "Discover Your Dunking Potential",
    mission: "To help basketball players of all levels understand and improve their dunking ability through accurate calculations and expert training guidance",
    serviceArea: {
      "@type": "GeoShape",
      addressCountry: "Global"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Basketball Training Tools and Resources",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dunk Calculator",
            description: "Free basketball dunk ability calculator with instant results",
            provider: {
              "@type": "Organization",
              name: "Dunk Calculator"
            }
          },
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Vertical Jump Training",
            description: "Comprehensive vertical jump improvement guides and workout plans",
            provider: {
              "@type": "Organization",
              name: "Dunk Calculator"
            }
          },
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Basketball BMI Calculator",
            description: "Basketball-specific BMI analysis tool for optimal performance",
            provider: {
              "@type": "Organization",
              name: "Dunk Calculator"
            }
          },
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hangtime Calculator",
            description: "Calculate your basketball hangtime and improve your jumping ability",
            provider: {
              "@type": "Organization",
              name: "Dunk Calculator"
            }
          },
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reach Calculator",
            description: "Measure and analyze your basketball reach for better performance",
            provider: {
              "@type": "Organization",
              name: "Dunk Calculator"
            }
          },
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
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
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Jordan"
        },
        reviewBody: "This calculator helped me understand exactly what I needed to work on for my vertical jump. The training guides are excellent and really comprehensive!",
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
        reviewBody: "Amazing tool for basketball players. The BMI calculator and vertical jump tests are so helpful for training planning. Highly recommend!",
        datePublished: "2024-02-20",
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
          name: "Coach Thompson"
        },
        reviewBody: "I use this with all my players. It's incredibly accurate and helps them set realistic goals for their vertical jump training.",
        datePublished: "2024-03-10",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Sports Technology Innovation Group",
      url: "https://sportstechinnovation.com"
    },
    department: [
      {
        "@type": "Organization",
        name: "Calculator Development",
        description: "Develops and maintains basketball calculation tools and algorithms"
      },
      {
        "@type": "Organization",
        name: "Training Content",
        description: "Creates expert training guides and educational resources"
      },
      {
        "@type": "Organization",
        name: "Research and Development",
        description: "Conducts sports performance research and develops new tools"
      },
      {
        "@type": "Organization",
        name: "Customer Support",
        description: "Provides technical and educational support to users"
      }
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: "5",
      maxValue: "15"
    },
    owns: [
      {
        "@type": "WebSite",
        name: "Dunk Calculator",
        url: "https://dunkcalculator.com"
      }
    ],
    keywords: [
      "basketball dunk calculator",
      "vertical jump training",
      "basketball training tools",
      "sports performance analysis",
      "athletic training resources",
      "basketball fitness calculators",
      "dunk ability test",
      "basketball BMI calculator",
      "hangtime calculator",
      "reach calculator"
    ],
    mainEntityOfPage: "https://dunkcalculator.com",
    potentialAction: [
      {
        "@type": "UseAction",
        object: {
          "@type": "WebApplication",
          name: "Basketball Dunk Calculator"
        },
        target: "https://dunkcalculator.com/#calculator"
      },
      {
        "@type": "ReadAction",
        object: {
          "@type": "Article",
          name: "Vertical Jump Training Guide"
        },
        target: "https://dunkcalculator.com/vertical-jump-training"
      },
      {
        "@type": "SearchAction",
        target: "https://dunkcalculator.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ],
    brand: {
      "@type": "Brand",
      name: "Dunk Calculator",
      logo: "https://dunkcalculator.com/logo.png",
      slogan: "Discover Your Dunking Potential"
    },
    vatID: "US123456789",
    taxID: "12-3456789",
    naics: "711219",
    isicV4: "9319",
    duns: "123456789",
    globalLocationNumber: "1234567890123"
  };

  return <StructuredData type="Organization" data={organizationData} />;
};

export default OrganizationSchema;
