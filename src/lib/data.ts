export const profile = {
  name: "Nawin Viswajith B",
  role: "AI & Machine Learning Engineer",
  tagline: "Building enterprise Generative AI systems with multi-agent orchestration, RAG, FastAPI, and scalable LLM infrastructure.",
  location: "Chennai, India",
  email: "nawinviswajith@gmail.com",
  phone: "+91 86083 43975",
  github: "https://github.com/nawin-viswajith",
  linkedin: "https://www.linkedin.com/in/nawinviswajith/",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Production AI systems delivered", value: "5+" },
  { label: "RAGAS", value: "92.1%" },
  { label: "Vector DB memory reduction", value: "94.4%" },
  { label: "Patent", value: "1" },
];

export const about = {
  summary: [
    "I'm an AI & Machine Learning Engineer at Prodapt, building enterprise Generative AI systems for real-world production use. My work spans multi-agent orchestration, Retrieval-Augmented Generation (RAG), document intelligence and local LLM platforms serving enterprise data at scale.",
    "I specialize in FastAPI microservices, LangGraph agent orchestration, vector databases, LLM evaluation, and the backend infrastructure that makes AI systems reliable, scalable, and production-ready.",
    "Outside of work, I'm building Trunk, an Android application for fully offline LLM inference, while exploring on-device AI deployment and mobile AI infrastructure. I also hold a granted patent and have authored two peer-reviewed publications.",
  ],
  highlights: [
    {
      title: "Research & Innovation",
      description: "A granted patent (VR-powered flight training) and two peer-reviewed journal publications on VR training systems and autonomous collision avoidance.",
    },
    {
      title: "Production-first mindset",
      description: "5+ AI systems shipped at Prodapt with production outcomes: 92.1% RAGAS quality, 94.4% vector DB memory reduction, sub-cent per-question costs.",
    },
    {
      title: "Full-stack AI",
      description: "Building AI end-to-end: FastAPI backends, LangGraph agents, vector databases, and React frontends that power enterprise AI applications.",
    },
  ],
};

export const experience = [
  {
    company: "Prodapt",
    role: "AI & Machine Learning Engineer",
    period: "Nov 2025 – Present",
    location: "Chennai, India",
    points: [
      "Designed and deployed 5 FastAPI microservices within a 20+ microservice enterprise AI platform using Azure OpenAI, cutting per-question cost to $0.0042, achieving an 89.5% RAGAS quality score, and reducing vector database RAM usage by 94.4%, earning Rising Rookie of the Month.",
      "Architecting an Enterprise AI Data Gateway spanning 17 schemas and 530+ tables, featuring Agentic Text-to-SQL, Power BI DAX generation, RBAC, semantic caching, and Knowledge Graph retrieval.",
      "Built a dual-agent Document Intelligence pipeline with enterprise-wide SharePoint search, intelligent skill matching, and multi-layer PII detection achieving over 98% success.",
      "Building an enterprise employee attrition prediction platform with dual-model routing and a temporal feature store across 25+ domain tables plus macroeconomic signals.",
    ],
  },
  {
    company: "Prodapt",
    role: "Graduate Trainee",
    period: "Jul 2025 – Nov 2025",
    location: "Chennai, India",
    points: [
      "Developed enterprise AI applications using Python, FastAPI, React, MySQL, and SQLAlchemy as part of Prodapt's graduate engineering program.",
      "Built an AI-powered network tower load monitoring system and an end-to-end RFM-based dynamic dunning platform to optimize revenue recovery.",
    ],
  },
  {
    company: "Aatral / Ministry of Defence (iDEX-DIO i4D)",
    role: "AI Intern",
    period: "May 2023 – Jul 2023",
    location: "Chennai, India",
    points: [
      "Selected among 100 students nationwide for the Ministry of Defence i4D programme, developing CNN and YOLO-based computer vision solutions for PPE detection, PCB defect detection, and VR safety training.",
    ],
  },
];

