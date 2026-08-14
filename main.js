// Department card functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    const cards = document.querySelectorAll('.department-card');
    cards.forEach((card) => {
        const summary = card.querySelector('summary');
        summary.addEventListener('click', (event) => {
            event.preventDefault();
            card.open = !card.open;
        });
    });
});

// Activity Images
const sliderImages = [
    'activity-images/act1.jpeg',
    'activity-images/act2.jpeg',
    'activity-images/act3.jpeg',
    'activity-images/act4.jpeg'
];

let slideIndex = 0;
let slides = [];
let dots = [];

function initializeSlider() {
    const slider = document.getElementById('slider');
    const sliderDots = document.getElementById('slider-dots');
    
    if (!slider || !sliderDots) return;

    sliderImages.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Slide ${index + 1}`;
        slide.appendChild(img);
        slider.appendChild(slide);
        slides.push(slide);
    });

    // Only create 4 dots
    for (let i = 0; i < 4; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        sliderDots.appendChild(dot);
        dots.push(dot);
    }

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.onclick = () => {
            const slidesPerDot = Math.ceil(slides.length / dots.length);
            slideIndex = index * slidesPerDot;
            if (slideIndex >= slides.length) slideIndex = slides.length - 1;
            showSlide(slideIndex);
        };
    });

    showSlide(slideIndex);
}

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide) => {
        slide.classList.remove('active', 'prev', 'next');
    });
    
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    const prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
    const nextIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
    
    slides[prevIndex].classList.add('prev');
    slides[slideIndex].classList.add('active');
    slides[nextIndex].classList.add('next');
    
    // Cycle through 4 dots using modulo
    const dotIndex = slideIndex % dots.length;
    dots[dotIndex].classList.add('active');
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Initialize slider on page load
initializeSlider();

// Auto slide every 4 seconds
setInterval(() => {
    moveSlide(1);
}, 4000);

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const departmentCards = document.querySelectorAll('.department-card');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    departmentCards.forEach((card) => {
        const summary = card.querySelector('.dept-summary');
        const deptName = summary.textContent.toLowerCase();
        const content = card.querySelector('.dept-content');
        const contentText = content ? content.textContent.toLowerCase() : '';

        // Reset all cards
        card.style.display = 'flex';
        card.style.border = 'none';
        card.open = false;

        if (searchTerm !== '' && (deptName.includes(searchTerm) || contentText.includes(searchTerm))) {
            card.style.border = '2px solid #ff7200';
            card.open = true;
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Clear search when input is empty
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        departmentCards.forEach((card) => {
            card.style.display = 'flex';
            card.style.border = 'none';
            card.open = false;
        });
    }
});

// Logo link functionality
const logoLink = document.querySelector('.logo-link');
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Activities and Directory navigation
const activitiesLink = document.querySelector('a[href="#activities"]');
const directoryLink = document.querySelector('a[href="#directory"]');
const activitiesSection = document.getElementById('activities');
const directorySection = document.getElementById('directory');

activitiesLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Compute an offset to account for the fixed header/mobile menu height
    const offset = 80; // adjust as needed for mobile header height
    const elementPosition = activitiesSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
});

directoryLink.addEventListener('click', (e) => {
    e.preventDefault();
    const directoryTitle = document.querySelector('.section-title');
    if (directoryTitle) {
        const offset = 80;
        const elementPosition = directoryTitle.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        directorySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Dropdown navigation functionality
const dropdownLinks = document.querySelectorAll('.dropdown-menu td a[data-dept]');

dropdownLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const deptId = link.getAttribute('data-dept');
        const parentDropdown = link.closest('.dropdown');
        const isOrgChart = parentDropdown && parentDropdown.getAttribute('data-type') === 'orgchart';
        const isMemorandum = parentDropdown && parentDropdown.getAttribute('data-type') === 'memorandum';
        const isJobDescription = parentDropdown && parentDropdown.getAttribute('data-type') === 'jobdescription';
        const isPolicy = parentDropdown && parentDropdown.getAttribute('data-type') === 'policy';

        if (isOrgChart) {
            const orgChartFile = orgChartFiles[deptId];
            if (orgChartFile) {
                window.location.href = orgChartFile;
            }
        } else if (isMemorandum) {
            openDropdownModal(deptId, 'memorandum');
        } else if (isJobDescription) {
            openDropdownModal(deptId, 'jobdescription');
        } else if (isPolicy) {
            openDropdownModal(deptId, 'policy');
        }
    });
});

// Mobile logout handling
const logoutLink = document.getElementById('logoutLink');
if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            if (typeof demoAuth !== 'undefined' && demoAuth.logout) demoAuth.logout();
        } catch (err) {
            localStorage.removeItem('eeeDemoAuthenticated');
        }
        window.location.href = 'login.html';
    });
}

// Desktop logout button (beside search)
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            if (typeof demoAuth !== 'undefined' && demoAuth.logout) demoAuth.logout();
        } catch (err) {
            localStorage.removeItem('eeeDemoAuthenticated');
        }
        window.location.href = 'login.html';
    });
}

function openDropdownModal(deptId, type) {
    const modal = document.getElementById('documentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImageContainer = document.querySelector('.modal-image-container');
    
    let title = '';
    let content = '';
    
    if (type === 'memorandum') {
        title = deptNames[deptId] + ' Department Memorandum';
        content = generateMemorandumTable(memorandumData[deptId]);
    } else if (type === 'jobdescription') {
        title = deptNames[deptId] + ' Job Description';
        content = generateJobDescriptionTable(jobDescriptionData[deptId]);
    } else if (type === 'policy') {
        title = deptNames[deptId] + ' Policy and Procedures';
        content = generatePolicyTable(policyData[deptId]);
    }
    
    modalTitle.textContent = title;
    modalImageContainer.innerHTML = `
        <div id="pdfContainer" style="max-height: 70vh; overflow-y: auto; padding: 20px;">
            ${content}
        </div>
    `;
    modal.style.display = 'block';
    
    setTimeout(() => {
        const viewPdfButtons = modalImageContainer.querySelectorAll('.view-pdf-btn');
        viewPdfButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const pdfUrl = this.getAttribute('data-pdf-url');
                window.open(pdfUrl, '_blank');
            });
        });
    }, 100);
}

// Operation directory from Google Sheets
async function loadOperationDirectoryFromSheet() {
    const sheetId = '1FBVDr-m_HiiF6glpQBl_2T_N4TyRjFm9XI4Cy47-yH4';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
    const table = document.querySelector('.operation-directory-table');
    const header = table?.querySelector('thead');
    const body = table?.querySelector('tbody');

    if (!table || !header || !body) {
        console.warn('Operation directory table not found.');
        return;
    }

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Sheet fetch failed: ${response.status} ${response.statusText}`);
        }

        const csvText = await response.text();
        const allRows = parseCsv(csvText);
        if (allRows.length === 0) {
            body.innerHTML = `<tr><td colspan="16">No operation directory entries available yet.</td></tr>`;
            return;
        }

        let cols = allRows[0].map((label) => label || '');
        const rowsRaw = allRows.slice(1);

        // Deduplicate columns by label (keep first occurrence) and remove corresponding row cells
        const seen = new Map();
        const removeIndices = new Set();
        cols.forEach((label, idx) => {
            const key = String(label).trim().toLowerCase();
            if (key === '') return;
            if (seen.has(key)) {
                removeIndices.add(idx);
            } else {
                seen.set(key, idx);
            }
        });

        if (removeIndices.size > 0) {
            cols = cols.filter((_, i) => !removeIndices.has(i));
        }

        const rows = rowsRaw.map((row) => row.filter((_, i) => !removeIndices.has(i)));

        const escapeHtml = (text) => String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        header.innerHTML = `
            <tr>
                ${cols.map((label) => `<th>${escapeHtml(label || '&nbsp;')}</th>`).join('')}
            </tr>
        `;

        if (rows.length === 0) {
            body.innerHTML = `<tr><td colspan="${cols.length || 1}">No operation directory entries available yet.</td></tr>`;
        } else {
            const clusterLeadIndex = cols.findIndex((label) => String(label).trim().toLowerCase() === 'cluster lead');
            let lastCluster = '';
            const clusterLabels = rows.map((row) => {
                const value = String(row[clusterLeadIndex] || '').trim();
                if (value !== '') lastCluster = value;
                return lastCluster;
            });

            body.innerHTML = rows
                .map((row, rowIndex) => `
                        <tr data-cluster="${escapeHtml(clusterLabels[rowIndex] || '')}">
                            ${row.map((cell) => `<td>${escapeHtml(cell).replace(/\n/g, '<br>')}</td>`).join('')}
                        </tr>
                    `)
                .join('');
            mergeVerticalCells(body, 'Cluster Lead');
            setupClusterLeadHover();
        }
    } catch (error) {
        console.error('Unable to load operation directory from Google Sheets:', error);
        body.innerHTML = `<tr><td colspan="16">Loading...</td></tr>`;
    }
}

