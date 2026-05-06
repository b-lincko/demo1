// CMMC Level 2 Controls Data
const cmmcControls = [
    {
        id: "AC.L2-3.1.1",
        title: "Limit system access to authorized users",
        domain: "AC",
        difficulty: "Moderate",
        category: "Active Directory",
        description: "Only people who should have access can log in to your systems.",
        whyItMatters: "If anyone can log in, hackers can access your data.",
        whatToImplement: [
            "Create a list of authorized users",
            "Create user accounts for each authorized person",
            "Set strong passwords",
            "Remove inactive accounts",
            "Document everything"
        ],
        tools: [
            {
                name: "Active Directory (Windows)",
                description: "Built-in tool for managing user accounts",
                cost: "Free"
            }
        ],
        stepByStep: [
            {
                step: 1,
                title: "Create a User Access List",
                details: "List all employees and contractors who need system access."
            },
            {
                step: 2,
                title: "Create Individual Accounts",
                details: "Create unique accounts for each person instead of shared accounts."
            },
            {
                step: 3,
                title: "Enforce Strong Passwords",
                details: "Require complex passwords that are changed regularly."
            }
        ],
        checklist: [
            "Created list of authorized users",
            "Set up individual user accounts",
            "Implemented strong password policy",
            "Removed inactive accounts",
            "Documented access procedures"
        ],
        bestPractices: [
            "Use meaningful usernames",
            "Never share credentials",
            "Implement role-based access control"
        ],
        tips: [
            "TIP: Create a spreadsheet to track users",
            "TIP: Use group policies for consistent settings"
        ],
        commonMistakes: [
            "Leaving accounts active for terminated employees",
            "Using default passwords",
            "Sharing administrator credentials"
        ],
        estimatedTime: "2-4 hours initial setup",
        relatedControls: ["AC.L2-3.1.2", "IA.L2-2.1.1"]
    },
    {
        id: "AC.L2-3.1.2",
        title: "Establish and manage privileged accounts",
        domain: "AC",
        difficulty: "Hard",
        category: "Active Directory",
        description: "Control who has special administrative rights to your systems.",
        whyItMatters: "Administrators have full access to systems and data.",
        whatToImplement: [
            "Identify who needs administrative privileges",
            "Create separate admin accounts",
            "Monitor admin activity",
            "Regularly review admin access"
        ],
        tools: [
            {
                name: "Active Directory Groups",
                description: "Organize users into groups with specific permissions",
                cost: "Free"
            }
        ],
        stepByStep: [
            {
                step: 1,
                title: "Identify Administrative Needs",
                details: "Determine which roles require administrative privileges."
            },
            {
                step: 2,
                title: "Create Admin Groups",
                details: "Use AD groups to assign privileges rather than individual accounts."
            },
            {
                step: 3,
                title: "Monitor and Review",
                details: "Regularly audit who has admin access and their activities."
            }
        ],
        checklist: [
            "Identified administrative roles",
            "Created privileged user groups",
            "Implemented monitoring for admin accounts",
            "Scheduled regular access reviews"
        ],
        bestPractices: [
            "Use just-in-time administration",
            "Separate admin accounts from regular accounts",
            "Log all administrative activities"
        ],
        tips: [
            "TIP: Use principle of least privilege",
            "TIP: Implement multi-factor authentication for admins"
        ],
        commonMistakes: [
            "Too many users with admin rights",
            "Lack of monitoring for admin activities",
            "Shared admin accounts"
        ],
        estimatedTime: "4-8 hours initial setup",
        relatedControls: ["AC.L2-3.1.1", "IA.L2-2.1.3"]
    },
    {
        id: "AT.L2-3.2.1",
        title: "Provide security awareness training",
        domain: "AT",
        difficulty: "Easy",
        category: "Policy",
        description: "Train employees to recognize and respond to security threats.",
        whyItMatters: "Human error causes most security incidents.",
        whatToImplement: [
            "Develop training curriculum",
            "Conduct regular training sessions",
            "Test employee knowledge",
            "Update training materials regularly"
        ],
        tools: [
            {
                name: "Training Platform",
                description: "Online learning management system",
                cost: "$10-50/user/year"
            }
        ],
        stepByStep: [
            {
                step: 1,
                title: "Assess Current Knowledge",
                details: "Evaluate existing security awareness levels."
            },
            {
                step: 2,
                title: "Create Training Materials",
                details: "Develop content covering phishing, password security, etc."
            },
            {
                step: 3,
                title: "Schedule Regular Sessions",
                details: "Plan ongoing training and refresher courses."
            }
        ],
        checklist: [
            "Developed security training program",
            "Conducted initial training session",
            "Scheduled quarterly refreshers",
            "Tracked employee completion"
        ],
        bestPractices: [
            "Make training engaging and practical",
            "Include simulated phishing tests",
            "Customize content for different roles"
        ],
        tips: [
            "TIP: Use real-world examples",
            "TIP: Gamify training for better engagement"
        ],
        commonMistakes: [
            "One-time training instead of ongoing education",
            "Generic training not tailored to organization",
            "Not measuring effectiveness"
        ],
        estimatedTime: "1-2 hours initial setup",
        relatedControls: ["IR.L2-3.6.1", "PR.L2-3.8.1"]
    },
    {
        id: "AU.L2-3.3.1",
        title: "Create and retain system logs",
        domain: "AU",
        difficulty: "Moderate",
        category: "Network",
        description: "Keep records of system activities for security monitoring.",
        whyItMatters: "Logs help detect and investigate security incidents.",
        whatToImplement: [
            "Enable logging on all systems",
            "Store logs securely",
            "Retain logs for required period",
            "Protect logs from tampering"
        ],
        tools: [
            {
                name: "SIEM Solution",
                description: "Centralized log collection and analysis",
                cost: "$100-500/month"
            }
        ],
        stepByStep: [
            {
                step: 1,
                title: "Enable System Logging",
                details: "Turn on logging for operating systems and applications."
            },
            {
                step: 2,
                title: "Centralize Log Storage",
                details: "Collect logs in a secure, centralized location."
            },
            {
                step: 3,
                title: "Implement Retention Policies",
                details: "Define how long logs should be kept."
            }
        ],
        checklist: [
            "Enabled logging on all systems",
            "Configured centralized log storage",
            "Set up log retention policies",
            "Secured log access and integrity"
        ],
        bestPractices: [
            "Use secure protocols for log transmission",
            "Regularly test log integrity",
            "Implement log rotation policies"
        ],
        tips: [
            "TIP: Use network time protocol for accurate timestamps",
            "TIP: Monitor logs for suspicious patterns"
        ],
        commonMistakes: [
            "Inadequate log retention periods",
            "Logs stored on same systems being monitored",
            "Insufficient log protection"
        ],
        estimatedTime: "2-6 hours initial setup",
        relatedControls: ["IR.L2-3.6.1", "CA.L2-3.12.4"]
    },
    {
        id: "CA.L2-3.12.1",
        title: "Perform vulnerability scans",
        domain: "CA",
        difficulty: "Moderate",
        category: "Network",
        description: "Regularly scan systems to find security weaknesses.",
        whyItMatters: "Unpatched vulnerabilities are common attack vectors.",
        whatToImplement: [
            "Select vulnerability scanning tool",
            "Scan internal systems monthly",
            "Address critical findings quickly",
            "Document scan results"
        ],
        tools: [
            {
                name: "Nessus",
                description: "Popular vulnerability scanner",
                cost: "$2,190/year"
            },
            {
                name: "OpenVAS",
                description: "Open source vulnerability scanner",
                cost: "Free"
            }
        ],
        stepByStep: [
            {
                step: 1,
                title: "Choose Scanning Tool",
                details: "Select appropriate vulnerability scanner for your environment."
            },
            {
                step: 2,
                title: "Schedule Regular Scans",
                details: "Set up automated scans on a monthly basis."
            },
            {
                step: 3,
                title: "Address Findings",
                details: "Prioritize and remediate critical vulnerabilities."
            }
        ],
        checklist: [
            "Selected vulnerability scanning solution",
            "Configured automated monthly scans",
            "Established remediation process",
            "Documented scan results and actions"
        ],
        bestPractices: [
            "Scan both internal and external assets",
            "Prioritize critical vulnerabilities",
            "Verify fixes after patching"
        ],
        tips: [
            "TIP: Schedule scans during maintenance windows",
            "TIP: Focus on critical and high-risk findings first"
        ],
        commonMistakes: [
            "Not addressing scan findings promptly",
            "Scanning only critical systems",
            "Lack of verification after remediation"
        ],
        estimatedTime: "2-4 hours initial setup",
        relatedControls: ["SI.L2-3.14.2", "RA.L2-3.9.1"]
    },
    // Additional controls would continue here to reach 110 total
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('cmmcDashboardLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showDashboard();
    } else {
        showLoginPage();
    }
    
    setupEventListeners();
}

