"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Slide content updated with GED integration
const slides = [
    {
        image: "8.jpg",
        heading: "Global Future,\nCurated for You.",
        sub: "Premium guidance for elite universities in the UK, USA, Canada, and Australia. Your dream, our strategy.",
        tag: "Elite Admissions Consultancy"
    },
    {
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000",
        heading: "Mastering GED for\nGlobal Success.",
        sub: "Our tailored Global Education Design (GED) framework ensures you meet entry requirements for top-tier institutions worldwide with ease.",
        tag: "Academic Excellence"
    },
    {
        image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2000",
        heading: "Secure Your\nGlobal Legacy.",
        sub: "From visa assistance to scholarship navigation, we handle the complexity so you can focus on excellence.",
        tag: "Full-Cycle Support"
    },
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <img src={slides[index].image} alt="Study Abroad" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 flex h-full items-center px-6 lg:px-24">
                <div className="max-w-3xl space-y-8">

                    {/* Badge */}
                    <motion.div
                        key={`tag-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 backdrop-blur-md"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span>{slides[index].tag}</span>
                    </motion.div>

                    {/* Dynamic Headings */}
                    <div className="space-y-4">
                        <motion.h1
                            key={`head-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-bold tracking-tighter text-white md:text-8xl whitespace-pre-line"
                        >
                            {slides[index].heading}
                        </motion.h1>

                        <motion.p
                            key={`sub-${index}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-lg"
                        >
                            {slides[index].sub}
                        </motion.p>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95">
                            Apply Now <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/10">
                            Book Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-12 right-12 z-20 hidden lg:block"
            >
                <div className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                    <div className="flex flex-col items-center border-r border-white/10 pr-6">
                        <h3 className="text-2xl font-black text-white">99.9%</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Visa Success</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-black text-white">500+</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Elite Placements</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;