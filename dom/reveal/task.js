document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkElementVisibility() {
        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', checkElementVisibility);
    checkElementVisibility();
});