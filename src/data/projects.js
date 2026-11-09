const projects = [
  {
    id: 'document-rag',
    number: '01',
    category: 'Generative AI',
    title: 'Multi-Document RAG Assistant',
    description:
      'A Streamlit assistant for chatting across uploaded documents and web content.',
    tags: ['Python', 'Streamlit', 'LangChain', 'Hugging Face', 'FAISS', 'Groq'],
    repositoryUrl: 'https://github.com/Aryan-44/RAG-ChatBot',
    caseStudy: [
      {
        label: 'Challenge',
        description:
          'Make information across several uploaded files and a web page available through one conversational interface.',
      },
      {
        label: 'Approach',
        description:
          'Load PDF, DOCX, TXT, CSV, and XLSX files or a URL; split the content into overlapping chunks; create sentence-transformer embeddings; and retrieve relevant chunks from a FAISS index for each question.',
      },
      {
        label: 'Result',
        description:
          'The chat flow uses recent conversation history and retrieved context to answer document questions, with a relevance check that can route unrelated questions to a general response.',
      },
    ],
  },
  {
    id: 'student-performance',
    number: '02',
    category: 'Machine Learning',
    title: 'Student Performance Prediction & Analytics',
    description:
      'A FastAPI application that combines student profiles with three predictive analysis workflows.',
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost', 'Regression', 'K-Means'],
    repositoryUrl: 'https://github.com/Aryan-44/Student-Performance-Model',
    caseStudy: [
      {
        label: 'Challenge',
        description:
          'Turn a mixed set of numeric and categorical student-profile inputs into useful, clearly separated model outputs.',
      },
      {
        label: 'Approach',
        description:
          'A FastAPI and Jinja interface validates profile fields, encodes categorical inputs, and passes the combined features to saved classification, regression, and clustering models.',
      },
      {
        label: 'Result',
        description:
          'A submitted profile produces a Pass/Fail classification, an estimated exam score, and a K-Means cluster assignment in the same web application.',
      },
    ],
  },
  {
    id: 'weather-agent',
    number: '03',
    category: 'AI Automation',
    title: 'Weather AI Agent',
    description:
      'An n8n workflow that turns forecast data into a daily AI-written weather report and email.',
    tags: ['n8n', 'Open-Meteo API', 'Groq', 'Gmail / SMTP', 'Scheduled Workflow'],
    repositoryUrl: 'https://github.com/Aryan-44/weather-ai-agent',
    caseStudy: [
      {
        label: 'Challenge',
        description:
          'Automate the collection and delivery of a readable daily weather update instead of assembling the report manually.',
      },
      {
        label: 'Approach',
        description:
          'A scheduled n8n workflow retrieves current and daily forecast data from Open-Meteo, passes it to a Groq-powered agent, and sends the generated report by email.',
      },
      {
        label: 'Result',
        description:
          'The workflow produces a daily report with forecast details and practical advice. Its prompt instructs the model to rely only on supplied API values and omit unavailable information.',
      },
    ],
  },
  {
    id: 'equity-research',
    number: '04',
    category: 'Generative AI',
    title: 'Equity Research Dashboard',
    description:
      'A Streamlit tool for asking source-aware questions about up to three equity or news URLs.',
    tags: ['Python', 'Streamlit', 'LangChain', 'Gemini', 'FAISS', 'RAG'],
    repositoryUrl: 'https://github.com/Aryan-44/Equity-Research-Tool',
    caseStudy: [
      {
        label: 'Challenge',
        description:
          'Make several articles usable as a shared context for follow-up questions, with the supporting sources visible alongside answers.',
      },
      {
        label: 'Approach',
        description:
          'Extract text from up to three URLs, split it into chunks, build a FAISS index with Google Generative AI embeddings, and query it through a retrieval chain using Gemini.',
      },
      {
        label: 'Result',
        description:
          'The dashboard returns answers to questions about the supplied pages and includes source information from the retrieval chain.',
      },
    ],
  },
];

export default projects;
