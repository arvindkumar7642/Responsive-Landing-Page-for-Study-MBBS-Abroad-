function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const country = document.getElementById('country').value;

  if (!name || !email || !phone || !country) {
    alert('Please fill out all fields.');
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  alert('Form submitted successfully!');
  // You can add AJAX or PHP backend submission here.
}