"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink, MapPin, Calendar, ChevronsUpDown, ChevronDown } from 'lucide-react';
import { experiences, skills, stack } from '../app/data';



export default function Pojects() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(true);


    useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4" id='home'>
            <Card className={`
        w-full max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 border-none
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Main Content */}

                </div>
            </Card >
        </div >
    );
}