// Load department directory cards from Google Sheets
async function loadDepartmentDirectoryCards() {
    const sheetId = '1FBVDr-m_HiiF6glpQBl_2T_N4TyRjFm9XI4Cy47-yH4';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=1109605328`;
    const directoryCards = document.querySelectorAll('.directory-card');

    if (directoryCards.length === 0) {
        console.warn('No directory cards found.');
        return;
    }

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Sheet fetch failed: ${response.status} ${response.statusText}`);
        }

        const csvText = await response.text();
        const allRows = parseCsv(csvText);
        if (allRows.length === 0) {
            console.warn('No directory card data available.');
            return;
        }

        // Find the column header row (Name, Position, Contact)
        let headerRowIndex = 0;
        for (let i = 0; i < allRows.length; i++) {
            const firstCell = String(allRows[i][0] || '').trim().toLowerCase();
            if (firstCell === 'name' || firstCell === 'position' || firstCell === 'contact') {
                headerRowIndex = i;
                break;
            }
        }

        // Extract department names from the row before headers
        const departmentNamesRow = allRows[headerRowIndex - 1] || [];

        // Find column indices for each department
        const departmentColumns = {};
        departmentNamesRow.forEach((cell, colIndex) => {
            const cellValue = String(cell || '').trim();
            if (cellValue && cellValue !== '') {
                departmentColumns[cellValue] = colIndex;
            }
        });

        const actualDataRows = allRows.slice(headerRowIndex + 1);

        // Group data by department
        const departmentData = {};
        Object.keys(departmentColumns).forEach(deptName => {
            departmentData[deptName] = [];
        });

        actualDataRows.forEach((row) => {
            // For each department, extract data from their column group
            Object.keys(departmentColumns).forEach(deptName => {
                const deptColIndex = departmentColumns[deptName];
                // Each department has 3 columns: Name, Position (email), Contact #
                const name = String(row[deptColIndex] || '').trim();
                const email = String(row[deptColIndex + 1] || '').trim();
                const contact = String(row[deptColIndex + 2] || '').trim();

                if (name) {
                    departmentData[deptName].push({ name, email, contact });
                }
            });
        });

        const escapeHtml = (text) => String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        // Update each directory card
        directoryCards.forEach((card) => {
            const cardTitle = card.querySelector('h3');
            if (!cardTitle) return;

            const deptName = cardTitle.textContent.trim();
            const deptData = departmentData[deptName];

            const tableBody = card.querySelector('.directory-table tbody');
            if (!tableBody) return;

            if (!deptData || deptData.length === 0) {
                // No data available for this department
                tableBody.innerHTML = `<tr><td colspan="3">No data available</td></tr>`;
                return;
            }

            tableBody.innerHTML = deptData
                .map((item) => `
                    <tr>
                        <td>${escapeHtml(item.name)}</td>
                        <td>${escapeHtml(item.email)}</td>
                        <td>${escapeHtml(item.contact)}</td>
                    </tr>
                `)
                .join('');
        });
    } catch (error) {
        console.error('Unable to load department directory cards from Google Sheets:', error);
    }
}

