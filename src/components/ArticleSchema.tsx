
import StructuredData from "./StructuredData";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
  articleSection?: string;
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
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  articleSection = "Sports Training",
  wordCount,
  readingTime,
  keywords = []
}: ArticleSchemaProps) => {
  const articleData = {
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified || datePublished,
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
        width: 300,
        height: 300
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || "https://dunkcalculator.com/"
    },
    url: url || "https://dunkcalculator.com/",
    articleSection,
    ...(wordCount && { wordCount }),
    ...(readingTime && { 
      timeRequired: readingTime,
      readingTime: readingTime 
    }),
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
    inLanguage: "en-US",
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump"
      }
    ],
    mentions: [
      {
        "@type": "SportsOrganization",
        name: "NBA",
        sameAs: "https://www.nba.com"
      }
    ],
    isPartOf: {
      "@type": "Blog",
      name: "Dunk Calculator Blog",
      url: "https://dunkcalculator.com/blog"
    },
    potentialAction: {
      "@type": "ReadAction",
      target: url || "https://dunkcalculator.com/"
    }
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default ArticleSchema;
