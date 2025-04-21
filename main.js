// Header scroll effect
const header = document.getElementById('header');
const scrollThreshold = 10;

function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

// Mobile menu
const menuButton = document.querySelector('.mobile-menu-btn');
const navContent = document.querySelector('.nav-content');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuButton.setAttribute('aria-expanded', isMenuOpen);
  menuButton.innerHTML = isMenuOpen ? 
    '<i class="lucide-x"></i>' : 
    '<i class="lucide-menu"></i>';
  
  if (isMenuOpen) {
    navContent.style.display = 'flex';
    navContent.style.flexDirection = 'column';
    navContent.style.gap = '1.5rem';
    navContent.style.padding = '1rem 0';
  } else {
    navContent.style.display = '';
  }
});

// Testimonials slider
const testimonials = [
  {
    content: "Stockey POS transformed our restaurant operations. The interface is intuitive, and we've seen a 30% reduction in order processing time. The customer support team is always available when we need them.",
    author: "Sarah Johnson",
    role: "Restaurant Owner",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    content: "As a retail store owner, I needed a system that could handle inventory management and sales tracking efficiently. Stockey POS delivers exactly that with a clean interface that my staff learned to use in minutes.",
    author: "David Chen",
    role: "Retail Store Manager",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    content: "The mobile ordering solution from Stockey POS has been a game-changer for our café. Our customers love the convenience, and we've seen a significant increase in average order value since implementation.",
    author: "Anna Martinez",
    role: "Café Owner",
    rating: 4,
    image: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

let currentTestimonial = 0;
const track = document.querySelector('.testimonials-track');
const dotsContainer = document.querySelector('.slider-dots');

// Create dots
testimonials.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToTestimonial(index));
  dotsContainer.appendChild(dot);
});

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  track.innerHTML = `
    <div class="testimonial-card active">
      <div class="testimonial-image">
        <img src="${testimonial.image}" alt="${testimonial.author}" loading="lazy">
      </div>
      <div class="testimonial-content">
        <div class="rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5-testimonial.rating)}</div>
        <blockquote>${testimonial.content}</blockquote>
        <div class="testimonial-author">
          <div class="author-name">${testimonial.author}</div>
          <div class="author-role">${testimonial.role}</div>
        </div>
      </div>
    </div>
  `;
  
  // Update dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateTestimonial();
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

function previousTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

document.querySelector('.slider-btn.next').addEventListener('click', nextTestimonial);
document.querySelector('.slider-btn.prev').addEventListener('click', previousTestimonial);

// Auto-advance testimonials
setInterval(nextTestimonial, 5000);

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  alert('Thanks for subscribing to our newsletter!');
  e.target.reset();
});

// Scroll to top button
const scrollTopButton = document.getElementById('scroll-top');

function toggleScroll
