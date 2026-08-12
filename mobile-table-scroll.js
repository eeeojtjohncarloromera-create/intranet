(() => {
    const mobileQuery = window.matchMedia('(max-width: 1024px)');
    const pairs = [
        ['.directory-table-header', '.directory-table-wrapper'],
        ['.news-table-header', '.news-table-wrapper'],
        ['.events-table-header', '.events-table-wrapper']
    ];

    const connections = [];

    const updateConnection = ({ header, wrapper }) => {
        header.style.transform = mobileQuery.matches
            ? `translateX(${-wrapper.scrollLeft}px)`
            : '';
    };

    pairs.forEach(([headerSelector, wrapperSelector]) => {
        document.querySelectorAll(headerSelector).forEach((header) => {
            const wrapper = header.parentElement?.querySelector(wrapperSelector);
            if (!wrapper) return;

            const clip = document.createElement('div');
            clip.className = 'mobile-table-header-scroll';
            header.before(clip);
            clip.append(header);

            const connection = { header, wrapper };
            connections.push(connection);
            wrapper.addEventListener('scroll', () => updateConnection(connection), { passive: true });
            updateConnection(connection);
        });
    });

    mobileQuery.addEventListener('change', () => {
        connections.forEach(updateConnection);
    });
})();
