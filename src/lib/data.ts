export const profile = {
  name: "Nawin Viswajith B",
  role: "AI & Machine Learning Engineer",
  tagline: "Building production Generative AI systems — multi-agent orchestration, RAG pipelines, and LLM infrastructure that ships.",
  location: "Chennai, India",
  email: "nawinviswajith@gmail.com",
  phone: "+91 86083 43975",
  github: "https://github.com/nawin-viswajith",
  linkedin: "https://www.linkedin.com/in/nawinviswajith/",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Production AI systems delivered", value: "5+" },
  { label: "RAGAS quality score", value: "92.1%" },
  { label: "Vector DB memory reduction", value: "94.4%" },
  { label: "Granted patent", value: "1" },
];

export const about = {
  summary: [
    "I'm an AI & Machine Learning Engineer at Prodapt, where I design and ship production Generative AI systems — from multi-agent question generation engines to privacy-first, local-LLM-driven data platforms spanning hundreds of database tables.",
    "My work sits at the intersection of LLM orchestration, retrieval-augmented generation, and backend engineering: FastAPI microservices, vector databases, evaluation pipelines, and the unglamorous plumbing that makes agentic systems reliable in production, not just in a notebook.",
    "Outside of work, I build Trunk, an on-device AI Android app for fully offline, privacy-first LLM inference — and I hold a granted patent in VR-based flight training alongside two peer-reviewed publications.",
  ],
  highlights: [
    {
      title: "Backed by research",
      description: "A granted patent (VR-powered flight training) and two peer-reviewed journal publications on VR training systems and autonomous collision avoidance.",
    },
    {
      title: "Production-first mindset",
      description: "5+ AI systems shipped at Prodapt with measurable outcomes: 92.1% RAGAS quality, 94.4% vector DB memory reduction, sub-cent per-question costs.",
    },
    {
      title: "Full-stack AI",
      description: "Comfortable across the whole stack — Python/FastAPI backends, LangGraph agent orchestration, vector stores, and the React frontends that consume them.",
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
      "Designed and deployed 5 FastAPI microservices within a 20+ microservice enterprise AI platform using Azure OpenAI, powering multi-agent assessment, candidate reporting, AST parsing, document chunking, and image guardrails.",
      "Reduced per-question cost to $0.0042 and achieved an 89.5% RAGAS quality score across a 1,000-question LLM-as-judge evaluation.",
      "Cut vector database RAM usage by 94.4% (9.22 GB → 508.9 MB) via LRU-partitioned ChromaDB sharding — awarded Rising Rookie of the Month.",
      "Architecting a privacy-first, local-LLM-driven Enterprise AI Data Gateway over 17 schemas and 530+ tables, with multi-agent correction loops for SQL/PowerBI DAX generation, RBAC, and a metadata-filtered knowledge graph.",
      "Built a dual-agent Document Intelligence pipeline with sub-ms SharePoint search (Path Trie + Trigram Index), a 5-tier skill-matching cascade, and 3-layer PII detection (Presidio ML + regex) achieving >98% success via LLM fallback chains.",
      "Architecting an end-to-end employee attrition prediction system (scikit-learn) with dual-model routing and a temporal feature store across 25+ domain tables plus macroeconomic signals.",
    ],
  },
  {
    company: "Prodapt",
    role: "Graduate Trainee",
    period: "Jul 2025 – Nov 2025",
    location: "Chennai, India",
    points: [
      "Completed full-stack AI development training across Python, FastAPI, React, MySQL, and SQLAlchemy.",
      "Built an AI-powered network tower load monitoring system and an end-to-end RFM-based dynamic dunning platform to optimize revenue recovery.",
    ],
  },
  {
    company: "Aatral / Ministry of Defence (iDEX-DIO i4D)",
    role: "AI Intern",
    period: "May 2023 – Jul 2023",
    location: "Chennai, India",
    points: [
      "Selected among 100 students nationwide for the Ministry of Defence i4D internship programme.",
      "Developed real-time computer vision solutions (CNN, YOLO) for PPE-wear detection, PCB fault detection, and body-movement tracking for VR safety training.",
    ],
  },
];

