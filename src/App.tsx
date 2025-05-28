
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
        <meta name="description" content="Use our dunk calculator to find out if your vertical jump is high enough to dunk. No login, fast, mobile-friendly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="dunk calculator, vertical jump calculator, can you dunk, basketball dunk test, jump height calculator" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dunk Calculator | Can You Dunk? Try Our Free Tool" />
        <meta property="og:description" content="Use our dunk calculator to find out if your vertical jump is high enough to dunk. No login, fast, mobile-friendly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com" />
        <meta property="og:site_name" content="Dunk Calculator" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dunk Calculator | Can You Dunk? Try Our Free Tool" />
        <meta name="twitter:description" content="Use our dunk calculator to find out if your vertical jump is high enough to dunk. No login, fast, mobile-friendly." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dunkcalculator.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dunk Calculator",
            "description": "Free online dunk calculator and basketball training resources",
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
              "applicationCategory": "Sports",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
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
