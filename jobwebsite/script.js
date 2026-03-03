// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLine1 = document.getElementById('menu-line-1');
const menuLine2 = document.getElementById('menu-line-2');
const menuLine3 = document.getElementById('menu-line-3');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'translateX(-50%) scale(1)';
    }, 10);
    
    // Animate hamburger to X
    menuLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
    menuLine2.style.opacity = '0';
    menuLine3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
}

function closeMobileMenu() {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateX(-50%) scale(0.95)';
    
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
    
    // Reset hamburger
    menuLine1.style.transform = 'rotate(0) translate(0, 0)';
    menuLine2.style.opacity = '1';
    menuLine3.style.transform = 'rotate(0) translate(0, 0)';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
}

// Close menu on scroll
let menuScrollTimeout;
window.addEventListener('scroll', () => {
    if (!mobileMenu.classList.contains('hidden')) {
        clearTimeout(menuScrollTimeout);
        menuScrollTimeout = setTimeout(() => {
            closeMobileMenu();
        }, 150);
    }
});

// Close menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Services Dropdown Toggle (Desktop)
const servicesDropdownBtn = document.getElementById('services-dropdown-btn');
const servicesDropdown = document.getElementById('services-dropdown');
const dropdownArrow = document.getElementById('dropdown-arrow');

if (servicesDropdownBtn) {
    servicesDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        servicesDropdown.classList.toggle('hidden');
        
        // Rotate arrow
        if (servicesDropdown.classList.contains('hidden')) {
            dropdownArrow.style.transform = 'rotate(0deg)';
        } else {
            dropdownArrow.style.transform = 'rotate(180deg)';
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!servicesDropdownBtn.contains(e.target) && !servicesDropdown.contains(e.target)) {
            servicesDropdown.classList.add('hidden');
            dropdownArrow.style.transform = 'rotate(0deg)';
        }
    });
}

// Mobile Services Dropdown Toggle
const mobileServicesBtn = document.getElementById('mobile-services-btn');
const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
const mobileServicesArrow = document.getElementById('mobile-services-arrow');

if (mobileServicesBtn) {
    mobileServicesBtn.addEventListener('click', () => {
        mobileServicesDropdown.classList.toggle('hidden');
        
        // Rotate arrow
        if (mobileServicesDropdown.classList.contains('hidden')) {
            mobileServicesArrow.style.transform = 'rotate(0deg)';
        } else {
            mobileServicesArrow.style.transform = 'rotate(180deg)';
        }
    });
}

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Video optimization for mobile - Use compressed video if available
const videoElement = document.querySelector('video');
if (videoElement) {
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    
    // You can set different video sources based on device
    if (isMobile) {
        // For mobile, ensure proper playback
        videoElement.setAttribute('playsinline', 'true');
        videoElement.setAttribute('webkit-playsinline', 'true');
    }
}

// Navbar scroll effect - Keep glass effect
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.08)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Slider navigation
const sliderButtons = document.querySelectorAll('#prev-slide, #next-slide');
let currentSlide = 0;

// Slide content data
const slides = [
    { title: 'WEB DEVELOPMENT', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="hidden sm:block">Maxime, nulla, tempore Deserunt excepturi quos vero.' },
    { title: 'MOBILE APPLICATION', desc: 'Build powerful iOS and Android applications with modern frameworks. <br class="hidden sm:block">Native performance with cross-platform efficiency.' },
    { title: 'SEO OPTIMIZATION', desc: 'Boost your online visibility and rank higher on search engines. <br class="hidden sm:block">Data-driven strategies for maximum organic growth.' },
    { title: 'GRAPHIC DESIGN', desc: 'Stunning visuals and creative designs for your brand identity. <br class="hidden sm:block">From logos to complete brand guidelines.' },
    { title: 'UI/UX DESIGN', desc: 'Create intuitive user experiences that delight your customers. <br class="hidden sm:block">Research-driven design for better conversions.' },
    { title: 'DIGITAL MARKETING', desc: 'Comprehensive marketing strategies to grow your business online. <br class="hidden sm:block">Social media, PPC, and content marketing.' }
];

function updateSlide() {
    const title = document.querySelector('#home h2');
    const desc = document.querySelector('#home p');
    const indicators = document.querySelectorAll('.flex.space-x-3 span');
    
    if (title && desc) {
        title.textContent = slides[currentSlide].title;
        desc.innerHTML = slides[currentSlide].desc;
    }
    
    // Update active indicator
    indicators.forEach((ind, index) => {
        if (index === currentSlide) {
            ind.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        } else {
            ind.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        }
    });
}

sliderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const isNext = this.id === 'next-slide';
        
        if (isNext) {
            currentSlide = (currentSlide + 1) % slides.length;
        } else {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        
        updateSlide();
    });
});

// Touch swipe support for mobile
const heroSection = document.querySelector('#home');
let touchStartX = 0;
let touchEndX = 0;

if (heroSection) {
    heroSection.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    heroSection.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            currentSlide = (currentSlide + 1) % slides.length;
        } else {
            // Swipe right - previous slide
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        updateSlide();
    }
}

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Handle window resize for responsive video
window.addEventListener('resize', () => {
    const videoContainer = document.querySelector('section#home');
    if (videoContainer) {
        const video = videoContainer.querySelector('video');
        if (video) {
            video.style.width = '100%';
            video.style.height = '100%';
        }
    }
});

// Initialize page with proper z-index layering
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video.video-bg');
    const body = document.querySelector('body');
    
    if (video) {
        // Ensure video covers entire window
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.zIndex = '1';
    }
    
    // Ensure all main sections are above video
    const sections = document.querySelectorAll('section, nav, footer');
    sections.forEach(section => {
        if (section.tagName === 'SECTION' || section.tagName === 'FOOTER') {
            section.style.position = 'relative';
            section.style.zIndex = '10';
        }
    });
});
