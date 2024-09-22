document.getElementById("submitBtn").addEventListener("click", function() {
    // Get the values from the form
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const message = document.querySelector('.text1').value;

    // Check if all fields are filled
    if (name && email && phone && message) {
        // Create a data object to store form values
        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Save the form data to localStorage (temporary storage)
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to the 'submitted.html' page
        window.location.href = "submitted.html";
    } else {
        // Alert the user if any field is empty
        alert("Please fill out all fields before proceeding.");
    }
});