function parseCsv(csvText) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;
    for (let i = 0; i < csvText.length; i += 1) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];

        if (inQuotes) {
            if (char === '"') {
                if (nextChar === '"') {
                    field += '"';
                    i += 1;
                } else {
                    inQuotes = false;
                }
            } else {
                field += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === ',') {
                row.push(field);
                field = '';
            } else if (char === '\r') {
                continue;
            } else if (char === '\n') {
                row.push(field);
                rows.push(row);
                row = [];
                field = '';
            } else {
                field += char;
            }
        }
    }

    if (inQuotes) {
        field += '"';
    }
    if (field !== '' || row.length > 0) {
        row.push(field);
        rows.push(row);
    }
    return rows;
}

function mergeVerticalCells(tableBody, headerText) {
    const table = tableBody.closest('table');
    if (!table) return;
    const headers = Array.from(table.querySelectorAll('thead th'));
    const targetIndex = headers.findIndex(
        (th) => th.textContent.trim().toLowerCase() === headerText.toLowerCase()
    );
    if (targetIndex === -1) return;

    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const values = rows.map((row) => {
        const cells = Array.from(row.children);
        return (cells[targetIndex]?.textContent || '').trim();
    });

    let lastValue = '';
    for (let i = 0; i < values.length; i += 1) {
        if (values[i] !== '') {
            if (lastValue === '') {
                for (let j = 0; j < i; j += 1) {
                    values[j] = values[i];
                }
            }
            lastValue = values[i];
        } else if (lastValue !== '') {
            values[i] = lastValue;
        }
    }

    let currentRow = null;
    let currentText = null;
    let rowspan = 0;

    rows.forEach((row, rowIndex) => {
        const cells = Array.from(row.children);
        if (cells.length <= targetIndex) return;
        const cell = cells[targetIndex];
        const text = values[rowIndex];

        if (currentText !== null && text === currentText && text !== '') {
            rowspan += 1;
            cell.remove();
        } else {
            if (currentRow && rowspan > 1) {
                const targetCell = Array.from(currentRow.children)[targetIndex];
                if (targetCell) {
                    targetCell.rowSpan = rowspan;
                    targetCell.classList.add('cluster-lead-cell');
                    currentRow.classList.add('cluster-lead-row');
                }
            }
            currentRow = row;
            currentText = text;
            rowspan = 1;
            if (text !== '') {
                cell.innerHTML = cell.innerHTML || text.replace(/\n/g, '<br>');
                cell.classList.add('cluster-lead-cell');
                row.classList.add('cluster-lead-row');
            }
        }
    });

    if (currentRow && rowspan > 1) {
        const targetCell = Array.from(currentRow.children)[targetIndex];
        if (targetCell) {
            targetCell.rowSpan = rowspan;
            targetCell.classList.add('cluster-lead-cell');
            currentRow.classList.add('cluster-lead-row');
        }
    }
}

