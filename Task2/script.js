document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validation
    if (name === '' || email === '') {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // If everything is valid
    alert('Form submitted successfully!');
    this.reset();
  });
  