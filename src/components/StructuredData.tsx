
import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "WebSite" | "WebPage" | "Article" | "FAQPage" | "BreadcrumbList" | "Organization" | "LocalBusiness" | "Product" | "SoftwareApplication" | "HowTo" | "VideoObject" | "ImageObject" | "Person" | "Thing";
  data: object;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
