
import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Calculator", href: "/", active: location.pathname === "/" },
    { name: "Vertical Training", href: "/vertical-jump-training", active: location.pathname === "/vertical-jump-training" },
    { name: "Dunk Tips", href: "/basketball-dunk-tips", active: location.pathname === "/basketball-dunk-tips" },
    { name: "Blog", href: "/blog", active: location.pathname.startsWith("/blog") },
    { name: "FAQ", href: "/faq", active: location.pathname === "/faq" },
    { name: "About", href: "/about", active: location.pathname === "/about" },
    { name: "Contact", href: "/contact", active: location.pathname === "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
            <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  item.active ? "text-orange-600" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    item.active ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
