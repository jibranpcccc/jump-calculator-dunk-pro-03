
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const SitemapPage = () => {
  const sitemapEntries = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home - Basketball Dunk Calculator", url: "http://dunk-calculator.info/", priority: "1.0" },
        { name: "All Basketball Calculators", url: "http://dunk-calculator.info/calculators", priority: "0.9" },
        { name: "Basketball Training Blog", url: "http://dunk-calculator.info/blog", priority: "0.8" },
        { name: "FAQ", url: "http://dunk-calculator.info/faq", priority: "0.6" }
      ]
    },
    {
      category: "Calculator Tools",
      pages: [
        { name: "Hangtime Calculator", url: "http://dunk-calculator.info/calculators/hangtime", priority: "0.8" },
        { name: "Reach Calculator", url: "http://dunk-calculator.info/calculators/reach", priority: "0.8" },
        { name: "Standing Reach Calculator", url: "http://dunk-calculator.info/calculators/standing-reach", priority: "0.8" },
        { name: "Approach Jump Calculator", url: "http://dunk-calculator.info/calculators/approach-jump", priority: "0.8" },
        { name: "Vertical Jump Test", url: "http://dunk-calculator.info/calculators/vertical-jump-test", priority: "0.8" },
        { name: "Basketball BMI Calculator", url: "http://dunk-calculator.info/calculators/bmi", priority: "0.7" },
        { name: "Basketball Position Calculator", url: "http://dunk-calculator.info/calculators/position", priority: "0.7" },
        { name: "Max Hangtime Calculator", url: "http://dunk-calculator.info/calculators/max-hangtime", priority: "0.7" },
        { name: "Vertical Jump Improvement Calculator", url: "http://dunk-calculator.info/calculators/vertical-jump-improvement", priority: "0.7" },
        { name: "Training Progress Tracker", url: "http://dunk-calculator.info/tools/progress-tracker", priority: "0.7" }
      ]
    },
    {
      category: "Measurement Guides",
      pages: [
        { name: "Measurement Guides", url: "http://dunk-calculator.info/measurements", priority: "0.8" },
        { name: "Standing Reach Guide", url: "http://dunk-calculator.info/measurements/standing-reach", priority: "0.7" },
        { name: "Vertical Jump Guide", url: "http://dunk-calculator.info/measurements/vertical-jump", priority: "0.7" },
        { name: "Basketball Hoop Heights", url: "http://dunk-calculator.info/measurements/hoop-heights", priority: "0.6" },
        { name: "Other Basketball Measurements", url: "http://dunk-calculator.info/measurements/other-measurements", priority: "0.6" }
      ]
    },
    {
      category: "Vertical Jump Training",
      pages: [
        { name: "Vertical Jump Training", url: "http://dunk-calculator.info/vertical-jump-training", priority: "0.8" },
        { name: "Plyometric Exercises", url: "http://dunk-calculator.info/vertical-jump-training/plyometrics", priority: "0.7" },
        { name: "Strength Training for Vertical Jump", url: "http://dunk-calculator.info/vertical-jump-training/strength-training", priority: "0.7" },
        { name: "Nutrition for Jumpers", url: "http://dunk-calculator.info/vertical-jump-training/nutrition", priority: "0.6" },
        { name: "Flexibility and Injury Prevention", url: "http://dunk-calculator.info/vertical-jump-training/flexibility-injury-prevention", priority: "0.6" },
        { name: "Training Programs", url: "http://dunk-calculator.info/vertical-jump-training/programs", priority: "0.7" }
      ]
    },
    {
      category: "Dunking Skills",
      pages: [
        { name: "First Dunk Guide", url: "http://dunk-calculator.info/dunking-skills/first-dunk-guide", priority: "0.6" },
        { name: "How to Palm a Basketball", url: "http://dunk-calculator.info/dunking-skills/how-to-palm-basketball", priority: "0.6" },
        { name: "Types of Basketball Dunks", url: "http://dunk-calculator.info/dunking-skills/types-of-dunks", priority: "0.6" },
        { name: "Average Vertical Jump Benchmarks", url: "http://dunk-calculator.info/dunking-skills/average-vertical-jumps", priority: "0.6" },
        { name: "Famous Basketball Dunkers", url: "http://dunk-calculator.info/dunking-skills/famous-dunkers", priority: "0.6" }
      ]
    },
    {
      category: "Blog Posts",
      pages: [
        { name: "Best Exercises to Increase Vertical Jump", url: "http://dunk-calculator.info/blog/increase-vertical-jump-exercises", priority: "0.7" },
        { name: "How to Dunk for Beginners", url: "http://dunk-calculator.info/blog/how-to-dunk-beginners", priority: "0.7" },
        { name: "Vertical Jump Workout", url: "http://dunk-calculator.info/blog/vertical-jump-workout", priority: "0.7" },
        { name: "Basketball Jump Technique", url: "http://dunk-calculator.info/blog/basketball-jump-technique", priority: "0.7" },
        { name: "Can You Dunk if You're Short", url: "http://dunk-calculator.info/blog/dunk-if-you-are-short", priority: "0.7" },
        { name: "Best Vertical Jump Exercises", url: "http://dunk-calculator.info/blog/best-vertical-jump-exercises", priority: "0.7" },
        { name: "How to Measure Vertical Jump", url: "http://dunk-calculator.info/blog/how-to-measure-vertical-jump", priority: "0.7" },
        { name: "Nutrition for Vertical Jump", url: "http://dunk-calculator.info/blog/nutrition-vertical-jump", priority: "0.6" },
        { name: "Common Dunking Mistakes", url: "http://dunk-calculator.info/blog/common-dunking-mistakes", priority: "0.6" },
        { name: "Best Shoes for Vertical Leap", url: "http://dunk-calculator.info/blog/best-shoes-for-vertical-leap", priority: "0.6" }
      ]
    },
    {
      category: "Website Information",
      pages: [
        { name: "About Us", url: "http://dunk-calculator.info/about", priority: "0.5" },
        { name: "Contact", url: "http://dunk-calculator.info/contact", priority: "0.5" },
        { name: "Glossary", url: "http://dunk-calculator.info/glossary", priority: "0.4" },
        { name: "Privacy Policy", url: "http://dunk-calculator.info/privacy-policy", priority: "0.3" },
        { name: "Terms of Service", url: "http://dunk-calculator.info/terms-of-service", priority: "0.3" },
        { name: "Terms of Use", url: "http://dunk-calculator.info/terms-of-use", priority: "0.3" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Dunk Calculator - All Pages Directory</title>
        <meta name="description" content="Complete sitemap of all pages on Dunk Calculator. Find all our basketball calculators, training guides, measurement tools, and educational content." />
        <meta name="keywords" content="sitemap, dunk calculator pages, basketball calculators, training guides, vertical jump tools" />
        <link rel="canonical" href="http://dunk-calculator.info/sitemap.xml" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Sitemap
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all pages and tools available on Dunk Calculator. Find basketball calculators, 
                training guides, measurement tools, and educational content to improve your game.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapEntries.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-200 pb-2">
                    {category.category}
                  </h2>
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex} className="flex flex-col">
                        <a 
                          href={page.url}
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                        >
                          {page.name}
                        </a>
                        <span className="text-sm text-gray-500 mt-1">
                          Priority: {page.priority}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">XML Sitemap Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">For Search Engines:</h4>
                  <p className="text-gray-600 mb-2">
                    Our XML sitemap is automatically generated and submitted to search engines to help them 
                    discover and index all our content efficiently.
                  </p>
                  <a 
                    href="http://dunk-calculator.info/sitemap.xml" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View XML Sitemap →
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Last Updated:</h4>
                  <p className="text-gray-600 mb-2">
                    This sitemap is updated regularly to reflect new content and changes to existing pages.
                  </p>
                  <p className="text-sm text-gray-500">
                    Total Pages: {sitemapEntries.reduce((total, category) => total + category.pages.length, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Can't find what you're looking for? 
                <a href="/contact" className="text-blue-600 hover:text-blue-800 ml-1 font-medium">
                  Contact us
                </a> 
                {" "}for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SitemapPage;
