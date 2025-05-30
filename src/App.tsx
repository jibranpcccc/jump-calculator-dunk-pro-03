
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

// Pages
import Index from './pages/Index';
import MeasurementGuides from './pages/MeasurementGuides';
import StandingReachGuide from './pages/StandingReachGuide';
import VerticalJumpGuide from './pages/VerticalJumpGuide';
import HoopHeightsGuide from './pages/HoopHeightsGuide';
import OtherMeasurementsGuide from './pages/OtherMeasurementsGuide';
import SitemapPage from './pages/SitemapPage';

// Calculator Pages
import Calculators from './pages/Calculators';
import HangtimeCalculator from './pages/HangtimeCalculator';
import ReachCalculator from './pages/ReachCalculator';
import StandingReachCalculatorPage from './pages/StandingReachCalculator';
import ApproachJumpCalculatorPage from './pages/ApproachJumpCalculator';
import VerticalJumpTest from './pages/VerticalJumpTest';
import BasketballBMICalculator from './pages/BasketballBMICalculator';
import BasketballPositionCalculator from './pages/BasketballPositionCalculator';
import MaxHangtimeCalculatorPage from './pages/MaxHangtimeCalculator';
import VerticalJumpImprovementCalculatorPage from './pages/VerticalJumpImprovementCalculator';
import TrainingProgressTrackerPage from './pages/TrainingProgressTracker';

// Vertical Jump Training Pages
import VerticalJumpTraining from './pages/VerticalJumpTraining';
import PlyometricExercises from './pages/PlyometricExercises';
import StrengthTraining from './pages/StrengthTraining';
import NutritionForJumpers from './pages/NutritionForJumpers';
import FlexibilityInjuryPrevention from './pages/FlexibilityInjuryPrevention';
import TrainingPrograms from './pages/TrainingPrograms';

// Dunking Skills Pages
import FirstDunkGuide from './pages/FirstDunkGuide';
import HowToPalmBasketball from './pages/HowToPalmBasketball';
import TypesOfDunks from './pages/TypesOfDunks';
import AverageVerticalJumps from './pages/AverageVerticalJumps';
import FamousDunkers from './pages/FamousDunkers';

// Enhanced Blog Posts
import IncreaseVerticalJumpExercises from './pages/blog/IncreaseVerticalJumpExercises';
import HowToDunkBeginners from './pages/blog/HowToDunkBeginners';
import VerticalJumpWorkout from './pages/blog/VerticalJumpWorkout';
import BasketballJumpTechnique from './pages/blog/BasketballJumpTechnique';
import DunkIfYouAreShort from './pages/blog/DunkIfYouAreShort';
import BestVerticalJumpExercises from './pages/blog/BestVerticalJumpExercises';

// Standard Website Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Glossary from './pages/Glossary';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />
          
          {/* Calculator Routes */}
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/calculators/hangtime" element={<HangtimeCalculator />} />
          <Route path="/calculators/reach" element={<ReachCalculator />} />
          <Route path="/calculators/standing-reach" element={<StandingReachCalculatorPage />} />
          <Route path="/calculators/approach-jump" element={<ApproachJumpCalculatorPage />} />
          <Route path="/calculators/vertical-jump-test" element={<VerticalJumpTest />} />
          <Route path="/calculators/bmi" element={<BasketballBMICalculator />} />
          <Route path="/calculators/position" element={<BasketballPositionCalculator />} />
          <Route path="/calculators/max-hangtime" element={<MaxHangtimeCalculatorPage />} />
          <Route path="/calculators/vertical-jump-improvement" element={<VerticalJumpImprovementCalculatorPage />} />
          <Route path="/tools/progress-tracker" element={<TrainingProgressTrackerPage />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/increase-vertical-jump-exercises" element={<IncreaseVerticalJumpExercises />} />
          <Route path="/blog/how-to-dunk-beginners" element={<HowToDunkBeginners />} />
          <Route path="/blog/vertical-jump-workout" element={<VerticalJumpWorkout />} />
          <Route path="/blog/basketball-jump-technique" element={<BasketballJumpTechnique />} />
          <Route path="/blog/dunk-if-you-are-short" element={<DunkIfYouAreShort />} />
          <Route path="/blog/best-vertical-jump-exercises" element={<BestVerticalJumpExercises />} />
          
          {/* Silo 1: Measurement Guide Routes */}
          <Route path="/measurements" element={<MeasurementGuides />} />
          <Route path="/measurements/standing-reach" element={<StandingReachGuide />} />
          <Route path="/measurements/vertical-jump" element={<VerticalJumpGuide />} />
          <Route path="/measurements/hoop-heights" element={<HoopHeightsGuide />} />
          <Route path="/measurements/other-measurements" element={<OtherMeasurementsGuide />} />
          
          {/* Silo 2: Vertical Jump Training Routes */}
          <Route path="/vertical-jump-training" element={<VerticalJumpTraining />} />
          <Route path="/vertical-jump-training/plyometrics" element={<PlyometricExercises />} />
          <Route path="/vertical-jump-training/strength-training" element={<StrengthTraining />} />
          <Route path="/vertical-jump-training/nutrition" element={<NutritionForJumpers />} />
          <Route path="/vertical-jump-training/flexibility-injury-prevention" element={<FlexibilityInjuryPrevention />} />
          <Route path="/vertical-jump-training/programs" element={<TrainingPrograms />} />
          
          {/* Silo 3: Dunking Skills Routes */}
          <Route path="/dunking-skills/first-dunk-guide" element={<FirstDunkGuide />} />
          <Route path="/dunking-skills/how-to-palm-basketball" element={<HowToPalmBasketball />} />
          <Route path="/dunking-skills/types-of-dunks" element={<TypesOfDunks />} />
          <Route path="/dunking-skills/average-vertical-jumps" element={<AverageVerticalJumps />} />
          <Route path="/dunking-skills/famous-dunkers" element={<FamousDunkers />} />
          
          {/* Standard Website Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Sitemap Page */}
          <Route path="/sitemap.xml" element={<SitemapPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
