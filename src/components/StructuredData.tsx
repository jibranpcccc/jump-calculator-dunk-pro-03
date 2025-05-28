
import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "WebSite" | "WebPage" | "Article" | "FAQPage" | "BreadcrumbList";
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
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
