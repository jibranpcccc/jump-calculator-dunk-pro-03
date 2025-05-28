
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
