title2.style.opacity = 0;

document.addEventListener('DOMContentLoaded', function () {
    const textToType = "Hey there, I'm Joe. Let's build.";
    const typingContainer = document.getElementById('typing-container');
    const title2 = document.getElementById('title2');

    function typeText(text, index) {
        if (index < text.length) {
            typingContainer.textContent += text.charAt(index);
            index++;
            setTimeout(function () {
                typeText(text, index);
            }, 100);
        } else {
            typingContainer.style.transition = "opacity 6s";
            typingContainer.style.opacity = 0;

            setTimeout(function () {
                title2.style.transition = "opacity 3s";
                title2.style.opacity = 1;
            }, 5000);

            
            setTimeout(function () {
                const contactButton = document.getElementById('contact-button');
                const contactForm = document.getElementById('contact-form');

                contactForm.style.opacity = 1;
                contactButton.style.opacity = 1;
            }, 5000); 
        }
    }
    typeText(textToType, 0);

    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');

    contactButton.addEventListener('click', function () {
        if (contactForm.style.display === 'none' || contactForm.style.display === '') {
            contactForm.style.display = 'block';
            typingContainer.style.display = 'none';
            title2.style.display = 'none';
        } else {
            contactForm.style.display = 'none';
            typingContainer.style.display = 'block';
            title2.style.display = 'block';
        }
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle the form submission (send email, etc.) here.
        alert('Form submitted successfully!');
    });
});
