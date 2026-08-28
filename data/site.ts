mport type { IconType } from 'react-icons';
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaPenNib,
  FaRobot,
  FaUsers,
} from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';

export const EMAIL = 'gmatthew022@gmail.com';
export const RESUME_PATH = '/Matthew Garcia Resume.pdf';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Extracurriculars', href: '/extracurriculars' },
  { label: 'Projects', href: '/projects' },
] as const;

export type SocialLink = {
  Icon: IconType;
  label: string;
  color: string;
  href?: string;
  action?: 'copyEmail' | 'openResume';
};

export const socialLinks: SocialLink[] = [
  { Icon: FaGithub, label: 'Github', color: '#CE82FF', href: 'https://github.com/mattgar417' },
  { Icon: FaLinkedin, label: 'LinkedIn', color: '#0077B5', href: 'https://www.linkedin.com/in/mattgar417' },
  { Icon: FaPenNib, label: 'Substack', color: '#FF4B4B', href: 'https://substack.com/@mattgar417' },
  { Icon: FaEnvelope, label: 'Email', color: '#58CC02', action: 'copyEmail' },
  { Icon: GrDocumentUser, label: 'Resume', color: '#1CB0F6', action: 'openResume' },
];

export const bio = [
  `Hello! I'm a 4th year Electrical and Computer Engineering student at Northeastern University. At the moment, I currently work at the ACT Lab under Professor Megan Hofmann, where my research focus is on guiding stable diffusion for generating digital fabrication images. Previously, I worked as a researcher at the SINRG Lab under Professor Mallesham Dasari, where I contributed to an open-source platform for testing various AI modalities for smart glasses. In addition, I've also worked as a software engineer for a seizure monitoring startup, ZOR!, where I led the creation of an insights pipeline for users to track their seizure patterns and associated metrics.`,
  `My core research interests lie in machine learning, mobile systems, ubiquitous computing, and human-computer interaction. My goal is to combine these interests, applying them to AI systems that are able to sense and reason within the physical world, whether that be in the design of fabrics or embedded within smart glasses. Outside of work, I enjoy reading, writing essays, and working on my own projects. Feel free to explore my work in this website and connect with me through the links below!`,
];

/** One shape for every card on the site; unused fields are simply omitted. */
export type Item = {
  title: string;
  /** Role held — experiences and extracurriculars only. */
  position?: string;
  description: string;
  /** Tech stack chips — projects only. */
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  /** Fallback banner when there is no image. */
  gradient: string;
  Icon?: IconType;
};

export const experiences: Item[] = [
  {
    title: 'ZOR!',
    position: 'Software Engineer',
    description:
      'Generating insights for ZOR!’s seizure monitoring app while developing AI pipeline for future prediction',
    liveLink: 'https://zor.llc',
    image: '/ZOR-Logo.png',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'SINRG Laboratory',
    position: 'AJC Merit Research Scholar',
    description:
      'Developed embedded systems for XR/AI smart glasses and created a backend to stream sensor/audio data from Arduino to LLMs and STT services',
    liveLink: 'https://sinrg.org',
    image: '/SINRG-Logo.png',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  },
  {
    title: 'National Energy Technology Laboratory',
    position: 'Research Associate',
    description:
      'Characterized simulated acoustic signals using machine learning to develop early kick detection algorithm in offshore wells as part of the Mickey Leland Energy Fellowship Program',
    image: '/NETL-Logo.png',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  },
  {
    title: 'Mayflower Communications Company',
    position: 'Software Engineering Co-op',
    description:
      'Programmed DSP algorithms in C to detect and neutralize GPS spoofers; ported a ResNet from Python to C for real-time signal classification',
    image: '/Mayflower Logo.png',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #800000 100%)',
  },
];

export const extracurriculars: Item[] = [
  {
    title: 'IEEE',
    position: 'President',
    description:
      'Served as the head of the Northeastern chapter of IEEE, overseeing a 10-person e-board and organizing hackathons, outreach events, workshops, and company visitations',
    liveLink:
      'https://coe.northeastern.edu/orgs/ieee-institute-of-electrical-and-electronics-engineers-nu-student-chapter/',
    image: '/IEEE-Logo.png',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'AI NU',
    position: 'Director of Education',
    description:
      "Served as the VP of Northeastern's AI club, planning hackathons, speaker events, bootcamps, and organizing projects",
    liveLink: 'https://aineu.org',
    image: '/AINU-Logo.png',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  },
  {
    title: 'SHPE',
    position: 'Treasurer',
    description:
      'Served as the treasurer of Northeastern’s chapter of SHPE, planning the club’s annual budget, planning for convention, and handling reimbursements',
    liveLink: 'https://shpe.sites.northeastern.edu',
    image: '/SHPE-Logo.png',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  },
  {
    title: 'URF',
    position: 'Ambassador',
    description:
      "Represented Northeastern's Office of Undergraduate Research & Fellowships (URF) at various events, including orientations, classroom visits, panels, and workshops",
    liveLink: 'https://undergraduate.northeastern.edu/research',
    image: '/NEU-Logo.png',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  },
];

