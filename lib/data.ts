// ============================================================
// PORTFOLIO DATA — Replace all placeholder values with your
// actual CV information. Look for [REPLACE_...] markers.
// ============================================================

export const personalInfo = {
  name: "Akhil Raj", // [REPLACE_NAME]
  title: "ESG & Sustainability Reporting Professional",
  tagline: "ESG  ·  CSRD  ·  EU Taxonomy  ·  Power BI  ·  Financial Controlling",
  email: "fkakhilraj@gmail.com", // [REPLACE_EMAIL]
  linkedin: "https://linkedin.com/in/akhilrajkrajan", // [REPLACE_LINKEDIN]
  location: "Europe", // [REPLACE_LOCATION — e.g. "Frankfurt, Germany"]
  bio: `Results-driven sustainability and ESG professional with expertise in CSRD, EU Taxonomy compliance,
and data-driven reporting. Skilled in translating complex regulatory frameworks into actionable
business insights through advanced Power BI dashboards, financial controlling, and enterprise
reporting systems. Committed to driving the transition toward a sustainable, low-carbon economy
through rigorous data analysis and stakeholder engagement.`,
  shortBio: "Bridging sustainability strategy with financial rigour — turning ESG data into executive decisions.",
  profileImage: "/profile.jpg", // [REPLACE_PROFILE_IMAGE] — place your photo at /public/profile.jpg
  resumeUrl: "/resume.pdf",     // [REPLACE_RESUME]        — place your CV PDF at /public/resume.pdf
  yearsExperience: 7,           // [REPLACE_YEARS]
  projectsCompleted: 25,        // [REPLACE_PROJECTS]
  certificationsCount: 8,       // [REPLACE_CERTIFICATIONS]
  technologiesCount: 20,        // [REPLACE_TECHNOLOGIES]
};

export const stats = [
  { label: "Years Experience", value: "7+",  icon: "briefcase" },
  { label: "ESG Projects",     value: "25+", icon: "leaf" },
  { label: "Technologies",     value: "20+", icon: "cpu" },
  { label: "Certifications",   value: "8",   icon: "award" },
];

