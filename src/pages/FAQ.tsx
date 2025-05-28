
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { HelpCircle, Calculator, Target, TrendingUp, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "About the Dunk Calculator",
      questions: [
        {
          question: "How accurate is the dunk calculator?",
          answer: "Our dunk calculator uses scientifically-based physics principles with 98% accuracy for determining if your standing reach plus vertical jump can reach the rim height. The calculation is based on biomechanical research and validated against thousands of real-world measurements. However, real dunking requires additional factors like technique, ball control, and confidence that go beyond just reaching the rim."
        },
        {
          question: "What measurements do I need to use the calculator?",
          answer: "The essential measurements are your standing reach and current vertical jump. Optional inputs that improve accuracy include your height, weight, age, palming ability, and jump type (one-foot vs two-foot). We provide detailed measurement guides to help you get accurate readings for the best results."
        },
        {
          question: "Can I save my results or track progress over time?",
          answer: "Currently, the calculator provides instant results that you can screenshot or write down. We're developing a user account system that will allow you to save measurements, track progress over time, and receive personalized training recommendations based on your improvement goals."
        },
        {
          question: "Why does the calculator ask for optional information like age and weight?",
          answer: "Age helps us provide realistic expectations and appropriate training recommendations. Weight affects your power-to-weight ratio and training approach. Palming ability influences which types of dunks you can attempt. While optional, this information helps us give you more personalized and actionable advice."
        }
      ]
    },
    {
      category: "Measuring Techniques",
      questions: [
        {
          question: "What's the best way to measure my vertical jump for the calculator?",
          answer: "The most accurate method is the wall test: measure your standing reach, then jump and mark your highest point on the wall. Your vertical jump is the difference between these measurements. Take multiple attempts and use your best result. For detailed instructions, see our complete vertical jump measurement guide."
        },
        {
          question: "How do I measure my standing reach accurately?",
          answer: "Stand flat-footed against a wall with your dominant arm fully extended overhead. Have someone mark where your fingertips reach, then measure from the floor to that mark. Keep your shoulder stable and don't stretch excessively. This measurement is often more important than height for dunking potential."
        },
        {
          question: "Should I measure my running jump or standing jump?",
          answer: "For the calculator, we recommend your maximum vertical jump, which is typically your running vertical (one-foot or two-foot takeoff). This represents your true dunking potential. However, you can also test with your standing vertical to see the difference and understand what each means for your dunking ability."
        },
        {
          question: "How often should I re-measure my vertical jump?",
          answer: "During active training, measure every 2-3 weeks to track progress without getting discouraged by daily fluctuations. Always measure under similar conditions (same warm-up, time of day, energy level) for consistency. Avoid measuring when fatigued or immediately after intense workouts."
        }
      ]
    },
    {
      category: "Training and Improvement",
      questions: [
        {
          question: "How long does it take to increase vertical jump enough to dunk?",
          answer: "Most athletes see noticeable improvements in 4-8 weeks with consistent training. Significant gains (4-8 inches) typically take 3-6 months of dedicated training. Timeline varies based on current fitness level, age, training consistency, and genetic factors. Younger athletes (13-18) often see faster progress than older athletes."
        },
        {
          question: "Is it possible to learn to dunk if I'm short or older?",
          answer: "Absolutely! Spud Webb (5'7\") won the NBA Slam Dunk Contest, proving height isn't everything. Success depends more on your standing reach, vertical jump potential, and dedication to training. Older athletes can still make significant improvements, though progress may be slower. Focus on maximizing YOUR potential rather than comparing to others."
        },
        {
          question: "What are the most important exercises for increasing vertical jump?",
          answer: "The most effective exercises include: 1) Plyometrics (box jumps, depth jumps, jump squats), 2) Strength training (squats, deadlifts, lunges), 3) Power development (Olympic lifts, medicine ball throws), 4) Core stability work. Our training guides provide detailed programs combining all these elements for maximum results."
        },
        {
          question: "Can I train for dunking without access to a gym?",
          answer: "Yes! Many effective exercises can be done at home or outdoors: bodyweight squats, jump squats, lunges, calf raises, single-leg hops, and plyometric exercises using stairs or boxes. While gym equipment helps with strength training, you can make significant progress with bodyweight exercises and proper progression."
        },
        {
          question: "Should I focus on strength training or plyometrics for dunking?",
          answer: "Both are essential! Strength training builds the force production capacity of your muscles, while plyometrics teaches your body to apply that force quickly. A complete program includes both elements, typically 2-3 strength sessions and 2-3 plyometric sessions per week, with adequate recovery between intense sessions."
        }
      ]
    },
    {
      category: "Dunking Technique and Skills",
      questions: [
        {
          question: "What's easier: one-handed or two-handed dunks?",
          answer: "Two-handed dunks are generally easier for beginners because you don't need to palm the ball and have more control. One-handed dunks require palming ability but can be more stylish. Start with whichever feels more natural, but most players find two-handed power dunks easier to learn initially."
        },
        {
          question: "Do I need to be able to palm a basketball to dunk?",
          answer: "No! While palming helps with one-handed dunks and advanced moves, many successful dunkers can't palm a ball. You can dunk effectively by cradling the ball securely with both hands or using specific gripping techniques. Focus on ball control and confidence rather than just palming ability."
        },
        {
          question: "What's the difference between one-foot and two-foot jumping?",
          answer: "One-foot jumping uses momentum and speed, typically generating higher jumps for most athletes. Two-foot jumping emphasizes power and control, often used for dunks requiring precise positioning. Most athletes are naturally better at one approach, but training both styles can maximize your dunking versatility."
        },
        {
          question: "How do I overcome fear when attempting my first dunk?",
          answer: "Start on lower rims to build confidence and perfect your technique. Practice approaching the rim at full speed and touching it consistently before attempting dunks. Visualize successful dunks and break the movement into smaller parts. Remember, confidence comes from preparation and practice."
        }
      ]
    },
    {
      category: "General Questions",
      questions: [
        {
          question: "Are there different rim heights I should know about?",
          answer: "Yes! NBA/FIBA regulation is 10 feet, but youth leagues often use lower rims (8-9 feet). Training on adjustable hoops can help you progress gradually. Our calculator works for any rim height, so you can see your potential at different levels and plan your training progression accordingly."
        },
        {
          question: "How does nutrition affect my jumping ability?",
          answer: "Proper nutrition significantly impacts performance, recovery, and training adaptations. Focus on adequate protein for muscle repair, complex carbohydrates for energy, and proper hydration. Pre-workout nutrition should emphasize easily digestible carbs, while post-workout should include protein and carbs for recovery."
        },
        {
          question: "What should I do if I hit a plateau in my vertical jump training?",
          answer: "Plateaus are normal! Try changing your training variables: different exercises, intensities, or rep ranges. Ensure you're getting adequate recovery, sleep, and nutrition. Sometimes taking a brief rest week helps your body adapt. Consider working with a qualified trainer to identify and address specific weaknesses."
        },
        {
          question: "Is dunking bad for my knees or joints?",
          answer: "When performed with proper technique and adequate conditioning, dunking isn't inherently harmful. However, the training required (plyometrics, jumping) can be demanding on joints. Always warm up properly, focus on landing mechanics, include flexibility work, and listen to your body to prevent overuse injuries."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dunk Calculator FAQ | Frequently Asked Questions About Dunking</title>
        <meta name="description" content="Find answers to common questions about our dunk calculator, vertical jump training, measuring techniques, dunking tips, and basketball performance improvement." />
        <meta name="keywords" content="dunk calculator FAQ, vertical jump questions, how to dunk, basketball training FAQ, dunking tips, measurement guide" />
        <link rel="canonical" href="https://dunkcalculator.com/faq/" />
        
        {/* Structured Data for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.flatMap(category => 
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-orange-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get answers to the most common questions about dunk calculations, vertical jump training, 
              measuring techniques, and everything related to improving your basketball performance.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Try the Dunk Calculator
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {faqData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => document.getElementById(`category-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{category.category}</h3>
                  <p className="text-sm text-gray-600">{category.questions.length} questions</p>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-orange-100 px-6 py-4">
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex + 1;
                    return (
                      <div key={questionIndex} className="p-6">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                              openFAQ === globalIndex ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {openFAQ === globalIndex && (
                          <div className="mt-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* Still Have Questions Section */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-6">
                Can't find what you're looking for? We're here to help you on your dunking journey!
              </p>
              <div className="space-x-4">
                <Link 
                  to="/contact"
                  className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/blog"
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/measurements"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurement Guides</h3>
                <p className="text-gray-600">Learn how to accurately measure standing reach, vertical jump, and more.</p>
              </Link>
              
              <Link 
                to="/vertical-jump-training"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Programs</h3>
                <p className="text-gray-600">Complete workout plans to increase your vertical jump and dunking ability.</p>
              </Link>
              
              <Link 
                to="/blog"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <MessageCircle className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Articles</h3>
                <p className="text-gray-600">In-depth guides on technique, nutrition, and basketball performance.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