function setupClusterLeadHover() {
    const table = document.querySelector('.operation-directory-table');
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr'));

    function clearHighlights() {
        rows.forEach((row) => {
            row.classList.remove('cluster-hover');
            const leadCell = row.querySelector('.cluster-lead-cell');
            if (leadCell) {
                leadCell.classList.remove('cluster-lead-hover');
            }
        });
    }

    tbody.addEventListener('mouseover', (event) => {
        const td = event.target.closest('td');
        if (!td || !tbody.contains(td)) return;
        const tr = td.closest('tr');
        if (!tr) return;

        const cluster = tr.dataset.cluster || '';
        if (!cluster) {
            clearHighlights();
            return;
        }

        const clusterLeadRow = rows.find((row) => row.dataset.cluster === cluster && row.classList.contains('cluster-lead-row'));
        const clusterLeadCell = clusterLeadRow?.querySelector('.cluster-lead-cell');
        const isClusterLeadCell = td.classList.contains('cluster-lead-cell');

        clearHighlights();

        if (isClusterLeadCell) {
            rows.forEach((row) => {
                if (row.dataset.cluster === cluster) {
                    row.classList.add('cluster-hover');
                }
            });
        } else {
            tr.classList.add('cluster-hover');
        }

        if (clusterLeadCell) {
            clusterLeadCell.classList.add('cluster-lead-hover');
        }
    });

    tbody.addEventListener('mouseleave', () => {
        clearHighlights();
    });
}

// Load operation directory on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadOperationDirectoryFromSheet();
    loadDepartmentDirectoryCards();
});
