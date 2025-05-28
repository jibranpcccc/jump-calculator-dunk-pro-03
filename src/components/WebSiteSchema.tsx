
import StructuredData from "./StructuredData";

const WebSiteSchema = () => {
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
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png"
      }
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "Dunk Calculator"
    },
    copyrightYear: "2024",
    inLanguage: "en-US"
  };

  return <StructuredData type="WebSite" data={websiteData} />;
};

export default WebSiteSchema;
