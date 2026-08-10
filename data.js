// Department names mapping
const deptNames = {
    opex: 'Opex',
    expansion: 'Expansion',
    hr: 'HR',
    security: 'Security',
    admin: 'Admin',
    finance: 'Finance',
    marketing: 'Marketing',
    it: 'IT',
    operations: 'Operations',
    cs: 'CS'
};

// Organizational chart HTML file paths
const orgChartFiles = {
    opex: 'opex.html',
    expansion: 'expansion.html',
    hr: 'hr.html',
    security: 'security.html',
    admin: 'admin.html',
    finance: 'finance.html',
    marketing: 'marketing.html',
    it: 'it.html',
    operations: 'operations.html',
    cs: 'cs.html'
};

// Job Description data with all fields
const jobDescriptionData = {
    opex: [
        { employeeName: 'Shawn Michael Dagatan', jobTitle: 'Data Analyst', department: 'Opex', immediateSuperior: 'Head of Strategy and Operational Excellence', pdfLink: 'https://drive.google.com/file/d/1MlDXcHd1tvlyQ42PEaA3aecDqVO7DT9s/view?usp=drive_link' },
        { employeeName: 'Shawn Michael Dagatan', jobTitle: 'Data Analyst', department: 'Opex', immediateSuperior: 'Head of strategy and Operational Excellence', pdfLink: 'https://drive.google.com/file/d/1MlDXcHd1tvlyQ42PEaA3aecDqVO7DT9s/view?usp=drive_link' }
    ],
    expansion: [
        { employeeName: 'Staff Member 1', jobTitle: 'Expansion Officer', department: 'Expansion', immediateSuperior: 'Expansion Head', pdfLink: 'https://drive.google.com/file/d/EXPANSION_JOB_PDF_1_ID/preview' }
    ],
    hr: [
        { employeeName: 'Staff Member 1', jobTitle: 'HR Officer', department: 'HR', immediateSuperior: 'HR Head', pdfLink: 'https://drive.google.com/file/d/HR_JOB_PDF_1_ID/preview' }
    ],
    security: [
        { employeeName: 'Staff Member 1', jobTitle: 'Security Officer', department: 'Security', immediateSuperior: 'Security Head', pdfLink: 'https://drive.google.com/file/d/SECURITY_JOB_PDF_1_ID/preview' }
    ],
    admin: [
        { employeeName: 'Staff Member 1', jobTitle: 'Admin Officer', department: 'Admin', immediateSuperior: 'Admin Head', pdfLink: 'https://drive.google.com/file/d/ADMIN_JOB_PDF_1_ID/preview' }
    ],
    finance: [
        { employeeName: 'Staff Member 1', jobTitle: 'Finance Officer', department: 'Finance', immediateSuperior: 'Finance Head', pdfLink: 'https://drive.google.com/file/d/FINANCE_JOB_PDF_1_ID/preview' }
    ],
    marketing: [
        { employeeName: 'Staff Member 1', jobTitle: 'Marketing Officer', department: 'Marketing', immediateSuperior: 'Marketing Head', pdfLink: 'https://drive.google.com/file/d/MARKETING_JOB_PDF_1_ID/preview' }
    ],
    it: [
        { employeeName: 'Staff Member 1', jobTitle: 'IT Officer', department: 'IT', immediateSuperior: 'IT Head', pdfLink: 'https://drive.google.com/file/d/IT_JOB_PDF_1_ID/preview' }
    ],
    operations: [
        { employeeName: 'Staff Member 1', jobTitle: 'Operations Officer', department: 'Operations', immediateSuperior: 'Operations Head', pdfLink: 'https://drive.google.com/file/d/OPERATIONS_JOB_PDF_1_ID/preview' }
    ],
    cs: [
        { employeeName: 'Staff Member 1', jobTitle: 'CS Officer', department: 'CS', immediateSuperior: 'CS Head', pdfLink: 'https://drive.google.com/file/d/CS_JOB_PDF_1_ID/preview' }
    ]
};

