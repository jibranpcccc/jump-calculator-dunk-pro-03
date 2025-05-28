
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  author?: string;
  viewport?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  pageType?: "website" | "article" | "product" | "service" | "calculator" | "tool";
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  alternateLanguages?: Array<{
    lang: string;
    url: string;
  }>;
  price?: string;
  availability?: string;
  rating?: {
    value: string;
    count: string;
  };
}

const MetaTags = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://dunkcalculator.com/og-image.jpg",
  noindex = false,
  author = "Dunk Calculator Team",
  viewport = "width=device-width, initial-scale=1.0, viewport-fit=cover",
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  pageType = "website",
  breadcrumbs,
  alternateLanguages,
  price,
  availability,
  rating
}: MetaTagsProps) => {
  const fullTitle = title.includes("Dunk Calculator") ? title : `${title} | Dunk Calculator`;
  const shortDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const longDescription = description.length > 300 ? description.substring(0, 297) + "..." : description;

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={shortDescription} />
      <meta name="viewport" content={viewport} />
      <meta name="author" content={author} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Enhanced Keywords and Topics */}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="subject" content="Basketball Training, Vertical Jump, Dunking, Sports Performance" />
      <meta name="topic" content="Sports Performance Tools and Basketball Training Resources" />
      <meta name="summary" content={shortDescription} />
      <meta name="news_keywords" content="basketball training, dunk calculator, vertical jump, athletic performance, sports fitness" />
      
      {/* Content Classification */}
      <meta name="classification" content="Sports, Fitness, Basketball Training, Athletic Performance" />
      <meta name="category" content="Sports" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="global" />
      <meta name="target" content="Basketball Players, Athletes, Fitness Enthusiasts, Sports Coaches" />
      <meta name="audience" content="Basketball Players, Athletes, Fitness Enthusiasts" />
      <meta name="rating" content="general" />
      <meta name="copyright" content="© 2024 Dunk Calculator. All rights reserved." />
      <meta name="owner" content="Dunk Calculator" />
      
      {/* Language and Regional */}
      <meta name="language" content="en-US" />
      <meta httpEquiv="Content-Language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      
      {/* Dublin Core Metadata */}
      <meta name="DC.Title" content={fullTitle} />
      <meta name="DC.Creator" content={author} />
      <meta name="DC.Subject" content="Basketball Training, Vertical Jump, Dunking" />
      <meta name="DC.Description" content={longDescription} />
      <meta name="DC.Publisher" content="Dunk Calculator" />
      <meta name="DC.Contributor" content="Basketball Training Experts" />
      <meta name="DC.Date" content={articlePublishedTime || "2024-05-28"} />
      <meta name="DC.Type" content="InteractiveResource" />
      <meta name="DC.Format" content="text/html" />
      <meta name="DC.Identifier" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="DC.Source" content="https://dunkcalculator.com" />
      <meta name="DC.Language" content="en" />
      <meta name="DC.Relation" content="https://dunkcalculator.com" />
      <meta name="DC.Coverage" content="Global" />
      <meta name="DC.Rights" content="© 2024 Dunk Calculator" />
      
      {/* Canonical URL and Alternate Languages */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {alternateLanguages && alternateLanguages.map(alt => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://dunkcalculator.com/" />
      <link rel="alternate" hrefLang="en" href="https://dunkcalculator.com/" />
      <link rel="alternate" hrefLang="en-US" href="https://dunkcalculator.com/" />
      <link rel="alternate" hrefLang="en-GB" href="https://dunkcalculator.com/" />
      <link rel="alternate" hrefLang="en-CA" href="https://dunkcalculator.com/" />
      <link rel="alternate" hrefLang="en-AU" href="https://dunkcalculator.com/" />
      
      {/* Enhanced robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Additional SEO Enhancement */}
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
      <meta name="applebot" content="index, follow" />
      
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
      <meta property="og:updated_time" content={articleModifiedTime || new Date().toISOString()} />
      
      {/* Article specific Open Graph */}
      {pageType === "article" && articlePublishedTime && (
        <>
          <meta property="article:published_time" content={articlePublishedTime} />
          <meta property="article:author" content={articleAuthor || author} />
          <meta property="article:section" content="Sports" />
          <meta property="article:tag" content="Basketball" />
          <meta property="article:tag" content="Vertical Jump" />
          <meta property="article:tag" content="Dunking" />
          <meta property="article:tag" content="Sports Training" />
          <meta property="article:tag" content="Athletic Performance" />
        </>
      )}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      
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
      
      {/* Microdata */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={shortDescription} />
      <meta itemProp="image" content={ogImage} />
      <meta itemProp="author" content={author} />
      <meta itemProp="datePublished" content={articlePublishedTime || "2024-05-28"} />
      <meta itemProp="dateModified" content={articleModifiedTime || new Date().toISOString()} />
      
      {/* App-specific meta */}
      <meta name="application-name" content="Dunk Calculator" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="msapplication-tooltip" content="Basketball Dunk Calculator - Test Your Dunking Ability" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Product specific meta */}
      {price && (
        <>
          <meta property="product:price:amount" content={price} />
          <meta property="product:price:currency" content="USD" />
        </>
      )}
      {availability && <meta property="product:availability" content={availability} />}
      
      {/* Rating meta */}
      {rating && (
        <>
          <meta name="rating" content={rating.value} />
          <meta name="rating_count" content={rating.count} />
        </>
      )}
      
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
      
      {/* Breadcrumb structured data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url
            }))
          }, null, 2)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