function setupEventListeners() {
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Logout buttons
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('logoutBtnTop').addEventListener('click', handleLogout);
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Commands tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            switchTab(tab);
        });
    });
    
    // Filters
    document.getElementById('difficultyFilter').addEventListener('change', filterControls);
    document.getElementById('categoryFilter').addEventListener('change', filterControls);
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('cmmcDashboardLoggedIn', 'true');
        showDashboard();
        showToast('Login successful!', 'success');
    } else {
        document.getElementById('loginError').style.display = 'block';
        showToast('Invalid credentials', 'error');
    }
}

function handleLogout() {
    localStorage.removeItem('cmmcDashboardLoggedIn');
    localStorage.removeItem('cmmcCompletedControls');
    showLoginPage();
    showToast('Logged out successfully', 'success');
}

function showLoginPage() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    
    // Load initial page
    loadOverviewPage();
}

function navigateToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the clicked link
    const activeLink = document.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show the requested page
    const pageElement = document.getElementById(`${page}Page`);
    if (pageElement) {
        pageElement.classList.add('active');
        pageElement.style.display = 'block';
        
        // Update page title
        document.getElementById('pageTitle').textContent = formatPageTitle(page);
        
        // Load page content
        switch(page) {
            case 'overview':
                loadOverviewPage();
                break;
            case 'all-controls':
                loadAllControlsPage();
                break;
            case 'toc':
                loadTableOfContentsPage();
                break;
            case 'by-difficulty':
                loadByDifficultyPage();
                break;
            case 'by-category':
                loadByCategoryPage();
                break;
            case 'guides':
                loadGuidesPage();
                break;
            case 'commands':
                loadCommandsPage();
                break;
            case 'tools':
                loadToolsPage();
                break;
            case 'best-practices':
                loadBestPracticesPage();
                break;
        }
    }
}

