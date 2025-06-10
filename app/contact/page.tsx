"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';



import { Toaster } from 'sonner';



export default function Main() {


    return (
        <section className="bg-black flex flex-col items-center justify-center min-h-screen px-6" >
            <Toaster theme='dark' />
            <Navbar />
            <Contact />
            {/* <Footer /> */}
        </ section>
    );
}