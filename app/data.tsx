import {
    Code, Volleyball, Music, Coffee, Palette,
    Camera,
    Gamepad2,
    Plane,
    Dumbbell, Rocket, Star, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Mail, MessageCircle,
} from "lucide-react";


const experiences = [
    {
        company: "Lid",
        role: "Inside Sales",
        period: "2025",
        location: "Remote",
        description: "Worked as an Inside Sales at LIDDEV, identifying business opportunities and building strong client relationships. Promoted innovative observability and monitoring solutions aligned with client needs.Contributed to sales strategies supporting the company's commercial growth.",
    },
    {
        company: "The Office Gurus",
        role: "Call Center Agent",
        period: "2024 - 2025",
        location: "San Salvador, El Salvador",
        description: "Assisted Zillow clients via chat, qualifying leads and connecting them with local agents. Developed a KPI management web app and strengthened skills in communication and lead generation.",
    },
    {
        company: "Stratega-IT",
        role: "Software Developer Intern",
        period: "2023",
        location: "San Salvador, El Salvador",
        description: "Led the development of a comprehensive web platform for CRM, billing, and ticketing using React.js, Node.js (RESTful APIs), and PostgreSQL. Integrated advanced technologies like Resend, TailwindCSS, and Prisma ORM to enhance functionality and user experience.Delivered a robust solution for customer service management, improving operational efficiency and system scalability.",
    }
];



const stack = [
    'JavaScript', 'TypeScript', 'MongoDB',
    'React', 'Next.js', 'HTML5', 'MySQL',
    'PostgreSQL', 'Prisma', 'Node.js',
    'C#', '.NET', 'Java',
    'TailwindCSS', 'PHP', 'CSS'
]

const skills = [
    'UI/UX', 'Frontend Development', 'Figma', 'Canva',
    'Bilingual', 'Adaptability', 'Creative', 'Realiable',
    'AI', 'SCRUM', 'CI/CD', 'Microsoft 365', 'Agile'
]

const hobbies = [
    { name: "Coding", icon: "💻", description: "Building amazing web applications" },
    { name: "Gaming", icon: "🎮", description: "Strategy games and indie titles" },
    { name: "Music", icon: "🎵", description: "Brent Faiyaz, Hozier, J.Cole & more" },
    { name: "Volleyball", icon: "🏐", description: "Wing spiker for almost 10 years" },
    { name: "Drawing", icon: "✏️", description: "Illustrating the world I picture" },
    { name: "Read", icon: "📖", description: "Jhon Green never fails" }
];

const certifications = [
    "Grafana Observability Sales Professional",
    "Relational to MongoDB",
    "Oracle Next Education Program - Frontend",
    "CCNAv7: Networks Introduction",
    "AWS Foundation of Prompt Engineering",
    "AWS Generative AI for Executives",
];

const education = [
    {
        degree: "Bachelor of Computer Science",
        institution: "Universidad Don Bosco",
        year: "Currently Studying",
        description: "Focused on software engineering, algorithms, and web development."
    },
    {
        degree: "Technical Baccalaureate, Software Development",
        institution: "Instituto Técnico Ricaldone",
        year: "2023",
        description: "Focused on fullstack desktop app development."
    }
];

// Extended data for the new "goals" tab
const goals2025 = [
    {
        category: "Technical",
        icon: Code,
        items: [
            "Master TypeScript advanced patterns",
            "Build a full-stack AI application",
            "Contribute to open source projects",
            "Learn Rust programming language"
        ]
    },
    {
        category: "Career",
        icon: Rocket,
        items: [
            "Land a senior developer role",
            "Mentor junior developers",
            "Work in a startup",
            "Build a profitable side project"
        ]
    },
    {
        category: "Personal",
        icon: Star,
        items: [
            "Read 12 books this year",
            "Learn a new skill",
            "Learn French or Japanese",
            "Complete a marathon"
        ]
    }
];

