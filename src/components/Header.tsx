
import { Calculator, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for better UX
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Calculator", href: "/", active: location.pathname === "/" },
    { name: "All Calculators", href: "/calculators", active: location.pathname === "/calculators" },
    { name: "Vertical Training", href: "/vertical-jump-training", active: location.pathname === "/vertical-jump-training" },
    { name: "Dunk Tips", href: "/basketball-dunk-tips", active: location.pathname === "/basketball-dunk-tips" },
    { name: "Blog", href: "/blog", active: location.pathname.startsWith("/blog") },
    { name: "FAQ", href: "/faq", active: location.pathname === "/faq" },
    { name: "About", href: "/about", active: location.pathname === "/about" },
    { name: "Contact", href: "/contact", active: location.pathname === "/contact" },
  ];

  return (
    <header className={`bg-white shadow-sm border-b sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          {/* Enhanced Logo with better branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Calculator className="h-8 w-8 text-orange-600 transition-transform group-hover:scale-110" aria-hidden="true" />
              <div className="absolute -inset-1 bg-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Dunk Calculator</h1>
              <span className="text-xs text-orange-600 font-medium">Free Basketball Tools</span>
            </div>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  item.active 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {item.active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/calculators"
              className="ml-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              All Tools
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
