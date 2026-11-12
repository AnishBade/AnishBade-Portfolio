/**
 * Everything the site says about me lives in this file.
 * To update the site (new job, new project, new skill), edit the data here —
 * the components only describe how it looks.
 */
import {
  Degree,
  Fact,
  FocusArea,
  Job,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SpokenLanguage,
  Text,
} from './models';

export const PROFILE: Profile = {
  name: 'Anish Bade',
  initials: 'AB',
  email: 'anish.bade@informatik.hs-fulda.de',
  linkedin: 'https://www.linkedin.com/in/anish-bade-711179199',
  github: 'https://github.com/AnishBade',
  location: { en: 'Fulda, Germany', de: 'Fulda, Deutschland' },
  status: {
    en: 'Open to working-student roles · 20 h/week',
    de: 'Offen für Werkstudentenstellen · 20 Std./Woche',
  },
  role: {
    en: 'Software Engineer — Backend, AI & Cloud',
    de: 'Softwareentwickler — Backend, KI & Cloud',
  },
  lede: {
    en: 'I build reliable Python backends, APIs and AI pipelines — and take them from the first client conversation all the way to production. 2+ years shipping platforms for clients in Nepal and the US; now pursuing an M.Sc. in Global Software Development in Fulda, Germany.',
    de: 'Ich entwickle zuverlässige Python-Backends, APIs und KI-Pipelines — vom ersten Kundengespräch bis in den Produktivbetrieb. Über 2 Jahre Berufserfahrung mit Plattformen für Kunden in Nepal und den USA; aktuell Masterstudium Global Software Development in Fulda.',
  },
};

export const NAV: NavItem[] = [
  { id: 'about', label: { en: 'About', de: 'Über mich' } },
  { id: 'experience', label: { en: 'Experience', de: 'Erfahrung' } },
  { id: 'projects', label: { en: 'Projects', de: 'Projekte' } },
  { id: 'skills', label: { en: 'Skills', de: 'Kenntnisse' } },
  { id: 'education', label: { en: 'Education', de: 'Ausbildung' } },
  { id: 'contact', label: { en: 'Contact', de: 'Kontakt' } },
];

/** Looks up a nav label by section id, so section headings and nav stay in sync. */
export function navLabel(id: string): Text {
  return NAV.find((item) => item.id === id)?.label ?? id;
}

export const FACTS: Fact[] = [
  { value: '2+', label: { en: 'years of professional software engineering', de: 'Jahre Berufserfahrung in der Softwareentwicklung' } },
  { value: '3', label: { en: 'client platforms delivered end-to-end', de: 'Kundenplattformen end-to-end umgesetzt' } },
  { value: 'OCR + NLP', label: { en: 'document-intelligence pipeline taken to production', de: 'Pipeline zur Dokumentenerkennung im Produktivbetrieb' } },
  { value: 'EN · DE', label: { en: 'fluent English, German at B2 level', de: 'Englisch fließend, Deutsch auf B2-Niveau' } },
];

export const ABOUT = {
  title: {
    en: 'Engineer at the seam of business and code',
    de: 'Entwickler an der Schnittstelle von Business und Code',
  } as Text,
  paragraphs: [
    {
      en: "I'm a software engineer who likes owning the whole path: sitting with clients to understand the problem, turning requirements into a clean design, building it, testing it, and keeping it running in production.",
      de: 'Ich bin Softwareentwickler und übernehme gern den ganzen Weg: mit Kunden das Problem verstehen, Anforderungen in ein sauberes Design übersetzen, es umsetzen, testen und im Produktivbetrieb stabil halten.',
    },
    {
      en: "Most of my work lives in Python — FastAPI and Django services with role-based access control, asynchronous workers, real-time features and payment integrations — deployed with Docker, Kubernetes and AWS through CI/CD. I've also brought AI into real products: an OCR + NLP pipeline that extracts structured data from invoices, and research fine-tuning mBART and mT5 for low-resource Nepali.",
      de: 'Die meiste Arbeit steckt in Python — FastAPI- und Django-Services mit rollenbasierter Zugriffskontrolle, asynchronen Workern, Echtzeitfunktionen und Zahlungsintegration — bereitgestellt mit Docker, Kubernetes und AWS über CI/CD. Außerdem habe ich KI in echte Produkte gebracht: eine OCR- und NLP-Pipeline, die strukturierte Daten aus Rechnungen extrahiert, sowie Forschung zum Fine-Tuning von mBART und mT5 für ressourcenarmes Nepali.',
    },
    {
      en: "Since April 2026 I've been studying Global Software Development at Hochschule Fulda, where I lead the team building SkillBridge, a tutoring platform for students.",
      de: 'Seit April 2026 studiere ich Global Software Development an der Hochschule Fulda und leite dort das Team, das SkillBridge entwickelt — eine Tutoring-Plattform für Studierende.',
    },
  ] as Text[],
};

