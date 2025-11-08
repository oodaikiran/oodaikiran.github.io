// Project Data
const projects = [
    {
        company: "Bunge",
        title: "Cognitive AI Agent for Precision Billback",
        impact: "$1.5M Recovery",
        description: "AI Agent automating billback generation and compliance, reducing processing time from 30 minutes to 2 minutes per transaction with 99% accuracy.",
        technologies: ["Generative AI", "Agentic AI", "SAP Integration", "RPA"],
        metrics: { timeReduction: "90%", accuracy: "99%", volume: "1000+/month" }
    },
    {
        company: "Bunge",
        title: "Agentic AI Cash Application",
        impact: "$100K Savings",
        description: "Intelligent remittance matching and adaptive exception management for accounts receivable transformation with 25x efficiency improvement.",
        technologies: ["Machine Learning", "Real-time Analytics", "SAP", "Python"],
        metrics: { efficiency: "25x", accuracy: "99.5%", automation: "85%" }
    },
    {
        company: "Bunge",
        title: "Travel & Expense AI Automation",
        impact: "5400+ Reports/Month",
        description: "AI-powered T&E management processing 5400+ reports monthly across 15 countries with 100% audit coverage and 2-week implementation.",
        technologies: ["AI Analytics", "Process Automation", "SAP", "Multi-country"],
        metrics: { coverage: "100%", countries: "15", speed: "2-week implementation" }
    },
    {
        company: "Bunge",
        title: "Automated Contract Administration",
        impact: "$80K Value",
        description: "AI-driven contract creation, validation, and compliance monitoring achieving 100% accuracy and 3000+ hours savings.",
        technologies: ["NLP", "Computer Vision", "SAP"],
        metrics: { accuracy: "100%", timeSavings: "3000 hours", compliance: "100%" }
    },
    {
        company: "Bunge",
        title: "Fleeting Charges AI Recovery",
        impact: "$1.5M Recovered",
        description: "AI system automating invoice generation and collection for overdue fleet charges with 95% automation and 98% accuracy.",
        technologies: ["GenAI", "Document Processing", "SAP", "Automation"],
        metrics: { recovery: "$1.5M", automation: "95%", accuracy: "98%" }
    },
    {
        company: "Bunge",
        title: "Tariff Update Automation",
        impact: "3000 Hours Saved",
        description: "AI automation adapting to volatile trade policies, completing tariff updates in 72 hours instead of months, mitigating significant financial risk.",
        technologies: ["AI Automation", "Policy Adaptation", "SAP"],
        metrics: { timeSavings: "3000 hours", speed: "72 hours", risk: "Mitigated" }
    },
    {
        company: "Bunge",
        title: "Duplicate Audit AI",
        impact: "Cost Protection",
        description: "AI-integrated duplicate payment detection reducing incidents by 60-90% and preventing cash leakage through machine learning.",
        technologies: ["Machine Learning", "Semantic Matching", "SAP"],
        metrics: { reduction: "60-90%", precision: "High", recall: "High" }
    },
    {
        company: "Bunge",
        title: "Freight Accrual Automation",
        impact: "$40K Savings",
        description: "AI agent automating Bill of Lading processing with 90% reduction in process time and 99% improved accuracy.",
        technologies: ["AI Automation", "SAP Integration", "Document Processing"],
        metrics: { timeReduction: "90%", accuracy: "99%", savings: "$40K" }
    }
];

// AI Assistant Knowledge Base
const knowledgeBase = {
    "experience": "I have 20+ years in AI and digital transformation, currently leading Intelligent Automation for Bunge's 500+ member GBS organization. Previously at HighRadius, Genpact, Cognizant, HSBC, Capgemini, and Dell.",
    "achievements": "Delivered $240M+ business impact, led 150+ AI solutions, achieved 50x ROI on automation projects, and recovered $1.5M through AI-powered financial recovery.",
    "skills": "AI Strategy, Digital Transformation, Intelligent Automation (RPA, ML, AI), SAP Integration, Team Leadership, Global Program Management, Finance Transformation.",
    "education": "Bachelor of Commerce from Osmania University, Certified Black Belt (QAI), CBAP, UiPath Advanced Developer, Green Belt (Capgemini).",
    "contact": "You can reach me at oodaikiran@gmail.com or +91 8886 99 0088. Based in Mohali, Punjab, open to global opportunities.",
    "bunge": "At Bunge, I lead AI Transformation for Global Business Services, overseeing 500+ team members. Delivered $1.5M+ in AI projects in H1 2025 with 25x productivity improvements.",
    "projects": "I've led numerous AI projects including Cash Application AI, Billback Automation, Contract AI, Travel & Expense AI, Fleeting Charges Recovery, and Tariff Update automation delivering 90%+ efficiency gains.",
    "journey": "My 20+ year journey spans Bunge (AI Transformation), HighRadius (Customer Success), Genpact (Digital Transformation), Cognizant (Intelligent Automation), HSBC (Finance Transformation), Capgemini (Process Excellence), and Dell (Process Automation).",
    "default": "I'm Uday Kiran's AI assistant. I can tell you about his 20+ years of experience, achievements, skills, education, and specific projects. What would you like to know?"
};

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.createThemeToggle();
        this.loadThemePreference();
    }

    createThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        
        toggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        this.themeToggle = toggle;
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('preferredTheme', this.currentTheme);
        
        // Update toggle icon
        this.themeToggle.innerHTML = this.currentTheme === 'dark' ? '🌙' : '☀️';
    }

    loadThemePreference() {
        const savedTheme = localStorage.getItem('preferredTheme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            document.documentElement.setAttribute('data-theme', this.currentTheme);
            this.themeToggle.innerHTML = this.currentTheme === 'dark' ? '🌙' : '☀️';
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeMetrics();
    loadProjects();
    initializeChat();
    initializeAnimations();
    initializeNavigation();
    initializeRoadmapAnimations();
    initializeContactAnimations();
    
    // Initialize Phase 2A features
    const themeManager = new ThemeManager();
    initializePDFExport();
    initialize3DLogos();
});

