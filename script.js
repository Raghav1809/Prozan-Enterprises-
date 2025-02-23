 // Navbar scroll effect
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});


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
    const navbar = document.querySelector('.navbar');
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

   
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const dotsNav = document.querySelector(".dots-container");
    const dots = Array.from(dotsNav.children);
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });
    
    let currentSlideIndex = 0;
    
    // Move to specific slide
    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        currentSlideIndex = index;
    }
    
    // Previous Button
    prevButton.addEventListener("click", () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });
    
    // Next Button
    nextButton.addEventListener("click", () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });
    
    // Dots Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => moveToSlide(index));
    });
    
    // Initialize
    moveToSlide(currentSlideIndex);
    
    
    function createParticles() {
        const container = document.getElementById('particles');
        for(let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.setProperty('--moveX', (Math.random() * 200 - 100) + 'px');
            particle.style.setProperty('--moveY', (Math.random() * 200 - 100) + 'px');
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);
        }
    }
    createParticles();
    

   