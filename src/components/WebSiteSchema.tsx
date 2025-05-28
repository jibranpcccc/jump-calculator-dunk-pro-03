
import StructuredData from "./StructuredData";

const WebSiteSchema = () => {
  const websiteData = {
    name: "Dunk Calculator",
    alternateName: "Basketball Dunk Calculator",
    description: "Free online basketball dunk calculator and vertical jump training resources. Test if you can dunk a basketball instantly.",
    url: "https://dunkcalculator.com",
    inLanguage: "en-US",
    copyrightYear: "2024",
    copyrightHolder: {
      "@type": "Organization",
      name: "Dunk Calculator"
    },
    creator: {
      "@type": "Organization",
      name: "Dunk Calculator"
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png"
      }
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://dunkcalculator.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "UseAction",
        object: {
          "@type": "WebApplication",
          name: "Dunk Calculator Tool"
        }
      }
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      applicationCategory: "SportsApplication",
      operatingSystem: "All"
    },
    about: [
      {
        "@type": "Thing",
        name: "Basketball"
      },
      {
        "@type": "Thing", 
        name: "Vertical Jump Training"
      },
      {
        "@type": "Thing",
        name: "Sports Performance"
      }
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players"
    }
  };

  return <StructuredData type="WebSite" data={websiteData} />;
};

export default WebSiteSchema;
