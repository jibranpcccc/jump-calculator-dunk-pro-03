
import SEOHead from "./SEOHead";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import OrganizationSchema from "./OrganizationSchema";
import WebSiteSchema from "./WebSiteSchema";
import SocialMediaMeta from "./SocialMediaMeta";
import TechnicalSEO from "./TechnicalSEO";
import SEOAnalytics from "./SEOAnalytics";

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  noindex?: boolean;
  enableAnalytics?: boolean;
  articleSchema?: object;
  productSchema?: object;
  howToSchema?: object;
  faqSchema?: object;
  breadcrumbSchema?: object;
  customSchema?: object[];
}

const AdvancedSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  schemaData,
  noindex = false,
  enableAnalytics = true,
  articleSchema,
  productSchema,
  howToSchema,
  faqSchema,
  breadcrumbSchema,
  customSchema = []
}: AdvancedSEOProps) => {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        schemaData={schemaData}
        noindex={noindex}
      />
      
      <SocialMediaMeta
        title={title}
        description={description}
        image={ogImage}
        url={canonicalUrl}
      />
      
      <TechnicalSEO />
      <Performance />
      <OrganizationSchema />
      <WebSiteSchema />
      
      {enableAnalytics && <SEOAnalytics />}
      
      {articleSchema && (
        <StructuredData type="Article" data={articleSchema} />
      )}
      
      {productSchema && (
        <StructuredData type="WebPage" data={productSchema} />
      )}
      
      {howToSchema && (
        <StructuredData type="WebPage" data={howToSchema} />
      )}
      
      {faqSchema && (
        <StructuredData type="FAQPage" data={faqSchema} />
      )}
      
      {breadcrumbSchema && (
        <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      )}
      
      {customSchema.map((schema, index) => (
        <StructuredData 
          key={index} 
          type="WebPage" 
          data={schema} 
        />
      ))}
    </>
  );
};

export default AdvancedSEO;
