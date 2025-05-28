import { Helmet } from "react-helmet";

const SEOAnalytics = () => {
  return (
    <Helmet>
      <script>
        {`
          // Google Analytics placeholder
          // Replace with your actual GA tracking code
          console.log('SEO Analytics loaded');
        `}
      </script>
    </Helmet>
  );
};

export default SEOAnalytics;
