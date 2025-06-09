"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Building, MapPin } from 'lucide-react';
import { experiences, skills, stack } from '../app/data';
import Link from 'next/link';



export default function Home() {
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
                    <div className="lg:col-span-2 space-y-8">
                        {/* Greeting */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-2xl">👋</span>
                                <span className="text-lg">Hello! | Hola!</span>
                            </div>

                            <h1 className="text-gray-400 text-xl sm:text-2xl font-light">
                                My name is Santiago Merino.
                            </h1>

                            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                I'm a Computer Science Student & Fullstack Developer
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="space-y-6 max-w-lg sm:max-w-full">
                            <p className="text-white text-lg leading-relaxed">
                                💻Crafting fast, accessible web apps with TypeScript and React. Skilled in state management, streaming, and UI architecture—turning complex needs into sleek, intuitive interfaces.
                            </p>

                            <p className="text-gray-500 text-base">
                                That means potentially research, visuals and code.
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <Link href={"/contact"} >
                                <Button variant="outline" className='bg-inherit hover:bg-zinc-800 hover:text-white text-white'>
                                    Contact me
                                </Button>
                            </Link>
                            <Button variant={'default'} className='bg-white hover:bg-zinc-300 text-zinc-900'>
                                Check my work
                            </Button>
                        </div>
                    </div>

                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue='0'
                    >
                        <h1 className='font-bold text-lg'>Experience</h1>
                        {experiences.map((expo, index) => (

                            <AccordionItem value={index.toString()} key={index}>


                                <AccordionTrigger className='text-left'>{expo.role + ' | ' + expo.period}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance text-gray-400">
                                    <p className='flex gap-2'>
                                        <Building className='h-4 w-4' /> {expo.company}
                                    </p>
                                    <p>
                                        {expo.description}
                                    </p>
                                    <p className='flex gap-2'>
                                        <MapPin className='h-4 w-4' /> {expo.location}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                        ))}
                    </Accordion>
                    {/* Stack Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8">
                            {/* stack */}
                            <div className="space-y-4">
                                <h4 className="text-white font-bold text-base">📚 Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        stack.map((stack, index) => (
                                            <span
                                                key={index}
                                                className={`
                        px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full
                        transition-all duration-500 ease-out transform 
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      `}
                                                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                                            >
                                                {stack}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            {/* Skills */}
                            <div className="pt-8 space-y-4">
                                <h4 className="text-white font-bold text-base">✅ Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className={`
                        px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full
                        transition-all duration-500 ease-out transform 
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      `}
                                                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card >
        </div >
    );
}