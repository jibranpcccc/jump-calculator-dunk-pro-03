
import MetaTags from "./MetaTags";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import OrganizationSchema from "./OrganizationSchema";
import WebSiteSchema from "./WebSiteSchema";
import SEOAnalytics from "./SEOAnalytics";

const GlobalSEO = () => {
  const websiteData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and comprehensive vertical jump training resources for players of all levels",
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
      "https://dunkcalculator.com/calculators"
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      description: "Calculate if you can dunk a basketball based on your height, reach, and vertical jump measurements",
      applicationCategory: "SportsApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Instant dunk ability calculation",
        "Personalized training recommendations",
        "Progress tracking tools",
        "Expert training guides",
        "Multiple basketball calculators"
      ],
      screenshot: "https://dunkcalculator.com/calculator-screenshot.jpg"
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png"
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
      "basketball performance tools"
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
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height"
        canonicalUrl="https://dunkcalculator.com/"
      />
      <Performance />
      <OrganizationSchema />
      <WebSiteSchema />
      <SEOAnalytics />
      <StructuredData type="WebSite" data={websiteData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
    </>
  );
};

export default GlobalSEO;
