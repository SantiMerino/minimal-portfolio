import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    MessageCircle, Heart, Zap, Send, User, Mail, FileText, Calendar,
    MapPin, Phone, Github, Linkedin, Twitter, Instagram
} from 'lucide-react';
import { contactInfo, socialLinks } from '@/app/data';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';


const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ScrollableContactCard() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        setIsVisible(true);
        emailjs.init(EMAILJS_PUBLIC_KEY as string);
    }, []);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID as string,
                EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject || 'New contact form message',
                    message: formData.message,
                    to_name: 'Santiago', // Your name
                },
                EMAILJS_PUBLIC_KEY as string
            );

            console.log('Email sent successfully:', result);
            toast.success('Message sent successfully! I\'ll get back to you soon.');
            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again or email me directly.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4 custom-scrollbar" id='contact'>
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

                    {/* Left Column - Header & Contact Info */}
                    <div className="flex flex-col lg:h-full lg:min-h-0">
                        {/* Header Section - Always visible */}
                        <div className="space-y-3 sm:space-y-4 flex-shrink-0 mb-4 lg:mb-6">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-xl sm:text-2xl">📬</span>
                                <span className="text-sm sm:text-lg">Get In Touch</span>
                            </div>

                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                Let&apos;s Work Together
                            </h1>

                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                Have a project in mind? Want to collaborate? Or just want to say hi?
                                I&apos;d love to hear from you. Let&apos;s create something amazing together.
                            </p>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 lg:min-h-0 lg:overflow-hidden">
                            <div className="h-full overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-600 hover:scrollbar-thumb-zinc-500">
                                <div className="space-y-4 sm:space-y-6">
                                    {/* Contact Information Cards */}
                                    <div className="space-y-3">
                                        <h3 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                            Contact Information
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {contactInfo.map((info, index) => (
                                                <div
                                                    key={info.label}
                                                    className={`
                                                        bg-zinc-800/50 p-3 sm:p-4 rounded-lg border border-zinc-700 hover:border-zinc-600
                                                        transition-all duration-500 ease-out transform 
                                                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                                                    `}
                                                    style={{ transitionDelay: `${index * 100}ms` }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <info.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${info.color} flex-shrink-0 mt-0.5`} />
                                                        <div>
                                                            <h4 className="text-white font-medium text-xs sm:text-sm">{info.label}</h4>
                                                            <p className="text-gray-400 text-xs sm:text-sm mt-1">{info.value}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="space-y-3">
                                        <h3 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                                            Connect With Me
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {socialLinks.map((social, index) => (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`
                                                        bg-zinc-800/50 p-3 sm:p-4 rounded-lg border border-zinc-700 hover:border-zinc-600
                                                        transition-all duration-500 ease-out transform hover:scale-[1.02]
                                                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                                    `}
                                                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                                                    onMouseLeave={() => setHoveredSocial(null)}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${hoveredSocial === social.name ? 'scale-110' : ''}`} />
                                                        <div>
                                                            <h4 className="text-white font-medium text-xs sm:text-sm">
                                                                {social.name}
                                                            </h4>
                                                            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                                                                {social.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Fun Fact */}
                                    <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 p-3 sm:p-4 rounded-lg border border-zinc-600">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                            <span className="text-white font-medium text-sm sm:text-base">Fun Fact</span>
                                        </div>
                                        <p className="text-gray-300 text-xs sm:text-sm">
                                            I reply to emails faster than I can solve a Rubik&apos;s cube (which is about 2 minutes) 🎲
                                        </p>
                                    </div>

                                    {/* Availability */}
                                    <div className="space-y-3">
                                        <h3 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                                            Availability
                                        </h3>
                                        <div className="bg-zinc-800/30 p-3 sm:p-4 rounded-lg border border-zinc-700">
                                            <div className="space-y-2 sm:space-y-3">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-300 text-xs sm:text-sm">Available for new projects</span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-300 text-xs sm:text-sm">Part-time consulting available</span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-300 text-xs sm:text-sm">Open to collaboration</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="flex flex-col lg:h-full lg:min-h-0">
                        <div className="bg-zinc-800/30 p-4 sm:p-6 rounded-lg border border-zinc-700 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-shrink-0">
                                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                <h3 className="text-white font-semibold text-sm sm:text-lg">Send me a message</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col flex-1 lg:min-h-0">
                                <div className="flex-1 space-y-3 sm:space-y-4 lg:min-h-0">
                                    {/* Name and Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label className="flex items-center gap-1 sm:gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                                                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300 disabled:opacity-50"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-1 sm:gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                                                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300 disabled:opacity-50"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label className="flex items-center gap-1 sm:gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            disabled={isLoading}
                                            className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300 disabled:opacity-50"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="flex-1 flex flex-col lg:min-h-0">
                                        <label className="flex items-center gap-1 sm:gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full flex-1 min-h-[80px] bg-zinc-700/50 border border-zinc-600 rounded-lg px-3 py-2 text-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:bg-zinc-700 transition-all duration-300 resize-none disabled:opacity-50"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button and Footer */}
                                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 flex-shrink-0">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-white text-zinc-900 hover:bg-zinc-200 font-medium py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin rounded-full border-2 border-zinc-900 border-t-transparent"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}