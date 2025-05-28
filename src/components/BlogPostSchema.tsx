
import StructuredData from "./StructuredData";

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  imageUrl?: string;
}

const BlogPostSchema = ({ 
  title, 
  description, 
  url, 
  publishDate, 
  modifiedDate, 
  author = "Dunk Calculator Team",
  imageUrl = "https://dunkcalculator.com/blog-image.jpg"
}: BlogPostSchemaProps) => {
  const articleData = {
    headline: title,
    description,
    url,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png"
      }
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default BlogPostSchema;
