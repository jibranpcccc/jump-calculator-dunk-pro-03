
import StructuredData from "./StructuredData";

interface BlogPostSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
  tags?: string[];
  category?: string;
  wordCount?: number;
  commentCount?: number;
  readingTime?: string;
}

const BlogPostSchema = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  tags = [],
  category = "Basketball Training",
  wordCount,
  commentCount,
  readingTime
}: BlogPostSchemaProps) => {
  const blogPostData = {
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://dunkcalculator.com/about",
      sameAs: ["https://dunkcalculator.com/"]
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: 300,
        height: 300
      },
      url: "https://dunkcalculator.com"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || "https://dunkcalculator.com/blog"
    },
    url: url || "https://dunkcalculator.com/blog",
    articleSection: category,
    ...(tags.length > 0 && { keywords: tags.join(", ") }),
    ...(wordCount && { wordCount }),
    ...(commentCount && { commentCount }),
    ...(readingTime && { 
      timeRequired: readingTime,
      readingTime: readingTime 
    }),
    inLanguage: "en-US",
    genre: ["Sports", "Fitness", "Training"],
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
      },
      {
        "@type": "Thing",
        name: "Athletic Performance",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_performance"
      }
    ],
    mentions: [
      {
        "@type": "SportsOrganization",
        name: "NBA",
        sameAs: "https://www.nba.com"
      },
      {
        "@type": "Thing",
        name: "Basketball",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      }
    ],
    isPartOf: {
      "@type": "Blog",
      name: "Dunk Calculator Training Blog",
      url: "https://dunkcalculator.com/blog",
      description: "Expert basketball training guides and vertical jump improvement tips"
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: url || "https://dunkcalculator.com/blog"
      },
      {
        "@type": "ShareAction",
        target: url || "https://dunkcalculator.com/blog"
      }
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players, Athletes, Sports Enthusiasts"
    }
  };

  return <StructuredData type="BlogPosting" data={blogPostData} />;
};

export default BlogPostSchema;
