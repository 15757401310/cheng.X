document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        navMenu.style.display = 'none';
        menuToggle.addEventListener('click', () => {
            const isHidden = navMenu.style.display === 'none';
            navMenu.style.display = isHidden ? 'block' : 'none';
        });
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            return;
        }
        
        let linkPath = new URL(link.href).pathname.split('/').pop();
        if (linkPath === '') {
            linkPath = 'index.html';
        }

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
