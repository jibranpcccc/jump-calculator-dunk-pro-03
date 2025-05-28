
import { ReactNode } from 'react';
import SEOHead from './SEOHead';
import StructuredData from './StructuredData';
import SocialMediaMeta from './SocialMediaMeta';
import Performance from './Performance';
import TechnicalSEO from './TechnicalSEO';
import OrganizationSchema from './OrganizationSchema';
import WebSiteSchema from './WebSiteSchema';
import SEOAnalytics from './SEOAnalytics';
import BreadcrumbNavigation from './BreadcrumbNavigation';

interface SEOManagerProps {
  // Basic SEO
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  
  // Content type
  pageType?: 'website' | 'article' | 'product' | 'faq' | 'howto';
  
  // Article specific
  articleData?: {
    headline: string;
    author: string;
    publishDate: string;
    modifiedDate?: string;
    category?: string;
    keywords?: string[];
  };
  
  // Product specific
  productData?: {
    name: string;
    brand?: string;
    category?: string;
    price?: string;
    availability?: string;
  };
  
  // FAQ specific
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  
  // How-to specific
  howToData?: {
    name: string;
    steps: Array<{
      name: string;
      text: string;
      url?: string;
    }>;
    totalTime?: string;
    estimatedCost?: string;
  };
  
  // Video specific
  videoData?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    embedUrl?: string;
  };
  
  // Features
  enableAnalytics?: boolean;
  enableBreadcrumbs?: boolean;
  enablePerformance?: boolean;
  enableSocialMeta?: boolean;
  enableTechnicalSEO?: boolean;
  
  children?: ReactNode;
}

const SEOManager = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noindex = false,
  pageType = 'website',
  articleData,
  productData,
  faqData,
  howToData,
  videoData,
  enableAnalytics = true,
  enableBreadcrumbs = true,
  enablePerformance = true,
  enableSocialMeta = true,
  enableTechnicalSEO = true,
  children
}: SEOManagerProps) => {
  
  // Generate structured data based on page type
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Dunk Calculator",
        url: "https://dunkcalculator.com"
      }
    };

    switch (pageType) {
      case 'article':
        if (articleData) {
          return {
            ...baseData,
            "@type": "Article",
            headline: articleData.headline,
            author: {
              "@type": "Person", 
              name: articleData.author
            },
            datePublished: articleData.publishDate,
            dateModified: articleData.modifiedDate || articleData.publishDate,
            publisher: {
              "@type": "Organization",
              name: "Dunk Calculator",
              logo: {
                "@type": "ImageObject",
                url: "https://dunkcalculator.com/logo.png"
              }
            },
            image: ogImage,
            articleSection: articleData.category,
            keywords: articleData.keywords?.join(", ")
          };
        }
        break;
        
      case 'product':
        if (productData) {
          return {
            ...baseData,
            mainEntity: {
              "@type": "SoftwareApplication",
              name: productData.name,
              applicationCategory: "SportsApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: productData.price || "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
              }
            }
          };
        }
        break;
        
      case 'faq':
        if (faqData) {
          return {
            ...baseData,
            "@type": "FAQPage",
            mainEntity: faqData.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          };
        }
        break;
        
      case 'howto':
        if (howToData) {
          return {
            ...baseData,
            mainEntity: {
              "@type": "HowTo",
              name: howToData.name,
              totalTime: howToData.totalTime,
              estimatedCost: howToData.estimatedCost ? {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: howToData.estimatedCost
              } : undefined,
              step: howToData.steps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: step.name,
                text: step.text,
                url: step.url
              }))
            }
          };
        }
        break;
    }
    
    return baseData;
  };

  return (
    <>
      {/* Core SEO */}
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        noindex={noindex}
        schemaData={getStructuredData()}
      />
      
      {/* Social Media Meta */}
      {enableSocialMeta && (
        <SocialMediaMeta
          title={title}
          description={description}
          image={ogImage}
          url={canonicalUrl}
          type={pageType === 'article' ? 'article' : 'website'}
        />
      )}
      
      {/* Technical SEO */}
      {enableTechnicalSEO && <TechnicalSEO />}
      
      {/* Performance */}
      {enablePerformance && <Performance />}
      
      {/* Organization Schema */}
      <OrganizationSchema />
      
      {/* Website Schema */}
      <WebSiteSchema />
      
      {/* Analytics */}
      {enableAnalytics && <SEOAnalytics />}
      
      {/* Video Schema */}
      {videoData && (
        <StructuredData 
          type="WebPage" 
          data={{
            mainEntity: {
              "@type": "VideoObject",
              name: videoData.name,
              description: videoData.description,
              thumbnailUrl: videoData.thumbnailUrl,
              uploadDate: videoData.uploadDate,
              duration: videoData.duration,
              embedUrl: videoData.embedUrl,
              publisher: {
                "@type": "Organization",
                name: "Dunk Calculator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dunkcalculator.com/logo.png"
                }
              }
            }
          }} 
        />
      )}
      
      {/* Breadcrumbs */}
      {enableBreadcrumbs && <BreadcrumbNavigation />}
      
      {/* Page Content */}
      {children}
    </>
  );
};

export default SEOManager;
