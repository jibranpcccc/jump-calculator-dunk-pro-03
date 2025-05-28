
import { Calculator, ExternalLink, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-orange-400" aria-hidden="true" />
              <span className="font-bold text-lg">Dunk Calculator</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              The ultimate free tool for basketball players to test their dunking ability and improve their vertical jump. 
              Helping athletes reach new heights with science-backed training programs and expert guidance.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Helping athletes reach new heights since 2024.
            </p>
            
            {/* Mission Statement */}
            <div className="p-3 bg-gray-800 rounded-lg">
              <p className="text-orange-400 text-sm font-medium">
                "Empowering every basketball player to unlock their dunking potential"
              </p>
            </div>
          </div>

          {/* Calculator & Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Calculators & Tools</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">🏀 Dunk Calculator</Link></li>
              <li><Link to="/calculators" className="hover:text-white transition-colors">All Calculators</Link></li>
              <li><Link to="/calculators/hangtime" className="hover:text-white transition-colors">Hangtime Calculator</Link></li>
              <li><Link to="/calculators/standing-reach" className="hover:text-white transition-colors">Standing Reach Calculator</Link></li>
              <li><Link to="/calculators/vertical-jump-improvement" className="hover:text-white transition-colors">Jump Improvement Tracker</Link></li>
              <li><Link to="/tools/progress-tracker" className="hover:text-white transition-colors">Progress Tracker</Link></li>
            </ul>
          </div>

          {/* Measurement Guides */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Measurement Guides</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/measurements" className="hover:text-white transition-colors">📏 All Measurement Guides</Link></li>
              <li><Link to="/measurements/standing-reach" className="hover:text-white transition-colors">Standing Reach Guide</Link></li>
              <li><Link to="/measurements/vertical-jump" className="hover:text-white transition-colors">📊 Vertical Jump Test</Link></li>
              <li><Link to="/measurements/hoop-heights" className="hover:text-white transition-colors">🏀 Basketball Hoop Heights</Link></li>
              <li><Link to="/measurements/other-measurements" className="hover:text-white transition-colors">📐 Wingspan & Hand Size</Link></li>
            </ul>
          </div>

          {/* Training Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Training Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/vertical-jump-training" className="hover:text-white transition-colors">💪 Vertical Jump Training</Link></li>
              <li><Link to="/vertical-jump-training/plyometrics" className="hover:text-white transition-colors">⚡ Plyometric Exercises</Link></li>
              <li><Link to="/vertical-jump-training/strength-training" className="hover:text-white transition-colors">🏋️ Strength Training</Link></li>
              <li><Link to="/vertical-jump-training/nutrition" className="hover:text-white transition-colors">🥗 Nutrition for Jumpers</Link></li>
              <li><Link to="/vertical-jump-training/programs" className="hover:text-white transition-colors">📋 Training Programs</Link></li>
              <li><Link to="/vertical-jump-training/flexibility-injury-prevention" className="hover:text-white transition-colors">🔧 Injury Prevention</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row - Dunking Skills & Blog */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8 pt-8 border-t border-gray-800">
          {/* Dunking Skills */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Dunking Skills</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/dunking-skills/first-dunk-guide" className="hover:text-white transition-colors">🏀 First Dunk Guide</Link></li>
              <li><Link to="/dunking-skills/how-to-palm-basketball" className="hover:text-white transition-colors">✋ How to Palm Ball</Link></li>
              <li><Link to="/dunking-skills/types-of-dunks" className="hover:text-white transition-colors">🎪 Types of Dunks</Link></li>
              <li><Link to="/dunking-skills/average-vertical-jumps" className="hover:text-white transition-colors">📈 Vertical Jump Averages</Link></li>
              <li><Link to="/dunking-skills/famous-dunkers" className="hover:text-white transition-colors">⭐ Famous Dunkers</Link></li>
            </ul>
          </div>

          {/* Blog & Articles */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Blog & Articles</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/blog" className="hover:text-white transition-colors">📝 Training Blog</Link></li>
              <li><Link to="/blog/increase-vertical-jump-exercises" className="hover:text-white transition-colors">Best Jump Exercises</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">❓ FAQ</Link></li>
              <li><Link to="/glossary" className="hover:text-white transition-colors">📚 Basketball Glossary</Link></li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Support & Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">👥 About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">📧 Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">❓ FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">📰 Latest Updates</Link></li>
              <li><Link to="/glossary" className="hover:text-white transition-colors">📚 Terminology Guide</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Legal & Social</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">🔒 Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">📋 Terms of Service</Link></li>
            </ul>
            
            {/* Social Media Placeholder */}
            <div className="mt-4">
              <h4 className="font-medium text-white text-sm mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">📸 Instagram</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">🐦 Twitter</a>
              </div>
            </div>
          </div>

          {/* Quick Calculator CTA */}
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Ready to Test Your Dunk?</h4>
            <p className="text-orange-100 text-sm mb-3">
              Use our free calculator to see if you can dunk right now!
            </p>
            <Link 
              to="/"
              className="inline-block w-full bg-white text-orange-600 font-semibold py-2 px-3 rounded hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Try Calculator
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} Dunk Calculator. All rights reserved.</p>
              <p className="text-sm mt-1">Free basketball dunk calculator and training resources</p>
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
              <Link to="/faq" className="hover:text-white transition-colors">Help</Link>
            </div>
          </div>

          {/* SEO Footer Links */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                <strong>Popular searches:</strong> 
                <Link to="/" className="hover:text-gray-300 ml-1">can you dunk calculator</Link>, 
                <Link to="/vertical-jump-training" className="hover:text-gray-300 ml-1">vertical jump training</Link>, 
                <Link to="/dunking-skills/first-dunk-guide" className="hover:text-gray-300 ml-1">how to dunk</Link>, 
                <Link to="/measurements/vertical-jump" className="hover:text-gray-300 ml-1">vertical jump test</Link>,
                <Link to="/dunking-skills/types-of-dunks" className="hover:text-gray-300 ml-1">types of dunks</Link>
              </p>
              <p>
                <strong>Related tools:</strong> Basketball vertical jump test, dunk height calculator, slam dunk calculator, jump height measurement, plyometric training guide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
