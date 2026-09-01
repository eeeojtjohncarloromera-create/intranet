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
            const loginPage = document.querySelector('.login-page');

            if (reduceMotion) {
                window.location.replace(safeRoute);
                return;
            }

            loginPage?.classList.add('login-page--transitioning');

            const heading = loginPage?.querySelector('#loginTitle');
            if (heading && loginPage) {
                const headingRect = heading.getBoundingClientRect();
                const headingStyle = window.getComputedStyle(heading);
                heading.style.fontSize = headingStyle.fontSize;
                heading.style.letterSpacing = headingStyle.letterSpacing;
                heading.style.lineHeight = headingStyle.lineHeight;
                heading.style.color = headingStyle.color;
                heading.style.setProperty('--title-start-x', `${headingRect.left + (headingRect.width / 2)}px`);
                heading.style.setProperty('--title-start-y', `${headingRect.top + (headingRect.height / 2)}px`);
                heading.classList.add('login-transition-heading');
                loginPage.appendChild(heading);
                void heading.offsetWidth;
                heading.classList.add('is-centered');
                window.setTimeout(() => heading.classList.add('is-zooming'), 740);
                window.setTimeout(() => loginPage.classList.add('login-page--leaving'), 1940);
            } else {
                loginPage?.classList.add('login-page--leaving');
            }

            window.setTimeout(() => window.location.replace(safeRoute), 2140);
        }, 0);
    });
})();
