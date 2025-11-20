// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#E53E3E';
                } else {
                    input.style.borderColor = '#CBD5E0';
                }
            });
            if (isValid) {
                // In a real application, you would send the form data to a server
                alert('Thank you for your inquiry. Our team will contact you shortly.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    // Add interactive features to metrics and cards
    const metrics = document.querySelectorAll('.metric, .model-card, .thesis-card, .arch-layer, .jurisdiction, .feature');
    metrics.forEach(metric => {
        metric.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        metric.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate revenue bars on scroll
    const revenueBars = document.querySelectorAll('.bar-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the width from the style attribute and animate it
                const targetWidth = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = targetWidth;
                }, 300); // Delay to allow for initial state
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    });

    revenueBars.forEach(bar => {
        observer.observe(bar);
    });

    // Mobile menu functionality (if needed in future)
    function initMobileMenu() {
        const nav = document.querySelector('.nav-links');
        if (window.innerWidth <= 768) {
            // Add mobile menu toggle if needed
        }
    }
    // Initialize on load
    initMobileMenu();
    // Re-initialize on resize
    window.addEventListener('resize', initMobileMenu);
});