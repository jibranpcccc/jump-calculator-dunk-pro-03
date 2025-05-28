
import StructuredData from "./StructuredData";

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  publisher?: string;
  keywords?: string[];
}

const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  publisher = "Dunk Calculator",
  keywords = []
}: VideoSchemaProps) => {
  const videoData = {
    name,
    description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    publisher: {
      "@type": "Organization",
      name: publisher,
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: 300,
        height: 300
      }
    },
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
    inLanguage: "en",
    regionsAllowed: ["US", "CA", "GB", "AU"],
    isFamilyFriendly: true,
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      }
    ]
  };

  return <StructuredData type="VideoObject" data={videoData} />;
};

export default VideoSchema;
