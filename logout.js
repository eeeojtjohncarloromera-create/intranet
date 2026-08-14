/* Ends the demo session from any page that includes a logout button. */
document.querySelectorAll('.logout-btn').forEach((button) => {
    button.addEventListener('click', () => {
        try {
            if (typeof demoAuth !== 'undefined' && demoAuth.logout) {
                demoAuth.logout();
            } else {
                localStorage.removeItem('eeeDemoAuthenticated');
            }
        } catch (error) {
            localStorage.removeItem('eeeDemoAuthenticated');
        }

        window.location.href = 'login.html';
    });
});
