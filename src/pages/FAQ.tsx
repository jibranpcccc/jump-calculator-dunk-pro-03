
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqData = [
    {
      question: "Can you dunk with a 30-inch vertical?",
      answer: "It depends on your height and standing reach. Generally, players who are 6'0\" or taller with a 30-inch vertical can dunk. Use our dunk calculator to get a personalized answer based on your measurements."
    },
    {
      question: "How tall do you need to be to dunk?",
      answer: "There's no minimum height requirement to dunk, but it becomes easier with more height. Players as short as 5'3\" have dunked in professional games, though they needed exceptional vertical jumps (40+ inches). Most players 6'0\" and above can dunk with proper training."
    },
    {
      question: "What's the average vertical jump by height?",
      answer: "Average vertical jumps vary: 5'6\"-5'9\": 18-22 inches, 5'10\"-6'1\": 20-24 inches, 6'2\"-6'5\": 22-26 inches, 6'6\"+: 24-28 inches. Elite athletes often exceed these ranges significantly."
    },
    {
      question: "How is standing reach measured?",
      answer: "Stand flat-footed against a wall and reach up with your dominant hand as high as possible. Measure from the floor to your fingertips. This is typically 1.3-1.35 times your height."
    },
    {
      question: "Can you improve your vertical jump?",
      answer: "Yes! Most people can improve their vertical jump by 4-8 inches with proper training. Focus on plyometrics, strength training, and proper technique. Some athletes have gained 12+ inches through dedicated training."
    },
    {
      question: "Is the dunk calculator accurate?",
      answer: "Our calculator provides a good estimate based on physics and biomechanics. However, factors like hand size, timing, and technique also matter. It's approximately 85-90% accurate for determining dunking capability."
    },
    {
      question: "How long does it take to learn to dunk?",
      answer: "With consistent training, most athletes can learn to dunk within 6-18 months, depending on their starting point. Shorter players or those with lower initial verticals may need longer."
    },
    {
      question: "What muscles help you jump higher?",
      answer: "Key muscles for vertical jump include glutes, quadriceps, hamstrings, calves, and core muscles. Hip flexors and ankle mobility also play crucial roles in maximizing jump height."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-orange-600" />
              <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
              <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
              <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
              <Link to="/faq" className="text-orange-600 font-medium">FAQ</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dunk Calculator FAQ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about dunking, vertical jumps, and our dunk calculator tool.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Everything you need to know about dunking and improving your vertical jump
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Test Your Dunking Ability?</h2>
              <p className="mb-6">Use our free dunk calculator to find out if you can dunk right now!</p>
              <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Try Dunk Calculator
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Schema Markup for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </div>
  );
};

export default FAQ;