export const FOCUS: FocusArea[] = [
  {
    icon: 'server',
    title: 'Backend & APIs',
    text: {
      en: 'REST and GraphQL services, RBAC, async jobs with Celery and RabbitMQ, WebSockets.',
      de: 'REST- und GraphQL-Services, RBAC, asynchrone Jobs mit Celery und RabbitMQ, WebSockets.',
    },
  },
  {
    icon: 'document',
    title: { en: 'Applied AI', de: 'Angewandte KI' },
    text: {
      en: 'OCR and NLP document extraction, LLMs, fine-tuning transformer models with PyTorch.',
      de: 'Dokumentenextraktion mit OCR und NLP, LLMs, Fine-Tuning von Transformer-Modellen mit PyTorch.',
    },
  },
  {
    icon: 'cloud',
    title: 'Cloud & Delivery',
    text: {
      en: 'Docker, Kubernetes, AWS, GitLab CI/CD — plus Pytest regression suites before every release.',
      de: 'Docker, Kubernetes, AWS, GitLab CI/CD — plus Pytest-Regressionstests vor jedem Release.',
    },
  },
];

export const EXPERIENCE_TITLE: Text = { en: "Where I've worked", de: 'Berufserfahrung' };

export const EXPERIENCE: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Kodiary Technologies',
    period: { en: 'Jun 2024 – Aug 2025', de: '06/2024 – 08/2025' },
    location: 'Lalitpur, Nepal',
    bullets: [
      {
        en: 'Led end-to-end backend development of three client platforms: construction management (Sitedeck), legal-tech notarization (JustNotarized) and pilgrimage guidance (Safar).',
        de: 'End-to-End-Backend-Entwicklung von drei Kundenplattformen: Baumanagement (Sitedeck), Legal-Tech-Notarisierung (JustNotarized) und Pilger-App (Safar).',
      },
      {
        en: 'Designed scalable REST APIs with FastAPI and Django, including role-based access control and modular service architectures.',
        de: 'Konzeption und Umsetzung skalierbarer REST-APIs mit FastAPI und Django inkl. rollenbasierter Zugriffskontrolle und modularer Service-Architektur.',
      },
      {
        en: 'Built a document-intelligence pipeline for Sitedeck — OCR plus NLP-based extraction of structured invoice data — and took it from prototype to production.',
        de: 'KI-Pipeline für Sitedeck zur Rechnungserfassung per OCR und NLP-basierter Datenextraktion — vom Prototyp bis in den Produktivbetrieb.',
      },
      {
        en: 'Implemented asynchronous processing with Celery and RabbitMQ and real-time features over WebSocket/Socket.IO; built React admin dashboards with role-based views and integrated Stripe payments.',
        de: 'Asynchrone Verarbeitung mit Celery und RabbitMQ, Echtzeitfunktionen über WebSocket/Socket.IO; React-Admin-Dashboards mit rollenbasierten Ansichten und Stripe-Integration.',
      },
      {
        en: 'Wrote automated and regression tests with Pytest before each release; deployed with Docker and Kubernetes on AWS via GitLab CI/CD; worked directly with clients on requirements and live demos.',
        de: 'Automatisierte und Regressionstests mit Pytest vor jedem Release; Deployment mit Docker und Kubernetes auf AWS über GitLab CI/CD; direkte Abstimmung mit Kunden zu Anforderungen und Live-Demos.',
      },
    ],
    tags: ['FastAPI', 'Django', 'React', 'Celery', 'RabbitMQ', 'Socket.IO', 'Stripe', 'Pytest', 'Docker', 'Kubernetes', 'AWS', 'GitLab CI/CD'],
  },
  {
    role: { en: 'IT Consultant (Freelance)', de: 'IT-Berater (freiberuflich)' },
    company: 'Xbuild Constructions Pvt. Ltd.',
    period: { en: 'Jul 2024 – Dec 2025', de: '07/2024 – 12/2025' },
    location: 'Lalitpur, Nepal',
    bullets: [
      {
        en: 'Built and hosted the company website and an internal management system for employee, project and construction-site data.',
        de: 'Entwicklung und Hosting der Unternehmenswebsite sowie eines internen Managementsystems für Mitarbeiter-, Projekt- und Baustellendaten.',
      },
      {
        en: 'Served as primary technology advisor to management on IT systems and tooling.',
        de: 'Technologieberatung der Geschäftsführung zu IT-Systemen und Werkzeugen.',
      },
    ],
    tags: [
      { en: 'Web development', de: 'Webentwicklung' },
      { en: 'Internal tools', de: 'Interne Tools' },
      'Hosting',
      { en: 'IT consulting', de: 'IT-Beratung' },
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Tekvortex Pvt. Ltd.',
    period: { en: 'Jul 2023 – May 2024', de: '07/2023 – 05/2024' },
    location: 'Houston, TX, USA',
    bullets: [
      {
        en: 'Built backend services with FastAPI and GraphQL for InvisiRisk, a US-market SBOM platform for software supply-chain security — from research and requirements analysis to production.',
        de: 'Backend-Entwicklung mit FastAPI und GraphQL für InvisiRisk, eine SBOM-Plattform für Software-Supply-Chain-Security im US-Markt — von der Anforderungsanalyse bis zum Produktivbetrieb.',
      },
      {
        en: 'Developed modules for automated vulnerability tracking (DevSecOps) on top of SQL and NoSQL databases.',
        de: 'Module zur automatisierten Schwachstellenverfolgung (DevSecOps) mit SQL- und NoSQL-Datenbanken.',
      },
    ],
    tags: ['FastAPI', 'GraphQL', 'PostgreSQL', 'MongoDB', 'DevSecOps', 'SBOM'],
  },
  {
    role: { en: 'Technical Content Writer', de: 'Technischer Autor' },
    company: 'Programiz (Parewa Labs Pvt. Ltd.)',
    period: { en: 'May 2023 – Jul 2023', de: '05/2023 – 07/2023' },
    location: 'Lalitpur, Nepal',
    bullets: [
      {
        en: 'Wrote programming tutorials and quizzes on Python, data structures and algorithms for one of the most widely used learn-to-code platforms, working in agile sprints.',
        de: 'Programmier-Tutorials und Quizze zu Python, Datenstrukturen und Algorithmen für eine der meistgenutzten Lernplattformen für Programmierung, in agilen Sprints.',
      },
    ],
    tags: [
      'Python',
      { en: 'Data structures & algorithms', de: 'Datenstrukturen & Algorithmen' },
      { en: 'Technical writing', de: 'Technische Redaktion' },
    ],
  },
];

