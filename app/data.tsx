import {
    Code, Volleyball, Music, Coffee, Palette,
    Camera,
    Gamepad2,
    Plane,
    Dumbbell, Rocket, Star, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Mail, MessageCircle
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

// Sample data - replace with your actual data
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
            "Speak at a tech conference",
            "Build a profitable side project"
        ]
    },
    {
        category: "Personal",
        icon: Star,
        items: [
            "Read 24 books this year",
            "Travel to 3 new countries",
            "Learn a new musical instrument",
            "Complete a marathon"
        ]
    }
];

// Sample projects data
const projects = [
    {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, shopping cart, order tracking, and responsive design.",
        stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
        category: "Full Stack",
        status: "Production",
        year: "2024",
        highlights: ["Real-time updates", "Payment integration", "Admin dashboard"],
        githubUrl: "https://github.com/username/ecommerce",
        liveUrl: "https://ecommerce-demo.com",
        featured: true
    },
    {
        name: "Task Management App",
        description: "Collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time synchronization across devices.",
        stack: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
        category: "Web App",
        status: "Active",
        year: "2024",
        highlights: ["Drag & drop", "Real-time sync", "Team collaboration"],
        githubUrl: "https://github.com/username/taskapp",
        liveUrl: "https://taskapp-demo.com",
        featured: true
    },
    {
        name: "Weather Analytics Dashboard",
        description: "Interactive weather analytics platform with data visualization, historical trends, and predictive insights using machine learning algorithms.",
        stack: ["React", "D3.js", "Python", "Flask", "Chart.js"],
        category: "Data Visualization",
        status: "Completed",
        year: "2023",
        highlights: ["ML predictions", "Interactive charts", "Historical data"],
        githubUrl: "https://github.com/username/weather-dashboard",
        liveUrl: "https://weather-analytics.com",
        featured: false
    },
    {
        name: "AI Chat Assistant",
        description: "Intelligent chat assistant with natural language processing, context awareness, and integration with multiple APIs for enhanced functionality.",
        stack: ["Vue.js", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
        category: "AI/ML",
        status: "Beta",
        year: "2024",
        highlights: ["NLP integration", "Context awareness", "Real-time chat"],
        githubUrl: "https://github.com/username/ai-chat",
        liveUrl: null,
        featured: true
    },
    {
        name: "Portfolio Website",
        description: "Modern portfolio website with smooth animations, responsive design, and optimized performance. Built with cutting-edge web technologies.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        category: "Web App",
        status: "Production",
        year: "2024",
        highlights: ["Smooth animations", "SEO optimized", "Fast loading"],
        githubUrl: "https://github.com/username/portfolio",
        liveUrl: "https://portfolio-demo.com",
        featured: false
    },
    {
        name: "Data Pipeline Tool",
        description: "Automated data pipeline for processing and analyzing large datasets with real-time monitoring and error handling capabilities.",
        stack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Redis"],
        category: "Data Engineering",
        status: "Active",
        year: "2023",
        highlights: ["Automated processing", "Real-time monitoring", "Error handling"],
        githubUrl: "https://github.com/username/data-pipeline",
        liveUrl: null,
        featured: false
    }
];

const categoryColors = {
    "Full Stack": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Web App": "bg-green-500/20 text-green-300 border-green-500/30",
    "Data Visualization": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "AI/ML": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Data Engineering": "bg-red-500/20 text-red-300 border-red-500/30"
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
        value: "+503 1234-5678",
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
        url: "https://github.com/santiago",
        icon: Github,
        description: "Code & Projects"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/santiago",
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