"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6">
            <Card className={`
        w-full max-w-7xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 border-none
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
                Hellou
            </Card>
        </div>
    );
}