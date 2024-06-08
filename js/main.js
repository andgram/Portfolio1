function smoothScroll() {
    document.querySelectorAll('button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            } 
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
});