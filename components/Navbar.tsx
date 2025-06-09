import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Code, Mail, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { TooltipProvider } from "@/components/ui/tooltip";
import { isValid } from 'date-fns';


const FloatingNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const pathname = usePathname();


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

    return (
        <TooltipProvider>
            <div className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out ${!isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                <div className="flex items-center bg-[#18181B]/90 backdrop-blur-md border border-[#6B7280]/20 rounded-r-lg p-2 shadow-xl animate-pulse">
                    <ChevronRight className="w-4 h-4 text-[#6B7280]" />
                </div>
            </div>
            <nav className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                <div className="flex flex-col items-center space-y-2 bg-[#18181B]/90 backdrop-blur-md border border-[#6B7280]/20 rounded-xl p-3 shadow-2xl">

                    {navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <div className='relative group'>
                                <Link
                                    href={item.href}
                                    className="w-10 h-10 rounded-lg bg-[#000000]/40 hover:bg-[#6B7280]/20 border border-[#6B7280]/30 hover:border-[#FFFFFF]/30 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                                >
                                    <IconComponent className={`w-4 h-4 text-[#6B7280] group-hover:text-[#FFFFFF] transition-colors duration-300 ${isActive ? 'text-white' : ' '}`} />
                                </Link>
                                {/* Tooltip */}
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-2 bg-[#18181B] text-[#FFFFFF] text-xs rounded-md border border-[#6B7280]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                                    {item.label}
                                </div>
                            </div>


                        );
                    })}
                </div>
            </nav>
        </TooltipProvider >

    );
};

export default FloatingNavbar;