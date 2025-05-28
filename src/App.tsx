import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import DunkCalculatorPage from "./pages/DunkCalculator";
import VerticalJumpTraining from "./pages/VerticalJumpTraining";
import BasketballDunkTips from "./pages/BasketballDunkTips";
import BasketballBMICalculator from "./pages/BasketballBMICalculator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dunk-calculator" element={<DunkCalculatorPage />} />
            <Route path="/vertical-jump-training" element={<VerticalJumpTraining />} />
            <Route path="/basketball-dunk-tips" element={<BasketballDunkTips />} />
            <Route path="/basketball-bmi-calculator" element={<BasketballBMICalculator />} />
            {/* Additional routes that would be added */}
            <Route path="/calculators" element={<Index />} />
            <Route path="/blog" element={<Index />} />
            <Route path="/faq" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="/hangtime-calculator" element={<Index />} />
            <Route path="/reach-calculator" element={<Index />} />
            <Route path="/basketball-position-calculator" element={<Index />} />
            <Route path="/vertical-jump-test" element={<Index />} />
            {/* Catch all route */}
            <Route path="*" element={<Index />} />
          </Routes>
          <Toaster />
          <Sonner />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
