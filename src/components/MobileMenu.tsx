
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const location = useLocation();

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenus(prev => 
      prev.includes(submenu) 
        ? prev.filter(item => item !== submenu)
        : [...prev, submenu]
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenus([]);
  };

  const mobileNavigation = [
    {
      title: "Dunk Calculator",
      href: "/",
      description: "Free basketball dunk calculator"
    },
    {
      title: "Measurements",
      submenu: [
        { name: "How to Measure Standing Reach", href: "/measurements/standing-reach" },
        { name: "How to Measure Vertical Jump", href: "/measurements/vertical-jump" },
        { name: "Basketball Hoop Heights", href: "/measurements/hoop-heights" },
        { name: "Other Key Measurements", href: "/measurements/other-measurements" }
      ]
    },
    {
      title: "Vertical Training",
      submenu: [
        { name: "Ultimate Vertical Jump Guide", href: "/vertical-jump-training" },
        { name: "Plyometric Exercises", href: "/vertical-jump-training/plyometrics" },
        { name: "Strength Training", href: "/vertical-jump-training/strength-training" },
        { name: "Nutrition for Jumpers", href: "/vertical-jump-training/nutrition" },
        { name: "Flexibility & Injury Prevention", href: "/vertical-jump-training/flexibility-injury-prevention" },
        { name: "Training Programs", href: "/vertical-jump-training/programs" }
      ]
    },
    {
      title: "Dunking Skills",
      submenu: [
        { name: "First Dunk Guide", href: "/dunking-skills/first-dunk-guide" },
        { name: "How to Palm Basketball", href: "/dunking-skills/how-to-palm-basketball" },
        { name: "Types of Dunks", href: "/dunking-skills/types-of-dunks" },
        { name: "Average Vertical Jumps", href: "/dunking-skills/average-vertical-jumps" },
        { name: "Famous Dunkers", href: "/dunking-skills/famous-dunkers" }
      ]
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Training articles & tips"
    },
    {
      title: "About",
      href: "/about",
      description: "About Dunk Calculator"
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch"
    }
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 transition-colors touch-manipulation"
        aria-label="Toggle mobile menu"
        style={{ minHeight: '44px', minWidth: '44px' }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button
            onClick={closeMenu}
            className="p-3 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 transition-colors touch-manipulation"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20 bg-white">
          <nav className="p-4">
            {mobileNavigation.map((item, index) => (
              <div key={index} className="mb-2">
                {item.href ? (
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-4 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                      location.pathname === item.href
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                    }`}
                    style={{ minHeight: '48px' }}
                  >
                    {item.title}
                    {item.description && (
                      <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                    )}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
                      style={{ minHeight: '48px' }}
                    >
                      {item.title}
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        openSubmenus.includes(item.title) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {openSubmenus.includes(item.title) && item.submenu && (
                      <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-lg p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            onClick={closeMenu}
                            className={`block px-4 py-3 text-sm rounded-md transition-colors touch-manipulation ${
                              location.pathname === subItem.href
                                ? 'text-orange-600 bg-white shadow-sm'
                                : 'text-gray-600 hover:text-orange-600 hover:bg-white'
                            }`}
                            style={{ minHeight: '44px' }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
