// Portfolio Data & Interactive Logic for Kalluru Hruday Kumar Reddy
const PROJECTS = [
  {
    id: 1,
    title: "EDA - Churn Data Analysis",
    categories: ["Python"],
    tag: "Python · EDA",
    github: "https://github.com/hruday59/EDA-ChurnDataAnalysis-Python",
    tools: ["Python", "pandas", "Matplotlib", "Seaborn"],
    problem: "Analyze employee turnover patterns and identify employee categories using count plots.",
    approach: "Used count plots with Seaborn and Matplotlib to compare employee churn across different categories.",
    outcome: "Visualized churn patterns across PhoneService, OnlineSecurity and TechSupport."
  },
  {
    id: 2,
    title: "Data Cleaning",
    categories: ["Python"],
    tag: "Python · pandas",
    github: "https://github.com/hruday59/dataCleaning-Pandas-project1-Airbnb_data-",
    tools: ["pandas", "Python"],
    problem: "Raw business data often contains missing values, duplicate records and inconsistent formats.",
    approach: "Used pandas to handle missing values, remove duplicates, correct data types and standardize records.",
    outcome: "Prepared a clean and reliable dataset for further analysis and visualization."
  },
  {
    id: 3,
    title: "E-commerce Sales Analysis",
    categories: ["Power BI", "SQL"],
    tag: "Power BI · SQL",
    github: "https://github.com/hruday59/e-commerce-sales-analysis-using-powebi",
    tools: ["SQL", "Power Query", "Power BI", "DAX"],
    problem: "Understand sales performance, identify profitable products and categories, and find low-sales regions.",
    approach: "Cleaned data in Power Query, created DAX measures and built dashboards for sales, profit, categories, regions and monthly trends.",
    outcome: "KPIs, monthly sales trends, YoY growth, profit margin, sales by category, regional analysis and shipping analysis."
  },
  {
    id: 4,
    title: "Amazon Sales Analysis",
    categories: ["Power BI"],
    tag: "Power BI · DAX",
    github: "https://github.com/hruday59/AMAZON-SALES-ANALYSIS--POWER-BI-",
    tools: ["Power BI", "Power Query", "DAX"],
    problem: "Understand sales performance and identify profitable products and categories in an Amazon dataset.",
    approach: "Cleaned data in Power Query, created DAX measures (time intelligence and key functions) and built dashboards.",
    outcome: "YTD sales, QTD sales, YTD products sold and YTD reviews."
  },
  {
    id: 5,
    title: "EDA and Performance Analysis",
    categories: ["SQL"],
    tag: "SQL (MySQL)",
    github: "https://github.com/hruday59/sql_eda_analysis_project1",
    tools: ["SQL (MySQL)", "CTEs", "Window Functions", "Joins"],
    problem: "Understand customer buying behaviour, product performance and sales trends across multiple tables.",
    approach: "Used SQL (MySQL) joins, aggregate functions, subqueries, CTEs and window functions on Customers, Products, Orders and Order Details tables.",
    outcome: "Database, dimensions, date and measures exploration; magnitude and ranking analysis."
  },
  {
    id: 6,
    title: "Data Exploration",
    categories: ["SQL"],
    tag: "SQL (MySQL)",
    github: "https://github.com/hruday59/Mysql_Advance_EDA_Analysis_project2",
    tools: ["SQL (MySQL)", "Window Functions", "CTEs", "Subqueries"],
    problem: "Understand customer buying behaviour, product performance and sales trends to find growth opportunities.",
    approach: "Performed EDA with SQL (MySQL) aggregate functions, joins, subqueries, CTEs and window functions.",
    outcome: "Change-over-time, cumulative, performance, part-to-whole analysis and data segmentation."
  },
  {
    id: 7,
    title: "Sales Profit Dashboard",
    categories: ["Excel"],
    tag: "Excel · Power Query",
    github: "https://github.com/hruday59/Sales-Profit_Dashboard_excel_project_1",
    tools: ["Excel", "Power Query", "Pivot Tables"],
    problem: "Understand profit by product, category and region to find where the business earns and loses money.",
    approach: "Cleaned the data in Power Query and created the dashboard in Excel.",
    outcome: "KPI performance tracking and an interactive profit dashboard."
  },
  {
    id: 8,
    title: "Billionaire Dataset Analysis",
    categories: ["Excel"],
    tag: "Excel · Kaggle",
    github: "https://github.com/hruday59/Excel_project_Billioniare_dataset",
    tools: ["Excel", "Power Query", "Kaggle Dataset"],
    problem: "Understand global billionaire wealth and identify leading individuals, countries and industries.",
    approach: "Collected the dataset from Kaggle, cleaned it in Power Query and built a dashboard.",
    outcome: "An interactive dashboard of billionaire data analysis."
  }
];

