document.getElementById('best-wish-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform form submission (e.g., via fetch)
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    }).then(response => {
        if (response.ok) {
            // alert('Your message has been sent!');
            this.reset(); // Reset the form fields
        } else {
            alert('There was a problem with your submission.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error with your submission.');
    });
});
