"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/components/Home';



import { Toaster } from 'sonner';



export default function Main() {


  return (
    <section className="bg-black flex flex-col items-center justify-center min-h-screen px-6" >
      <Toaster theme='dark' />
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </ section>
  );
}