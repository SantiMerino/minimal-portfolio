"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { experiences, skills, stack } from './data';
import { Toaster } from 'sonner';



export default function Main() {


  return (
    <section className="bg-black flex flex-col items-center justify-center min-h-screen" >
      <Toaster theme='dark' />
      <Navbar />
      <Home />
      <Footer></Footer>
    </ section>
  );
}