// Sample projects data
const projects = [
    {
        name: "E-Commerce",
        description: "Front-end e-commerce solution with API data fetching using https://fakestoreapi.com/products. Showing the last viewed & favorite products.",
        stack: ["React", "TypeScript", "Tailwind", "ReactRotuerDOM"],
        category: "Frontend",
        status: "Beta",
        year: "2025",
        highlights: ["Real-time updates", "Local Storage", "Routing"],
        githubUrl: "https://github.com/SantiMerino/prueba-tecnica",
        liveUrl: "https://e-commerce-frontend-dusky-seven.vercel.app/",
        featured: true
    },
    {
        name: "SMS Tracker",
        description: "Front-end tracker solution to manage KPI's for call center agents.",
        stack: ["React.js", "Tailwind CSS", "Vite", "Babel & SWC"],
        category: "Frontend",
        status: "Completed",
        year: "2024",
        highlights: ["KPI tracker", "Real-time update", "Success Rates"],
        githubUrl: "https://github.com/username/taskapp",
        liveUrl: "https://smstracker.vercel.app/",
        featured: false
    },
    {
        name: "Old Portfolio",
        description: "First portfolio made with React, TailwindCSS and Vite, it was a simple portfolio to show my skills and projects. Used to get a scholarship to study in the Spain.",
        stack: ["React", "TailwindCSS", "Vite"],
        category: "Frontend",
        status: "Completed",
        year: "2023",
        highlights: ["Langing Page", "Animations", "Responsive Design"],
        githubUrl: "https://github.com/SantiMerino/portfolio",
        liveUrl: "https://portfolio-santimerinos-projects.vercel.app",
        featured: false
    },
    {
        name: "Backpack Service",
        description: "Web app to manage invoices, client relationships, ticketing and backpacks for services, for a company called Stratega-IT. Alerting system for the company's employees and dashboard for analytics.",
        stack: ["React.js", "Node.js", "Prisma", "Node.js", "PostgreSQL", "Express"],
        category: "Web App",
        status: "Beta",
        year: "2024",
        highlights: ["Invoice", "Dashboard", "Ticketing"],
        githubUrl: "https://github.com/SantiMerino/Stratega-IT",
        liveUrl: null,
        featured: true
    },
    {
        name: "Gnosis",
        description: "Desktop app that manages academic institutions, students, teachers, courses, and more. Students have a personal repository to upload their documents and projects built-in text-editor and tasks uploader. Built with just Java in Netbeans Apache IDE.",
        stack: ["Java", "SQL Server"],
        category: "Desktop",
        status: "Beta",
        year: "2024",
        highlights: ["MVC", "Creative Design", "Wholistic System"],
        githubUrl: "https://github.com/username/portfolio",
        liveUrl: "https://portfolio-demo.com",
        featured: false
    },
    {
        name: "Workflows & Pipelines",
        description: "Automated data pipeline for processing and analyzing large datasets with real-time monitoring and error handling capabilities.",
        stack: ["Github Actions", "YAML", "CI/CD"],
        category: "DevOps",
        status: "Active",
        year: "2023",
        highlights: ["Automated processing", "Data analysis", "Error handling"],
        githubUrl: "https://github.com/username/data-pipeline",
        liveUrl: null,
        featured: false
    }
];

const categoryColors = {
    "Web App": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Backend": "bg-green-500/20 text-green-300 border-green-500/30",
    "Frontend": "bg-red-500/20 text-red-300 border-red-500/30",
    "DevOps": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "AI/ML": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Desktop": "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

const statusColors = {
    "Production": "bg-green-500/20 text-green-300",
    "Active": "bg-blue-500/20 text-blue-300",
    "Beta": "bg-yellow-500/20 text-yellow-300",
    "Completed": "bg-gray-500/20 text-gray-300"
};


const contactInfo = [
    {
        label: "Email",
        value: "santimerinoh12@gmail.com",
        icon: Mail,
        color: "text-blue-400"
    },
    {
        label: "Phone",
        value: "+503 6015-0286",
        icon: Phone,
        color: "text-green-400"
    },
    {
        label: "Location",
        value: "San Salvador, SV",
        icon: MapPin,
        color: "text-red-400"
    },
    {
        label: "Response Time",
        value: "Within 24 hours",
        icon: MessageCircle,
        color: "text-purple-400"
    }
];

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/SantiMerino",
        icon: Github,
        description: "Code & Projects"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/santiagomerinoh",
        icon: Linkedin,
        description: "Professional Network"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/santiago",
        icon: Twitter,
        description: "Thoughts & Updates"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/_santimh",
        icon: Instagram,
        description: "Life & Photography"
    }
];

export { experiences, stack, skills, hobbies, education, certifications, categoryColors, statusColors, projects, goals2025, socialLinks, contactInfo };