
import { Calculator, Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Add scroll effect for better UX
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const navigationSections = {
    measurements: {
      title: "Measurements",
      description: "Learn how to measure properly for accurate results",
      links: [
        { 
          name: "Standing Reach Guide", 
          href: "/measurements/standing-reach", 
          description: "Measure your standing reach accurately"
        },
        { 
          name: "Vertical Jump Test", 
          href: "/measurements/vertical-jump", 
          description: "Test your vertical jump properly"
        },
        { 
          name: "Basketball Hoop Heights", 
          href: "/measurements/hoop-heights", 
          description: "Official basketball rim heights"
        },
        { 
          name: "Other Key Measurements", 
          href: "/measurements/other-measurements", 
          description: "Wingspan, hand size & more"
        }
      ]
    },
    training: {
      title: "Vertical Jump Training",
      description: "Science-backed training programs to increase your vertical",
      links: [
        { 
          name: "Ultimate Training Guide", 
          href: "/vertical-jump-training", 
          description: "Complete guide to jump higher",
          featured: true
        },
        { 
          name: "Plyometric Exercises", 
          href: "/vertical-jump-training/plyometrics", 
          description: "Explosive jumping exercises"
        },
        { 
          name: "Strength Training", 
          href: "/vertical-jump-training/strength-training", 
          description: "Build powerful jumping muscles"
        },
        { 
          name: "Nutrition for Jumpers", 
          href: "/vertical-jump-training/nutrition", 
          description: "Fuel your vertical gains"
        },
        { 
          name: "Flexibility & Injury Prevention", 
          href: "/vertical-jump-training/flexibility-injury-prevention", 
          description: "Stay healthy while training"
        },
        { 
          name: "Training Programs", 
          href: "/vertical-jump-training/programs", 
          description: "Structured programs for all levels"
        }
      ]
    },
    dunking: {
      title: "Dunking Skills",
      description: "Master dunking techniques and learn from the pros",
      links: [
        { 
          name: "First Dunk Guide", 
          href: "/dunking-skills/first-dunk-guide", 
          description: "Step-by-step guide to your first dunk",
          featured: true
        },
        { 
          name: "How to Palm a Basketball", 
          href: "/dunking-skills/how-to-palm-basketball", 
          description: "Improve your grip and ball control"
        },
        { 
          name: "Types of Dunks", 
          href: "/dunking-skills/types-of-dunks", 
          description: "From basic slams to windmills"
        },
        { 
          name: "Average Vertical Jumps", 
          href: "/dunking-skills/average-vertical-jumps", 
          description: "Compare your jump to others"
        },
        { 
          name: "Famous Dunkers", 
          href: "/dunking-skills/famous-dunkers", 
          description: "Learn from legendary dunkers"
        }
      ]
    }
  };

  return (
    <header className={`bg-white shadow-sm border-b sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main Navigation">
          {/* Enhanced Logo with better branding */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeDropdowns}>
            <div className="relative">
              <Calculator className="h-8 w-8 text-orange-600 transition-transform group-hover:scale-110" aria-hidden="true" />
              <div className="absolute -inset-1 bg-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Dunk Calculator</h1>
              <span className="text-xs text-orange-600 font-medium">Free Basketball Tools</span>
            </div>
          </Link>
          
          {/* Enhanced Desktop Navigation with Mega Menus */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {/* Calculator Link */}
            <Link
              to="/"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === "/" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
              }`}
              onClick={closeDropdowns}
            >
              Calculator
            </Link>

            {/* Measurements Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/measurements") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
                onClick={() => handleDropdownToggle('measurements')}
                onMouseEnter={() => setActiveDropdown('measurements')}
              >
                Measurements
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'measurements' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'measurements' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{navigationSections.measurements.title}</h3>
                    <p className="text-sm text-gray-600">{navigationSections.measurements.description}</p>
                  </div>
                  <div className="space-y-3">
                    {navigationSections.measurements.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 text-sm">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Training Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/vertical-jump-training") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
                onClick={() => handleDropdownToggle('training')}
                onMouseEnter={() => setActiveDropdown('training')}
              >
                Training
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'training' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'training' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{navigationSections.training.title}</h3>
                    <p className="text-sm text-gray-600">{navigationSections.training.description}</p>
                  </div>
                  <div className="space-y-3">
                    {navigationSections.training.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block p-3 rounded-lg transition-colors group ${
                          link.featured ? 'bg-orange-50 border border-orange-200' : 'hover:bg-gray-50'
                        }`}
                        onClick={closeDropdowns}
                      >
                        <div className={`font-medium text-sm ${
                          link.featured ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                        }`}>
                          {link.name}
                          {link.featured && <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Popular</span>}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dunking Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/dunking-skills") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
                onClick={() => handleDropdownToggle('dunking')}
                onMouseEnter={() => setActiveDropdown('dunking')}
              >
                Dunking Skills
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'dunking' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'dunking' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{navigationSections.dunking.title}</h3>
                    <p className="text-sm text-gray-600">{navigationSections.dunking.description}</p>
                  </div>
                  <div className="space-y-3">
                    {navigationSections.dunking.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block p-3 rounded-lg transition-colors group ${
                          link.featured ? 'bg-orange-50 border border-orange-200' : 'hover:bg-gray-50'
                        }`}
                        onClick={closeDropdowns}
                      >
                        <div className={`font-medium text-sm ${
                          link.featured ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                        }`}>
                          {link.name}
                          {link.featured && <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Guide</span>}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link
              to="/blog"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname.startsWith("/blog") 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
              }`}
              onClick={closeDropdowns}
            >
              Blog
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === "/about" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
              }`}
              onClick={closeDropdowns}
            >
              About
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={closeDropdowns}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
      
      {/* Overlay for closing dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={closeDropdowns}
        />
      )}
    </header>
  );
};

export default Header;
