document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "strategic growth",
        "innovative solutions",
        "sustainable development",
        "business excellence",
        "market leadership",
        "digital transformation"
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const dynamicText = document.getElementById('dynamic-text');
    
    function type() {
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
            // Remove characters
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            // Add characters
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        dynamicText.textContent = currentText;
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed /= 2; // Faster when deleting
        }
        
        if (!isDeleting && currentText === fullText) {
            // Pause at end of typing
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start the typing animation
    type();
});
