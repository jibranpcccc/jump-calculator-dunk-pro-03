
import StructuredData from "./StructuredData";

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url?: string;
  courseCode?: string;
  hasCourseInstance?: {
    instructor: string;
    courseMode: string;
    startDate?: string;
    endDate?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const CourseSchema = ({
  name,
  description,
  provider = "Dunk Calculator",
  url = "https://dunkcalculator.com/vertical-jump-training",
  courseCode,
  hasCourseInstance,
  aggregateRating
}: CourseSchemaProps) => {
  const courseData = {
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://dunkcalculator.com"
    },
    url,
    courseCode,
    hasCourseInstance: hasCourseInstance ? {
      "@type": "CourseInstance",
      instructor: {
        "@type": "Person",
        name: hasCourseInstance.instructor
      },
      courseMode: hasCourseInstance.courseMode,
      startDate: hasCourseInstance.startDate,
      endDate: hasCourseInstance.endDate
    } : undefined,
    aggregateRating: aggregateRating ? {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  };

  return <StructuredData type="Course" data={courseData} />;
};

export default CourseSchema;
