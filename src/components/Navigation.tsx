import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  console.log("Navigation menu state:", isOpen);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24"> {/* Increased height from h-16 to h-24 */}
          <div className="flex-1 flex justify-center md:justify-start"> {/* Changed positioning */}
            <img 
              src="https://frontrangehouseoffers.com/wp-content/uploads/2024/01/Front-Range-House-Offers-Logo.webp" 
              alt="Front Range House Offers" 
              className="h-16 md:h-20" /* Increased height from h-10 */
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Your Offer
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg animate-fade-up"> {/* Updated top position */}
            <div className="px-4 py-2 space-y-2">
              <Button 
                className="w-full" 
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Get Your Offer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;