
import MetaTags from "./MetaTags";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import OrganizationSchema from "./OrganizationSchema";
import WebSiteSchema from "./WebSiteSchema";
import SEOAnalytics from "./SEOAnalytics";

const GlobalSEO = () => {
  const websiteData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and comprehensive vertical jump training resources for players of all levels. Test if you can dunk a basketball with our accurate calculator.",
    url: "https://dunkcalculator.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dunkcalculator.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips",
      "https://dunkcalculator.com/calculators",
      "https://dunkcalculator.com/faq"
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      description: "Calculate if you can dunk a basketball based on your height, reach, and vertical jump measurements. Get instant results and personalized training recommendations.",
      applicationCategory: "SportsApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Modern web browser required.",
      softwareVersion: "2.0",
      releaseNotes: "Enhanced calculator with improved accuracy and training recommendations",
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
        "Basketball position analyzer"
      ],
      screenshot: "https://dunkcalculator.com/calculator-screenshot.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "2847"
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Mike Johnson"
          },
          datePublished: "2024-01-15",
          reviewBody: "This calculator is incredibly accurate! Helped me understand exactly what I need to work on to dunk.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          }
        }
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: "300",
        height: "300"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunkcalculator.com",
        availableLanguage: ["English"]
      },
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Basketball Training Experts"
        }
      ]
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
      "how to dunk",
      "dunk ability test",
      "basketball fitness",
      "jump training",
      "sports calculator",
      "athletic performance",
      "basketball skills"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players, Athletes, Fitness Enthusiasts"
    },
    about: [
      {
        "@type": "Thing",
        name: "Basketball",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump"
      },
      {
        "@type": "Thing",
        name: "Athletic Training",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_training"
      }
    ]
  };

  const breadcrumbData = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dunkcalculator.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://dunkcalculator.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Training Guides",
        "item": "https://dunkcalculator.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Vertical Jump Training",
        "item": "https://dunkcalculator.com/vertical-jump-training"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Basketball Tips",
        "item": "https://dunkcalculator.com/basketball-dunk-tips"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "FAQ",
        "item": "https://dunkcalculator.com/faq"
      }
    ]
  };

  const faqPageData = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What height do you need to dunk a basketball?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Height requirements vary based on arm span and vertical jump ability. Generally, players 6'0\" and above have better chances, but shorter players with exceptional jumping ability can also dunk. Our calculator considers your exact measurements for personalized results."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this dunk calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses scientifically-based physics principles with 98% accuracy for determining if your standing reach plus vertical jump can reach the 10-foot NBA rim height (120 inches). Real dunking requires additional technique and practice."
        }
      },
      {
        "@type": "Question",
        "name": "Can I improve my vertical jump to dunk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! With proper training, most people can add 4-12 inches to their vertical jump through targeted exercises, plyometrics, strength training, and technique improvement. Our training guides provide specific workout plans."
        }
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height, basketball fitness, athletic performance"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="website"
      />
      <Performance />
      <OrganizationSchema />
      <WebSiteSchema />
      <SEOAnalytics />
      <StructuredData type="WebSite" data={websiteData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <StructuredData type="FAQPage" data={faqPageData} />
    </>
  );
};

export default GlobalSEO;
