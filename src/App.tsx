
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import VerticalJumpTraining from "./pages/VerticalJumpTraining";
import BasketballDunkTips from "./pages/BasketballDunkTips";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import IncreaseVerticalJumpExercises from "./pages/blog/IncreaseVerticalJumpExercises";
import HowToDunkBeginners from "./pages/blog/HowToDunkBeginners";
import VerticalJumpWorkout from "./pages/blog/VerticalJumpWorkout";
import BasketballJumpTechnique from "./pages/blog/BasketballJumpTechnique";
import DunkIfYouAreShort from "./pages/blog/DunkIfYouAreShort";
import BestVerticalJumpExercises from "./pages/blog/BestVerticalJumpExercises";
import CommonDunkingMistakes from "./pages/blog/CommonDunkingMistakes";
import BestShoesForVerticalLeap from "./pages/blog/BestShoesForVerticalLeap";
import HowToMeasureVerticalJump from "./pages/blog/HowToMeasureVerticalJump";
import NutritionVerticalJump from "./pages/blog/NutritionVerticalJump";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Dunk Calculator | Can You Dunk? Try Our Free Tool</title>
        <meta name="description" content="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="dunk calculator, vertical jump calculator, can you dunk, basketball dunk test, jump height calculator, free dunk test, basketball training, vertical leap" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Free Dunk Calculator | Can You Dunk a Basketball?" />
        <meta property="og:description" content="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com" />
        <meta property="og:site_name" content="Dunk Calculator" />
        <meta property="og:image" content="https://dunkcalculator.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Dunk Calculator | Can You Dunk a Basketball?" />
        <meta name="twitter:description" content="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required!" />
        <meta name="twitter:image" content="https://dunkcalculator.com/twitter-card.jpg" />
        <meta name="twitter:site" content="@dunkcalculator" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://dunkcalculator.com" />
        <meta name="author" content="Dunk Calculator Team" />
        <meta name="theme-color" content="#ea580c" />
        
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
        
        {/* Preload Important Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dunk Calculator",
            "description": "Free online basketball dunk calculator and vertical jump training resources",
            "url": "https://dunkcalculator.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://dunkcalculator.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://dunkcalculator.com/blog",
              "https://dunkcalculator.com/vertical-jump-training",
              "https://dunkcalculator.com/basketball-dunk-tips"
            ],
            "mainEntity": {
              "@type": "WebApplication",
              "name": "Basketball Dunk Calculator",
              "description": "Calculate if you can dunk a basketball based on your height, reach, and vertical jump",
              "applicationCategory": "SportsApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Free dunk calculation",
                "Vertical jump assessment",
                "Basketball training tips",
                "Mobile-friendly interface"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator",
              "url": "https://dunkcalculator.com"
            }
          })}
        </script>

        {/* Calculator Tool Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Basketball Dunk Calculator",
            "description": "Free tool to calculate if you can dunk a basketball",
            "url": "https://dunkcalculator.com",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "screenshot": "https://dunkcalculator.com/calculator-screenshot.jpg"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What height do you need to dunk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your arm span and vertical jump! Generally, players 6'0\" and above have a better chance, but shorter players with exceptional jumping ability can also dunk."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is this calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our calculator gives you a good estimate based on basic physics. Real dunking also requires technique, timing, and ball handling skills."
                }
              },
              {
                "@type": "Question",
                "name": "Can I improve my vertical jump?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! With proper training, most people can add 4-12 inches to their vertical jump through exercises and technique improvement."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/vertical-jump-training" element={<VerticalJumpTraining />} />
          <Route path="/basketball-dunk-tips" element={<BasketballDunkTips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/blog/increase-vertical-jump-exercises" element={<IncreaseVerticalJumpExercises />} />
          <Route path="/blog/how-to-dunk-beginners" element={<HowToDunkBeginners />} />
          <Route path="/blog/vertical-jump-workout" element={<VerticalJumpWorkout />} />
          <Route path="/blog/basketball-jump-technique" element={<BasketballJumpTechnique />} />
          <Route path="/blog/dunk-if-you-are-short" element={<DunkIfYouAreShort />} />
          <Route path="/blog/best-vertical-jump-exercises" element={<BestVerticalJumpExercises />} />
          <Route path="/blog/common-dunking-mistakes" element={<CommonDunkingMistakes />} />
          <Route path="/blog/best-shoes-for-vertical-leap" element={<BestShoesForVerticalLeap />} />
          <Route path="/blog/how-to-measure-vertical-jump" element={<HowToMeasureVerticalJump />} />
          <Route path="/blog/nutrition-vertical-jump" element={<NutritionVerticalJump />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
