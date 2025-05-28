
import { Helmet } from "react-helmet";
import { useState } from "react";
import { ChevronDown, ChevronUp, Calculator, HelpCircle, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const FAQ = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const faqSections = [
    {
      id: "calculator",
      title: "Using the Dunk Calculator",
      icon: Calculator,
      questions: [
        {
          question: "How accurate is the Dunk Calculator?",
          answer: "Our calculator uses established formulas and average buffer zones to provide a strong estimate of your dunking potential. For the most accurate personal result, ensure your input measurements (especially Standing Reach and Vertical Jump) are precise. It's a great motivational tool and benchmark, with accuracy typically within 2-3 inches when measurements are correct."
        },
        {
          question: "What if I don't know my Standing Reach or Vertical Jump?",
          answer: "We highly recommend measuring them for accuracy! Check out our detailed guides: Standing Reach Measurement and Vertical Jump Testing. Our calculator can estimate standing reach from height, but this is less precise and may affect your results by 1-2 inches."
        },
        {
          question: "Can I save my calculator results?",
          answer: "Currently, we don't offer a feature to save results directly on the site. We recommend taking a screenshot or noting down your key metrics to track your progress over time!"
        },
        {
          question: "Why does the calculator ask for my age and weight?",
          answer: "These optional inputs help us provide more personalized recommendations. Age affects training approaches and realistic timelines, while weight can influence jumping mechanics and training priorities."
        }
      ]
    },
    {
      id: "measurements",
      title: "Measuring Your Physical Attributes",
      icon: Target,
      questions: [
        {
          question: "What's the best way to measure my vertical jump for the calculator?",
          answer: "For consistency, we recommend the standing vertical jump test with countermovement. Use the chalk method or jump-and-reach test against a wall. Our detailed Vertical Jump Measurement Guide covers several accurate methods."
        },
        {
          question: "How often should I re-measure my vertical jump when training?",
          answer: "We suggest re-measuring every 4-6 weeks during a consistent training program to track progress. Avoid measuring too frequently, as meaningful gains take time and daily fluctuations are normal."
        },
        {
          question: "Is standing reach really that important for dunking?",
          answer: "Absolutely! Standing reach is often more important than height alone. Two people of the same height can have standing reaches that differ by 4-6 inches due to arm length and shoulder width. This directly affects your dunking ability."
        },
        {
          question: "How do I measure my standing reach accurately?",
          answer: "Stand flat-footed against a wall, reach up as high as possible with your dominant hand, and mark the spot. Our Standing Reach Guide provides detailed instructions with common mistakes to avoid."
        }
      ]
    },
    {
      id: "training",
      title: "Vertical Jump Training",
      icon: BookOpen,
      questions: [
        {
          question: "How long does it typically take to increase my vertical jump?",
          answer: "This varies greatly depending on your current level, genetics, training consistency, and approach. Beginners might see noticeable gains (2-4 inches) in 8-12 weeks. Intermediate athletes typically see 1-3 inches over 3-6 months. Advanced athletes might work for 6+ months for smaller gains. Consistency and proper programming are key!"
        },
        {
          question: "Is it possible to learn to dunk if I'm short or older?",
          answer: "Absolutely! While genetics and age play a role, significant improvement in vertical jump is possible for almost anyone with dedicated, smart training. We've seen players under 5'8\" learn to dunk and athletes over 30 add significant inches to their jump. Focus on your potential, not limitations!"
        },
        {
          question: "What are the most important exercises for increasing vertical jump?",
          answer: "There's no single magic exercise, but the most effective approach combines: (1) Compound strength exercises like squats and deadlifts, (2) Explosive plyometrics like depth jumps and box jumps, (3) Olympic lift variations for power development. Check our Comprehensive Vertical Jump Training Guide for detailed programs."
        },
        {
          question: "Can I train for vertical jump every day?",
          answer: "No! Your muscles need recovery time to adapt and grow stronger. We recommend 3-4 training days per week with at least one full rest day between intense sessions. Overtraining can actually hurt your progress and increase injury risk."
        },
        {
          question: "Should I focus on strength training or plyometrics?",
          answer: "Both are essential! Beginners should start with strength training to build a foundation, then gradually add plyometrics. Intermediate and advanced athletes need both: strength provides the raw power, while plyometrics teach you to use that power explosively."
        }
      ]
    },
    {
      id: "nutrition",
      title: "Nutrition & Recovery",
      icon: HelpCircle,
      questions: [
        {
          question: "What should I eat to jump higher?",
          answer: "Focus on a balanced diet rich in protein for muscle repair (0.8-1g per lb bodyweight), carbohydrates for energy, and healthy fats. Proper hydration is vital - aim for half your bodyweight in ounces of water daily. See our detailed Nutrition for Jumpers Guide for specific meal plans."
        },
        {
          question: "Do supplements help with vertical jump training?",
          answer: "A few supplements have research support: creatine monohydrate (3-5g daily) for power and strength, protein powder if you struggle to meet protein needs through food, and a quality multivitamin. However, proper training, nutrition, and sleep are far more important than any supplement."
        },
        {
          question: "How much sleep do I need for optimal jump training results?",
          answer: "Aim for 7-9 hours of quality sleep per night. Growth hormone, crucial for muscle development and recovery, is primarily released during deep sleep. Poor sleep can reduce training adaptation by up to 30%."
        }
      ]
    },
    {
      id: "general",
      title: "General Website Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "Is the Dunk Calculator really free?",
          answer: "Yes! Our dunk calculator and all measurement guides are completely free to use. We believe every athlete should have access to tools that help them improve, regardless of their budget."
        },
        {
          question: "How can I submit a success story or feedback?",
          answer: "We'd love to hear from you! Please use our Contact Us page to share your progress, ask questions, or provide feedback. Success stories help motivate other athletes on their journey!"
        },
        {
          question: "Can I use your calculator and guides for my team or students?",
          answer: "Absolutely! Coaches, trainers, and teachers are welcome to use our resources with their athletes and students. We just ask that you credit Dunk-Calculator.info when sharing our content."
        },
        {
          question: "Do you offer personal training or coaching services?",
          answer: "Currently, we focus on providing free educational resources and tools. For personalized coaching, we recommend finding a qualified trainer in your area who specializes in athletic performance and vertical jump training."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dunk Calculator & Vertical Jump FAQ | Your Questions Answered</title>
        <meta name="description" content="Find answers to common questions about our dunk calculator, vertical jump training, measuring techniques, nutrition, injury prevention, and more on Dunk-Calculator.info." />
        <meta name="keywords" content="dunk calculator FAQ, vertical jump questions, basketball training help, measurement guide FAQ, jumping FAQ" />
        <link rel="canonical" href="https://dunkcalculator.com/faq/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our dunk calculator, vertical jump training, 
              measurement techniques, and everything you need to know to start your dunking journey.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto space-y-6">
            {faqSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <IconComponent className="w-6 h-6 text-orange-600 mr-3" />
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    {openSections.includes(section.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openSections.includes(section.id) && (
                    <div className="px-6 pb-6 space-y-6">
                      {section.questions.map((faq, index) => (
                        <div key={index} className="border-l-4 border-orange-200 pl-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Help Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? We're here to help! 
              Don't hesitate to reach out with any questions about the calculator, training, or anything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Try the Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
