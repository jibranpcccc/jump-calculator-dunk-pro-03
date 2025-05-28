
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
  pageType?: 'website' | 'article' | 'product' | 'service';
  
  // Structured data
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  
  productData?: {
    name: string;
    brand: string;
    category: string;
    price: string;
    availability: string;
  };
  
  // Features to enable
  enableAnalytics?: boolean;
  enableBreadcrumbs?: boolean;
  enablePerformance?: boolean;
  enableSocialMeta?: boolean;
  enableTechnicalSEO?: boolean;
  
  // Breadcrumb data
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const SEOManager = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noindex = false,
  pageType = 'website',
  faqData,
  productData,
  enableAnalytics = false,
  enableBreadcrumbs = false,
  enablePerformance = false,
  enableSocialMeta = false,
  enableTechnicalSEO = false,
  breadcrumbs
}: SEOManagerProps) => {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        noindex={noindex}
      />
      
      {enableSocialMeta && (
        <SocialMediaMeta
          title={title}
          description={description}
          image={ogImage}
          url={canonicalUrl}
        />
      )}
      
      {enablePerformance && <Performance />}
      {enableTechnicalSEO && <TechnicalSEO />}
      {enableAnalytics && <SEOAnalytics />}
      
      <OrganizationSchema />
      <WebSiteSchema />
      
      {faqData && (
        <StructuredData
          type="FAQPage"
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }}
        />
      )}
      
      {productData && (
        <StructuredData
          type="Product"
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": productData.name,
            "brand": {
              "@type": "Brand",
              "name": productData.brand
            },
            "category": productData.category,
            "offers": {
              "@type": "Offer",
              "price": productData.price,
              "availability": `https://schema.org/${productData.availability}`
            }
          }}
        />
      )}
      
      {enableBreadcrumbs && breadcrumbs && (
        <BreadcrumbNavigation breadcrumbs={breadcrumbs} />
      )}
    </>
  );
};

export default SEOManager;
