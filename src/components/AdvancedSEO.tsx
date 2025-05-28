
import SEOHead from "./SEOHead";
import StructuredData from "./StructuredData";
import SocialMediaMeta from "./SocialMediaMeta";
import Performance from "./Performance";
import TechnicalSEO from "./TechnicalSEO";
import OrganizationSchema from "./OrganizationSchema";
import WebSiteSchema from "./WebSiteSchema";
import SEOAnalytics from "./SEOAnalytics";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import BreadcrumbSchema from "./BreadcrumbSchema";

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  pageType?: 'website' | 'article' | 'product' | 'service' | 'calculator';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  structuredData?: object;
  enableBreadcrumbs?: boolean;
  enableAnalytics?: boolean;
  enableSocialMeta?: boolean;
}

const AdvancedSEO = ({
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
  breadcrumbs,
  structuredData,
  enableBreadcrumbs = true,
  enableAnalytics = true,
  enableSocialMeta = true
}: AdvancedSEOProps) => {
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
      
      {enableSocialMeta && (
        <SocialMediaMeta
          title={title}
          description={description}
          image={ogImage}
          url={canonicalUrl}
          type={pageType}
        />
      )}
      
      <Performance />
      <TechnicalSEO />
      
      {enableAnalytics && <SEOAnalytics />}
      
      <OrganizationSchema />
      <WebSiteSchema />
      
      {enableBreadcrumbs && <BreadcrumbNavigation />}
      
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}
      
      {structuredData && (
        <StructuredData type="WebPage" data={structuredData} />
      )}
    </>
  );
};

export default AdvancedSEO;
