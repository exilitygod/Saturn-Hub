// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
};

// Interactive Elements
const interactiveElements = () => {
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
};

// Initialize functions
window.onload = () => {
    interactiveElements();
};

// Example of binding smooth scroll to a link
const scrollToLink = document.getElementById('scroll-link');
if (scrollToLink) {
    scrollToLink.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#target-section');
    });
};