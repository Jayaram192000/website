import React, { useState } from 'react';
import { ShoppingBag, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thanks for subscribing to our newsletter!');
  };
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Partner With Us', href: '#partner' },
        { name: 'Clients', href: '#clients' },
        { name: 'Blog', href: '#blog' },
        { name: 'News', href: '#news' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Restaurant POS', href: '#restaurant-pos' },
        { name: 'Retail POS', href: '#retail-pos' },
        { name: 'Mobile Solutions', href: '#mobile-solutions' },
        { name: 'Delivery & Catering', href: '#delivery' },
        { name: 'Back Office & CRM', href: '#back-office' },
        { name: 'Hardware', href: '#hardware' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'Help Center', href: '#help' },
        { name: 'Documentation', href: '#docs' },
        { name: 'System Status', href: '#status' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Stockey POS</span>
            </div>
            <p className="mb-6 text-gray-300 max-w-md">
              Empowering businesses with modern, user-friendly point-of-sale solutions that streamline operations and enhance customer experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  1234 Innovation Drive, Suite 500<br />
                  Tech City, CA 94103<br />
                  United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+18001234567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@stockeypos.com" className="text-gray-300 hover:text-white transition-colors">
                  info@stockeypos.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <p>&copy; {new Date().getFullYear()} Stockey POS Solutions. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
