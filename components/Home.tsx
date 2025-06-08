"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import GradientText from './TextAnimations/GradientText/GradientText';


import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { experiences, skills, stack } from '../app/data';



export default function Home() {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6" >
            <Card className={`
        w-full max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 border-none
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
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
                        <div className="space-y-6 max-w-lg">
                            <p className="text-white text-lg leading-relaxed">
                                💻Crafting fast, accessible web apps with TypeScript and React. Skilled in state management, streaming, and UI architecture—turning complex needs into sleek, intuitive interfaces.
                            </p>

                            <p className="text-gray-500 text-base">
                                That means potentially research, visuals and code.
                            </p>
                        </div>


                    </div>


                    {/* Experience Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8">
                            <h3 className="text-white text-lg font-semibold">💼 Experience</h3>

                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className={`
                      space-y-2 transition-all duration-700 ease-out transform
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                    `}
                                        style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                                    >
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-white font-medium text-base">{exp.company}</h4>
                                            <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {exp.role}
                                        </p>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <MapPin className="w-3 h-3" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* stack */}
                            <div className="pt-8 space-y-4">
                                <h4 className="text-white font-medium text-base">📚 Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        stack.map((stack, index) => (
                                            <span
                                                key={stack.toString()}
                                                className={`
                        px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full
                        transition-all duration-500 ease-out transform hover:bg-gray-700
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
                                <h4 className="text-white font-medium text-base">✅ Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        stack.map((stack, index) => (
                                            <span
                                                key={stack.toString()}
                                                className={`
                        px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full
                        transition-all duration-500 ease-out transform hover:bg-gray-700
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      `}
                                                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                                            >
                                                {stack}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="pt-4 space-y-2">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">Currently in El Salvador</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">Available for freelance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card >
        </div >
    );
}