(() => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');

    if (!toggle || !menu) return;

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;

    const syncMobileDepartmentLabels = () => {
        const items = menu.querySelectorAll('.dropdown-menu td a');

        items.forEach((link) => {
            const original = link.dataset.originalLabel || link.textContent.trim();
            if (!link.dataset.originalLabel) link.dataset.originalLabel = original;

            if (isMobile()) {
                const shortLabel = original.replace(/\s*Department\s*$/i, '');
                if (link.textContent.trim() !== shortLabel) link.textContent = shortLabel;
            } else {
                if (link.textContent.trim() !== original) link.textContent = original;
            }
        });
    };

    const syncDepartmentCardNames = () => {
        const cards = document.querySelectorAll('.department-card .dept-name');

        cards.forEach((nameEl) => {
            if (!nameEl.dataset.originalName) {
                nameEl.dataset.originalName = nameEl.innerHTML;
            }

            if (isMobile()) {
                const compact = nameEl.dataset.originalName.replace(/Department\b/gi, '').replace(/\s{2,}/g, ' ').trim();
                nameEl.innerHTML = compact;
            } else {
                nameEl.innerHTML = nameEl.dataset.originalName;
            }
        });
    };

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
            if (!isMobile()) return;
            event.preventDefault();
            link.closest('.dropdown')?.classList.toggle('mobile-dropdown-open');
        });
    });

    menu.querySelectorAll('a:not(.dropdown-toggle)').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    syncMobileDepartmentLabels();
    syncDepartmentCardNames();

    window.addEventListener('resize', () => {
        syncMobileDepartmentLabels();
        syncDepartmentCardNames();
        if (!isMobile()) closeMenu();
    });
})();
