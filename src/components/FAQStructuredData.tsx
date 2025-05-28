
import StructuredData from "./StructuredData";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

const FAQStructuredData = ({ faqs }: FAQStructuredDataProps) => {
  const faqData = {
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return <StructuredData type="FAQPage" data={faqData} />;
};

export default FAQStructuredData;
