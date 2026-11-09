const skillCategories = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI & Retrieval',
    description:
      'Building document-grounded applications with language models, embeddings, and vector retrieval.',
    skills: [
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Prompt Engineering',
      'Vector Embeddings',
      'Semantic Search',
      'LangChain',
      'FAISS',
      'Hugging Face Embeddings',
      'Groq API',
      'Google Generative AI',
    ],
    project: {
      name: 'Multi-Document RAG Assistant',
      href: 'https://github.com/Aryan-44/RAG-ChatBot',
    },
  },
  {
    id: 'machine-learning',
    number: '02',
    title: 'Machine Learning & Data',
    description:
      'Preparing data and building regression, classification, and clustering workflows.',
    skills: [
      'Data Preprocessing',
      'Exploratory Data Analysis',
      'Regression',
      'Classification',
      'Clustering',
      'Model Evaluation',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
    ],
    project: {
      name: 'Student Performance Model',
      href: 'https://github.com/Aryan-44/Student-Performance-Model',
    },
  },
  {
    id: 'application-development',
    number: '03',
    title: 'Application Development',
    description:
      'Turning data and model workflows into usable web applications and interfaces.',
    skills: [
      'Python',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Streamlit',
      'REST API Integration',
    ],
    project: {
      name: 'Student Performance Model',
      href: 'https://github.com/Aryan-44/Student-Performance-Model',
    },
  },
  {
    id: 'automation',
    number: '04',
    title: 'AI Automation & Integrations',
    description:
      'Connecting forecast data, language models, and scheduled messaging in automated workflows.',
    skills: [
      'n8n',
      'AI Agent Workflows',
      'Groq',
      'Open-Meteo API',
      'Scheduled Workflows',
      'Email Integrations',
    ],
    project: {
      name: 'Weather AI Agent',
      href: 'https://github.com/Aryan-44/weather-ai-agent',
    },
  },
];

export const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'application-development', label: 'Application Development' },
  { id: 'automation', label: 'Automation' },
];

export default skillCategories;
