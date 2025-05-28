
import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const CalculatorFAQ = () => {
  const faqs = [
    {
      question: "How accurate are these basketball calculators?",
      answer: "Our calculators use established sports science formulas and biomechanical principles. While they provide excellent estimates, individual results may vary based on factors like technique, training, and genetics."
    },
    {
      question: "What's the difference between standing reach and wingspan?",
      answer: "Wingspan is the distance from fingertip to fingertip with arms spread wide. Standing reach is how high you can reach while standing flat-footed, which is typically about 1.33 times your wingspan."
    },
    {
      question: "How often should I test my vertical jump?",
      answer: "Test every 2-4 weeks during active training. More frequent testing can lead to overtraining, while less frequent testing makes it harder to track progress and adjust training."
    },
    {
      question: "Can shorter players really learn to dunk?",
      answer: "Yes! While height helps, many players under 6 feet have learned to dunk through dedicated training. It requires exceptional vertical jump development, typically 35+ inches."
    },
    {
      question: "What's a good vertical jump for basketball?",
      answer: "Average recreational players jump 16-20 inches. High school players average 20-24 inches. College players range 24-28 inches. NBA players average 28+ inches, with elite dunkers reaching 35-40+ inches."
    },
    {
      question: "How long does it take to improve vertical jump significantly?",
      answer: "With consistent training, expect 2-4 inches improvement in 3-6 months. Beginners may see faster initial gains, while advanced athletes progress more slowly. Genetics and training quality heavily influence results."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-gray-200 rounded-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
              <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800 text-center">
          <strong>Have more questions?</strong> Contact us or check out our comprehensive training guides for detailed answers.
        </p>
      </div>
    </div>
  );
};

export default CalculatorFAQ;
