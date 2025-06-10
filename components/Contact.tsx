import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    MessageCircle, Heart, Zap, Send, User, Mail, FileText, Calendar,
    MapPin, Phone, Github, Linkedin, Twitter, Instagram
} from 'lucide-react';
import { contactInfo, socialLinks } from '@/app/data';

export default function ScrollableContactCard() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4" id='contact'>
            <Card className={`
                w-[calc(100vw-2rem)] h-full sm:w-[calc(100vw-4rem)] sm:h-[calc(100vh-4rem)] lg:w-[calc(100vw-6rem)] lg:h-[calc(100vh-6rem)] max-w-7xl bg-zinc-900 text-white p-6 sm:p-8 lg:p-10 border-none
                transition-all duration-1000 ease-out transform flex flex-col
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1 min-h-0">

                    {/* Left Column - Header & Contact Info (Scrollable) */}
                    <div className="flex flex-col min-h-0">
                        <div className="flex-1  overflow-x-visible overflow-y-auto custom-scrollbar pr-2 space-y-6">
                            {/* Header Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-xl">📬</span>
                                    <span className="text-base">Get In Touch</span>
                                </div>

                                <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                                    Let's Work Together
                                </h1>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Have a project in mind? Want to collaborate? Or just want to say hi?
                                    I'd love to hear from you. Let's create something amazing together.
                                </p>
                            </div>

                            {/* Contact Information Cards */}
                            <div className="space-y-3">
                                <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
                                    <MessageCircle className="w-4 h-4 text-blue-400" />
                                    Contact Information
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {contactInfo.map((info, index) => (
                                        <div
                                            key={info.label}
                                            className={`
                                                bg-zinc-800/50 p-3 rounded-lg border border-zinc-700 hover:border-zinc-600
                                                transition-all duration-500 ease-out transform 
                                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                            `}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <info.icon className={`w-4 h-4 ${info.color} flex-shrink-0 mt-0.5`} />
                                                <div>
                                                    <h4 className="text-white font-medium text-xs">{info.label}</h4>
                                                    <p className="text-gray-400 text-xs mt-1">{info.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                bg-zinc-800/50 p-3 rounded-lg border border-zinc-700 hover:border-zinc-600
                transition-all duration-500 ease-out transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                                        style={{ transitionDelay: `${(index) * 100}ms` }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <social.icon className={`w-5 h-5 transition-all duration-300 ${hoveredSocial === social.name ? 'scale-110' : ''
                                                }`} />
                                            <div>
                                                <h4 className="text-white font-medium text-xs">
                                                    {social.name}
                                                </h4>
                                                <p className="text-gray-400 text-xs mt-0.5">
                                                    {social.description}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Fun Fact */}
                            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 p-3 rounded-lg border border-zinc-600">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                    <span className="text-white font-medium text-xs">Fun Fact</span>
                                </div>
                                <p className="text-gray-300 text-xs">
                                    I reply to emails faster than I can solve a Rubik's cube (which is about 2 minutes) 🎲
                                </p>
                            </div>

                            {/* Availability */}
                            <div className="space-y-3">
                                <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4 text-orange-400" />
                                    Availability
                                </h3>
                                <div className="bg-zinc-800/30 p-3 rounded-lg border border-zinc-700">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-gray-300 text-xs">Available for new projects</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <span className="text-gray-300 text-xs">Part-time consulting available</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-gray-300 text-xs">Open to collaboration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Preferred Project Types
                            <div className="space-y-3">
                                <h3 className="text-white font-semibold text-sm">Preferred Project Types</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Full-stack web applications",
                                        "E-commerce platforms",
                                        "API development & integration",
                                        "Database design & optimization",
                                        "Cloud infrastructure setup",
                                        "Mobile-responsive design"
                                    ].map((project, index) => (
                                        <div key={index} className="flex items-center gap-2 p-2 bg-zinc-800/30 rounded-lg hover:bg-zinc-700/30 transition-all duration-300">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span className="text-gray-300 text-xs">{project}</span>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Column - Contact Form (Compact, Fixed Height) */}
                    <div className="flex flex-col min-h-0">
                        <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                                <Send className="w-4 h-4 text-green-400" />
                                <h3 className="text-white font-semibold text-base">Send me a message</h3>
                            </div>

                            <div className="flex flex-col flex-1 min-h-0">
                                <div className="flex-1 space-y-3 min-h-0">
                                    {/* Name and Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="flex items-center gap-1 text-gray-300 text-xs font-medium mb-1">
                                                <User className="w-3 h-3" />
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-1 text-gray-300 text-xs font-medium mb-1">
                                                <Mail className="w-3 h-3" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label className="flex items-center gap-1 text-gray-300 text-xs font-medium mb-1">
                                            <FileText className="w-3 h-3" />
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="flex-1 flex flex-col min-h-0">
                                        <label className="flex items-center gap-1 text-gray-300 text-xs font-medium mb-1">
                                            <MessageCircle className="w-3 h-3" />
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full flex-1 min-h-[80px] bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button and Footer */}
                                <div className="mt-3 space-y-3 flex-shrink-0">
                                    <Button
                                        type="submit"
                                        className="w-full bg-white text-zinc-900 hover:bg-zinc-200 font-medium py-2 text-sm transition-all duration-300 transform "
                                    >
                                        <Send className="w-3 h-3 mr-1" />
                                        Send Message
                                    </Button>

                                    {/* Alternative Contact Note */}
                                    <div className="p-2 bg-zinc-700/30 rounded-lg border border-zinc-600">
                                        <p className="text-gray-400 text-xs text-center">
                                            <Calendar className="w-3 h-3 inline mr-1" />
                                            Prefer a call?
                                            <a href="mailto:santiago@example.com?subject=Schedule a Call" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                                                Schedule here
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(39, 39, 42, 0.3);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(113, 113, 122, 0.6);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(113, 113, 122, 0.8);
                }
            `}</style>
        </div>
    );
}