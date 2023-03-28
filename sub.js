// get the form data from the URL
const params = new URLSearchParams(window.location.search);

// display the form data on the page
document.getElementById('time').textContent = params.get('time');
document.getElementById('date').textContent = params.get('date');
document.getElementById('location').textContent = params.get('location');
document.getElementById('description').textContent = params.get('description');