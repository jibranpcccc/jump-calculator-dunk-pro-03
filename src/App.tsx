
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
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
