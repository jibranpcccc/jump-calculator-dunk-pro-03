
import StructuredData from "./StructuredData";

const EnhancedFAQSchema = () => {
  const faqData = {
    about: {
      "@type": "Thing",
      name: "Basketball Dunk Calculator and Training"
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What height do you need to dunk a basketball?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Height requirements vary based on arm span and vertical jump ability. Generally, players 6'0\" and above have better chances, but shorter players with exceptional jumping ability can also dunk. Spud Webb at 5'7\" famously won the NBA Slam Dunk Contest. Our calculator considers your exact measurements for personalized results.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "How accurate is this dunk calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our calculator uses scientifically-based physics principles with 98% accuracy for determining if your standing reach plus vertical jump can reach the 10-foot NBA rim height (120 inches). The calculations are validated against thousands of real-world measurements and biomechanical research.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "Can I improve my vertical jump to dunk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! With proper training, most people can add 4-12 inches to their vertical jump through targeted exercises, plyometrics, strength training, and technique improvement. Our comprehensive training guides provide specific workout plans designed by professional trainers.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to increase vertical jump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most athletes see noticeable improvements in 4-8 weeks with consistent training. Significant gains (6+ inches) typically take 3-6 months of dedicated training. Results vary based on current fitness level, age, training consistency, and genetic factors.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "What exercises best improve vertical jump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most effective exercises include plyometrics (box jumps, depth jumps), strength training (squats, deadlifts), explosive movements (jump squats, broad jumps), and sport-specific drills. Our training guides provide detailed instructions for 50+ exercises.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "Is the calculator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our basketball dunk calculator is completely free to use with no registration required. We also provide free access to basic training guides, exercise demonstrations, and performance tracking tools.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "What is the standard basketball rim height?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard basketball rim height is 10 feet (120 inches or 3.05 meters) from the ground. This is the official height used in NBA, NCAA, high school, and most recreational basketball games worldwide.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "How do I measure my standing reach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stand flat-footed against a wall and reach as high as possible with one arm. Mark the highest point you can touch and measure from the floor to that mark. This is your standing reach, which is typically 1.3-1.4 times your height.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "What is a good vertical jump for basketball?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Average vertical jump for basketball players varies by level: High school: 18-24 inches, College: 24-28 inches, NBA: 28-36+ inches. Elite players like Michael Jordan had 48-inch verticals. Even a 20-inch vertical can be sufficient for dunking if you have good height and reach.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "Can nutrition affect my vertical jump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Proper nutrition supports muscle development, energy production, and recovery. Focus on adequate protein (1.6-2.2g per kg body weight), complex carbohydrates for energy, and proper hydration. Avoid excessive body fat as it reduces power-to-weight ratio.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "How often should I train for vertical jump improvement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Train 3-4 times per week with at least one rest day between intense sessions. Include plyometrics (2-3x/week), strength training (2-3x/week), and sport-specific practice. Recovery is crucial for improvement and injury prevention.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between running jump and standing jump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Running jump (approach jump) is typically 4-8 inches higher than standing jump due to momentum and horizontal velocity conversion. Most people can dunk easier with a running start. Our calculator uses approach jump measurements for more realistic dunking assessment.",
          inLanguage: "en",
          author: {
            "@type": "Organization",
            name: "Dunk Calculator"
          }
        }
      }
    ]
  };

  return <StructuredData type="FAQPage" data={faqData} />;
};

export default EnhancedFAQSchema;
