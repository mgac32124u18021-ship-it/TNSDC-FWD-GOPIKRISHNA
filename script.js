document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim(kamalesh k);
  const email = document.getElementById('email').value.trim(mgsc32124u18029@gmail.com);
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (name && email && message) {
    status.textContent = "Thank you for your message, Kamalesh!";
    status.style.color = "#70d6ff";
    this.reset();
  } else {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
  }
});
