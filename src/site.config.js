export const PROJECTS = [
  {
    name: "PLAN-EXECUTE-AGENT",
    oneLiner: "LangGraph harness for plan-and-execute agent architectures, with browser automation",
    repoUrl: "https://github.com/Akshat-Rai0/PLAN-EXECUTE-AGENT",
    status: "in-progress",
    tags: ["Agents", "LangGraph"],
    visible: true
  },
  {
    name: "EYE",
    oneLiner: "Visual asset manager: YOLOv11, Moondream2 and CLIP tagging with a 3D UMAP embedding graph; 400 images at 1.8 s/image on CPU",
    repoUrl: "https://github.com/Akshat-Rai0/eye-project",
    status: "shipped",
    tags: ["Computer Vision", "Multimodal"],
    visible: true
  },
  {
    name: "DocuMentor",
    oneLiner: "Hybrid RAG retrieval system",
    repoUrl: "https://github.com/Akshat-Rai0/DOCUMENTOR",
    status: "in-progress",
    tags: ["RAG", "Retrieval"],
    visible: true
  },
  {
    name: "NTPC-NVVN-MP",
    oneLiner: "Electricity demand forecasting with Django and LightGBM, built as production ML",
    repoUrl: "https://github.com/Akshat-Rai0/NTPC-NVVN-MP",
    status: "shipped",
    tags: ["Forecasting", "Production ML"],
    visible: true
  },
  {
    name: "ALPR",
    oneLiner: "License plate recognition with classical CV: plate detection, character segmentation, SVM OCR, retraining pipeline",
    repoUrl: "https://github.com/Akshat-Rai0/license_plate_recognition",
    status: "in-progress",
    tags: ["Computer Vision", "Classical CV"],
    visible: true
  },
  {
    name: "Shazam Clone",
    oneLiner: "Song identification via spectrogram peak-hashing audio fingerprinting",
    repoUrl: "https://github.com/Akshat-Rai0/shazam-clone",
    status: "in-progress",
    tags: ["Audio", "Signal Processing"],
    visible: true
  },
  {
    name: "treeMem",
    oneLiner: "Hierarchical tree memory for LLM agents: concise parents, detailed children",
    repoUrl: "https://github.com/Akshat-Rai0/treeMem",
    status: "in-progress",
    tags: ["Agents", "Memory"],
    visible: true
  },
  {
    name: "EBOOK2AUDIOBOOK",
    oneLiner: "Agentic ebook-to-audiobook system",
    repoUrl: "https://github.com/Akshat-Rai0/EBOOK2AUDIOBOOK",
    status: "in-progress",
    tags: ["Agents", "Audio"],
    visible: true
  }
];

export const siteConfig = {
  name: "Akshat Rai",
  hero: { headline: ["Agents built", "for the real world."], subtext: "AI/ML at BIT Mesra. I build agentic systems that run in production, not just in demos." },
  links: {
    github: "https://github.com/Akshat-Rai0",
    linkedin: "https://www.linkedin.com/in/akshat-rai-196497339/",
    resume: "https://drive.google.com/file/d/1T2WTUCKGGkTGsjGpypLqYe3hGtRvq-e1/view?usp=sharing"
  },
  contact: { email: "btech15096.24@bitmesra.ac.in" },
  building: {
    name: "treeMem",
    repoUrl: "https://github.com/Akshat-Rai0/treeMem",
    thumbnail: null
  },
  looking: { startTerm: "Summer 2027" },
  about: {
    photo: null,
    bio: "I'm a third-year B.Tech student in AI/ML at BIT Mesra, focused on agentic systems that work outside demos. I built PLAN-EXECUTE-AGENT, a LangGraph harness for planning and executing agent architectures, a CPU-only visual asset pipeline (EYE), and a hybrid RAG system (DocuMentor). I also worked as an ML intern at NTPC-NVVN on electricity demand forecasting. Top-1,000 team in the Amazon hackathon (90,000 participants), Adobe semifinalist, Pantheon finalist.",
    skills: {
      Languages: ["Python", "C++", "SQL"],
      "ML/AI": ["PyTorch", "scikit-learn", "OpenCV", "LangGraph", "RAG"],
      "Backend/Tools": ["Django", "SQLAlchemy", "Linux", "Git"]
    }
  },
  spotify: { endpoint: "/api/now-playing" },
};
