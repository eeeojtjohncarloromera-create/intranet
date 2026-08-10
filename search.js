const siteSearchIndex = [
    { url: 'index.html', title: 'Home', keywords: ['home', 'homepage', 'dashboard', 'activities', 'directory', 'operation directory', 'operations', 'org chart', 'search'] },
    { url: 'admin.html', title: 'Admin Department', keywords: ['admin', 'administrator', 'admin department', 'administration', 'org chart', 'admin head'] },
    { url: 'expansion.html', title: 'Expansion Department', keywords: ['expansion', 'expansion department', 'org chart', 'growth'] },
    { url: 'finance.html', title: 'Finance Department', keywords: ['finance', 'financial', 'accounting', 'budget', 'finance department', 'org chart'] },
    { url: 'hr.html', title: 'HR Department', keywords: ['hr', 'human resources', 'recruitment', 'talent', 'personnel', 'org chart'] },
    { url: 'it.html', title: 'IT Department', keywords: ['it', 'information technology', 'technology', 'support', 'infrastructure', 'org chart'] },
    { url: 'marketing.html', title: 'Marketing Department', keywords: ['marketing', 'brand', 'advertising', 'communications', 'org chart'] },
    { url: 'operations.html', title: 'Operations Department', keywords: ['operations', 'operations department', 'logistics', 'production', 'org chart'] },
    { url: 'opex.html', title: 'OpEx Department', keywords: ['opex', 'operational excellence', 'efficiency', 'process', 'org chart'] },
    { url: 'security.html', title: 'Security Department', keywords: ['security', 'safety', 'risk', 'security department', 'org chart'] },
];

function matchSearchPages(searchTerm) {
    const term = searchTerm.toLowerCase();
    return siteSearchIndex
        .map((entry) => ({
            entry,
            score: [entry.title, ...(entry.keywords || [])]
                .map((text) => String(text).toLowerCase())
                .reduce((score, text) => score + (text.includes(term) ? 1 : 0), 0),
        }))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((result) => result.entry);
}

function clearDepartmentSearch() {
    const departmentCards = document.querySelectorAll('.department-card');
    if (!departmentCards.length) return;

    departmentCards.forEach((card) => {
        card.style.display = 'flex';
        card.style.border = 'none';
        if ('open' in card) {
            card.open = false;
        }
    });
}

function searchDepartments(searchTerm) {
    const departmentCards = document.querySelectorAll('.department-card');
    if (!departmentCards.length) return false;

    let foundMatch = false;

    departmentCards.forEach((card) => {
        const summary = card.querySelector('.dept-summary');
        const deptName = summary ? summary.textContent.toLowerCase() : '';
        const content = card.querySelector('.dept-content');
        const contentText = content ? content.textContent.toLowerCase() : '';

        if (searchTerm !== '' && (deptName.includes(searchTerm) || contentText.includes(searchTerm))) {
            card.style.border = '2px solid #ff7200';
            card.open = true;
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            foundMatch = true;
        } else {
            card.style.border = 'none';
            if ('open' in card) {
                card.open = false;
            }
        }
    });

    return foundMatch;
}

function performSiteSearch() {
    const siteSearchInput = document.getElementById('searchInput');
    if (!siteSearchInput) return;

    const searchTerm = siteSearchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        clearDepartmentSearch();
        return;
    }

    const foundLocal = searchDepartments(searchTerm);
    if (foundLocal) {
        return;
    }

    const matches = matchSearchPages(searchTerm);
    if (matches.length === 0) {
        window.alert('No matching pages found. Try a different search term.');
        return;
    }

    window.location.href = matches[0].url;
}

function initializeSiteSearch() {
    const siteSearchInput = document.getElementById('searchInput');
    const siteSearchBtn = document.getElementById('searchBtn');
    if (!siteSearchInput || !siteSearchBtn) return;

    siteSearchBtn.addEventListener('click', performSiteSearch);
    siteSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSiteSearch();
        }
    });

    siteSearchInput.addEventListener('input', () => {
        if (siteSearchInput.value.trim() === '') {
            clearDepartmentSearch();
        }
    });

    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || params.get('search');
    if (query) {
        siteSearchInput.value = query;
        performSiteSearch();
    }
}

initializeSiteSearch();
