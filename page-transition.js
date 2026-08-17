(() => {
    const transitionKey = 'eeeLoginTransition';
    const root = document.documentElement;

    try {
        if (sessionStorage.getItem(transitionKey) !== 'true') return;
        sessionStorage.removeItem(transitionKey);
    } catch {
        return;
    }

    root.classList.add('intranet-page--entering');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        root.classList.add('intranet-page--entered');
    } else {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => root.classList.add('intranet-page--entered'));
        });
    }

    window.setTimeout(() => {
        root.classList.remove('intranet-page--entering', 'intranet-page--entered');
    }, reduceMotion ? 0 : 450);
})();
