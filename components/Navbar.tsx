import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, FileText, ChevronRight } from 'lucide-react';

const FloatingNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mouseX, setMouseX] = useState(0);

    const navItems = [
        { icon: Home, label: 'Home', href: '/' },
        { icon: User, label: 'About', href: '/about' },
        { icon: Code, label: 'Skills', href: '/skills' },
        { icon: Briefcase, label: 'Experience', href: '/experience' },
        { icon: FileText, label: 'Projects', href: '/projects' },
        { icon: Mail, label: 'Contact', href: '/contact' }
    ];

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMouseX(e.clientX);
            // Show navbar when mouse is within 80px of left edge
            setIsVisible(e.clientX < 80);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleNavClick = (href: string) => {
        window.location.href = href;
    };

    return (
        <>       {/* Hidden navbar indicator */}
            <div className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out ${!isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                <div className="flex items-center bg-[#18181B]/90 backdrop-blur-md border border-[#6B7280]/20 rounded-r-lg p-2 shadow-xl">
                    <ChevronRight className="w-4 h-4 text-[#6B7280] animate-pulse" />
                </div>
            </div>
            <nav className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                <div className="flex flex-col items-center space-y-2 bg-[#18181B]/90 backdrop-blur-md border border-[#6B7280]/20 rounded-xl p-3 shadow-2xl">
                    {navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="relative group">
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className="w-10 h-10 rounded-lg bg-[#000000]/40 hover:bg-[#6B7280]/20 border border-[#6B7280]/30 hover:border-[#FFFFFF]/30 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                                >
                                    <IconComponent className="w-4 h-4 text-[#6B7280] group-hover:text-[#FFFFFF] transition-colors duration-300" />
                                </button>

                                {/* Tooltip */}
                                <div className="absolute left-full ml-3 px-2 py-1 bg-[#18181B] text-[#FFFFFF] text-xs rounded-md border border-[#6B7280]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    {item.label}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 bg-[#18181B] border-l border-b border-[#6B7280]/30 rotate-45"></div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Active indicator dot */}
                    <div className="w-0.5 h-0.5 bg-[#FFFFFF] rounded-full mt-1 opacity-60"></div>
                </div>
            </nav>
        </>

    );
};

export default FloatingNavbar;