
import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "WebSite" | "WebPage" | "Article" | "BlogPosting" | "FAQPage" | "BreadcrumbList" | "Organization" | "LocalBusiness" | "Product" | "SoftwareApplication" | "HowTo" | "VideoObject" | "ImageObject" | "Person" | "Thing" | "Course" | "Event" | "Review" | "Rating" | "AggregateRating" | "ContactPoint" | "PostalAddress" | "GeoCoordinates" | "Offer" | "Brand" | "PropertyValue" | "ListItem" | "ItemList" | "CreativeWork" | "MediaObject" | "SportsOrganization" | "Place" | "VirtualLocation" | "MonetaryAmount" | "QuantitativeValue" | "Distance" | "Duration" | "Mass" | "Energy";
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
