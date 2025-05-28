
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import MeasurementGuides from './pages/MeasurementGuides';
import StandingReachGuide from './pages/StandingReachGuide';
import VerticalJumpGuide from './pages/VerticalJumpGuide';
import { ComprehensiveSEO } from './components/SEOComponents';

function App() {
  return (
    <Router>
      <ComprehensiveSEO
        title="Dunk Calculator - Can You Dunk a Basketball? Test Your Potential!"
        description="Free basketball dunk calculator to test if you can dunk! Enter your height, reach, and vertical jump for instant results. Get personalized training tips from experts."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, basketball training, how to dunk"
        canonicalUrl="https://dunkcalculator.com/"
      />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/measurements" element={<MeasurementGuides />} />
        <Route path="/measurements/standing-reach" element={<StandingReachGuide />} />
        <Route path="/measurements/vertical-jump" element={<VerticalJumpGuide />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
