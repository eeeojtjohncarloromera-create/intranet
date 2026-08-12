/* DEMO ONLY — client-side route gate, not production security. */
(() => {
    if (!demoAuth.isAuthenticated()) {
        const loginUrl = new URL('login.html', window.location.href);
        const returnTo = `${window.location.pathname.split('/').pop() || 'index.html'}${window.location.search}${window.location.hash}`;
        loginUrl.searchParams.set('returnTo', returnTo);
        window.location.replace(loginUrl.href);
        return;
    }

})();
