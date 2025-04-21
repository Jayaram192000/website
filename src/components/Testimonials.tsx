import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Stockey POS transformed our restaurant operations. The interface is intuitive, and we've seen a 30% reduction in order processing time. The customer support team is always available when we need them.",
    author: "Sarah Johnson",
    role: "Restaurant Owner",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    content: "As a retail store owner, I needed a system that could handle inventory management and sales tracking efficiently. Stockey POS delivers exactly that with a clean interface that my staff learned to use in minutes.",
    author: "David Chen",
    role: "Retail Store Manager",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    content: "The mobile ordering solution from Stockey POS has been a game-changer for our café. Our customers love the convenience, and we've seen a significant increase in average order value since implementation.",
    author: "Anna Martinez",
    role: "Café Owner",
    rating: 4,
    image: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const stats = [
    { value: '24/7', label: 'Support' },
    { value: '96%', label: 'Customer Retention' },
    { value: '3000+', label: 'Features' },
    { value: '20+', label: 'Countries' },
  ];

  return (
    <section id="clients" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our customers have to say about their experience with Stockey POS.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Controls */}
          <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
            <button 
              onClick={goToPrevious}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <button 
              onClick={goToNext}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          {/* Testimonial Content */}
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 h-64 md:h-auto">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{testimonials[activeIndex].content}"
              </blockquote>
              <div>
                <div className="font-semibold text-lg">{testimonials[activeIndex].author}</div>
                <div className="text-gray-600">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
