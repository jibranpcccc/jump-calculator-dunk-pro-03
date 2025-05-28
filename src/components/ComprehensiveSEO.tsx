
import SEOHead from "./SEOHead";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import OrganizationSchema from "./OrganizationSchema";
import SEOAnalytics from "./SEOAnalytics";

interface ComprehensiveSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  noindex?: boolean;
  showBreadcrumbs?: boolean;
  additionalSchema?: object[];
  enableAnalytics?: boolean;
  articleSchema?: object;
  productSchema?: object;
  howToSchema?: object;
}

const ComprehensiveSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  schemaData,
  noindex = false,
  showBreadcrumbs = true,
  additionalSchema = [],
  enableAnalytics = true,
  articleSchema,
  productSchema,
  howToSchema
}: ComprehensiveSEOProps) => {
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
      <Performance />
      <OrganizationSchema />
      
      {enableAnalytics && <SEOAnalytics />}
      
      {articleSchema && (
        <StructuredData 
          type="Article" 
          data={articleSchema} 
        />
      )}
      
      {productSchema && (
        <StructuredData 
          type="WebPage" 
          data={productSchema} 
        />
      )}
      
      {howToSchema && (
        <StructuredData 
          type="WebPage" 
          data={howToSchema} 
        />
      )}
      
      {additionalSchema.map((schema, index) => (
        <StructuredData 
          key={index} 
          type="WebPage" 
          data={schema} 
        />
      ))}
      
      {showBreadcrumbs && <BreadcrumbNavigation />}
    </>
  );
};

export default ComprehensiveSEO;