const CLIENT_KODIARY: Text = { en: 'Client · Kodiary', de: 'Kunde · Kodiary' };

export const PROJECTS_TITLE: Text = { en: 'Selected work', de: 'Ausgewählte Projekte' };

export const PROJECTS: Project[] = [
  {
    featured: true,
    name: 'SkillBridge',
    badge: { en: 'University · Team lead', de: 'Hochschule · Team Lead' },
    year: '2026',
    subtitle: {
      en: 'Tutoring platform for university students · HS Fulda, team of 4',
      de: 'Tutoring-Plattform für Studierende · HS Fulda, 4er-Team',
    },
    bullets: [
      {
        en: 'As team lead and backend lead, designed the backend architecture (routes, services/repositories, schemas, models), the MySQL data model and the REST API contracts consumed by the Angular frontend.',
        de: 'Als Team Lead und Backend Lead Entwurf der Backend-Architektur (Routen, Services/Repositories, Schemas, Modelle), des MySQL-Datenmodells und der REST-API-Verträge für das Angular-Frontend.',
      },
      {
        en: 'Authentication and role-based access for four roles, password hashing, sign-up restricted to university e-mail addresses, input and upload validation.',
        de: 'Authentifizierung und rollenbasierter Zugriff für vier Rollen, Passwort-Hashing, Registrierung nur mit Hochschul-E-Mail, Eingabe- und Upload-Validierung.',
      },
      {
        en: 'Pytest integration tests, 15 manual QA test cases across browsers and mobile, and code reviews via GitHub pull requests; deployed with NGINX on AWS EC2.',
        de: 'Pytest-Integrationstests, 15 manuelle QA-Testfälle über Browser und Mobilgeräte, Code Reviews über GitHub Pull Requests; Deployment mit NGINX auf AWS EC2.',
      },
    ],
    tags: ['FastAPI', 'MySQL', 'Angular', 'NGINX', 'AWS EC2', 'Pytest'],
  },
  {
    name: 'Sitedeck',
    badge: CLIENT_KODIARY,
    year: '2024–25',
    subtitle: { en: 'Construction management platform', de: 'Baumanagement-Plattform' },
    summary: {
      en: 'Scalable FastAPI backend with RBAC and an AI pipeline that reads invoices via OCR and extracts structured data with NLP — taken from prototype to production.',
      de: 'Skalierbares FastAPI-Backend mit RBAC und eine KI-Pipeline, die Rechnungen per OCR liest und strukturierte Daten mit NLP extrahiert — vom Prototyp bis in den Produktivbetrieb.',
    },
    tags: ['FastAPI', 'OCR', 'NLP', 'PyTorch', 'PostgreSQL'],
  },
  {
    name: 'JustNotarized',
    badge: CLIENT_KODIARY,
    year: '2024–25',
    subtitle: { en: 'Legal-tech notarization platform', de: 'Legal-Tech-Plattform für Notarisierung' },
    summary: {
      en: 'End-to-end backend for an online notarization service: REST APIs, role-based access control and a modular service architecture, covered by Pytest regression suites and shipped via CI/CD.',
      de: 'End-to-End-Backend für einen Online-Notarisierungsdienst: REST-APIs, rollenbasierte Zugriffskontrolle und modulare Service-Architektur, abgesichert durch Pytest-Regressionstests und ausgeliefert über CI/CD.',
    },
    tags: ['Python', 'REST', 'RBAC', 'Pytest', 'Docker'],
  },
  {
    name: 'Safar',
    badge: CLIENT_KODIARY,
    year: '2024–25',
    subtitle: { en: 'Pilgrimage guidance app', de: 'Pilger-App' },
    summary: {
      en: 'FastAPI backend with role-based access and real-time features, plus a React admin dashboard; deployed with Docker, Kubernetes and GitLab CI/CD. I worked on both the backend and the dashboard.',
      de: 'FastAPI-Backend mit rollenbasiertem Zugriff und Echtzeitfunktionen sowie ein React-Admin-Dashboard; Deployment mit Docker, Kubernetes und GitLab CI/CD. Ich habe an Backend und Dashboard mitgearbeitet.',
    },
    tags: ['FastAPI', 'React', 'Socket.IO', 'Kubernetes'],
  },
  {
    name: 'InvisiRisk',
    badge: { en: 'Product · Tekvortex', de: 'Produkt · Tekvortex' },
    year: '2023–24',
    subtitle: { en: 'SBOM platform for software supply-chain security', de: 'SBOM-Plattform für Software-Supply-Chain-Security' },
    summary: {
      en: 'Backend services and GraphQL APIs for a US-market Software Bill of Materials platform, including automated vulnerability-tracking modules across SQL and NoSQL stores.',
      de: 'Backend-Services und GraphQL-APIs für eine Software-Bill-of-Materials-Plattform im US-Markt, inklusive Modulen zur automatisierten Schwachstellenverfolgung über SQL- und NoSQL-Speicher.',
    },
    tags: ['FastAPI', 'GraphQL', 'SQL', 'NoSQL', 'DevSecOps'],
  },
  {
    name: { en: 'Nepali Paraphrasing System', de: 'Nepali-Paraphrasierungssystem' },
    badge: { en: 'Research', de: 'Forschung' },
    year: 'NLP',
    subtitle: { en: 'Low-resource NLP', de: 'NLP für ressourcenarme Sprachen' },
    summary: {
      en: 'Fine-tuned the multilingual sequence-to-sequence models mBART and mT5 to paraphrase Nepali text; built a custom dataset and evaluated output quality. Research toward publication.',
      de: 'Fine-Tuning der mehrsprachigen Sequence-to-Sequence-Modelle mBART und mT5 zur Paraphrasierung nepalesischer Texte; eigener Datensatz und Evaluation der Ausgabequalität. Forschung mit Ziel einer Veröffentlichung.',
    },
    tags: ['Python', 'PyTorch', 'Hugging Face', 'mBART', 'mT5'],
  },
];