export const experiences = [
  {
    company: "[REPLACE_COMPANY_1]", // e.g. "Deloitte" or "KPMG"
    position: "Senior ESG Consultant", // [REPLACE_POSITION]
    period: "2022 – Present",          // [REPLACE_PERIOD]
    location: "Frankfurt, Germany",    // [REPLACE_LOCATION]
    type: "Full-time",
    description:
      "Leading CSRD compliance assessments and EU Taxonomy alignment projects for DAX-listed clients across the manufacturing and energy sectors.",
    responsibilities: [
      "Developed CSRD-compliant sustainability reporting frameworks aligned with ESRS standards",
      "Built Power BI dashboards integrating ESG KPIs with SAP financial data for real-time reporting",
      "Conducted EU Taxonomy eligibility and alignment assessments for capital allocation decisions",
      "Automated data collection workflows using Power Query and Power Automate, reducing reporting time by 60%",
      "Collaborated with C-suite and sustainability teams to embed ESG into corporate strategy",
    ],
    achievements: [
      "Delivered EU Taxonomy alignment report covering €2.3B capex portfolio",
      "Reduced manual ESG data collection effort by 60% through automation",
      "Supported 5 clients in achieving CSRD readiness ahead of 2024 deadline",
    ],
    technologies: ["Power BI", "CSRD", "EU Taxonomy", "SAP", "Power Automate", "Excel", "ESRS"],
    color: "#3b82f6",
  },
  {
    company: "[REPLACE_COMPANY_2]",
    position: "ESG Reporting Analyst",
    period: "2020 – 2022",
    location: "Munich, Germany",
    type: "Full-time",
    description:
      "Managed end-to-end sustainability reporting processes and designed data visualization solutions for environmental and social performance metrics.",
    responsibilities: [
      "Prepared GRI and TCFD-aligned sustainability reports for annual disclosure",
      "Designed financial and ESG KPI dashboards in Power BI for board-level reporting",
      "Implemented carbon accounting methodology aligned with GHG Protocol",
      "Coordinated with cross-functional teams to collect, validate, and consolidate ESG data",
      "Supported financial controlling activities including budget planning and variance analysis",
    ],
    achievements: [
      "Published first integrated sustainability report aligned with GRI Standards",
      "Reduced carbon data collection cycle from 8 weeks to 2 weeks",
      "Achieved 40% improvement in data accuracy through automated validation",
    ],
    technologies: ["Power BI", "GRI Standards", "TCFD", "GHG Protocol", "Excel", "SQL", "Power Query"],
    color: "#1e40af",
  },
  {
    company: "[REPLACE_COMPANY_3]",
    position: "Financial Controller – Sustainability",
    period: "2018 – 2020",
    location: "Vienna, Austria",
    type: "Full-time",
    description:
      "Integrated sustainability metrics into financial controlling processes and built analytical models for green investment assessment.",
    responsibilities: [
      "Designed and maintained financial models for sustainability-linked KPIs",
      "Produced monthly management reports combining financial and non-financial performance data",
      "Supported annual budgeting and forecasting processes with sustainability scenario analysis",
      "Developed SAP-based reporting workflows for energy and resource consumption tracking",
      "Prepared presentations for senior leadership and investor relations teams",
    ],
    achievements: [
      "Built first green capex tracking model, covering 15+ projects worth €500M",
      "Automated monthly reporting pack, saving 3 days per reporting cycle",
      "Implemented dual materiality assessment framework for strategic planning",
    ],
    technologies: ["SAP", "Excel", "Power BI", "Financial Modelling", "DAX", "SQL"],
    color: "#0f2040",
  },
];

