import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { ChevronRight } from 'lucide-react'; // Import the icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Clients', href: '#clients' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Stockey POS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1800123456" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Phone className="h-4 w-4" />
              <span>24/7 Support</span>
            </a>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
            <a href="https://3adf-122-165-121-116.ngrok-free.app/" className="btn btn-primary" target='_blank' rel="noopener noreferrer">  
              <span>Login</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+1800123456" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>24/7 Support</span>
                </a>
                <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
