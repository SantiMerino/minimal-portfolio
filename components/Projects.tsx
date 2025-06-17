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
import { ExternalLink, Github, Calendar, Code, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, statusColors, categoryColors } from '@/app/data';


export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    // For carousel, we'll show all projects in cards
    const carouselProjects = projects.filter(p => p.featured === true);
    const maxVisibleCards = 1;

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + maxVisibleCards >= carouselProjects.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.max(0, carouselProjects.length - maxVisibleCards) : prev - 1
        );
    };

    const visibleProjects = carouselProjects.slice(currentSlide, currentSlide + maxVisibleCards);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4" id='projects'>
            <Card className={`
                w-full lg:w-[calc(100vw-2rem)] xl:w-[calc(100vw-6rem)] 
                h-auto lg:h-[calc(100vh-2rem)] xl:h-[calc(100vh-6rem)] 
                max-w-7xl bg-zinc-900 text-white 
                p-4 sm:p-8 lg:p-8 
                border-none 
                sm:m-1 lg:m-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                transition-all duration-700 ease-out
            `}>
                {/* Single column on mobile/tablet, two columns on laptop+ */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 h-full lg:h-[calc(100vh-8rem)] xl:h-[calc(100vh-12rem)]">

                    {/* Header & Featured Projects Section */}
                    <div className="space-y-4 sm:space-y-6 flex flex-col lg:h-full">
                        {/* Header Section */}
                        <div className="space-y-3 sm:space-y-4 flex-shrink-0">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-xl sm:text-2xl">🚀</span>
                                <span className="text-sm sm:text-lg">Projects & Work</span>
                            </div>

                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                Things I&apos;ve Built
                            </h1>

                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                A collection of projects showcasing my skills in full-stack development,
                                from concept to deployment.
                            </p>
                        </div>

                        {/* Featured Project Card */}
                        <div className="flex-1 flex flex-col space-y-3 sm:space-y-4 lg:min-h-0">
                            <div className="flex items-center justify-between flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                    <h2 className="text-white text-sm sm:text-lg font-semibold">Featured Projects</h2>
                                </div>

                                {/* Carousel Controls */}
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={prevSlide}
                                        className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-6 w-6 sm:h-8 sm:w-8 p-0"
                                    >
                                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                    <span className="text-gray-400 text-xs sm:text-sm px-1 sm:px-2">
                                        {currentSlide + 1}/{carouselProjects.length}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={nextSlide}
                                        className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-6 w-6 sm:h-8 sm:w-8 p-0"
                                    >
                                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Featured Project Card */}
                            <div className="flex-1 lg:min-h-0">
                                {carouselProjects.length > 0 && carouselProjects[currentSlide] && (
                                    <Card
                                        key={carouselProjects[currentSlide].name}
                                        className={`
                                            bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 p-3 sm:p-4 lg:p-5 cursor-pointer h-full
                                            transition-all duration-500 ease-out transform hover:scale-[1.02]
                                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                        `}
                                        onMouseEnter={() => setHoveredProject(currentSlide)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <div className="space-y-2 sm:space-y-3 h-full flex flex-col">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                                                    <h3 className="text-white text-sm sm:text-lg font-semibold truncate">
                                                        {carouselProjects[currentSlide].name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                                                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs border ${categoryColors[carouselProjects[currentSlide].category as keyof typeof categoryColors]}`}>
                                                            {carouselProjects[currentSlide].category}
                                                        </span>
                                                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs ${statusColors[carouselProjects[currentSlide].status as keyof typeof statusColors]}`}>
                                                            {carouselProjects[currentSlide].status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">
                                                    {carouselProjects[currentSlide].year}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                                                {carouselProjects[currentSlide].description}
                                            </p>

                                            <div className="space-y-2 mt-auto">
                                                <div className="flex flex-wrap gap-1">
                                                    {carouselProjects[currentSlide].stack.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={tech}
                                                            className={`
                                                                px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-700/50 text-gray-300 text-xs rounded
                                                                transition-all duration-300 hover:bg-gray-600/50
                                                                ${hoveredProject === currentSlide ? 'scale-105' : ''}
                                                            `}
                                                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {carouselProjects[currentSlide].stack.length > 3 && (
                                                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-700/50 text-gray-400 text-xs rounded">
                                                            +{carouselProjects[currentSlide].stack.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    {carouselProjects[currentSlide].githubUrl && (
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-6 sm:h-7 text-xs px-2"
                                                            asChild
                                                        >
                                                            <a href={carouselProjects[currentSlide].githubUrl} target="_blank" rel="noopener noreferrer">
                                                                <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                                                Code
                                                            </a>
                                                        </Button>
                                                    )}
                                                    {carouselProjects[currentSlide].liveUrl && (
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="bg-white text-zinc-900 hover:bg-zinc-200 h-6 sm:h-7 text-xs px-2"
                                                            asChild
                                                        >
                                                            <a href={carouselProjects[currentSlide].liveUrl || undefined} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                                                Demo
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* All Projects Section */}
                    <div className="flex flex-col space-y-3 sm:space-y-4 lg:h-full lg:min-h-0">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 flex-shrink-0">
                            {categories.map((category, index) => (
                                <Button
                                    key={category}
                                    variant={filter === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setFilter(category)}
                                    className={`
                                        transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm h-6 sm:h-8 px-2 sm:px-3
                                        ${filter === category
                                            ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                                            : 'bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white'
                                        }
                                    `}
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                    }}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>

                        {/* Section Header */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                            <h2 className="text-white text-sm sm:text-lg font-semibold">All Projects</h2>
                            <span className="text-gray-500 text-xs sm:text-sm">({filteredProjects.length})</span>
                        </div>

                        {/* Scrollable Accordion - Fixed height on large screens */}
                        <div className="flex-1 lg:min-h-0 lg:overflow-hidden">
                            <div className="h-full lg:max-h-full custom-scrollbar overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-600 hover:scrollbar-thumb-zinc-500">
                                <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
                                    {filteredProjects.map((project, index) => (
                                        <AccordionItem
                                            value={index.toString()}
                                            key={project.name}
                                            className={`
                                                border-zinc-700 bg-zinc-800/30 rounded-lg px-3 sm:px-4 transition-all duration-500 ease-out
                                                hover:bg-zinc-800/50 hover:border-zinc-600
                                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                            `}
                                            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                                        >
                                            <AccordionTrigger className="text-left hover:no-underline group py-2 sm:py-3 lg:py-4">
                                                <div className="flex items-center justify-between w-full mr-2 sm:mr-4 gap-2">
                                                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                                        <span className="text-white font-medium group-hover:text-gray-300 transition-colors text-xs sm:text-sm truncate">
                                                            {project.name}
                                                        </span>
                                                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs border flex-shrink-0 ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                                                            {project.category}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                                        <span className="text-gray-500 text-xs hidden sm:inline">{project.year}</span>
                                                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>

                                            <AccordionContent className="pb-3 sm:pb-4">
                                                <div className="space-y-2 sm:space-y-3">
                                                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                                        {project.description}
                                                    </p>

                                                    <div className="space-y-2">
                                                        <div>
                                                            <h4 className="text-white font-medium mb-1 text-xs sm:text-sm">Key Highlights:</h4>
                                                            <div className="flex flex-wrap gap-1">
                                                                {project.highlights.map((highlight) => (
                                                                    <span
                                                                        key={highlight}
                                                                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-zinc-700/50 text-green-300 text-xs rounded flex items-center gap-1"
                                                                    >
                                                                        <Zap className="w-2 h-2" />
                                                                        {highlight}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-white font-medium mb-1 text-xs sm:text-sm">Tech Stack:</h4>
                                                            <div className="flex flex-wrap gap-1">
                                                                {project.stack.map((tech) => (
                                                                    <span
                                                                        key={tech}
                                                                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 text-gray-300 text-xs rounded transition-all duration-300 hover:bg-gray-700"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-1 sm:gap-2 pt-1">
                                                            {project.githubUrl && (
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-6 sm:h-7 text-xs px-2"
                                                                    asChild
                                                                >
                                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                                        <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                                                        Code
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {project.liveUrl && (
                                                                <Button
                                                                    variant="default"
                                                                    size="sm"
                                                                    className="bg-white text-zinc-900 hover:bg-zinc-200 h-6 sm:h-7 text-xs px-2"
                                                                    asChild
                                                                >
                                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                                                        Demo
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}