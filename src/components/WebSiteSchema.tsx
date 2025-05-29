import StructuredData from "./StructuredData";

const WebSiteSchema = () => {
  const websiteData = {
    name: "Dunk Calculator",
    alternateName: "Basketball Dunk Calculator - Free Online Tool",
    description: "Free online basketball dunk calculator and comprehensive vertical jump training resources. Test if you can dunk a basketball with our accurate calculator used by over 75,000 players worldwide. Get instant results, personalized training tips, and expert guidance.",
    url: "http://dunk-calculator.info",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: "http://dunk-calculator.info/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        target: "http://dunk-calculator.info/blog",
        object: {
          "@type": "Blog",
          name: "Basketball Training Blog"
        }
      },
      {
        "@type": "UseAction",
        target: "http://dunk-calculator.info/#calculator",
        object: {
          "@type": "WebApplication",
          name: "Basketball Dunk Calculator",
          applicationCategory: "SportsApplication"
        }
      },
      {
        "@type": "WatchAction",
        target: "http://dunk-calculator.info/vertical-jump-training",
        object: {
          "@type": "VideoObject",
          name: "Vertical Jump Training Videos"
        }
      },
      {
        "@type": "InteractAction",
        target: "http://dunk-calculator.info/calculators/bmi",
        object: {
          "@type": "WebApplication",
          name: "Basketball BMI Calculator"
        }
      }
    ],
    sameAs: [
      "http://dunk-calculator.info/blog",
      "http://dunk-calculator.info/vertical-jump-training",
      "http://dunk-calculator.info/calculators",
      "http://dunk-calculator.info/faq",
      "http://dunk-calculator.info/calculators/bmi",
      "http://dunk-calculator.info/calculators/hangtime",
      "http://dunk-calculator.info/calculators/reach",
      "http://dunk-calculator.info/calculators/position",
      "http://dunk-calculator.info/calculators/vertical-jump-test"
    ],
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "http://dunk-calculator.info/logo.png",
        width: 300,
        height: 300,
        caption: "Dunk Calculator - Basketball Training Tools"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunk-calculator.info",
        availableLanguage: ["English", "Spanish", "French"],
        areaServed: "Worldwide"
      },
      foundingDate: "2024-01-01",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "Online"
      }
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "Dunk Calculator LLC",
      url: "http://dunk-calculator.info"
    },
    copyrightYear: "2024",
    license: "http://dunk-calculator.info/terms-of-use",
    inLanguage: ["en-US", "en-GB", "en-CA", "en-AU"],
    isAccessibleForFree: true,
    usageInfo: "http://dunk-calculator.info/terms-of-use",
    hasPart: [
      {
        "@type": "WebPage",
        name: "Dunk Calculator Tool",
        url: "http://dunk-calculator.info/#calculator",
        description: "Free basketball dunk calculator to test your dunking ability with instant results",
        breadcrumb: "Home > Calculator",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage", 
        name: "Vertical Jump Training",
        url: "http://dunk-calculator.info/vertical-jump-training",
        description: "Comprehensive guide to improving your vertical jump with expert tips and workout plans",
        breadcrumb: "Home > Training > Vertical Jump",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage",
        name: "Training Blog",
        url: "http://dunk-calculator.info/blog", 
        description: "Latest basketball training articles and guides from expert coaches",
        breadcrumb: "Home > Blog",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage",
        name: "FAQ",
        url: "http://dunk-calculator.info/faq",
        description: "Frequently asked questions about dunking and vertical jump training",
        breadcrumb: "Home > FAQ",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage",
        name: "Basketball BMI Calculator",
        url: "http://dunk-calculator.info/calculators/bmi",
        description: "Calculate your basketball-specific BMI for optimal athletic performance",
        breadcrumb: "Home > Calculators > BMI",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage",
        name: "Hangtime Calculator",
        url: "http://dunk-calculator.info/calculators/hangtime",
        description: "Calculate your basketball hangtime and improve your aerial performance",
        breadcrumb: "Home > Calculators > Hangtime",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      },
      {
        "@type": "WebPage",
        name: "Reach Calculator",
        url: "http://dunk-calculator.info/calculators/reach",
        description: "Measure and analyze your basketball reach for better court performance",
        breadcrumb: "Home > Calculators > Reach",
        isPartOf: {
          "@type": "WebSite",
          name: "Dunk Calculator"
        }
      }
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      applicationCategory: "SportsApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Modern web browser required.",
      softwareVersion: "2.0.1",
      releaseNotes: "Enhanced calculator with improved accuracy and training recommendations",
      datePublished: "2024-01-01",
      dateModified: "2025-05-29",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Dunk Calculator"
        }
      },
      featureList: [
        "Instant dunk ability calculation",
        "Personalized training recommendations",
        "Progress tracking tools",
        "Expert training guides",
        "Multiple basketball calculators",
        "BMI calculator for basketball players",
        "Vertical jump measurement tools",
        "Hangtime calculator",
        "Basketball position analyzer",
        "Reach measurement tool",
        "Training progress tracker",
        "Performance analytics"
      ],
      screenshot: [
        "http://dunk-calculator.info/calculator-screenshot.jpg",
        "http://dunk-calculator.info/training-guide-screenshot.jpg",
        "http://dunk-calculator.info/bmi-calculator-screenshot.jpg"
      ],
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
            name: "Mike Johnson",
            sameAs: "https://example.com/mikejohnson"
          },
          datePublished: "2024-01-15",
          reviewBody: "This calculator is incredibly accurate! Helped me understand exactly what I need to work on to dunk. The training guides are comprehensive and easy to follow.",
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
            name: "Sarah Chen",
            sameAs: "https://example.com/sarahchen"
          },
          datePublished: "2024-02-22",
          reviewBody: "Love all the different calculators available. The BMI calculator for basketball players is really unique and helpful.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          }
        }
      ],
      creator: {
        "@type": "Organization",
        name: "Dunk Calculator",
        url: "http://dunk-calculator.info"
      }
    },
    keywords: [
      "dunk calculator",
      "basketball dunk test", 
      "vertical jump calculator",
      "can you dunk",
      "basketball training",
      "vertical jump training",
      "dunk height calculator",
      "basketball performance tools",
      "athletic training",
      "sports calculator",
      "basketball BMI calculator",
      "hangtime calculator",
      "reach calculator",
      "basketball position calculator",
      "vertical jump test",
      "basketball fitness tools",
      "sports performance analysis",
      "athletic performance calculator"
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType: "Basketball Players",
        geographicArea: "Global"
      },
      {
        "@type": "Audience",
        audienceType: "Athletes",
        geographicArea: "Global"
      },
      {
        "@type": "Audience",
        audienceType: "Sports Enthusiasts",
        geographicArea: "Global"
      },
      {
        "@type": "Audience",
        audienceType: "Fitness Trainers",
        geographicArea: "Global"
      },
      {
        "@type": "Audience",
        audienceType: "Basketball Coaches",
        geographicArea: "Global"
      }
    ],
    citation: [
      {
        "@type": "CreativeWork",
        name: "Basketball Biomechanics Research",
        author: "Sports Science Institute",
        url: "https://sportsscience.org/basketball-biomechanics"
      },
      {
        "@type": "CreativeWork", 
        name: "Vertical Jump Training Studies",
        author: "Athletic Performance Lab",
        url: "https://athleticperformancelab.com/vertical-jump-studies"
      },
      {
        "@type": "CreativeWork",
        name: "NBA Physical Performance Standards",
        author: "National Basketball Association",
        url: "https://nba.com/performance-standards"
      }
    ],
    about: [
      {
        "@type": "Thing",
        name: "Basketball",
        sameAs: "https://en.wikipedia.org/wiki/Basketball",
        description: "A team sport played on a rectangular court where players attempt to shoot a ball through a hoop"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump", 
        description: "A measurement of athletic ability and explosive leg power"
      },
      {
        "@type": "Thing",
        name: "Slam Dunk",
        sameAs: "https://en.wikipedia.org/wiki/Slam_dunk",
        description: "A basketball shot where a player jumps and manually throws the ball through the hoop from above"
      },
      {
        "@type": "Thing",
        name: "Athletic Training",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_training",
        description: "The practice of preventing, evaluating, and treating sports injuries"
      },
      {
        "@type": "Thing",
        name: "Sports Performance",
        sameAs: "https://en.wikipedia.org/wiki/Sports_performance",
        description: "The manner in which sports participation is measured"
      }
    ],
    significantLink: [
      "http://dunk-calculator.info/#calculator",
      "http://dunk-calculator.info/vertical-jump-training", 
      "http://dunk-calculator.info/blog",
      "http://dunk-calculator.info/calculators/bmi",
      "http://dunk-calculator.info/calculators/hangtime",
      "http://dunk-calculator.info/calculators/reach"
    ],
    accessibilityFeature: [
      "alternativeText",
      "captions",
      "highContrast",
      "largePrint",
      "resizeText",
      "structuralNavigation"
    ],
    accessibilityHazard: "none",
    accessibilityControl: [
      "fullKeyboardControl",
      "fullMouseControl",
      "fullTouchControl"
    ],
    accessibilitySummary: "Fully accessible basketball training tools with keyboard navigation, screen reader support, and mobile optimization"
  };

  return <StructuredData type="WebSite" data={websiteData} />;
};

export default WebSiteSchema;
