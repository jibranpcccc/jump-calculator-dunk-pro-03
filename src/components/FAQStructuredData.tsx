
import StructuredData from "./StructuredData";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
  about?: string;
}

const FAQStructuredData = ({ 
  faqs, 
  about = "Basketball Dunk Calculator and Training" 
}: FAQStructuredDataProps) => {
  const faqData = {
    about: {
      "@type": "Thing",
      name: about
    },
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        inLanguage: "en",
        author: {
          "@type": "Organization",
          name: "Dunk Calculator"
        }
      }
    }))
  };

  return <StructuredData type="FAQPage" data={faqData} />;
};

export default FAQStructuredData;
