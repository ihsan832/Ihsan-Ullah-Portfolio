// ============================================================
// DATA.JS — Edit all your content here in one place
// ============================================================

// 👉 Replace this with your actual image path in /src/assets/
// e.g. import profileImg from './assets/profile.jpg'  then use profileImg below
export const PROFILE_IMAGE = '/profile.jpg'  // Put your photo in /public/profile.jpg

export const DATA = {
  // --- Personal Info ---
  name:        'Ihsan Ullah',
  firstName:   'Ihsan',
  lastName:    'Ullah',
  role:        'AI/ML Engineer',
  tagline:     'AI/ML Engineer | Deep Learning | Agentic AI',
  roles:       ['AI/ML Engineer', 'Deep Learning Engineer', 'Agentic AI Developer', 'FastAPI Developer'],
  about:       'AI/ML Engineer passionate about building intelligent systems that solve real-world problems. Experienced in machine learning, deep learning, and scalable AI pipeline development, with a strong focus on performance, innovation, and delivering impactful solutions through efficient collaboration and modern technologies.',
  location:    'Islamabad, Pakistan',
  phone:       '+92-335-3605348',
  email:       'ihsanokz912@gmail.com', // 👉 update with real email
  github:      'https://github.com/ihsan832',
  linkedin:    'https://www.linkedin.com/in/ihsan-ullah-26bbb9320/', // 👉 update
  resumeLink:  'https://github.com/ihsan832/MY-CV',   // 👉 update with PDF link

  // --- Stats ---
  stats: [
    { num: '12+',  label: 'Projects Built'    },
    { num: '2+',   label: 'Years Experience'  },
    { num: '5+',   label: 'Tech Stacks'       },
    { num: '100%', label: 'Dedication'        },
  ],

  // --- Skills ---
  skills: [
    { name: 'Python',           icon: '🐍', level: 92, tags: ['NumPy', 'Pandas', 'Scikit-Learn'] },
    { name: 'Machine Learning', icon: '🤖', level: 88, tags: ['Classification', 'Regression', 'NLP','OPENCV'] },
    { name: 'Deep Learning',    icon: '🧠', level: 85, tags: ['ANN','CNN','RNN', 'Transformers',] },
    { name: 'Agentic AI',       icon: '⚡', level: 82, tags: ['LangChain','LangGraph', 'N8N','AutoGen', 'Agents'] },
    { name: 'FastAPI & Backend',icon: '🚀', level: 80, tags: ['FastAPI', 'MySQL']},
    { name: 'Data Science',     icon: '📊', level: 86, tags: ['EDA', 'Visualization', 'Feature Eng.'] },
  ],

  // --- Experience ---
  experience: [
    {
      title:   'ML Engineer',
      company: 'Islamabad',
      period:  'June 2024 – Feb 2025',
      bullets: [
        'Developed ML models for real-world applications, improving prediction accuracy through data preprocessing and feature engineering.',
        'Collaborated with teams to design and implement data-driven solutions for classification and NLP-based tasks.',
        'Managed multiple ML experiments simultaneously, ensuring proper evaluation, optimization, and timely delivery.',
      ],
    },
    {
      title:   'Deep Learning Engineer',
      company: 'Islamabad',
      period:  'Feb 2025 – Present',
      bullets: [
        'Developed deep learning models using ANN, CNNs, RNNs, transformers, LangChain, and LangGraph for AI applications.',
        'Built scalable AI systems with FastAPI backend and MySQL database integration for model serving.',
        'Improved AI agent workflows and API performance through iterative testing and feedback loops.',
      ],
    },
  ],

  // --- Education ---
  education: {
    degree:  'B.S. Computer Science',
    school:  'Kohat University of Science and Technology',
    period:  '2022 – 2026',
    bullets: [
      'Specializing in AI/ML, deep learning, and agentic AI development.',
      'Building real-world ML projects alongside academic coursework.',
    ],
  },

  // --- Languages ---
  languages: [
    { name: 'Pashto', level: 100 },
    { name: 'Urdu',   level: 100 },
    { name: 'English',level: 70  },
  ],

  // --- Projects ---
  projects: [
    {
      title: 'LangGraph Basics',
      desc:  'End-to-end exploration of LangGraph for building stateful multi-agent AI workflows.',
      tech:  ['LangGraph', 'Python', 'LangChain'],
      icon:  '🕸️',
      link:  'https://github.com/ihsan832/Langgraph-basics',
    },
    {
      title: 'CV / Resume Analyzer',
      desc:  'AI-powered resume analyzer built with LangChain for structured extraction and scoring.',
      tech:  ['LangChain', 'FastAPI', 'NLP'],
      icon:  '📄',
      link:  'https://github.com/ihsan832/CV-or-Resume-Analyzer',
    },
    {
      title: 'Heart Disease Prediction',
      desc:  'ML pipeline for predicting heart disease with high accuracy using clinical features.',
      tech:  ['Scikit-Learn', 'Python', 'EDA'],
      icon:  '❤️',
      link:  'https://github.com/ihsan832/Heart-Disease-Prediction',
    },
    {
      title: 'Customer Churn Prediction',
      desc:  'Predictive model to identify at-risk customers using ensemble methods.',
      tech:  ['XGBoost', 'Pandas', 'FastAPI'],
      icon:  '📉',
      link:  'https://github.com/ihsan832/customer-churn-prediction',
    },
    {
      title: 'Insurance Premium Prediction',
      desc:  'Regression model API for predicting insurance premiums based on user data.',
      tech:  ['FastAPI', 'ML', 'MySQL'],
      icon:  '🏥',
      link:  'https://github.com/ihsan832/insurance-premium-prediction-api',
    },
    {
      title: 'Gemini LangChain Chatbot',
      desc:  'Conversational AI chatbot powered by Google Gemini and LangChain via Streamlit.',
      tech:  ['Gemini', 'LangChain', 'Streamlit'],
      icon:  '💬',
      link:  'https://github.com/ihsan832/gemini-langchain-streamlit-chatbot',
    },
    {
      title: 'House Price Prediction API',
      desc:  'ML model served via FastAPI for predicting real estate prices.',
      tech:  ['FastAPI', 'Scikit-Learn', 'Regression'],
      icon:  '🏠',
      link:  'https://github.com/ihsan832/House-Price-Prediction-ML---API',
    },
    {
      title: 'Research Paper Summarizer',
      desc:  'Tool that summarizes academic papers using LLMs and LangChain.',
      tech:  ['LangChain', 'LLM', 'Python'],
      icon:  '📚',
      link:  'https://github.com/ihsan832/Research-Paper-Summarize-Tool',
    },
    {
      title: 'Titanic Prediction App',
      desc:  'Full-stack ML app with FastAPI backend and Streamlit frontend.',
      tech:  ['FastAPI', 'Streamlit', 'ML'],
      icon:  '🚢',
      link:  'https://github.com/ihsan832/Titanic-Dastaset-prediction---Fast_api---Streamlit',
    },
    {
      title: 'Patient Management System',
      desc:  'RESTful API for managing patient records with FastAPI and MySQL.',
      tech:  ['FastAPI', 'MySQL', 'CRUD'],
      icon:  '🩺',
      link:  'https://github.com/ihsan832/fastapi-patient-management-system',
    },
    {
      title: 'Graduate Admission Predictor',
      desc:  'Regression model predicting graduate school admission chances.',
      tech:  ['Python', 'ML', 'Pandas'],
      icon:  '🎓',
      link:  'https://github.com/ihsan832/graduate-admission-prediction',
    },
    {
      title: 'Pydantic Basics to Advanced',
      desc:  'Comprehensive guide and code examples for data validation with Pydantic.',
      tech:  ['Pydantic', 'Python', 'FastAPI'],
      icon:  '🔍',
      link:  'https://github.com/ihsan832/pydantic-basics-to-advanced',
    },
  ],
}
