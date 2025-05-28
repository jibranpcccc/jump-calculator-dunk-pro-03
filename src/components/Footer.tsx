
import { Calculator, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-orange-400" aria-hidden="true" />
              <span className="font-bold text-lg">Dunk Calculator</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate free tool for basketball players to test their dunking ability and improve their vertical jump.
            </p>
            <p className="text-sm text-gray-500">
              Helping athletes reach new heights since 2024.
            </p>
          </div>

          {/* Calculator Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Calculator Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Dunk Calculator</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ & Help</Link></li>
              <li><a href="/#calculator" className="hover:text-white transition-colors">Try Calculator</a></li>
            </ul>
          </div>

          {/* Training Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Training Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/vertical-jump-training" className="hover:text-white transition-colors">Vertical Jump Training</Link></li>
              <li><Link to="/basketball-dunk-tips" className="hover:text-white transition-colors">Dunk Tips & Techniques</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Training Blog</Link></li>
              <li><Link to="/blog/increase-vertical-jump-exercises" className="hover:text-white transition-colors">Jump Exercises</Link></li>
              <li><Link to="/blog/how-to-dunk-beginners" className="hover:text-white transition-colors">Beginner's Guide</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} Dunk Calculator. All rights reserved.</p>
              <p className="text-sm mt-1">Free basketball dunk calculator and training resources</p>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white text-sm transition-colors">Privacy</Link>
              <Link to="/terms-of-use" className="hover:text-white text-sm transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-white text-sm transition-colors">Support</Link>
            </div>
          </div>

          {/* SEO Footer Links */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                <strong>Popular searches:</strong> 
                <Link to="/" className="hover:text-gray-300 ml-1">can you dunk calculator</Link>, 
                <Link to="/vertical-jump-training" className="hover:text-gray-300 ml-1">vertical jump training</Link>, 
                <Link to="/basketball-dunk-tips" className="hover:text-gray-300 ml-1">how to dunk</Link>, 
                <Link to="/faq" className="hover:text-gray-300 ml-1">dunk height calculator</Link>
              </p>
              <p>
                <strong>Related tools:</strong> Basketball vertical jump test, dunk height calculator, slam dunk calculator, jump height measurement
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
