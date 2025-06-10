"use client";

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';



export default function Project() {


    return (
        <section className="bg-black flex flex-col items-center justify-center min-h-screen px-6" >
            <Toaster theme='dark' />
            <Navbar />
            <Projects />
            <Footer />
        </ section>
    );
}