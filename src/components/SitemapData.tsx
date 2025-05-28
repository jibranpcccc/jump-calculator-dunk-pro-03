
import StructuredData from "./StructuredData";

const SitemapData = () => {
  const sitemapData = {
    "@type": "ItemList",
    "name": "Dunk Calculator Sitemap",
    "description": "Complete sitemap of all pages and resources on Dunk Calculator",
    "numberOfItems": 35,
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
        "name": "All Basketball Calculators",
        "description": "Complete collection of basketball performance calculators",
        "url": "https://dunkcalculator.com/calculators"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Hangtime Calculator",
        "description": "Calculate your basketball hangtime and improve aerial performance",
        "url": "https://dunkcalculator.com/calculators/hangtime"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Reach Calculator",
        "description": "Measure and analyze your basketball reach",
        "url": "https://dunkcalculator.com/calculators/reach"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Standing Reach Calculator",
        "description": "Calculate your standing reach for basketball and dunking",
        "url": "https://dunkcalculator.com/calculators/standing-reach"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Approach Jump Calculator",
        "description": "Analyze the effectiveness of your approach jump vs standing jump",
        "url": "https://dunkcalculator.com/calculators/approach-jump"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Vertical Jump Test",
        "description": "Test and measure your vertical jump ability",
        "url": "https://dunkcalculator.com/calculators/vertical-jump-test"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Basketball BMI Calculator",
        "description": "Calculate your basketball-specific BMI for optimal performance",
        "url": "https://dunkcalculator.com/calculators/bmi"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 9,
        "name": "Basketball Position Calculator",
        "description": "Find your optimal basketball position based on physical attributes",
        "url": "https://dunkcalculator.com/calculators/position"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 10,
        "name": "Max Hangtime Calculator",
        "description": "Calculate your maximum possible hangtime based on vertical jump",
        "url": "https://dunkcalculator.com/calculators/max-hangtime"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 11,
        "name": "Vertical Jump Improvement Calculator",
        "description": "Track and predict your vertical jump improvement progress",
        "url": "https://dunkcalculator.com/calculators/vertical-jump-improvement"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 12,
        "name": "Training Progress Tracker",
        "description": "Track your vertical jump training progress over time",
        "url": "https://dunkcalculator.com/tools/progress-tracker"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 13,
        "name": "Measurement Guides",
        "description": "Learn how to accurately measure basketball performance metrics",
        "url": "https://dunkcalculator.com/measurements"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 14,
        "name": "Standing Reach Guide",
        "description": "Complete guide on measuring your standing reach accurately",
        "url": "https://dunkcalculator.com/measurements/standing-reach"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 15,
        "name": "Vertical Jump Guide",
        "description": "Learn the proper techniques for measuring vertical jump",
        "url": "https://dunkcalculator.com/measurements/vertical-jump"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 16,
        "name": "Basketball Hoop Heights",
        "description": "Official basketball hoop heights and training recommendations",
        "url": "https://dunkcalculator.com/measurements/hoop-heights"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 17,
        "name": "Other Basketball Measurements",
        "description": "Wingspan, hand size and other important basketball measurements",
        "url": "https://dunkcalculator.com/measurements/other-measurements"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 18,
        "name": "Vertical Jump Training",
        "description": "Comprehensive vertical jump training guides and workout plans",
        "url": "https://dunkcalculator.com/vertical-jump-training"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 19,
        "name": "Plyometric Exercises",
        "description": "Explosive plyometric exercises for vertical jump improvement",
        "url": "https://dunkcalculator.com/vertical-jump-training/plyometrics"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 20,
        "name": "Strength Training for Vertical Jump",
        "description": "Weight training exercises to build jumping power",
        "url": "https://dunkcalculator.com/vertical-jump-training/strength-training"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 21,
        "name": "Nutrition for Jumpers",
        "description": "Nutrition guidance for optimal vertical jump performance",
        "url": "https://dunkcalculator.com/vertical-jump-training/nutrition"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 22,
        "name": "Flexibility and Injury Prevention",
        "description": "Stretching and injury prevention for jump training",
        "url": "https://dunkcalculator.com/vertical-jump-training/flexibility-injury-prevention"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 23,
        "name": "Training Programs",
        "description": "Structured vertical jump training programs for all levels",
        "url": "https://dunkcalculator.com/vertical-jump-training/programs"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 24,
        "name": "First Dunk Guide",
        "description": "Step-by-step guide to achieving your first basketball dunk",
        "url": "https://dunkcalculator.com/dunking-skills/first-dunk-guide"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 25,
        "name": "How to Palm a Basketball",
        "description": "Techniques to improve grip strength and ball control",
        "url": "https://dunkcalculator.com/dunking-skills/how-to-palm-basketball"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 26,
        "name": "Types of Basketball Dunks",
        "description": "Complete guide to different types of basketball dunks",
        "url": "https://dunkcalculator.com/dunking-skills/types-of-dunks"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 27,
        "name": "Average Vertical Jump Benchmarks",
        "description": "Vertical jump averages by age, gender, and skill level",
        "url": "https://dunkcalculator.com/dunking-skills/average-vertical-jumps"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 28,
        "name": "Famous Basketball Dunkers",
        "description": "Learn from basketball's greatest dunkers and their techniques",
        "url": "https://dunkcalculator.com/dunking-skills/famous-dunkers"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 29,
        "name": "Basketball Training Blog",
        "description": "Latest basketball training articles and guides",
        "url": "https://dunkcalculator.com/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 30,
        "name": "Best Exercises to Increase Vertical Jump",
        "description": "Top exercises for dramatic vertical jump improvement",
        "url": "https://dunkcalculator.com/blog/increase-vertical-jump-exercises"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 31,
        "name": "FAQ",
        "description": "Frequently asked questions about dunking and training",
        "url": "https://dunkcalculator.com/faq"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 32,
        "name": "About Us",
        "description": "Learn about our team and mission",
        "url": "https://dunkcalculator.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 33,
        "name": "Contact",
        "description": "Get in touch with our team",
        "url": "https://dunkcalculator.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 34,
        "name": "Glossary",
        "description": "Basketball and training terminology glossary",
        "url": "https://dunkcalculator.com/glossary"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 35,
        "name": "Privacy Policy",
        "description": "Privacy policy and data protection information",
        "url": "https://dunkcalculator.com/privacy-policy"
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
