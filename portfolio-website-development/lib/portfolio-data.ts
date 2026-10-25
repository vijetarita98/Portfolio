// Update these URLs with your real profile links.
export const profile = {
  name: 'Vijeta Rita',
  initials: 'VR',
  role: 'B.Tech Materials Engineering @ IIT Jodhpur',
  tagline:
    'I build AI-driven products and low-level systems tools, combining machine learning, full-stack development, and a solid foundation in data structures and algorithms.',
  email: 'vijetarita98@gmail.com',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    leetcode: 'https://leetcode.com/',
  },
}

export const about = [
  "I'm a first-year B.Tech student in Materials Engineering at the Indian Institute of Technology Jodhpur, with a strong pull towards computer science, AI and systems programming.",
  'I enjoy turning ideas into working software, from an AI counselling platform that helps students pick the right college branch to a C-based utility that reads telemetry straight from the Linux kernel.',
  "Outside the classroom, I'm part of the Quant Club and the Training & Placement Cell, and I keep sharpening my problem-solving with regular DSA practice.",
]

export const stats = [
  { value: '8.27', label: 'CGPA (up to Sem 2)' },
  { value: '220+', label: 'LeetCode problems' },
  { value: '2', label: 'Featured projects' },
]

export const skillGroups = [
  { title: 'Languages', items: ['C++', 'Python', 'C'] },
  { title: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'] },
  {
    title: 'Libraries & Frameworks',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Tools & Platforms',
    items: ['VS Code', 'Git', 'GitHub', 'Linux / Kernel Interfaces'],
  },
  {
    title: 'Core Concepts',
    items: ['Data Structures & Algorithms', 'OOP', 'Machine Learning'],
  },
  {
    title: 'AI Tools & Workflow',
    items: ['Google AI Studio', 'Generative AI Tools', 'Vibe Coding'],
  },
]

export const projects = [
  {
    title: 'Counsel.AI',
    subtitle: 'AI-Driven Student Advisory Platform',
    meta: "WARP '26",
    description:
      'Adaptive AI counselling platform that recommends optimal college-branch choices for entrance exam qualifiers.',
    highlights: [
      'Built an MCP-based data layer combining structured PostgreSQL/NeonDB data (NIRF rankings, seat matrices) with vector search over unstructured campus insights.',
      'Architected a conversational platform using an Adaptive Selection Algorithm and a Neural Cognitive Diagnosis Model (NCDM) to profile student strengths in real time.',
      'Engineered a hybrid recommendation engine with Mistral AI, Pinecone and cosine-similarity embeddings to match students with top-fit options.',
    ],
    stack: ['React', 'Django', 'PyTorch', 'Pinecone', 'NeonDB', 'Mistral AI', 'Python'],
    link: 'https://github.com/',
  },
  {
    title: 'Real-Time System Resource Monitor',
    subtitle: 'Linux Kernel Monitoring Utility',
    meta: 'Oct 2025 – Nov 2025',
    description:
      'A system monitoring CLI that interacts directly with the Linux kernel through standard system interfaces.',
    highlights: [
      'Tracks real-time CPU utilization, memory consumption and disk I/O by reading /proc/stat, /proc/meminfo and /proc/diskstats.',
      'Uses low-level system calls, structured file handling, custom structs and optimized loops to parse kernel telemetry into clean terminal output.',
    ],
    stack: ['C', 'Linux', '/proc', 'System Calls'],
    link: 'https://github.com/',
  },
]

export const education = [
  {
    degree: 'B.Tech, Materials Engineering',
    institute: 'Indian Institute of Technology Jodhpur',
    score: 'CGPA 8.27 / 10 (up to Sem 2)',
    year: '2025 – 2029 (Expected)',
  },
  {
    degree: 'Higher Secondary (H.S.C.)',
    institute: 'Maharashtra State Board',
    score: '85%',
    year: '2024',
  },
  {
    degree: 'Secondary School (S.S.C.)',
    institute: 'Maharashtra State Board',
    score: '98%',
    year: '2022',
  },
]

export const coursework = [
  'Introduction to Computer Science',
  'Linear Algebra (A-)',
  'Calculus',
  'Introduction to Machine Learning',
]

export const involvements = [
  { role: 'Core Member', org: 'Quant Club, IIT Jodhpur', period: 'Present' },
  {
    role: 'Support Team Member',
    org: 'Training & Placement Cell, IIT Jodhpur',
    period: 'Present',
  },
  {
    role: 'Content Writing Volunteer',
    org: "Prometeo '26 (Annual TechFest), IIT Jodhpur",
    period: 'Past',
  },
]
