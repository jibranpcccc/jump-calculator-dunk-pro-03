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

// Vertical Jump Training Pages
import VerticalJumpTraining from './pages/VerticalJumpTraining';
import PlyometricExercises from './pages/PlyometricExercises';
import StrengthTraining from './pages/StrengthTraining';
import NutritionForJumpers from './pages/NutritionForJumpers';
import FlexibilityInjuryPrevention from './pages/FlexibilityInjuryPrevention';
import TrainingPrograms from './pages/TrainingPrograms';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/measurements" element={<MeasurementGuides />} />
          <Route path="/measurements/standing-reach" element={<StandingReachGuide />} />
          <Route path="/measurements/vertical-jump" element={<VerticalJumpGuide />} />
          <Route path="/measurements/hoop-heights" element={<HoopHeightsGuide />} />
          <Route path="/measurements/other-measurements" element={<OtherMeasurementsGuide />} />
          
          {/* Vertical Jump Training Routes */}
          <Route path="/vertical-jump-training" element={<VerticalJumpTraining />} />
          <Route path="/vertical-jump-training/plyometrics" element={<PlyometricExercises />} />
          <Route path="/vertical-jump-training/strength-training" element={<StrengthTraining />} />
          <Route path="/vertical-jump-training/nutrition" element={<NutritionForJumpers />} />
          <Route path="/vertical-jump-training/flexibility-injury-prevention" element={<FlexibilityInjuryPrevention />} />
          <Route path="/vertical-jump-training/programs" element={<TrainingPrograms />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
