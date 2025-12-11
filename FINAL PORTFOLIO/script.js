// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isExpanded = navLinks.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
  
  // Change hamburger icon
  const icon = hamburger.querySelector('i');
  if (isExpanded) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Enhanced Form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  
  // Get form values
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;
  
  // Validate form
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Show loading state
  btnText.textContent = 'Sending...';
  btnIcon.className = 'fas fa-spinner fa-spin';
  submitBtn.disabled = true;
  
  try {
    // For Formspree - uncomment when you have an actual Formspree ID
    // const formData = new FormData(this);
    // const response = await fetch(this.action, {
    //   method: 'POST',
    //   body: formData,
    //   headers: { 'Accept': 'application/json' }
    // });
    
    // Simulate API call (remove this in production)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success message
    alert(`Thank you, ${name}! I've received your message and will respond to ${email} within 24 hours.`);
    
    // Reset form
    this.reset();
    
  } catch (error) {
    alert('There was an error sending your message. Please try again or email me directly at lem@gmail.com');
  } finally {
    // Reset button state
    btnText.textContent = 'Send Message';
    btnIcon.className = 'fas fa-paper-plane';
    submitBtn.disabled = false;
  }
});

// Typing effect
const typingText = document.querySelector('.typing-text');
const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before typing next
  }
  
  setTimeout(type, typingSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.project-img');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});