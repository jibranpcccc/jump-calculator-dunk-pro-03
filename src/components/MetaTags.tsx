
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
  pageType?: "website" | "article" | "product" | "service";
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const MetaTags = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://dunkcalculator.com/og-image.jpg",
  noindex = false,
  author = "Dunk Calculator Team",
  viewport = "width=device-width, initial-scale=1.0",
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  pageType = "website",
  breadcrumbs
}: MetaTagsProps) => {
  const fullTitle = title.includes("Dunk Calculator") ? title : `${title} | Dunk Calculator`;
  const shortDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={shortDescription} />
      <meta name="viewport" content={viewport} />
      <meta name="author" content={author} />
      
      {/* Enhanced Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="subject" content="Basketball Training, Vertical Jump, Dunking" />
      <meta name="topic" content="Sports Performance and Basketball Training" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Enhanced robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      
      {/* Content Classification */}
      <meta name="classification" content="Sports, Fitness, Basketball Training" />
      <meta name="category" content="Sports" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Athletes, Basketball Players, Fitness Enthusiasts" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={shortDescription} />
      <meta property="og:type" content={pageType === "article" ? "article" : "website"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Dunk Calculator" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_AU" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Article specific Open Graph */}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      <meta property="article:section" content="Sports" />
      <meta property="article:tag" content="Basketball" />
      <meta property="article:tag" content="Vertical Jump" />
      <meta property="article:tag" content="Dunking" />
      <meta property="article:tag" content="Sports Training" />
      <meta property="article:tag" content="Athletic Performance" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={shortDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@dunkcalculator" />
      <meta name="twitter:creator" content="@dunkcalculator" />
      <meta name="twitter:domain" content="dunkcalculator.com" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="dunk-calculator" />
      
      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="pinterest:title" content={fullTitle} />
      <meta property="pinterest:description" content={shortDescription} />
      <meta property="pinterest:image" content={ogImage} />
      
      {/* Additional Mobile Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="application-name" content="Dunk Calculator" />
      
      {/* Theme and Icons */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ea580c" />
      
      {/* Favicons and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
      
      {/* Performance hints and preloading */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional Rich Snippets */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={shortDescription} />
      <meta itemProp="image" content={ogImage} />
      
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
    </Helmet>
  );
};

export default MetaTags;
