
import { Helmet } from "react-helmet";

interface SocialMediaMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  siteName?: string;
}

const SocialMediaMeta = ({
  title,
  description,
  image = "https://dunkcalculator.com/og-image.jpg",
  url,
  type = "website",
  twitterCard = "summary_large_image",
  siteName = "Dunk Calculator"
}: SocialMediaMetaProps) => {
  return (
    <Helmet>
      {/* Facebook Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@dunkcalculator" />
      <meta name="twitter:creator" content="@dunkcalculator" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="dunk-calculator" />
      
      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />
      
      {/* Additional social meta */}
      <meta property="article:publisher" content="https://dunkcalculator.com" />
      <meta property="fb:app_id" content="your-facebook-app-id" />
    </Helmet>
  );
};

export default SocialMediaMeta;
