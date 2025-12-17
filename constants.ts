
import { Project, SkillCategory, Experience, Education, Certification, Interest } from './types';
import { 
    PythonIcon, TensorFlowIcon, PyTorchIcon, ScikitLearnIcon, PandasIcon, ReactIcon, 
    TypeScriptIcon, NodeJsIcon, DockerIcon, AWSIcon, GitIcon, SQLIcon, JavaIcon, 
    FigmaIcon, GoogleIcon, JiraIcon, TrelloIcon, MicrosoftIcon,
    PowerBIIcon, OpenAIIcon, CopilotIcon, GoogleAIIcon, MiroIcon, VisioIcon,
    LucidchartIcon, ProcessIcon, AgileIcon, NetworkIcon, DocumentTextIcon,
    UserGroupIcon, PresentationIcon, PuzzleIcon, BrainIcon, ToolsIcon,
    ChartIcon, PrototypeIcon, DiagramIcon, ServerIcon, ChatBubbleIcon, TargetIcon, RefreshIcon
} from './components/icons/TechIcons';
import { CertificationIcon } from './components/icons/CertificationIcons';
import { GitHubIcon } from './components/icons/SocialIcons';


export const PERSONAL_INFO = {
  name: "Buhlaluse Lungile Ngcobo",
  title: "Data Engineer | IT Business Analyst | UI/UX Designer",
  brandingStatement: "A multifaceted professional harmonizing Data Engineering, Business Analysis, and UI/UX Design to build scalable, intelligent systems. I specialize in translating complex business requirements into robust technical solutions with intuitive, user-centric interfaces.",
  bio: "I am an aspiring Data Engineer, IT Business Analyst, and UI/UX Designer focused on building scalable solutions and solving real-world problems. Currently, I am deepening my knowledge in Advanced AI Integration and Python for Data Science. My specialization lies in bridging the gap between technical implementation and business needs through robust analysis and user-centric design.",
  careerObjectives: "To secure a challenging entry-level position as a Data Engineer or IT Business Analyst where I can utilize my skills in data science, AI integration, and business systems analysis to drive organizational success. I am eager to join a forward-thinking team to build scalable solutions, applying my strong problem-solving abilities and collaborative mindset to deliver high-quality results.",
  email: "nbuhlaluse@gmail.com",
  location: "Johannesburg, Gauteng",
  github: "https://github.com/BuhlaluseNgcobo",
  linkedin: "https://www.linkedin.com/in/buhlaluse-ngcobo-a4a899295/",
  resumeUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/buhlaluse_ngcobo_capaciti_org_za/IQBHQ07hcMFDTLZ2Ep8U-4-uAVmkyr4YHP5RCw2taF3xbG0?e=orkdgL",
  jobStrategyUrl: "#",
  profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQGWf-oVjsa8ig/profile-displayphoto-scale_200_200/B4DZshSuuMH0AY-/0/1765790118072?e=1767225600&v=beta&t=lQGaA7I967TADYqePvbcGUtHgoiLWo0GFg6RQqf5iuA",
};

export const EXPERIENCE: Experience[] = [
    {
        role: "Tech Accelerator Candidate",
        company: "Capaciti",
        duration: "October 2025 - Present",
        description: [
            "Participating in an intensive Agile-based AI Bootcamp, delivering functional tools through weekly sprints and daily standups.",
            "Developing AI and Data Engineering solutions using Python, Machine Learning pipelines, and Generative AI APIs.",
            "Building a diverse portfolio of deployed applications, including an AI Chatbot, Sentiment Dashboard, and custom Generative AI tools.",
            "Conducting rigorous AI ethics audits to identify dataset bias and implement mitigation strategies.",
            "Collaborating in cross-functional teams to design and present an End-to-End AI Capstone solution.",
            "Focusing on professional development through technical demos, career coaching, and industry-aligned project delivery."
        ],
    },
    {
        role: "Business Analyst",
        company: "ICEP",
        duration: "2024 - 2025",
        description: [
            "Gathered and documented business and system requirements.",
            "Analyzed and improved business processes.",
            "Conducted stakeholder interviews and workshops for requirements gathering.",
            "Prepared Business Requirement Documents (BRD) and use cases.",
            "Performed data analysis to support business decisions.",
            "Translated business needs into functional specifications.",
            "Designed and reviewed wireframes and prototypes.",
            "Supported Agile ceremonies and User Acceptance Testing (UAT)."
        ],
    },
    {
        role: "Business Systems Analysis Mentor",
        company: "Tshwane University of Technology",
        duration: "2023",
        description: [
            "Volunteered as a mentor for a semester to assist students with Business Systems Analysis concepts and provide academic support."
        ],
    }
];

