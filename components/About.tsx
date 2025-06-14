import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
    GraduationCap,
    MapPin,
    Calendar,
    Award,
    User,
    BookOpen,
    Heart,
    Trophy,
    Target,
    Coffee,
    Code,
    Brain,
    Lightbulb,
    Star,
    Zap
} from 'lucide-react';
import { certifications, education, goals2025, hobbies } from '@/app/data';
import Image from 'next/image';


const EnhancedAboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navigationTabs = [
        {
            id: 'intro',
            label: 'About Me',
            icon: User,
            color: 'text-blue-400'
        },
        {
            id: 'education',
            label: 'Education',
            icon: GraduationCap,
            color: 'text-green-400'
        },
        {
            id: 'hobbies',
            label: 'Hobbies',
            icon: Heart,
            color: 'text-pink-400'
        },
        {
            id: 'certifications',
            label: 'Certifications',
            icon: Trophy,
            color: 'text-yellow-400'
        },
        {
            id: 'goals',
            label: '2025 Goals',
            icon: Target,
            color: 'text-purple-400'
        }
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4">
            <Card className={`                
            w-full lg:w-[calc(100vw-2rem)] xl:w-[calc(100vw-6rem)] 
                h-auto lg:h-[calc(100vh-2rem)] xl:h-[calc(100vh-6rem)] 
                max-w-7xl bg-zinc-900 text-white 
                p-4 sm:p-8 lg:p-8 
                border-none 
                sm:m-1 lg:m-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
                {/* Header Section - Fixed */}
                <div className="flex items-start gap-4 sm:gap-6 mb-6 flex-shrink-0">
                    {/* Profile Image */}
                    <div className="relative group flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl bg-gradient-to-br from-green-500 to-blue-950 border-2 border-gray-500 transition-all duration-300 group-hover:scale-105 group-hover:border-white flex items-center justify-center">
                            <Image
                                src='/myself.png'
                                alt=""
                                width={112}
                                height={112}
                                className='relative w-19 h-19 sm:w-23 sm:h-23 lg:w-27 lg:h-27 rounded-3xl '
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-600 w-4 h-4 rounded-full border-2 border-green-600 animate-pulse"></div>
                    </div>

                    {/* Header Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <span className="text-xl">✏️</span>
                            <span className="text-sm sm:text-base"> Take notes!</span>
                        </div>

                        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                            Who is Santiago?
                        </h2>

                        {/* Personal Info */}
                        <div className="flex flex-wrap gap-3 text-gray-400 text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>San Salvador, El Salvador</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>Available for opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs - Fixed */}
                <div className="flex flex-wrap gap-2 border-b flex-shrink-0 border-gray-500 pb-3 mb-4">
                    {navigationTabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSection(tab.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all duration-300 ${activeSection === tab.id
                                    ? 'bg-white text-black'
                                    : `text-gray-400 hover:text-white hover:bg-zinc-800 ${tab.color}`
                                    }`}
                            >
                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Main Content Area - Scrollable */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 flex-1 min-h-0 h-[calc(100%-12rem)]">
                    {/* Dynamic Content - Scrollable */}
                    <div className="lg:col-span-2 flex flex-col min-h-0 h-full">
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 h-full">
                            {activeSection === 'intro' && (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <User className="w-5 h-5 text-blue-400" />
                                        <h3 className="text-white text-lg font-semibold">Introduction</h3>
                                    </div>
                                    <p className="text-white text-sm sm:text-base leading-relaxed">
                                        Passionate about creative problem-solving and building scalable web applications across a variety of technologies and programming languages. I&apos;m especially interested in how AI and cloud infrastructure can power smarter, more resilient applications.
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Currently focused on full-stack development with React, Node.js, and cloud technologies. Always eager to learn and collaborate on innovative projects.
                                    </p>

                                    {/* Fun stats */}
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-zinc-800/50 p-4 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Code className="w-4 h-4 text-green-400" />
                                                <span className="text-white font-medium text-sm">Lines of Code</span>
                                            </div>
                                            <span className="text-green-400 text-lg font-bold">50,000+</span>
                                        </div>
                                        <div className="bg-zinc-800/50 p-4 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Coffee className="w-4 h-4 text-orange-400" />
                                                <span className="text-white font-medium text-sm">Coffee Consumed</span>
                                            </div>
                                            <span className="text-orange-400 text-lg font-bold">1,000+ Cups</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeSection === 'education' && (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <GraduationCap className="w-5 h-5 text-green-400" />
                                        <h3 className="text-white text-lg font-semibold">Educational Journey</h3>
                                    </div>
                                    {education.map((edu, index) => (
                                        <div key={index} className="border-l-2 border-green-400 pl-4 pb-4 relative">
                                            <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <BookOpen className="w-4 h-4 text-gray-400" />
                                                <h3 className="text-white text-lg font-semibold">{edu.degree}</h3>
                                            </div>
                                            <p className="text-gray-400 font-medium text-sm">{edu.institution}</p>
                                            <p className="text-gray-500 text-xs">{edu.year}</p>
                                            <p className="text-gray-300 mt-2 text-sm">{edu.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSection === 'hobbies' && (
                                <div className="space-y-4 animate-fade-in ">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Heart className="w-5 h-5 text-pink-400" />
                                        <h3 className="text-white text-lg font-semibold">Things I Love</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                                        {hobbies.map((hobby, index) => (
                                            <div key={index} className="bg-zinc-800 p-3 rounded-lg  hover:bg-gray-500 transition-all duration-300  group">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{hobby.icon}</span>
                                                    <h3 className="text-white font-semibold text-sm">{hobby.name}</h3>
                                                </div>
                                                <p className="text-gray-400 text-xs">{hobby.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'certifications' && (
                                <div className="space-y-3 animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Trophy className="w-5 h-5 text-yellow-400" />
                                        <h3 className="text-white text-lg font-semibold">Certifications & Milestones</h3>
                                    </div>
                                    {certifications.map((achievement, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-gray-500 transition-all duration-300 group">
                                            <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="text-white text-sm">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSection === 'goals' && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Target className="w-5 h-5 text-purple-400" />
                                        <h3 className="text-white text-lg font-semibold">2025 Goals & Aspirations</h3>
                                    </div>
                                    {goals2025.map((goalCategory, index) => (
                                        <div key={goalCategory.category} className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <goalCategory.icon className="w-5 h-5 text-purple-400" />
                                                <h4 className="text-white font-semibold">{goalCategory.category}</h4>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-7">
                                                {goalCategory.items.map((goal, goalIndex) => (
                                                    <div
                                                        key={goalIndex}
                                                        className="flex items-center gap-2 p-2 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 group"
                                                    >
                                                        <Zap className="w-3 h-3 text-purple-400 flex-shrink-0 group-hover:text-purple-300" />
                                                        <span className="text-gray-300 text-sm group-hover:text-white">{goal}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Progress motivation */}
                                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-500/20 mt-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Lightbulb className="w-4 h-4 text-yellow-400" />
                                            <span className="text-white font-medium">Motivation</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            &quot;The best time to plant a tree was 20 years ago. The second best time is now.&quot;
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Side Panel - Scrollable */}
                    <div className="flex flex-col space-y-4 min-h-0">
                        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
                            <div className="bg-zinc-800/50 p-4 rounded-lg">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <Brain className="w-4 h-4 text-blue-400" />
                                    Quick Stats
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Projects</span>
                                        <span className="text-white">15+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Languages</span>
                                        <span className="text-white">8</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Experience</span>
                                        <span className="text-white">3+ years</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-800/50 p-4 rounded-lg">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    Current Focus
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Full-Stack Development</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">AI Integration</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">Cloud Technologies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default EnhancedAboutPage;