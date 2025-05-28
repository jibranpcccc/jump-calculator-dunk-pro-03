
import StructuredData from "./StructuredData";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  url?: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
  readingTime?: string;
}

const ArticleSchema = ({
  headline,
  description,
  author = "Dunk Calculator Team",
  publishedTime,
  modifiedTime,
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  category = "Sports Training",
  keywords = [],
  wordCount,
  readingTime
}: ArticleSchemaProps) => {
  const articleData = {
    headline,
    description,
    image: [image],
    author: {
      "@type": "Organization",
      name: author,
      url: "https://dunkcalculator.com"
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: 300,
        height: 300
      }
    },
    datePublished: publishedTime || new Date().toISOString(),
    dateModified: modifiedTime || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || "https://dunkcalculator.com/"
    },
    articleSection: category,
    keywords: keywords.join(", "),
    ...(wordCount && { wordCount }),
    ...(readingTime && { 
      timeRequired: readingTime,
      estimatedReadingTime: readingTime 
    }),
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Athletic Performance",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_training"
      }
    ],
    mentions: [
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump"
      },
      {
        "@type": "Thing",
        name: "Slam Dunk",
        sameAs: "https://en.wikipedia.org/wiki/Slam_dunk"
      }
    ]
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default ArticleSchema;