export const SKILLS_TITLE: Text = { en: 'Tools I work with', de: 'Meine Werkzeuge' };

export const SKILLS: SkillGroup[] = [
  {
    title: { en: 'Languages', de: 'Programmiersprachen' },
    items: [{ name: 'Python', core: true }, { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'Java' }, { name: 'SQL' }, { name: 'C / C++' }],
  },
  {
    title: 'Backend',
    items: [{ name: 'FastAPI', core: true }, { name: 'Django', core: true }, { name: 'REST' }, { name: 'GraphQL' }, { name: 'WebSocket / Socket.IO' }, { name: 'RBAC' }],
  },
  {
    title: { en: 'AI & ML', de: 'KI & ML' },
    items: [{ name: 'LLMs' }, { name: 'NLP' }, { name: 'OCR' }, { name: 'PyTorch' }, { name: 'Hugging Face Transformers' }, { name: 'Fine-tuning (mBART, mT5)' }],
  },
  {
    title: 'Frontend',
    items: [{ name: 'React', core: true }, { name: 'Angular' }, { name: 'HTML / CSS' }],
  },
  {
    title: { en: 'Data & Messaging', de: 'Daten & Messaging' },
    items: [{ name: 'PostgreSQL', core: true }, { name: 'MySQL' }, { name: 'MongoDB' }, { name: 'Redis' }, { name: 'Celery' }, { name: 'RabbitMQ' }, { name: 'Pandas' }, { name: 'NumPy' }, { name: 'ETL' }],
  },
  {
    title: 'Cloud & DevOps',
    items: [{ name: 'Docker', core: true }, { name: 'Kubernetes', core: true }, { name: 'AWS' }, { name: 'GitLab CI/CD' }, { name: 'NGINX' }, { name: 'Git' }, { name: 'Linux' }, { name: 'Bash' }],
  },
  {
    title: { en: 'Testing & Practice', de: 'Testing & Methoden' },
    wide: true,
    items: [
      { name: 'Pytest', core: true },
      { name: { en: 'Regression testing', de: 'Regressionstests' } },
      { name: { en: 'Code review', de: 'Code Reviews' } },
      { name: { en: 'Agile development', de: 'Agile Entwicklung' } },
      { name: { en: 'Technical documentation', de: 'Technische Dokumentation' } },
      { name: { en: 'Requirements engineering with clients', de: 'Anforderungsaufnahme mit Kunden' } },
    ],
  },
];

