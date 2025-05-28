
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
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl || "https://dunkcalculator.com"} />
      
      {/* Enhanced robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Specific Bot Instructions */}
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
      <meta name="whatsapp" content="index, follow" />
      <meta name="telegrambot" content="index, follow" />
      
      {/* Refresh and Revisit */}
      <meta name="revisit-after" content="3 days" />
      <meta name="expires" content="never" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:site_name" content="Dunk Calculator" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={shortDescription} />
      <meta property="og:type" content={pageType === "article" ? "article" : "website"} />
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
      
      {/* Product-specific Open Graph */}
      {price && (
        <>
          <meta property="product:price:amount" content={price} />
          <meta property="product:price:currency" content="USD" />
        </>
      )}
      {availability && <meta property="product:availability" content={availability} />}
      {rating && (
        <>
          <meta property="product:rating:value" content={rating.value} />
          <meta property="product:rating:count" content={rating.count} />
        </>
      )}
      
      {/* Article specific Open Graph */}
      {pageType === "article" && (
        <>
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
          <meta property="article:section" content="Sports" />
          <meta property="article:tag" content="Basketball" />
          <meta property="article:tag" content="Vertical Jump" />
          <meta property="article:tag" content="Dunking" />
          <meta property="article:tag" content="Sports Training" />
          <meta property="article:tag" content="Athletic Performance" />
          <meta property="article:tag" content="Fitness" />
        </>
      )}
      
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
      <meta name="twitter:label1" content="Category" />
      <meta name="twitter:data1" content="Sports Calculator" />
      <meta name="twitter:label2" content="Type" />
      <meta name="twitter:data2" content="Free Tool" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="dunk-calculator" />
      <meta property="linkedin:title" content={fullTitle} />
      <meta property="linkedin:description" content={shortDescription} />
      <meta property="linkedin:image" content={ogImage} />
      
      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="pinterest:title" content={fullTitle} />
      <meta property="pinterest:description" content={shortDescription} />
      <meta property="pinterest:image" content={ogImage} />
      <meta name="pinterest:domain" content="dunkcalculator.com" />
      
      {/* WhatsApp */}
      <meta property="whatsapp:title" content={fullTitle} />
      <meta property="whatsapp:description" content={shortDescription} />
      <meta property="whatsapp:image" content={ogImage} />
      
      {/* Telegram */}
      <meta property="telegram:title" content={fullTitle} />
      <meta property="telegram:description" content={shortDescription} />
      <meta property="telegram:image" content={ogImage} />
      
      {/* Mobile and App Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="application-name" content="Dunk Calculator" />
      <meta name="msapplication-tooltip" content="Basketball Dunk Calculator - Test Your Dunking Ability" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-task" content="name=Calculator;action-uri=/;icon-uri=/favicon.ico" />
      <meta name="msapplication-task" content="name=Training;action-uri=/vertical-jump-training;icon-uri=/favicon.ico" />
      <meta name="msapplication-task" content="name=Tips;action-uri=/basketball-dunk-tips;icon-uri=/favicon.ico" />
      
      {/* Theme and Visual */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ea580c" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ea580c" />
      
      {/* Favicons and Icons - Enhanced */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Performance hints and preloading */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//unpkg.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Search Engine Verification Enhanced */}
      <meta name="google-site-verification" content="your-google-verification-code-here" />
      <meta name="msvalidate.01" content="your-bing-verification-code-here" />
      <meta name="yandex-verification" content="your-yandex-verification-code-here" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code-here" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code-here" />
      <meta name="alexaVerifyID" content="your-alexa-verification-code-here" />
      <meta name="norton-safeweb-site-verification" content="your-norton-verification-code-here" />
      
      {/* Microdata */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={shortDescription} />
      <meta itemProp="image" content={ogImage} />
      <meta itemProp="author" content={author} />
      <meta itemProp="datePublished" content={articlePublishedTime || "2024-05-28"} />
      <meta itemProp="dateModified" content={articleModifiedTime || new Date().toISOString()} />
      <meta itemProp="publisher" content="Dunk Calculator" />
      <meta itemProp="url" content={canonicalUrl || "https://dunkcalculator.com"} />
      
      {/* Structured Data for Breadcrumbs */}
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
          })}
        </script>
      )}
      
      {/* Additional Rich Snippets */}
      <meta name="standout" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="syndication-source" content={canonicalUrl || "https://dunkcalculator.com"} />
      <meta name="original-source" content={canonicalUrl || "https://dunkcalculator.com"} />
      
      {/* Enhanced Security and Privacy */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Additional Mobile Optimization */}
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="screen-orientation" content="portrait" />
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />
      
      {/* App Store and Market Links */}
      <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" />
      <meta name="google-play-app" content="app-id=com.dunkcalculator.app" />
      
      {/* Performance and Loading */}
      <meta name="prerender" content={canonicalUrl || "https://dunkcalculator.com"} />
    </Helmet>
  );
};

export default MetaTags;
