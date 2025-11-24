// Fade-in animation on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

// Observe all fade sections
document.querySelectorAll(".fade-section").forEach(section => {
    fadeObserver.observe(section);
});
