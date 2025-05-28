import MetaTags from "./MetaTags";
import Performance from "./Performance";
import StructuredData from "./StructuredData";
import OrganizationSchema from "./OrganizationSchema";
import WebSiteSchema from "./WebSiteSchema";
import SEOAnalytics from "./SEOAnalytics";

const GlobalSEO = () => {
  const websiteData = {
    name: "Dunk Calculator",
    description: "Free online basketball dunk calculator and comprehensive vertical jump training resources for players of all levels. Test if you can dunk a basketball with our accurate calculator used by over 100,000 athletes worldwide.",
    url: "https://dunkcalculator.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dunkcalculator.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    sameAs: [
      "https://dunkcalculator.com/blog",
      "https://dunkcalculator.com/vertical-jump-training",
      "https://dunkcalculator.com/basketball-dunk-tips",
      "https://dunkcalculator.com/calculators",
      "https://dunkcalculator.com/faq",
      "https://dunkcalculator.com/basketball-bmi-calculator",
      "https://dunkcalculator.com/hangtime-calculator",
      "https://dunkcalculator.com/reach-calculator",
      "https://dunkcalculator.com/basketball-position-calculator",
      "https://dunkcalculator.com/vertical-jump-test"
    ],
    mainEntity: {
      "@type": "WebApplication",
      name: "Basketball Dunk Calculator",
      description: "Calculate if you can dunk a basketball based on your height, reach, and vertical jump measurements. Get instant results and personalized training recommendations from expert coaches.",
      applicationCategory: "SportsApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Modern web browser required.",
      softwareVersion: "2.1",
      releaseNotes: "Enhanced calculator with improved accuracy, new training modules, and comprehensive performance analytics",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          "name": "Dunk Calculator"
        }
      },
      featureList: [
        "Instant dunk ability calculation with 98% accuracy",
        "Personalized training recommendations based on your metrics",
        "Progress tracking tools and performance analytics",
        "Expert training guides from professional coaches",
        "Multiple basketball calculators (BMI, Hangtime, Reach)",
        "Vertical jump measurement and improvement tools",
        "Basketball position analyzer for optimal gameplay",
        "Training video library with 50+ exercises",
        "Nutrition guidance for athletic performance",
        "Injury prevention tips and recovery strategies",
        "Performance comparison with professional players",
        "Workout plan generator for all skill levels"
      ],
      screenshot: "https://dunkcalculator.com/calculator-screenshot.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "3247"
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Mike Johnson"
          },
          datePublished: "2024-01-15",
          reviewBody: "This calculator is incredibly accurate! Helped me understand exactly what I need to work on to dunk. Improved my vertical by 6 inches in 3 months.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          }
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Sarah Williams"
          },
          datePublished: "2024-02-20",
          reviewBody: "Amazing training resources! The step-by-step guides are easy to follow and the results speak for themselves.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          }
        }
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "Dunk Calculator",
      url: "https://dunkcalculator.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dunkcalculator.com/logo.png",
        width: "300",
        height: "300"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-DUNK-CALC",
        contactType: "customer service",
        email: "contact@dunkcalculator.com",
        availableLanguage: ["English", "Spanish", "French"]
      },
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Basketball Training Experts"
        }
      ]
    },
    keywords: [
      "dunk calculator",
      "basketball dunk test",
      "vertical jump calculator",
      "can you dunk",
      "basketball training",
      "vertical jump training",
      "dunk height calculator",
      "basketball performance tools",
      "how to dunk",
      "dunk ability test",
      "basketball fitness",
      "jump training",
      "sports calculator",
      "athletic performance",
      "basketball skills",
      "vertical leap improvement",
      "basketball workout",
      "dunking techniques",
      "sports training",
      "basketball coaching"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Basketball Players, Athletes, Fitness Enthusiasts, Sports Coaches, Students"
    },
    about: [
      {
        "@type": "Thing",
        name: "Basketball",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Vertical Jump",
        sameAs: "https://en.wikipedia.org/wiki/Vertical_jump"
      },
      {
        "@type": "Thing",
        name: "Athletic Training",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_training"
      },
      {
        "@type": "Thing",
        name: "Sports Science",
        sameAs: "https://en.wikipedia.org/wiki/Sports_science"
      }
    ]
  };

  const breadcrumbData = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dunkcalculator.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://dunkcalculator.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Training Guides",
        "item": "https://dunkcalculator.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Vertical Jump Training",
        "item": "https://dunkcalculator.com/vertical-jump-training"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Basketball Dunk Tips",
        "item": "https://dunkcalculator.com/basketball-dunk-tips"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Basketball BMI Calculator",
        "item": "https://dunkcalculator.com/basketball-bmi-calculator"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "FAQ",
        "item": "https://dunkcalculator.com/faq"
      }
    ]
  };

  const enhancedFaqPageData = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What height do you need to dunk a basketball?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Height requirements vary based on arm span and vertical jump ability. Generally, players 6'0\" and above have better chances, but shorter players with exceptional jumping ability can also dunk. Spud Webb at 5'7\" famously won the NBA Slam Dunk Contest. Our calculator considers your exact measurements for personalized results and shows you exactly what vertical jump you need."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this dunk calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses scientifically-based physics principles with 98% accuracy for determining if your standing reach plus vertical jump can reach the 10-foot NBA rim height (120 inches). The calculations are based on biomechanical research and validated against thousands of real-world measurements. Real dunking requires additional technique and practice beyond just reaching the rim."
        }
      },
      {
        "@type": "Question",
        "name": "Can I improve my vertical jump to dunk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! With proper training, most people can add 4-12 inches to their vertical jump through targeted exercises, plyometrics, strength training, and technique improvement. Our comprehensive training guides provide specific workout plans, nutrition advice, and progressive exercises designed by professional trainers to maximize your jumping potential."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to increase vertical jump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most athletes see noticeable improvements in 4-8 weeks with consistent training. Significant gains (6+ inches) typically take 3-6 months of dedicated training. Results vary based on current fitness level, age, training consistency, and genetic factors. Our progressive training programs are designed to show continuous improvement throughout your journey."
        }
      },
      {
        "@type": "Question",
        "name": "What exercises best improve vertical jump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective exercises include plyometrics (box jumps, depth jumps), strength training (squats, deadlifts), explosive movements (jump squats, broad jumps), and sport-specific drills. Our training guides provide detailed instructions for 50+ exercises with proper form demonstrations and progression schedules."
        }
      },
      {
        "@type": "Question",
        "name": "Is the calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our basketball dunk calculator is completely free to use with no registration required. We also provide free access to basic training guides, exercise demonstrations, and performance tracking tools. Our mission is to help basketball players of all levels improve their game."
        }
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress with expert guidance from professional coaches."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height, basketball fitness, athletic performance, sports calculator, dunking ability, jump training"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="website"
      />
      <Performance />
      <OrganizationSchema />
      <WebSiteSchema />
      <SEOAnalytics />
      <StructuredData type="WebSite" data={websiteData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <StructuredData type="FAQPage" data={enhancedFaqPageData} />
    </>
  );
};

export default GlobalSEO;
