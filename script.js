document.addEventListener('DOMContentLoaded', function() {
    const text = "Fill out the basic details to reach out to you.";
    let index = 0;
    const typingSpeed = 100; // Increased speed in milliseconds
    const typingEffectDiv = document.getElementById('typing-effect');

    function type() {
        if (index < text.length) {
            typingEffectDiv.innerHTML += text[index];
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate required fields
    var isValid = true;
    var requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(function(field) {
        if (!field.value) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = 'black';
        }
    });

    if (isValid) {
        // Show success message
        document.getElementById('success-message').style.display = 'block';

        // Optionally, you can reset the form
        // document.getElementById('contact-form').reset();
    }
});