// Fixed Metrics Counter
function initializeMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    
    metrics.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current = Math.min(increment * step, target);
            metric.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
            
            if (step >= steps) {
                clearInterval(timer);
                metric.textContent = target + (target >= 100 ? '+' : '');
            }
        }, duration / steps);
    });
    
    // Animate skill meters
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(skill => {
        const width = skill.getAttribute('data-skill') + '%';
        setTimeout(() => {
            skill.style.width = width;
        }, 500);
    });
}

// Load Projects into Matrix
function loadProjects() {
    const matrix = document.getElementById('projectMatrix');
    matrix.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-company">${project.company}</div>
                <div class="project-impact">${project.impact}</div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        
        matrix.appendChild(projectCard);
    });
}

// Improved Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Animations
function initializeAnimations() {
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero animations
        gsap.from('.hero-title', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.metric-card', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Dashboard animations
        gsap.from('.dashboard-card', {
            duration: 1,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.dashboard-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Project animations
        gsap.from('.project-card', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.projects-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

// Roadmap Animations
function initializeRoadmapAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.roadmap-item', {
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.journey-section',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

// Contact Animations
function initializeContactAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.contact-card', {
            duration: 1,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

// 3D Logo Interactions
function initialize3DLogos() {
    const logos = document.querySelectorAll('.logo-orb-3d');
    
    logos.forEach(logo => {
        logo.addEventListener('click', function() {
            const company = this.getAttribute('data-company');
            const companyInfo = {
                'bunge': 'Current: AI Transformation Lead at Bunge (2023-Present)',
                'highradius': 'Senior Manager at HighRadius (2021-2023)',
                'cognizant': 'Manager at Cognizant (2016-2021)',
                'genpact': 'Senior Manager at Genpact (2021)',
                'hsbc': 'Assistant Manager at HSBC (2011-2014)',
                'capgemini': 'Team Lead at Capgemini (2009-2011)',
                'dell': 'Team Lead at Dell (2005-2007)'
            };
            
            if (companyInfo[company]) {
                addAIMessage(companyInfo[company] + " - Want to know more about my experience there?");
                document.querySelector('.ai-chat-interface').classList.add('active');
            }
        });
    });
}

// PDF Export Functionality
function initializePDFExport() {
    const exportButton = document.getElementById('exportPdf');
    
    exportButton.addEventListener('click', function() {
        // Create a simple PDF version URL
        const pdfUrl = 'https://aquamarine-seahorse-9b8802.netlify.app/resume.html';
        
        // Open in new tab for printing
        window.open(pdfUrl, '_blank');
        
        // Optional: Show download message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--glass);
            backdrop-filter: blur(20px);
            padding: 1.5rem 2rem;
            border-radius: 15px;
            border: 1px solid var(--glass-border);
            z-index: 10000;
            font-weight: 600;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        message.innerHTML = `
            <div>📄 PDF Resume Opened</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">Use browser print (Ctrl+P) to save as PDF</div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    });
}

// AI Chat Assistant
function initializeChat() {
    const toggle = document.querySelector('.ai-toggle');
    const chatInterface = document.querySelector('.ai-chat-interface');
    
    toggle.addEventListener('click', () => {
        chatInterface.classList.toggle('active');
    });
    
    // Add welcome message
    addAIMessage("Hello! I'm Uday's AI assistant. Ask me about his 20+ years of experience, AI projects, or career journey.");
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        processMessage(message);
        input.value = '';
    }
}

function addUserMessage(text) {
    const messages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function addAIMessage(text) {
    const messages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    let response = knowledgeBase.default;
    
    // Enhanced keyword matching
    if (lowerMessage.includes('experience') || lowerMessage.includes('years') || lowerMessage.includes('background')) {
        response = knowledgeBase.experience;
    } else if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplishment')) {
        response = knowledgeBase.achievements;
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('expertise') || lowerMessage.includes('what can you do')) {
        response = knowledgeBase.skills;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('certification')) {
        response = knowledgeBase.education;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('number')) {
        response = knowledgeBase.contact;
    } else if (lowerMessage.includes('bunge')) {
        response = knowledgeBase.bunge;
    } else if (lowerMessage.includes('project')) {
        response = knowledgeBase.projects;
    } else if (lowerMessage.includes('journey') || lowerMessage.includes('career') || lowerMessage.includes('timeline')) {
        response = knowledgeBase.journey;
    }
    
    // Simulate typing delay
    setTimeout(() => {
        addAIMessage(response);
    }, 1000);
}

// Keyboard shortcut for AI chat
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const chatInterface = document.querySelector('.ai-chat-interface');
        chatInterface.classList.toggle('active');
        if (chatInterface.classList.contains('active')) {
            document.getElementById('userInput').focus();
        }
    }
});