const SKILLS_MATRIX = [
  {
    category: "SQL (MySQL)",
    items: ["Joins", "CTEs", "Window Functions", "Subqueries", "Transactions", "Procedures", "Views"]
  },
  {
    category: "Programming & Python",
    items: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "OOP Concepts", "File Handling in Python", "DSA in Java", "Jupyter Notebook", "VS Code"]
  },
  {
    category: "Power BI & DAX Functions",
    items: [
      "Power Query", "Data Modeling", "Report Handling", "Dashboards",
      "CALCULATE", "SUM", "SUMX", "AVERAGE", "DISTINCTCOUNT", "FILTER", "ALL",
      "RELATED", "LOOKUPVALUE", "IF", "SWITCH", "DIVIDE",
      "TOTALYTD", "TOTALQTD", "SAMEPERIODLASTYEAR", "DATEADD"
    ]
  },
  {
    category: "Microsoft Excel",
    items: ["Pivot Tables", "Power Query", "Lookups", "INDEX + MATCH", "Visualization", "Conditional Formulas", "Dashboards"]
  },
  {
    category: "Analytics & Extra Concepts",
    items: [
      "Data Cleaning", "EDA", "Statistics", "Probability", "Churn Analysis",
      "ETL Understanding", "Data Warehousing", "Data Modeling", "KPIs",
      "Business Metrics", "Maths Foundation", "Aptitude & Logical Problem Solving"
    ]
  },
  {
    category: "Tools, Git & Soft Skills",
    items: [
      "Git", "GitHub (Pushing Code, File & Code Handling, Error Management, README Files)",
      "Google Sheets", "Cadence Virtuoso", "MATLAB", "Proteus", "Vivado",
      "Communication", "Problem Solving", "English", "Telugu"
    ]
  }
];

const CERTIFICATIONS = [
  { title: "Data Science and Data Engineering", issuer: "SkillDzire Technologies", year: "2026", category: "Data & AI" },
  { title: "Data Science Basics", issuer: "SkillUpRise", year: "2025", category: "Data & AI" },
  { title: "Machine Learning Basics", issuer: "SkillUpRise", year: "2025", category: "Data & AI" },
  { title: "Artificial Intelligence Basics", issuer: "SkillUpRise", year: "2025", category: "Data & AI" },
  { title: "Introduction to Artificial Intelligence", issuer: "Great Learning", year: "2024", category: "Data & AI" },
  { title: "Models and Platforms of AI", issuer: "edX", year: "2024", category: "Data & AI" },
  { title: "Prompt Engineering", issuer: "edX", year: "2024", category: "Data & AI" },
  { title: "Legacy JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2025", category: "Programming & Web" },
  { title: "Programming in Java", issuer: "NPTEL", year: "2025", category: "Programming & Web" },
  { title: "Web Development Course", issuer: "Code With Swaroop", year: "2025", category: "Programming & Web" },
  { title: "Internship Common Aptitude Test (ICAT)", issuer: "ICAT", year: "2026", category: "Aptitude & Core ECE" },
  { title: "Common Aptitude Test (NCAT)", issuer: "Naukri", year: "2026", category: "Aptitude & Core ECE" },
  { title: "System Design through Verilog", issuer: "NPTEL", year: "2024", category: "Aptitude & Core ECE" },
  { title: "PCB Design", issuer: "NPTEL", year: "2025", category: "Aptitude & Core ECE" },
  { title: "Introduction to IoT", issuer: "NPTEL", year: "2026", category: "Aptitude & Core ECE" }
];

// Theme Toggle
const htmlEl = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

function setTheme(isDark) {
  htmlEl.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀" : "☾";
}

const savedTheme = localStorage.getItem("hruday-theme");
setTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const nextDark = !htmlEl.classList.contains("dark");
  setTheme(nextDark);
  localStorage.setItem("hruday-theme", nextDark ? "dark" : "light");
});

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// Toast & Clipboard
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function copyText(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(label)).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast(label);
  } catch (e) {
    showToast("Copy failed");
  }
  document.body.removeChild(ta);
}

