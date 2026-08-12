(() => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');

    if (!toggle || !menu) return;

    const closeMenu = () => {
        document.body.classList.remove('mobile-nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.querySelectorAll('.mobile-dropdown-open').forEach((item) => {
            item.classList.remove('mobile-dropdown-open');
        });
    };

    toggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('mobile-nav-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('.dropdown-toggle').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (!window.matchMedia('(max-width: 1024px)').matches) return;
            event.preventDefault();
            link.closest('.dropdown')?.classList.toggle('mobile-dropdown-open');
        });
    });

    menu.querySelectorAll('a:not(.dropdown-toggle)').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (!window.matchMedia('(max-width: 1024px)').matches) closeMenu();
    });
})();
