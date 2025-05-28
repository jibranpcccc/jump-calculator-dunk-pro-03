
import StructuredData from "./StructuredData";

const WebSiteSchema = () => {
  const websiteData = {
    name: "Dunk Calculator",
    alternateName: "Basketball Dunk Calculator - Free Online Tool",
    description: "Free online basketball dunk calculator and comprehensive vertical jump training resources. Test if you can dunk a basketball with our accurate calculator used by over 75,000 players worldwide.",
    url: "https://dunkcalculator.com",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: "https://dunkcalculator.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        target: "https://dunkcalculator.com/blog"
      },
      {
        "@type": "UseAction",
        target: "https://dunkcalculator.com/#calculator",
        object: {
          "@type": "WebApplication",
          name: "Basketball Dunk Calculator"
        }
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
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: 300,
        height: 300
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunkcalculator.com"
      }
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com"
    },
    copyrightYear: "2024",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    hasPart: [
      {
        "@type": "WebPage",
        name: "Dunk Calculator Tool",
        url: "https://dunkcalculator.com/#calculator",
        description: "Free basketball dunk calculator to test your dunking ability"
      },
      {
        "@type": "WebPage", 
        name: "Vertical Jump Training",
        url: "https://dunkcalculator.com/vertical-jump-training",
        description: "Comprehensive guide to improving your vertical jump"
      },
      {
        "@type": "WebPage",
        name: "Basketball Dunk Tips", 
        url: "https://dunkcalculator.com/basketball-dunk-tips",
        description: "Expert tips and techniques for successful dunking"
      },
      {
        "@type": "WebPage",
        name: "Training Blog",
        url: "https://dunkcalculator.com/blog", 
        description: "Latest basketball training articles and guides"
      },
      {
        "@type": "WebPage",
        name: "FAQ",
        url: "https://dunkcalculator.com/faq",
        description: "Frequently asked questions about dunking and vertical jump training"
      }
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      applicationCategory: "SportsApplication",
      operatingSystem: "All"
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
      "sports calculator"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players, Athletes, Sports Enthusiasts, Fitness Trainers"
    },
    citation: [
      {
        "@type": "CreativeWork",
        name: "Basketball Biomechanics Research",
        author: "Sports Science Institute"
      },
      {
        "@type": "CreativeWork", 
        name: "Vertical Jump Training Studies",
        author: "Athletic Performance Lab"
      }
    ],
    about: [
      {
        "@type": "Thing",
        name: "Basketball",
        sameAs: "https://en.wikipedia.org/wiki/Basketball",
        description: "A team sport played on a rectangular court"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump", 
        description: "A measurement of athletic ability"
      },
      {
        "@type": "Thing",
        name: "Slam Dunk",
        sameAs: "https://en.wikipedia.org/wiki/Slam_dunk",
        description: "A basketball shot where a player jumps and manually throws the ball through the hoop"
      }
    ],
    significantLink: [
      "https://dunkcalculator.com/#calculator",
      "https://dunkcalculator.com/vertical-jump-training", 
      "https://dunkcalculator.com/basketball-dunk-tips",
      "https://dunkcalculator.com/blog"
    ]
  };

  return <StructuredData type="WebSite" data={websiteData} />;
};

export default WebSiteSchema;