export const projects: Item[] = [
  {
    title: 'Smart Glasses',
    description:
      'XR Glasses that interacts with speakers and microphones, connecting via Bluetooth to an app to access LLMs',
    technologies: ['C++', 'Arduino', 'Python', 'Javascript', 'Kotlin'],
    githubLink: 'https://github.com/SINRG-Lab',
    image: '/Smart-Glasses.png',
    gradient: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #2B70C9 100%)',
  },
  {
    title: 'ZOR! - Seizure Monitoring App',
    description: 'iOS application that visualizes seizure patterns and generates insights',
    technologies: ['Python', 'Pytorch'],
    githubLink: 'https://github.com/ZOR-app',
    image: '/ZOR-Trends-Page.png',
    gradient: 'linear-gradient(135deg, #1a0d00 0%, #4d2600 50%, #804000 100%)',
  },
  {
    title: 'Mecha Mayhem',
    description: 'Educational and interactive game presented at the Boston’s Children Museum',
    technologies: ['C++', 'Arduino', 'Processing'],
    githubLink: 'https://github.com/mattgar417/Mecha-Mayhem',
    image: '/Mecha-Mayhem.png',
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #333 100%)',
  },
  {
    title: 'Research Paper Extraction Tool',
    description: 'Tool to extract and analyze data from research papers',
    technologies: ['Python', 'Pytorch', 'HTML'],
    githubLink: 'https://github.com/mattgar417/AI-Research-Tool',
    Icon: FaRobot,
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  },
  {
    title: 'The Curse of La Llorona',
    description: 'Interactive board game based off of Mexican folklore',
    technologies: ['C++', 'Arduino'],
    githubLink: 'https://github.com/mattgar417/Curse-Of-LaLlorona',
    image: '/Llorona-Card.png',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #800000 100%)',
  },
  {
    title: 'Sudoku Generator',
    description: 'Generates and populates a solvable sudoku grid',
    technologies: ['Python'],
    githubLink: 'https://github.com/mattgar417/Sudoku-Generator',
    image: '/Generated-Sudoku-Grid.png',
    gradient: 'linear-gradient(135deg, #001f3f 0%, #003366 50%, #0055a5 100%)',
  },
  {
    title: 'Omnidirectional Super-Resolution Reconstruction Application',
    description:
      'Performs single image super-resolution on omnidirectional cameras, reconstructing images from low to high resolution',
    technologies: ['Python', 'Pytorch'],
    githubLink: 'https://github.com/mattgar417/Omnidirectional-Super-Resolution',
    image: '/EDSR-Diagram.png',
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  },
  {
    title: 'Electrocardiogram System',
    description: 'An analog and digital system able to filter and analyze an ECG signal',
    technologies: ['Circuit Design', 'Matlab'],
    liveLink:
      'https://docs.google.com/document/d/152AmXvRAE57zt7r68lldgBgvrbklMp7Xmk-hy2SVsYg/edit?usp=sharing',
    image: '/EKG-Circuit.png',
    gradient: 'linear-gradient(135deg, #004d00 0%, #006600 50%, #008000 100%)',
  },
  {
    title: 'Smart City Resource Allocation',
    description: 'An application able to allocate resources to various sectors of a digital smart city',
    technologies: ['C++'],
    githubLink: 'https://github.com/mattgar417/Smart-City',
    Icon: FaRobot,
    gradient: 'linear-gradient(135deg, #1a1a00 0%, #333300 50%, #4d4d00 100%)',
  },
  {
    title: 'RISC-V Architecture',
    description: 'Simulates and tests the architecture of a RISC-V processor',
    technologies: ['SystemVerilog', 'RISC-V'],
    githubLink: 'https://github.com/mattgar417/RISCV-Architecture',
    image: '/RISCV-Board.jpg',
    gradient: 'linear-gradient(135deg, #1a001a 0%, #330033 50%, #4d004d 100%)',
  },
  {
    title: 'Personal Website',
    description: 'Website containing my experiences and projects',
    technologies: ['TypeScript', 'Next.js', 'React'],
    githubLink: 'https://github.com/mattgar417/Personal-Website',
    image: '/Personal-Website-Page.png',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'Machine Learning Compendium',
    description:
      'Document compiling information about machine learning and deep learning algorithms with associated code',
    technologies: ['Python', 'Pytorch'],
    liveLink:
      'https://docs.google.com/document/d/1qpSZIiWX02kXmSOw8MFxGwPH_y2vtTG1jvBXJrj75J0/edit?usp=sharing',
    image: '/NB-Confusion-Matrix.png',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  },
];

/** Drives both the banner-adjacent section previews on the home page and each detail page. */
export const sections = [
  {
    id: 'experiences',
    href: '/experiences',
    title: 'Experiences',
    Icon: FaBriefcase,
    blurb: 'Research labs, startups, and co-ops where I have built software and hardware.',
    items: experiences,
  },
  {
    id: 'extracurriculars',
    href: '/extracurriculars',
    title: 'Extracurriculars',
    Icon: FaUsers,
    blurb: 'Student organizations I have led and contributed to at Northeastern.',
    items: extracurriculars,
  },
  {
    id: 'projects',
    href: '/projects',
    title: 'Projects',
    Icon: FaLaptopCode,
    blurb: 'Personal and academic builds spanning ML, embedded systems, and games.',
    items: projects,
  },
] as const;
