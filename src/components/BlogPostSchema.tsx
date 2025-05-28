
import StructuredData from "./StructuredData";

interface BlogPostSchemaProps {
  headline: string;
  description: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  url?: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: string;
}

const BlogPostSchema = ({
  headline,
  description,
  author = "Dunk Calculator Team",
  publishedTime,
  modifiedTime,
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  category = "Basketball Training",
  tags = [],
  wordCount,
  readingTime
}: BlogPostSchemaProps) => {
  const blogPostData = {
    headline,
    description,
    image: [image],
    author: {
      "@type": "Person",
      name: author,
      url: "https://dunkcalculator.com/"
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
    keywords: tags.join(", "),
    ...(wordCount && { wordCount }),
    ...(readingTime && { timeRequired: readingTime }),
    inLanguage: "en",
    isAccessibleForFree: true,
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Organization",
      name: "Dunk Calculator"
    },
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
    ]
  };

  return <StructuredData type="BlogPosting" data={blogPostData} />;
};

export default BlogPostSchema;
