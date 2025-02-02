// Select hamburger menu and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation on hamburger menu click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// No JavaScript is required in this case, as the CSS handles the automatic sliding.
// This is a fully CSS-based slider. If you want to pause on hover, add JavaScript:

const slider = document.querySelector('.slider-container');

slider.addEventListener('mouseenter', () => {
  document.styleSheets[0].cssRules[1].style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
  document.styleSheets[0].cssRules[1].style.animationPlayState = 'running';
});




var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
  interval: 3000, // Change time in milliseconds (3s)
  pause: "hover"  // Pause on hover
});

 
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Validate input
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
  }

  // Show success message
  alert("Thank you, " + name + "! Your message has been sent.");

  // Clear form fields
  document.getElementById("contactForm").reset();
});


// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector("span");

      if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.innerText = "⬇";
      } else {
          answer.style.display = "block";
          icon.innerText = "⬆";
      }
  });
});

// Function to validate mobile number
function validateMobile() {
  const mobileField = document.getElementById("mobile");
  if (!/^\d{10}$/.test(mobileField.value)) {
      mobileField.style.border = "2px solid red";
  } else {
      mobileField.style.border = "2px solid green";
      generateOTP();
  }
}

// Function to generate OTP
function generateOTP() {
  const otpField = document.getElementById("otp");
  otpField.value = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
}

// Handle Form Submission
document.getElementById("enquiryForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  alert("Your enquiry has been submitted successfully!");
});
