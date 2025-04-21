import React from 'react';
import { 
  Utensils, 
  ShoppingBag, 
  Smartphone, 
  MessageSquare, 
  Truck, 
  BarChart, 
  Receipt, 
  Layers,
  QrCode,
  TabletSmartphone,
  LibraryIcon,
  Laptop
} from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: "Software",
      products: [
        {
          icon: <Utensils className="h-6 w-6" />,
          name: "Restaurant POS",
          description: "StockDine point-of-sale system optimized for quick service and table service restaurants and bars."
        },
        {
          icon: <ShoppingBag className="h-6 w-6" />,
          name: "Retail POS",
          description: "StockCheck point-of-sale system for retail stores including clothing, footwear, and groceries."
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          name: "Mobile Solutions",
          description: "Tablet ordering, table reservation, and digital menu apps for modern customer service."
        },
        {
          icon: <MessageSquare className="h-6 w-6" />,
          name: "Customer Feedback",
          description: "FlexSurvey digital customer evaluation system for actionable insights."
        },
        {
          icon: <Truck className="h-6 w-6" />,
          name: "Delivery & Catering",
          description: "Complete call center, dispatching, and catering management solutions."
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          name: "Back Office & CRM",
          description: "Inventory, purchasing, production, CRM, and comprehensive reporting tools."
        }
      ]
    },
    {
      title: "Hardware",
      products: [
        {
          icon: <Laptop className="h-6 w-6" />,
          name: "POS Terminals",
          description: "High-performance, durable point-of-sale terminals designed for business environments."
        },
        {
          icon: <TabletSmartphone className="h-6 w-6" />,
          name: "Mobile Devices",
          description: "Tablets and handheld devices for flexible, mobile point-of-sale operations."
        },
        {
          icon: <LibraryIcon className="h-6 w-6" />,
          name: "Peripherals",
          description: "Printers, scanners, cash drawers, and other essential POS hardware accessories."
        },
        {
          icon: <QrCode className="h-6 w-6" />,
          name: "Self-Service Kiosks",
          description: "Interactive self-ordering terminals for quick service restaurants and cafes."
        }
      ]
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Products & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive point-of-sale solutions tailored for different business types and needs.
          </p>
        </div>
        
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-semibold mb-8 inline-block border-b-2 border-blue-500 pb-2">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <div 
                  key={productIndex}
                  className="card p-6 group h-full"
                >
                  <div className="mb-4 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {React.cloneElement(product.icon, { className: "h-6 w-6 text-blue-600" })}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                  <p className="text-gray-600">{product.description}</p>
                  <a href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 text-center">
          <a href="#solutions" className="btn btn-primary px-8 py-3">
            View All Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