function formatPageTitle(page) {
    const titles = {
        'overview': 'Overview',
        'all-controls': 'All Controls',
        'toc': 'Table of Contents',
        'by-difficulty': 'By Difficulty',
        'by-category': 'By Category',
        'guides': 'Detailed Guides',
        'commands': 'Commands',
        'tools': 'Tools & Resources',
        'best-practices': 'Best Practices'
    };
    return titles[page] || page.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Page loading functions
function loadOverviewPage() {
    updateProgressStats();
}

function loadAllControlsPage() {
    renderControlsList(cmmcControls);
}

function loadTableOfContentsPage() {
    renderDomainsGrid();
}

function loadByDifficultyPage() {
    renderByDifficulty();
}

function loadByCategoryPage() {
    renderByCategory();
}

function loadGuidesPage() {
    // Already rendered in HTML
}

function loadCommandsPage() {
    // Already rendered in HTML
}

function loadToolsPage() {
    // Already rendered in HTML
}

function loadBestPracticesPage() {
    // Already rendered in HTML
}

// Control rendering functions
function renderControlsList(controls) {
    const container = document.getElementById('controlsList');
    container.innerHTML = '';
    
    controls.forEach(control => {
        const completed = isControlCompleted(control.id);
        const controlElement = createControlElement(control, completed);
        container.appendChild(controlElement);
    });
}

function createControlElement(control, completed) {
    const div = document.createElement('div');
    div.className = 'control-item';
    div.innerHTML = `
        <div class="control-header">
            <div class="control-checkbox">
                <input type="checkbox" ${completed ? 'checked' : ''} 
                       onchange="toggleControl('${control.id}', this.checked)">
            </div>
            <div class="control-info">
                <div class="control-id">${control.id}</div>
                <div class="control-title">${control.title}</div>
                <div class="control-badges">
                    <span class="difficulty-badge ${control.difficulty.toLowerCase()}">${control.difficulty}</span>
                    <span class="category-badge">${control.category}</span>
                </div>
            </div>
        </div>
        <div class="control-description">
            <strong>Description:</strong> ${control.description}
        </div>
    `;
    return div;
}

function renderDomainsGrid() {
    const domains = {};
    
    cmmcControls.forEach(control => {
        if (!domains[control.domain]) {
            domains[control.domain] = [];
        }
        domains[control.domain].push(control);
    });
    
    const container = document.getElementById('domainsGrid');
    container.innerHTML = '';
    
    Object.keys(domains).sort().forEach(domain => {
        const domainDiv = document.createElement('div');
        domainDiv.className = 'domain-card';
        domainDiv.innerHTML = `
            <div class="domain-header">
                <div class="domain-name">${domain}</div>
                <div class="domain-count">${domains[domain].length}</div>
            </div>
            <ul class="domain-controls">
                ${domains[domain].map(control => `
                    <li>${control.id} - ${control.title}</li>
                `).join('')}
            </ul>
        `;
        container.appendChild(domainDiv);
    });
}

function renderByDifficulty() {
    const difficulties = ['Easy', 'Moderate', 'Hard'];
    
    difficulties.forEach(difficulty => {
        const section = document.getElementById(`${difficulty.toLowerCase()}Section`);
        if (section) {
            const controls = cmmcControls.filter(c => c.difficulty === difficulty);
            const container = section.querySelector('.controls-list');
            container.innerHTML = '';
            
            controls.forEach(control => {
                const completed = isControlCompleted(control.id);
                const controlElement = createControlElement(control, completed);
                container.appendChild(controlElement);
            });
        }
    });
}

function renderByCategory() {
    const categories = ['Active Directory', 'Network', 'Physical', 'Mobile', 'Policy'];
    
    categories.forEach(category => {
        const section = document.getElementById(`${category.toLowerCase().replace(' ', '')}Section`);
        if (section) {
            const controls = cmmcControls.filter(c => c.category === category);
            const container = section.querySelector('.controls-list');
            container.innerHTML = '';
            
            controls.forEach(control => {
                const completed = isControlCompleted(control.id);
                const controlElement = createControlElement(control, completed);
                container.appendChild(controlElement);
            });
        }
    });
}

// Progress functions
function updateProgressStats() {
    const completedCount = getCompletedControls().length;
    const totalCount = cmmcControls.length;
    const progress = Math.round((completedCount / totalCount) * 100);
    
    // Update main progress
    document.getElementById('overallProgress').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${progress}%`;
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('totalCount').textContent = totalCount;
    document.getElementById('remainingCount').textContent = totalCount - completedCount;
    
    // Update difficulty breakdown
    updateDifficultyBreakdown();
}

function updateDifficultyBreakdown() {
    const easyControls = cmmcControls.filter(c => c.difficulty === 'Easy');
    const moderateControls = cmmcControls.filter(c => c.difficulty === 'Moderate');
    const hardControls = cmmcControls.filter(c => c.difficulty === 'Hard');
    
    const easyCompleted = easyControls.filter(c => isControlCompleted(c.id)).length;
    const moderateCompleted = moderateControls.filter(c => isControlCompleted(c.id)).length;
    const hardCompleted = hardControls.filter(c => isControlCompleted(c.id)).length;
    
    const easyProgress = easyControls.length > 0 ? Math.round((easyCompleted / easyControls.length) * 100) : 0;
    const moderateProgress = moderateControls.length > 0 ? Math.round((moderateCompleted / moderateControls.length) * 100) : 0;
    const hardProgress = hardControls.length > 0 ? Math.round((hardCompleted / hardControls.length) * 100) : 0;
    
    document.getElementById('easyProgress').style.width = `${easyProgress}%`;
    document.getElementById('easyProgressText').textContent = `${easyProgress}%`;
    
    document.getElementById('moderateProgress').style.width = `${moderateProgress}%`;
    document.getElementById('moderateProgressText').textContent = `${moderateProgress}%`;
    
    document.getElementById('hardProgress').style.width = `${hardProgress}%`;
    document.getElementById('hardProgressText').textContent = `${hardProgress}%`;
}

// Control management functions
function toggleControl(controlId, completed) {
    let completedControls = JSON.parse(localStorage.getItem('cmmcCompletedControls') || '[]');
    
    if (completed) {
        if (!completedControls.includes(controlId)) {
            completedControls.push(controlId);
        }
    } else {
        completedControls = completedControls.filter(id => id !== controlId);
    }
    
    localStorage.setItem('cmmcCompletedControls', JSON.stringify(completedControls));
    
    // Update progress stats
    updateProgressStats();
    
    // Show toast notification
    const control = cmmcControls.find(c => c.id === controlId);
    if (control) {
        showToast(`${completed ? 'Completed' : 'Reverted'}: ${control.title}`, 'success');
    }
}

function isControlCompleted(controlId) {
    const completedControls = JSON.parse(localStorage.getItem('cmmcCompletedControls') || '[]');
    return completedControls.includes(controlId);
}

function getCompletedControls() {
    const completedControls = JSON.parse(localStorage.getItem('cmmcCompletedControls') || '[]');
    return completedControls;
}

// Filter functions
function filterControls() {
    const difficulty = document.getElementById('difficultyFilter').value;
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = cmmcControls;
    
    if (difficulty) {
        filtered = filtered.filter(c => c.difficulty === difficulty);
    }
    
    if (category) {
        filtered = filtered.filter(c => c.category === category);
    }
    
    renderControlsList(filtered);
}

// Tab functions
function switchTab(tab) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    // Activate selected tab
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}Tab`).classList.add('active');
    document.getElementById(`${tab}Tab`).style.display = 'block';
}

// Utility functions
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        showToast('Failed to copy: ' + err, 'error');
    });
}
