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
    const carouselProjects = projects;
    const maxVisibleCards = 2;

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
        <div className="min-h-screen bg-black flex items-center justify-center p-4" id='projects'>
            <Card className={`
           w-[calc(100vw-2rem)] h-full sm:w-[calc(100vw-4rem)] sm:h-[calc(100vh-4rem)] lg:w-[calc(100vw-6rem)] lg:h-[calc(100vh-6rem)] max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-8 border-none m-2
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

                    {/* Left Column - Header & Project Cards Carousel */}
                    <div className="space-y-6 flex flex-col min-h-0">
                        {/* Header Section */}
                        <div className="space-y-4 flex-shrink-0">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-2xl">🚀</span>
                                <span className="text-lg">Projects & Work</span>
                            </div>

                            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                Things I've Built
                            </h1>

                            <p className="text-gray-400 text-base leading-relaxed">
                                A collection of projects showcasing my skills in full-stack development,
                                from concept to deployment.
                            </p>
                        </div>

                        {/* Project Cards Carousel */}
                        <div className="flex-1 flex flex-col space-y-4 min-h-0">
                            <div className="flex items-center justify-between flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <h2 className="text-white text-lg font-semibold">Featured Projects</h2>
                                </div>

                                {/* Carousel Controls */}
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={prevSlide}
                                        disabled={currentSlide === 0}
                                        className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-8 w-8 p-0"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <span className="text-gray-400 text-sm">
                                        {currentSlide + 1} of {carouselProjects.length}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={nextSlide}
                                        disabled={currentSlide + 1 >= carouselProjects.length}
                                        className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-8 w-8 p-0"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Carousel Cards - Single Card Display */}
                            <div className="flex overflow-visible flex-1 min-h-0">
                                {carouselProjects.length > 0 && carouselProjects[currentSlide] && (
                                    <Card
                                        key={carouselProjects[currentSlide].name}
                                        className={`
                                        bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 p-5 cursor-pointer w-full
                                        transition-all duration-500 ease-out transform hover:scale-[1.02]
                                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                    `}
                                        onMouseEnter={() => setHoveredProject(currentSlide)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <div className="space-y-3 h-full flex flex-col">
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-2">
                                                    <h3 className="text-white text-lg font-semibold">{carouselProjects[currentSlide].name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`px-2 py-1 rounded-full text-xs border ${categoryColors[carouselProjects[currentSlide].category as keyof typeof categoryColors]}`}>
                                                            {carouselProjects[currentSlide].category}
                                                        </span>
                                                        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[carouselProjects[currentSlide].status as keyof typeof statusColors]}`}>
                                                            {carouselProjects[currentSlide].status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-gray-500 text-sm">{carouselProjects[currentSlide].year}</span>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                                {carouselProjects[currentSlide].description}
                                            </p>

                                            <div className="space-y-2 mt-auto">
                                                <div className="flex flex-wrap gap-1">
                                                    {carouselProjects[currentSlide].stack.slice(0, 4).map((tech, techIndex) => (
                                                        <span
                                                            key={tech}
                                                            className={`
                                                            px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded
                                                            transition-all duration-300 hover:bg-gray-600/50
                                                            ${hoveredProject === currentSlide ? 'scale-105' : ''}
                                                        `}
                                                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {carouselProjects[currentSlide].stack.length > 4 && (
                                                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded">
                                                            +{carouselProjects[currentSlide].stack.length - 4}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {carouselProjects[currentSlide].githubUrl && (
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-7 text-xs"
                                                            asChild
                                                        >
                                                            <a href={carouselProjects[currentSlide].githubUrl} target="_blank" rel="noopener noreferrer">
                                                                <Github className="w-3 h-3 mr-1" />
                                                                Code
                                                            </a>
                                                        </Button>
                                                    )}
                                                    {carouselProjects[currentSlide].liveUrl && (
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="bg-white text-zinc-900 hover:bg-zinc-200 h-7 text-xs"
                                                            asChild
                                                        >
                                                            <a href={carouselProjects[currentSlide].liveUrl} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="w-3 h-3 mr-1" />
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

                    {/* Right Column - Projects Accordion */}
                    <div className="flex flex-col space-y-4 min-h-0 h-full">
                        {/* Filter Buttons - Fixed at top */}
                        <div className="flex flex-wrap gap-2 pt-2 flex-shrink-0">
                            {categories.map((category, index) => (
                                <Button
                                    key={category}
                                    variant={filter === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setFilter(category)}
                                    className={`
                                        transition-all duration-300 transform hover:scale-105
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

                        {/* Header - Fixed at top */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <Code className="w-4 h-4 text-blue-400" />
                            <h2 className="text-white text-lg font-semibold">All Projects</h2>
                            <span className="text-gray-500 text-sm">({filteredProjects.length})</span>
                        </div>

                        {/* Scrollable Accordion Container */}
                        <div className="flex-1 min-h-0 overflow-hidden">
                            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {filteredProjects.map((project, index) => (
                                        <AccordionItem
                                            value={index.toString()}
                                            key={project.name}
                                            className={`
                                            border-zinc-700 bg-zinc-800/30 rounded-lg px-4 transition-all duration-500 ease-out
                                            hover:bg-zinc-800/50 hover:border-zinc-600
                                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                        `}
                                            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                                        >
                                            <AccordionTrigger className="text-left hover:no-underline group py-4">
                                                <div className="flex items-center justify-between w-full mr-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-white font-medium group-hover:text-gray-300 transition-colors text-sm">
                                                            {project.name}
                                                        </span>
                                                        <span className={`px-2 py-1 rounded-full text-xs border ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                                                            {project.category}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500 text-xs">{project.year}</span>
                                                        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>

                                            <AccordionContent className="pb-4">
                                                <div className="space-y-3">
                                                    <p className="text-gray-400 leading-relaxed text-sm">
                                                        {project.description}
                                                    </p>

                                                    <div className="space-y-2">
                                                        <div>
                                                            <h4 className="text-white font-medium mb-1 text-sm">Key Highlights:</h4>
                                                            <div className="flex flex-wrap gap-1">
                                                                {project.highlights.map((highlight) => (
                                                                    <span
                                                                        key={highlight}
                                                                        className="px-2 py-1 bg-zinc-700/50 text-green-300 text-xs rounded flex items-center gap-1"
                                                                    >
                                                                        <Zap className="w-2 h-2" />
                                                                        {highlight}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-white font-medium mb-1 text-sm">Tech Stack:</h4>
                                                            <div className="flex flex-wrap gap-1">
                                                                {project.stack.map((tech) => (
                                                                    <span
                                                                        key={tech}
                                                                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded transition-all duration-300 hover:bg-gray-700"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-2 pt-1">
                                                            {project.githubUrl && (
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-7 text-xs"
                                                                    asChild
                                                                >
                                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                                        <Github className="w-3 h-3 mr-1" />
                                                                        Code
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {project.liveUrl && (
                                                                <Button
                                                                    variant="default"
                                                                    size="sm"
                                                                    className="bg-white text-zinc-900 hover:bg-zinc-200 h-7 text-xs"
                                                                    asChild
                                                                >
                                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                                        <ExternalLink className="w-3 h-3 mr-1" />
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


// return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4" id='projects'>
//         <Card className={`
//             w-full max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 border-none
//             transition-all duration-1000 ease-out transform
//             ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
//         `}>
//             {/* Two Column Layout */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full min-h-[600px]">

//                 {/* Left Column - Header & Project Cards Carousel */}
//                 <div className="space-y-6 flex flex-col">
//                     {/* Header Section */}
//                     <div className="space-y-4 flex-shrink-0">
//                         <div className="flex items-center gap-2 text-gray-400">
//                             <span className="text-2xl">🚀</span>
//                             <span className="text-lg">Projects & Work</span>
//                         </div>

//                         <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
//                             Things I've Built
//                         </h1>

//                         <p className="text-gray-400 text-base leading-relaxed">
//                             A collection of projects showcasing my skills in full-stack development,
//                             from concept to deployment.
//                         </p>

//                         {/* Filter Buttons */}
//                         <div className="flex flex-wrap gap-2 pt-2">
//                             {categories.map((category, index) => (
//                                 <Button
//                                     key={category}
//                                     variant={filter === category ? "default" : "outline"}
//                                     size="sm"
//                                     onClick={() => setFilter(category)}
//                                     className={`
//                                         transition-all duration-300 transform hover:scale-105
//                                         ${filter === category
//                                             ? 'bg-white text-zinc-900 hover:bg-zinc-200'
//                                             : 'bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white'
//                                         }
//                                     `}
//                                     style={{
//                                         transitionDelay: `${index * 50}ms`,
//                                         opacity: isVisible ? 1 : 0,
//                                         transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
//                                     }}
//                                 >
//                                     {category}
//                                 </Button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Project Cards Carousel */}
//                     <div className="flex-1 flex flex-col space-y-4">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <Star className="w-4 h-4 text-yellow-400" />
//                                 <h2 className="text-white text-lg font-semibold">Featured Projects</h2>
//                             </div>

//                             {/* Carousel Controls */}
//                             <div className="flex items-center gap-2">
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     onClick={prevSlide}
//                                     disabled={currentSlide === 0}
//                                     className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-8 w-8 p-0"
//                                 >
//                                     <ChevronLeft className="w-4 h-4" />
//                                 </Button>
//                                 <span className="text-gray-400 text-sm">
//                                     {currentSlide + 1}-{Math.min(currentSlide + maxVisibleCards, carouselProjects.length)} of {carouselProjects.length}
//                                 </span>
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     onClick={nextSlide}
//                                     disabled={currentSlide + maxVisibleCards >= carouselProjects.length}
//                                     className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-8 w-8 p-0"
//                                 >
//                                     <ChevronRight className="w-4 h-4" />
//                                 </Button>
//                             </div>
//                         </div>

//                         {/* Carousel Cards */}
//                         <div className="flex-1 space-y-4 overflow-hidden">
//                             {visibleProjects.map((project, index) => (
//                                 <Card
//                                     key={project.name}
//                                     className={`
//                                         bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 p-5 cursor-pointer
//                                         transition-all duration-500 ease-out transform hover:scale-[1.02]
//                                         ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
//                                     `}
//                                     style={{ transitionDelay: `${index * 100}ms` }}
//                                     onMouseEnter={() => setHoveredProject(currentSlide + index)}
//                                     onMouseLeave={() => setHoveredProject(null)}
//                                 >
//                                     <div className="space-y-3">
//                                         <div className="flex items-start justify-between">
//                                             <div className="space-y-2">
//                                                 <h3 className="text-white text-lg font-semibold">{project.name}</h3>
//                                                 <div className="flex items-center gap-2">
//                                                     <span className={`px-2 py-1 rounded-full text-xs border ${categoryColors[project.category as keyof typeof categoryColors]}`}>
//                                                         {project.category}
//                                                     </span>
//                                                     <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
//                                                         {project.status}
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <span className="text-gray-500 text-sm">{project.year}</span>
//                                         </div>

//                                         <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
//                                             {project.description}
//                                         </p>

//                                         <div className="space-y-2">
//                                             <div className="flex flex-wrap gap-1">
//                                                 {project.stack.slice(0, 4).map((tech, techIndex) => (
//                                                     <span
//                                                         key={tech}
//                                                         className={`
//                                                             px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded
//                                                             transition-all duration-300 hover:bg-gray-600/50
//                                                             ${hoveredProject === currentSlide + index ? 'scale-105' : ''}
//                                                         `}
//                                                         style={{ transitionDelay: `${techIndex * 50}ms` }}
//                                                     >
//                                                         {tech}
//                                                     </span>
//                                                 ))}
//                                                 {project.stack.length > 4 && (
//                                                     <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded">
//                                                         +{project.stack.length - 4}
//                                                     </span>
//                                                 )}
//                                             </div>

//                                             <div className="flex items-center gap-2">
//                                                 {project.githubUrl && (
//                                                     <Button
//                                                         variant="outline"
//                                                         size="sm"
//                                                         className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-7 text-xs"
//                                                         asChild
//                                                     >
//                                                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                                                             <Github className="w-3 h-3 mr-1" />
//                                                             Code
//                                                         </a>
//                                                     </Button>
//                                                 )}
//                                                 {project.liveUrl && (
//                                                     <Button
//                                                         variant="default"
//                                                         size="sm"
//                                                         className="bg-white text-zinc-900 hover:bg-zinc-200 h-7 text-xs"
//                                                         asChild
//                                                     >
//                                                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                                                             <ExternalLink className="w-3 h-3 mr-1" />
//                                                             Demo
//                                                         </a>
//                                                     </Button>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Card>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column - Projects Accordion */}
//                 <div className="flex flex-col space-y-4">
//                     <div className="flex items-center gap-2">
//                         <Code className="w-4 h-4 text-blue-400" />
//                         <h2 className="text-white text-lg font-semibold">All Projects</h2>
//                         <span className="text-gray-500 text-sm">({filteredProjects.length})</span>
//                     </div>

//                     <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-600 hover:scrollbar-thumb-zinc-500">
//                         <Accordion type="single" collapsible className="w-full space-y-3">
//                             {filteredProjects.map((project, index) => (
//                                 <AccordionItem
//                                     value={index.toString()}
//                                     key={project.name}
//                                     className={`
//                                         border-zinc-700 bg-zinc-800/30 rounded-lg px-4 transition-all duration-500 ease-out
//                                         hover:bg-zinc-800/50 hover:border-zinc-600
//                                         ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
//                                     `}
//                                     style={{ transitionDelay: `${(index + 3) * 100}ms` }}
//                                 >
//                                     <AccordionTrigger className="text-left hover:no-underline group py-4">
//                                         <div className="flex items-center justify-between w-full mr-4">
//                                             <div className="flex items-center gap-3">
//                                                 <span className="text-white font-medium group-hover:text-gray-300 transition-colors text-sm">
//                                                     {project.name}
//                                                 </span>
//                                                 <span className={`px-2 py-1 rounded-full text-xs border ${categoryColors[project.category as keyof typeof categoryColors]}`}>
//                                                     {project.category}
//                                                 </span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <span className="text-gray-500 text-xs">{project.year}</span>
//                                                 <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
//                                                     {project.status}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </AccordionTrigger>

//                                     <AccordionContent className="pb-4">
//                                         <div className="space-y-3">
//                                             <p className="text-gray-400 leading-relaxed text-sm">
//                                                 {project.description}
//                                             </p>

//                                             <div className="space-y-2">
//                                                 <div>
//                                                     <h4 className="text-white font-medium mb-1 text-sm">Key Highlights:</h4>
//                                                     <div className="flex flex-wrap gap-1">
//                                                         {project.highlights.map((highlight) => (
//                                                             <span
//                                                                 key={highlight}
//                                                                 className="px-2 py-1 bg-zinc-700/50 text-green-300 text-xs rounded flex items-center gap-1"
//                                                             >
//                                                                 <Zap className="w-2 h-2" />
//                                                                 {highlight}
//                                                             </span>
//                                                         ))}
//                                                     </div>
//                                                 </div>

//                                                 <div>
//                                                     <h4 className="text-white font-medium mb-1 text-sm">Tech Stack:</h4>
//                                                     <div className="flex flex-wrap gap-1">
//                                                         {project.stack.map((tech) => (
//                                                             <span
//                                                                 key={tech}
//                                                                 className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded transition-all duration-300 hover:bg-gray-700"
//                                                             >
//                                                                 {tech}
//                                                             </span>
//                                                         ))}
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex items-center gap-2 pt-1">
//                                                     {project.githubUrl && (
//                                                         <Button
//                                                             variant="outline"
//                                                             size="sm"
//                                                             className="bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white h-7 text-xs"
//                                                             asChild
//                                                         >
//                                                             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                                                                 <Github className="w-3 h-3 mr-1" />
//                                                                 Code
//                                                             </a>
//                                                         </Button>
//                                                     )}
//                                                     {project.liveUrl && (
//                                                         <Button
//                                                             variant="default"
//                                                             size="sm"
//                                                             className="bg-white text-zinc-900 hover:bg-zinc-200 h-7 text-xs"
//                                                             asChild
//                                                         >
//                                                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                                                                 <ExternalLink className="w-3 h-3 mr-1" />
//                                                                 Demo
//                                                             </a>
//                                                         </Button>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             ))}
//                         </Accordion>
//                     </div>
//                 </div>
//             </div>
//         </Card>
//     </div>
// );
// }