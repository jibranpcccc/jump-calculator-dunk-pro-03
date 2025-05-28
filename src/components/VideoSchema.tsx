
import StructuredData from "./StructuredData";

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl?: string;
  contentUrl?: string;
}

const VideoSchema = ({ 
  name, 
  description, 
  thumbnailUrl, 
  uploadDate, 
  duration,
  embedUrl,
  contentUrl 
}: VideoSchemaProps) => {
  const videoData = {
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    embedUrl,
    contentUrl,
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png"
      }
    }
  };

  return <StructuredData type="WebPage" data={{ mainEntity: videoData }} />;
};

export default VideoSchema;
