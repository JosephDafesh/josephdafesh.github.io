document.addEventListener('DOMContentLoaded', function () {
    const textToType = "Hey there. I'm Joe. Let's build.";
    const typingContainer = document.getElementById('typing-container');

    function typeText(text, index) {
        if (index < text.length) {
            typingContainer.textContent += text.charAt(index);
            index++;
            setTimeout(function () {
                typeText(text, index);
            }, 100);
        } else {
            typingContainer.style.transition = "opacity 5.5s"; 
            typingContainer.style.opacity = 0;
        }
    }
    typeText(textToType, 0);
});










