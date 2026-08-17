(() => {
    if (demoAuth.isAuthenticated()) {
        window.location.replace('index.html');
        return;
    }

    const form = document.getElementById('loginForm');
    const companyId = document.getElementById('companyId');
    const password = document.getElementById('password');
    const toggle = document.getElementById('passwordToggle');
    const submit = form?.querySelector('button[type="submit"]');
    const error = document.getElementById('loginError');
    if (!form || !companyId || !password || !toggle || !submit || !error) return;

    toggle.addEventListener('click', () => {
        const showing = password.type === 'text';
        password.type = showing ? 'password' : 'text';
        toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        toggle.textContent = showing ? '◉' : '◉';
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        error.textContent = '';
        submit.disabled = true;
        submit.textContent = 'SIGNING IN...';

        window.setTimeout(() => {
            if (!demoAuth.login(companyId.value, password.value)) {
                error.textContent = 'Invalid Company ID or password.';
                submit.disabled = false;
                submit.textContent = 'LOGIN';
                password.focus();
                return;
            }

            const requestedRoute = new URLSearchParams(window.location.search).get('returnTo');
            const safeRoute = requestedRoute && /^[a-zA-Z0-9_-]+\.html(?:[?#].*)?$/.test(requestedRoute)
                ? requestedRoute
                : 'index.html';
            try {
                sessionStorage.setItem('eeeLoginTransition', 'true');
            } catch {
                // The redirect still works if session storage is unavailable.
            }

            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.querySelector('.login-page')?.classList.add('login-page--leaving');
            window.setTimeout(() => window.location.replace(safeRoute), reduceMotion ? 0 : 400);
        }, 350);
    });
})();
