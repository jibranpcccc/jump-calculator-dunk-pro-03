
import MetaTags from "./MetaTags";
import Performance from "./Performance";
import StructuredData from "./StructuredData";

const GlobalSEO = () => {
  const websiteData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and vertical jump training resources",
    url: "https://dunkcalculator.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dunkcalculator.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips"
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      description: "Calculate if you can dunk a basketball based on your measurements",
      applicationCategory: "SportsApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com"
    }
  };

  return (
    <>
      <MetaTags
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!"
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training"
        canonicalUrl="https://dunkcalculator.com/"
      />
      <Performance />
      <StructuredData type="WebSite" data={websiteData} />
    </>
  );
};

export default GlobalSEO;
