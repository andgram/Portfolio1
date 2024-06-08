function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found:', this.getAttribute('href'));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    smoothScroll();
});