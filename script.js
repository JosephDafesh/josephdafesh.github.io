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
        }
    }
    typeText(textToType, 0);
});


