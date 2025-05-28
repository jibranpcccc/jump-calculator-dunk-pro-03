
import StructuredData from "./StructuredData";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url?: string;
  wordCount?: number;
  readingTime?: string;
  keywords?: string[];
}

const ArticleSchema = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  url,
  wordCount,
  readingTime,
  keywords
}: ArticleSchemaProps) => {
  const articleData = {
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "Dunk Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dunkcalculator.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || "https://dunkcalculator.com"
    },
    "image": "https://dunkcalculator.com/og-image.jpg",
    ...(wordCount && { "wordCount": wordCount }),
    ...(readingTime && { "timeRequired": readingTime }),
    ...(keywords && { "keywords": keywords }),
    "articleSection": "Sports Training",
    "about": [
      {
        "@type": "Thing",
        "name": "Basketball Training"
      },
      {
        "@type": "Thing", 
        "name": "Vertical Jump"
      }
    ]
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default ArticleSchema;