export const EDUCATION_TITLE: Text = { en: 'Education & languages', de: 'Ausbildung & Sprachen' };

export const EDUCATION: Degree[] = [
  {
    degree: 'M.Sc. Global Software Development',
    school: {
      en: 'Fulda University of Applied Sciences (Hochschule Fulda) · Fulda, Germany',
      de: 'Hochschule Fulda · Fulda, Deutschland',
    },
    period: { en: 'Apr 2026 – present', de: 'Seit 04/2026' },
    note: {
      en: 'Team lead & backend lead of the SkillBridge semester project.',
      de: 'Team Lead & Backend Lead des Semesterprojekts SkillBridge.',
    },
  },
  {
    degree: 'B.Sc. Electronics, Communication & Information Engineering',
    school: 'IOE Pulchowk Campus, Tribhuvan University · Lalitpur, Nepal',
    period: { en: 'Feb 2019 – Apr 2023', de: '02/2019 – 04/2023' },
    note: { en: 'Full scholarship', de: 'Vollstipendium' },
    highlight: true,
  },
];

export const LANGUAGES_LABEL: Text = { en: 'Languages', de: 'Sprachen' };

export const LANGUAGES: SpokenLanguage[] = [
  { name: { en: 'English', de: 'Englisch' }, level: { en: 'Fluent', de: 'Fließend' } },
  { name: { en: 'German', de: 'Deutsch' }, level: 'B2' },
  { name: 'Nepali', level: { en: 'Native', de: 'Muttersprache' } },
];