export const skills = [
  {
    category: "ESG & Sustainability",
    icon: "leaf",
    color: "#3b82f6",
    items: [
      { name: "CSRD / ESRS",       level: 95 },
      { name: "EU Taxonomy",        level: 90 },
      { name: "GRI Standards",      level: 88 },
      { name: "TCFD / TNFD",        level: 82 },
      { name: "GHG Protocol",       level: 85 },
      { name: "Double Materiality", level: 88 },
    ],
  },
  {
    category: "Data & Analytics",
    icon: "bar-chart",
    color: "#1e40af",
    items: [
      { name: "Power BI",           level: 95 },
      { name: "Power Query / M",    level: 90 },
      { name: "DAX",                level: 88 },
      { name: "Excel (Advanced)",   level: 95 },
      { name: "SQL",                level: 80 },
      { name: "Power Automate",     level: 82 },
    ],
  },
  {
    category: "Finance",
    icon: "trending-up",
    color: "#0f2040",
    items: [
      { name: "Financial Controlling", level: 90 },
      { name: "Budgeting & Forecasting", level: 88 },
      { name: "Financial Modelling",  level: 85 },
      { name: "Variance Analysis",    level: 90 },
      { name: "Management Reporting", level: 92 },
      { name: "Capital Allocation",   level: 80 },
    ],
  },
  {
    category: "Enterprise Systems",
    icon: "server",
    color: "#1e3f6e",
    items: [
      { name: "SAP (FI/CO)",    level: 82 },
      { name: "Microsoft 365",  level: 95 },
      { name: "SharePoint",     level: 80 },
      { name: "Teams / Azure",  level: 78 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "EU Taxonomy Alignment Dashboard",
    category: "ESG Reporting",
    description:
      "Built an end-to-end Power BI dashboard enabling real-time EU Taxonomy eligibility and alignment tracking across a €2.3B capital expenditure portfolio.",
    longDescription:
      "Designed and implemented a comprehensive EU Taxonomy reporting solution integrating SAP financial data with ESG metrics. The dashboard enables finance and sustainability teams to monitor taxonomy alignment in real time, supporting regulatory disclosure and investor relations.",
    technologies: ["Power BI", "EU Taxonomy", "SAP", "Power Query", "DAX", "Excel"],
    impact: "Covered €2.3B capex portfolio; reduced reporting time by 65%",
    results: [
      "Automated taxonomy eligibility screening for 200+ economic activities",
      "Reduced manual data processing from 3 weeks to 2 days",
      "Supported annual NFRD/CSRD regulatory disclosure",
      "Adopted by 3 additional business units after initial rollout",
    ],
    color: "#3b82f6", icon: "leaf", badge: "Featured",
  },
  {
    id: 2,
    title: "CSRD Readiness Assessment Framework",
    category: "ESG Strategy",
    description:
      "Developed a structured CSRD gap analysis and readiness roadmap framework, enabling clients to achieve compliance with ESRS standards before mandatory deadlines.",
    longDescription:
      "Created a proprietary assessment methodology covering all 12 ESRS topical and cross-cutting standards. The framework includes double materiality assessment tools, data gap analysis, and a phased implementation roadmap aligned with EFRAG guidance.",
    technologies: ["CSRD", "ESRS", "Double Materiality", "Excel", "Power BI", "Stakeholder Engagement"],
    impact: "Helped 5+ clients achieve CSRD readiness; reduced compliance risk",
    results: [
      "Assessed 50+ material sustainability topics per client",
      "Designed custom ESRS data collection templates",
      "Facilitated stakeholder workshops with boards and audit committees",
      "Zero findings in external assurance reviews",
    ],
    color: "#1e40af", icon: "shield-check", badge: "Impact",
  },
  {
    id: 3,
    title: "Integrated ESG Power BI Platform",
    category: "Data & Analytics",
    description:
      "Architected a multi-source Power BI platform consolidating environmental, social, and governance KPIs with financial performance data for executive reporting.",
    longDescription:
      "Built a scalable Power BI semantic model integrating 8+ data sources including SAP, Excel files, and external benchmark datasets. Delivered role-based dashboards for the C-suite, sustainability team, and investor relations, with automated monthly refresh.",
    technologies: ["Power BI", "DAX", "Power Query", "SAP", "SQL", "Azure Data Factory"],
    impact: "300+ daily active users; saved 40 hours/month in manual reporting",
    results: [
      "Consolidated 8 disparate data sources into single reporting layer",
      "Created 15+ report pages with drill-through and bookmarks",
      "Automated monthly data refresh and email distribution",
      "Received 'Best Digital Innovation' award internally",
    ],
    color: "#0f2040", icon: "bar-chart", badge: "Scale",
  },
  {
    id: 4,
    title: "Green Finance Capex Tracker",
    category: "Financial Controlling",
    description:
      "Designed a financial model and Power BI dashboard for tracking green capital expenditure against science-based climate targets and EU Taxonomy thresholds.",
    longDescription:
      "Built a comprehensive capex monitoring system integrating project finance data with environmental performance metrics. The model supports annual budget cycles and enables scenario analysis for decarbonisation investment planning.",
    technologies: ["Power BI", "Excel", "Financial Modelling", "SAP", "EU Taxonomy", "DAX"],
    impact: "Tracked €500M+ in green investments; supported board-level decisions",
    results: [
      "Automated tracking of 15+ capital investment projects",
      "Enabled real-time budget vs. actual analysis",
      "Supported green bond framework reporting",
      "Integrated with treasury system for cash flow visibility",
    ],
    color: "#1e3f6e", icon: "trending-up", badge: "Finance",
  },
  {
    id: 5,
    title: "Power Automate ESG Data Pipeline",
    category: "Automation",
    description:
      "Developed automated data collection and validation workflows using Power Automate, SharePoint, and Power Query to streamline ESG data gathering across 50+ sites.",
    longDescription:
      "Replaced manual email-based data collection with an automated SharePoint-based workflow. Power Automate handles routing, reminders, and validation; Power Query consolidates and transforms data into the master model automatically.",
    technologies: ["Power Automate", "SharePoint", "Power Query", "Excel", "Teams", "Power BI"],
    impact: "Reduced data collection cycle from 8 weeks to 2 weeks across 50+ sites",
    results: [
      "Eliminated 200+ manual emails per reporting cycle",
      "Automated data validation with 40% accuracy improvement",
      "Deployed reminder workflows reducing late submissions by 75%",
      "Scaled to 50+ reporting units globally",
    ],
    color: "#2563eb", icon: "zap", badge: "Automation",
  },
  {
    id: 6,
    title: "Carbon Accounting & GHG Dashboard",
    category: "ESG Reporting",
    description:
      "Built a Scope 1, 2, and 3 GHG emissions tracking model with automated intensity ratios, Science-Based Targets alignment, and year-on-year trend analysis.",
    longDescription:
      "Developed a comprehensive carbon accounting solution aligned with the GHG Protocol and ESRS E1 requirements. The model covers full Scope 1–3 inventory, emission factors management, and produces audit-ready carbon disclosure outputs.",
    technologies: ["GHG Protocol", "Power BI", "Excel", "ESRS E1", "DAX", "SQL"],
    impact: "Enabled first SBTi-aligned carbon report; cut calculation time by 70%",
    results: [
      "Covered Scope 1, 2, and 15 Scope 3 categories",
      "Reduced annual carbon calculation cycle from 6 weeks to 2 weeks",
      "Achieved external assurance for 3 consecutive years",
      "Integrated with SAP energy management module",
    ],
    color: "#0369a1", icon: "globe", badge: "Climate",
  },
];

export const certifications = [
  {
    name: "Certified Sustainability Reporting Assurer (CSRA)", // [REPLACE_CERT_NAME]
    organization: "ACCA / Sustainability Accounting Standards Board",
    year: "2024",
    description: "Professional qualification in sustainability reporting assurance and CSRD compliance.",
    icon: "award", color: "#3b82f6",
  },
  {
    name: "EU Taxonomy Practitioner Certificate",
    organization: "European Financial Reporting Advisory Group (EFRAG)",
    year: "2023",
    description: "Specialist certification in EU Taxonomy eligibility and alignment assessment.",
    icon: "leaf", color: "#1e40af",
  },
  {
    name: "Microsoft Power BI Data Analyst (PL-300)",
    organization: "Microsoft",
    year: "2023",
    description: "Official Microsoft certification for Power BI data modelling and advanced analytics.",
    icon: "bar-chart", color: "#0078d4",
  },
  {
    name: "GRI Certified Sustainability Professional",
    organization: "Global Reporting Initiative",
    year: "2022",
    description: "Expertise in GRI Standards application and sustainability disclosure best practices.",
    icon: "globe", color: "#00a651",
  },
  {
    name: "TCFD Implementation Certificate",
    organization: "TCFD Consortium",
    year: "2022",
    description: "Climate-related financial disclosure aligned with TCFD recommendations.",
    icon: "shield-check", color: "#0f2040",
  },
  {
    name: "SAP FI/CO Associate Certificate", // [REPLACE_CERT]
    organization: "SAP SE",
    year: "2021",
    description: "SAP Financial Accounting and Controlling module proficiency.",
    icon: "server", color: "#003366",
  },
  {
    name: "CFA ESG Investing Certificate",
    organization: "CFA Institute",
    year: "2021",
    description: "Investment analysis integrating ESG factors and sustainable finance principles.",
    icon: "trending-up", color: "#ffcc00",
  },
  {
    name: "Power Automate Developer Associate (PL-500)",
    organization: "Microsoft",
    year: "2023",
    description: "Advanced Power Platform automation and workflow development certification.",
    icon: "zap", color: "#742774",
  },
];