export const projects = [
  {
    name: "Trunk",
    subtitle: "On-Device AI & Multi-Agent Playground",
    description:
      "A privacy-first Android application for fully offline, cloud-free LLM inference. Includes a visual, no-code Playground for chaining AI agents (drafter, refiner, formatter) into automated pipelines directly on mobile hardware.",
    tags: ["Kotlin", "Android SDK", "Llama.cpp", "MLC LLM", "SQLite"],
    links: [
      { label: "Website", type: "website", href: "https://tuskerlabs-website.onrender.com/" },
      { label: "GitHub", type: "github", href: "https://github.com/nawin-viswajith/trunk-android" },
    ],
    featured: true,
  },
  {
    name: "Multi-Agent Professional Assistant",
    subtitle: "LangGraph · Hackathon, Prodapt",
    description:
      "A 7-agent LangGraph StateGraph pipeline (Router → Specialist → Humanizer) with dual RAG pipelines — all-MiniLM-L6-v2 at ~80ms for personal notes, Azure OpenAI embeddings for 59 policy PDFs — plus priority-based routing, per-user ChromaDB collections, LRU memory eviction, and a React frontend searching 1,500+ employee records.",
    tags: ["Python", "FastAPI", "LangGraph", "LangChain", "Azure OpenAI", "ChromaDB", "React"],
    links: [],
    featured: true,
  },
  {
    name: "Enterprise Agentic Text-to-SQL Platform",
    subtitle: "Reflection + MCP",
    description:
      "A LangGraph Reflection workflow with schema-aware RAG (ChromaDB/MMR), automated RAGAS evaluation, strict SQL governance (SELECT-only, EXPLAIN pre-checks, auto-retry on schema mismatch), an MCP-compatible API surface, and a React dashboard with LangSmith telemetry.",
    tags: ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "ChromaDB", "Sentence-Transformers", "React"],
    links: [{ label: "GitHub", type: "github", href: "https://github.com/nawin-viswajith/Text-to-SQL-AI-Platform" }],
    featured: true,
  },
];

export const skills = [
  {
    category: "Generative AI & LLMs",
    items: ["LangGraph", "LangChain", "DSPy", "RAG", "RAGAS", "Agentic Workflows", "Multi-Agent Systems", "LLM-as-a-judge", "Prompt Engineering", "HuggingFace", "Vector Embeddings", "Azure OpenAI", "Google Gemini", "Guardrails", "LLMOps"],
  },
  {
    category: "Languages & Core ML",
    items: ["Python", "SQL", "NumPy", "Pandas", "scikit-learn", "PyTorch"],
  },
  {
    category: "Backend & Cloud",
    items: ["FastAPI", "REST APIs", "Azure Cloud Services", "SQLAlchemy", "Redis", "Postman"],
  },
  {
    category: "Databases & Vector Stores",
    items: ["MySQL", "SQLite", "ChromaDB", "FAISS"],
  },
  {
    category: "DevOps & Security",
    items: ["Git", "Azure", "ECDH-P256", "AES-256-GCM", "Presidio (PII)"],
  },
  {
    category: "Computer Vision & Tools",
    items: ["OpenCV", "Tree-Sitter", "Tesseract OCR", "EasyOCR", "CLIP", "MediaPipe"],
  },
];

export const publications = [
  {
    type: "Patent",
    title: "Virtual Reality Powered Flight Training",
    meta: "Application No. 202441083983 A · Nov 2024",
  },
  {
    type: "Journal",
    title: "Flight Procedure Trainer using VR",
    meta: "TIJER · May 2024",
  },
  {
    type: "Journal",
    title: "AI Based Collision Avoidance System for Unmanned Vessels",
    meta: "TIJER · Jun 2023",
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
