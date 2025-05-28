
import StructuredData from "./StructuredData";

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  itemName: string;
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

const ReviewSchema = ({ 
  itemName, 
  reviews, 
  aggregateRating 
}: ReviewSchemaProps) => {
  const reviewData = {
    name: itemName,
    review: reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished
    })),
    aggregateRating: aggregateRating ? {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1
    } : undefined
  };

  return <StructuredData type="Product" data={reviewData} />;
};

export default ReviewSchema;
