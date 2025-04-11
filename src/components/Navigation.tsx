import React from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setActiveModal: (modal: string | null) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen,
  setActiveModal 
}) => {
  const navItems = ['About', 'Media', 'Shows', 'Contact'];

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    setActiveModal(item.toLowerCase());
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center py-8 gap-12">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-[#F5F5F5] hover:text-[#8A4FFF] transition-colors tracking-wider"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 bg-[#2D2D2D] z-40 lg:hidden transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-12">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-2xl text-[#F5F5F5] hover:text-[#8A4FFF] transition-colors tracking-wider"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};