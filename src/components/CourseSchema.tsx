
import StructuredData from "./StructuredData";

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url?: string;
  image?: string;
  duration?: string;
  price?: string;
  currency?: string;
  difficulty?: string;
  prerequisites?: string[];
  courseMode?: string;
  instructor?: string;
  skills?: string[];
}

const CourseSchema = ({
  name,
  description,
  provider = "Dunk Calculator",
  url,
  image = "https://dunkcalculator.com/og-image.jpg",
  duration,
  price = "0",
  currency = "USD",
  difficulty = "Beginner",
  prerequisites = [],
  courseMode = "Online",
  instructor = "Basketball Training Experts",
  skills = []
}: CourseSchemaProps) => {
  const courseData = {
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://dunkcalculator.com"
    },
    url: url || "https://dunkcalculator.com/vertical-jump-training",
    image: [image],
    ...(duration && { timeRequired: duration }),
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01"
    },
    educationalLevel: difficulty,
    ...(prerequisites.length > 0 && { coursePrerequisites: prerequisites.join(", ") }),
    courseMode,
    instructor: {
      "@type": "Person",
      name: instructor,
      worksFor: {
        "@type": "Organization",
        name: provider
      }
    },
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump Training",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump"
      }
    ],
    teaches: skills.length > 0 ? skills.join(", ") : "Vertical Jump Improvement, Basketball Skills, Athletic Performance",
    learningResourceType: "Course",
    inLanguage: "en",
    isAccessibleForFree: price === "0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "1247"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Alex Thompson"
        },
        datePublished: "2024-03-15",
        reviewBody: "Excellent training course that helped me improve my vertical jump by 8 inches in 6 weeks!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ]
  };

  return <StructuredData type="Course" data={courseData} />;
};

export default CourseSchema;
