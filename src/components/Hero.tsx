import React from 'react';
import { ChevronRight, BarChart2, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Transform Your Business with Modern POS
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Experience seamless operations and enhanced customer service with Stockey POS - the next-generation point-of-sale system designed for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#demo" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request Demo
              </a>
              <a 
                href="#solutions" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Explore Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-primary-600" />
                </div>
                <span className="font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-green-100 p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <span className="font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div 
            data-aos="fade-left" 
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/5699376/pexels-photo-5699376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Stockey POS in action" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
