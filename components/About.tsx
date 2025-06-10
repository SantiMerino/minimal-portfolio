import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { hobbies, achievements, education } from '@/app/data';
import Myself from '../public/myself.png';

const EnhancedAboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4" id='about'>
            <Card className={`
                w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] sm:w-[calc(100vw-4rem)] sm:h-[calc(100vh-4rem)] lg:w-[calc(100vw-6rem)] lg:h-[calc(100vh-6rem)] max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-8 border-none m-2
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
                {/* Container with proper height control */}
                <div className="h-full flex flex-col min-h-0">
                    {/* Header Section - Fixed at top */}
                    <div className="flex items-start gap-4 sm:gap-6 mb-6 flex-shrink-0">
                        {/* Profile Image */}
                        <div className="relative group flex-shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            <img
                                src='/myself.png'
                                alt="Santi - Full Stack Developer"
                                className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl object-cover border-2 border-gray-500 transition-all duration-300 group-hover:scale-105 group-hover:border-white"
                            />
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

                    {/* Navigation Tabs - Fixed at top */}
                    <div className="flex flex-wrap gap-2 border-b border-gray-500 pb-3 mb-4 flex-shrink-0">
                        {['intro', 'education', 'hobbies', 'achievements'].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all duration-300 capitalize ${activeSection === section
                                    ? 'bg-white text-black'
                                    : 'text-gray-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area - Scrollable */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 flex-1 min-h-0">
                        {/* Dynamic Content - Scrollable */}
                        <div className="lg:col-span-2 min-h-0">
                            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                                <div className="space-y-4">
                                    {activeSection === 'intro' && (
                                        <div className="space-y-4 animate-fade-in">
                                            <p className="text-white text-sm sm:text-base leading-relaxed">
                                                Passionate about creative problem-solving and building scalable web applications across a variety of technologies and programming languages. I'm especially interested in how AI and cloud infrastructure can power smarter, more resilient applications.
                                            </p>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Currently focused on full-stack development with React, Node.js, and cloud technologies. Always eager to learn and collaborate on innovative projects.
                                            </p>
                                        </div>
                                    )}

                                    {activeSection === 'education' && (
                                        <div className="space-y-4 animate-fade-in">
                                            {education.map((edu, index) => (
                                                <div key={index} className="border-l-2 border-white pl-4 pb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <GraduationCap className="w-4 h-4 text-gray-400" />
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
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in px-3 py-2">
                                            {hobbies.map((hobby, index) => (
                                                <div key={index} className="bg-zinc-800 p-3 rounded-lg hover:bg-gray-500 transition-all duration-300 hover:scale-105">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-lg">{hobby.icon}</span>
                                                        <h3 className="text-white font-semibold text-sm">{hobby.name}</h3>
                                                    </div>
                                                    <p className="text-gray-400 text-xs">{hobby.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeSection === 'achievements' && (
                                        <div className="space-y-3 animate-fade-in">
                                            {achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-gray-500 transition-all duration-300">
                                                    <Award className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    <span className="text-white text-sm">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Fixed content */}
                        <div className="space-y-4 min-h-0">
                            <div className="h-full overflow-y-auto custom-scrollbar">
                                <div className="space-y-4">
                                    {/* Quick Facts */}
                                    <div className="bg-zinc-800 p-4 rounded-lg">
                                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                            <span className="text-base">🎯</span>
                                            <span className="text-sm">Quick Facts</span>
                                        </h3>
                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Favorite Language:</span>
                                                <span className="text-white">JavaScript</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Coffee Cups/Day:</span>
                                                <span className="text-white">2-3 ☕</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Coding Since:</span>
                                                <span className="text-white">2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="bg-zinc-800 p-4 rounded-lg">
                                        <h3 className="text-white font-semibold mb-3 text-sm">💭 Favorite Quote</h3>
                                        <blockquote className="border-l-2 border-gray-500 pl-3 italic text-xs text-gray-300 leading-relaxed">
                                            "Allow yourself to be a beginner. No one starts off being excellent."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default EnhancedAboutPage;