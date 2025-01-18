window.onload = function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        const navLinks = document.querySelector('nav ul');
        navLinks.classList.toggle('active');
    });
};
