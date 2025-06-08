"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import GradientText from './TextAnimations/GradientText/GradientText';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
        isVisible ? <div className={`' w-full bg-black flex items-center justify-center p-4 sm:p-6' `} >
            <Card className={`
       w-full max-w-7xl bg-zinc-900 text-white p-4 sm:p-10 lg:p-14 border-none
        transition-all duration-1000 ease-out transform'}
      `}>
                <GradientText

                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={4}
                    showBorder={false}
                    className=""
                >
                    Add a splash of color!
                </GradientText>
            </Card>
        </div > : null
    );
}