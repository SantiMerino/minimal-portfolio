"use client";

import Navbar from '@/components/Navbar';
import AboutCard from '@/components/About';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';



export default function About() {


    return (
        <section className="bg-black flex flex-col items-center justify-center min-h-screen px-6" >
            <Toaster theme='dark' />
            <Navbar />
            <AboutCard />
            <Footer />
        </ section>
    );
}