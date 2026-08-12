/* DEMO ONLY — replace with real authentication before production. */
const demoAuth = (() => {
    const sessionKey = 'eeeDemoAuthenticated';
    const demoAccounts = new Map([
        ['EEE-001', 'admin1']
    ]);

    const normaliseCompanyId = (companyId) => String(companyId || '').trim().toUpperCase();

    return {
        login(companyId, password) {
            const valid = demoAccounts.get(normaliseCompanyId(companyId)) === String(password || '');
            if (valid) localStorage.setItem(sessionKey, 'true');
            return valid;
        },
        logout() {
            localStorage.removeItem(sessionKey);
        },
        isAuthenticated() {
            return localStorage.getItem(sessionKey) === 'true';
        }
    };
})();