// Policy And Procedures data with all fields
const policyData = {
    opex: [
        { policyTitle: 'Operator Hub Receiving and Handover, Compliance Policy', policyNumberVersion: 'N/A', effectiveDate: 'N/A', revisionDate: 'N/A', revisionDue: 'N/A', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/1EvpiSGJGC0S91BpJvQ-HXqo7I7D2FDjJ/view?usp=drive_link' },
        { policyTitle: 'Operator Hub Sorting Policy', policyNumberVersion: 'N/A', effectiveDate: 'N/A', revisionDate: 'N/A', revisionDue: 'N/A', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/1e6orbGGxq1mAOI-zY5eP_93fKT65U15k/view?usp=drive_link' }
    ],
    expansion: [
        { policyTitle: 'Growth Strategy Policy', policyNumberVersion: 'POL-EXP-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/EXPANSION_POLICY_PDF_1_ID/preview' }
    ],
    hr: [
        { policyTitle: 'Recruitment Policy', policyNumberVersion: 'POL-HR-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/HR_POLICY_PDF_1_ID/preview' }
    ],
    security: [
        { policyTitle: 'Security Protocol Policy', policyNumberVersion: 'POL-SEC-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/SECURITY_POLICY_PDF_1_ID/preview' }
    ],
    admin: [
        { policyTitle: 'Office Management Policy', policyNumberVersion: 'POL-ADM-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/ADMIN_POLICY_PDF_1_ID/preview' }
    ],
    finance: [
        { policyTitle: 'Financial Control Policy', policyNumberVersion: 'POL-FIN-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/FINANCE_POLICY_PDF_1_ID/preview' }
    ],
    marketing: [
        { policyTitle: 'Brand Guidelines Policy', policyNumberVersion: 'POL-MKT-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/MARKETING_POLICY_PDF_1_ID/preview' }
    ],
    it: [
        { policyTitle: 'IT Security Policy', policyNumberVersion: 'POL-IT-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/IT_POLICY_PDF_1_ID/preview' }
    ],
    operations: [
        { policyTitle: 'Operations Procedure Policy', policyNumberVersion: 'POL-OPS-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/OPERATIONS_POLICY_PDF_1_ID/preview' }
    ],
    cs: [
        { policyTitle: 'Customer Service Policy', policyNumberVersion: 'POL-CS-001 v1.0', effectiveDate: '2024-01-01', revisionDate: 'N/A', revisionDue: '2025-01-01', replaceNumberVersion: 'N/A', pdfLink: 'https://drive.google.com/file/d/CS_POLICY_PDF_1_ID/preview' }
    ]
};

// Memorandum data with all fields
const memorandumData = {
    opex: [
        { date: '2024-07-28', subject: 'Implementation of the Institutional Policies and Procedures (IPP) Format and Framework', referenceNo: 'EEE-OPEX-MEM-2026-001', pdfLink: 'https://drive.google.com/file/d/10KHt7Mizj-tpZiCcdCHwyyYl990HmFpj/view?usp=drive_link' },
        { date: '2024-07-15', subject: 'Implementation of the Temporary OP Hub "No Operations" Approval and Reporting Protocol', referenceNo: 'EEE-OPEX-MEM-2026-002', pdfLink: 'https://drive.google.com/file/d/1Miw-iJhs2LmbUYjqGutq4b-rrfTs4o93/view?usp=drive_link' },
        { date: '2024-07-01', subject: 'Activation of 2-Step Verification (2SV) for FMS Account', referenceNo: 'EEE-OPEX-MEM-2026-003', pdfLink: 'https://drive.google.com/file/d/1DVb6zc8V_NzVOUETumgvP3i7_SPxBrlx/view?usp=drive_link' },
        { date: '2024-06-15', subject: 'Operational Daily Report In Internal GC-ST', referenceNo: 'EEE-OPEX-MEM-2026-004', pdfLink: 'https://drive.google.com/file/d/1TacEX9uwmbSLh5N4ZICpCV3KHcuG3Lxt/view?usp=drive_link' }
    ],
    expansion: [
        { date: '2024-07-01', subject: 'Expansion Plan Update', referenceNo: 'MEMO-EXP-001', pdfLink: 'https://drive.google.com/file/d/EXPANSION_PDF_1_ID/preview' }
    ],
    hr: [
        { date: '2024-07-01', subject: 'New Hiring Guidelines', referenceNo: 'MEMO-HR-001', pdfLink: 'https://drive.google.com/file/d/HR_PDF_1_ID/preview' },
        { date: '2024-06-15', subject: 'Benefits Update', referenceNo: 'MEMO-HR-002', pdfLink: 'https://drive.google.com/file/d/HR_PDF_2_ID/preview' }
    ],
    security: [
        { date: '2024-07-01', subject: 'Security Alert', referenceNo: 'MEMO-SEC-001', pdfLink: 'https://drive.google.com/file/d/SECURITY_PDF_1_ID/preview' }
    ],
    admin: [
        { date: '2024-07-01', subject: 'Office Schedule', referenceNo: 'MEMO-ADM-001', pdfLink: 'https://drive.google.com/file/d/ADMIN_PDF_1_ID/preview' }
    ],
    finance: [
        { date: '2024-07-01', subject: 'Budget Announcement', referenceNo: 'MEMO-FIN-001', pdfLink: 'https://drive.google.com/file/d/FINANCE_PDF_1_ID/preview' }
    ],
    marketing: [
        { date: '2024-07-01', subject: 'Campaign Launch', referenceNo: 'MEMO-MKT-001', pdfLink: 'https://drive.google.com/file/d/MARKETING_PDF_1_ID/preview' }
    ],
    it: [
        { date: '2024-07-01', subject: 'System Maintenance', referenceNo: 'MEMO-IT-001', pdfLink: 'https://drive.google.com/file/d/IT_PDF_1_ID/preview' }
    ],
    operations: [
        { date: '2024-07-01', subject: 'Operations Update', referenceNo: 'MEMO-OPS-001', pdfLink: 'https://drive.google.com/file/d/OPERATIONS_PDF_1_ID/preview' }
    ],
    cs: [
        { date: '2024-07-01', subject: 'Service Standards', referenceNo: 'MEMO-CS-001', pdfLink: 'https://drive.google.com/file/d/CS_PDF_1_ID/preview' }
    ]
};
