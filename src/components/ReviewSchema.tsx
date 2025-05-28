
import StructuredData from "./StructuredData";

interface ReviewSchemaProps {
  itemName: string;
  reviewBody: string;
  reviewRating: string;
  authorName: string;
  datePublished?: string;
  worstRating?: string;
  bestRating?: string;
}

const ReviewSchema = ({
  itemName,
  reviewBody,
  reviewRating,
  authorName,
  datePublished,
  worstRating = "1",
  bestRating = "5"
}: ReviewSchemaProps) => {
  const reviewData = {
    itemReviewed: {
      "@type": "Thing",
      name: itemName
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating,
      worstRating,
      bestRating
    },
    author: {
      "@type": "Person",
      name: authorName
    },
    datePublished: datePublished || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator"
    }
  };

  return <StructuredData type="Review" data={reviewData} />;
};

export default ReviewSchema;
