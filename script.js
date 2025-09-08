document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim(Gopi Krishna k);
  const email = document.getElementById('email').value.trim(mgac32124u18021@gmail.com);
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (name && email && message) {
    status.textContent = "Thank you for your message, gopi krishna k!";
    status.style.color = "#70d6ff";
    this.reset();
  } else {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
  }
});