export const projects = [
  {
    name: "Trunk",
    subtitle: "On-Device AI & Multi-Agent Playground",
    description:
      "Android application for fully offline LLM inference with a visual multi-agent Playground for building AI workflows directly on mobile devices.",
    metric: "100% Offline",
    tags: ["Kotlin", "Android SDK", "Llama.cpp", "MLC LLM", "SQLite"],
    links: [
      { label: "Website", type: "website", href: "https://tuskerlabs-website.onrender.com/" },
      { label: "GitHub", type: "github", href: "https://github.com/nawin-viswajith/trunk-android" },
    ],
    featured: true,
  },
  {
    name: "Enterprise Agentic Text-to-SQL Platform",
    subtitle: "Reflection + MCP",
    description:
      "Enterprise Agentic Text-to-SQL platform featuring schema-aware RAG, reflection-based query correction, SQL governance, MCP-compatible APIs, and LangSmith observability.",
    metric: "530+ Enterprise Tables",
    tags: ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "ChromaDB", "Sentence-Transformers", "React"],
    links: [{ label: "GitHub", type: "github", href: "https://github.com/nawin-viswajith/Text-to-SQL-AI-Platform" }],
    featured: true,
  },
  {
    name: "BridgeSense",
    subtitle: "Accessibility · Sign Language AI",
    description:
      "Platform bridging communication for the deaf community: converts audio and video into sign language through 3D avatars, plus an interactive library for learning ASL and ISL finger-spelling.",
    metric: "3D Sign Avatars",
    tags: ["Python", "Flask", "Computer Vision", "Speech-to-Text", "3D VRM"],
    links: [{ label: "GitHub", type: "github", href: "https://github.com/nawin-viswajith/BridgeSense" }],
    featured: true,
  },
];

export const skills = [
  {
    category: "Generative AI & LLMs",
    items: ["LangGraph", "RAG", "Agentic Workflows", "Multi-Agent Systems", "Azure OpenAI", "DSPy", "RAGAS", "LLMOps", "LangChain", "Guardrails", "Vector Embeddings", "Google Gemini", "LLM-as-a-judge", "Prompt Engineering", "HuggingFace"],
  },
  {
    category: "Programming & ML",
    items: ["Python", "SQL", "NumPy", "Pandas", "scikit-learn", "PyTorch"],
  },
  {
    category: "Backend Engineering",
    items: ["FastAPI", "REST APIs", "Azure Cloud Services", "SQLAlchemy", "Redis", "Postman", "Tree-Sitter"],
  },
  {
    category: "Databases & Vector Stores",
    items: ["MySQL", "SQLite", "ChromaDB", "FAISS"],
  },
  {
    category: "Infrastructure & Security",
    items: ["Git", "Azure", "Presidio (PII)"],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "Tesseract OCR", "EasyOCR", "CLIP", "MediaPipe"],
  },
];

export const publications = [
  {
    type: "Patent",
    title: "Virtual Reality Powered Flight Training",
    meta: "Granted Indian Patent · Nov 2024",
  },
  {
    type: "Journal",
    title: "Flight Procedure Trainer using VR",
    meta: "Peer-reviewed Journal · May 2024",
  },
  {
    type: "Journal",
    title: "AI Based Collision Avoidance System for Unmanned Vessels",
    meta: "Peer-reviewed Journal · Jun 2023",
  },
];

export const honours = [
  {
    title: "Rising Rookie of the Month",
    org: "Prodapt",
    description: "Awarded for architecting a production-grade Agentic RAG pipeline with ReAct loops and VectorDB partitioning.",
  },
  {
    title: "iDEX – Innovate4Defence",
    org: "Ministry of Defence",
    description: "Selected among 100 students nationwide for the iDEX i4D internship programme.",
  },
  {
    title: "Oracle OCI 2025 Certifications",
    org: "Oracle",
    description: "Generative AI Professional, AI Vector Search, and Data Science Professional certifications.",
  },
  {
    title: "Top OnePlus Beta Tester",
    org: "OnePlus",
    description: "Handpicked for OxygenOS 12 Closed Beta; Top Tester with 1,983+ bugs reported.",
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  school: "Sri Sairam Engineering College, Chennai",
  period: "2021 – 2025",
  gpa: "CGPA: 8.13",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "System Design and Architecture",
    "Data Structures and Algorithms",
    "Database Management Systems",
  ],
};
