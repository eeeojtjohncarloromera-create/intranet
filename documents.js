// Function to generate Job Description table (4 columns)
function generateJobDescriptionTable(dataArray) {
    if (!dataArray || dataArray.length === 0) return '';

    let tableRows = dataArray.map(item => `
        <tr>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.jobTitle}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.immediateSuperior}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">
                <span class="view-pdf-btn" data-pdf-url="${item.pdfLink}" style="color: #ff7200; cursor: pointer; text-decoration: underline;">
                    View PDF
                </span>
            </td>
        </tr>
    `).join('');

    return `
        <div class="table-section" style="margin-bottom: 30px;">
            <h4 style="color: #ff7200; font-size: 18px; margin: 20px 0 10px; font-weight: bold; text-align: left;">Job Description</h4>
            <table style="width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.05); border-radius: 8px; overflow: hidden;">
                <thead>
                    <tr style="background: rgba(255, 112, 0, 0.3);">
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Job Title</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Immediate Superior</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Link</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
}

// Function to generate Policy And Procedures table (7 columns)
function generatePolicyTable(dataArray) {
    if (!dataArray || dataArray.length === 0) return '';

    let tableRows = dataArray.map(item => `
        <tr>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.policyTitle}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.policyNumberVersion}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.effectiveDate}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.revisionDate}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.revisionDue}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">${item.replaceNumberVersion}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px;">
                <span class="view-pdf-btn" data-pdf-url="${item.pdfLink}" style="color: #ff7200; cursor: pointer; text-decoration: underline;">
                    View PDF
                </span>
            </td>
        </tr>
    `).join('');

    return `
        <div class="table-section" style="margin-bottom: 30px;">
            <h4 style="color: #ff7200; font-size: 18px; margin: 20px 0 10px; font-weight: bold; text-align: left;">Policy And Procedures</h4>
            <table style="width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.05); border-radius: 8px; overflow: hidden;">
                <thead>
                    <tr style="background: rgba(255, 112, 0, 0.3);">
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Policy Title</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Policy Number & Version</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Effective Date</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Revision Date</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Revision Due</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Replace Number & Version</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200;">Link</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
}

// Function to generate Memorandum table (4 columns)
function generateMemorandumTable(dataArray) {
    if (!dataArray || dataArray.length === 0) return '';
    let tableRows = dataArray.map(item => `
        <tr>
            <td style="text-align: left; font-size: 13px; padding: 10px; width: 20%;">${item.date}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px; width: 40%;">${item.subject}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px; width: 25%;">${item.referenceNo}</td>
            <td style="text-align: left; font-size: 13px; padding: 10px; width: 15%;">
                <span class="view-pdf-btn" data-pdf-url="${item.pdfLink}" style="color: #ff7200; cursor: pointer; text-decoration: underline;">
                    View PDF
                </span>
            </td>
        </tr>
    `).join('');

    return `
        <div class="table-section" style="margin-bottom: 30px;">
            <h4 style="color: #ff7200; font-size: 18px; margin: 20px 0 10px; font-weight: bold; text-align: left;">Memorandum</h4>
            <table style="width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.05); border-radius: 8px; overflow: hidden; table-layout: fixed;">
                <thead>
                    <tr style="background: rgba(255, 112, 0, 0.3);">
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200; width: 15%;">Date</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200; width: 45%;">Subject</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200; width: 25%;">Reference No.</th>
                        <th style="padding: 12px; text-align: left; color: #ff7200; font-weight: bold; border-bottom: 2px solid #ff7200; width: 15%;">Link</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('documentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const viewDocButtons = document.querySelectorAll('.btnn, .btnn-small, .btnnn');
    const closeModal = document.querySelector('.close-modal');

    console.log('Modal:', modal);
    console.log('View doc buttons:', viewDocButtons);
    console.log('Close modal:', closeModal);

    // View Documents button click handlers
    viewDocButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dept = button.getAttribute('data-dept');
            if (dept && deptNames[dept]) {
                modalTitle.textContent = deptNames[dept] + ' Department Documents';
                let allDocuments = '';
                allDocuments += generateJobDescriptionTable(jobDescriptionData[dept]);
                allDocuments += generatePolicyTable(policyData[dept]);
                allDocuments += generateMemorandumTable(memorandumData[dept]);
                modalImageContainer.innerHTML = `
                    <div id="pdfContainer" style="max-height: 70vh; overflow-y: auto; padding: 20px;">
                        ${allDocuments}
                    </div>
                `;
                modal.style.display = 'block';
                addPdfButtonHandlers(modalImageContainer);
            }
        });
    });

    // Close modal handlers
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Add click handlers for View PDF buttons
function addPdfButtonHandlers(container) {
    setTimeout(() => {
        const viewPdfButtons = container.querySelectorAll('.view-pdf-btn');
        viewPdfButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const pdfUrl = this.getAttribute('data-pdf-url');
                window.open(pdfUrl, '_blank');
            });
        });
    }, 100);
}

// Handle URL parameters to auto-open modals
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        type: params.get('type'),
        dept: params.get('dept')
    };
}

function openModalFromUrl() {
    const { type, dept } = getUrlParams();
    if (!type || !dept || !deptNames[dept]) return;

    const modal = document.getElementById('documentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImageContainer = document.querySelector('.modal-image-container');

    let tableContent = '';
    let title = '';

    if (type === 'jobdescription') {
        title = deptNames[dept] + ' Job Description';
        tableContent = generateJobDescriptionTable(jobDescriptionData[dept]);
    } else if (type === 'policy') {
        title = deptNames[dept] + ' Policy and Procedures';
        tableContent = generatePolicyTable(policyData[dept]);
    } else if (type === 'memorandum') {
        title = deptNames[dept] + ' Department Memorandum';
        tableContent = generateMemorandumTable(memorandumData[dept]);
    } else if (type === 'orgchart') {
        const orgChartFile = dept + '.html';
        window.location.href = orgChartFile;
        return;
    }

    if (title && tableContent) {
        modalTitle.textContent = title;
        modalImageContainer.innerHTML = `
            <div id="pdfContainer" style="max-height: 70vh; overflow-y: auto; padding: 20px;">
                ${tableContent}
            </div>
        `;
        modal.style.display = 'block';
        addPdfButtonHandlers(modalImageContainer);
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
}

// Initialize modal and URL handling on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    openModalFromUrl();
});
