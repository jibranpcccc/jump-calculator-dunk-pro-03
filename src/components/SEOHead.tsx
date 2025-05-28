
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  pageType?: "website" | "article" | "product" | "service" | "calculator";
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = "https://dunkcalculator.com/og-image.jpg",
  schemaData,
  noindex = false,
  author = "Dunk Calculator Team",
  publishedTime,
  modifiedTime,
  pageType = "website"
}: SEOHeadProps) => {
  const fullTitle = title.includes("Dunk Calculator") ? title : `${title} | Dunk Calculator`;
  const shortDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={shortDescription} />
      <meta name="author" content={author} />
      <meta name="language" content="en-US" />
      <meta name="subject" content="Basketball Training, Vertical Jump, Dunking Calculators" />
      <meta name="copyright" content="© 2024 Dunk Calculator. All rights reserved." />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="classification" content="Sports, Fitness, Basketball Training" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Basketball Players, Athletes, Fitness Enthusiasts" />
      
      {/* Enhanced Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="topic" content="Basketball Performance Tools, Dunk Calculators, Vertical Jump Training" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Enhanced robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      <meta name="baiduspider" content="index, follow" />
      <meta name="yandexbot" content="index, follow" />
      <meta name="facebookbot" content="index, follow" />
      <meta name="twitterbot" content="index, follow" />
      <meta name="linkedinbot" content="index, follow" />
      <meta name="pinterestbot" content="index, follow" />
      
      {/* Geographic and Location Meta */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content={author} />
      <meta name="DC.subject" content="Basketball Training" />
      <meta name="DC.description" content={shortDescription} />
      <meta name="DC.publisher" content="Dunk Calculator" />
      <meta name="DC.contributor" content="Basketball Training Experts" />
      <meta name="DC.date" content={publishedTime || "2024-05-28"} />
      <meta name="DC.type" content="InteractiveResource" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="DC.source" content="https://dunkcalculator.com" />
      <meta name="DC.language" content="en" />
      <meta name="DC.relation" content="https://dunkcalculator.com" />
      <meta name="DC.coverage" content="Global" />
      <meta name="DC.rights" content="© 2024 Dunk Calculator" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={pageType === "article" ? "article" : "website"} />
      <meta property="og:site_name" content="Dunk Calculator" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={shortDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />
      
      {/* Article specific Open Graph */}
      {pageType === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Sports" />
          <meta property="article:tag" content="Basketball" />
          <meta property="article:tag" content="Vertical Jump" />
          <meta property="article:tag" content="Dunking" />
          <meta property="article:tag" content="Sports Training" />
          <meta property="article:tag" content="Athletic Performance" />
        </>
      )}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dunkcalculator" />
      <meta name="twitter:creator" content="@dunkcalculator" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={shortDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content="dunkcalculator.com" />
      <meta name="twitter:url" content={canonicalUrl || "https://dunkcalculator.com"} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="dunk-calculator" />
      
      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="pinterest:title" content={fullTitle} />
      <meta property="pinterest:description" content={shortDescription} />
      <meta property="pinterest:image" content={ogImage} />
      
      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData, null, 2)}
        </script>
      )}
      
      {/* Microdata */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={shortDescription} />
      <meta itemProp="image" content={ogImage} />
      <meta itemProp="author" content={author} />
      <meta itemProp="datePublished" content={publishedTime || "2024-05-28"} />
      <meta itemProp="dateModified" content={modifiedTime || new Date().toISOString()} />
      
      {/* App-specific meta */}
      <meta name="application-name" content="Dunk Calculator" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="msapplication-tooltip" content="Basketball Dunk Calculator - Test Your Dunking Ability" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Additional SEO Enhancement */}
      <meta name="news_keywords" content="basketball, dunk, vertical jump, sports training, athletic performance" />
      <meta name="standout" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="syndication-source" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="original-source" content={canonicalUrl || "https://dunkcalculator.com"} />
      
      {/* Performance and Accessibility */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ea580c" />
    </Helmet>
  );
};

export default SEOHead;
