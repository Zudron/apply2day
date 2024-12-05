// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const url = '/api/login';
    fetch(url, {
        method: 'POST',
        body: formData,
    })
   .then(response => response.json())
   .then(data => {
        if (data.success) {
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Display error message
            alert('Invalid username or password');
        }
    })
   .catch(error => console.error('Error:', error));
}

// Add event listener to login form
document.querySelector('form').addEventListener('submit', handleSubmit);