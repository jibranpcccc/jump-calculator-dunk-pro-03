
import { Calculator, Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      description: "Master accurate measurement techniques for precise dunk calculations",
      links: [
        { 
          name: "How to Measure Standing Reach", 
          href: "/measurements/standing-reach", 
          description: "The foundation of accurate dunk calculations"
        },
        { 
          name: "How to Measure Vertical Jump", 
          href: "/measurements/vertical-jump", 
          description: "4 accurate techniques including wall test"
        },
        { 
          name: "Basketball Hoop Heights", 
          href: "/measurements/hoop-heights", 
          description: "Official standards and training tips"
        },
        { 
          name: "Other Key Measurements", 
          href: "/measurements/other-measurements", 
          description: "Wingspan, hand size & more analysis"
        }
      ]
    },
    training: {
      title: "Vertical Training",
      description: "Science-backed programs to dramatically increase your vertical jump",
      links: [
        { 
          name: "Ultimate Vertical Jump Guide", 
          href: "/vertical-jump-training", 
          description: "Complete training methodology & principles",
          featured: true
        },
        { 
          name: "Plyometric Exercises", 
          href: "/vertical-jump-training/plyometrics", 
          description: "Explosive jumping exercises for power"
        },
        { 
          name: "Strength Training", 
          href: "/vertical-jump-training/strength-training", 
          description: "Build the foundation for explosive jumps"
        },
        { 
          name: "Nutrition for Jumpers", 
          href: "/vertical-jump-training/nutrition", 
          description: "Fuel your gains and optimize recovery"
        },
        { 
          name: "Flexibility & Injury Prevention", 
          href: "/vertical-jump-training/flexibility-injury-prevention", 
          description: "Stay healthy while training hard"
        },
        { 
          name: "Training Programs (All Levels)", 
          href: "/vertical-jump-training/programs", 
          description: "Structured programs for every level"
        }
      ]
    },
    dunking: {
      title: "Dunking Skills",
      description: "Master dunking techniques, skills and learn from the legends",
      links: [
        { 
          name: "Beginner's First Dunk Guide", 
          href: "/dunking-skills/first-dunk-guide", 
          description: "Step-by-step blueprint for your first slam",
          featured: true
        },
        { 
          name: "How to Palm a Basketball", 
          href: "/dunking-skills/how-to-palm-basketball", 
          description: "Improve grip strength and ball control"
        },
        { 
          name: "Types of Basketball Dunks", 
          href: "/dunking-skills/types-of-dunks", 
          description: "From basic slams to windmill dunks"
        },
        { 
          name: "Average Vertical Jump Benchmarks", 
          href: "/dunking-skills/average-vertical-jumps", 
          description: "Compare your jump by age & level"
        },
        { 
          name: "Famous Dunkers & Legends", 
          href: "/dunking-skills/famous-dunkers", 
          description: "Learn from basketball's greatest dunkers"
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
          {/* Logo with Enhanced SEO */}
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
          
          {/* Desktop Navigation with SEO-Optimized Structure */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {/* Dunk Calculator Link */}
            <Link
              to="/"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === "/" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
              }`}
              onClick={closeDropdowns}
              title="Free Basketball Dunk Calculator"
            >
              Dunk Calculator
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
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'measurements'}
                title="Basketball Measurement Guides"
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
                  role="menu"
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
                        role="menuitem"
                        title={link.description}
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

            {/* Vertical Training Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/vertical-jump-training") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
                onClick={() => handleDropdownToggle('training')}
                onMouseEnter={() => setActiveDropdown('training')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'training'}
                title="Vertical Jump Training Programs"
              >
                Vertical Training
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'training' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'training' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50"
                  onMouseLeave={closeDropdowns}
                  role="menu"
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
                        role="menuitem"
                        title={link.description}
                      >
                        <div className={`font-medium text-sm ${
                          link.featured ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                        }`}>
                          {link.name}
                          {link.featured && <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Essential</span>}
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

            {/* Dunking Skills Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/dunking-skills") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
                onClick={() => handleDropdownToggle('dunking')}
                onMouseEnter={() => setActiveDropdown('dunking')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'dunking'}
                title="Dunking Skills and Techniques"
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
                  role="menu"
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
                        role="menuitem"
                        title={link.description}
                      >
                        <div className={`font-medium text-sm ${
                          link.featured ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                        }`}>
                          {link.name}
                          {link.featured && <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Start Here</span>}
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
              title="Basketball Training Blog & Articles"
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
              title="About Dunk Calculator"
            >
              About
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={closeDropdowns}
              title="Contact Dunk Calculator Support"
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
