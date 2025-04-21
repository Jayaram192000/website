import React from 'react';
import { 
  Zap, 
  Clock, 
  BarChart2, 
  Shield, 
  Globe, 
  Server
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Lightning Fast',
      description: 'Process transactions in milliseconds with our optimized, lightweight system architecture.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: '3000+ Features',
      description: 'Access comprehensive tools for inventory, sales, customer management, and more.'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to resolve any issues.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Secure Transactions',
      description: 'Bank-level encryption and security protocols to protect your business and customers.'
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: 'Global Presence',
      description: 'Deployed in 20+ countries with multi-language and currency support.'
    },
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: '99.9% Uptime',
      description: 'Reliable service with minimal downtime to keep your business running smoothly.'
    },
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses Choose Stockey POS
          </h2>
          <p className="text-lg text-gray-600">
            Our point-of-sale solution combines powerful features with user-friendly design to help your business thrive.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 h-full flex flex-col"
            >
              <div className="mb-4 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Streamline Your Business?</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust Stockey POS for their point-of-sale needs.
          </p>
          <a href="#contact" className="btn px-8 py-3 bg-white text-blue-700 hover:bg-blue-50">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
