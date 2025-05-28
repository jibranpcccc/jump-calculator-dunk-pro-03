
import StructuredData from "./StructuredData";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
}

const FAQStructuredData = ({ faqs }: FAQStructuredDataProps) => {
  const faqData = {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData type="FAQPage" data={faqData} />;
};

export default FAQStructuredData;
