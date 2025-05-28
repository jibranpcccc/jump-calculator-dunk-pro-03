
import { useState } from "react";
import { Menu, X, Calculator, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBlogOpen(false);
  };

  const mainNavItems = [
    { name: "Calculator", href: "/", active: location.pathname === "/" },
    { name: "Vertical Training", href: "/vertical-jump-training", active: location.pathname === "/vertical-jump-training" },
    { name: "Dunk Tips", href: "/basketball-dunk-tips", active: location.pathname === "/basketball-dunk-tips" },
    { name: "FAQ", href: "/faq", active: location.pathname === "/faq" },
    { name: "About", href: "/about", active: location.pathname === "/about" },
    { name: "Contact", href: "/contact", active: location.pathname === "/contact" },
  ];

  const blogNavItems = [
    { name: "All Blog Posts", href: "/blog" },
    { name: "Vertical Jump Exercises", href: "/blog/increase-vertical-jump-exercises" },
    { name: "How to Dunk for Beginners", href: "/blog/how-to-dunk-beginners" },
    { name: "Vertical Jump Workout", href: "/blog/vertical-jump-workout" },
    { name: "Basketball Jump Technique", href: "/blog/basketball-jump-technique" },
    { name: "Dunk if You're Short", href: "/blog/dunk-if-you-are-short" },
    { name: "Best Vertical Jump Exercises", href: "/blog/best-vertical-jump-exercises" },
    { name: "Common Dunking Mistakes", href: "/blog/common-dunking-mistakes" },
    { name: "Best Shoes for Vertical Leap", href: "/blog/best-shoes-for-vertical-leap" },
    { name: "How to Measure Vertical Jump", href: "/blog/how-to-measure-vertical-jump" },
    { name: "Nutrition for Vertical Jump", href: "/blog/nutrition-vertical-jump" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          className="relative z-50"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-orange-50">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-lg">Menu</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    item.active 
                      ? "bg-orange-100 text-orange-700 border-l-4 border-orange-600" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Blog Submenu */}
              <Collapsible open={isBlogOpen} onOpenChange={setIsBlogOpen}>
                <CollapsibleTrigger asChild>
                  <button className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/blog')
                      ? "bg-orange-100 text-orange-700 border-l-4 border-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                    <span>Blog</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isBlogOpen ? 'rotate-180' : ''}`} />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 ml-4 space-y-1">
                  {blogNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === item.href
                          ? "bg-orange-50 text-orange-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Free Basketball Tools</p>
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-orange-600 text-sm font-medium hover:underline"
              >
                Try Dunk Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