export const EDUCATION: Education[] = [
    {
        institution: "Tshwane University of Technology",
        degree: "Diploma in Informatics",
        duration: "2025",
        description: "Specialized in Business Analysis, System Analysis, and Database Management. Acquired proficiency in IT Project Management, Strategic Information Systems, and Enterprise Architecture."
    }
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: "Python for Data Science and AI",
        issuer: "IBM",
        date: "Issued Nov 11, 2025",
        credentialUrl: "https://www.credly.com/badges/c5f9621b-e12a-44f9-967f-4bbb48f8042c",
        icon: CertificationIcon,
    },
    {
        name: "Introduction to Responsible AI",
        issuer: "Google Cloud",
        date: "Issued Nov 26, 2025",
        credentialUrl: "https://coursera.org/verify/W2T2T67LRX5C",
        icon: CertificationIcon,
    },
    {
        name: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
        issuer: "Johns Hopkins University",
        date: "Issued Nov 25, 2025",
        credentialUrl: "https://coursera.org/verify/FIFLHKVMR51T",
        icon: CertificationIcon,
    },
    {
        name: "AI Essentials",
        issuer: "Intel",
        date: "Issued Oct 13, 2025",
        credentialUrl: "https://coursera.org/verify/NOOZS5YR834F",
        icon: CertificationIcon,
    },
    {
        name: "Emotional Intelligence",
        issuer: "Arizona State University",
        date: "Issued Dec 2, 2025",
        credentialUrl: "https://coursera.org/verify/QOP50WNEGY3F",
        icon: CertificationIcon,
    },
    {
        name: "Work Smarter, Not Harder: Time Management",
        issuer: "University of California, Irvine",
        date: "Issued Dec 2, 2025",
        credentialUrl: "https://coursera.org/verify/F9M2LL3463Y6",
        icon: CertificationIcon,
    }
];

export const PROJECTS: Project[] = [
  {
    title: "Capaciti Hub",
    description: "A centralized digital hub designed to enhance the experience of candidates by aggregating resources, tools, and community features.",
    tags: ["React", "Web Development", "UI/UX"],
    liveDemoUrl: "https://capacitihub.vercel.app/",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/Capaciti-hub",
    documentationUrl: "#",
    isCapstone: true,
    demoVideoUrl: "https://capeitinitiative-my.sharepoint.com/:f:/g/personal/nkosimphile_mnisi_capaciti_org_za/IgCLKnTjz9oWSbEFUc5Jg_deAcpZ8FKm11gFw7iHDYt8u_g?e=xTOzL2"
  },
  {
    title: "HealthGuard",
    description: "A UI/UX prototype for a patient monitoring system designed for discharged high-risk and surgical patients to reduce hospital readmissions.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    liveDemoUrl: "https://www.figma.com/make/Y2SPOeoB7aXmnu1kgNC5mD/Healthcare-App-Prototype?node-id=0-4&t=XG3yJMdcuUnrTGJQ-1",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/HealthGuard_Prototype",
    documentationUrl: "#",
  },
  {
    title: "AI Resume Builder",
    description: "An intelligent tool that builds ATS-friendly resumes, tailors CVs to specific job descriptions, checks ATS scores, and suggests improvements.",
    tags: ["Python", "AI Integration", "NLP"],
    liveDemoUrl: "https://ai-resume-builder-six-dusky.vercel.app/",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/AI-Resume-builder",
    documentationUrl: "#",
  },
  {
    title: "Sentiment Dashboard",
    description: "An interactive data visualization tool that performs real-time sentiment analysis on text data.",
    tags: ["Python", "Streamlit", "Data Visualization"],
    liveDemoUrl: "https://auralink-dashboard-3ivbxv3r9qd2w5bq5zagqm.streamlit.app/",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/auralink-dashboard",
    documentationUrl: "#",
  },
  {
    title: "AI Fundamentals Chatbot",
    description: "An educational chatbot designed to explain AI concepts, built using Google's latest models.",
    tags: ["TypeScript", "Google AI Studio", "AI"],
    liveDemoUrl: "https://ai-fundamentals-chatbot-1.vercel.app/",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/Nova_ai_chatbot",
    documentationUrl: "#",
  },
  {
    title: "Creative Writing Assistant",
    description: "An AI-powered tool that generates custom short stories and poems based on specific user-selected criteria and prompts.",
    tags: ["Python", "LLMs", "Generative AI"],
    liveDemoUrl: "https://pentacore-189473728151.us-west1.run.app/",
    githubRepoUrl: "https://github.com/BuhlaluseNgcobo/GenAI-creative-writing",
    documentationUrl: "#",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "AI, Data & Development",
        skills: [
            { name: "Python", icon: PythonIcon },
            { name: "SQL", icon: SQLIcon },
            { name: "Java", icon: JavaIcon },
            { name: "Pandas", icon: PandasIcon },
            { name: "Google AI Studio", icon: GoogleAIIcon },
            { name: "OpenAI", icon: OpenAIIcon },
            { name: "Microsoft Copilot", icon: CopilotIcon },
            { name: "Git", icon: GitIcon },
        ]
    },
    {
        title: "Basic AI Skills",
        skills: [
            { name: "Machine Learning", icon: BrainIcon },
            { name: "Natural Language Processing", icon: ChatBubbleIcon },
            { name: "Deep Learning", icon: TensorFlowIcon },
            { name: "Generative AI", icon: OpenAIIcon },
            { name: "Prompt Engineering", icon: DocumentTextIcon },
            { name: "Data Analysis", icon: ChartIcon },
            { name: "Model Evaluation", icon: ToolsIcon },
        ]
    },
    {
        title: "Business Analysis",
        skills: [
            { name: "Req. Elicitation & Interviews", icon: UserGroupIcon },
            { name: "BRDs (Business Req. Docs)", icon: DocumentTextIcon },
            { name: "Functional Specs & User Stories", icon: TargetIcon },
            { name: "Acceptance Criteria Definition", icon: PuzzleIcon },
            { name: "BPMN & Workflow Modelling", icon: ProcessIcon },
            { name: "Gap Analysis & Impact", icon: ChartIcon },
            { name: "SDLC & Agile Methodologies", icon: AgileIcon }, 
            { name: "UAT Support & Defect Tracking", icon: ToolsIcon },
        ]
    },
    {
        title: "Tools & Visualization",
        skills: [
            { name: "Power BI", icon: PowerBIIcon },
            { name: "Figma", icon: FigmaIcon },
            { name: "Miro", icon: MiroIcon },
            { name: "Lucidchart", icon: LucidchartIcon },
            { name: "Visio", icon: VisioIcon },
            { name: "Jira", icon: JiraIcon },
            { name: "Trello", icon: TrelloIcon },
            { name: "UML & ER Diagrams", icon: DiagramIcon },
            { name: "Prototyping & Wireframing", icon: PrototypeIcon },
            { name: "Visualization & Reporting", icon: ChartIcon },
        ]
    },
    {
        title: "Professional & IT Skills",
        skills: [
            { name: "Problem Solving", icon: PuzzleIcon },
            { name: "Troubleshooting", icon: ToolsIcon },
            { name: "Software Installation", icon: ServerIcon },
            { name: "Networking Fundamentals", icon: NetworkIcon },
            { name: "Communication", icon: ChatBubbleIcon },
            { name: "Facilitation & Presentation", icon: PresentationIcon },
            { name: "Teamwork & Collaboration", icon: UserGroupIcon },
        ]
    }
];