// Render Projects
function renderProjects(filter = "All") {
  const grid = document.getElementById("projects-grid");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(filter));

  grid.innerHTML = list.map(p => `
    <article class="project-card">
      <div>
        <div class="project-top">
          <span class="project-tag">#0${p.id} · ${p.tag}</span>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">GitHub</a>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-box">
          <strong>Business Problem</strong>
          <span>${p.problem}</span>
        </div>
        <div class="project-box">
          <strong>Key Outcome</strong>
          <span>${p.outcome}</span>
        </div>
      </div>
      <div>
        <div class="tool-chips">
          ${p.tools.map(t => `<span class="tool-chip">${t}</span>`).join("")}
        </div>
        <div class="project-footer">
          <span class="cert-meta">Project #${p.id}</span>
          <button type="button" class="btn-primary" onclick="openModal(${p.id})">View Case Study</button>
        </div>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll("[data-project-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-project-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.projectFilter);
  });
});

// Modal
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const closeModalBtn = document.getElementById("close-modal");

function openModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;
  modalContent.innerHTML = `
    <span class="project-tag">#0${p.id} · ${p.tag}</span>
    <h3 class="project-title">${p.title}</h3>
    <div class="project-box"><strong>Business Problem</strong><span>${p.problem}</span></div>
    <div class="project-box"><strong>Analytical Approach</strong><span>${p.approach}</span></div>
    <div class="project-box"><strong>Key Outcome</strong><span>${p.outcome}</span></div>
    <div class="tool-chips" style="margin-top:14px;">
      ${p.tools.map(t => `<span class="tool-chip">${t}</span>`).join("")}
    </div>
    <div class="project-footer" style="margin-top:18px;">
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-primary">Open Repository</a>
      <button type="button" class="btn-secondary" onclick="copyText('${p.github}', 'Repository URL copied!')">Copy Link</button>
    </div>
  `;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// Render Skills
function renderSkills(query = "") {
  const grid = document.getElementById("skills-grid");
  const q = query.trim().toLowerCase();

  const groups = SKILLS_MATRIX.map(g => {
    if (!q) return g;
    if (g.category.toLowerCase().includes(q)) return g;
    const matched = g.items.filter(i => i.toLowerCase().includes(q));
    return matched.length ? { ...g, items: matched } : null;
  }).filter(Boolean);

  if (!groups.length) {
    grid.innerHTML = `<div class="skill-card"><p class="cert-meta">No skills matched "${query}".</p></div>`;
    return;
  }

  grid.innerHTML = groups.map(g => `
    <div class="skill-card">
      <h3>${g.category}</h3>
      <div class="tool-chips">
        ${g.items.map(item => `<span class="tool-chip">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

document.getElementById("skill-search").addEventListener("input", e => {
  renderSkills(e.target.value);
});

// Render Certifications
function renderCertifications(filter = "All") {
  const grid = document.getElementById("certs-grid");
  const list = filter === "All" ? CERTIFICATIONS : CERTIFICATIONS.filter(c => c.category === filter);

  grid.innerHTML = list.map(c => `
    <div class="cert-card">
      <div>
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-meta">${c.issuer} · ${c.category}</p>
      </div>
      <span class="cert-year">${c.year}</span>
    </div>
  `).join("");
}

document.querySelectorAll("[data-cert-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-cert-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCertifications(btn.dataset.certFilter);
  });
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("sender-name").value.trim();
  const role = document.getElementById("sender-role").value.trim();
  const msg = document.getElementById("sender-message").value.trim();
  const subject = encodeURIComponent(`Data Analyst Opportunity (${role}) - ${name}`);
  const body = encodeURIComponent(`Hi Hruday,

${msg}

Best regards,
${name}
Role: ${role}`);
  window.location.href = `mailto:vasanthreddy251@gmail.com?subject=${subject}&body=${body}`;
  showToast("Opening email client...");
});

document.getElementById("copy-message-btn").addEventListener("click", () => {
  const name = document.getElementById("sender-name").value.trim() || "Recruiter";
  const role = document.getElementById("sender-role").value.trim() || "Data Analyst Role";
  const msg = document.getElementById("sender-message").value.trim() || "Hi Hruday, we would like to connect regarding a Data Analyst opportunity.";
  copyText(`Hi Hruday,

Role: ${role}
${msg}

— ${name}`, "Message copied!");
});

// Initial Render
renderProjects("All");
renderSkills("");
renderCertifications("All");
