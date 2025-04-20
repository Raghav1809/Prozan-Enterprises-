 // Navbar scroll effect
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

// Reveal on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Trigger reveal on page load
reveal();

    // Dropdown Enhancement
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.add('fade-in');
            }
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = navbar.offsetHeight;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});




// Hero section 
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic text animation
    const words = ['strategic growth', 'innovation', 'collaboration'];
    const dynamicText = document.querySelector('.dynamic-text');
    let wordIndex = 0;

    setInterval(() => {
        dynamicText.style.opacity = 0;
        setTimeout(() => {
            dynamicText.textContent = words[wordIndex];
            dynamicText.style.opacity = 1;
            wordIndex = (wordIndex + 1) % words.length;
        }, 200);
        }, 2000);
    });

 