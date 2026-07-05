import freelanceCrmImg from '../assets/projects/freelance-crm.png';
import inventoryImg from '../assets/projects/inventory-management.png';
import qrAttendanceImg from '../assets/projects/qr-attendance.png';

import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaCode,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiDjango,
  SiPostgresql,
  SiPostman,
  SiRender,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export type SkillGroup = {
  title: string;
  accent: string;
  skills: { name: string; level: number; icon: IconType }[];
};

export type Project = {
  title: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  features: string[];
  tech: string[];
  accent: string;
  image?: string;
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sona2603', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sona-nagarajan-750b75257/',
    icon: FaLinkedin,
  },
  { label: 'Email', href: 'mailto:sonanagarajan076@gmail.com', icon: FaEnvelope },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    accent: 'from-mint to-skyglass',
    skills: [
      { name: 'HTML', level: 94, icon: FaHtml5 },
      { name: 'CSS', level: 92, icon: FaCss3Alt },
      { name: 'JavaScript', level: 90, icon: FaJs },
      { name: 'TypeScript', level: 84, icon: SiTypescript },
      { name: 'React', level: 90, icon: FaReact },
      { name: 'Vite', level: 86, icon: SiVite },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-coral to-mint',
    skills: [
      { name: 'Python', level: 92, icon: FaPython },
      { name: 'Django', level: 90, icon: SiDjango },
      { name: 'Django REST Framework', level: 88, icon: SiDjango },
      { name: 'REST APIs', level: 91, icon: FaCode },
      { name: 'Authentication', level: 88, icon: FaDatabase },
      { name: 'JWT', level: 86, icon: FaDatabase },
    ],
  },
  {
    title: 'Database',
    accent: 'from-skyglass to-iris',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: SiPostgresql },
      { name: 'SQLite', level: 84, icon: SiSqlite },
    ],
  },
  {
    title: 'Cloud & Tools',
    accent: 'from-iris to-coral',
    skills: [
      { name: 'AWS S3', level: 82, icon: FaAws },
      { name: 'AWS SES', level: 80, icon: FaAws },
      { name: 'Render', level: 86, icon: SiRender },
      { name: 'Git', level: 90, icon: FaGitAlt },
      { name: 'GitHub', level: 90, icon: FaGithub },
      { name: 'Postman', level: 88, icon: SiPostman },
      { name: 'VS Code', level: 92, icon: FaCode },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Freelance CRM',
    liveUrl: 'https://freelance-crm-1-i0if.onrender.com/',
    githubUrl: 'https://github.com/Sona2603/freelance-crm',
    description:
      'A CRM platform for managing clients, projects, invoices, leads, and business workflows with secure authentication and an intuitive dashboard.',
    features: [
      'User Authentication',
      'Client Management',
      'Project Tracking',
      'Invoice Management',
      'Dashboard',
      'Responsive UI',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'JWT', 'REST APIs', 'Render'],
    accent: 'mint',
    image: freelanceCrmImg,
  },
  {
    title: 'Inventory Management System',
    liveUrl: 'https://inventory-management-1-wu5m.onrender.com',
    githubUrl: 'https://github.com/Sona2603/inventory-management',
    description:
      'A complete inventory management platform with product tracking, suppliers, stock monitoring, authentication, and reporting.',
    features: [
      'Inventory Tracking',
      'Product Management',
      'Supplier Management',
      'Authentication',
      'Dashboard',
      'Reports',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'REST APIs', 'Render'],
    accent: 'coral',
    image: inventoryImg,
  },
  {
    title: 'QR Attendance Management System',
    liveUrl: 'https://qrattendance-1-xos0.onrender.com',
    githubUrl: 'https://github.com/Sona2603/QRAttendance',
    description:
      'A secure QR-code-based attendance management system with classroom management, attendance tracking, and authentication.',
    features: [
      'QR Attendance',
      'Attendance Reports',
      'Classroom Management',
      'Authentication',
      'Dashboard',
      'Responsive UI',
    ],
    tech: ['React', 'Django', 'JWT', 'PostgreSQL', 'REST APIs', 'Render'],
    accent: 'skyglass',
    image: qrAttendanceImg,
  },
];

export const timeline = [
  'Backend Development',
  'API Development',
  'Database Design',
  'Authentication',
  'Cloud Services',
  'Deployment',
  'Agile Collaboration',
];

export const stats = [
  { label: 'Projects Completed', value: 12 },
  { label: 'Deployments', value: 10 },
  { label: 'REST APIs Built', value: 36 },
  { label: 'Database Models Created', value: 48 },
  { label: 'Features Implemented', value: 120 },
];
