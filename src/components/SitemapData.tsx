
import StructuredData from "./StructuredData";

const SitemapData = () => {
  const sitemapData = {
    "@type": "ItemList",
    "name": "Dunk Calculator Sitemap",
    "description": "Complete sitemap of all pages and resources on Dunk Calculator",
    "numberOfItems": 15,
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home - Basketball Dunk Calculator",
        "description": "Free online basketball dunk calculator and training resources",
        "url": "https://dunkcalculator.com/",
        "potentialAction": {
          "@type": "UseAction",
          "object": {
            "@type": "WebApplication",
            "name": "Dunk Calculator"
          }
        }
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Dunk Calculator Tool",
        "description": "Test if you can dunk a basketball with our accurate calculator",
        "url": "https://dunkcalculator.com/dunk-calculator"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Vertical Jump Training",
        "description": "Comprehensive vertical jump training guides and workout plans",
        "url": "https://dunkcalculator.com/vertical-jump-training"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Basketball Dunk Tips",
        "description": "Expert tips and techniques for successful dunking",
        "url": "https://dunkcalculator.com/basketball-dunk-tips"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Basketball BMI Calculator",
        "description": "Calculate your basketball-specific BMI for optimal performance",
        "url": "https://dunkcalculator.com/basketball-bmi-calculator"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Hangtime Calculator",
        "description": "Calculate your basketball hangtime and improve aerial performance",
        "url": "https://dunkcalculator.com/hangtime-calculator"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Reach Calculator",
        "description": "Measure and analyze your basketball reach",
        "url": "https://dunkcalculator.com/reach-calculator"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Basketball Position Calculator",
        "description": "Find your optimal basketball position based on physical attributes",
        "url": "https://dunkcalculator.com/basketball-position-calculator"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 9,
        "name": "Vertical Jump Test",
        "description": "Test and measure your vertical jump ability",
        "url": "https://dunkcalculator.com/vertical-jump-test"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 10,
        "name": "All Calculators",
        "description": "Complete list of basketball performance calculators",
        "url": "https://dunkcalculator.com/calculators"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 11,
        "name": "Training Blog",
        "description": "Latest basketball training articles and guides",
        "url": "https://dunkcalculator.com/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 12,
        "name": "FAQ",
        "description": "Frequently asked questions about dunking and training",
        "url": "https://dunkcalculator.com/faq"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 13,
        "name": "About Us",
        "description": "Learn about our team and mission",
        "url": "https://dunkcalculator.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 14,
        "name": "Contact",
        "description": "Get in touch with our team",
        "url": "https://dunkcalculator.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 15,
        "name": "Terms of Use",
        "description": "Terms and conditions for using our services",
        "url": "https://dunkcalculator.com/terms-of-use"
      }
    ],
    "mainEntity": {
      "@type": "WebSite",
      "name": "Dunk Calculator",
      "url": "https://dunkcalculator.com",
      "description": "Free basketball dunk calculator and comprehensive training resources"
    }
  };

  return <StructuredData type="ItemList" data={sitemapData} />;
};

export default SitemapData;
