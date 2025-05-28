
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
import BreadcrumbSchema from './BreadcrumbSchema';
import ArticleSchema from './ArticleSchema';
import ProductSchema from './ProductSchema';
import FAQStructuredData from './FAQStructuredData';
import LocalSEO from './LocalSEO';

interface ComprehensiveSEOProps {
  // Basic SEO
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  
  // Content details
  pageType?: 'website' | 'article' | 'product' | 'service' | 'calculator' | 'tool';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  wordCount?: number;
  readingTime?: string;
  
  // Structured data
  article?: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    keywords?: string[];
  };
  
  product?: {
    name: string;
    description: string;
    brand?: string;
    price?: string;
    availability?: string;
    rating?: {
      value: string;
      count: string;
    };
  };
  
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  
  // Navigation
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  
  // Features
  enableAll?: boolean;
  enableBreadcrumbs?: boolean;
  enableAnalytics?: boolean;
  enableSocialMeta?: boolean;
  enableLocalSEO?: boolean;
  enablePerformance?: boolean;
  enableTechnicalSEO?: boolean;
  
  // Custom structured data
  customStructuredData?: object;
  customSchemaType?: string;
}

const ComprehensiveSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noindex = false,
  pageType = 'website',
  author,
  publishedTime,
  modifiedTime,
  wordCount,
  readingTime,
  article,
  product,
  faqData,
  breadcrumbs,
  enableAll = true,
  enableBreadcrumbs = true,
  enableAnalytics = true,
  enableSocialMeta = true,
  enableLocalSEO = false,
  enablePerformance = true,
  enableTechnicalSEO = true,
  customStructuredData,
  customSchemaType
}: ComprehensiveSEOProps) => {
  // Enable all features if enableAll is true
  const shouldEnableBreadcrumbs = enableAll || enableBreadcrumbs;
  const shouldEnableAnalytics = enableAll || enableAnalytics;
  const shouldEnableSocialMeta = enableAll || enableSocialMeta;
  const shouldEnableLocalSEO = enableAll || enableLocalSEO;
  const shouldEnablePerformance = enableAll || enablePerformance;
  const shouldEnableTechnicalSEO = enableAll || enableTechnicalSEO;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        noindex={noindex}
        author={author}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        pageType={pageType}
      />
      
      {shouldEnableSocialMeta && (
        <SocialMediaMeta
          title={title}
          description={description}
          image={ogImage}
          url={canonicalUrl}
          type={pageType}
        />
      )}
      
      {shouldEnablePerformance && <Performance />}
      {shouldEnableTechnicalSEO && <TechnicalSEO />}
      {shouldEnableAnalytics && <SEOAnalytics />}
      {shouldEnableLocalSEO && <LocalSEO />}
      
      <OrganizationSchema />
      <WebSiteSchema />
      
      {shouldEnableBreadcrumbs && <BreadcrumbNavigation />}
      
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}
      
      {article && (
        <ArticleSchema
          headline={article.headline}
          description={article.description}
          author={article.author}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          url={canonicalUrl}
          wordCount={wordCount}
          readingTime={readingTime}
          keywords={article.keywords}
        />
      )}
      
      {product && (
        <ProductSchema
          name={product.name}
          description={product.description}
          brand={product.brand}
          price={product.price}
          availability={product.availability}
          url={canonicalUrl}
          rating={product.rating}
        />
      )}
      
      {faqData && faqData.length > 0 && (
        <FAQStructuredData faqs={faqData} />
      )}
      
      {customStructuredData && customSchemaType && (
        <StructuredData 
          type={customSchemaType as any} 
          data={customStructuredData} 
        />
      )}
    </>
  );
};

export default ComprehensiveSEO;