export const INTERESTS: Interest[] = [
    {
        title: "AI Ethics & Safety",
        description: "Advocating for responsible AI development, focusing on bias mitigation, algorithmic transparency, and auditing datasets for fairness to ensure equitable technology.",
        icon: BrainIcon
    },
    {
        title: "Tech Mentorship",
        description: "Passionate about empowering the next generation of tech professionals through academic tutoring, peer mentoring, and sharing knowledge on Business Analysis concepts.",
        icon: UserGroupIcon
    },
    {
        title: "UI/UX Innovation",
        description: "Exploring the intersection of data and design to create intuitive, accessible, and user-centric digital experiences that bridge the gap between functionality and aesthetics.",
        icon: FigmaIcon
    },
    {
        title: "Open Source",
        description: "Active participant in the open source community, interested in contributing to tools and repositories that democratize access to AI and data science resources.",
        icon: GitHubIcon
    }
];

export const SHOWCASE = {
    title: "Capstone Showcase Presentation",
    description: "An in-depth look at my technical journey, the development of Capaciti Hub, and my vision for the future of Data Engineering.",
    videoUrl: "#", // Replace with actual video URL when available
    slidesUrl: "#", // Replace with actual slides URL when available
    topics: [
      {
        title: "Introduction & Personal Brand",
        description: "My background, career objectives, and the 'why' behind my transition into Tech."
      },
      {
        title: "Capaciti Hub: The Problem",
        description: "Identifying the need for a centralized platform for candidates."
      },
      {
        title: "Solution Architecture",
        description: "How React, TypeScript, and Google Gemini AI came together."
      },
      {
        title: "Live Demo & Key Features",
        description: "Showcasing the AI tools and responsive UI/UX."
      }
    ],
    futureGoals: [
      "Mastering Big Data Technologies (Spark, Hadoop)",
      "Cloud Solutions Architect Certification",
      "Building Scalable AI-Driven Applications"
    ]
};
