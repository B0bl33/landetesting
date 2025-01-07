document.addEventListener('DOMContentLoaded', function() {
  // Select the menu icon and the nav-links
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  // Add a click event listener to the menu icon
  menuIcon.addEventListener('click', () => {
      // Toggle the 'active' class on the nav-links
      navLinks.classList.toggle('active');
  });

  // Smooth Scrolling for Navbar Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Initialize EmailJS with your Public API Key
  emailjs.init('9sJ-V4V4EN_WAC29F'); // Replace with your actual Public API Key

  // Form submission event
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Send email using EmailJS
      emailjs.sendForm('service_fx1x8qe', 'template_h8ce5yu', this)
          .then(function() {
              alert('Message Sent Successfully!');
              contactForm.reset(); // Reset the form fields
          }, function(error) {
              alert('Failed to send message. Please try again later.');
              console.error('EmailJS Error:', error);
          });
  });
});
