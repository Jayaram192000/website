import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Stockey POS Announces Partnership with Leading Payment Provider",
      date: "2025/04/15",
      excerpt: "We're excited to announce our strategic partnership with a leading global payment provider, expanding our payment processing capabilities and offering more options to our customers.",
      imageUrl: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      title: "New Self-Service Kiosk Solution Launched for Quick Service Restaurants",
      date: "2025/03/22",
      excerpt: "Introducing our latest innovation for quick service restaurants - a sleek, intuitive self-service kiosk that reduces wait times and increases average order values.",
      imageUrl: "https://images.pexels.com/photos/3987027/pexels-photo-3987027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      title: "Stockey POS Expands Operations to Five New Countries",
      date: "2025/02/10",
      excerpt: "As part of our global expansion strategy, we're thrilled to announce that Stockey POS solutions are now available in five additional countries across Europe and Asia.",
      imageUrl: "https://images.pexels.com/photos/2928221/pexels-photo-2928221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  return (
    <section id="blog" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about Stockey POS innovations, partnerships, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item) => (
            <article key={item.id} className="card group h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={item.date.replace(/\//g, '-')}>{item.date}</time>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <a 
                  href={`#news-${item.id}`}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#all-news" className="btn btn-outline">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
