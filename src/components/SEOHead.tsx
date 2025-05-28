import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  pageType?: 'website' | 'article' | 'product' | 'service' | 'calculator' | 'tool';
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://dunkcalculator.com/og-image.jpg",
  noindex = false,
  author,
  publishedTime,
  modifiedTime,
  pageType = 'website'
}: SEOHeadProps) => {
  const generateTitle = (pageTitle: string) => {
    if (pageTitle.includes('Dunk Calculator')) {
      return pageTitle;
    }
    return `${pageTitle} | Dunk Calculator`;
  };

  return (
    <Helmet>
      <title>{generateTitle(title)}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Author and Date Meta Tags */}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default SEOHead;
