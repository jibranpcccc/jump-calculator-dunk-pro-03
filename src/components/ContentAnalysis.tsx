
interface ContentAnalysisProps {
  title: string;
  contentType: 'Blog Post' | 'Informational Page' | 'Calculator Tool Page' | 'About Us' | 'Contact' | 'Homepage';
  primaryGoal: string;
  targetAudience: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords: string[];
  userIntent: 'Informational' | 'Navigational' | 'Commercial' | 'Transactional';
}

const ContentAnalysis = ({
  title,
  contentType,
  primaryGoal,
  targetAudience,
  primaryKeyword,
  secondaryKeywords,
  lsiKeywords,
  userIntent
}: ContentAnalysisProps) => {
  return (
    <div className="hidden">
      {/* This component stores content analysis data for SEO optimization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AnalysisData",
          "contentTitle": title,
          "contentType": contentType,
          "primaryGoal": primaryGoal,
          "targetAudience": targetAudience,
          "keywords": {
            "primary": primaryKeyword,
            "secondary": secondaryKeywords,
            "lsi": lsiKeywords
          },
          "userIntent": userIntent
        })}
      </script>
    </div>
  );
};

export default ContentAnalysis;
