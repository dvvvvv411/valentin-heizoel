import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import HandelsblattBanner from './HandelsblattBanner';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 lg:hidden">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bioheat-logo.png" 
              alt="BIO HEAT Nord" 
              className="h-12"
            />
          </Link>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="p-2 border border-gray-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Handelsblatt Banner */}
        <div className="pb-4">
          <HandelsblattBanner className="w-full" />
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="space-y-1">
            <Link 
              to="/" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/produkte" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Produkte
            </Link>
            <Link 
              to="/services" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/ueber-uns" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Über uns
            </Link>
            
            {/* Contact Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href="mailto:info@bioheatnord.de"
                className="flex items-center py-3 px-4 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Mail size={20} className="mr-3" />
                <span className="font-medium">info@bioheatnord.de</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