export const CONTACT = {
  title: { en: "Let's build something reliable.", de: 'Lassen Sie uns etwas Zuverlässiges bauen.' } as Text,
  lede: {
    en: "I'm currently open to working-student and internship roles in software engineering — 20 hours a week during the semester and full-time during breaks. The fastest way to reach me is e-mail.",
    de: 'Ich bin offen für Werkstudenten- und Praktikumsstellen in der Softwareentwicklung — 20 Stunden pro Woche im Semester und Vollzeit in den Semesterferien. Am schnellsten erreichen Sie mich per E-Mail.',
  } as Text,
};

/** Small interface strings that aren't part of the CV content. */
export const UI = {
  skip: { en: 'Skip to content', de: 'Zum Inhalt springen' },
  contactCta: { en: 'Get in touch', de: 'Kontakt aufnehmen' },
  toggleTheme: { en: 'Toggle dark mode', de: 'Dunkelmodus umschalten' },
  openMenu: { en: 'Open menu', de: 'Menü öffnen' },
  language: { en: 'Language', de: 'Sprache' },
  facts: { en: 'At a glance', de: 'Auf einen Blick' },
  footerBuilt: { en: 'Designed and hand-built with Angular.', de: 'Selbst gestaltet und mit Angular gebaut.' },
  backToTop: { en: 'Back to top ↑', de: 'Nach oben ↑' },
  portraitAlt: { en: 'Portrait of Anish Bade', de: 'Porträt von Anish Bade' },
  meta: {
    title: {
      en: 'Anish Bade — Software Engineer · Backend, AI & Cloud',
      de: 'Anish Bade — Softwareentwickler · Backend, KI & Cloud',
    },
    description: {
      en: 'Anish Bade is a software engineer with 2+ years of experience building Python backends, REST/GraphQL APIs and AI pipelines (OCR, NLP) and deploying them with Docker, Kubernetes and AWS. M.Sc. Global Software Development student at Hochschule Fulda.',
      de: 'Anish Bade ist Softwareentwickler mit über 2 Jahren Erfahrung in Python-Backends, REST-/GraphQL-APIs und KI-Pipelines (OCR, NLP) sowie Deployment mit Docker, Kubernetes und AWS. Masterstudent Global Software Development an der Hochschule Fulda.',
    },
  },
} satisfies Record<string, Text | Record<string, Text>>;
