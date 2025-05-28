
import SEOHead from "./SEOHead";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import BreadcrumbNavigation from "./BreadcrumbNavigation";

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
  additionalSchema = []
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
