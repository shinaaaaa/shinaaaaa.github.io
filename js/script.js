// JavaScript for Shina Todo Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    
    if (burger && menu) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-item[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (menu.classList.contains('is-active')) {
                    burger.classList.remove('is-active');
                    menu.classList.remove('is-active');
                }
                
                // Update active link
                updateActiveLink(targetId);
            }
        });
    });
    
    // Update active navigation link and header text based on scroll position
    function updateActiveLink(activeId = null) {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.navbar-item[href^="#"]');
        const currentSectionElement = document.getElementById('current-section');
        
        if (activeId) {
            // Manually set active link
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === activeId) {
                    item.classList.add('active');
                }
            });
            
            // Update header text
            if (currentSectionElement) {
                if (activeId === '#profile') {
                    currentSectionElement.textContent = 'Profile';
                } else if (activeId === '#projects') {
                    currentSectionElement.textContent = 'Projects';
                }
            }
        } else {
            // Auto-detect based on scroll position
            let currentSection = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = '#' + section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === currentSection) {
                    item.classList.add('active');
                }
            });
            
            // Update header text based on current section
            if (currentSectionElement) {
                if (currentSection === '#profile') {
                    currentSectionElement.textContent = 'Profile';
                } else if (currentSection === '#projects') {
                    currentSectionElement.textContent = 'Projects';
                }
            }
        }
    }
    
    // Update active link on scroll
    let ticking = false;
    
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll);
    
    // Set initial active link
    updateActiveLink();
    
    // Add scroll reveal animation for project cards
    function revealOnScroll() {
        const cards = document.querySelectorAll('.project-card');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (cardTop < windowHeight - revealPoint) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize cards as hidden
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Reveal cards on scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // Add parallax effect to profile section
    function parallaxEffect() {
        const profileSection = document.querySelector('.profile-section');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (profileSection) {
            profileSection.style.transform = `translateY(${rate}px)`;
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // Add typing effect to bio text
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect when bio comes into view
    const bio = document.querySelector('.bio p');
    if (bio) {
        const originalText = bio.textContent;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(bio, originalText, 30);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(bio);
    }
});

