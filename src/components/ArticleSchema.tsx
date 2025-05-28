
import StructuredData from "./StructuredData";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  category?: string;
  keywords?: string[];
  readingTime?: number;
}

const ArticleSchema = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  category = "Sports",
  keywords = [],
  readingTime = 5
}: ArticleSchemaProps) => {
  const articleData = {
    headline,
    description,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630
    },
    author: {
      "@type": "Person",
      name: author,
      url: "https://dunkcalculator.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: 200,
        height: 200
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    articleSection: category,
    keywords: keywords.join(", "),
    wordCount: readingTime * 200,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com"
    }
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default ArticleSchema;
