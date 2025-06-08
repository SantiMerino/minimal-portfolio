"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { toast } from "sonner"


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(false);
    }, []);



    return (
        <div className={`'bg-black flex items-center justify-center p-4 sm:p-6' `} >
            {/* Contact Footer */}
            <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                    Feel free to{' '}
                    <Button
                        variant="link"
                        className="text-white hover:text-gray-300 p-0 h-auto font-normal underline text-sm"

                        onClick={() => { toast.info("Email me at: santimerinoh12@gmail.com") }}

                    >
                        drop me a mail
                    </Button>
                    {' '}or check my{' '}
                    <Button
                        variant="link"
                        className="text-white hover:text-gray-300 p-0 h-auto font-normal underline text-sm"
                        asChild
                    >
                        <a href="https://www.linkedin.com/in/santiagomerinoh/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </Button>
                    {' '}and{' '}
                    <Button
                        variant="link"
                        className="text-white hover:text-gray-300 p-0 h-auto font-normal underline text-sm"
                        asChild
                    >
                        <a href="https://github.com/SantiMerino" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </Button>
                </p>
            </div>
        </div >


    );
}