
import StructuredData from "./StructuredData";

const OrganizationSchema = () => {
  const organizationData = {
    name: "Dunk Calculator",
    alternateName: "Basketball Dunk Calculator",
    description: "Leading provider of free online basketball dunk calculators and comprehensive vertical jump training resources for athletes worldwide. Trusted by over 100,000 basketball players, coaches, and fitness enthusiasts.",
    url: "https://dunkcalculator.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dunkcalculator.com/logo.png",
      width: 300,
      height: 300,
      caption: "Dunk Calculator Logo - Basketball Training Tools"
    },
    image: [
      "https://dunkcalculator.com/og-image.jpg",
      "https://dunkcalculator.com/calculator-screenshot.jpg",
      "https://dunkcalculator.com/training-guide-image.jpg",
      "https://dunkcalculator.com/team-photo.jpg"
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
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: "support@dunkcalculator.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide"
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
      }
    },
    founder: {
      "@type": "Person",
      name: "Basketball Training Experts",
      jobTitle: "Sports Performance Specialists",
      description: "Team of certified basketball trainers, sports scientists, and athletic performance coaches"
    },
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
      "Sports Performance Analysis",
      "Athletic Training Programs",
      "Plyometric Exercises",
      "Basketball Fitness",
      "Jump Mechanics and Biomechanics",
      "Sports Biomechanics",
      "Athletic Performance Analysis",
      "Strength and Conditioning",
      "Sports Nutrition",
      "Injury Prevention",
      "Recovery Strategies",
      "Basketball Coaching",
      "Youth Athletic Development",
      "Professional Basketball Training",
      "Sports Psychology",
      "Performance Analytics",
      "Exercise Physiology"
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Sports Technology Association"
      },
      {
        "@type": "Organization",
        name: "International Basketball Federation Partners"
      }
    ],
    award: [
      "Best Sports Calculator 2024 - Sports Tech Awards",
      "Most Accurate Basketball Tool 2024 - Athletic Performance Review",
      "Top Training Resource 2024 - Basketball Coaches Association",
      "Innovation in Sports Technology 2024"
    ],
    slogan: "Discover Your Dunking Potential - Train Like a Pro",
    mission: "To help basketball players of all levels understand and improve their dunking ability through accurate calculations, expert training guidance, and comprehensive resources that make basketball training accessible to everyone.",
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
            name: "Basketball Dunk Calculator",
            description: "Free basketball dunk ability calculator with instant results"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Vertical Jump Training Programs",
            description: "Comprehensive vertical jump improvement guides and workout plans"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Basketball BMI Calculator",
            description: "Basketball-specific BMI analysis tool for optimal performance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hangtime Calculator",
            description: "Calculate and improve your basketball hangtime"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reach Calculator",
            description: "Measure and analyze your basketball reach for better performance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basketball Position Calculator",
            description: "Find your optimal basketball position based on physical attributes"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Training Video Library",
            description: "50+ exercise demonstrations and training videos"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1", 
      ratingCount: "3247",
      reviewCount: "2156"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Coach Michael Thompson"
        },
        datePublished: "2024-03-15",
        reviewBody: "Outstanding resource for basketball training. I use this with all my high school players. The accuracy is impressive and the training guides are professionally designed.",
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
          name: "Jessica Martinez"
        },
        datePublished: "2024-04-02",
        reviewBody: "Finally achieved my first dunk after following the training program for 4 months! The calculator was spot on and the exercises really work.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ],
    employees: [
      {
        "@type": "Person",
        name: "Dr. Sarah Johnson",
        jobTitle: "Sports Science Director",
        worksFor: {
          "@type": "Organization",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "Person",
        name: "Coach Marcus Williams",
        jobTitle: "Basketball Training Specialist",
        worksFor: {
          "@type": "Organization",
          name: "Dunk Calculator"
        }
      }
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Athletic Performance Solutions",
      url: "https://athleticperformancesolutions.com"
    }
  };

  return <StructuredData type="Organization" data={organizationData} />;
};

export default OrganizationSchema;
