
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const faqData = [
    {
      question: "How high do I need to jump to dunk on a 10-foot rim?",
      answer: "You typically need to jump about 24 inches above your standing reach to touch a 10-foot rim, and around 30 inches above to actually dunk (since you must get the ball over the rim). This can vary based on your arm length and dunk technique."
    },
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
      question: "Why does the dunk calculator ask for standing reach?",
      answer: "Standing reach accounts for arm length – two people of the same height might have different reaches, affecting how high they need to jump to dunk. It's more accurate than using height alone."
    },
    {
      question: "What is the default extra reach for dunking?",
      answer: "We use 6 inches by default – roughly the diameter of the ball above the rim – as the extra height your hand needs to comfortably dunk without just grazing the rim."
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
    },
    {
      question: "Do you have to palm the basketball to dunk?",
      answer: "Not necessarily. Many players use a two-handed dunk or control the ball on the way up without fully palming it. Two-handed dunks are often easier for beginners."
    },
    {
      question: "What is a good vertical jump for dunking?",
      answer: "A 30-inch vertical leap is generally considered the benchmark for dunking on a 10-ft hoop for average heights. If you have a 30\"+ vertical, you're in a great position to dunk with some practice."
    },
    {
      question: "Can shoes increase your vertical jump?",
      answer: "Shoes can provide better support and slight energy return, but they only make a small difference (1-2 inches max). Training your legs has a much bigger impact on your vertical jump ability."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dunk Calculator FAQ – Your Dunking Questions Answered</title>
        <meta name="description" content="Frequently asked questions about dunking and our dunk calculator. How high do you need to jump to dunk? How to measure vertical leap? Find answers to common dunking queries here." />
        <meta name="keywords" content="dunk calculator FAQ, dunking questions, vertical jump FAQ, how to dunk, basketball FAQ" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dunk Calculator FAQ – Your Dunking Questions Answered" />
        <meta property="og:description" content="Get answers to common questions about dunking, vertical jumps, and our dunk calculator tool." />
        <meta property="og:type" content="website" />
        
        {/* FAQ Schema */}
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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
              <Link to="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
                <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
                <Link to="/faq" className="text-orange-600 font-medium">FAQ</Link>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">FAQ</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dunk Calculator FAQ
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about dunking, vertical jumps, and our dunk calculator tool.
              </p>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0c6cb4fe73d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Basketball players jumping and dunking during practice session"
                  className="rounded-lg shadow-lg mx-auto max-w-md w-full h-48 object-cover"
                  loading="eager"
                />
              </div>
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
                      <AccordionTrigger className="text-left font-medium hover:text-orange-600">
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

            {/* Quick Links */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/" className="p-4 border rounded-lg hover:bg-orange-50 transition-colors text-center">
                    <Calculator className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Try the Calculator</h3>
                    <p className="text-sm text-gray-600">Test your dunking ability now</p>
                  </Link>
                  <Link to="/vertical-jump-training" className="p-4 border rounded-lg hover:bg-orange-50 transition-colors text-center">
                    <div className="h-8 w-8 bg-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">T</div>
                    <h3 className="font-semibold">Training Guide</h3>
                    <p className="text-sm text-gray-600">Learn to jump higher</p>
                  </Link>
                  <Link to="/basketball-dunk-tips" className="p-4 border rounded-lg hover:bg-orange-50 transition-colors text-center">
                    <div className="h-8 w-8 bg-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">D</div>
                    <h3 className="font-semibold">Dunk Tips</h3>
                    <p className="text-sm text-gray-600">Master dunk technique</p>
                  </Link>
                </div>
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
        </main>
      </div>
    </>
  );
};

export default FAQ;
